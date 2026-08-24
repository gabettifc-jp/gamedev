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

---

## 8. 数値（2026-08-22に追記）

**第7節まで、この文書には数値が一つも無かった。**「作り込みすぎない」を数値だと思って
面を320まで落としたら「安っぽすぎる」と言われたので、数を取りに行った。

### ポリゴン数の相場

| もの | 数 | 出どころ |
|---|---|---|
| モバイルの**主役級キャラ** | **3,000〜10,000 三角形**（2023年以降の実用域） | https://cgaxis.com/polygon-count-guide-how-many-polys-do-you-really-need-in-2026/ |
| 同上・中位Androidで60fpsを保つなら | **5,000三角形未満** | 同上 |
| **原神** LOD0 | **15,000〜20,000 三角形** | https://polycount.com/discussion/230521/how-many-polys-should-character-models-have-in-a-mobile-game |
| **アイドリープライド** | **1体 27,000〜28,000ポリゴン**。テクスチャ**最大2,048px を1体30枚** | https://cgworld.jp/feature/202107-idolypride.html |
| **禍つヴァールハイト** | 背景 1エリア **7〜8万ポリゴン**。テクスチャ **512か1,024**（実機で1/4に） | https://cgworld.jp/feature/201905-cgw250-hs3maga.html |
| 日本語圏の一般的な目安（スマホ向けローポリ） | **5,000〜10,000ポリゴン** | https://pomeranist.com/game-polygon-approximate/ |
| **樽・木箱などの小物** | **500ポリゴン以下** ／ 背景の小物 100〜800三角形 | https://cgaxis.com/polygon-count-guide-how-many-polys-do-you-really-need-in-2026/ |
| 画面全体 | **5万三角形が出発点。10万以下** | 同上 |

### テクスチャ解像度の相場

- 近づける小物 **1,024**／高い所にあるもの **512**
- 主役級キャラや一人称の武器 **2,048**／NPCや三人称の武器はもっと小さく
- 出どころ：https://polycount.com/discussion/75469/texture-res-vs-polycount

### 「安っぽさ」の正体（ここがいちばん効く）

> **いまの低ポリが良く見えるのは、低い形状と高い描画を組み合わせているから**
> （"combines **low fidelity geometry with high fidelity rendering**"）。
> 昔の低ポリが安く見えたのは、**ライティングもノーマルマップも無く、
> 全部を低解像度のテクスチャに焼くしかなかったから。**
> **最小のポリゴンで形を決め、そこに normal map・occlusion map・テクスチャ・
> ライティングの技を足して、細かく見せる。**
> ── https://www.gamedeveloper.com/design/how-to-make-low-poly-look-good

**つまり安っぽさの原因はポリゴン数ではなく、面の上に何も乗っていないこと。**

### 第6節の表を、数値で訂正する

| 相場 | こちらの読み違い |
|---|---|
| 「作り込みすぎない」は**彫り込みの話**で、ポリゴン数の話ではない | **面数を落とす指示だと読んだ**（1,600→320） |
| 主役は 3,000〜10,000三角形 | **640三角形（樽の相場）で主役の船を作った** |
| 低い形状＋**高い描画**（テクスチャ・AO・法線・影） | **描画装置がテクスチャを一枚も持っていない。**面の単色とグラデーションだけ |

---

## 9. 硬さとポップさは、どこから来るか（2026-08-22に追記）

**「なんかちょっと硬い」と言われて調べた。**研究がある層と、相場の層が混ざっている。

### ① 輪郭の曲率 ── いちばん深い層。研究がある

出どころ：Bar & Neta, *Visual elements of subjective preference modulate amygdala activation*,
Neuropsychologia (2007) https://pubmed.ncbi.nlm.nih.gov/17462678/ ／
本文PDF https://canlab.unl.edu/sites/unl.edu.cas.psychology.cognitive-and-affective-neuroscience/files/media/file/BarNetaNeuropsych2007.pdf

- **人は、尖った輪郭の物より丸い輪郭の物を好む**
- **尖った日用品**（角のあるソファなど）は、同じ物の丸い版より**扁桃体が有意に強く活性化する。**
  扁桃体は恐れの処理に関わる部位
- 著者の解釈：**尖りを「潜在的な脅威」として読んでいる。**
  輪郭の曲率を、危険を知らせる早期警報として使うように進化した
- **この差は、低空間周波数（ぼかした像）のほうが大きい。**
  低空間周波数は高空間周波数より速く処理される
  → **細部ではなく、大きな輪郭の丸さで決まっている。速い段階で判定されている**

> **細部をいくら丸めても効かない。効くのは、目を細めても残る大きな輪郭。**

**人間だけではない。**大型類人猿も曲線を好む
（https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0141106 ）。文化の問題ではない。

### ② 形の言語

出どころ：https://blog.cg-wire.com/character-shape-language/ ／ https://pixune.com/blog/shape-language-technique/

| 形 | 読まれ方 |
|---|---|
| **円** | 親しみ・柔らかい・無邪気・安全 |
| **四角** | 安定・強い・頼れる。**同時に、頑固で重い** |
| **三角** | 危険・鋭い・活発・狡い。**方向と動きを持つ** |

### ③ ハイライトの広さ＝材質の硬さ

出どころ：https://joanieraysimon.substack.com/p/controlling-specular-highlights-lighting

- **滑らかな面ほど、狭く鋭いハイライト。粗い面ほど、広く淡いハイライト**
- **光源が大きいほど柔らかく広がり、小さいほど鋭く締まる**
- 大きな柔らかい面光源＝「ゆるやかに広がる照り」／小さいスポット＝「小さく強い蹴り」

> **細い明るい線を引くのは、小さい光源を置くのと同じこと。それは硬さの記号になる。**

### ④ 動き（juice）

出どころ：https://www.gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design- ／
https://gamejuice.co.uk/articles/disney-12-animation-principles-games

- **「画面が墓場のように静止していたら、そのゲームは死んで感じられる」**
- **アイドル・アニメーションは「凍っていない」ことをプレイヤーに伝える**
- **スクワッシュ＆ストレッチ**は、目に**重さとエネルギー**として読まれる
- **二次動作**（髪・布・旗が、主動作に引きずられて動く）

### こちらが入れていた硬さ（照らし合わせ）

| 層 | こちらがやっていたこと |
|---|---|
| ① 大きな輪郭 | **船楼を四角い箱**にした（「箱っぽく」を大きな輪郭に適用してしまった） |
| ② 形の言語 | 四角（船楼）＋三角（帆・旗）に寄せた。**円がほとんど無い** |
| ③ 光 | 縁に**細い明るい線**を引いた（見本10の②）。小さい光源＝硬い |
| ④ 動き | **完全に静止。**ゆっくり回るだけ |

> **「箱っぽく」（Supercell）は小物と建物の話で、しかも単純な色のグラデーションと対になっている。
> 主役の大きな輪郭に適用すると、硬さになる。**
