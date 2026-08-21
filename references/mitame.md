# ゲームの見た目 ── 生の記録

調べた日：2026-08-21
調べた者：genre-research（実装・spec を読まずに、ネットのみから収集）
題：「ゲームの見た目」（ジャンルではない）

分野の番号は依頼の八つに対応する。

1. 値（明度）の構造
2. パレットの規律
3. 読みやすさ
4. 密度と粒の揃え方
5. 画面の重み付け
6. 動き
7. 少ない手数で見られるものにする道
8. 遊んだ人の「安っぽい」「見づらい」の中身

各件：**出どころ（URL・書いた人・いつのもの）／原文に近い書き起こし／分野**。

---

## 001. Pixel Parmesan「Color Theory for Pixel Artists: It's All Relative」

- URL: https://pixelparmesan.com/blog/color-theory-for-pixel-artists-its-all-relative
- 書いた人：Pixel Parmesan（Rachel / pixel artist、ブログ主）
- 分野：**1（値の構造）／2（パレットの規律）**

書き起こし（原文に近い形）：

> "Color is relative—that is, relative to the light and to the other colors surrounding it."

色の三属性は hue（色の家族）／saturation（色相の純度）／value（黒と白の含有量）。そのうえで
「perceived value（luminance）は value 単独よりさらに本質的であり、三属性すべてに依存する」。

三つの色の呼び分け：
- local color … 周囲との相対で推測される、その物の色
- absolute color … 表面から直接スポイトで拾った実際の色
- relative color … 色順応（chromatic adaptation）を通して見えている色

明→暗のグラデーションについて：

> "The saturation increases and then decreases again, while the value increases linearly and the hue stays almost entirely constant"

→ 中間調（midtone）はハイライトや影より**彩度の上限が高い**。色相ごとに彩度がピークになる明度が違う（黄は高い明度で、青は低い明度でピーク）。

配分の目安（**数値**）：

> 支配色を一つ、アクセント色は画像の "maybe 10-20%"、残りを副次色にする

グレーについて：

> "Greys tend to appear as the relative complement of the surrounding absolute."

グレーは色ランプの中で "versatile interpolators"／"neutralizers" として働く。

**hue-shifting という技法名への否定**：色の全属性は光との相互作用で自然にずれるのであって、
「hue-shifting」を独立した技法として教えるのは色の関係を単純化しすぎている、と主張。
"warm"／"cool" も色相環上に科学的定義がなく、"relatively cool or relatively warm" と考えるほうが役に立つ。

パレットを先に作ることへの否定（**相場が割れている点**）：

> "Building color ramps before starting your piece is sort of like going to the grocery store to buy ingredients before you know what recipe you want to make."

既成パレットを使っても、value の関係が正しくなければ良い結果は保証されない。著者は
**制作前ではなく制作中に**パレットを組み立てるのが常だと書いている。

ピクセルアート固有の制約：滑らかなグラデーションを出せないので、**形（form）をモデリングするより、
光の状況を色のずれで伝えるほうが実現しやすい**。モデリング要素は banding と pillow shading を
避けるために圧縮しなければならない。terminator（光から影への変わり目）はピクセルアートでは
繊細に表現しづらい。

---

## 002. note「ドット絵と色について」有織はべり

- URL: https://note.com/ari_ori/n/nba020af67bab
- 書いた人：有織はべり（note）
- 分野：**1（値の構造）／2（パレットの規律）**

書き起こし：

彩度・コントラストが低すぎる場合（「グレーみが強いパターン」）：

> 「小さいサイズで表示するドット絵は、こういう色使いをするとぼんやり見えてしまいがち」

改善方法として、彩度とコントラストを上げること、無彩色（白・黒・グレー）を避け
「ほんのりでも色味のある色を使うのがおすすめ」。

色相の変化がない場合：髪色の例で、明るい順に「黄緑→青緑→水色と変化」させる。
「ベースの色と陰影の色相をずらすと、よい印象に見えやすい」。

結論の三点：

> ・無彩色を使わない
> ・コントラストを強める
> ・色相をずらす

**数値は無し**（この記事には具体的な色数・数値の記載が無い）。

---

## 003. NO システム, NO ライフ「ドット絵で使う色数の違いで見た目がどのように変わるのか」

- URL: https://nosystemnolife.com/pixelart_colornum/
- 書いた人：ブログ主（日本語）
- 分野：**2（パレットの規律）**

同じ壁のタイルを色数を変えて描き比べた実験記事。

- **2色**：「シンプルな壁」。基本的な形状のみ
- **4色**：「光が当たっている感じにして明暗をつけて立体感を出します」→「ダンジョン感が出ます」
- **さらに多色**：「S(彩度)とV(明度)をずらした色をいくつか作成して、モザイクっぽくなるように」
  →「拡大した状態だと微妙ですが、実寸だとダンジョン感が強くなります」

まとめ：

> 「色を増やすほど微調整が大変ですが、リアル感はでますね」
> 「個人的にはドット絵ゲームだと少なめの色で味を出すのが良いと思ってます」

（注：**実寸で見ると良いが拡大すると微妙**という逆転が明記されている点が拾いどころ。
「濁る」原因そのものの説明はこの記事には無い。）

---

## 004. Saint11（Pedro Medeiros／Celeste のアーティスト）「Consistency」

- URL: https://saint11.art/blog/consistency/
- 書いた人：Pedro Medeiros（saint11）。Celeste・TowerFall のピクセルアート担当
- 分野：**4（密度と粒の揃え方）／2（パレットの規律）／5（画面の重み付け）**

書き起こし：

ピクセルアートのゲームは resolution・colors・style で一貫性を保つべき。ただし

> "you can get away with mixing styles if each area of your game is kept separated and internally consistent"

**解像度の一貫性**：base resolution を一つ選ぶ。**著者は Celeste で 320x180 を使った。**
画面解像度へは "nearest neighbor interpolation" で拡大する（スムージング系のアルゴリズムを使わない）。
**整数倍（2x, 3x, …）で拡大するかぎり劣化しない。**

画面サイズが合わないときの手：
- カメラサイズを調整して余分なピクセルを切る
- いったん整数倍で拡大してから bilinear で縮める
- レターボックスを足す
- 上記の組み合わせ

**色の一貫性**は二つの戦略：
1. 限定パレット（"fire and forget" な手。固定の色セットを使う）
2. 色の使い回し（パレット制限をかけないゲームで、スプライトが共通色を使うようにする）

ポストプロセスは、スプライトを置いた後の画面キャンバスに掛ければ一貫性を壊さない。

**世界の分離**（**5 の話**）：Celeste は視覚的に三つの「world」に分けて設計された。
**gameplay（ピクセルアート）／UI（高解像度）／maps（3D）**。
"styles never leak from one world to another"。そのためにアセットを何度も描き直す必要があるが、
視覚的な統合は保てる。

技術的な解：
- **Layer sliding**：要素を別キャンバスに分け、より高い解像度で滑らかに動かす
- **Rotating pixels**：複数の角度でスプライトを描き直すか、画面解像度側で回す
- **Camera jitter**：カメラ移動を画面解像度で行い、bleed 領域を持たせて目に見えるガタつきを避ける

包括的な原則：

> intent matters ── 意図してルールを破るのは構わない

---

## 005. Saint11「Scaling Pixel Art」

- URL: https://saint11.art/blog/scaling/
- 書いた人：Pedro Medeiros（saint11）。2024年11月が最新記事とブログ一覧に表示（一覧: https://saint11.art/blog/ ）
- 分野：**4（密度と粒の揃え方）**

書き起こし：

> "It's low-resolution art where the placement of every pixel is intentional."

現代のモニタは 3840x2160、昔の画面は 640x480。32x32 のドット絵はそのままでは極小になる。

**拡大**：整数倍（2x, 3x, 4x）だけが品質を保つ。**2.5x のような非整数倍は歪む。**
フィルタは **Nearest Neighbor / Point / None** を使う。**Bilinear / Linear / Bicubic は使わない。**

**縮小**：基本は不可。すでに 3x で来た素材を 2x にしたい場合のみ、
(1) ピクセルの実寸を測って元の倍率を割り出す (2) 元サイズに戻す (3) Nearest Neighbor で目的の倍率へ、
という手順。

**非整数倍が要るとき**の三つの道：
- Up/Down：いちばん近い整数倍まで Nearest Neighbor で上げてから Bilinear で微調整
- シェーダで解く
- 十分高い解像度なら不完全さを受け入れる

**解像度混在（mixels）の落とし穴**：異なるピクセル解像度を混ぜるとグリッドの一貫性が壊れる。
どうしても要るなら：キャンバスを分ける／整数倍だけにする／
**混ぜる解像度は最大でも二種類まで**／あるいはピクセルアートと高解像度素材を混ぜる形にする。

---

## 006. NESdev Wiki「PPU palettes」

- URL: https://www.nesdev.org/wiki/PPU_palettes
- 書いた人：NESdev Wiki（有志の仕様書き起こし）
- 分野：**2（パレットの規律）**

書き起こし（**数値そのまま**）：

- パレットは全8本（背景用4本、スプライト用4本）、**1本あたり4色**
- "Each byte in this palette RAM contains a 6-bit color value referencing one of the PPU's 64 colors"
- "Entry 0 of palette 0 is used as the backdrop color." … backdrop は背景とスプライトの両方が透明な
  ところに出る色
- マスターパレットは **64色**
- 背景のパレット選択の粒度は "usually a 16x16 pixel region"。カートリッジのマッパーの助けがあれば
  "as small as an 8x1 pixel sliver" まで細かくできる。スプライトは 8x8 または 8x16 ごとに1パレット
- 画素の色は5ビットで決まる：背景/スプライトの選択1ビット＋属性2ビット（パレット選択）＋
  パターンデータ2ビット（パレット内の色）

---

## 007. Noel Berry「NES Limitations」

- URL: https://noelberry.ca/posts/nes/index.html
- 書いた人：Noel Berry（Celeste の共同開発者）
- 分野：**2（パレットの規律）／4（密度と粒の揃え方）**

書き起こし（**数値そのまま**）：

- 画面サイズ："256 x 224 px screen size. Technically 256 x 240, but the top and bottom 8px are cropped"
- リフレッシュレート：60 Hz
- 使える色の総数：**64色**
- 同時に持てるパレット：**8本**（背景4、スプライト4）
- 背景パレット：各4本が **3色＋共有の背景色**
- スプライトパレット：各4本が **3色＋透明**
- "Total Colors onscreen: 25 (4 palettes x 3 colors = 12 for sprites, 4 palettes x 3 colors = 12 for background tiles, 1 for background)"
- 背景タイル：**8x8**、グリッドにスナップ（自由移動不可）、使えるタイルは **256枚**
- "Every block of 2 x 2 tiles must use the same palette"
- 背景タイルは反転・回転・拡縮できない
- スプライト：**8x8 または 8x16**（ゲームごとにどちらか一方）、使えるスプライトは 256（8x16 なら 128）
- "You can only have 64 sprites on the screen at once"
- "You can only have 8 sprites per scaleline at once"（原文ママ。scanline のこと）
- スプライトは左右上下反転はできるが、回転・拡縮はできない

---

## 008. Lucas Pope インタビュー（Game Developer「Lucas Pope and the rise of the 1-bit 'dither-punk' aesthetic」）

- URL: https://www.gamedeveloper.com/design/lucas-pope-and-the-rise-of-the-1-bit-dither-punk-aesthetic
- 書いた人：Game Developer（旧 Gamasutra）の記事。Lucas Pope（Return of the Obra Dinn）と
  Nathan Rees（World of Horror）の発言
- 分野：**2（パレットの規律）／3（読みやすさ）／7（少ない手数）／8（「安っぽい」の中身の裏返し）**

書き起こし：

Mac Plus の白黒グラフィックの明瞭さについて、Pope：

> "Everything in the game was clearly legible -- characters, backgrounds, objects -- and it was hard to tell where the moving characters end and the backgrounds begin."

2色であることの設計上の利点：

> "When you've only got two colors it makes it easier to get this noir look where you want to use lights in a broad way."

なぜモノクロを選んだか：

> "What's interesting is back then, I never considered that it wasn't in color. It was totally natural that in order to get these 'high-res' graphics in there, you had to do it in black and white."

Nathan Rees（World of Horror）：

> "You basically have a white piece of paper, and any color you put on it is dead black."

抽象の力について、Pope：

> "There's something about the missing color. You had to fill it in with your imagination, and to me that's a lot more powerful than actually showing it."

市場での差別化について、Rees：

> "The market is very saturated with some great pixel art games... But being black and white makes [games] look unique."

---

## 009. League of Legends 公式 dev 記事「Clarity in League」

- URL: https://www.leagueoflegends.com/en-us/news/dev/clarity-in-league/
- 書いた人：Riot Games（公式 dev ブログ）
- 分野：**3（読みやすさ）／5（画面の重み付け）**

書き起こし：

Clarity の定義：

> "the ability to understand what's happening in League and respond to it"

**三つの「unbreakable vows」**：

1. Gameplay Clarity：
   > "League's visuals and audio should help you quickly identify and react to champions, spells, and attacks."
2. Hierarchy Preservation：
   > "The most important thing at any given moment (like a major ultimate or CC) should draw the most attention"
   （チャンピオンのキット内でも、チャンピオン同士の間でも、この序列を保つ）
3. Minimal Noise：
   > "Visual noise adds up quickly and can make it difficult to react properly in teamfights."
   （高インパクトの呪文を除いては、視聴覚の抑制が必須）

**シルエット**：
- そのチャンピオンに固有の "defining primary characteristic that's unique to that champion" を持つこと
  （Senna の銃、Yuumi が猫であること、など）
- 新規プレイヤーが学べるよう、そのチャンピオンの力の源をシルエットが伝えること
- **大きさ**がプレイスタイルを伝える（かさばる＝タンク、小さい＝脆い）
- 向きが一目で分かること

**アビリティ**：
- hitbox と視覚エフェクトの一致が決定的
- 序列のルールを適用する。重要度と視覚的注目度を一致させる
- 強調度を決める要素：ダメージ量、CC の有無、避けられるか、ゲームプレイへの影響

**スキンの制約**：
- 主要なシルエット特徴は決して取り除いたり大きく変えたりしない
- アビリティの明瞭さは base skin と同等以上（"clarity parity"）
- どのマップでも明瞭でなければならない
- 大きな変身は homeguard か empowered 状態に限る
- 装飾的なアニメは競技上の優位を与えたり hitbox 位置を誤認させたりしてはならない

---

## 010. Game Accessibility Guidelines「Provide high contrast between text/UI and background」

- URL: https://gameaccessibilityguidelines.com/provide-high-contrast-between-text-ui-and-background/
- 書いた人：Game Accessibility Guidelines（Ian Hamilton ら。業界横断の指針）
- 分野：**3（読みやすさ）／5（画面の重み付け）／8（「見づらい」の中身）**

書き起こし（**数値そのまま**）：

- テスト可能な基準：**"a foreground/background contrast ratio of at least 4.5:1"**
- 実装：文字と UI を無地で高コントラストな背景に置く。それが無理なら
  "prominent outlines and shadows to separate them from the background"
- 誰のためか：コントラスト感度の低下、色覚特性。加えて**状況的な不利**
  （モバイル、直射日光下、質の悪いディスプレイ）
- 理由：

  > "After text size, contrast is one of the most common UI complaints."

- 否定されている俗説："high contrast text can trigger epileptic seizures. This is not true"
- 区分：Vision（Basic）
- テストの道具：Snook contrast checker（"WCAG 2 AA Compliant" を狙う）

---

## 011. Game Accessibility Guidelines「Use an easily readable default font size」

- URL: https://gameaccessibilityguidelines.com/use-an-easily-readable-default-font-size/
- 書いた人：同上
- 分野：**4（字の大きさ）／8（「見づらい」の中身）**

書き起こし（**数値そのまま**）：

- 最小フォントサイズ：**28px（1080p の画面で見たとき）**。Amazon TV の 10-foot-UI ガイドラインが根拠

  > "use 28px as a minimum rather than a target, aim to exceed it wherever possible"

- 視覚面：小さい文字は「視覚障害（遠視などの医学的なもの、小さいモバイル画面などの状況的なもの）を
  持つ人からの非常によくある苦情」
- 認知面：小さいフォントはディスレクシアなどに追加の困難。
  "letter shapes being less pronounced at smaller pixel sizes"
- 最善は "Allowing a choice of font size"。それが無理なら "setting a large default size is a good first step"
- 利用者の声：

  > "With how small the text is in games like GTA V, everything turns out blurred and unclear. I accidentally spent $4,500 on a car because of that."

- 区分：Vision（Basic）／Cognitive（Basic）

---

## 012. Mike Bithell「Thomas Was Alone: From 24-hour prototype to fully-fledged game」

- URL: https://www.gamedeveloper.com/business/-i-thomas-was-alone-i-from-24-hour-prototype-to-fully-fledged-game
- 書いた人：Game Developer（旧 Gamasutra）記事。Mike Bithell の発言
- 分野：**7（少ない手数で見られるものにする道）**

書き起こし：

- ブロック的で抽象的な見た目は、もともと **24時間のプロトタイプ**のための時間節約策だった
- 拡張するとき他の見た目も試したが：

  > "none of them really felt as good as rectangles."

- 理由づけ：

  > "players think about game spaces in terms of collision spaces. I kinda felt the game was best served by exploring that idea."

- 資源面：

  > "rectangles are really resource cheap and I'm a rubbish coder"

（記事には予算額・チーム人数の記載は無い。24時間のプロトタイプという数値のみ。）

---

## 013. Nasty Rodent「Color Theory for Game Art: The Production Application Guide」

- URL: https://nastyrodent.com/color-theory-for-game-art/
- 書いた人：Nasty Rodent（ゲームアートのアウトソース／アートディレクション寄りの実務ブログ）
- 分野：**1（値の構造）／2（パレットの規律）／5（画面の重み付け）**

書き起こし（**数値そのまま**）：

**値（value）は三つの尺度で同時に働く**：シーン／環境の尺度、アセットの尺度、UI/HUD の尺度。

> "A well-designed environment has a clear focal hierarchy – the primary point of interest is the lightest or highest-contrast zone."

段数の指定は無い。代わりに手順が定められている：

> "The professional discipline is to resolve value before introducing color."

**グレースケールの手順**：制作標準として、パレットの議論に入る前に、
**コンセプトのレビュー時点でグレースケールの value study を作る**。
value study が composition・focal hierarchy・depth reading の三つが機能していることを確認してから
色に入る。

**パレットの大きさ（数値）**：ゾーンごとの支配色は **three to five key hues** を推奨。

> "A palette of three well-chosen hues with disciplined value and saturation ranges will hold visual coherence across a 20-environment game; a palette of fifteen hues with no hierarchy will fragment visually."

**PBR アルベドの検証（数値）**：非金属素材の許容 sRGB 範囲は **50–240**、実制作では **80–200** に集中する。

> "A non-metal material with an sRGB albedo value below 50 will absorb too much light and appear unnaturally black."

素材の分類ごとにアルベド範囲を指定すること（コンクリート／布／塗装金属で読みが違う）。

（彩度の数値上限は指定されていない。ゾーンと調和スキームに紐づく定性的な制約のみ。）

---

## 014. Virtual Art Academy「Notan: The Top 10 Tips For Creating Powerful Notans」

- URL: https://www.virtualartacademy.com/notan/
- 書いた人：Virtual Art Academy（絵画教育のサイト）
- 分野：**1（値の構造）**

書き起こし（**数値そのまま**）：

Notan の定義：

> "the underlying abstract framework of dark and light values, upon which you build the value structure of a painting"

語源は日本語の「濃淡」。"Nong (thick/strong) and Dan (weak/watery)"。

**段の数**：二段（暗と明のみ）、三段（暗・明・中間のグレー）、四段のいずれも扱う。

> **"The fewer the number of values, the stronger the Notan structure."**

**目を細める試験**（Tip #1）：

> "Squint at your subject and try to assign all the shapes you see to two, three or four values."

**Top 10 Tips**：
1. 目を細めて、見える形を **2〜4段**のどれかに割り当てる
2. 制作にはブラシペンを使う
3. 輪郭の正確さは重要でない。**大きさと配置**に集中する
4. **一つの段が支配的であること（50%超）**
5. 残りの段を均等に分けない
6. 段が少ないほど構造は強い
7. 滑らかな諧調は狭い明度幅の中に収める
8. 諧調が少ないほど設計は強い
9. ハイキー／フルレンジ／ローキーのどれでも等しく成立する
10. 細部を足していく過程で構造を失わない

（**"If your notan reads clearly from across the room, your full painting will too. It's the ultimate squint test." という言い回しは検索結果の要約に出たもので、
このページ本文からは確認できなかった。**引用として扱わない。）

（ゲームアート側の言い回しとしては 013 に「三段の shadow / midtone / highlight に圧縮し、
連続グラデーションにしない」に相当する記述がある。）

---

## 015. Steam ガイド「Checking Image Values In Grayscale」

- URL: https://steamcommunity.com/sharedfiles/filedetails/?id=3014911194
- 書いた人：Steam のユーザーガイド（Aseprite 向け）
- 分野：**1（値の構造）**

書き起こし：

推奨する方法は **Color ブレンドモードのレイヤー**：
1. 新規レイヤーを作る（Shift+N）
2. Layer Properties でブレンドモードを "Color" にする
3. 白（#FFFFFF）で塗りつぶす
4. 目玉アイコンで表示を切り替えて見比べる

この方法だと "light, shadow and contrast without the interference of hue" が見える。

**避けるべき方法**：
- Hue/Saturation 調整（彩度 -100）… 不正確。"highlights on the white flower petals have a lower value than they should"
- HSL/HSV モデル … "do not account for the complexities of human perception" ので原理的に不適
- RGB→Grayscale 変換 … Luminance を使っても中間調がわずかに狂う。"darker than they should be"

前提：一貫して sRGB のカラープロファイルで作業すること。
"most publicly available formulas for how to convert a color to perceptual space assume standard RGB as a starting point"

---

## 016. Arne（androidarts）「A 16 color palette」

- URL: https://androidarts.com/palette/16pal.htm
- 書いた人：Arne Niklas Jansson（2007年作のパレット）
- 分野：**2（パレットの規律）／7（少ない手数）**

書き起こし：

16色（index 0-15）：VOID, GRAY, WHITE, RED, MEAT, DARKBROWN, BROWN, ORANGE, YELLOW,
DARKGREEN, GREEN, SLIMEGREEN, NIGHTBLUE, SEABLUE, SKYBLUE, CLOUDBLUE。

設計の理由：

> "I like games with black backgrounds that don't interfere with the foreground characters, but it would be nice to be able to paint in some details, and I wanted both cold and warm choices here."

**入れなかったものの理由**：肌色は専用のピンクを入れず黄色と兼用にした。
中間の青は入れず "sky blue and ocean blue instead"（そのほうが使い出がある）。
紫は "a somewhat obnoxious color which is too exotic to warrant a place here" として除外。

歴史の説明：

> "early palettes were just a result of simple circuit design, full blast on red, green and blue signals."

これに対して Commodore 64 は "more muted 16 color palette, which I heard was deliberately designed" と述べ、
自作パレットを、初期のゲーム向け配色の欠点を埋めるものとして位置づけている。

技術仕様：1色 3 RGB バイト（256色形式なら 768 バイト）。

---

## 017. DawnBringer 32色パレット（DB32）

- URL（一覧ページ・**開いて確認した**）: https://lospec.com/palette-list/dawnbringer-32
- URL（原典スレッド）: https://pixeljoint.com/forum/forum_posts.asp?TID=16247
  ── **403 で開けなかった。中身は読めていない。**
- URL（配布・説明）: https://opengameart.org/content/dawnbringer-32-color-palette
  ── **開いていない。**
- 書いた人：DawnBringer（Pixel Joint フォーラムのユーザー）
- 分野：**2（パレットの規律）／7（少ない手数）**

**Lospec のページで確認できた数値**：
- **色数 32**
- **ダウンロード 21,869 回**
- likes 454
- 作者：DawnBringer（Pixel Joint 出身）
- **Aseprite と Castle の既定プリセットに入っている**
- 配布形式：PNG / PAL / ASE / GIMP GPL / HEX

**検索結果からの記述（原典スレッド本文は未読。二次情報）**：
- 限定パレットを使う理由は、作者が色の外に出られないため、
  **ふだんの自分なら選ばない配色を強いられ、その結果しばしば良くなる**こと。
  明るい／暗い階調やブレンドを作るときも、既存のパレット色のどれを使うか考えさせられる。
  これが絵に **"an attractive sense of consistency"** を与える
- DawnBringer の 16色版・32色版は Aseprite の既定プリセットに **DB16 / DB32** として入っている

---

## 018. PICO-8 の16色固定パレット

- URL: https://pico-8.fandom.com/wiki/Palette ── **開いていない**
- URL: https://www.lexaloffle.com/bbs/?tid=30701 ── **開いていない**
- 分野：**2（パレットの規律）／7（少ない手数）**

**検索結果からの記述のみ。本文は未読（二次情報）**：

- PICO-8 の全ピクセルはメモリ上 **4ビット値**で保持される。4ビットは 0-15 しか取れないので
  **16色**しか選べない
- 「C64、Spectrum などは 16色の固定パレットを持っていて、それがそれらの機械のゲームに
  特徴的な見た目を与えた。**色を見ただけで C64 のゲームだと分かる**」
- **PICO-8 は16色しか無いが、その16色をいつでもどこでも全部使える。**
  これは NES など「パレット制限のある機械」とは別種の挑戦である
- 16色の内訳：black, dark blue, dark purple, dark green, brown, dark grey, light grey, white,
  red, orange, yellow, green, blue, indigo, pink, peach

（zep 本人が「なぜこの16色か」を説明した一次資料は見つけられなかった。**拾えなかったもの**に記す。）

---

## 019. Riot / Nasty Rodent「What Is HUD in Games?」

- URL: https://nastyrodent.com/what-is-hud-in-games/
- 書いた人：Nasty Rodent
- 分野：**5（画面の重み付け）**

書き起こし（**数値そのまま**）：

Fagerholt と Lorentzon の **2009年**の枠組みを引用。二つの軸で分類：
その要素がゲームのフィクションの中に在るか／どこに表示されるか。

- **Non-diegetic UI**：ゲーム世界の外、画面平面の上。隅の体力バー、弾数表示。
  "the most information-dense and most producible format"。2D の UI アーティストの持ち場
- **Diegetic UI**：フィクションの中に在り、キャラクターにも知覚できる。Dead Space の背骨の体力表示。
  "the highest production cost"（リグとアニメーションが要る 3D プロップ）
- **Spatial UI**：3D 空間を占めるがキャラクターには知覚できない。Left 4 Dead の緑の輪郭線。
  シェーダとパーティクル、テクニカルアートの持ち場
- **Meta UI**：明示的な表示ではなく感覚で伝える。体力が危険域での画面の彩度低下、血しぶき、
  コントローラの振動。持ち場は "ambiguous without explicit documentation"

**注意の予算**（**数値。ただし出典の裏は取れていない**）：

> "80% of player attention never reaches the HUD"

HUD に集中しているプレイヤーは "are not playing the game" のであって、
並行する情報処理をこなしているにすぎない。

**三つの設計原則**：
- **Visual hierarchy**：weight、size、contrast、placement で緊急度に応じた優先度をつける
  （体力をスコアより目立たせる）
- **Peripheral readability**：画面端の要素は**周辺視で読まれる**。したがって
  "contrast differentials and motion cues rather than fine typography" が要る。
  減っていく体力バーは形と色の変化で伝わる
- **Progressive disclosure**：行動に移せるときだけ情報を出す。
  そのために HUD 要素は "stateful" であり "display logic triggered by gameplay events" を持つ必要がある

**制作の分岐**：HUD の型を選ぶことがチームの担当を決める
（non-diegetic→UI アート、diegetic→キャラ／環境アート、spatial→テクニカルアート、
meta→VFX と音の部門横断）。この決定は
"needs to happen at art direction stage, not at implementation stage"。

制作水準の HUD 仕様に必要な記載：要素の型と担当／表示ロジック（可視条件）／
視覚仕様（サイズ・位置・アニメ状態）／アクセシビリティ引数／プラットフォーム差分／
どのゲームプレイ変数がその要素を駆動するかの参照。

---

## 020. Game Developer「12 principles for game animation」（Chris Totten）

- URL: https://www.gamedeveloper.com/game-platforms/12-principles-for-game-animation
- 書いた人：Chris Totten
- 分野：**6（動き）／3（読みやすさ）**

書き起こし：

1. **Squash and Stretch** … 体積を保ったまま潰す／伸ばす。ゲームでは当たり判定の問題を避けるため
   **squash/stretch のフレームは短く保つ**か、体の特定部位にだけ当たり判定を適用する
2. **Anticipation** … 大きな動きの前に予備動作で予告する。
   **ゲームではプレイヤーキャラに入力遅延の問題を生む。**
   解：ジャンプのように**離陸中に**squash フレームを入れる（前ではなく）、
   あるいは windup をゲームの難度側に織り込む
3. **Staging** … 構図とシルエットで注意を誘導する。
   **キャラクターは黒いシルエットのままで読めなければならない。**
   ゲームではカメラ制御の代わりにレベルデザインがプレイヤーの焦点を導く
4. **Straight Ahead / Pose-to-Pose** … 作業手順の二種。ゲーム固有の制約は無い
5. **Follow-through and Overlapping Action** … 主動作が止まった後も緩い部位が動き続ける。
   ゲームでは **follow-through のフレームを最小限に**、motion trail を使う、
   あるいは follow-through を別オブジェクトに分けて操作の応答性を保つ
6. **Slow-in/Slow-out** … キーフレーム付近にフレームを多く、中間は速く通す。
   多くのエンジンで手作業のキーフレーム調整が要る
7. **Arcs** … 関節や物体を直線でなく曲線の軌道で動かす
8. **Secondary Action** … 走行中の腕の振り、待機中の細かい動きなど、
   主動作を邪魔しない補助動作
9. **Timing** … **絵の枚数が多い＝遅い動作、少ない＝速い動作。**
   ゲームではエンジン側で再生速度を変えられるので描き直さずに済む。
   **少ない枚数で滑らかに見せるには animation smear を使う**
10. **Exaggeration** … アートスタイルに応じて原則そのものを増幅する。
    "game feel" と応答性を作るが、当たり判定の制約は守る
11. **Solid Drawing** … 解剖・比率・パース。左右対称の "twinning" ポーズを避け、非対称にして立体感を出す
12. **Appeal** … 支配的な形と表情を持つデザイン。プレイヤーの愛着に効く

---

## 021. 「The Art of Screenshake」再現版の効果一覧（dkliao）

- URL: https://dkliao.itch.io/the-art-of-screenshake-recreation/devlog/451576/quick-breakdown-of-all-the-effects
- 書いた人：dkliao（Jan Willem Nijman / Vlambeer の講演を再現した itch.io のプロジェクトの devlog）
- 分野：**6（動き）**

**順番どおりの効果一覧**（原文の見出しそのまま）：

1. "Baseline"
2. "With Animation"
3. "Lower Time to Kill"
4. "Increase Rate of Fire"
5. "Increase Bullet Size"
6. "Muzzle Flash"
7. "Faster Bullet"
8. "Lower Accuracy for More Dynamics"
9. "Impact Effect"
10. "Hit Reaction"
11. "Enemy Knockback"
12. "Permanence"
13. "Camera Lerp"
14. "Screenshake"
15. "Player Knockback"
16. "Hit Pause"
17. "Weapon Recoil"
18. "Random Enemy Explosion"

**注意：この devlog には数値（ミリ秒・ピクセル・％・フレーム）は一切書かれていない。**
GIF と見出しだけ。

**同じ講演についての Game Developer 記事**
（https://www.gamedeveloper.com/design/vlambeer-co-founder-shares-advice-on-building-better-action-games ）
には数値が二つだけある：

- 「プレイヤーの射撃と**反対方向**に画面をわずかに揺らす」
- 「敵が死ぬとき **33% の確率**で無害に爆発する」
- 講演は "30 minor tweaks that each make the game a bit better" を、退屈な横スクロールシューターに
  順に足していく形式
- まとめ："Small changes...can make a game feel far more exciting and engaging to watch, much less play."

---

## 022. Bloodirony「The Art of Screenshake in Unity2D」の実装値

- URL: https://www.bloodirony.com/blog/the-art-of-screenshake-in-unity2d
- 書いた人：Bloodirony（スタジオのブログ）
- 分野：**6（動き）**

**実装で使っている数値**（この記事の作者が選んだ値であり、Vlambeer の値ではない）：

- 画面揺れの更新間隔："0, .01f"（10ms）／1フレームあたりの時間減衰：".01f"
- 射撃時のキックバック：Y 位置の調整幅 "0.1f, 0.3f"（ユニット）
- 薬莢の残留（permanence）：高さのランダム化 "0.2f, 0.7f"、移動時間 "1"（秒）、
  回転時間 "0.9f"（秒）、回転量 "-6f, 6f"（度）、消えるまで "10f"（秒）

記事は Vlambeer の講演を "30 little tricks" と呼んでいるが、**その30個は列挙していない。**

---

## 023. Gothic 1 Remake の Steam 議論「Eye-Strain, and YOU」

- URL: https://steamcommunity.com/app/1297900/discussions/0/563658656216016103/
- 書いた人：Steam のプレイヤーたち（スレッド）
- 分野：**8（遊んだ人の「見づらい」の中身）／3（読みやすさ）／1（値の構造）**

**原文に近い書き起こし（プレイヤーの言葉）**：

見た目そのものへの文句：
- "blurry, smeared art direction"、"foggy upscaler"
- "everything looks as if it has been passed through a foggy upscaler"
- TAA（Temporal Anti-Aliasing）、TSR、強い upscaling が犯人ではないかと名指しされている
- モーションブラーとヘッドボブが不快に効いている
- ビネットも問題として挙がっている

**読み取りの失敗**（ここが「見づらい」の中身）：
- "objects stop standing out"、"world loses definition"
- "herbs, loot, objects, and paths blend into the background"
- 敵は "recolored to better blend into the grass"
- "stuff blending into one another"、**"greens into greens hidden, blues into blues"**

明暗の問題：
- "darkness, over-bright areas, muddy distance, inconsistent lighting"
- コントラスト不足で視覚的な伝達が成り立たない
- ガンマを **3.2** まで上げると一時的に改善するが白飛びする

**報告されている身体症状**：頭痛、片頭痛、吐き気、めまい、"swimming" する感覚、
頻繁な休憩を要する眼精疲労、"arc-eye"、"wall-eye"。

---

## 024. zenn「個人開発でも '見た目で損しない' UI をつくるためにやったこと」

- URL: https://zenn.dev/mylifeasjosh/articles/f168adc198d8c7
- 書いた人：mylifeasjosh（zenn）
- 分野：**5（画面の重み付け）／8（「安っぽい」の中身）**

書き起こし（**数値そのまま**）：

前提の考え方：

> 「美しいデザインはセンスではなく、原則の積み重ね」

五つのルール：

1. **視覚的階層** … 「全ての要素が同じ強さで主張していた」状態から、情報の優先度を整理。
   サイズ・色・余白で強弱をつけた
2. **余白** … 「大胆な余白」で呼吸感を持たせた。**spacing system（例えば4の倍数）**を導入
3. **色管理** … HEX ではなく **HSL** で管理。テーマカラー／グレー系／アクセントを事前に分類。
   色だけでなくアイコンやテキストも併用
4. **タイポグラフィ** … フォントサイズ・行間・字間のスケールを事前決定。**1行70文字以内**に制限。
   見出しは左揃え、段落との距離をルール化
5. **シャドウとレイヤー** … 光源の位置を統一。**2段階構成**のシャドウで深みを出す

参考にした資料として *Refactoring UI* と MDN のデザインガイドを挙げている。

---

## 025. note「個人開発ゲームのフォント選びどうする問題」みやこ出版

- URL: https://note.com/akutaba/n/nc59ca916a0f3
- 書いた人：みやこ出版（個人ゲーム開発）
- 分野：**4（字の大きさ）／8（「見づらい」の中身）**

書き起こし（**数値そのまま**）：

- 本文のフォントサイズ：**「画面1920サイズに対し42pt前後」**
- サウンドノベルを参考にした大きめの例：**「1920に対して72pt」**

読みにくいフォントについて：

> 「ノベルゲームなのに本文に廻想体とかふぉんとうは怖い明朝体とか使うのやめた方がいいんじゃないでしょうか」

こうした書体は「タイトルやロゴ」「要所で差し色のように」使うことを推奨。

実用的な選択肢として **ROBOTO** と **源ノ角ゴシック CJK** を推奨。理由は
「ウェイトがたくさんあるのでイメージに合う書体が見つかりやすい」。

---

## 026. Iwata Asks（New Super Mario Bros. Wii）「2. The Reason Mario Wears Overalls」

- URL: https://www.nintendo.com/en-gb/Iwata-Asks/Iwata-Asks-New-Super-Mario-Bros-Wii/Volume-1/2-The-Reason-Mario-Wears-Overalls/2-The-Reason-Mario-Wears-Overalls-210759.html
- 書いた人：任天堂公式。岩田聡と宮本茂の対談（2009年）
- 分野：**3（読みやすさ）／4（密度と粒）／6（動き）／7（少ない手数）**

書き起こし（**原文に近い形**）：

**ヒゲ**：

> "if you draw a moustache, you don't have to draw a mouth"

> "If you draw a nose then a moustache, you don't really know if it's a mouth or a moustache, and it saves pixels."

**帽子**：髪を全部描く代わりに帽子をかぶせた。

> "by making him wear a hat, you can reduce the hair to only a couple of pixels."

そして目をその真下に置けば顔が完成する。

**オーバーオール**：

> they "were only able to use three different frames" for running.

**走りに使えるフレームは三枚しかなかった。**腕の動きを見せるために、腕と胴の色を変える必要があった。

> "Overalls were the only option!"

（工事現場という舞台設定にも合っていた。）

**岩田のまとめ**：

> "the entire design was a case of form being dictated by function"

（宮本の工業デザインの素養が、制約から見た目を導いた。）

**補足（別出どころ）**：宮本は 2007年の CNN のインタビューで
"We had to draw Mario as a small character and at the same time, we had to make him look human.
To do that, we needed to draw a distinctive feature for him, such as giving him a big nose.
We gave him a mustache so that we didn't need to draw a mouth."
と述べている（検索結果からの引用。CNN の原記事は開いていない）。

---

## 027. Shmups Wiki「Boghog's bullet hell shmup 101」

- URL: https://shmups.wiki/library/Boghog's_bullet_hell_shmup_101
- 書いた人：Boghog（弾幕シューティングの作り手。Shmups Wiki に収録）
- 分野：**1（値の構造）／3（読みやすさ）／5（画面の重み付け）**

書き起こし：

**value（明度）が可視性の主要な道具**。弾は明度の高低を隣り合わせにする：

> "light & dark values side-by-side. The bullets often have very bright elements (the glowing cores) right next to dark elements (borders, sometimes inner circles/lines)."

**背景の作り方**：

> "Low contrast backgrounds that rely primarily on midtones also help with visibility since they let you freely use extreme values for important elements."

（＝**背景を中間調に寄せて低コントラストにしておくと、重要な要素に極端な明度を自由に使える。**）

**色の選択**：

> "there are good reasons why so many danmaku games settled on reds, pinks and purples—they are less likely to clash with commonly used colours, unlike traditional yellow and orange bullets which tend to overlap with explosions & golden items."

**スプライトの設計と動き**：弾スプライトを縦長にするとモーションブラー的に速さが増して見える。
アニメーションも可視性に効く：

> "Looking at CAVE bullet sprites will quickly reveal all kinds of wobble and ripple animation which catch the player's eye and give each bullet a unique identity."

**描画順の規則**（**明文化された相場**）：

> "Enemy bullets should always be drawn on top of other game objects such as player sprites, projectiles, items and explosions. Use bullet size and speed to inform their depth. Smaller, faster bullets should be drawn over bigger, slower bullets."

**自機の位置の読み取り**：プレイヤーは自機の位置を、自機が撃ち出す弾の流れ、機体のシルエット、
追加の視覚要素から推定している。太くて速い自機弾は手触りと可視性の両方に効く。

---

## 028. Bugnet「How to Make Good Game Art When You Can't Draw」

- URL: https://bugnet.io/blog/how-to-make-good-game-art-when-you-cant-draw
- 書いた人：Bugnet Blog
- 分野：**7（少ない手数で見られるものにする道）／2／3／5**

書き起こし：

**選ぶべき見た目**（描く技術より判断が効くもの）：

> "flat geometric shapes, silhouettes, simple low-poly 3D, abstract minimalism, or well-curated asset packs unified by a strict palette."

例：Thomas Was Alone（矩形と照明の上に成り立っている）、ミニマルなパズル、ローポリの世界、
シルエット主体の見た目。

**基礎**：
- **パレット**：出来合いの色セットを手に入れて厳守する。そうすれば
  "make[s] most color mistakes become impossible"
- **コントラスト**：**"gameplay elements bright against muted backgrounds"**
  （＝遊びに関わるものを明るく、背景を抑える）。読みやすさと「磨かれて見えること」の両方に効く
- **形**：**"fewer, cleaner shapes beat detailed noise; when in doubt simplify."**
- **余白**：**"generous margins and aligned UI grids signal intentionality."**

**動きと磨き**："screen shake, particles, tweened scales, hit flashes" は、
静止画を磨かれて見せるために働く。

**素材パックを混ぜるとき**：同一の作者のものを選ぶ／全部を自分のパレットに塗り直す／
統一したポストプロセスを掛ける／目立つ要素だけ外注する。

**中心の主張**：

> **"Consistency beats quality, almost every time."**

（ちぐはぐな高品質より、まとまった控えめな見た目のほうが上回る。）

**見え方の前提**：**"231-pixel-wide"** のサムネイル表示で成立するように作る。
縮小すると見えない細部より、シルエットとコントラストを優先する。

---

## 029. Bugnet「How to Develop Your Game's Art Style」

- URL: https://bugnet.io/blog/how-to-develop-your-games-art-style
- 書いた人：Bugnet Blog
- 分野：**8（「安っぽい」の中身）／2**

書き起こし：

> "an art style is largely defined by its constraints (the palette, the level of detail, the rendering approach, the shapes and forms)"

制約の四分類：**palette / level of detail / rendering approach / shapes and forms**。

素人臭く見える原因：

> "an ambitious one you can't maintain looks inconsistent and amateur"
> "a constrained style you can maintain consistently looks coherent and intentional"

（数値・チェックリストはこの記事には無い。）

**検索結果に出てきた具体的なちぐはぐの例**（同種の議論から）：
- キャラと背景でピクセルの大きさが違う
- 物によって解像度が違う。**黒い輪郭線がある物と無い物が混在している**
- **陰影が付いている物と付いていない物が混在している**（未完成に見える）
- 2D と 3D のシーンが混在して連続性が切れる

---

## 030. itch.io devlog「Devlog 09: Reflections on our art direction」

- URL: https://itch.io/devlog/242179/devlog-09-reflections-on-our-art-direction.amp
- 書いた人：小規模チーム（2人）の開発日誌
- 分野：**8（「安っぽい」の中身）／2**

書き起こし：

作り手は、二人だけで作れば様式の統一は自然に出ると思い込み、**事前にアートディレクションの
決まりを作らなかった**。

うまくいかなかった点：
- **様式化不足**：βのフィードバックで、もっと様式化すべきだったと分かった。
  手描きテクスチャではなくシェーダ主体の手法にすべきだった（新海誠を参照点に挙げている）
- **平板なアセット設計**：3Dモデルのテクスチャ貼りを楽にするために
  "flat views -- front and side" で描いていたため、アセットに
  "lack the asymmetry and dimensionality that could've felt more dynamic"
- **ぶれの過小評価**：

  > "how different my own art could look depending on the day"

  ── **自分一人の絵ですら、日によって違って見える。**これが統一を壊した

引用している助言：

> **"if you can't make it look good, just make it look consistent"**

参照した作品：*Unbeatable!*。"mixing 2D textures on 3D models, with that blocky stylized assets"、
およびクロマティックアベレーションのような後処理を、テクスチャに焼き込まず動的に掛ける点。

---

## 031. Sprite-AI「Sprite animation frames: how many do you actually need?」

- URL: https://www.sprite-ai.art/blog/sprite-animation-frames
- 書いた人：Sprite-AI のブログ（**注：AI ツールの販促サイトであり、一次資料ではない。
  ただし名指しの作品と枚数が書かれているので数値として残す**）
- 分野：**6（動き）**

書き起こし（**表そのまま**）：

| Animation | Frames | Notes |
|---|---|---|
| Idle | 2-4 | "Breathing loop, subtle movement" |
| Walk | 4-8 | "4 for small sprites, 6-8 for 32x32+" |
| Run | 6-8 | "Faster timing, not necessarily more frames" |
| Jump | 3-5 | "Anticipation + air + land" |
| Attack | 3-6 | "Wind-up + strike + recovery" |
| Death | 4-6 | "One-shot, no loop needed" |
| Hit reaction | 2-3 | "Flash + recoil" |

名指しの例：
- **Celeste の Madeline**："uses a 4-frame run cycle"
- **Shovel Knight**："walk is 6 frames"
- **Dead Cells**："8-12 frame attack animations"（スプライトが大きく、流麗な戦闘が売りだから）

**枚数を増やすと逆効果になる理由**："Every frame you add costs production time."
4方向 × 6アニメ × 8枚 = **192枚**。1アニメ 12枚にすると **288枚**。
差の **96枚**を、亜種のぶんだけ保守し続けることになる。

逓減の目安：4枚の歩きは良く見える。6枚だと滑らか。**6→8 は "marginal"。
8→12 はスプライトがよほど大きくない限り無駄**。

主張：

> **"frame timing beats frame count, every single time."**

正しく緩急のついた4枚は、等速の12枚に勝つ。
（遅い予備動作 → 速い本動作 → 遅い戻り、という可変の間合いのほうが枚数より効く。）

---

## 032. SLYNYRD「Pixelblog 50 - Human Walk Cycle」

- URL: https://www.slynyrd.com/blog/2024/5/24/pixelblog-50-human-walk-cycle
- 書いた人：Raymond Schlitter（SLYNYRD）。2024年5月24日
- 分野：**6（動き）**

書き起こし（**数値そのまま**）：

> "8 frames strikes a solid balance between economy and fluidity"

4枚版は必要なキーポーズは押さえるが疎に感じる。6枚は中間。

> "anything beyond 8 frames is an aesthetic choice, and not necessary to function."

**8枚の内訳**：
1. **Contact**：左踵が着地。腕と脚が両端。**figure at lowest height（いちばん低い位置）**
2. **Down**：左足が平らに。右足が浮いて前へ振り出す
3. **Pass**：脚が中央で交差。**figure reaches maximum height（いちばん高い位置）**
4. **Swing**：右脚が大きな弧を描いて前へ（まだ空中）
5-8. 1-4 の鏡像（パースの微調整あり）

**動きの読みやすさの原則**：
- **上下動**：頭の位置は一様なサインカーブではなく **"a triangle shaped wave"** を描くべき
- **手足の連動**："Movements of appendages on opposite sides of the body track along with shared momentum"
- **布**：折り目は全フレームを通して "consistent tension anchor points and direction" を保つ

制作上の注記：基準スプライトは **8頭身**のモデル。
ピクセルアートを大きくしていくときは、アニメの手間を減らすため布の細部を最小限に保つことを勧めている。

---

## 033. Downwell の4色パレット（Wikipedia + Lospec）

- URL: https://en.wikipedia.org/wiki/Downwell_(video_game)
- URL: https://lospec.com/palette-list/downwell-vivid
- 作品：Downwell（Ojiro Fumoto、2015年）
- 分野：**2（パレットの規律）／3（読みやすさ）／7（少ない手数）**

書き起こし（**数値そのまま**）：

> "uses a palette of four colors, which default to black background and white outlines, with red as a highlight for gems, enemies and other important items, and blue for water environment features."

**4色。黒＝背景、白＝輪郭、赤＝宝石・敵・その他の重要な物、青＝水の環境要素。**
"exact colors can be changed through unlockable in-game palettes"（色そのものは解禁パレットで変えられる）。

Lospec に登録されている "Downwell Vivid" パレット（解禁パレットの一つ）は **4色**：
`#fef6fe` `#c90000` `#496ab4` `#003046`。

作り手：**Ojiro Fumoto が一人で作った初めてのゲーム。**13番目の企画だった。
Spelunky への傾倒が下敷きで、「あれをスマホでやったらどうなるか」から出発した。

評：「レトロ調のピクセルゲームにおける細部への注意の金字塔」と評された。

**この件の値打ち**：4色しかないのに、**そのうち一色（赤）を「遊びに関わる重要な物」専用に
割り当てている。**「遊びに関わるものと飾りの見分け」を、パレットの規律として実装した例。

（Fumoto 本人の GDC 2016 講演「Polishing the Boots」は
https://gdcvault.com/play/1023533/Polishing-the-Boots-Designing-Downwell と
https://archive.org/details/GDC2016Fumoto に在るが、**動画であり中身は確認していない。**
本人が色について何と言ったかは未確認。）

---

## 034. Sandro Maglione「Pixel art Platformer level design - Full Guide」

- URL: https://www.sandromaglione.com/articles/pixel-art-platformer-level-design-full-guide
- 書いた人：Sandro Maglione
- 分野：**3（読みやすさ）／5（画面の重み付け）**

書き起こし：

層の構成：foreground / main layer / close background / 複数の parallax background。

**Foreground**：
> "Foreground decorations must never hide the main character"

画面の縁、キャラが到達できない位置に置く。奥行きを伝えるのが目的なので解像度は高くてよい。

**Main layer**（遊びに関わる層）：
- 他の層に比べて **"solid outline with high contrast"**
- **"brighter colors with less saturation"**
- プレイヤー・敵・足場・収集物といった、干渉できるものが全部ここに入る

**遊びの場と背景の分け方**：
> "make the background darker, with less contrast and more saturation"

**タイルの細部の規則**：
> "The outermost layer where the player walks should have more details"
> "Inner tiles should have less contrast, more saturation, darker colors, and less details to avoid distracting the player"

**背景**：
> "Backgrounds far from the player should have more saturated colors, as well as less amount of different colors overall"

遠景はシルエットで（山の輪郭など）。close background は視差移動を持たず、輪郭線も持たない。

**close background** は main layer より "lower saturation, less contrast"。
（**注：この記事の中で "background は more saturation" と "close background は lower saturation"
が並んでおり、内部で食い違って読める。**）

---

## 035. ファミ通App「『ヘブンバーンズレッド』UIデザインにおけるキーワードは視線誘導」（CEDEC 2022 の講演レポート）

- URL: https://app.famitsu.com/20220829_1993264/
- 書いた人：ファミ通App（2022年8月29日）。CEDEC 2022 の講演のレポート
- 分野：**5（画面の重み付け）／3（読みやすさ）**

書き起こし：

認知特性の前提：

> 「人間は明度や彩度のコントラストが強い箇所、あるいは形状が他と異なる部分に視線を向けやすい」

具体例（**測れる形の指示**）：

> 「チーム編成における出撃ボタンの彩度を画面内でもっとも高くし、同じ画面内のボタンの形状に差を付けることで、出撃ボタンに視線を誘導するUIデザインが施されている」

── ＝**押させたい一箇所の彩度を画面内で最大にし、他のボタンと形を変える。**

その他：
- **アニメーション**：UI の多くがアニメーションで動き、視線誘導と同時に「タップできるか」を示唆する
- **余白**：メニューの枠や装飾を最小化し、意図的な余白で視線を誘導する
- **間**：画面が切り換わるときに一定の「間」を挿入する

（**記事に具体的な数値の記載は無い。**）

（CEDEC 2022 の別セッションの一覧ページ https://cedec.cesa.or.jp/2022/session/detail/103 も
検索で出たが、**開いていない**ので中身は引用していない。）

---

## 036. Hackaday「Pixel Art And The Myth Of The CRT Effect」

- URL: https://hackaday.com/2024/08/03/pixel-art-and-the-myth-of-the-crt-effect/
- 書いた人：Hackaday（2024年8月3日）
- 分野：**1（値の構造）／4（密度と粒）／「昔と今」**

書き起こし：

主張：ピクセルアートの見栄えを「CRT がならしてくれたおかげ」とするのは誤りで、
作り手は**意図的にディザリングとアンチエイリアスを使って**ハードの制約に対処していた。

> "there was no extreme separation between pixels or massive bleed-over into nearby pixels to create some built-in anti-aliasing"

質の良い CRT ではそうしたことは起きない。効いていたのは**ディスプレイより信号の質**で、
RF やコンポジットが artifact を生み、RGB 接続ではほとんどぼやけない。

作り手の意図について：ピクセルアーティストは自分が使っているハードのために描いていた。
ゲームは "designed on CRT displays to look that way"、
つまり**制作中に自分が見ていたもの**に最適化していたのであって、現代のディスプレイ向けではない。

例外として認めているもの：IBM PC の CGA の色ブレンドは NTSC コンポジット信号の artifact を使っている。

> "This can only be achieved using composite video and has nothing to do with the CRT itself."

（コメント欄では反論が多く、コンポジット由来の色、特定の CRT を想定した設計、信号処理の重要性が
挙げられている。）

---

## 037. Raster Scroll「Transparency（Mega Drive graphics）」── 036 と食い違う側

- URL: https://rasterscroll.com/mdgraphics/graphical-effects/transparency/
- 書いた人：Raster Scroll（メガドライブのグラフィック技法の解説サイト）
- 分野：**1（値の構造）／4（密度と粒）／「昔と今」**

書き起こし：

VDP は "shadow and highlight mode" を除いて半透明を持たない。そこで
**ディザリング**を使う：

> "a technique for blending pixels of different colors using patterns to create the illusion of shading"

**Sonic the Hedgehog の1面の滝**：垂直方向のディザリング。

> "alternating vertical lines. One set of lines is fully transparent, and the far background can be seen through them."

**コンポジット信号で見たとき**、ディザリングは目立たなくなる。
出力は "less sharp" になり、**"the transparency effect is increased"**（透明の効果は強まる）。

他の例：『幽☆遊☆白書 魔強統一戦』は画面を横切る霧にも、前景・背景の陰影にも
ディザリングを多用している。コンポジットを通すと "the dithering becomes less visible via composite"。

**別の手**：タイルを **1フレームごとに点滅**させ、速すぎて半透明に見えるようにする。
キャラの影や霧に使われている。

（**036 と正面から食い違う。**036 は「CRT のぼかしに頼っていたというのは神話」と言い、
037 は「コンポジット越しに見ることでディザが透明に見える」ことを実例で示している。
なお 036 も「コンポジット信号の artifact」だけは例外として認めており、
**争点は「CRT というディスプレイ」か「コンポジットという信号」か**に絞られている。）

---

## 038. Vampire Survivors の見た目に対する評（レビューと Steam 議論）

- URL: https://reviewzinsight.com/2025/05/21/vampire-survivors-review-minimalist-chaos-or-masterpiece/
  （**注：この URL は開いていない。検索結果の要約からの引用である**）
- URL: https://steamcommunity.com/app/1794680/discussions/0/3195868146173153306/ （開いて読んだ）
- 分野：**8（遊んだ人の「安っぽい」の中身）**

**Steam 議論「Traced Art」**（開いて読んだ側）：

- 告発："The girl's pose featured in the cover art of the game is traced from a cover art of a different game, Bayonetta 2."
- 告発者："The guy says he teaches but here he is just taking the easy route and traces stuff without really trying to create anything new."
- 擁護："if you overlay them the angles are clearly different. It's very likely an inspiration but a claim of being traced doesn't hold up."
- 擁護："Good artists imitate, great artists steal"、"plenty of galleries with people doing poses so you can copy them or trace/whatever. A lot of actual official art work is painted like this."
- 擁護："this whole game is a satirical sendup of video games. It's all references and deconstruction all the way down."
- 擁護："Drawing using another piece of art for reference...isn't illegal, so this whole discussion is moot anyway."

**検索結果からの評**（原記事未読）：
- 「意図的に90年代初頭を想起させる、粗さすれすれのピクセルアート。それがゲームの混沌とした
  同一性を強めている」
- しかし「ミニマルな見た目は機能はするが、**長時間の遊びでは目が疲れる**」
- 「離れて見れば読める、近くで見ても派手すぎない。ただ**きれいだとは言い切れない**」
- 2021年末に **5ドル**、ピクセルアートと素朴な操作で登場したときは誰も予想しなかった

**この件の値打ち**：「安っぽい」と言われながら売れた例。
批判の中身が「絵の技量」ではなく **「長時間で目が疲れる」**（＝コントラストと情報密度の問題）
であることが拾いどころ。

---

## 039. Learning to See ほか「なぜパレットを絞るのか」（絵画側の一般論）

- URL: https://www.learning-to-see.co.uk/why-limit-your-palette
  （**注：本文が取得できなかった。以下は検索結果の要約からの引用であり、原文は未読**）
- 分野：**2（パレットの規律）／7（少ない手数）**

**検索結果からの記述**：

- 限定パレットの絵は「洗練されて、意図的に見える」。**制約が仕事の一部を肩代わりしてくれるから**
- 「濁った、灰色の、生気のない色」が生じるのは、**化学的な基が違う顔料を混ぜすぎて
  光学的に打ち消し合う**とき。基の顔料が少なければ、混色は clean で vibrant で予測可能なままでいる
- 初心者にとって色数が少ないほうが圧倒されずに済む
- 無制限の選択肢は麻痺か焦点のぼけを生み、**戦略的な制限は力を集中させ、創造的な問題解決を強いる**
- 3〜4色に絞ると、全スペクトラムで作業しているときには見えない色の関係が見えてくる
- 限定パレットは初心者の松葉杖ではなく、歴史上の高名な画家も使ってきた professional tool

（**顔料の混色の話であり、ピクセルアートの RGB の話にそのまま移せるとは限らない。**
ただし「濁る」の原因を「基が多すぎること」に帰す説明は、
デジタルの「色相をばらけさせすぎると濁る」という言い方と対応している。）

---

## 040. Genesis / Mega Drive のコンポジット合成をめぐる有志の実装（MiSTer FPGA）

- URL: https://retrorgb.com/adaptive-composite-blending-added-to-mister-core.html
  （**注：この URL は開いていない。検索結果の要約からの引用**）
- 分野：**4（密度と粒）／「昔と今」**

**検索結果からの記述**：

- CRT 時代の作り手は、コンポジット映像のぼやけた干渉を**利用するために**絵を作ることがよくあった。
  もっとも有名な例が Sonic the Hedgehog の滝
- コンポジットのぼけを前提に作られたゲームを RGB で見ると、**透明のはずのアセットが点々に見える**
- 画面全体をぼかせばディザのアセットについてはコンポジットの見え方を再現できるが、
  **普通の絵までぼける**
- **adaptive blending はディザのアセットだけをぼかし、それ以外は鋭いまま保つ**

---

# 読めなかった／開けなかった出どころ（**中身は引用していない**）

以下は探し当てたが **403 / 402 / 503 / 空 で本文が取れなかった**もの。
本文を引用していないので、記録の裏付けには使っていない。

- Derek Yu「PIXEL ART TUTORIAL: BASICS」 https://www.derekyu.com/makegames/pixelart.html （空で返る）
  および転載 https://gamemakerstuff.wordpress.com/2014/06/14/art-pixel-art-tutorial-by-derek-yu-creator-of-spelunky/ （403）
- Cyangmou「Readability - Pixel art Style possibilities」（2018）
  https://lospec.com/pixel-art-tutorials/readability-pixel-art-style-possibilities-by-cyangmou
  … 一覧ページは開いたが、**本体は DeviantArt の画像**で文章として読めない
- Lucas Pope の TIGSource devlog https://dukope.com/devlogs/obra-dinn/tig-32/ （403）
- Pedro Medeiros「How to start making pixel art #6. Basic Color Theory」
  https://medium.com/pixel-grimoire/how-to-start-making-pixel-art-6-a74f562a4056 （403）
- DawnBringer の DB32 原典スレッド https://pixeljoint.com/forum/forum_posts.asp?TID=16247 （403）
- Pixnote「Resolution Simulator & Pixel Art Resolution Guide」 https://pixnote.net/en/learn/resolution/ （403）
- ResetEra「why is small text STILL an issue in modern games? 2025 edition」
  https://www.resetera.com/threads/why-is-small-text-still-an-issue-in-modern-games-2025-edition.1231767/ （403）
- Mary Rose Cook の Screenshake 講演ノート
  http://notebook.maryrosecook.com/Theartofscreenshake,JanWillemNijman.html （503）
- Scoffin Games「Downwell's Palette Progression」
  https://scoffingames.wordpress.com/2019/03/13/downwells-palette-progression/ （403）
- Downwell Wikia の Palettes 一覧 https://downwell.fandom.com/wiki/Palettes （402）
- 2D Will Never Die「Digital Wabi-Sabi: Pixel Art on CRTs」
  https://2dwillneverdie.com/blog/digital-wabi-sabi-pixel-art-on-crts/ （空で返る）
- Learning to See「Why Limit Your Palette?」 https://www.learning-to-see.co.uk/why-limit-your-palette （空で返る）
- Ojiro Fumoto の GDC 2016 講演（動画のみ。中身未確認）
  https://gdcvault.com/play/1023533/Polishing-the-Boots-Designing-Downwell
  https://archive.org/details/GDC2016Fumoto
- Jan Willem Nijman「The art of screenshake」本編（動画のみ。中身未確認）
  https://www.youtube.com/watch?v=AJdEqssNZ-U
- Martin Jonasson & Petri Purho「Juice it or lose it」本編（動画のみ。中身未確認）
  https://www.youtube.com/watch?v=Fy0aCDmgnxg

---

# 索引（件番号への指し示しだけ。中身はここに書かない）

## 分野ごと

- **1 値（明度）の構造**：001, 002, 013, 014, 015, 023, 027, 036, 037
- **2 パレットの規律**：001, 002, 003, 006, 007, 008, 016, 017, 018, 028, 033, 039
- **3 読みやすさ**：008, 009, 020, 023, 026, 027, 028, 034, 035
- **4 密度と粒の揃え方**：004, 005, 007, 011, 025, 026, 036, 037, 040
- **5 画面の重み付け**：004, 009, 013, 019, 024, 027, 034, 035
- **6 動き**：020, 021, 022, 031, 032
- **7 少ない手数で見られるものにする道**：008, 012, 016, 017, 018, 028, 033, 039
- **8 遊んだ人の「安っぽい」「見づらい」の中身**：010, 011, 023, 024, 025, 029, 030, 038

## 「同じ技量なのに磨かれて見える／濁って見える」を分ける要因を扱っている件

028, 029, 030, 013, 004, 005, 034, 028, 039

## 測れる形の基準（数値）を持っている件

001（アクセント 10-20%）、004（320x180）、005（混ぜる解像度は最大2種）、
006・007（NES：64色中25色同時、スプライト1枚3色＋透明、8x8タイル、走査線あたり8枚）、
010（コントラスト比 4.5:1）、011（1080p で最小 28px）、013（key hues 3〜5、sRGB albedo 50-240 / 80-200）、
014（value を2〜4段に割り当てる）、016（16色）、018（16色・4ビット）、
019（HUD に届く注意は2割という主張）、021・022（screenshake の実装値）、
024（spacing 4の倍数、1行70文字）、025（1920 に対し 42pt / 72pt）、
028（サムネイル 231px 幅）、031（歩き4-8枚ほか、192枚 vs 288枚）、032（歩き8枚、8頭身）、
033（4色。うち1色を「重要な物」専用）、023（ガンマ 3.2）
