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
const declared = new Set();                   // 「開けなかった」と自分で書いてある URL
for (const f of readdirSync(DIR).filter(n => n.endsWith('.md'))){
  const body = readFileSync(join(DIR, f), 'utf8');
  // 見出しが「開けなかった／読めなかった」の節に在る URL は、**集めた側が自分で申告している**。
  // それを落とすと検査がいつも落ち、やがて誰も見なくなる（2026-08-21）
  let dead = false;
  // 閉じ括弧は原則ここで切るが、**開き括弧が先に在るときは URL の一部**として拾う。
  // Wikipedia の .../Guitar_Hero_(video_game) を切ってしまい、404 と誤って報告した（2026-08-21）
  // **アポストロフィは URL の一部**（.../Boghog's_bullet_hell_shmup_101）。
  // 除いていたせいで途中で切れ、404 と誤って報告した（2026-08-21・二度目の同じ穴）
  for (const line of body.split('\n')){
   if (/^#{1,6}\s/.test(line)) dead = /開けなかった|読めなかった|取れなかった/.test(line);
   for (const m of line.matchAll(/https?:\/\/[^\s\]<>）」]+/g)){
    let u = m[0].replace(/["'.,、。]+$/, '');
    while (u.endsWith(')') && (u.split('(').length - 1) < (u.split(')').length - 1)) u = u.slice(0, -1);
    const cut = u.indexOf(')');
    if (cut >= 0 && !u.slice(0, cut).includes('(')) u = u.slice(0, cut);
    if (dead){ declared.add(u); continue; }
    if (!urls.has(u)) urls.set(u, []);
    urls.get(u).push(f);
   }
  }
}
if (!urls.size){
  console.log('references/ に URL が一つも無い。');
  console.log('**出どころを URL で残していない**ので、開くかどうかを確かめられない。');
  process.exit(1);
}
console.log(`URL ${urls.size} 件を確かめる`
  + (declared.size ? `（ほかに「開けなかった」と自分で書いてある ${declared.size} 件は見ない）` : '') + '\n');
let bad = 0;
const check = async u => {
  try{
    const r = await fetch(u, {redirect:'follow', signal: AbortSignal.timeout(15000)});
    return r.status;
  }catch(e){ return e.name === 'TimeoutError' ? '時間切れ' : '繋がらない'; }
};
// **「無い」と「見せてもらえない」を分ける。**
// 403・429・5xx・時間切れは先方の都合で、こちらが直せない。ここで落とすと
// **検査がいつも落ちるようになり、やがて誰も見なくなる。**
// 落とすのは 404 と、名前が引けないもの＝**出どころが幻の疑いがあるものだけ**。
const GHOST = st => st === 404 || st === 410 || st === '繋がらない';
const rows = await Promise.all([...urls.keys()].map(async u => [u, await check(u)]));
let gray = 0;
for (const [u, st] of rows){
  const ok = typeof st === 'number' && st < 400;
  const ghost = GHOST(st);
  if (ghost) bad++; else if (!ok) gray++;
  console.log(` ${ok?'○':ghost?'×':'△'} ${String(st).padEnd(6)} ${u}   （${urls.get(u).join('/')}）`);
}
console.log(`\n○ 開いた ${rows.length-bad-gray}／△ 見せてもらえない ${gray}（403・429・5xx・時間切れ。先方の都合）`);
console.log(bad ? `**× 無い URL が ${bad} 件。出どころが幻の疑い**` : '**× 無い URL は0件**');
process.exit(bad ? 1 : 0);
