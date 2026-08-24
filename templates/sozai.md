# 素材（絵）を作る道具

**確かめた日：2026-08-22。実際に最後まで通した。**
がべ ──「**君が使えるエンジンとかあるの？絵描きソフトとか**」

---

## 1. この環境に在るもの・無いもの

| | |
|---|---|
| **走らせるもの** | node 22 / bun / python3（pip 可）／go / cargo / java |
| **見るもの** | **Playwright ＋ Chromium。**撮って自分で見る（`shot.mjs`） |
| **外に出られるか** | **npm も pip も通る。**PixiJS・Phaser・three.js・Pillow は入れられる |
| **絵描きソフト** | **一つも無い。**Godot / Blender / Inkscape / GIMP / Krita / Aseprite / ImageMagick / ffmpeg、全部無い |
| **画面（GUI）** | **無い。**GUIエディタを持つエンジンは、入っても操作できない |

> **いちばん大事な限界。**
> **Claude は絵を「手で描く」ことができない。**マウスで線を引けない。
> できるのは**コードで形を書くこと**だけ。Pillow で PNG を作っても、それは同じこと。

---

## 2. Canva から素材を取る道（**通した。動く**）

### 通し方

1. `generate-design` … **`design_type` を `logo` にする**
2. `create-design-from-candidate` … 候補を design にする
3. `export-design` … `{type:'png', width, height}`
4. 返ってきた URL を `curl` で落とす
5. **白を抜く**（下の道具）

### **`logo` にすること。`poster` はだめ**

| design_type | 出てくるもの |
|---|---|
| **`logo`** | **文字なしの単体の絵。**太い暗い輪郭、平たい色。**素材として使える** |
| `poster` | **売り文句と日付と住所とボタンが付いたチラシ。**「文字を入れるな」と書いても入る |

### 透過は書き出せない

> **"Users on the Canva Free plan can not export PNGs with transparent background."**

**背景が純白なので、四隅から塗りつぶして抜ける。**帆のような**内側の白は残る**（外から届かないため）。

```python
from PIL import Image
import collections
im=Image.open(src).convert('RGBA'); px=im.load(); w,h=im.size
seen=[[False]*h for _ in range(w)]; q=collections.deque()
for x in range(w): q.extend([(x,0),(x,h-1)])
for y in range(h): q.extend([(0,y),(w-1,y)])
TH=232                                  # これ以上明るい画素を背景とみなす
while q:
    x,y=q.popleft()
    if x<0 or y<0 or x>=w or y>=h or seen[x][y]: continue
    r,g,b,a=px[x,y]
    if r<TH or g<TH or b<TH: continue
    seen[x][y]=True; px[x,y]=(r,g,b,0)
    q.extend([(x+1,y),(x-1,y),(x,y+1),(x,y-1)])
im.crop(im.getbbox()).save(dst)
```

**海の色の上に置いて確かめた。縁は汚れない。**

---

## 3. まだ確かめていないこと（**使う前に確かめる**）

- **揃うかどうか。**船・島・都市・特産品を**同じ手つきで一揃い**出せるかは試していない。
  一枚ずつはきれいでも、並べたときに画風がばらつくと使えない
- **使ってよいかどうか。**書き出した絵をゲームに載せて配ってよいかは、
  **Canva の利用条件の話であって、こちらでは決められない**
- **書き出しの大きさと枚数の上限**

---

## 4. エンジンについて

`gamedev/references/engines-2d.md` に調べた結果がある。要点だけ ──

- **PixiJS（約200KB）・Phaser（約500KB）は npm から入る。実際に使える**
- **Godot は GUI エディタなので、この環境では使えない**（配布も 403 で弾かれた）
- **平たい・輪郭が太い・色数が少ない画風は、シェーダも法線も光源も使わない。
  エンジンの効き目がいちばん薄い画風である**
