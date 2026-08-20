#!/usr/bin/env node
/* シートの照合器。二つを見る。
   1) tools/sheets.html の写し ↔ templates/sheets/ の本体
   2) genre/*.md の相場表の一行め ↔ 参照先のシートの問い（逐語）

   使い方： node tools/check-sheets.mjs
   合っていれば 0、ずれていれば 1 を返す。 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SHEETS = join(ROOT, 'templates/sheets');
let bad = 0;
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
const gdir = join(SHEETS, 'genre');
for (const g of readdirSync(gdir).filter(f => f.endsWith('.md') && f !== 'README.md')) {
  const lines = readFileSync(join(gdir, g), 'utf8').split('\n');
  let n = 0;
  for (const l of lines) {
    const m = l.match(/^\|\s*(\d\d)「(.+?)」\s*\|/);
    if (!m) continue;
    n++;
    const [, num, quoted] = m;
    const file = files.find(f => f.startsWith(num));
    const qs = file ? qOf(file) : null;
    if (!qs) { ng(`${g}: ${num} というシートが無い`); continue; }
    if (qs.some(q => strip(q) === strip(quoted))) continue;
    ng(`${g}: ${num}「${strip(quoted).slice(0, 30)}…」が ${file} に無い`);
  }
  if (n) ok(`${g}（${n}行を照合）`);
}

console.log(bad ? `\nずれ ${bad} 件` : '\nずれなし');
process.exit(bad ? 1 : 0);
