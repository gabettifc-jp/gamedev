# ゲームの見た目 ── 生の記録（二周目・「辿る」だけ）

調べた日：2026-08-21
調べた者：genre-research（実装・spec を読まずに収集）
題：「ゲームの見た目」二周目

## この回のやり方

**検索から始めていない。**`references/mitame.md`（一周目・1375行）を読み、
**その本文の中で言及されていた別の資料**へ行った。名前しか分からないものは、
その名前を検索して原典に辿り着いた。**新しい言葉を思いついて検索する、はしていない。**

**分類していない。**分野に振り分けず、出会った順に番号を振っただけ。

一件ごとに：**出どころ（URL・書いた人・いつ）／原文に近い書き起こし／どこから辿ってきたか**。

**注記**：本文の取得は WebFetch を通しており、引用符で囲んだ英文はその取得結果が
「verbatim」として返した文字列である。原文ページに当たって確認した URL のみを本文に書いた。
開けなかったものは末尾にまとめた。

---

## 2-01. Fagerholt & Lorentzon「Beyond the HUD - User Interfaces for Increased Player Immersion in FPS Games」（2009・修士論文）

- URL（書誌と要旨・開いた）: https://odr.chalmers.se/items/d5fe6889-4cc6-49c2-ba56-0d759e2f37eb
- URL（全文 PDF・**取得はしたがバイナリで本文を読めなかった**）: https://publications.lib.chalmers.se/records/fulltext/111921.pdf
- 書いた人：Erik Fagerholt / Magnus Lorentzon
- いつ：2009年。Chalmers University of Technology、Data and Information Technology (CSE)
- **辿り元**：`mitame.md` 019（Nasty Rodent「What Is HUD in Games?」）が
  「Fagerholt と Lorentzon の **2009年**の枠組みを引用」と書いていた。**その原典。**

書き起こし（ODR の要旨から）：

- **EA DICE との共同**で行われた研究である
- 手法：ludology・cognitive science・media studies の文献レビューと、実地のユーザテスト
- **成果は四つの設計指針**（原文の見出し）：
  1. **"Know Your Design Space"** … UI を「設計者のための道具箱」として捉え直す
  2. **"Know Your Game"** … 競技性重視か物語重視かが没入に与える影響を検討する
  3. **"Establish Player Agency"** … プレイヤーがゲーム世界の中で「行為者」でいられるようにする
  4. **"Strengthen the Player-Avatar Perceptual Link"** … インタフェースによって
     プレイヤーとアバターの知覚的な結びつきを深める

**拾いどころ**：一周目 019 は、この論文から **四分類（diegetic / non-diegetic / spatial / meta）だけ**を
引いていた。**原典が本当に出したかったのは分類ではなく、上の四つの指針である。**
分類は途中の道具にすぎない。

---

## 2-02. Amazon Fire TV「Design and User Experience Guidelines」

- URL: https://developer.amazon.com/docs/fire-tv/design-and-user-experience-guidelines.html
- 書いた人：Amazon（Fire TV 開発者向け公式ドキュメント）
- **辿り元**：`mitame.md` 011（Game Accessibility Guidelines「最小フォントサイズ 28px」）が
  「**Amazon TV の 10-foot-UI ガイドラインが根拠**」と書いていた。**その根拠側。**

書き起こし（**数値そのまま**）：

- 視聴距離の前提：**"10 or more feet away"**
- 文字サイズ：**"at least 14sp, which is approximately 19px on 720p, 28px on 1080p"**
  → **28px は「1080p に換算した値」であって、元の指定は 14sp である。**
    720p では **19px**。
- **オーバースキャン／安全域**：
  **"avoid placing any of your app's UI elements within the outer 5% of any edge"**
  安全域は UI の **"inner 90%"**
- 解像度・密度：1080p は "1920x1080px"、密度 "320dpi ('xhdpi')"、
  出力解像度 "960x540dp ('large')"

（同じ Amazon の「Display and Layout」ページ
https://developer.amazon.com/docs/fire-tv/display-and-layout.html も開いたが、
出力解像度 1920x1080 / 1280x720 / 640x480、レンダー面 1920x1080、
表示 960x540 dp、密度 320dp、`sw540dp` / `w960dp` / `h540dp` / `v17`、
`ROTATION_0`、screen size "large"、UI mode "television"、screen aspect "long"、
navigation "dpad"、touchscreen "notouch" という記載があるだけで、
**フォントサイズ・安全域・コントラストの記載は無い。**）

**拾いどころ**：一周目には無かった **「外周5%に置くな／内側90%だけ使え」** が、
28px と同じ出どころから出てくる。

---

## 2-03. Anthony Stonehouse「User interface design in video games」（Game Developer, 2014-02-27）

- URL: https://www.gamedeveloper.com/design/user-interface-design-in-video-games
- 書いた人：Anthony Stonehouse
- いつ：2014年2月27日
- **辿り元**：2-01（Fagerholt 論文）を探す過程で、**この記事が同じ四分類を業界へ広めた側**
  として出てきた。`mitame.md` 019 の四分類の、実務側での初出に近い。

書き起こし（各分類の**具体例**。一周目 019 とは別の作品が挙がっている）：

- **Diegetic**：ゲーム世界の中に在り、プレイヤーとアバターが視覚・聴覚・触覚で干渉する要素。
  例：Metro 2033 は **"a complete Diegetic UI with no HUD elements"**。
  キャラクターの**腕時計**がガスマスクのフィルタの残り時間を示す
- **Meta**：物語との結びつきは保つが、ゲームのジオメトリではなく **2D の HUD 平面**に置かれる。
  例：Call of Duty: Modern Warfare 2 の**画面に飛ぶ血しぶき**が体力表示として働く
- **Spatial**：キャラクターが知り得ない情報をプレイヤーに与えるため物語を破るが、
  ゲームのジオメトリの中に留まる。
  例：Splinter Cell Conviction の **"projections that illustrate objectives within the game world"**
  （目標を game world の中に投影する）
- **Non-Diegetic**：フィクションからもジオメトリからも完全に切り離され、独立した見た目を持つ。
  例：World of Warcraft は **"a mostly Non-diegetic UI"** で、全面的にカスタマイズできる

（記事は Fagerholt & Lorentzon の論文を出典として挙げている。**数値は無い。**）

---

## 2-04. Nasty Rodent「Diegetic vs Non-Diegetic UI: The 4-Type Framework Every Game Designer Needs」

- URL: https://nastyrodent.com/diegetic-and-non-diegetic-ui/
- 書いた人：Nasty Rodent
- **辿り元**：`mitame.md` 019 と同じサイトの姉妹記事。Fagerholt を辿る途中で見つけた。

書き起こし：

**二つの軸**（一周目 019 では「その要素がゲームのフィクションの中に在るか／どこに表示されるか」
という曖昧な書き方だった。ここでは軸に名前が付いている）：

1. **Fiction axis**：その要素はゲームの物語世界の一部か。**キャラクターはそれを見る／聞く／触れるか**
2. **Geometry axis**：その要素はゲームの **3D 空間の中**に置かれているか、
   それとも**画面上の 2D オーバーレイ**として描かれているか

| 型 | Fiction | Geometry | 例 |
|---|---|---|---|
| Diegetic | Yes | Yes | Dead Space の RIG スーツの体力表示 |
| Non-Diegetic | No | No | World of Warcraft の体力バー |
| Spatial | No | Yes | Left 4 Dead の味方の輪郭線 |
| Meta | Implied | No | ダメージ時の画面の血しぶき |

**制作費の記述**：
- Diegetic：**"Requires 3D modeling and texturing as part of production-ready character art pipeline...
  animation rigging if it changes state dynamically...LOD consideration"**
- Non-Diegetic：**"Fastest iteration in production, no 3D dependency"**
- **費用が設計の入力である**という主張：
  > **"Cost is a legitimate design input. A diegetic system that cannot be executed cleanly within the production schedule is worse than a well-executed non-diegetic system."**

**失敗の記述**（一周目には無い側）：
- Diegetic の失敗：Dead Space の **"holographic 3D map was diegetic—and it largely failed to aid navigation"**
- Non-Diegetic の失敗：**"Persistent, prominent non-diegetic elements...are the primary source of immersion disruption"**
- Meta UI とアクセシビリティ：
  **"Screen shaking, blur, or distortion should...be accompanied by a settings option"**（前庭障害への配慮）

---

## 2-05. Iacovides, Cox, Kennedy, Cairns, Jennett「Removing the HUD: The Impact of Non-Diegetic Game Elements and Expertise on Player Involvement」（CHI PLAY 2015）

- URL（要旨・開いた）: https://pure.york.ac.uk/portal/en/publications/removing-the-hud-the-impact-of-non-diegetic-game-elements-and-exp/
- 書いた人：Ioanna Iacovides, Anna Cox, Richard Kennedy, Paul Cairns, Charlene Jennett
- いつ：2015年。CHI PLAY 2015（2nd ACM SIGCHI Annual Symposium on Computer-Human Interaction in Play、
  London、2015年10月5–7日）
- **辿り元**：`mitame.md` 019 の **"80% of player attention never reaches the HUD"** という
  裏の取れていない数値を辿ろうとした過程で出てきた、**HUD を消すことの実測研究**。

書き起こし（要旨・原文）：

> "Previous research has shown that player involvement can be influenced by a range of factors, from the controllers used to the perceived level of challenge provided by the game. However, little attention has been paid to the influence of the game interface. Game interfaces consist of both diegetic (that can be viewed by the player-character, e.g. the game world) and non-diegetic components (that are only viewed by the player, e.g. the heads-up display). In this paper we examine two versions of a first-person shooter game to investigate how immersion is influenced through interacting with a diegetic and non-diegetic interface. Our findings suggest that the removal of non-diegetic elements, such as the heads-up display, is able to influence immersion in expert players through increasing their cognitive involvement and sense of control. We argue that these results illustrate the importance of considering the role of expertise in relation to how particular design choices will influence the player experience."

**要点（検索結果側の記述。要旨本文と整合している）**：
- **熟達者**は HUD を消したほうが cognitive involvement と sense of control が高いと報告した
- **初心者は HUD の有無で没入に有意差が無かった**

**拾いどころ**：「HUD を消すと没入する」は**万人に効く話ではない。腕前で効き方が割れる。**
一周目の資料（019・2-03・2-04）はどれも「diegetic のほうが没入する」を前提にしていた。

---

## 2-06. PICO-8 の16色をめぐる lexaloffle BBS スレッド

- URL: https://www.lexaloffle.com/bbs/?tid=30701
- 書いた人：PICO-8 の利用者たち（フォーラム）
- **辿り元**：`mitame.md` 018 が「本文は未読（二次情報）」として挙げていた URL。**開いた。**

書き起こし：

- **なぜ16色かについて、zep（作者）本人の発言はこのスレッドには無い。**
  「All requests for changes like that seem to fall on deaf ears」という利用者の観測があるだけ
- 保持形式について利用者の説明：
  > "Colors are stored as a single nibble, four bits, not a 24-bit value"
- 固定パレットが「その機械らしさ」を作るという議論：C64 と Spectrum の固定16色が
  それらの機械の "characteristic appearance" を作ったのと同じことで、
  > "Having the set palette for Pico8 makes all the games look like Pico8 games."
- 制約が世界を作るという言い方：
  > "The thing in which the Pico-8 shines for me is making it's own 'world'"
- **スレッド末尾に、隠しパレットで "16 extra colors" にアクセスできるという指摘がある**
  （＝**16色固定という規律には、公式に抜け道がある**）

**拾いどころ**：一周目 018 の「PICO-8 は16色しか無いが、その16色をいつでも全部使える」に対し、
**実際には隠しの16色があり、規律は建前である**という情報が原典側に付いていた。

---

## 2-07. W3C「Understanding Success Criterion 1.4.3: Contrast (Minimum)」

- URL: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- 書いた人：W3C / WAI
- **辿り元**：`mitame.md` 010（Game Accessibility Guidelines）が
  「**"a foreground/background contrast ratio of at least 4.5:1"**」「WCAG 2 AA Compliant を狙う」
  と書いていた。**その 4.5 という数字の出どころ。**

書き起こし（**数値そのまま**）：

- 基準：**"The visual presentation of text and images of text has a contrast ratio of at least 4.5:1"**
- **大きい文字の例外**：**"Large-scale text and images of large-scale text have a contrast ratio of at least 3:1"**
- 「大きい文字」の定義：
  **"at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts"**
  → px 換算では **18pt ≈ 24px、14pt bold ≈ 18.5px**（1pt = 1.333px）

**4.5 という数字の導出（一周目に無い、いちばん大事な部分）**：

- 基礎の **3:1** は既存の人間工学規格（ergonomic standards）から来ている
- そこに、加齢によるコントラスト感度の低下を補う経験的な係数 **1.5** を掛けている
- 想定する視力は **20/40**（おおむね **80歳前後**の典型的な視力）
- > "A user with 20/40 would thus require a contrast ratio of 3 * 1.5 = 4.5 to 1"

- 文字以外（図・グラフ・図解）については **1.4.11 Non-Text Contrast** が扱う、と明記

**拾いどころ**：**4.5:1 は「読みやすさ」の絶対値ではなく、「20/40 の視力の人が 3:1 相当を得るための値」である。**
つまり **3:1 が本体で、4.5 は 80歳の目への補正**。

---

## 2-08. W3C「Understanding Success Criterion 1.4.11: Non-text Contrast」

- URL: https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html
- 書いた人：W3C / WAI
- **辿り元**：2-07 の本文が「文字以外は 1.4.11 が扱う」と指していた。

書き起こし（**数値そのまま**）：

- 基準：**"The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):"**
  （対象は user interface components と graphical objects）
- 端数の扱い：**"the computed values should not be rounded (e.g. 2.999:1 would not meet the 3:1 threshold)"**
- **UI 部品**：部品とその**状態**を識別するのに要る視覚情報が対象。
  - **無効状態（inactive）の部品は免除**
  - **フォーカス表示は隣接背景に対して 3:1 を満たすこと**
  - 範囲の限定：
    > "This success criterion does not require that changes in color that differentiate between states of an individual component meet the 3:1 contrast ratio when they do not appear next to each other."
- **図形（graphical objects）**：対象は **"Parts of graphics required to understand the content"**。
  つまり**絵の全部ではなく、意味を伝えるのに要る部分だけ**。
  除外されるもの：同じ情報が文字でも出ているもの／理解に不要な装飾／
  表など別形式でも得られるもの／ロゴ
- **免除**：
  > "a particular presentation of graphics is essential to the information being conveyed"
  に当たるもの（ロゴ、旗、写真、医学図、測定値を表す色のグラデーションなど）

**拾いどころ**：**「絵の中の、意味を担っている部分だけが 3:1 を要求される」**という切り分け方。
一周目は「文字と UI のコントラスト 4.5:1」しか持っていなかった。
**遊びに関わる図形（弾・敵・拾い物）に当たるのはこちらの 3:1 である。**

---

## 2-09. Jonathan Snook「Colour Contrast Check」

- URL: https://snook.ca/technical/colour_contrast/colour.html
- 書いた人：Jonathan Snook
- **辿り元**：`mitame.md` 010 が「テストの道具：Snook contrast checker」と名指ししていた。

書き起こし（**数値そのまま**）：

- 何をする道具か：
  > "The Colour Contrast Check Tool allows to specify a foreground and a background colour and determine if they provide enough of a contrast"
- **閾値は二つある**（一周目は比率しか持っていなかった）：
  - **Brightness Difference >= 125**
  - **Colour Difference >= 500**
- WCAG 2.0 の側：**AA は 4.5:1（通常）／3:1（大きい文字）**、
  **AAA は 7:1（通常）／4.5:1（大きい文字）**
- 判定の出し方：**両方の閾値を超えれば pass。片方だけなら "sort of passes"。どちらも超えなければ fail**
- > "The WCAG 2.0 formula differentiates between text smaller than 18pt text larger than 18pt (or text that is bold and larger than 14pt)."

**拾いどころ**：**明度差と色差は別々に測られていて、片方だけ通ることがある。**
「コントラスト比 4.5:1」の一本値では拾えない失敗がある。

---

## 2-10. Game Accessibility Guidelines「Ensure no essential information is conveyed by a fixed colour alone」

- URL: https://gameaccessibilityguidelines.com/ensure-no-essential-information-is-conveyed-by-a-colour-alone/
- 書いた人：Game Accessibility Guidelines
- **辿り元**：`mitame.md` 010・011 と同じサイトの、**一周目が取らなかった項目**。
  一覧（https://gameaccessibilityguidelines.com/full-list/ ）を開いて見つけた。

書き起こし（**数値そのまま**）：

- 指針：色だけで本質的な情報を伝えない。**色は他の伝達手段（文字・記号・模様・形）の裏付けとして使う**
- 色に依存する UI とゲームプレイ要素は**カスタマイズできるようにする**。
  よくある色覚特性向けのプリセット＋任意の色選択を用意する
- 誰のためか：
  - **赤緑の色覚特性（男性の 8-10%）**
  - tritanopia（黄が見分けづらい）
  - 白内障、achromatopsia、後天性の色覚特性
  - **色以外の裏付けは全プレイヤーの役に立つ**
- **数値**：
  - **男性の 8-10%** が赤緑の色覚特性
  - **EA Tiburon の推計で、Madden NFL の利用者のうち 50万人超が色覚特性を持つ**
- 実装：
  - シミュレータで試す（**Color Oracle** は無料、**Unreal Engine には内蔵**）
  - **重度 100% を想定して設計すれば、軽度も全部覆える**
  - プリセットは deuteranopia / protanopia / tritanopia / custom
  - 社内の色覚特性を持つ人と試す（**問題の発見には使えるが、検証（validation）には使えない**）
  - **画面全体にフィルタを掛ける手は避ける。効かないうえ評判が悪い**
  - 色数を絞らざるを得ないときの既定は **オレンジ対青**＋明度差
  - 良い例として Destiny、Faster Than Light、Splatoon
- プレイヤーの声：
  > "I really like it when they just change UI and the likes so I can tell the difference between enemies and friendlies"（Cregavitch）
- 区分：**Vision（Basic）**

**拾いどころ**：一周目の「枠に入らなかったもの #8（色以外の手段での二重符号化）」が、
**この一件で全部埋まる。**しかも「全画面フィルタは効かない」という否定形まで付いている。

---

## 2-11. Game Accessibility Guidelines「Avoid placing essential temporary information outside the player's eye-line」

- URL: https://gameaccessibilityguidelines.com/avoid-placing-essential-temporary-information-outside-the-players-eye-line/
- 書いた人：同上
- **辿り元**：同じ一覧ページ（full-list）から。

書き起こし：

- 指針そのもの：**"Avoid placing essential temporary information outside the player's eye-line"**
- 中核の言い回し：
  > "avoid placing temporary elements that are essential to gameplay far from where the player's focus is likely to be"
- 理屈：**視覚障害の多くは周辺視の欠損を伴う。**
  **画面の縁に「常設」される UI は構わない**（プレイヤーが位置を学習するから）。
  **問題は「一時的で、かつ遊びに不可欠な」要素**で、これは見落とされる
- VR では、聴覚に障害のあるプレイヤーにとって音の合図が代わりにならないので特に問題になる
- 良い例：Tony Hawks HD のプロンプト位置。**悪い例：God of War 3 のクイックタイムイベントの表示**
- 区分：Vision（Intermediate）

**拾いどころ**：**「常設か一時的か」で置き場所の規則が変わる。**
一周目 019 の "Peripheral readability"（画面端は周辺視で読まれる）と組み合わさると、
**「端に置いてよいのは常設のものだけ」**という規則になる。

---

## 2-12. Game Accessibility Guidelines「Use simple clear text formatting」

- URL: https://gameaccessibilityguidelines.com/use-simple-clear-text-formatting/
- 書いた人：同上
- **辿り元**：同じ一覧ページ（full-list）から。
  `mitame.md` 024（zenn）の「**1行70文字以内**」の裏付けにもなっている。

書き起こし（**数値そのまま**）：

- **Vision（Basic）側**：
  - **clean sans serif**、字形が互いに区別できること（**p/d、p/q の鏡像を避ける**）
  - ascender と descender がはっきりしていること
  - **背景がごちゃごちゃしていないこと**
- **Cognitive（Basic）側**（長い文章のとき）：
  - **全部大文字にしない（mixed case）**
  - **両端揃えにしない（unjustified、左揃え）**
  - **行間 1.5倍**
  - **1行およそ 70文字**
- ディスレクシア向け書体：**単独の選択肢にせず、代替として用意する**（効き方が個人差が大きいため）
  - 挙げられている書体：Dyslexie（有償）、FS Mencap（有償）、**OpenDyslexic（無料）**
- **数値**：**The Last Door では、クリアしたプレイヤーの 14% がディスレクシア向け書体の設定を使った**
- プレイヤーの声：
  > "A lot of times I have trouble reading text in a game...It's infuriating."（Mabdulra）
  > "I love that dyslexia-friendly font...didn't have to read everything 3 times."（Pyrophex）

---

## 2-13. Game Accessibility Guidelines「Vision」カテゴリの全項目

- URL: https://gameaccessibilityguidelines.com/full-list/
- **辿り元**：`mitame.md` 010・011 が同サイトの二項目だけを取っていたので、一覧を開いた。

書き起こし（**原文の項目名そのまま**。一周目に入っているのは最初の三つだけ）：

**Basic**
- "Provide high contrast between text/UI and background"
- "Use simple clear text formatting"
- "Use an easily readable default font size"
- "Avoid VR simulation sickness triggers"
- "If the game uses field of view (3D engine only), set an appropriate default for the expected viewing environment"
- "Ensure no essential information is conveyed by a fixed colour alone"
- "Ensure interactive elements / virtual controls are large and well spaced, particularly on small or touch screens"

**Intermediate**
- "Avoid placing essential temporary information outside the player's eye-line"
- "Ensure manual / website are provided in a screen reader friendly format"
- "Give a clear indication that interactive elements are interactive"
- "Provide a choice of cursor / crosshair colours / designs"
- "Ensure sound / music choices for each key objects / events are distinct from each other"
- "Provide an option to adjust contrast"
- "Ensure screenreader support for mobile devices"
- "Provide an option to turn off / hide background movement"
- "Use surround sound"
- "Avoid (or provide option to disable) any difference between controller movement and camera movement"
- "If the game uses field of view (3D engine only), allow a means for it to be adjusted"
- "Provide separate volume controls or mutes for effects, speech and background / music"
- "Allow interfaces to be resized"

**Advanced**
- "Provide an audio description track"
- "Simulate binaural recording"
- "Use distinct sound / music design for all objects and events"
- "Ensure screen reader support, including menus & installers"
- "Ensure that all key actions can be carried out by digital controls (pads / keys / presses), with more complex input (eg. analogue, gesture) not required, and included only as supplementary / alternative input methods"
- "Allow easy orientation to / movement along compass points"
- "Provide a voiced GPS"
- "Provide pre-recorded voiceovers for all text, including menus and installers"
- "Provide a pingable sonar-style audio map"
- "Allow the font size to be adjusted"

**拾いどころ**：**「Vision」の項目に音の指針が大量に混ざっている**
（surround sound、distinct sound design、binaural、sonar-style audio map）。
**この指針の作り手にとって「見づらさの対策」は音の設計を含む。**
一周目の「枠に入らなかったもの #9（音との組み合わせ）」の裏付け。
また **"Provide an option to turn off / hide background movement"**（背景の動きを止める設定）が
Vision に入っているのも、一周目の 6（動き）と 3（読みやすさ）のどちらでもない。

---

## 2-14. Folmer Kelly「Indies, resist the urge to 'juice it or lose it'」（GDC Europe 2014）

- URL: https://www.gamedeveloper.com/design/video-indies-resist-the-urge-to-juice-it-or-lose-it-
- 書いた人：Game Developer の記事。発言者は **Folmer Kelly**（Sets and Settings の開発者）
- いつ：GDC Europe Independent Games Summit（2014年）
- **辿り元**：`mitame.md` の「読めなかった出どころ」に
  「Martin Jonasson & Petri Purho『Juice it or lose it』本編（動画のみ。中身未確認）」があった。
  **その講演を検索して辿った先に、正面から反対している講演があった。**

書き起こし：

- 磨きを足すとゲームは生き生きするが、そのことによって
  > **"we're actually losing a level of immersion"**
- 視覚効果への偏りについて：
  > **"There has been such a tremendous focus on putting eye candy in our games, says Kelly, that the context doesn't get enough consideration."**
- 主張の芯：screenshake やパーティクルといった「juiciness」を優先することは、
  没入を支えている文脈の設計から注意をそらし、**没入を損なう**

**拾いどころ**：**相場が割れている。**
`mitame.md` 021・022・028 は全部「screenshake とパーティクルは磨きに効く」側だった。
**反対側の講演が同じ GDC で行われている。**

---

## 2-15. Josh Whitkin「Juicy: a useful game design term?」（Game Developer, 2014-01-31）

- URL: https://www.gamedeveloper.com/design/juicy-a-useful-game-design-term-
- 書いた人：Josh Whitkin
- いつ：2014年1月31日
- **辿り元**：同じく「Juice it or lose it」を辿る過程。2-16 の abagames がこの記事を出典に挙げていた。

書き起こし：

- 由来：**"juicy" は 00年代のカジュアルゲーム隆盛期に広まった言葉**である
- 定義（Morgan と Brown による、詩的な言い方として引用）：
  > "the satisfying feeling we get when potential energy is converted to kinetic energy. That point where we release energy in a way that creates surprise, delight"
- 記事の立場：juiciness は論理的なソフトウェア UI 原則ではなく **"an emotional lens on design"** である
- **公平さの感覚との一致**：よく設計された juicy なゲームは、プレイヤーの潜在的な
  公平さ・報酬・罰の感覚に合っている ──「うまくやったのだから、何か良いことが起きるはずだ」
- **尺度は小さいほう**：得点системではなく **"tiny player actions"** が対象。
  "small picture, but it can add up to the big picture"
- 例：
  - **Plants vs Zombies**：コインを拾うときの
    "that little flash and spinning of the coin, traveling to your points"
  - **Bookworm**：ワームのキャラクターがプレイヤーの選択に反応し、
    "mirror and validate the player's internal, emotional state" として働く
  - **Peggle** ほか PopCap 作品
  - **Pac-Man**：報酬は "the emotional feedback" であり、**即時性が要る**

---

## 2-16. abagames「Making Games 'Juicy'」（Joys of Small Game Development）

- URL: https://abagames.github.io/joys-of-small-game-development-en/make_game_juicy.html
- 書いた人：abagames（ABA Games、日本の小規模ゲーム作者）
- **辿り元**：同じく「Juice it or lose it」を辿る過程。この文書が同講演を出典に挙げている。

書き起こし（**手法の一覧そのまま**）：

1. 色を足す
2. tweening と easing で滑らかに動かす
3. 出来事に応じて物の大きさを変える／弾ませる
4. 効果音と音楽を入れる
5. 大量のパーティクルで煙・破壊・軌跡を出す
6. 画面を揺らして衝撃を伝える
7. **物に目と笑顔を付け、環境に反応させる**
8. **環境を音楽のリズムに反応させる**
9. 攻撃を受けたときに hit-stop や knock-back のアニメを入れる

- **数値（フレーム・ミリ秒・ピクセル・％）は一つも書かれていない**
- 挙げている出典：
  - "Secrets of Game Feel and Juice | Game Maker's Toolkit"（動画）
  - "Juice it or lose it" - Martin Jonasson & Petri Purho（動画）
  - "Research: Making a 'juicy' game"（RPG Playground）
  - "Juicy: a useful game design term?"（Game Developer ＝ 2-15）
- 例として PopCap の **Peggle**

**拾いどころ**：一周目 021（Vlambeer の18項目）には **7・8（目を付ける／音楽に反応させる）が無い。**
Vlambeer の一覧は「撃つゲームの手応え」に閉じているが、juice の系譜にはそれ以外がある。

---

## 2-17. Thumbsticks「GDC 2016: Ojiro Fumoto on polishing Downwell's gun boots」

- URL: https://www.thumbsticks.com/gdc-2016-ojiro-fumoto-on-polishing-downwells-gun-boots/
- 書いた人：Thumbsticks（GDC 2016 の講演レポート）
- **辿り元**：`mitame.md` 033 が「Fumoto 本人の GDC 2016 講演は動画であり中身は確認していない。
  **本人が色について何と言ったかは未確認**」と書いていた。**その講演の書き起こし側。**

書き起こし（Fumoto の発言）：

> "I was, and still am, deeply in love with Spelunky. Simply, as a gamer I wished there'd be a game that was as engaging and unpredictable as Spelunky but playable on mobile."

> "I had played a bunch of action games on mobile before and I felt that the more buttons they have on screen, the harder the game was to control."

> "The gun boots mechanic was fun, it was weird as a concept, it was definitely different as a control scheme, and it was intuitive to control."

> "The shooting, of course, was the offensive option but the recoil could be used for manoeuvring in mid-air. Immediately I knew this was a great mechanic that held a lot of potential."

> "Maybe a stamina system like in Dark Souls would work well, where attacking would use up stamina but it would replenish after a short amount of time."

> "It might be good practice in general to focus on what makes your game special and make that part shine as much as possible with the surrounding gameplay."

**結果（これがこの件の答え）**：
**この講演レポートには、色・パレット・解像度・見た目についての記述が一切無い。**
`mitame.md` 033 が保留にしていた「本人が色について何と言ったか」は、
**この経路では埋まらなかった。**講演は操作の仕組みの話に終始している。

---

## 2-18. Philip "Pepto" Timmermann「Calculating the color palette of the VIC II」

- URL: https://www.pepto.de/projects/colorvic/
- 書いた人：Philip "Pepto" Timmermann
- **辿り元**：`mitame.md` 016（Arne の16色パレット）が
  「Commodore 64 は **"more muted 16 color palette, which I heard was deliberately designed"**」
  と伝聞で書いていた。**その裏を取りに行った。**

書き起こし（**数値そのまま**）：

- パレットの構造：**"16 fixed colors, consisting of 8 unique hues and 8 shades or monochromes"**
- 色の決まり方：**色相環上の16の等間隔の角度**と、**輝度スケール上の32の等間隔の水準**の組で定義される
- **輝度の段数**：チップのリビジョンで違う。
  - **最初のリビジョンは、黒に加えて 4 段の等間隔の luma しか無かった**
  - よく使われる改良版はこれを **doubled**（倍にした）
  - よく使われる版の luma 値：**0（Black）から 32（White）まで**。
    途中に **8, 10, 12, 15, 16, 20, 24** といった値が割り当てられている
- なぜこうなったか：
  > "was designed to generate a video signal that is compatible with analog television, that's why colors are composed of Luma (brightness) and Chroma (hue & saturation) components"
- **設計意図についての記述**：この文書は「意図的に設計された」とは書いていない。
  代わりに、
  > "small lot-to-lot variations in signal output were deemed acceptable, as a primary design goal of the chip, was to keep manufacturing costs as low as possible"
  と書いている（**製造原価を下げることがチップの主目的だった**）

**拾いどころ**：**Arne（016）の「deliberately designed」という伝聞は、原典側では支持されない。**
C64 の色は「テレビ信号の都合＋原価」から出た **YUV 由来の副産物**であり、
「muted で良い配色」に見えるのは結果である。
**一周目 016 が「昔のパレットは回路の都合」と C64 を対比させていた構図が、ここで崩れる。**

---

## 2-19. saint11（Pedro Medeiros）「Glossary」

- URL: https://saint11.art/blog/glossary/
- 書いた人：Pedro Medeiros（Celeste・TowerFall のピクセルアート）
- いつ：2021年2月20日
- **辿り元**：`mitame.md` 005 が引いていたブログ一覧（https://saint11.art/blog/ ）を開き、
  一周目が取っていなかった記事へ。

一覧に載っている記事（**5本しかない**）：
Scaling Pixel Art（2024-11-14）／Using 3d models as pixel art reference（2023-07-18）／
Consistency（2023-04-19）／Big Pixel Art（2022-06-11）／Glossary（2021-02-20）
※ 一周目は Scaling と Consistency の2本を取っている。

書き起こし（**用語の定義そのまま**）：

- **Cluster**
  > "A group of 2 or more pixels of the exact same color. Clusters can connect with diagonal pixels, but it's a weaker connection."
- **Dither**
  > "A technique used to create the illusion of color depth and shading in pixel art where color palette is limited."
- **Fading Color**（別名 half-tone）
  > "The transitive color between the foreground and background color that is available within your current color palette."
- **Orphan Pixel**
  > "A lone pixel that doesn't touch any pixel cluster."
  初心者はこれを避けるのが普通
- **Regular Lines**
  > "Lines with a constant pixel length per step. Usually doesn't require anti-alias, but can be 'softened' with a fading color."
- **Specular Highlight**（別名 reflection highlight）
  > "the brightest spot in the object. Glossy and reflective objects have small and focused highlights."
- **Shadow** は二種類
  - **Volume Shadow**：> "The most common type of shadow, it's a self-projected soft shadow."
  - **Projected Shadow**：> "When one object projects a patch of shadow into another. This is usually a very sharp shadow."

（**Big Pixel Art**（https://saint11.art/blog/big-pixel-art/ ）も開いたが、
> "sometimes I work on bigger pixel art pieces, here are some of my favorites."
という一文と作品の並びだけで、**定義・解像度・助言は一切無い。**）

---

## 2-20. Pixel Parmesan「Choosing the Right Resolution for your Pixel Art」（2021-05-10）

- URL: https://pixelparmesan.com/blog/choosing-the-right-resolution-for-your-pixel-art
- 書いた人：Pixel Parmesan
- **辿り元**：`mitame.md` 001 と同じ著者のブログ。一覧（https://pixelparmesan.com/blog ）を開いて、
  一周目が取らなかった記事へ。**001 が言っていた "pillow shading" の語もここに出てくる。**

書き起こし（**数値そのまま**）：

- 例（ハンバーガーのスプライト）での判断：
  - **32x32**：> "probably my preferred resolution for this, as it allows each element of the burger to have variation in depth and texture"
  - **48x48**：> "fine"
  - **64x64**：> "verging on too large"
- **解像度を決めるための二つの問い**：
  1. > "What is the smallest necessary detail?"
  2. > "How many pixels do I need to render this detail _in the intended style_?"
- **大きすぎることの害**：
  > "you may be tempted to fill the extra space with noise, pillow shading, and other types of sloppy pixels."
- **経験則**：普通のピクセルアートでは **"if in doubt, go smaller"**。
  高解像度のピクセル画では逆
- 様式の考え方：
  > "In pixel art, there should be intention behind every pixel, while in drawing there should be intention behind every stroke."
- 高解像度側の警告：解像度が足りないと
  > "in an awkward in-between which isn't quite 'true' pixel art nor high-res pixel drawing"
  に落ちる

**拾いどころ**：一周目は解像度の話を「拡大縮小の整数倍」（004・005）としてしか持っていなかった。
**「そもそも何ピクセルで描くか」は別の問いで、答えは「いちばん小さい必要な細部から逆算する」。**
そして**大きすぎる canvas は下手に見える原因になる**（余白をノイズと pillow shading で埋めてしまう）。

---

## 2-21. Pixel Parmesan「Dithering for Pixel Artists」（2021-01-18）

- URL: https://pixelparmesan.com/blog/dithering-for-pixel-artists
- 書いた人：Pixel Parmesan
- **辿り元**：同じブログ一覧から。`mitame.md` 036・037 のディザリングの話に対応する「作り方」側。

書き起こし：

- **二種類に分けている**：
  - **Fill Dithering**：
    > "used to create an additional color by combining two pre-existing colors. This is generally applied as a 'fill' consistently throughout an entire form or space."
  - **Transitional Dithering**：
    > "used to smooth a transition between two colors or soften an edge. This type of dithering is most useful for relatively higher res pixel art with a more painterly aesthetic."
- **ディザを掛けてはいけない場合**：
  - 細部の量に対してスプライトが小さすぎるとき
  - **キャラクタースプライトの大半、特にアニメーションするもの**
  - 望まないノイズ／質感を生むとき
- **掛けてよい場合**：1bit または色数の少ない作品／painterly な高解像度作品／
  特定の物の縁を選択的に和らげるとき
- **決定的な規則**：
  > "The greater the contrast between the two colors you are blending, the more dithering steps you will need (and in turn the greater the resolution required.)"
- 警告：ディザは **"softens edge definition and may disrupt the integrity of forms"**。
  また**拡大表示や大きな画面ではディザのパターンが露骨に見える**ので、表示条件を先に考えること

**拾いどころ**：**「明度差が大きいほど、必要なディザの段数が増え、必要な解像度も上がる」**という
**量的な結びつき**。一周目のディザの記述（036・037・040）は全部「昔の機械でどう見えたか」で、
**「いま自分が掛けるとき、どれだけの解像度が要るか」は無かった。**

---

## 2-22. Pixel Parmesan「Anti-Aliasing Fundamentals for Pixel Artists」（2020-09-14）

- URL: https://pixelparmesan.com/blog/anti-aliasing-fundamentals-for-pixel-artists
- 書いた人：Pixel Parmesan
- **辿り元**：同じブログ一覧から。`mitame.md` 001 が名前だけ出していた **banding** の定義がここにある。

書き起こし：

- 定義：
  > "Anti-aliasing is a technique used to subvert the limitations of the grid, and to create the illusion of smooth forms and blended colors."
  中間の**知覚明度（perceived value）**を持つ画素を置いて、縁のガタつきをならす
- **掛ける場所**：
  - 滑らかさと細部が要る形
  - **ゲームスプライトでは「外側の縁」ではなく「内側の縁」に掛ける**
  - 線分が長いほど、AA の段数を増やしてよい
- **掛けてはいけない場所**：
  - **平行に並ぶ同じ長さの線を作ってしまうとき ＝ banding**。
    banding はグリッドを壊すどころか**グリッドを強調してしまう**
  - **背景が変わりうるスプライトの外縁**
  - **小さいスプライト**。AA が滑らかさではなく**ノイズとして読まれる**
  - ガタつき自体が形の微妙さを伝えている場合
- **Jaggies** の定義：意図した線や曲線を十分に表せていないと判断される画素の並び
- **Banding** の定義：同じ長さの線が平行に走り、**理論上のグリッドを補強してしまう**望まぬ模様
- 警告：
  - 小さいスプライトでは AA はノイズに見える
  - **背景色が変わると外縁の AA は間違って見える**
  - 考えずに掛けると banding になり、形の読みを壊す
  - **すべての様式に AA が要るわけではない。要るかどうかを先に考えること**

**拾いどころ**：**「外縁に AA を掛けると、背景が変わったとき破綻する」**という、
遊びに関わるスプライト固有の規則。一周目には無い。

---

## 2-23. Wikipedia「Notan」

- URL: https://en.wikipedia.org/wiki/Notan
- **辿り元**：`mitame.md` 014（Virtual Art Academy の Notan 記事）が
  「語源は日本語の『濃淡』。"Nong (thick/strong) and Dan (weak/watery)"」と書いていた。
  **その語源と、西洋美術教育に入った経路を辿った。**

書き起こし：

- **語源**：**濃**（nō）＝ "dark, concentrated, thick"、**淡**（tan）＝ "thin, pale, fleeting, weak"。
  日本語では **「濃淡をつける」＝ to add contrast** で、絵に限らず幅広く使う
- 定義：
  > "the use of light and shade while also implying a balance or harmony in their respective contrast"
  正の空間と負の空間の相互作用を扱い、立体の形を二次元の平らな形に翻訳する
- **西洋への導入経路**：**Ernest Fenollosa（1853–1908）**が19世紀末の合衆国に持ち込み、
  **Arthur Wesley Dow** が **1893年の論文**と **1899年の著書
  『Composition: Understanding Line, Notan and Color』**で広めた
- **段の使い分け**：
  - **2段**：明るい調子を白、暗い調子を黒として組み立てる白黒のスケッチ
  - **3段**：黒と白の間に **50/50 のグレー**を入れる。別の調子を加えた変種もある
- **現代の位置づけ**：**筆で構図の要素を捉える粗いスケッチの練習**であり、
  **立体感を出す「陰影付け（shading）」とは明確に別のもの**

**拾いどころ**：**Notan は陰影ではない。**一周目 014 は「明暗の段数」の話として取っていたが、
原義側は**「立体を平らな形に翻訳する」**話であり、**shading とは別の作業**だと明記している。
（＝ 014 の「Tip #3 輪郭の正確さは重要でない、大きさと配置に集中する」がなぜそうなのかの理由。）

---

## 2-24. Public Domain Review「Arthur Wesley Dow's Floating World: *Composition* (1905 edition)」

- URL: https://publicdomainreview.org/collection/dow-composition/
- **辿り元**：2-23 が名指しした Dow の『Composition』（1899）の原典側。

書き起こし：

- **Notan** は **"a neologism adopted from Ernest Fenellosa"**（原文ママ）で、
  日本語の「明」と「暗」を合わせた語として、**色・質感・細部という邪魔を除いた
  コントラストの働きと配置**を指す
- Dow 本人の言葉として引かれている一節：
  > "one evening with Hokusai gave me more light on composition and decorative effect than years of study of pictures"
- **1905年版の全文スキャン**：https://archive.org/details/compositionserie00dowa/page/n6/mode/1up
  **1913年版（カラー図版入り）**：https://archive.org/details/compositionserie00dowauoft
  （**この二つの archive.org は開いていない。**中身は引用していない）

**拾いどころ**：**「色・質感・細部を取り除いてコントラストだけを見る」**という
グレースケール検査の作法（`mitame.md` 013・015 の value study）は、
**1899年の美術教科書に既に方法として書かれている。**

---

## 2-25. Wikipedia「Twelve basic principles of animation」

- URL: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation
- **辿り元**：`mitame.md` 020（Chris Totten「12 principles for game animation」）は、
  **Disney の12原則をゲーム向けに翻案したもの**である。**その元の側。**

書き起こし：

- 出どころ：Disney のアニメーター **Ollie Johnston と Frank Thomas** が **1981年**の著書
  **『The Illusion of Life: Disney Animation』**で提示した
- **Staging の定義（Johnston & Thomas の原文）**：
  > **"the presentation of any idea so that it is completely and unmistakably clear"**
- **Anticipation**：観客に次に何が起きるかの手がかりを与えて動作を準備する。
  例：跳ぶ前に膝を曲げる踊り手、本振りの前に振りかぶるゴルファー
- **Timing**：ある動作に割く**絵／フレームの枚数**が速さを決める。
  速さは人物の気分・感情・性格を作ると同時に、物理法則に従わせる
- **Exaggeration**：
  > "animated motions that strive for a perfect imitation of reality can look static and dull."
  どこまで誇張するかは、写実を狙うか特定の様式を狙うかによる
- **Appeal**：演技でいう「華」に当たる。**善玉である必要はない。悪役にも appeal はある**
- **写実ではなく読みやすさの原則**：**Staging だけは、不要な細部よりも
  「明瞭さ」と「観客の注意の誘導」を優先する原則である**と明記されている

**拾いどころ**：**12原則のうち、見た目の読みやすさを直接扱っているのは Staging 一つだけ。**
残りは写実・重み・魅力の話である。`mitame.md` 020 が
「キャラクターは黒いシルエットのままで読めなければならない」とゲーム側で足した部分は、
**Disney の原文には無い、ゲーム側の追加である。**

---

## 2-26. 4Gamer「［CEDEC 2022］『ヘブンバーンズレッド』の"最上の，切なさを。"を実現するUIデザイン」

- URL: https://www.4gamer.net/games/487/G048777/20220826055/
- 書いた人：4Gamer（2022年8月26日）。CEDEC 2022 の同じ講演のレポート
- **辿り元**：`mitame.md` 035 はファミ通App のレポートだった。**同じ講演の、別媒体のレポート。**

書き起こし：

- **視線誘導**：「明暗差や形状差を用いた視線誘導」。
  「明暗や彩度の違う場所があれば、自然と目が吸い寄せられるという性質」を利用する。
  具体例として「過去をたどる」「出撃」ボタン、
  **アリーナの「もう一度プレイする」ボタンで入力制限時間を示すバー**に自然と注目させる設計
- **ブランドと書体**（**一周目のファミ通App 版には無い**）：
  「オリジナルのフォントを作り、ブランドカラーのピンクを取り入れて認知度を高めている」。
  プレイヤーは「ヘブバンと言えばあのフォントとピンク色」と認識している
- **余白と間**：「要所要所に設けられた余白や間」。「装飾を削って余白もデザインとしている」。
  1日の始まりと終わりでは「敢えてじっくり間を取ることにより、戦い続ける月歌たちが
  1日を生き抜いた安堵感や過ぎゆく時の儚さといった演出」を行う
- **スマートフォン実機での確認**（**一周目には無い**）：
  「スマートフォン実機による繰り返しの確認を推奨」。
  PC の開発環境は「画面のサイズや、入力の際に指が隠れないといった点でスマートフォン実機とは
  かけ離れた環境」であるため
- **点滅の抑制**（**一周目には無い**）：「過度に画面を明滅させることがない」設計方針

**拾いどころ**：**「入力の際に指が隠れない」**という、PC のモニタでは絶対に見つからない失敗。
一周目の「枠に入らなかったもの #6（表示環境の差）」の実例。

（CEDEC 2022 の公式セッションページ http://cedec.cesa.or.jp/2022/session/detail/103.html も開いたが、
これは**別のセッション**だった：「もう迷わない！品質最大化のためのUIインタラクション開発フロー」
（筒井豊／株式会社サイバーエージェント UIデザイナー、佐藤和貴／株式会社ジークレスト アニメーター）。
概要は「インタラクション制作のポイントを開発段階ごとに整理してお伝えします」で、
**開発の後工程になりやすいインタラクション制作**を、サイバーエージェントのゲーム事業部が研究した
「インタラクションを最大化するためのフロー」として、具体的なゲーム事例を交えて紹介する内容。
受講対象は「ゲームUIに従事、または興味のある方」「UIのインタラクションやアニメーションに興味のある方」。
── **`mitame.md` 035 が「開いていない」と書いていた URL は、その講演のものではなかった。**）

---

## 2-27. SLYNYRD「Pixelblog 63 - Horizontal Shmup」（2026-07-26）

- URL: https://www.slynyrd.com/blog/2026/7/26/pixelblog-63-horizontal-shmup
- 書いた人：Raymond Schlitter（SLYNYRD）
- **辿り元**：`mitame.md` 032 が Pixelblog 50 を引いていた。**同じ連載の、他の回。**
  一覧（https://www.slynyrd.com/blog ）を開いて選んだ。

書き起こし（**数値そのまま**）：

- 優先順位：
  > **"Readability in shmups should always be priority, especially the clarity of projectiles."**
- **背景を後退させるための調整値**（Aseprite の調整機能を使用）：
  **saturation -20、contrast -15、brightness +15**
- **解像度**：native **470x240** px。**4倍**で **1920x1080** px に拡大（pixel-perfect）
- **背景素材の寸法**：ループする素材はすべて **横240px**。横方向の遊び場を埋めるには **2回**繰り返す
- **自機スプライト**：およそ **48x32** px、**5フレーム**（中立＋上下それぞれ2段のロール）
- **当たり判定**：
  - 自機の被弾判定は**小さい中心の円**
  - 敵弾も**小さい円**
  - **拾い物には、別に大きい取得判定**を持たせる
  - > "avoid making the player hit box so large it extends beyond the actual pixels of the sprite."
- **視差スクロール速度（20fps のとき、1フレームあたりのピクセル数）**：
  - 草：**4 ppf**
  - 木（層1）：**3 ppf**
  - 木（層2）：**2 ppf**
  - 山／雲1：**1 ppf**
  - 雲2：**0.5 ppf**
  - 空：**0（静止）**

**拾いどころ**：**「背景を後退させる」を、S -20 / C -15 / B +15 という実際に打てる数字にしている。**
一周目 034（Sandro Maglione）は「背景は暗く、コントラストを下げ、**彩度を上げる**」と書いていた。
**ここでは彩度を下げている。**→ **相場が割れている。**

---

## 2-28. SLYNYRD「Pixelblog 62 - Landscape Backgrounds」（2026-05-27）

- URL: https://www.slynyrd.com/blog/2026/5/27/pixelblog-62-landscape-backgrounds
- 書いた人：Raymond Schlitter（SLYNYRD）
- **辿り元**：同じ連載の一覧から。

書き起こし（**数値そのまま**）：

- **空気遠近の規則**（原文）：
  > "The closest plane is the most saturated with strongest contrast between light and shadow. Therefore, saturation reduces with each receding plane, while lightness increases when under the circumstances of daylight, and atmospheric haze. Also, the hue shifts more to the color of the sky with each receding plane."
  → **手前ほど彩度が高くコントラストが強い。奥へ行くほど彩度は下がり、明度は上がり、
  色相は空の色へ寄っていく。**
- **パレットの大きさ**：
  - 谷：**15色**／砂漠：**15色**／森：**15色**
  - **推奨上限：16色以下**
- **解像度**：**192x144** px（4:3）。
  8bit・16bit 機の伝統的な解像度（**256x224、256x240**）に収まる
- **CRT フィルタ**：走査線の見え方のため **768x576** px（**4倍**）に拡大して掛ける

**拾いどころ**：2-27 と合わせると、**同じ著者が「奥は彩度を下げる」で一貫している。**
`mitame.md` 034 の「Backgrounds far from the player should have more saturated colors」とは
**正面から反対。**

---

## 2-29. Lospec「Pixel Art Tutorials」一覧

- URL: https://lospec.com/pixel-art-tutorials/pixel-art-tutorial-by-derek-yu
  および同一覧に載っている各項目
- **辿り元**：`mitame.md` の「読めなかった出どころ」に
  「Cyangmou『Readability - Pixel art Style possibilities』（2018）……本体は DeviantArt の画像で
  文章として読めない」「Derek Yu『PIXEL ART TUTORIAL: BASICS』（空で返る）」があった。
  **その一覧側は開けた。**

書き起こし（一覧に載っている項目そのまま）：

| 題 | 著者 | 年 | リンク先 | 説明・タグ |
|---|---|---|---|---|
| Pixel Logic - A Guide to Pixel Art | Michael Azzi | 2018 | https://gumroad.com/l/pixel-logic | "Introduction to pixel art covering all the basic techniques. Recently completed!" タグ：introductory, beginner, lines, colors, antialiasing, dithering, perspectives。評価 9.00（104 likes、28 recommendations） |
| Walk Cycle | Pedro Medeiros | 2017 | https://twitter.com/saint11/status/905098438571958272 | 歩行アニメの指針 |
| Palettes - A Beginner Guide | Luke Sadface | 2018 | https://twitter.com/Sadface_RL/status/1004716906887155713 | "Basic introduction to color theory for pixel art." |
| Modular Tree Technique | Slynyrd | 2018 | https://twitter.com/rayslynyrd/status/966012942973132800 | 木の組み立て方 |
| Readability - Pixel art Style possibilities | Cyangmou | 2018 | https://cyangmou.deviantart.com/art/Readability-Pixel-art-Style-possibilities-723970229 | タグ：readability |
| Pixel Art Tutorial | Derek Yu | 2007 | （derekyu.com） | "Classic tutorial that covers all of the basic techniques." タグ：sprites, character, lines, color, shading, dithering, photoshop |

**結果**：**Cyangmou の本体（DeviantArt）と Derek Yu の本体には、二周目でも到達できなかった。**
Derek Yu の derekyu.com は今回も空で返り、Lospec の再掲ページも本文を持っていない。

---

## 2-30. Boghog の元原稿（Google ドキュメント）

- URL: https://docs.google.com/document/d/1iM9Fc2DsPppedlJVDYQ3g1VB5sFfilomGIYFIwJka9w/edit
- **辿り元**：`mitame.md` 027（Shmups Wiki の Boghog's bullet hell shmup 101）。
  **Wiki 記事が出典として挙げている元の Google ドキュメント。**

**結果**：**開いたが、本文は取れなかった。**
取得できたのは見出し **"BULLET HELL SHMUP DESIGN 101"** だけで、本体の節は返ってこなかった。

（同じ Shmups Wiki の記事から辿れる内部リンクは
`/library/Help:Glossary`、`/library/List_of_shooting_games`、`/library/STG_Hall_of_Records`、
`/library/Category:Video_Index`、`/library/Category:General_Guides`。
記事が名指ししているゲームは Touhou, Galaga, Raiden 2, Danmaku Unlimited 3, Battle Garegga,
Armed Police Batrider, Gunbird 2, Dragon Blaze, Mars Matrix, Under Defeat HD, Ketsui, Guwange,
Deathsmiles, Akai Katana, Dodonpachi, Giga Wing, Espgaluda, Tyrian 2000, Soldier Blade, Dangun Feveron。
また、一周目が拾っていなかった項目として **"Chunking patterns"**
（弾の軌道を予告するために弾をまとまりにする）が記事の見出しに在る。）

---

# 辿ったが、既に書いてあることしか言わなかったもの

- **roblog「Juice it or lose it by Martin Jonasson and Petri Purho」**
  https://roblog.co.uk/2024/03/juicy-games/
  … juicy の定義（"little details, little moments of surprise and delight"）と
  「ゲームに限らず、人が消費する対話的なものすべてに juiciness はある」という一般化のみ。
  **手法の一覧も数値も講演からの直接引用も無い。**
- **saint11「Big Pixel Art」** https://saint11.art/blog/big-pixel-art/
  … 作品の並びのみ。定義も数値も助言も無い（2-19 に併記）。

---

# 開けなかった／本文が取れなかった URL（**本文は引用していない**）

| URL | 何を狙ったか | 理由 |
|---|---|---|
| https://publications.lib.chalmers.se/records/fulltext/111921.pdf | Fagerholt 論文の全文 | 取得はできたが **PDF がバイナリのまま**で本文を読めなかった（要旨は 2-01 に別 URL から） |
| https://docplayer.net/20024862-Beyond-the-hud-... | 同上のテキスト版 | **DNS 解決に失敗（ENOTFOUND）** |
| https://www.slideshare.net/slideshow/beyond-the-hud-.../3263481 | 同上のスライド | ページが読み込みエラーを返す |
| https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886 | `mitame.md` 024 が参考に挙げた *Refactoring UI* の中身 | **403** |
| https://freek.dev/994-7-practical-tips-for-cheating-at-design | 同上の転載 | 開いたが**紹介文だけで7項目の中身が無い** |
| https://bjoernkw.com/2022/04/10/7-practical-design-tips/ | 同上の要約 | 開いたが**7項目を列挙していない** |
| https://www.cnn.com/2007/WORLD/asiapcf/02/14/miyamoto.script/ | `mitame.md` 026 が「原記事は開いていない」と書いた宮本の CNN インタビュー全文 | **451 Unavailable For Legal Reasons** |
| https://spritecell.com/shigeru-miyamoto-2005-2009/ | 同上の代替 | 開いたが、Mario の見た目についての発言は **Wired 2008-06-27 の "They made Mario Italian because he had a mustache." 一つだけ**。CNN 版の全文は無い |
| https://www.derekyu.com/makegames/pixelart.html | Derek Yu のチュートリアル本体 | **空で返る**（一周目と同じ） |
| https://pico-8.fandom.com/wiki/Palette | PICO-8 の16色の内訳と隠しパレット | **402** |
| https://dukope.com/devlogs/obra-dinn/ | Lucas Pope の Obra Dinn 開発日誌の一覧 | **403** |
| https://retrorgb.com/adaptive-composite-blending-added-to-mister-core.html | `mitame.md` 040 が「開いていない」と書いた記事 | **403** |
| https://scoffingames.wordpress.com/2019/03/13/downwells-palette-progression/ | `mitame.md` 033 の Downwell の解禁パレット | **403**（一周目と同じ） |
| http://notebook.maryrosecook.com/Theartofscreenshake,JanWillemNijman.html | screenshake 講演のノート | **503**（一周目と同じ） |
| http://web.archive.org/web/2020/http://notebook.maryrosecook.com/... | 上のアーカイブ | **このツールは web.archive.org を取得できない** |
| https://dl.digra.org/index.php/dl/article/download/936/936/933 | DiGRA「Good Game Feel: An Empirically Grounded Framework for Juicy Design」 | 取得はできたが **PDF がバイナリのまま**で本文を読めなかった |
| https://oro.open.ac.uk/46759 | Iacovides ほかの論文本文 | **403**（要旨は 2-05 に別 URL から） |
| https://docs.google.com/document/d/1iM9Fc2DsPppedlJVDYQ3g1VB5sFfilomGIYFIwJka9w/edit | Boghog の元原稿 | 見出ししか返らない |
| https://cyangmou.deviantart.com/art/Readability-Pixel-art-Style-possibilities-723970229 | Cyangmou の readability | **画像作品であり文章として読めない**（一周目と同じ） |
| https://archive.org/details/compositionserie00dowa/... | Dow『Composition』1905年版の全文 | **開いていない**（存在は 2-24 で確認したが中身は見ていない） |
| https://gumroad.com/l/pixel-logic | Michael Azzi「Pixel Logic」 | **開いていない**（有償の販売ページ） |
