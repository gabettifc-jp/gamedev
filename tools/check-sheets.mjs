#!/usr/bin/env node
/* シートの照合器。三つを見る。
   1) tools/sheets.html の写し ↔ templates/sheets/ の本体
   2) genre/*.md の相場表の一行め ↔ 参照先のシートの問い（逐語）
   3) **行き先が空の問いを数える。**シートは索引なので、
      行き先が空＝**仕様書に入らなかった問い**である。

   使い方：
     node tools/check-sheets.mjs                 テンプレート自体を見る
     node tools/check-sheets.mjs <シートの置き場>  ゲームのシートの 3) だけを見る
       （例： node ../gamedev/tools/check-sheets.mjs sheets ）

   1) 2) が合っていれば 0、ずれていれば 1 を返す。
   **3) は数えるだけで、落とさない。**空いていること自体は誤りではない。
   誤りなのは、空いているのに気づかないまま先へ進むことである。 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SHEETS = join(ROOT, 'templates/sheets');
const ARG = process.argv[2] || null;   // ゲームのシートの置き場
let bad = 0;
if (ARG) {
  // ゲームのシートを見るとき。写しも相場表も無いので、3) だけ。
  // countBlank は関数宣言なので、ここから呼べる
  countBlank(ARG, `行き先が空の問い（${ARG}）`);
  process.exit(0);
}
const ng = (...a) => { bad++; console.log('  ✗', ...a); };
const ok = (...a) => console.log('  ✓', ...a);

/* --- 1) 道具の写しと本体 --------------------------------------------- */
console.log('道具の写しと、シート本体');
const html = readFileSync(join(ROOT, 'tools/sheets.html'), 'utf8');
const copies = [...html.matchAll(
  /<script type="text\/plain" data-sheet="([^"]+)">\n([\s\S]*?)<\/script>/g)];
const files = readdirSync(SHEETS).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
if (copies.length !== files.length)
  ng(`写しは${copies.length}枚、シートは${files.length}枚`);
for (const f of files) {
  const c = copies.find(m => m[1] === f);
  if (!c) { ng(`${f} の写しが道具に無い`); continue; }
  const a = c[2].replace(/\n$/, ''), b = readFileSync(join(SHEETS, f), 'utf8').replace(/\n$/, '');
  if (a === b) ok(f);
  else ng(`${f} の写しが本体とちがう`);
}

/* --- 2) ジャンルシートの相場表と、参照先の問い ------------------------ */
console.log('\nジャンルシートの相場表と、参照先の問い');
const qOf = f => {
  const p = join(SHEETS, f);
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8').split('\n')
    .filter(l => /^\|/.test(l) && !/^\|[\s:\-|]+\|$/.test(l))
    .map(l => l.split('|')[1].trim())
    .filter(q => q && q !== '問い');
};
const strip = s => s.replace(/\*\*/g, '').trim();
// **ジャンルシートと横断シートの両方を見る。**
// across/ を作ったとき、照合器が見ていなかった（2026-08-21）。
// 表が増えたのに検査が増えないと、**新しい表だけ黙って通る**
const dirs = ['genre', 'across'].filter(d => existsSync(join(SHEETS, d)));
const targets = dirs.flatMap(d =>
  readdirSync(join(SHEETS, d)).filter(f => f.endsWith('.md') && f !== 'README.md')
    .map(f => [d + '/' + f, join(SHEETS, d, f)]));
for (const [g, gpath] of targets) {
  const lines = readFileSync(gpath, 'utf8').split('\n');
  let n = 0, skipped = 0, inSoba = false;
  for (const l of lines) {
    if (/^##\s/.test(l)) inSoba = /相場/.test(l);
    // 「」のあとに補足（（買ったとき）など）が付いてもよい
    const m = l.match(/^\|\s*(\d\d)「(.+?)」[^|]*\|/);
    if (!m) {
      // 相場の表のなかで、シートを指していない行を数える。**黙って飛ばさない**
      if (inSoba && /^\|/.test(l) && !/^\|[\s:\-|]+\|$/.test(l)
          && !/どのシートの/.test(l)) skipped++;
      continue;
    }
    n++;
    const [, num, quoted] = m;
    const file = files.find(f => f.startsWith(num));
    const qs = file ? qOf(file) : null;
    if (!qs) { ng(`${g}: ${num} というシートが無い`); continue; }
    if (qs.some(q => strip(q) === strip(quoted))) continue;
    ng(`${g}: ${num}「${strip(quoted).slice(0, 30)}…」が ${file} に無い`);
  }
  if (n) ok(`${g}（${n}行を照合${skipped ? `／シートを指していない行 ${skipped}` : ''}）`);
}

/* --- 3) 行き先が空の問い ---------------------------------------------- */
// シートは索引で、答えの置き場ではない。
// **行き先の欄が空の行は、仕様書のどこにも入らなかった問いである。**
// これを機械で数えられることが、シートを残す理由そのもの
//（templates/sheets/README.md「シートは索引であって、答えの置き場ではない」）。
function countBlank(dir, label) {
  const fs = readdirSync(dir).filter(f => /^\d\d-.*\.md$/.test(f)).sort();
  let tot = 0, blank = 0, noWhy = 0;
  const per = [];
  for (const f of fs) {
    const lines = readFileSync(join(dir, f), 'utf8').split('\n');
    let col = -1, why = -1, t = 0, b = 0, w = 0;
    for (const l of lines) {
      if (!/^\|/.test(l)) { col = -1; continue; }          // 表が切れたら見失う
      const cells = l.split('|').slice(1, -1).map(c => c.trim());
      if (/^[\s:\-|]+$/.test(l.replace(/\|/g, '|'))) continue;
      const hdr = cells.map(c => c.replace(/\*\*/g, ''));
      if (hdr[0] === '問い') { col = hdr.indexOf('行き先'); why = hdr.indexOf('根拠'); continue; }
      if (col < 0 || !cells[0]) continue;
      if (/^[\s:\-]+$/.test(cells[0])) continue;
      t++;
      const v = (cells[col] || '').trim();
      if (!v) b++;
      else if (why >= 0 && !(cells[why] || '').trim()) w++;
    }
    if (t) per.push([f, t, b, w]);
    tot += t; blank += b; noWhy += w;
  }
  console.log(`\n${label}`);
  for (const [f, t, b, w] of per)
    console.log(`  ${b === 0 && w === 0 ? '　' : '！'} ${f}  問い${t}／行き先が空 ${b}／根拠が空 ${w}`);
  console.log(`  合計 問い${tot}／**行き先が空 ${blank}**（＝仕様書に入らなかった問い）／根拠が空 ${noWhy}`);
  return { tot, blank, noWhy };
}

countBlank(SHEETS, '行き先が空の問い（テンプレート自体。空で正しい）');

console.log(bad ? `\nずれ ${bad} 件` : '\nずれなし');
process.exit(bad ? 1 : 0);
