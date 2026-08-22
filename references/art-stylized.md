# ポップな3D（スマホゲーム調）の絵の作り方

調べた日：2026-08-22
調べた理由：**spice-lanes の見た目で、こちらが四回続けて外した。**
`templates/mihon.md`「〜ってどうなってるの と聞かれたら、外を調べる。調べた結果を選択肢にする」に従って調べた。

**ゲームをまたいで効くので `references/` に置く。**

---

## 0. いちばん効いた一行

> **真っ黒のシルエットにして見分けがつかないなら、形の言語が失敗している。
> どれだけ質感を磨いても取り返せない**
> （原文：a silhouette study at 100% black against white background is the first acceptance test —
> if the character isn't recognizable as a black silhouette, the shape language has failed and
> **no amount of texture polish will recover it**）
> ── https://nastyrodent.com/stylized-3d-characters-art-direction-principles/

**こちらは、この一行が名指しで否定している作業をしていた**（見本8で質感を16通り作った）。

---

## 1. Supercell（Clash of Clans / Clash Royale）── 作り手の言葉

出どころ：https://magazine.substance3d.com/supercell-helsinki-creating-stylized-content-for-clash-of-clans-and-clash-royale/

| 言っていること | 原文 |
|---|---|
| **PBRを使うが、多くの点で壊す** | "We use the PBR workflow but **break the PBR in many ways**." |
| **実物よりラフにする。**金属でさえ、そのほうが色のグラデーションが出る | "We tend to **make materials rougher than in real life** just to give that nicer color gradient even for the metals." |
| **アルベドは単純に。色の変化は二つか三つ** | "Keeping the albedo simple with **just a couple of color variations**." |
| **小物と建物は箱っぽく。**そこへ単純な色のグラデーションを添える | "props and buildings got more of a **boxy look** that we complemented with **simpler color gradients**." |
| **作り込みすぎない** | "It's easy to go overboard with crazy sculpting and detailing, so **I try to avoid it**." |
| 細部は**控えめで、とても局所的に** | keeps "details **subtle and very local**" |

> **「単純に保つのは、言うのは簡単だが、体得するのは難しい」**
> （"Keeping things simple is easy to say but hard to master."）

---

## 2. 読みやすさの六つの柱（Matt McDaid）

出どころ：https://80.lv/articles/matt-mcdaid-mastering-the-stylized-art

> **Scale & proportions／Silhouette／Lighting／Color／Exaggeration／Composition**

| 言っていること | 原文 |
|---|---|
| **小さい細部は、大きくて読みやすい一つにまとめる** | "**consolidate the smaller details into larger, more readable ones**" |
| 二つ描くなら、**大きくて塊のあるものを二つ**にする | "maybe just paint **2 larger, chunkier ones** instead?" |
| **値の構造が命。**明るく楽しい絵なら、値域は明るいほうに寄せる | "a dark stylized horror will require the darkest values. Conversely if the game has a happy, bright, whimsical vision then your textures will mostly consist of **brighter values**." |

---

## 3. 形の言語（主・副・禁じ手）

出どころ：https://nastyrodent.com/stylized-3d-characters-art-direction-principles/

- **主形状**を一つ決める（球／立方体／円柱／円錐／角錐のどれか）。**これが読みを決める**
- **副形状**を一つ、差し色のように使う
- **禁じ手の形**を一つ決める（それを入れると読みが壊れる形）
- **記憶に残る意匠は、三つの原形のうち二つのあいだに緊張がある**
- 読みをいちばん壊すのは、**値とラフネスのコントラストが低いこと**と、**細かい三次ディテールが全面にあること**

---

## 4. 低ポリ／ポップの相場

出どころ：https://retrostylegames.com/blog/low-poly-game-art-an-ultimate-guide/ ／
https://www.tripo3d.ai/blog/explore/low-poly-3d-art-style-guide

- **誇張する。**帆船なら「**帆をもっと大きく**」「大砲をもっと目立たせる」「船体をもっと曲線的に」
- **フラットな色と単純なグラデーション**。複雑なテクスチャに頼らない
- **材質は一つのモデルにつき2〜3種まで**
- 遠くからでも見えるように、**大事なものだけを立てる**

---

## 5. 日本語圏（セルルック・デフォルメ）

出どころ：https://www.pixivision.net/ja/a/8418 ／ https://10-5.jp/blog-tenfive/3459/

- **頭身を低くして、要素を大きくし、体から浮かせる。**シルエットを分かりやすくするため
- ポリゴン数や頭身は**先に決めず、全体のシルエットから映えるかを後で見る**
- モバイルは**ライティングを抑え、色彩表現を優先**するセルルックが使われる（ウマ娘・白猫）

---

## 6. こちらが外していた点（照らし合わせ）

| 相場 | こちらがやっていたこと |
|---|---|
| シルエットで決まる。質感では取り返せない | **質感を16通り作った**（見本8） |
| 細部は大きくまとめる | **面を約900→約4,300に増やした**（見本6） |
| 色の変化は二つか三つ | 配色を六つ作り、面ごとに色を散らした |
| 箱っぽい形＋単純なグラデーション | なめらかな曲面＋グーロー陰影に寄せた |
| 帆をもっと大きく | 船体を先に作り、帆は後から比率で決めた |
| **シルエット検査が最初の関門** | **一度もやっていない** |

---

## 7. 拾えなかったもの

- **Sea of Thieves と風のタクトの、船の比率の作り手資料。**言い方を三通り変えたが、
  船体と帆の比率を数値で語った一次資料に届かなかった（Rare の Comic-Con 2016 の講演が在るらしいが本文は取れず）
- **Supercell のポリゴン数・テクスチャ解像度。**記事に数値は無い
- **輪郭線（アウトライン）の相場。**McDaid の記事には縁の扱いの記述が無かった
