# 繋ぐ／敷く ── 「線を引く」という行為の遺産

調べた日：2026-08-25
集めた者：`genre-research`（実装は読んでいない。リポジトリの `src/` も `spec.md` も開いていない）
題：ジャンルではなく**一つの行為**。「都市と都市を線で結ぶ」が、何十年かけてどう遊びにされてきたか。

**開いた URL：47件。開けなかった URL：19件（末尾に理由つきで全部残す）。**
年代：1980年（Empire Builder系の源流）〜 2026年（arXiv）。
言語：英語・日本語。

---

## この文書の読み方

### 逐語かどうかの区別（大事）

| 印 | 意味 |
|---|---|
| **【逐語】** | PDF を `Read` で直接読んだもの。原文そのまま |
| **【引用】** | `WebFetch` 経由。要約器が「引用」として返した文字列をそのまま載せている。**原文に当たり直す価値がある** |
| **【要旨】** | 引用の形で取れず、要約の形でしか取れなかったもの。**数値以外は信用しすぎないこと** |

### 相場の前提（`flow.md`「相場には前提がある（決）」）

呼んだ側から渡された、こちらの条件は次の七つ。各件の「こちらで成り立つか」は、これに照らしている。

1. 一回22ターン
2. ターン制（実時間で進まない）
3. 待ち時間を作らない
4. 繋ぐ相手は都市
5. 海の上に線を引く
6. **切る手が既に在る**
7. 育ちは「繋いだままの年数」で伸びる

**さらに、こちらは一人用である。**渡された問いのうち「他人に取られる権利」「敵に狙われる」は、
そのままでは当たらない。**ただし卓上の「他人」が担っていた役目を、
一人用で何が肩代わりしているかは、各所に書いた**（空間の排他・盤面の枯渇・時計）。

### `references/trade.md` との関係

`trade.md`（1,215行・40件）は**値段がどう決まるか**の資料。この文書は**線を引く行為そのもの**。
重なるのは Power Grid の資源市場と Neo Atlas の交易くらいで、
七つの問いに `trade.md` は一件も答えていない（呼んだ側の申告どおりだった）。

---

# 問1 ── 同時に持てる本数に、上限を置いているか。置くならどんな形か

**先に結論だけ。**調べた範囲で、上限の形は**六つ**に分かれた。
「本数そのもの」は、六つのうち一つでしかない。

| 形 | 実例 |
|---|---|
| **A. 線の本数そのもの** | Mini Metro（最大7本）、Neo Atlas 1469（開始1本） |
| **B. 線を走らせる駒の数**（線は無料、駒が有限） | Mini Metro（線を引くには余っている車両が要る） |
| **C. 一手番に置ける個数** | Age of Steam（3枚／技師なら4枚）、Brass（1手番＝2アクション、Network 1回＝運河1本） |
| **D. 一手番に使える総額** | Empire Builder 系（毎ターン $20 まで） |
| **E. 手持ちの駒の総数**（尽きたら終わり） | Ticket to Ride（45両）、Catan（15本）、Brass（1色14枚） |
| **F. 敷ける長さの総量を週ごとに配る** | Mini Motorways（毎週30〜40枚） |

**そして、AとBを同時に持っている作品が一つある（Mini Metro）。**
これは後の「割れているところ」で扱う。

---

### 1-1. Mini Metro ── 線は7本まで。だが「線を引くには車両が余っていること」

出どころ：Dinosaur Polo Club 開発日誌 `Mini Metro alpha8`（2014-03-21）
https://dinopoloclub.com/2014/03/21/mini-metro-alpha8/

【引用】
> "The line limit is now seven. New lines can be constructed within that limit as long as you have a spare railcar"

【要旨】同じ版で、トンネルは「有限の資源」として戻った（ロンドンは3本から始まる）。
駅の収容は6人（強化で12人）。環状線は3駅以上でないと組めない。
強化は乗客数の節目でもらい、railcar／station／tunnel の三択。
**「アイコンに数字を足して、各種いくつ残っているかを見せた」**とも書いてある。

- **どの問い**：1（上限の形）、2（金以外に払うもの）
- **前提**：実時間で進む。乗客が勝手に湧く。線は何度でも引き直せる
- **こちらで成り立つか**：**Aの上限（7本）はそのまま移せる。Bの「駒が要る」は確かめていない**
  ── こちらは船や車両の概念があるか不明（実装を読んでいないので分からない）

> **注目。**上限が**二重**になっている。
> 「7本まで」という枠と、「線を引くには余った車両が要る」という枠。
> **枠だけなら線は無料に見えるが、実際は車両を一台差し出している。**

---

### 1-2. Mini Metro ── 上限の値は、二週間で三回動いている

出どころ：同開発日誌、alpha7 → alpha8 → alpha9 → alpha10 → alpha11

| 版 | 日付 | 何が変わったか | URL |
|---|---|---|---|
| alpha7 | 2014-03-12 | 【引用】"Tunnels (bridges?) are no longer limited"。代わりに**トンネルは通過中の列車を遅くする**。「解放された車両は、ちゃんと強化プールに戻るようになった」 | https://dinopoloclub.com/2014/03/12/mini-metro-alpha7/ |
| alpha8 | 2014-03-21 | **トンネルが再び有限に戻る**（ロンドンは3本）。線は7本上限。線と車両の強化を「railcars」一本に統合 | https://dinopoloclub.com/2014/03/21/mini-metro-alpha8/ |
| alpha9 | 2014-04-21 | 【引用】"we're back to offering a semi-random selection every week"。節目でなく**毎週末**に、二つの半ランダムな強化を出す。線を**途中から**掴んで編集できるように | https://dinopoloclub.com/2014/04/21/mini-metro-alpha9/ |
| alpha10 | 2014-04-30 | railcar を三つに割る 【引用】"Line, Double Tracks (second locomotive), and Carriages (two carriages on a single line)"。【引用】"Upgrades are chosen from the second pool in week one, first pool in week two, and both pools in subsequent weeks."（＝**三週目まで本当の選択は来ない**） | https://dinopoloclub.com/2014/04/30/mini-metro-alpha10/ |
| alpha11 | 2014-05-01 | 【引用】"presenting three upgrade options each week. Two of these are line upgrades (additional line, dual track, extra carriages). The third option is either extra tunnels or an interchange."　理由は【要旨】**「ミニマリズムという核に戻るため、強化の選択肢を削り、ネットワーク作りに焦点を戻す」** | https://dinopoloclub.com/2014/05/01/mini-metro-alpha11/ |

- **どの問い**：1、5（傾き）
- **前提**：開発中の版。製品版とは違う
- **こちらで成り立つか**：**成り立つ。**「上限を外す→戻す」を一週間でやって戻している記録は、
  **上限の有無を触って決めた**という証拠になる

> **alpha7 が一番効く。**
> **一度、上限を外して「速度の罰」に置き換えている。そして次の版で戻している。**
> 硬い制限を柔らかい罰に替える案は、**この作品が試して捨てた。**

---

### 1-3. Neo Atlas 1469 ── 貿易航路は**1本から始まる**

出どころ：ゲーム専務「ネオアトラス1469 貿易オススメ副産物とリスト」ほか、
検索結果に出た記述（seesaawiki版は文字化けで読めず）
http://game-senmu.com/%E3%83%8D%E3%82%AA%E3%82%A2%E3%83%88%E3%83%A9%E3%82%B91469%E3%80%80%E8%B2%BF%E6%98%93%E3%82%AA%E3%82%B9%E3%82%B9%E3%83%A1%E5%89%AF%E7%94%A3%E7%89%A9%E3%81%A8%E3%83%AA%E3%82%B9%E3%83%88/

【要旨】「ゲーム開始直後の貿易航路は1本。ゲームを進め、世界地図の確定量を増やすと、
国王に貿易航路の拡大を許可されるようになる」。
「めざせジパング」シナリオでバルディ宰相の指示を受けると航路が2本追加される。
航路数の増加は**国王イベント**と、**ケサダの店で入手できる貿易許可証**によってなされる。

出どころ（一次に近い）：アートディンク公式「貿易 / Neo ATLAS 1469」
https://www.artdink.co.jp/japanese/title/na1469/trade.html
【引用】
> 「探険の過程で発見した都市とそこで生産される産物を活用し、貿易を行なうための貿易航路を設定します」
> 「提督を雇い、船団を維持するためには膨大な費用がかかります」

- **どの問い**：1、2、5
- **前提**：探検で地図が確定していく。航路枠が**物語の進行**で開く
- **こちらで成り立つか**：**「1本から始めて、進行で枠が増える」は移せる。**
  こちらは22ターンで、探検の概念があるかは不明（確かめていない）

> **枠を「許可証」という物にしてある。**枠が抽象的な数ではなく、
> **買える／もらえる持ち物**になっているので、画面に出る。

---

### 1-4. Age of Steam（2002）── 一手番に線路タイル3枚。技師を取れば4枚

出どころ：Age of Steam ルールブック PDF（2002、Warfrog / John Bohrer 版の要約）
https://cdn.1j1ju.com/medias/77/8c/75-age-of-steam-rulebook.pdf
（`WebFetch` はバイナリで落ちたが、**保存先のローカルパスが返るので `Read` で全文が取れた**）

【逐語】
> Track is built in Player Order. A player may place (or replace) up to 3 track tiles on their turn.

【逐語】
> *Engineer*: Used during 'Step 4: Build Track', the player who selects this action may build 4 track tiles instead of just 3 track track tiles.

【逐語】機関車のレベルにも上限がある。
> *Locomotive*: The player who selects this action may immediately move their Links disk on the Engine Track up one link. The maximum number of Links is still 6.

【逐語】株の発行にも上限がある。
> A player may issue as many shares as they like, with each additional share issued giving them $5. Players may not issue more than 15 shares in the game.

- **どの問い**：1、2、3
- **前提**：多人数。盤面を奪い合う。1手番に7つのアクションから一つだけ選ぶ（各アクションは一人一回）
- **こちらで成り立つか**：**「一手番に置ける枚数」の形は一人用でも成り立つ。**
  ただし「技師を取れば4枚」は**アクション選択の奪い合い**が前提で、
  こちらでは「4枚にする代わりに何を諦めるか」を別に作らないと機能しない

---

### 1-5. Brass: Birmingham（2018）── 上限は「手番の数」と「手札」でできている

出どころ：Esoteric Order of Gamers ルール要約 v1.2（Peter Gifford、2019-07）
https://www.orderofgamers.com/downloads/BrassBirmingham_v1.2.pdf
（同じく PDF を `Read` で全文取得）

【逐語】
> On your turn, perform 2 actions.
> During the first round of the Canal Era, each player performs only 1 action.
> For each action you perform, you must discard a card from your hand and place it faceup on top of your discard pile.

【逐語】
> **You may build a maximum of 1 canal link for £3.**

【逐語】
> You may build 1 rail link for £5.
> In a single network action, you may build a maximum of 2 rail links for £15, if you also consume 1 beer.

【逐語】era の長さも固定されている。
> There are exactly 8/9/10 rounds per era in a 4/3/2 players game.

**駒の総数**：セットアップで各色 link tile は14枚（RulesPal より 【引用】"56 × Link tiles (14 per colour)"）。
https://www.rulespal.com/brass-birmingham/rulebook

- **どの問い**：1、2
- **前提**：手札制。1アクション＝カード1枚。era が有限ラウンド
- **こちらで成り立つか**：**「本数の上限を、手番の数と使い捨て資源で作る」形はそのまま移せる。**
  こちらは22ターンなので、**「1ターンに引けるのは1本」だけで上限が22本になる**

> **Brass には「線を何本まで持てるか」という規則が無い。**
> 14枚という駒の数は在るが、実際にはそこまで届かない。
> **効いている上限は「1手番に2アクション × 8〜10ラウンド × 2時代」という時計のほうである。**

---

### 1-6. Empire Builder 系（クレヨン鉄道、1980年〜）── **毎ターン $20 まで**という予算枠

出どころ：railgamefans.com「CRAYON RAILS - GENERIC RULES」
https://www.railgamefans.com/ebp/ebrules.htm

【引用】
> "During his turn, the player starts his train at any city on the map, picks up loads, and then moves...After a player has moved, he may construct up to $20 more track if he has sufficient money."

【引用】
> "Play begins with two 'build-only' rounds during each of which each player may build up to $20 (million) worth of track."

【引用】地形で単価が変わる。
> "The cost of track varies with the terrain: building to clear mileposts (plain dots) costs $1, to mountains (triangles) $2, across rivers an additional $2, into small (red circle) or medium (red square) cities an additional $2."

【引用】
> "Note that building into a major city costs $5 but building out from it (to a clear milepost) costs only $1. Such inexpensive build outs are limited to 2 per turn."

- **どの問い**：1（D：総額の枠）、5
- **前提**：地図にクレヨンで描く。金は在るが**一ターンに使える額に蓋がある**
- **こちらで成り立つか**：**成り立つ。**
  「初期資金1,400で初手に11本引ける」という実測に対して、
  **この形は「金はあっても、一ターンに引ける長さに蓋をする」という答えになっている**

> **これは「金が足りない」とは別の縛りである。**
> 金は余っていてよい。**一ターンに使える上限が別にある。**
> 45年前のゲームが、既にこの形を持っている。

---

### 1-7. Ticket to Ride（2004）── 45両。**尽きたら終わる**

出どころ：UltraBoardGames「How to play Ticket to Ride | Official Rules」
https://www.ultraboardgames.com/ticket-to-ride/game-rules.php

【引用】
> "each player takes his set of 45 colored train cars"

【引用】
> "When a player's stock of colored plastic trains gets down to 2 or fewer trains at the end of his turn, the final turn will start."

【引用】
> "When cities are connected by double-routes, then the player can't claim both routes to the same cities."

- **どの問い**：1（E）、5、7
- **前提**：多人数。駒を使い切った者がゲームを終わらせる
- **こちらで成り立つか**：**一人用では「終わらせる」側が効かない。**
  こちらは22ターンで終わりが決まっているので、**この形は上限としてしか移せない**

> **上限が同時に「終わりの合図」を兼ねている。**
> 引くほど終わりが近づく。**引くことが、時計を進める行為になっている。**

---

### 1-8. Catan（1995）── 15本。「持っていないものは建てられない」

出どころ：Catan Family Edition 公式ルール PDF（Catan Studio、© 2008/2012/2017）
https://www.catan.com/sites/default/files/2021-06/catan-family-rules-overview.pdf
（PDF を `Read` で全文取得）

【逐語】
> Select a color and take your building costs card, 5 settlements, 4 cities, and 15 roads.

【逐語】
> You cannot build more pieces than what is available in your pool. So, you may only build a maximum of 5 settlements, 4 cities, and 15 roads.

【逐語】
> A new road must always connect to 1 of your existing roads, settlements, or cities.
> Only 1 road can be built on any given path (i.e., the edge of a terrain hex).

一方で公式FAQ側は、**一手番の本数には蓋を置いていない。**
https://www.catan.com/faq/basegame
【引用】
> "You may build as many roads as you can pay for."

- **どの問い**：1（E）
- **前提**：資源が乏しい。道は資源2枚で建つが、その資源が来ない
- **こちらで成り立つか**：**「一手番の本数は無制限、通しの総数だけ有限」という形が実在する**という点で成り立つ。
  **こちらの実測（初手に11本）は、Catan の形をとった場合の当然の帰結である。**
  Catan がそれで壊れないのは**資源の入りが乏しいから**で、こちらは初期資金1,400が入っている

> **これは「割れているところ」の材料である。**
> Catan は「一手番に何本でも」を許している。**代わりに手番あたりの入りを絞っている。**
> 上限を本数に置くか、入りに置くかの二択になっている。

---

### 1-9. Mini Motorways ── 毎週 30〜40枚の「道路タイル」

出どころ：検索結果に出た記述（Fandom は 402、Miraheze は 403 で本文に届かなかった）

【要旨】週末（日曜）ごとに、二組の強化と道路タイルの選択が出る。
街によって**30枚か40枚**の道路タイルがもらえる。
修飾（modifier）に、"Pave Paradise"（枚数が倍）、"Less is More"（枚数が半分）、
**"All Up Front"（150枚から始まり、以後一枚も配られない）**がある。

- **どの問い**：1（F）
- **前提**：実時間。線ではなく「マスの本数」で長さを配る
- **こちらで成り立つか**：**確かめていない。**こちらは「線1本＝都市2つを結ぶ」で、長さの概念があるか不明
- **一次はどこか**：Mini Motorways 公式 wiki（Fandom / Miraheze）。**どちらも開けなかった**

> **"All Up Front" が面白い。****通し一回ぶんの予算を最初に全部渡して、以後ゼロ。**
> これは「初期資金1,400」に近い状態で、**わざと修飾（縛り）として提供されている。**
> **標準ではない、と作り手が判断している。**

---

# 問2 ── 引くときに、金以外に何を払わせているか

集まった「金以外の支払い」は次の通り。

| 払うもの | 実例 |
|---|---|
| **手番そのもの**（線を引くと、他のことができない） | Brass（2アクション中の1回）、Age of Steam（7つの中から1つ） |
| **手札**（線を引くとカードを1枚捨てる） | Brass（Network もカードを1枚要求する） |
| **物資**（石炭・ビール） | Brass（鉄道リンク1本につき石炭1個。2本同時なら＋ビール1杯） |
| **駒**（余った車両が要る） | Mini Metro |
| **枠（影響力）** | Anno 1800（追加の航路・船に influence） |
| **借金**（＝終局の減点） | Age of Steam（株1つ＝-3VP）、Railways of the World（債券1つ＝-1VP） |
| **順番**（金を使うと次のターンが後ろになる） | Brass |
| **許可証・物語の進行** | Neo Atlas 1469 |
| **時間**（建設に月がかかる） | Slipways |

---

### 2-1. Brass ── **金を使うほど、次のターンの手番が遅くなる**

出どころ：Esoteric Order of Gamers ルール要約 v1.2（PDF）
https://www.orderofgamers.com/downloads/BrassBirmingham_v1.2.pdf

【逐語】
> Place all money spent during your turn on top of your character tile on the turn order track.

【逐語】
> **1. Determine turn order for the next round**
> Rearrange the character tiles on the turn order track. The player who spent the least money this round goes first next round and so on, while the player who spent the most will go last.

- **どの問い**：2、3、5
- **前提**：多人数。手番が早いほど良い場所を取れる
- **こちらで成り立つか**：**一人用では、そのままでは成り立たない。**
  **ただし「金を使ったこと自体が、次に効いてくる別の代償になる」という形は移せる**
  （例：使った額が次ターンの何かを遅らせる）。こちらの実装に何が在るかは知らない

> **これが Brass の一番きつい仕掛けである。**
> 線を引くのに £3 払うと、その £3 が**「次のターンの手番」という別の通貨で二度取られる。**
> 金の額そのものが、順番の入札になっている。

---

### 2-2. Brass ── 鉄道リンク1本に石炭1個。2本同時ならビール1杯

【逐語】
> You must consume 1 coal for each rail link built.
> Each rail link is placed separately and must be connected to a source of coal (after it is placed).

【逐語】その石炭は、**誰の炭鉱からでもよい。ただし一番近いところから取らされる。**
> **1. The closest** (fewest link tiles distant) **connected unflipped coal mine (owned by any player)**. If multiple coal mines are equally close, choose one. If a coal mine runs out of coal, and you need more, choose the next closest coal mine. Consuming coal in this way is free.

【逐語】繋がっていないと、市場から買うことになる。
> **2.** If you are not connected to an unflipped coal mine, you can purchase coal from the coal market, starting at the cheapest price. This requires a connection to a [merchant] icon. If the coal market is empty, you can still purchase coal for £8.

- **どの問い**：2、3、6
- **前提**：多人数。盤面に他人の炭鉱がある
- **こちらで成り立つか**：**「線を引くこと自体が資源を食う」形は一人用でも成り立つ。**
  「誰の炭鉱でもよい」は多人数専用。**ただし「一番近いところから強制的に取らされる」という規則は、
  一人用でも空間の意味を作る**

> **線を引く行為が、盤面の資源を減らす。**
> **引けば引くほど石炭が減り、減れば市場価格が上がり、次の線が高くなる。**
> 上限を数で置かずに、**引くこと自体を燃料にしている。**

---

### 2-3. Anno 1800 ── 影響力（influence）。**ただし「消費」ではなく「預け金」**

出どころ：anno.city「How to get influence in Anno 1800」
https://anno.city/how-to-get-influence-in-anno-1800

【引用】
> "Influence isn't spent, it's more like a deposit."

【要旨】influence は Propaganda / Trade / Military / Optimisation / Culture / Expansion の六つに分かれる。
Trade の枠には Trade Ships、Charter Routes、Cargo Airships が入る。
**各小分類ごとに「無料枠」があり、そこを超えた分だけ influence を払う。**
船を売ったり建物を壊したりすると、預けた influence は戻ってくる。

補足（検索結果より、Fandom 本文は 402 で開けず）：
【要旨】charter route は1本につき influence 5。**ただし最初の3本は無料。**
Trade ships と charter routes は同じ Trade 分類だが**小分類が別で、枠も別**。
schooner は1隻 influence 1。

- **どの問い**：1、2、4
- **前提**：実時間。船が実体として存在する
- **こちらで成り立つか**：**「無料枠 + 超過分だけ払う」と「畳めば枠が戻る」は、そのまま移せる。**
  こちらは**切る手が既に在る**ので、**「切ったら枠が戻る」という接続が既に半分できている**
- **一次はどこか**：Anno 1800 公式 wiki（Fandom）の Influence / Trade routes ページ。**402 で開けなかった**

> **「消費ではなく預け金」という言い方が、この題の核心を突いている。**
> **枠は在庫であって、燃料ではない。**
> 引くたびに減るが、畳めば戻る。**だから「何を今そこに置いておくか」という判断になる。**

---

### 2-4. Age of Steam ── 借金は最後に減点として返ってくる

【逐語】
> Each player starts the game with 2 shares issued. Each share issued grants the player $5 (which is why each player starts with $10).

【逐語】
> Players should note that during 'Step 7: Pay Expenses' players must pay the bank $1 for each share they have issued.

【逐語】終局の計算。
> 3 VP for every dollar of income shown on the Income Track.
> 1 VP for each section of Track the comprises part of a Completed Railroad Link
> **Minus 3 VP (-3) for every share they issued** as shown on the Issued Shares Track.
> Money has no value at the end of the game.

- **どの問い**：2、3、5、7
- **前提**：終局が VP で決まる。金は終局に価値ゼロ
- **こちらで成り立つか**：**「借りた金は、毎ターンの維持費と、終局の減点の二重で返ってくる」は移せる。**
  こちらは終局の得点が何かを知らない（実装を読んでいない）ので、**確かめていない**

> **同じ借金を二回課している。**毎ターン $1、終局に -3VP。
> **借りた時点では「安い」に見えるが、22回払って最後にもう一度払う。**
> こちらの実測「元が取れるまで 0.3ターン」は、
> **維持費だけを見て、終局の減点を見ていない**計算だと、この作品の設計と噛み合わない。

---

### 2-5. Slipways ── 引くのに**一ヶ月**かかる（＝時間そのものが通貨）

出どころ：Slipways 公式 Quickstart Guide
https://slipways.net/quickstart/

【要旨】ゲームは25年。惑星の植民は3ヶ月、**slipway の建設と探査はそれぞれ1ヶ月かかる。**
惑星をドラッグしてもう一方に繋ぐと slipway ができる。

- **どの問い**：2、5
- **前提**：25年という固定の時計がある。すべての行動が時計を進める
- **こちらで成り立つか**：**成り立つ。**こちらは22ターンという時計を持っている。
  **「1本引くのに1ターン使う」だけで、上限は自動的に22本になる**

---

# 問3 ── 引くと、何が悪くなるか

集まった「悪くなり方」は五つ。

| 型 | 実例 |
|---|---|
| **既にある線の取り分が減る**（分け合い） | OpenTTD（重なった集荷圏で貨物が分割される） |
| **収入の伸びが逓減する** | Power Grid（都市あたり11→8）、Age of Steam（収入減少表） |
| **場所が潰れる**（引いた線が、次の線の邪魔をする） | Slipways（slipway は交差できない）、Age of Steam（複雑タイルは高い） |
| **順番を失う** | Brass |
| **放っておくと評価が下がる** | OpenTTD（貨物を運んでいない駅は町の評価を毎50日 -15） |

---

### 3-1. OpenTTD ── 重なった集荷圏では、**取り分が分割される。しかも三番目以降はゼロ**

出どころ：OpenTTD 公式 wiki「Catchment area」
https://wiki.openttd.org/en/Manual/Catchment%20area

【引用】
> "When a building is covered by multiple catchment areas, the station with the highest rating will get the largest part of the cargo."

【引用】
> "when three or more catchment areas cover the same building, only the two catchment areas with the highest ratings will get cargo."

【要旨】既定の集荷半径は4タイル。現実寄りの設定では道路駅3タイル、鉄道駅4タイル。

- **どの問い**：3、6
- **前提**：空間に半径がある。駅が重なることがある
- **こちらで成り立つか**：**「海の上に線を引く」なら、集荷圏という概念は無い可能性が高い。確かめていない。**
  ただし**「同じ都市に二本引いたら、取り分が割れる」という形は移せる**

---

### 3-2. OpenTTD ── 駅の評価は数値で全部決まっている。**放置した駅は町の評価を下げる**

出どころ：OpenTTD 公式 wiki「Game Mechanics」
https://wiki.openttd.org/en/Manual/Game%20Mechanics/

【引用】評価の内訳。
> **Vehicle speed**: "Above 85 km/h (52 mph)" — 最大 17%
> **Vehicle age**: 新車（0年）で 13%
> **Pickup frequency**: 15秒未満で最大 51%
> **Cargo waiting**: "less than 100" で最大 16%。1,500 超で大きく減点
> "Divide the total rating points by 255 to get the percent rating. The maximum possible rating is 100%."

【引用】遅配の罰。
> "For each day after the Early Delivery time that you deliver the cargo, you are penalized 0.4%."
> "For each day after the Late Delivery time that you deliver the cargo, you are penalized an additional 0.4%."
> "Maximum penalty is 88%"

【引用】町からの評価。
> "Rating goes up by 12 for each station that has transferred cargo in the last 50 days (100 seconds).
> **Rating goes down by 15 for each station that has not transferred cargo in the last 50 days** (100 seconds)."

- **どの問い**：3、7
- **前提**：実時間。駅が実体として町に置かれている
- **こちらで成り立つか**：**「使っていない線が、その都市との関係を悪くする」形は移せる。**
  こちらは待ち時間を作らないので、日数ではなく**ターン数**で数えることになる。**確かめていない**

> **引いたまま使っていない線が、罰になる。**
> **これは「維持費」ではない。**維持費は金だが、これは**都市の側の態度**である。
> しかも**下がる幅（-15）が、上がる幅（+12）より大きい。**

---

### 3-3. Power Grid ── 都市を繋ぐほど、**都市あたりの収入が下がる**

出どころ：Meeple Mountain「Power Grid Game Review」（Tom Franklin ほか）
https://www.meeplemountain.com/reviews/power-grid/

【引用】
> "At the start of the game, you'll be making 11 Elektro per city, meaning you'll have extra money early on to expand. By the time you're building in your 10th city, you're only making 8 Elektro per city."

【引用】
> "You now have to work harder to balance the cash needs of expansion: you'll need more resources to power more cities, but those resources become limited and more expensive."

- **どの問い**：3、6
- **前提**：発電した都市数に応じた収入表が在り、その表が**逓減**している
- **こちらで成り立つか**：**成り立つ。**
  こちらの実測「毎ターン +2,609」は線ごとの独立した額に見える。
  **Power Grid は「本数が増えると1本あたりが下がる」表を持っている**

---

### 3-4. Age of Steam ── 収入が高いほど、毎ターン削られる額が大きい

【逐語】
> **Step 8: Income Reduction**
> Each player's income is reduced depending on the amount shown on the Income track. ... The results are: Over $50 (-$10); $41-$50 (-$8); $31-$40 (-$6); $21-$30 (-$4); $11-$20 (-$2).

- **どの問い**：3、6
- **前提**：収入がトラック上の位置で表現されている
- **こちらで成り立つか**：**成り立つ。**
  これは Power Grid の逓減よりも露骨で、**「収入そのものに天井を貼る」**やり方。
  こちらの「元が取れるまで 0.3ターン」に対しては、**収入側を削るという答えになっている**

> **金の額に段を切って、段ごとに引く額を変えている。**
> **収入が $50 を超えると、毎ターン $10 が消える。**
> つまり**$50 を超えた分は、5ターンで蒸発する。**

---

### 3-5. Slipways ── 引いた線が、次の線を**物理的に**塞ぐ

出どころ：gameplay.tips「Slipways - Starter Guide (with Tips)」
https://gameplay.tips/guides/11068-slipways.html

【引用】
> "Just make sure that all the connections you want to make are actually possible, because the Slipways cannot overlap."

補足（検索結果より）：
【要旨】「slipway は惑星やその他の物体を通り抜けられない。これがこのゲームの最大の難関の一つ。
たとえば惑星が3つ一直線に並んでいると、真ん中は両端と交易できるが、両端どうしは交換できない。」

- **どの問い**：3、7
- **前提**：**平面上に点がばらまかれていて、線が交差できない**
- **こちらで成り立つか**：**海の上に線を引くなら、そのまま移せる可能性が高い。**
  ただしこちらが交差を許しているかは知らない（実装を読んでいない）

> **これが一人用における「他人に取られる」の代わりである。**
> **敵はいない。自分の過去の線が敵になる。**
> 引いた線が空間を食い、後から「そこには引けない」が発生する。

---

# 問4 ── 切る／畳むときの痛みを、何で作っているか

**ここが調べていていちばん割れた。**四つの流儀が在り、しかも**同じ作品が二つ持っている例**がある。

| 流儀 | 実例 |
|---|---|
| **① 切れない**（永久） | Slipways、Ticket to Ride、Power Grid、クレヨン鉄道、Catan |
| **② 切れるが、痛みがゼロ**（駒が戻る） | Mini Metro（通常）、Anno 1800（influence が戻る） |
| **③ 勝手に畳まれる**（時代の終わりに全部消える） | Brass（era 末に link tile を得点化して撤去） |
| **④ 引きかけを放置すると、罰として撤去される** | Railways of the World、Age of Steam |

---

### 4-1. Slipways ── **何も壊せない。**Undo は情報が出た瞬間に死ぬ

出どころ：gameplay.tips「Slipways - Starter Guide (with Tips)」
https://gameplay.tips/guides/11068-slipways.html

【引用】
> "You cannot remove anything you build, including Slipways, so it's important to not make hasty decisions."

【引用】
> "Undo can be a powerful planning tool, since you can test out certain 'constellations'... However, taking any action that exposes new information, including Probing, connecting to Ruins, or looking at newly available Council Tasks will disable Undos."

- **どの問い**：4、7
- **前提**：40〜60分の一回。**間違いを抱えたまま最後まで行く**
- **こちらで成り立つか**：**こちらは「切る手が既に在る」ので、真っ向から反する。**
  **相場を曲げるのではなく、使わないという判断になる**（`flow.md`）。
  ただし**「Undo は、新しい情報が出るまでは効く」という線引きは、切る手と両立する**

> **Undo の条件が上手い。**
> **「まだ何も分かっていないうちは、いくらでも試せる。分かった瞬間に確定する。」**
> つまり Undo は「取り消し」ではなく**「計算用紙」**として置かれている。

---

### 4-2. Mini Metro ── 切る痛みがゼロ。**だから上級者は「使い捨ての線」を戦術にしている**

出どころ（日本語・上位ランカーの解説）：nekosogi.org「現役上位ランカーが伝授する『Mini Metro』デイリーモード攻略指南」
https://nekosogi.org/miniMetro

【引用】
> 「混雑している駅から最短距離で乗客を逃がし、用が済めば路線ごと即撤収」

【引用】
> 「ただ敷きっぱなし、電車を流しっぱなしではまず間違いなく早々に破綻」

【引用】枠を余らせておくことが定石。
> 「先頭車両×2/路線×1/トンネル×1は常に残しておく」

【引用】
> 終盤は「遊撃線でどれだけ乗客を捌いて延命し続けられるかの勝負になります」

出どころ（日本語・別人）：note.com「Mini Metro最強の戦略」（Heath）
https://note.com/sod_heath/n/n6e691d90e3de

【引用】
> 「路線を削除します。この時、路線は再利用することができるようになります」

【引用】
> 「幽霊線は、橋やトンネルを使用せずに川をまたぐことが可能です」

【引用】
> 「約12週でゲームオーバーになるとして」…「幽霊線に利用できる列車の数は最大で12本程度となります」

出どころ（英語・戦略記事）：hamy.xyz「Mini Metro - The Best Upgrades to Choose」（2024-03）
https://hamy.xyz/blog/2024-03_mini-metro-best-upgrades

【引用】
> "Carriages are the best overall upgrade and thus the best default if no better choice."

【要旨】新しい線は「毎週取るものではない」。**1〜2本の空き線を在庫として持っておく**（組み直し用）。
2本より多く余らせるのは無駄。乗換駅は【引用】"Interchanges are mostly useless"。

- **どの問い**：4、1、5
- **前提**：実時間。線を消すと駒が全部戻る。**罰が一切ない**
- **こちらで成り立つか**：**こちらは「切る手が既に在る」ので、この状態に近い。**
  **つまり、この三本が言っている「使い捨ての線」が、こちらでも起きる可能性が高い**

> **日本語の二人が、別々に同じ名前を付けている ──「遊撃線」と「幽霊線」。**
> **切る痛みがゼロだと、上級者の最適解は「引いて、すぐ消す」になる。**
> しかも二人とも、これを**上達の証**として書いている。
> **痛みを置かないと、線は建造物ではなく消耗品になる。**

---

### 4-3. Mini Metro ── **同じ作品が、切れない版も持っている（Extreme モード）**

出どころ：検索結果に出た記述（Fandom の Extreme ページは 402 で開けなかった）

【要旨】Extreme モードでは、線の配置・機関車・車両などが**一度置いたら動かせない。**
「意図的に戦略を狭めている」。駅の混雑と敗北条件は通常と同じ。

- **どの問い**：4
- **前提**：同じ盤面・同じ資源配布で、**「置き直せるか」だけを変えている**
- **こちらで成り立つか**：**確かめていない**が、
  **「取り消せる版と取り消せない版を両方用意する」という選択肢が実在するのは分かる**
- **一次はどこか**：Mini Metro 公式 wiki（Fandom）の Extreme / Game Mode ページ。**402 で開けなかった**

> **ここが今回いちばん使える発見かもしれない。**
> **Mini Metro は「切る痛みゼロ」と「切れない」を、同じゲームの中で二つのモードとして持っている。**
> どちらが正しいかを、作り手が決めていない。**遊ぶ側に選ばせている。**

---

### 4-4. 交通計画の専門家からの批判 ── 「これはバスの話であって、鉄道の話ではない」

出どころ：Human Transit（Jarrett Walker、交通計画のコンサルタント）
「learning how transit works from mini metro」（2014-12）
https://humantransit.org/2014/12/learning-how-transit-works-from-mini-metro.html

【要旨】この記事は Mini Metro が正しく教えていることを挙げたうえで、こう批判している ──
**ゲームは「ネットワークを恒久的に描き直すこと」を報酬にしている。
それはバス路線には理想的だが、鉄道には不可能である。だからこのゲームは、
地下鉄の見た目をしていながら、実は「バス路線の話」になっている。**

【要旨】ほかにも、車両より客車のほうが高いのは現実と逆で、
「線（line）」という単位が意味を成していない、と指摘している。
需要はサービスの質に反応せず固定されている点も挙げている。

【要旨】制約の記述として、**「7日ごとに新しい線が1本、加えて毎週1つの列車か客車」**とある
（2014年12月時点。開発中の版の可能性がある。製品版は「毎週1機関車＋二択」）。

- **どの問い**：4、6
- **前提**：現実の交通計画と比べている。ゲームの評価ではない
- **こちらで成り立つか**：**批判そのものは移せない**（こちらは現実の鉄道ではない）。
  **だが「引き直しを報酬にすると、そのゲームが何の話なのかが変わる」という指摘は、
  こちらに直接効く。**線が資産なのか消耗品なのかが、切る痛みで決まる

---

### 4-5. Railways of the World ── **引きかけの線は、ターンの終わりに強制撤去される（金は返らない）**

出どころ：UltraBoardGames「Railways of the World Game Rules」
https://www.ultraboardgames.com/railways-of-the-world/game-rules.php

【引用】
> "Once tracks are placed, players may not remove them except for incomplete links" that must be removed "at the end of the third round of each turn."

【要旨】1ターンは3ラウンドで、各ラウンドに1アクション（＝ターンあたり3アクション）。
建設費は平地 $2,000、水 $3,000、山 $4,000、尾根越え追加 $4,000。
債券は1枚 $5,000 もらえて、毎回の収入時に $1,000 払う。**終局に1枚につき -1VP。**
【引用】"A player gains 1 point on the income track for each complete link he owns that the cube traveled along."

- **どの問い**：4、7、2
- **前提**：多人数。線路は1ターン内に完成させる必要がある
- **こちらで成り立つか**：**「引きかけを持ち越せない」という形は移せる。**
  こちらは1本＝都市2つの接続なので「引きかけ」が存在しない可能性がある。**確かめていない**

---

### 4-6. Age of Steam ── 未完成の線路は、**次のターンに伸ばさないと所有権を失う**

【逐語】
> Whenever a player finishes building some track, they place one of their locomotives on the track to denote ownership. Locomotives can be placed on either finished or unfinished track sections.

【逐語】
> If on the player's next turn they do not contribute more track tiles to an Unfinished Track Section, they lose the ownership of that track and must remove their locomotive. If on a later turn another player extends this now unowned track section, they may claim it for themselves, placing a locomotive on it. A player must actually lengthen the line to claim ownership, not simply replace a tile.

【逐語】完成した線は永久。
> Completed Railroad Links do not have to be extended each turn as they are already complete. As soon as an Unfinished Line is connected to another Town or City, it is considered Completed and the ownership of the Line is permanent.

- **どの問い**：4、7、5
- **前提**：多人数。他人が横取りできる
- **こちらで成り立つか**：**一人用では「横取り」が効かない。**
  だが**「未完成のものは、手を止めた瞬間に失われる」という圧は、一人用でも作れる**

> **完成と未完成で、扱いが正反対になっている。**
> 完成した線は**永久に自分のもの**。未完成の線は**一手番放置で他人のもの**。
> **「途中まで引く」が一番損になるように作ってある。**

---

### 4-7. Brass ── **時代の終わりに、全部の線が得点化されて盤から消える**

【逐語】
> **1. Score canal / rail links**
> For each of your link tiles, score 1 VP for each [beer barrel icon] in adjacent locations (advance your VP marker along the progress track). **Remove link tiles from the board as they are scored.**

【逐語】
> **3. Remove obsolete industries**
> Remove all level 1 industry tiles from the board (not from player mats), and return them to the box. All level 2 or greater industry tiles remain on the board.

- **どの問い**：4、5
- **前提**：ゲームが2つの時代に割れている。時代末に清算がある
- **こちらで成り立つか**：**こちらは22ターンで一つの通しなので、そのままでは移せない。**
  ただし**「引いた線は、ある時点で必ず一度清算されて消える」という形は、
  22ターンを二つに割れば作れる。確かめていない**

> **切る判断そのものが要らない。**
> **時計が来たら、全部畳まれる。**
> 損切りの手間を、遊ぶ側から取り上げている。

---

### 4-8. クレヨン鉄道と Catan と Ticket to Ride ── 単に**消せない**

- クレヨン鉄道：【要旨】ルール中に、一度描いた線路を消す規定が**存在しない**
  https://www.railgamefans.com/ebp/ebrules.htm
- Ticket to Ride：【要旨】占有した路線を外す規定が**存在しない**。置いた列車は最後まで盤上に残る
  https://www.ultraboardgames.com/ticket-to-ride/game-rules.php
- Catan：【逐語】"You cannot build more pieces than what is available in your pool."
  （＝道を撤去して建て直す手段が無いので、15本は事実上「使い切ったら終わり」）
  https://www.catan.com/sites/default/files/2021-06/catan-family-rules-overview.pdf

- **どの問い**：4
- **前提**：物理の駒で遊ぶ。**「戻す」を規則で書くと、卓上では操作が煩雑になる**
- **こちらで成り立つか**：**成り立たない**（切る手が既に在る）。
  **ただし「卓上の既定は『切れない』である」という事実は、割れているところの材料になる**

---

# 問5 ── 早く引くほど得なのか、遅く引くほど得なのか

**ここは、はっきり両方が実在した。しかも同じゲームの中に両方が入っている例（Brass）がある。**

---

### 5-1. 早いほど得 ── Power Grid：都市の枠は**先着で埋まり、後から入るほど高い**

出どころ：UltraBoardGames「How to play Power Grid | Official Rules」
https://www.ultraboardgames.com/power-grid/game-rules.php

【引用】
> "the player pays 10 for placing the first house in a city, 15 for placing the second house, and 20 for placing the third house"

【引用】
> "In step 1 of the game, each city can only connected by one player"
> "In step 2, two players can have houses in each city. The building price for the second connection is 15 Elektro."
> "In step 3, every city can have three houses. The building price for the third house is 20 Elektro."

【引用】
> "The player chooses the cheapest connection between the new and one of his own cities and pays the total costs to the bank."

- **どの問い**：5、3
- **前提**：多人数。都市の枠を奪い合う
- **こちらで成り立つか**：**一人用では「他人に取られる」が無いので、そのままでは成り立たない。**
  **ただし「同じ都市に二本目・三本目を引くと段階的に高くなる」は、一人用でも成り立つ**

---

### 5-2. 遅いほど得 ── Power Grid：建設は**手番の逆順。トップは最後に建てる**

【引用】
> "This phase is played in reverse player order. The last player starts."

【引用】手番順の決め方。
> "The first player is the player with the most cities in his network"

そして、その理由をデザイナー本人が語っている。

出どころ（二次・日本語訳）：精神科医のボードゲーム日記「『電力会社』ができるまで(翻訳記事)」
https://takewatch.blog.jp/archives/925092.html
**一次はどれか**：Chris Wray "Funkenschlag at Fifteen: The Story of Power Grid",
The Opinionated Gamers, 2016-07-11
https://opinionatedgamers.com/2016/07/11/funkenschlag-at-fifteen-the-story-of-power-grid/
**（一次は 403 で開けなかった。以下は日本語訳の側の文言）**

【引用・日本語訳】フリードマン・フリーゼの発言として：
> 「リードしているプレイヤーが最大の不利益を被る...最終形は都市をいちばん建てているプレイヤーが第1手番となる」

【引用・日本語訳】
> 「ネットワークを引くときのコスト感...『エンパイアビルダー』を参考にした」

【引用・日本語訳】
> 「とにかく狭さを重視した...自由に発電所を建てられない、狭い世界にしたかった」

【引用・日本語訳】終了条件の変遷。
> 「エンドトリガーは最初都市数だけでカウント...最終的に『発電数と都市数の小さい方でみる』ルールに変えた」

- **どの問い**：5、1、3
- **前提**：多人数。「リードしている者を不利にする」が目的
- **こちらで成り立つか**：**リードの罰は一人用では成り立たない。**
  **だが「狭さを重視した」「自由に建てられない狭い世界にしたかった」は、
  一人用でもそのまま成り立つ設計意図である**

> **「とにかく狭さを重視した」── これがデザイナー自身の言葉として残っている、数少ない一次に近い記録。**
> **上限は数の問題ではなく、盤面の狭さの問題である**と言っている。

---

### 5-3. 遅いほど得 ── Brass：**時代末に、育った盤面をまとめて自分の点にできる**

【逐語】link は era 末に、隣接する場所の「ビール樽アイコン」の数だけ点になる。
> For each of your link tiles, score 1 VP for each [icon] in adjacent locations

出どころ（戦略解説）：Erik Twice「Brass Birmingham: The most common beginner mistakes」（2020-11-06）
https://eriktwice.com/en/2020/11/06/brass-birmingham-beginner-mistakes/

【引用】
> "A railroad link is rarely worth less than 4 points and often as many as 8. By taking the double-rail action we get a ridiculous amount of efficiency, even if we take a hit on the turn order or are forced to take loans."

【引用】
> "Building railroads is so important that I believe it's the main reason I win so often."

【引用】ただし場所は先に枯れる。
> "Don't be afraid to jump in and get a piece of the pie...Getting access to key spaces of the board is important, eventually the good links we'll be gone and players will need to turn their attention towards industries."

補足（検索結果の要旨、BGG スレッドを開けていない）：
【要旨】運河時代の link は時代末に撤去されるので、**時代の終わり際に引けば、
直前に得点だけ回収して消えることになる。しかも他人の裏返ったタイルを自分の VP に変えられる。**

- **どの問い**：5、6
- **前提**：時代末に清算がある。link の価値が**盤面の育ち具合**で決まる
- **こちらで成り立つか**：**こちらは「育ちは繋いだままの年数で伸びる」ので、方向が逆。**
  Brass は「線は最後に引け」だが、こちらは「線は早く引いて長く保て」になる。
  **ここは相場をそのまま使えない。前提が反対である**

> **同じゲームの中で二つの力が逆を向いている。**
> **良い場所は先に枯れる（早く引け）／点は最後に決まる（遅く引け）。**
> **これがこの題の「遅い／早い」の答えらしい。片方に倒すのではなく、両方入れる。**

---

### 5-4. 遅すぎると終わる ── Ticket to Ride

【引用】
> "When a player's stock of colored plastic trains gets down to 2 or fewer trains at the end of his turn, the final turn will start."

出どころ（戦略記事）：Everything Is A Game「Ticket to Ride Strategy Guide: Route Planning and Blocking Techniques」
https://everythingisagame.com/ticket-to-ride-route-planning/

【引用】序盤は引くな。
> "spend those early turns collecting cards, building the resources they need to execute flexible strategies later"

【引用】ただし人数が増えると早める。
> "start claiming by turn 3-4" because "critical routes face competition from multiple players"

【引用】効率の単位が「列車あたりの点」になる。
> Route network scoring 22 points requiring 15 trains = "1.47 points per train"
> Regional overlap strategy also scoring 22 points requiring 12 trains = "1.83 points per train"（"20% efficiency gain"）

【引用】妨害にも代償がある。
> "Every blocking move costs you tempo. Make sure the block hurts your opponent more than it hurts you, or don't bother."

- **どの問い**：5、1、7
- **前提**：多人数。他人がゲームを終わらせる
- **こちらで成り立つか**：**「駒あたりの点」という効率の単位は、一人用でも成り立つ。**
  こちらなら**「1本あたりの生涯収入」**になる。
  **有限の駒を置くから「1本あたり」という考え方が生まれている**ことに注意

---

### 5-5. 早いほど得（時計が動くから）── Slipways：「繋ぎながら進め」

出どころ：gameplay.tips「Slipways - Starter Guide (with Tips)」
https://gameplay.tips/guides/11068-slipways.html

【引用】
> "Connect as you go: Build Planet > Build Planet > Connect > Build Planet > Connect, etc."

【要旨】理由は、年が明けるときに不満足な惑星が幸福度を引き下げるから。
全体の幸福度が 60% に達すると「政権から追い出される」（＝敗北）。

出どころ：Slipways 公式 Quickstart Guide
https://slipways.net/quickstart/
【引用】惑星の段階。
> **Unsatisfied:** 惑星は "earns less money and produces less resources"
> **Content:** "providing everything the planet needs"
> **Prosperous:** "2 imports and 2 exports"
> **Rich:** "3 imports and 3 exports"
> "Unsatisfied needs carry big happiness penalties"

- **どの問い**：5、6、7
- **前提**：25年の時計。年ごとに清算がある
- **こちらで成り立つか**：**成り立つ。**
  こちらも22ターンの時計を持っている。
  **「繋ぎかけで年を越すと罰」という形は、ターン制でも作れる**

---

# 問6 ── 繋ぐほど繋ぎたくなるのか、繋ぐほど苦しくなるのか

**両方が実在した。しかも「同じ盤面で、報酬は増え、余裕は減る」を同時にやるのが定石らしい。**

| 向き | 実例 | 何で作っているか |
|---|---|---|
| **繋ぐほど得（正の帰還）** | Slipways（2輸出入で prosperous、3で rich）、Ticket to Ride（長さの点が非線形）、Catan（最長路 5本以上で 2VP）、Brass（隣接した裏返しタイルが全部点になる） | 報酬側を非線形にする |
| **繋ぐほど苦しい（負の帰還）** | Power Grid（都市あたり11→8）、Age of Steam（収入減少表）、Mini Metro（需要の伸びが供給を上回る） | 収入側を逓減させる／需要側を加速させる |
| **繋がないと悪くなる** | OpenTTD（輸送率60%未満だと生産が下がる） | 使っていないことに罰を置く |

---

### 6-1. 正の帰還 ── Slipways：**輸出入の本数そのものが階段になっている**

出どころ：Slipways 公式 Quickstart Guide
https://slipways.net/quickstart/

【引用】
> **Prosperous:** Requires "2 imports and 2 exports"; earns more, produces more
> **Rich:** Requires "3 imports and 3 exports"; production plateaus but trade income increases

【引用】
> Final score is "multiplied by the empire's happiness"

- **どの問い**：6
- **前提**：惑星に needs と supplies がある。輸出入の**本数**が段階を決める
- **こちらで成り立つか**：**「都市に繋がっている線の本数で段が上がる」形は、そのまま移せる。**
  こちらは「育ちは繋いだままの年数で伸びる」ので、**年数と本数の二軸になる可能性がある。確かめていない**

> **「rich になると生産は頭打ちだが、交易収入は伸びる」── 三段目で、伸びる中身が変わっている。**
> 単なる倍率ではなく、**段ごとに何が伸びるかを変えている。**

---

### 6-2. 正の帰還 ── Ticket to Ride：**長さの点が非線形**（1, 2, 4, 7, 10, 15）

出どころ（研究）：arXiv 2511.08441「Maximizing the Score in "Ticket to Ride"」
https://arxiv.org/html/2511.08441v1

【引用】
> "the optimal score is 285, of which 223 points comes from completed tickets"（45両の場合）

【引用】チケットの偏り。
> "the average point value of all 30 tickets is 11.63, the average point value of the ten most frequently chosen tickets is 14.1"

【引用】著者の提案。
> "a more balanced game might result from reducing the point values of these tickets"

補足（検索結果の要旨、一次にあたり切れていない）：
【要旨】1マス=1点、2マス=2点、3マス=4点、4マス=7点、5マス=10点、6マス=15点。
「特定の色をk枚集めるのに必要なターン数はkに対して線形」なので、
**労力は線形なのに報酬は非線形になっている。**

- **どの問い**：6、5
- **前提**：路線に「長さ」がある
- **こちらで成り立つか**：**こちらの線に長さがあるかは知らない。確かめていない。**
  **ただし「労力は線形、報酬は非線形」という設計そのものは移せる**
  （例：同じ都市に何本繋がっているかで報酬が加速する）

---

### 6-3. 正の帰還 ── Catan：**5本目でいきなり 2VP**

【逐語】
> The first player to build a continuous road (not counting forks) of at least 5 road segments (i.e., pieces) receives the special card "Longest Road."

【逐語】しかも取り合いになる。
> If another player succeeds in building a longer road than the one created by the current owner of the "Longest Road" card, he immediately takes the special card (and its 2 victory points).

【逐語】FAQ で、分岐は数えないと明言。
> If my road network branches, can I count both segments of roads when counting up the length of my longest road?
> No. You may only count the single longest continuous branch for purposes of the "Longest Road."

- **どの問い**：6
- **前提**：多人数。奪い合いがある
- **こちらで成り立つか**：**「一定の長さ／本数を超えたら跳ねる」形は一人用でも成り立つ。**
  **「分岐は数えない」という規則は、ネットワークの形を強制する道具として使える**

---

### 6-4. 負の帰還 ── Mini Metro：**資源は増えるが、需要の伸びに追いつかない**

出どころ：検索結果（TV Tropes の Mini Metro ページ。**本体は 403 で開けなかった**）
【要旨】「ゲームが進むにつれて駅が増え、荷物を出す速さも上がっていく。
こちらも機関車などの資源をもらえるが、**追いつくには足りない。**
必ず、列車では捌けないほど混雑する時点が来る。」

これは日本語の攻略にも同じことが書いてある（上で引用済み）。
【引用】「ただ敷きっぱなし、電車を流しっぱなしではまず間違いなく早々に破綻」（nekosogi.org）

- **どの問い**：6
- **前提**：実時間。乗客が加速して湧く
- **こちらで成り立つか**：**こちらはターン制で待ち時間を作らないので、「加速して湧く」は形が変わる。**
  ターンあたりの需要増を階段にするなら移せる。**確かめていない**
- **一次はどこか**：TV Tropes VideoGame/MiniMetro。**403 で開けなかった**

---

### 6-5. 繋がないと悪くなる ── OpenTTD：**輸送率 60% が境目**

出どころ：検索結果（OpenTTD wiki の Industry production ページは 404。Industries ページには数値が無かった）
https://wiki.openttd.org/en/Manual/Industries

【要旨】サービスが悪い（輸送率60%未満）産業は、**増加33%・減少67%。**
サービスが良い（60%超）産業は、**増加67%・減少33%。**
一次産業の産出の伸びは「そこから運び出された貨物の割合」に依存する。
町の成長は、**50日以内に町の影響範囲内の最大5駅で1個以上の貨物を積み下ろし**すると加速する。
きちんとサービスしていれば産業は閉鎖しない（油井は例外）。

Industries ページから取れた逐語に近い一文：
【引用】
> "The growth of the output of primary industries depends upon the percentage of cargo transported away from them. The more you transport, the faster it grows in the long term on average."

- **どの問い**：6、3、7
- **前提**：実時間。産業に生産量という状態がある
- **こちらで成り立つか**：**「都市の産出が、そこを使ったかどうかで伸び縮みする」形は移せる。**
  こちらは「育ちは繋いだままの年数で伸びる」ので、**既に同じ方向を向いている**
- **一次はどこか**：OpenTTD wiki の Game Mechanics 配下の Industry production ページ。**404**

> **60% という一本の閾値で、増減の確率が 33/67 と 67/33 に反転する。**
> **「まあまあ運んでいる」が存在しない。**閾値の上か下かで、伸びるか萎むかが決まる。

---

# 問7 ── 失敗できるか。引いた線が「外れ」になることがあるか

---

### 7-1. Slipways ── **外れが確定して、直せない**

出どころ（プレイヤーの声・検索結果の要旨。Explorminate のレビュー本体は 403）
【要旨】「惑星どうしの接続は、新しい情報が出た瞬間に効かなくなる初歩的な undo を除けば、取り消せない。
**あなたの選択は、たとえそれが最悪のものであっても、恒久的である。**」
【要旨】プレイヤーの不満として ──「間違いの代償が大きい。
知らなかった仕組みのせいで置いたものが役に立たなくなる、
うっかり不要な slipway を引いてしまう、資源をラボに繋ぎ間違える。
**そして、それを直す手段が何もない。**」

- **どの問い**：7、4
- **前提**：40〜60分の一回。取り返しがつかないことが売りになっている
- **こちらで成り立つか**：**こちらは切る手が在るので、真逆。**
  **ただし「どうやって外れだと分かるか」の設計は使える** ──
  Slipways では、**惑星が unsatisfied のまま年を越すと幸福度が下がる**ので、外れは**幸福度という一本の数字**に出る
- **一次はどこか**：Explorminate の Slipways レビュー。**403 で開けなかった**

---

### 7-2. Ticket to Ride ── **達成できなかったチケットは、点が引かれる**

【引用】
> If uncompleted: "the indicated amount of points will be deducted."

- **どの問い**：7
- **前提**：先に「どこからどこまで」を宣言してから引く
- **こちらで成り立つか**：**「引く前に宣言させて、外したら減点」という形は移せる。確かめていない**

> **外れが「引いた線」の側ではなく、「宣言した目的」の側に出る。**
> 線そのものは常に点になる（1〜15点）。**外れるのは、線ではなく計画のほう。**

---

### 7-3. Age of Steam ── **未完成の線路は 1VP も生まない**

【逐語】終局の得点は「完成したリンクの一部を成す線路1区画につき 1VP」。
> 1 VP for each section of Track the comprises part of a Completed Railroad Link

つまり **Unfinished Track Section は 0点。**しかも建設費（1枚 $2〜$5）は既に払っている。

【逐語】さらに、破産の条件がある。
> If a player is unable to pay the full amount of their expenses, they must reduce their income by one for every dollar that they owe... If a player ends up having $0 or less on the income track, they are immediately eliminated from the game (insolvency). All of their Locomotives and Uncompleted Railroad Links are removed from the game board.

- **どの問い**：7、4、3
- **前提**：多人数。終局が VP で決まる
- **こちらで成り立つか**：**「途中まで引いたものは、価値ゼロ」という形は一人用でも成り立つ。**
  こちらの線が「1本＝完成」なら、この問いは形を変える必要がある

---

### 7-4. Neo Atlas 1469 ── **売上は直線距離、輸送費は航路距離。大回りすると赤字になる**

出どころ：ゲーム専務「ネオアトラス1469 攻略基礎」
https://game-senmu.com/%E3%83%8D%E3%82%AA%E3%82%A2%E3%83%88%E3%83%A9%E3%82%B91469%E3%80%80%E6%94%BB%E7%95%A5%E5%9F%BA%E7%A4%8E/

【引用】
> 「価値の高いもの同士を結びましょう」「距離が遠いほど儲かります」

【引用】
> 「直線距離で価値の補正が計算されるため、大回りな貿易航路では儲けが少ない、悪い場合は赤字になってしまいます」

【引用】
> 「産出量が低いと在庫切れを起こし、貿易赤字となります」

- **どの問い**：7、3
- **前提**：地図があり、**航路の形（実際の経路）と、都市間の直線距離が別々に効く**
- **こちらで成り立つか**：**海の上に線を引くなら、そのまま移せる可能性が高い。**
  こちらの線が「直線」なのか「経路」なのかを知らない（実装を読んでいない）

> **これは今回いちばん珍しい形の「外れ」である。**
> **売上と費用が、別々の距離で計算されている。**
> だから「遠いほど儲かる」と「大回りは赤字」が同時に成り立つ。
> **どの都市を選ぶかではなく、どう繋ぐかで外れる。**

---

### 7-5. 「外れが無い」ことへの、遊んだ人の文句

**これは呼んだ側が書いていた症状そのものである。**外の作品でも同じ穴が開いていて、
しかも**名指しで批判されている。**

出どころ：Dedoimedo「Transport Fever 2 - Very pretty, too easy」
https://www.dedoimedo.com/games/transport-fever-2.html

【引用】
> a single train delivering 150 units of fuel would "net me in something like ~20M in just one trip - almost the full value of the vehicle."

【引用】
> "you never feel there's any real danger, any serious implications to your actions."

【引用】
> "there's no actual supply and demand. You can keep sending raw materials to factories, and never really produce or ship anything else, and the whole thing will keep on working just fine."

【引用】
> "one month, I was running a surplus of 34M, the next, I was in the red a few million"（ただし回復は即座）

【要旨】筆者は約1時間で「歯応えが無い」と感じた、と書いている。

---

出どころ：The Digital Antiquarian「Transport Tycoon」（2020-10）
https://www.filfre.net/2020/10/transport-tycoon/

【引用】
> "after that you have all the money in the world; you couldn't go bankrupt if you tried."

【要旨】金が無限にあるので費用対効果の計算が無意味になり、
戦略ゲームの土台になるはずのジレンマが消える。
地形を平らにするのも、高い車両を買うのも、迷いなくやることになる。

【要旨】AIの競合は「どこにも通じない道と線路のゴルディアスの結び目を延々と作り続ける」だけで、
人間の邪魔をこそすれ、まともな競争相手にならない。

【要旨】20年目あたりから、車両の老朽化と車庫での整備が支配的になるが、
それは**戦略的な面白さも金銭的な結果も無い、純粋な作業**になっている。

【要旨】チョウ・ソーヤーの意図として「遊んで報われるだけでなく、**見ていて楽しい**ものを作ろうとした」。

- **どの問い**：7、3、6
- **前提**：どちらも実時間・多路線・巨大な地図
- **こちらで成り立つか**：**症状は完全に一致している。**
  「押すだけ得なボタン」は、この二本が名指しで批判している状態そのもの

> **1994年の Transport Tycoon と 2019年の Transport Fever 2 が、25年離れて同じ批判を受けている。**
> **この穴は、このジャンルの既定の失敗の形である。**
> しかも二人とも、**面白さが消える原因を「上限が無いこと」ではなく「危険が無いこと」と書いている。**

---

# 相場が割れているところ（まとめない。両方書く）

### 割れ1 ── 切る痛みを置くか、置かないか

| 立場 | 誰が | 何を言っているか |
|---|---|---|
| **切れないほうがよい** | Slipways（gameplay.tips）、Ticket to Ride、Power Grid、クレヨン鉄道、Catan、**Mini Metro の Extreme モード** | 「取り消せないから、慎重に決める」。**卓上はほぼ全部こちら** |
| **切れてよい（痛みゼロ）** | Mini Metro 通常モード、Anno 1800（influence が戻る） | 引き直しが遊びの本体になる |
| **切る判断そのものを取り上げる** | Brass（時代末に自動撤去）、Railways of the World（未完成は強制撤去） | 遊ぶ側に損切りをさせない |

**そして、この割れの帰結が実測されている。**
切る痛みがゼロだと、上級者の最適解は「使い捨ての線」になる
（日本語の二人が別々に「遊撃線」「幽霊線」と名付けている）。
交通計画の専門家は、それを「これはバス路線の話であって、鉄道の話ではない」と評した。

**こちらは「切る手が既に在る」と決まっているので、この割れの片側に既に居る。**
**割れているという事実そのものが材料である。**

---

### 割れ2 ── 一手番の本数に蓋をするか、通しの総数に蓋をするか

| 立場 | 誰が |
|---|---|
| **一手番の本数に蓋** | Age of Steam（3枚）、Brass（Network 1回＝1本）、Empire Builder（$20/ターン） |
| **一手番は無制限、通しの総数に蓋** | Catan（【引用】"You may build as many roads as you can pay for." だが総数15本）、Ticket to Ride（45両） |
| **両方** | Mini Metro（線7本 かつ 車両が要る） |

**注意。**Catan 流（一手番無制限・通しに蓋）が成り立つのは、
**手番あたりの資源の入りが極端に乏しいから**である。
Catan は道1本に「レンガ1・木材1」を要求し、その資源はサイコロ次第でしか入らない。
**入りが潤沢な場所でこの形を採ると、初手で総数を使い切れる。**

---

### 割れ3 ── 早く引くほど得か、遅く引くほど得か

| 立場 | 誰が | 何で作っているか |
|---|---|---|
| **早いほど得** | Power Grid（都市枠が 10→15→20）、Brass（良い場所が枯れる）、Slipways（繋がずに年を越すと罰） | 場所が有限で、先着で埋まる |
| **遅いほど得** | Power Grid（建設は逆順・トップが最後）、Brass（時代末に盤面が育ってから引く）、Ticket to Ride（序盤はカードを溜める） | 得点が「そのときの盤面」で決まる |

**Power Grid と Brass は、どちらも同じゲームの中に両方入れている。**
**これは「どちらかに決める」問題ではないらしい。**

---

### 割れ4 ── 上限を硬い数で置くか、柔らかい罰で置くか

- **柔らかい罰の側**：Mini Metro alpha7 が試した
  【引用】"Tunnels (bridges?) are no longer limited" ＋ トンネルは列車を遅くする
- **硬い数の側**：**Mini Metro alpha8 が、9日後に元へ戻した**（ロンドンはトンネル3本から）

**同じ作り手が、9日で意見を変えている。理由は書き残されていない。**

---

# 当たり前になっているが、理由が書かれていないもの

### ① 「新しい線は、既に自分が持っているものに繋がっていないといけない」

Catan：【逐語】"A new road must always connect to 1 of your existing roads, settlements, or cities."
Brass：【逐語】"The placed link tile must be adjacent to a location that is a part of your network."
Age of Steam：【逐語】"The very first track tile every player builds at the start of the game must be adjacent to a City and the track must connect to the City."
クレヨン鉄道：【要旨】「自分の既存線路か、大都市からしか建設できない」

**四本とも同じ規則を持っている。理由を書いているものは一本も無かった。**
（推測はしない。**書かれていないと書く。**）

**そして三本とも、この規則に「詰まったとき用の抜け穴」を用意している。**
Brass：【逐語】"If you have no industry or link tiles on the board, you may place a link tile on any undeveloped line"
Age of Steam：最初の1枚だけは都市に隣接して置ける
Catan：初期配置で2本もらう

---

### ② 「一つの辺には一本しか置けない」

Catan：【逐語】"Only 1 road can be built on any given path (i.e., the edge of a terrain hex)."
Brass：【逐語】"Place a link tile on an **undeveloped** line on the board."
Ticket to Ride：【引用】"When cities are connected by double-routes, then the player can't claim both routes to the same cities."

**三本とも同じ。理由は誰も書いていない。**

**例外を一つ見つけた。**Age of Steam は、複雑タイル（交差）を金で許している。
【逐語】Simple Track = $2 each tile / Complex Track (Coexist) = $3 / Complex Track (Crossing) = $4
**つまり「同じ場所に二本目」を、値段の差にしている。**

---

### ③ 「線そのものには維持費がかからない」（卓上のほぼ全部）

Age of Steam の維持費は**株と機関車のレベル**にしか掛からない。
【逐語】"Each player must pay $1 for every share they issued... plus $1 for every Link their locomotives can traverse"
**線路には一銭も掛からない。**
Brass も、link tile に維持費は無い（負の収入は借金から来る）。
Catan・Ticket to Ride・クレヨン鉄道も同じ。

**卓上で「線の維持費」を持っているものが一つも見つからなかった。**
デジタル側（Anno、Transport Tycoon、OpenTTD）は車両・船の維持費を持つが、
**それも線ではなく駒に掛かっている。**

> **こちらの実測「維持費は収入の1〜2%」に対して、これは重要かもしれない。**
> **相場は「線の維持費を、線を止める仕掛けとして使っていない」。**
> 止めているのは、**手番・駒の数・場所の枯渇**のほうである。

---

# 昔と今で変わったもの

### ① クレヨンで描く → 決まった地図の上に置く（Power Grid、2001→2004）

【引用・日本語訳】フリーゼは【引用】「ネットワークを引くときのコスト感...『エンパイアビルダー』を参考にした」と述べている。
初代 Funkenschlag はクレヨンで自分のネットワークを描く形だった。
**Power Grid では、決まった地図の上に家を置く形に変わった。**
一次：Chris Wray, The Opinionated Gamers, 2016-07-11（**403 で開けず**）。
二次：https://takewatch.blog.jp/archives/925092.html

**変わった中身**：自由に描ける → 決まった辺に置く。
**理由として残っているのはこれ**：【引用・日本語訳】「とにかく狭さを重視した...自由に発電所を建てられない、狭い世界にしたかった」。

---

### ② トンネルの上限：有限 → 無制限（速度罰）→ 有限（Mini Metro、2014年3月の9日間）

alpha7（3/12）：【引用】"Tunnels (bridges?) are no longer limited"
alpha8（3/21）：**再び有限に。ロンドンは3本から。**
**理由は書き残されていない。**

---

### ③ 強化の配り方：節目でもらう → 毎週もらう（Mini Metro、alpha8→alpha9）

alpha8：乗客数の節目で三択（railcar / station / tunnel）
alpha9：【引用】"we're back to offering a semi-random selection every week"
alpha10：選択肢を二つのプールに割り、【引用】"Upgrades are chosen from the second pool in week one, first pool in week two, and both pools in subsequent weeks."
alpha11：【引用】"presenting three upgrade options each week. Two of these are line upgrades... The third option is either extra tunnels or an interchange."
**理由**：【要旨】alpha11 は「ミニマリズムという核に戻る」ため、選択肢を削ってネットワーク作りに焦点を戻した。

**つまり、選択肢は増やしてから削っている。**

---

### ④ 終了条件：都市数だけ → 「発電数と都市数の小さいほう」（Power Grid）

【引用・日本語訳】
> 「エンドトリガーは最初都市数だけでカウント...最終的に『発電数と都市数の小さい方でみる』ルールに変えた」

**変わった中身**：繋いだ本数だけで終わりが来る → **繋いだ本数と、実際に使えている本数の小さいほう。**
**つまり「繋いだが動かせていない線」で終局を引き寄せられなくした。**

> **これはこちらに直接効く可能性がある。**
> **「引いた本数」と「実際に働いている本数」を区別する、という発想。**

---

### ⑤ Transport Tycoon の批判が、25年経っても同じ（1994 → 2019）

Digital Antiquarian（2020）が Transport Tycoon（1994）に対して
【引用】"you couldn't go bankrupt if you tried."
Dedoimedo（2020）が Transport Fever 2（2019）に対して
【引用】"you never feel there's any real danger, any serious implications to your actions."

**このジャンルは、この失敗を25年かけて解いていない。**

---

# 開けなかったもの

**この節に入れた URL は `check-refs.mjs` が確かめに行かない。**理由つきで全部残す。

| URL | 何を取りに行ったか | 何が起きたか |
|---|---|---|
| https://praxis.fortelabs.co/visualizing-the-theory-of-constraints-with-mini-metro | Mini Metro の制約論 | 403 |
| https://mini-metro.fandom.com/wiki/Line | 線の本数・削除の規則 | **402 Payment Required** |
| https://mini-metro.fandom.com/wiki/Extreme | Extreme モードの規則（切れない版） | 402（検索結果の要旨のみ） |
| https://mini-metro.fandom.com/wiki/Budget_increase | 週ごとの配布の内訳 | 402 |
| https://anno1800.fandom.com/wiki/Trade_routes | charter route の influence 5 と無料3本 | **402**（検索結果の要旨のみ） |
| https://anno1800.fandom.com/wiki/Influence | influence の全体像 | 402 |
| https://minimotorways.miraheze.org/wiki/Motorway | 道路タイルの枚数 | 403 |
| https://www.giantbomb.com/profile/gamer_152/blog/interview-peter-curry-co-creator-of-mini-metro/131885/ | Peter Curry のインタビュー | 403 |
| https://devlog.dinopoloclub.com/post/84406238190/mini-metro-alpha11 ほか post/ 系すべて | 開発日誌（旧 tumblr 側） | **503**（ただし `dinopoloclub.com/YYYY/MM/DD/…` 側は開けた） |
| https://web.archive.org/…（複数） | 上の代替 | **道具が web.archive.org を取得できない** |
| http://www.fwtwr.com/18xx/rules_difference_list/5_2.htm | 18xx の「一手番に2枚置けるか」の全作品比較 | 503（二度） |
| http://www.18xx.net/1830/1830f.htm | 1830 のタイル関連のFAQ | 503 |
| https://boardgamegeek.com/boardgamemechanic/2081/network-and-route-building | 機構の定義と「Connections」との違い | 403 |
| https://www.thedarkimp.com/blog/2021/02/10/what-is-a-network-building-game/ | ネットワーク構築ゲームの定義 | **本文が空で返る** |
| https://opinionatedgamers.com/2016/07/11/funkenschlag-at-fifteen-the-story-of-power-grid/ | **Power Grid の一次資料**（Chris Wray, 2016-07-11） | 403（日本語訳で代替した） |
| https://explorminate.org/slipways-review/ | Slipways の詳細レビュー | 403 |
| https://tnocs.com/the-story-of-alan-r-moon-and-the-rise-of-ticket-to-ride/ | Alan Moon の設計意図 | 403 |
| https://transportist.org/2014/11/05/mini-metro-review/ | 交通研究者の Mini Metro 評 | 403 |
| https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/MiniMetro | 難度の構造（供給が需要に追いつかない） | 403 |
| https://indiegamereviewer.com/slipways-review-… | Slipways の評 | 403 |
| https://makecraftgame.com/2021/10/15/18xx-a-history-part-2/ | 18xx の歴史（1829→1830） | 403 |
| https://slipways.net/devlog/02 | Slipways の開発日誌本体 | 404（itch.io 側は索引のみ） |
| https://wiki.openttd.org/en/Manual/Game%20Mechanics/Industry%20production | 産業の生産変動の数値 | 404 |
| https://w.atwiki.jp/neoatlaswiki/pages/44.html | ネオアトラスの貿易 | 403 |
| https://seesaawiki.jp/neoatlas1469/d/交易の基礎知識 | 同上 | **開けたが文字化けで読めなかった**（EUC-JP と思われる） |
| https://steamcommunity.com/sharedfiles/filedetails/?id=3590614638 | Mini Motorways の週あたり枚数 | **開けたが、その情報は載っていなかった** |

### 探したが、三通り以上言葉を変えても出てこなかったもの

1. **Mini Metro の「機関車を選択肢のプールから外して、毎週自動で配ることにした」という設計判断の一次。**
   検索結果の要約には
   「the breakthrough for us was removing the locomotive from the standard pool of options and simply giving one to the player each week. It is such an essential part of the network that the player was forced to select it when it was offered, so we were depriving them of any choice.」
   という文が出たが、**どのページのものか特定できなかった。**
   alpha7〜13 の開発日誌を全部当たったが、この文は無い。
   **開いて確かめていないので、出どころの並びには入れていない。**
   **ただし、もし本物なら、この題でいちばん効く一次資料である**（「選ばせているつもりで選ばせていなかった」）。
   探した言葉：完全一致フレーズ／"deprive"＋upgrade／alpha12・alpha13 の中身／Road to the IGF。

2. **18xx で「なぜ一手番に一枚なのか」を設計者が語った資料。**
   Francis Tresham の設計意図に触れた文書に一つも辿り着けなかった。
   探した言葉：designer intent／Tresham interview／why one tile per OR／1829 design notes。
   **出てきたのは「結果として何が起きるか」（枯渇・妨害）だけで、「なぜそう決めたか」はゼロ本。**

3. **「線の維持費」を主要なブレーキとして使っている作品。**
   探したが、卓上・デジタルとも見つからなかった。維持費は必ず**駒**（船・車両・株）に掛かっていた。
   探した言葉：track maintenance cost board game／route upkeep／per-link upkeep。

4. **一人用の交易・路線ゲームで「他人に取られる」の代わりを何が担っているかを、正面から論じた資料。**
   個別の実装（Slipways の交差不可、盤面の枯渇）は取れたが、**横断した議論はゼロ本。**

---

# ★ この枠そのものへの文句

**枠を直すのは呼んだ側の仕事なので、材料として出す。**

### 文句1 ── 問1と問2が、実際には切れていなかった

「本数の上限」と「金以外に払うもの」は、**同じ仕掛けの表と裏だった。**
Mini Metro の「線を引くには余った車両が要る」は、問1（上限の形B）でもあり、問2（駒を払う）でもある。
Anno の influence も同じ。Brass の「1手番＝2アクション」も同じ。
**同じ出どころを二回書くことになった箇所が、少なくとも5件ある。**

**提案の形は出さないが、事実として ──
「上限」と「支払い」は、一つの問い（**何を差し出すと1本引けるか**）にまとまる可能性がある。

---

### 文句2 ── 問4（切る痛み）は、実は二つに割れていた

集めてみると、四つの流儀のうち二つは「痛み」の話ですらなかった。

- **切れるか／切れないか**（可否の話）
- **切ったときに何が返るか／何が残るか**（清算の話）
- **切る判断を、そもそも遊ぶ側にさせるか**（Brass・Railways of the World は取り上げている）

三つ目が問4の文面に入っていなかった。**しかしこれが一番違いを生んでいる。**

---

### 文句3 ── 問6（ネットワーク効果の向き）は、二つの軸が混ざっていた

「繋ぐほど繋ぎたくなる／苦しくなる」で聞かれたが、実際に出てきたのは**二本の別々の軸**だった。

- **報酬側**が非線形に増えるか（Slipways の段階、Ticket to Ride の 1/2/4/7/10/15、Catan の最長路）
- **費用・余裕側**が逓減するか（Power Grid の 11→8、Age of Steam の収入減少表）

**この二つは独立に設定できる。**そして相場は**両方を同時に持つ**のが定石だった。
「向き」という一つの軸で聞くと、片方しか答えられない。

---

### 文句4 ── 「早い／遅い」（問5）は、二値で聞ける問いではなかった

Power Grid も Brass も、**同じゲームの中に早い理由と遅い理由を両方入れている。**
「傾き」を一方向で聞くと、**必ずどちらか一方が落ちる。**

---

### 文句5 ── 一人用であることが、枠に入っていなかった

問2に「他人に取られる権利」、問3に「敵に狙われる」が入っていたが、
**こちらは一人用**（22ターン・ターン制）。
卓上の資料はほぼ全部が多人数で、**その部分は素通りするしかなかった。**
代わりに拾ったのが「一人用で、他人の役目を何が肩代わりしているか」
（空間の排他・盤面の枯渇・時計）だが、**これは枠のどこにも入っていない。**

---

# ★ 渡された分野のどれにも入らなかったもの

**枠は、枠に入らないものを落とす。落とさずにここへ出す。**

### 落ちたもの1 ── **「線を引く」ことと「線を使う」ことが、別の行為として分かれている作品が多い**

Age of Steam は、線を敷く手番（Step 4）と、貨物を動かす手番（Step 5）が**別の段**になっている。
【逐語】"Each different Completed Railroad Link a good travels over increases the income of the Completed Railroad Link's owner by 1 on the Income Track."
**つまり、線は引いただけでは 1円も生まない。誰かがそこを通って初めて収入が上がる。**

Railways of the World も同じ。
【引用】"A player gains 1 point on the income track for each complete link he owns that the cube traveled along."

クレヨン鉄道も同じ。線路を敷くのと、列車を走らせて荷物を運ぶのは別の段。

**七つの問いは全部「引く」側の話で、「使う」側が一つも入っていない。**
だが**相場の側は、引くことと使うことを分けている。**
こちらの実測「毎ターン +2,609」は、**引いた瞬間から自動で入る**形に見える。
**相場はそうなっていない。**

---

### 落ちたもの2 ── **他人の線を使わせることが、収入源になっている**

クレヨン鉄道：【引用】"Before the end of the movement phase of a turn during which an opponent's track was used, the player pays that opponent $4."
Age of Steam：【逐語】"Players can move goods over other player's tracks, so players must keep a close eye on whose tracks are being used so that these players are awarded the Income increase on the Income Track."
Brass：【逐語】"Two locations are considered **connected** to each other if you can trace a route of link tiles (owned by any player) from one location to the other."

**線は、自分だけのものではない。**
これは多人数の話だが、**「引いた線が、自分の意図と別のところで働く」という感触は一人用でも作れる。**
七つの問いのどこにも、この欄は無かった。

---

### 落ちたもの3 ── **上限が「終わりの合図」を兼ねている作品がある**

Ticket to Ride：45両を使い切りかけると最終ターンが始まる。
Railways of the World：【引用】Empty City Marker が規定数出るとゲームが終わる。
Power Grid：【引用・日本語訳】終了条件を「発電数と都市数の小さいほう」に変えた。

**つまり「何本引けるか」と「いつ終わるか」が同じ数字になっている。**
七つの問いは「上限」と「終わり」を別のものとして扱っていない ── というより、
**「終わり」の欄が無い。**
こちらは22ターン固定なので、この形は**採らないという判断**をどこかでしていることになる
（実装を読んでいないので、意図的かどうかは分からない）。

---

### 落ちたもの4 ── **「どこに引けるか」の制限が、「何本引けるか」より強く効いている**

Brass は「線を何本持てるか」を規定していない（駒は14枚あるが届かない）。
効いているのは**「自分のネットワークに隣接していないと置けない」**という位置の制限のほう。
Slipways は本数を制限していない。効いているのは**「交差できない」**という位置の制限。
Age of Steam も、3枚という枚数制限より**「他人の線路に直接繋げてはいけない」**が効いている。
【逐語】"A track cannot be built so it directly connects to another player's track."

**七つの問いは全部「量」の話で、「位置」の欄が無い。**
だが相場では、**位置の制限のほうが本数の制限より上位に効いている作品が複数ある。**

---

### 落ちたもの5 ── **Brass の「線を引くのに、他人の醸造所のビールを使わせてもらう」**

【逐語】
> In a single network action, you may build a maximum of 2 rail links for £15, if you also consume 1 beer.
> If consuming beer from another player's brewery, it must be connected to the second rail link (after it is placed).

**「2本目を引くための燃料を、2本目を引いた後に繋がる場所から取る」という循環規則。**
つまり **引いてから、引けたかどうかが決まる。**
これは問2（何を払うか）でも問7（外れ）でもない、**「支払いの順序」**という別の軸だった。

---

# 数えたもの

| 問い | 別々の出どころ | ゼロ本か |
|---|---|---|
| 1 上限の形 | **9本**（Mini Metro開発日誌×5、Neo Atlas×2、Age of Steam、Brass、Empire Builder、Ticket to Ride、Catan、Mini Motorways） | いいえ |
| 2 金以外の支払い | **6本**（Brass、Anno、Age of Steam、Slipways、Mini Metro、Neo Atlas） | いいえ |
| 3 引くと何が悪くなるか | **5本**（OpenTTD×2、Power Grid、Age of Steam、Slipways） | いいえ |
| 4 切る痛み | **8本**（Slipways、nekosogi、note.com、hamy.xyz、Human Transit、Railways of the World、Age of Steam、Brass、Catan、クレヨン鉄道） | いいえ |
| 5 早い／遅い | **6本**（Power Grid×2、Brass×2、Ticket to Ride×2、Slipways） | いいえ |
| 6 ネットワーク効果の向き | **6本**（Slipways、arXiv、Catan、Power Grid、Age of Steam、OpenTTD） | いいえ |
| 7 失敗できるか | **6本**（Slipways、Ticket to Ride、Age of Steam、Neo Atlas、Dedoimedo、Digital Antiquarian） | いいえ |

**ゼロ本の問いは無い。**

### 出どころが一件しかない答え（7件）

1. **Mini Motorways の週あたり30〜40枚**（検索結果の要旨のみ。Fandom も Miraheze も開けず）
2. **Mini Metro の Extreme モード＝置き直せない**（検索結果の要旨のみ。Fandom 402）
3. **Anno 1800 の charter route が influence 5、最初の3本無料**（検索結果の要旨のみ。Fandom 402）
4. **Neo Atlas 1469 の「貿易航路は1本から始まる」**（検索結果の要旨のみ。公式ページには本数の記載なし）
5. **OpenTTD の産業生産の 60% 閾値と 33/67 の確率**（検索結果の要旨のみ。数値の載った wiki ページが 404）
6. **Ticket to Ride の 1/2/4/7/10/15 という点数表**（検索結果の要旨のみ。公式ルールの引用としては取れていない）
7. **Brass の「運河リンクは時代末に消えるので、時代の終わり際に引くのが得」**（検索結果の要旨のみ。BGG スレッド未読）

**この7件は、表に落とす前にもう一度当たること。**
