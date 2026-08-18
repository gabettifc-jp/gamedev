/* ============================================================================
   シートを埋める道具を、ファイルに保存できる形で出す小さなサーバー。
   Node だけ。外部依存なし。

   使い方
     node tools/serve.mjs ../fishing-inc/sheets
     node tools/serve.mjs ../fishing-inc/sheets --port=5173

   置き場を指定して開くと、書き込んだ内容がそのままその場所の
   00-kihon.md 〜 08-input.md に保存される。無ければ作る。
   127.0.0.1 にだけ開く。指定した置き場の外は読み書きしない。
   ========================================================================== */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HTML = path.join(HERE, 'sheets.html');

const args = process.argv.slice(2);
const flag = (k, d) => {
  const a = args.find(x => x.startsWith('--' + k + '='));
  return a ? a.split('=').slice(1).join('=') : d;
};
const dirArg = args.find(a => !a.startsWith('--'));
if (!dirArg) {
  console.error('置き場を指定する。例：node tools/serve.mjs ../fishing-inc/sheets');
  process.exit(1);
}
const DIR = path.resolve(process.cwd(), dirArg);
const PORT = parseInt(flag('port', '5173'), 10);

// 扱うファイルは、templates/sheets/ にある名前だけ
const TEMPLATES = path.join(HERE, '..', 'templates', 'sheets');
const NAMES = fs.readdirSync(TEMPLATES).filter(f => /^\d\d-.+\.md$/.test(f)).sort();

fs.mkdirSync(DIR, { recursive: true });

const send = (res, code, type, body) => {
  res.writeHead(code, { 'content-type': type, 'cache-control': 'no-store' });
  res.end(body);
};
const readBody = req => new Promise((ok, ng) => {
  let b = ''; let n = 0;
  req.on('data', c => { n += c.length; if (n > 2e6) { ng(new Error('大きすぎる')); req.destroy(); } b += c; });
  req.on('end', () => ok(b));
  req.on('error', ng);
});

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://127.0.0.1');
  try {
    if (req.method === 'GET' && (u.pathname === '/' || u.pathname === '/sheets.html')) {
      return send(res, 200, 'text/html; charset=utf-8', fs.readFileSync(HTML));
    }
    // 置き場にあるシートを、ファイル名→中身 で返す
    if (req.method === 'GET' && u.pathname === '/api/sheets') {
      const out = { dir: DIR, files: {} };
      for (const n of NAMES) {
        const p = path.join(DIR, n);
        if (fs.existsSync(p)) out.files[n] = fs.readFileSync(p, 'utf-8');
      }
      return send(res, 200, 'application/json; charset=utf-8', JSON.stringify(out));
    }
    // 一枚を保存する
    if (req.method === 'PUT' && u.pathname === '/api/sheet') {
      const f = u.searchParams.get('f') || '';
      if (!NAMES.includes(f)) return send(res, 400, 'text/plain; charset=utf-8', '知らないファイル名');
      const body = await readBody(req);
      const p = path.join(DIR, f);
      if (path.dirname(p) !== DIR) return send(res, 400, 'text/plain; charset=utf-8', '置き場の外');
      fs.writeFileSync(p, body, 'utf-8');
      const t = new Date().toTimeString().slice(0, 8);
      console.log(t + '  保存 ' + path.relative(process.cwd(), p));
      return send(res, 200, 'application/json; charset=utf-8', JSON.stringify({ ok: true, at: t }));
    }
    send(res, 404, 'text/plain; charset=utf-8', '無い');
  } catch (e) {
    send(res, 500, 'text/plain; charset=utf-8', String(e && e.message || e));
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('シートの置き場： ' + DIR);
  console.log('開く：           http://127.0.0.1:' + PORT + '/');
  console.log('扱うファイル：   ' + NAMES.join(' '));
  console.log('止める：         Ctrl+C');
});
