/* references/ に書かれた URL が本当に開くかを見る。

   調べる役目を別のエージェントに渡すと、**出どころが幻になる**ことがある。
   公開されている測定では、深い調査をさせたときに
   **URL の 3〜13% が存在しないもので、5〜18% は開かない**（arXiv 2605.06635）。
   出どころの記号だけ残して中身を捨てていた今までは、これを確かめる手段が無かった。

     node tools/check-refs.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = dirname(fileURLToPath(import.meta.url));
const DIR  = join(HERE, '..', 'references');

if (!existsSync(DIR)) { console.log('references/ が無い'); process.exit(0); }

const urls = new Map();                       // url -> [file, ...]
for (const f of readdirSync(DIR).filter(n => n.endsWith('.md'))){
  const body = readFileSync(join(DIR, f), 'utf8');
  for (const m of body.matchAll(/https?:\/\/[^\s)\]<>"'）」]+/g)){
    const u = m[0].replace(/[.,、。]+$/, '');
    if (!urls.has(u)) urls.set(u, []);
    urls.get(u).push(f);
  }
}
if (!urls.size){
  console.log('references/ に URL が一つも無い。');
  console.log('**出どころを URL で残していない**ので、開くかどうかを確かめられない。');
  process.exit(1);
}
console.log(`URL ${urls.size} 件を確かめる\n`);
let bad = 0;
const check = async u => {
  try{
    const r = await fetch(u, {redirect:'follow', signal: AbortSignal.timeout(15000)});
    return r.status;
  }catch(e){ return e.name === 'TimeoutError' ? '時間切れ' : '繋がらない'; }
};
const rows = await Promise.all([...urls.keys()].map(async u => [u, await check(u)]));
for (const [u, st] of rows){
  const ok = typeof st === 'number' && st < 400;
  if (!ok) bad++;
  console.log(` ${ok?'○':'×'} ${String(st).padEnd(6)} ${u}   （${urls.get(u).join('/')}）`);
}
console.log(bad ? `\n開かない URL が ${bad} 件` : '\n全部開いた');
process.exit(bad ? 1 : 0);
