# rhythm.md — 音ゲー（リズムゲーム）の生の記録

調べた日：**2026-08-21**
調べた者：ジャンル調査（実装・既存シートを読まずに、ネットだけから採取）

## この記録の読み方

- 一件ごとに **出どころ（URL・書いた人・いつのものか）／書き起こし／分野** を持つ。
- 分野は `templates/sheets/genre/README.md`「調べる分野」の七つ。
  1. 入力と判定　2. 返し　3. 見せ方と予告　4. 構造　5. 進行と難度　6. 遊んだ人の文句　7. 実装の落とし穴
- **「」で囲った部分は、そのページから取ってきた文言。**
  ただし取得は要約器を通しているので、**逐語である保証が無い箇所には〔要約経由〕と印を付けた。**
  数値は数値のまま写した。数値を丸めた箇所は無い。
- **ここに書いた URL は全部、開いて中身を見たもの。**
  開けなかった URL は末尾の「開けなかったもの」にまとめた。

---

# 分野1：入力と判定

## 1-1. beatmania IIDX の判定幅とゲージ（iidx.org 公式でない有志のまとめ）

- 出どころ：https://iidx.org/compendium/gauges_and_timing （iidx.org "beatmania IIDX guide" / compendium。著者名の表示なし。取得日 2026-08-21）
- 分野：**1**（およびゲージは分野5）

判定表（そのまま）：

| JUDGE | Window (ms) | Resets combo |
|-------|------------|--------------|
| PGREAT | ±16.67 | No |
| GREAT | ±33.33 | No |
| GOOD | ±116.67 | No |
| BAD | ±250 | Yes |
| POOR | at -250 | Yes |

注記：「All units in milliseconds. Positive means before the note, negative is after the note.」

ゲージ表の列は `PG, GREAT, GOOD, BAD, POOR, 空P, Low Life Adj`。主な値：
- **HARD/EXHARD**：PG と GREAT が 0.16、GOOD が 0、BAD が -5/-10、POOR が -9/-18
- **DAN/EX-DAN**：PG/GREAT が 0.16、GOOD が 0.04、BAD/POOR は負の値がまちまち
- **EASY/NORMAL**：総ノート数に基づく関数 "a" で表される

「HARD, EXHARD, DAN, and EX-DAN gauges are 'survival' gauges - you start at 100%, and get a stage fail if you drop to 0%.」

「Low Life Adjustment: when the gauge is at or below 30%, the rate of decrease caused by BAD and POORs are halved.」

**このページが名指しで否定している俗説が二つある。**
- 「It is a myth that timing windows are larger in DP」（ダブルプレーのほうが判定が広い、は俗説）
- 「It is a myth that the timing windows are asymmetric」（判定が早遅で非対称、は俗説）

## 1-2. 各機種の判定幅一覧（個人ブログ）

- 出どころ：https://www.topusuke.com/2025/12/07/音ゲーの判定幅について/ （とぷすけの書斎、2025-12-07）
- 分野：**1**

スマホ音ゲー：
- プロセカ：Perfect 41.7ms / Great 83.3ms
- ユメステ：Perfect 40ms / Great 70ms
- Arcaea：PURE 50ms / FAR 100ms
- Phigros：Perfect 80ms / Good 160ms
- Milthm：Perfect 70ms / Good 140ms

アーケード音ゲー：
- チュウニズム：Justice 66.6ms / Attack 100ms
- maimai：Perfect 50ms
- jubeat：Perfect 40ms / Great 80ms
- beatmania IIDX：P-Great 17ms / Great 33.3ms
- 太鼓の達人：良 25ms / 可 75ms

筆者の指摘：「プロセカの判定幅に端数があるのはフレームから算出しているからと考えられる。（60FPSの場合1F=16.66）つまり60FPSの場合2.5FでPerfectになるようにしている。」

筆者の観察：**最高判定値の倍が次点評価になる傾向が各ゲームで見られる。**
Phigros と milthm の判定が緩い理由について「ノーツがあらゆる方向から落ちてくるゲーム性ゆえだろうか」と推測している。
スマホ音ゲーは端末スペック差に対応した判定調整が必要、とも書いている。〔要約経由〕

## 1-3. 検索結果に出た最高判定の横並び（同上の検索スニペット層）

- 出どころ：検索結果に現れた一覧（wikiwiki.jp/rhythmgame の判定幅情報ページは 403 で開けず、下の値は検索結果本文にあったもの）
- 分野：**1**
- **注意：原典を開けていない。値の裏取りはできていない。**

プロセカ(PERFECT) 41.7ms／ユメステ(PERFECT+) 25ms／チュウニズム(JUSTICE CRITICAL) 33.33ms／
maimai(CRITICAL PERFECT) 16.67ms／オンゲキ(CRITICAL BREAK) 33.33ms／SDVX(S-CRITICAL) 20.83ms／
beatmania IIDX(P-GREAT) 17.00ms／DDR(MARVELLOUS) 16.66ms／太鼓の達人(良) 25.00ms

「60FPSゲームの4フレームが66ミリ秒(±33ミリ秒)に相当します」
「どの音ゲーでもたいていは最高判定の倍の数値が次点評価の数値になるようです」

**1-2 と食い違う点：**maimai の最高判定が 1-2 では 50ms、ここでは 16.67ms。
チュウニズムも 66.6ms と 33.33ms で食い違う。**「最高判定」の指す段が資料ごとに違う可能性が高い。**

## 1-4. DDR の判定幅をめぐる論争（掲示板）

- 出どころ：https://zenius-i-vanisher.com/v5.2/thread?threadid=11131 （Zenius -I- vanisher、2022-03-24〜25）
- 分野：**1**、**6**

**Retroguy**（2022-03-24）が挙げた DDR EXTREME の値：
- Marvelous: ±13.333 ms
- Perfect: ±26.667 ms
- Great: -86.667 to +73.333 ms
- Good: -126.666 to +113.333 ms
- Boo: -153.333 to +180.000 ms

Retroguy は「the engine has be revamped to eliminate this problem」（フレームレートのばらつきの話）と述べつつ、DDR A の具体値は見つけられないと書いている。

**n00b_saib0t**（2022-03-24）は非対称を否定：「The windows are identical for early and late, whoever came up with those is wrong.」
自分の値は「approximations based on frame to ms conversions」だと断っている。

**Retroguy**（2022-03-25）：StepMania で試すと Great と Good の窓が Judge 6 に比べて「very loose」に感じる、と報告。
**n00b_saib0t**（2022-03-25）：厳しい判定系に比べれば広く感じて当然、「check the math yourself」。
**razorblade**（2022-03-25）：StepMania の "TimingWindowAdd" 設定を見ろ、と示唆。

**割れている点：早/遅の非対称が実在するかどうか。**IIDX の 1-1 も「非対称は俗説」と書いており、
非対称値を載せている資料（1-4 の Retroguy）と正面から食い違う。

## 1-5. パラッパラッパー（1996）の採点は「タイミング精度」ではなかった

- 出どころ：https://www.famitsu.com/article/202607/78894 （ファミ通、2026-07-04。松浦雅也／伊藤ガビン／MC RYU）
- 分野：**1**、**4**

松浦氏が明かした採点の基本構造。音符の最小単位である16分音符を基準に、
**8分音符（16分音符2つ分）ごとに入力を評価**する。各タイミングで発生し得るパターンは4つだけ：

- **頭を鳴らす：8点**
- **2つ鳴らす：16点**
- **裏（裏拍）だけ鳴らす：32点**
- **何も鳴らさない：48点（条件付き）**

松浦氏：「"何も鳴らない"というのをもっとも高い48点に設定しました。ただし前後2拍のあいだに4つすべてのパターンが登場しているときだけという条件が入るのですが」

つまり **連打は得点につながらない。うまいプレイヤーは「うまく休んでいる」。**

伊藤氏：「この採点システムのアイデアはミュージシャンでないと思いつけないものです」
松浦氏：「あとは自分で作っておいて言うのはいけないかもしれませんが、音楽は採点するものではないんですよね」
RYU氏：「松浦さんが『これはゲームだから、そこは我慢して乗り越えよう』と言って、全員が納得したうえで採点システムを作り上げました」

## 1-6. Crypt of the NecroDancer は判定幅を最終的に「100%」にした

- 出どころ：https://www.gamedeveloper.com/audio/game-design-deep-dive-finding-the-beat-in-i-crypt-of-the-necrodancer-i- （Game Developer、Ryan Clark（Brace Yourself Games 創業者／デザイナー／プログラマ）、2014-09-17）
- 分野：**1**、**2**、**7**

最初は **拍の前後 20% の判定窓**（120bpm で ±100ms 相当）を入れていた。
テストで分かったこと：「the times when you are least accurate are the times when you are most stressed.」
敵に襲われている時こそ精度が落ち、そこで "MISS" が出ると学びにならず苛立ちだけが残った。

**取った手：判定窓を 100% leniency に広げた。事実上、拍の精度要求を消した。**

Clark のまとめ：「In NecroDancer the challenge comes from the fast tactical combat itself. Requiring accuracy is just frustrating.」

〔同席する分野2の話〕最初は「プレイヤーが拍で動き、敵が拍と拍の間で動く」形だった。
これは交互のターン制に見え、世界が「visually unsynchronized to the beat」に感じられた。
TowerFall の Matt Thorson に勧められて **同時移動（プレイヤー優先）** に変えたら、
全部が「on the beat」で起きるようになり、拍への乗りが良くなった。

## 1-7. 判定幅の広さの相場（日本語の入門解説）

- 出どころ：https://hackmd.io/@Thike/r1UP0E-Xi （HackMD「音ゲーってなんぞ？」、Thike）
- 分野：**1**、**2**

「曲に合わせて上から降ってくるノーツをタイミングよく叩いてスコアを狙うゲーム」
ノーツは「レーンと呼ばれる縦に区切られたエリア」を移動し、画面下部の判定線に重なった瞬間にタップ。

判定は「Perfect, Good, Miss」などに分類され、許容範囲は機種により
**「狭いものだと 25 ms、広いものだと 82.5 ms まで許容される」**。

ノーツの種類：タップ／ロング（「画面をタップしっぱなしにすることでスコアを取得できる」）／
フリック（「とある方向へ弾くように取るノーツ」）／スライド（「横に移動させながら取るノーツ」）。
配置語彙：トリル、縦連、階段、混フレ。運指語彙：餡蜜（ずれたノーツを同時押し扱いにする）、分業。
繋いだ数を示す Combo があり、完璧なら Full Combo。理論値は「All Perfect」「MAXX」など呼称が複数ある。〔要約経由〕

---

# 分野2：返し（成功／失敗のとき、音と画面で何が返るか）

## 2-1. osu! の hitsound は「自分の精度を耳で測るための返し」

- 出どころ：https://raw.githubusercontent.com/ppy/osu-wiki/master/wiki/Beatmapping/Hitsound/en.md （osu! wiki、ppy/osu-wiki、master）
- 分野：**2**

「Hitsounds are the sounds that osu! plays in response to user input when interacting with hit objects.」

役目：「give auditory feedback to the player to help them judge their accuracy in relation to the song.」

**能動 hitsound（active）**：クリックできる部分（hit circle、slider head）に付くもの。
「a clear impactful sound at the time of clicking」を鳴らし、正しく押せていれば曲の拍と重なる。
→ **早いか遅いかが、音の重なりのズレとして耳に返る。**

**受動 hitsound（passive）**：クリックしない部分（slider repeat、spinner end）に付くもの。
プレイヤーが触れている限り必ず同じ時刻に鳴る。
はっきりした打撃音である必要はないが、拍に乗る場所では
「they land on distinct beats in order to help the player maintain rhythm」ため能動と同じ音を使うことが多い。

構成：既定のサンプル hitnormal に、whistle / finish / clap を足す。
サンプルセットは Normal / Soft / Drum の三系統。〔要約経由〕

## 2-2. 「打鍵感」──押した手応えは音の作りで上げ下げできる

- 出どころ：https://yuinore.net/2016/12/simamu/ （yuinore、2016-12-01）
- 分野：**2**、**4**

「キー音に打鍵感があると、BMSとしてのクオリティが1段階上がる」

やっていること：**複数の音声を1つの wav に統合する**（同じメロディを奏でる複数トラックの統合、
伴奏の和音をひとつにまとめる、ベースとサブベースの合成）。これで音の厚みと説得力が上がる。

具体例：自作BMS「THE EARTH」の ANOTHER 譜面で
「ドラムループで使われているバスドラムとドラムキットのバスドラムを併合しました」。

手作業を避けるため「Simamu -Simple Audio Merging Utility-」というツールを作って配布している。
同じ wav 同士の合成では重複を避ける処理を入れている。〔要約経由〕

## 2-3. 太鼓の達人のプロデューサーが言う「遊びのコア」は返しの調和

- 出どころ：https://bandainamco-am.co.jp/company/asobito/article47.html （バンダイナムコアミューズメント ASOBITO、2023-09-11 掲載／取材 2023-02。木水克典（業務用プロデューサー））
- 分野：**2**、**4**

木水氏は、目の前の太鼓を叩く体験そのものが「遊びのコア」だと述べる。具体的には
**「叩く感触、連動する音、画面の演出…これらが調和した爽快感」**。
この要素の調和を維持することがコンテンツ運営の最優先事項だとされている。

判定や譜面の技術的な数値についての言及はこの記事には無い。
**個々の要素より「調和」で生まれる爽快感を語っている**のが、この記事の性格。

プロデューサーの役割：「プロジェクトがどんなゴールへ、どんなふうに向かうのか、戦略を立てる旗振り役」〔要約経由〕

## 2-4. FAST/SLOW 表示（早いか遅いかを毎ノートで返す）

- 出どころ：https://no4channel.xyz/2021/01/17/post-717/ （ChannelNo4Network、no4xtk/Ansai、2021-01-17）
- 分野：**2**、**5**

「judge display timing (FAST/SLOW) is absolutely mandatory.」（**判定タイミング表示は絶対に必須**）
スコア狙いでもクリア狙いでも同じ。
「Deliberately hiding valuable in-game information makes no sense.」（有用な情報をわざと隠す意味はない）

同記事の他の主張（分野5にも掛かる）：
- EASY / ASSISTED EASY：一度ノーマルクリアした曲に使うぶんには「there is no demerit whatsoever」
- RANDOM / R-RANDOM：レベル8以上で推奨。一曲から複数の配置を練習でき、機械的な癖が付くのを防ぐ。
  「what truly matters is not achieving lamps but developing genuine skill」
- AUTO-SCRATCH / 5KEYS：使うべきでない。「feel skilled but lose all ability」（外した途端に何もできなくなる）
- HARD / EX-HARD の一曲粘着：「meaningless for genuine skill development」（運で決まることが多い）〔要約経由〕

## 2-5. FAST/SLOW を使った実際の調整の仕方（2013年の個人記録）

- 出どころ：https://fdscaa.hatenablog.com/entry/2013/01/04/133102 （はてなブログ「倒れこむ」、2013-01-04）
- 分野：**2**、**7**

「結果画面でEFFECTボタンを押すとPOOR数下に表示される」

- **FASTが多い場合：**「判定をLATE(上)側に調整」
- **SLOWが多い場合：**「EARLY(下)側に調整」

「ジャッジ表示を出しながら調整した方が効果的」

筐体別の判定位置の推奨値（分野7の核心）：
- **ブラウン管：0.0～+0.1**
- **液晶筐体：+0.7～0.8**（ただし個人差が大きく、自分より「光ってる人」は +0.4 程度）
- **非正規液晶：大きなばらつきあり**

著者の環境：BMS では 2ms 遅延モニターと JYPSUAD11、LR2 判定が +4〜8 程度。
「この条件は判定が上にある」と自認し、参考程度にとどめるよう注記している。
結論：「筐体によってプレイスタイルの工夫が必要」「気持ち早く押す練習が重要」〔要約経由〕

## 2-6. Guitar Hero の返し（Rock Meter / 倍率 / Star Power）

- 出どころ：https://en.wikipedia.org/wiki/Guitar_Hero_(video_game) （Wikipedia、Guitar Hero、取得 2026-08-21）
- 分野：**2**、**5**

- 「The player is awarded points for correctly hitting notes, chords and sustains.」
- 連続して当てると **score multiplier** が上がる
- **Rock Meter** が成績を追跡し、「if the meter drops too low the song will prematurely end in failure for the player.」
  （**曲の途中で打ち切られる**）
- **Star Power**：光るノート列を完璧に取ると溜まる。半分まで溜めると発動でき、
  「will double the scoring multiplier and makes it easier to increase the Rock Meter by playing correct notes.」

難度（分野5）：
- **Easy**：フレットボタンを最初の3つだけ使う
- **Medium**：4つめを足し、ノートも増える
- **Hard**：5つ全部
- **Expert**：新しいボタンは無い。**ノート数を大幅に増やして難しくする**

このページには「ミス時に何が鳴る／何が止まる」の明示は無かった。〔要約経由〕

## 2-7. 返しがうるさすぎると文句が来る（実例）

- 出どころ：https://steamcommunity.com/app/1290490/discussions/0/4523281307932936561 （Steam、UNBEATABLE [white label] のスレッド "Suggestion"、Falex、2021-05-14。返信は 2021-06-17〜19）
- 分野：**2**、**3**、**6**

Falex の指摘：
- 「The UI occupies too much space on the screen and moves FAR too much.」
  軌道線の振動や上下のバーの動きを消してほしい。体力バーは脈打たず静止していてほしい。
- **打鍵音について：the hit sound is 「a bit too distinct and interferes with the melody.」**
  （**返しの音が主張しすぎて曲を邪魔している**）
- 収縮する円と色変化は助かるが、敵の視認性を損なっている
- 方向転換の予告はポップアップではなく画面端の矢印にしてほしい

返信：
- **Solidus**（6/17）：エフェクトを切っても動きが多すぎて気が散る。**「up next」表示は効いていない**
- **Green**（6/17）：視覚過多で「my brain hurt」、目が揺れる。
  常時ごちゃつかせるのではなく、**曲の進行に合わせてリズミカルに視覚的複雑さを入れては**、と提案
- **Hawthorne**（6/18）：エフェクトを切っても直らない、これは重大な問題だ
- 開発者 **龍 CHI XU**（6/19）：この指摘はゲームの核に関わるものとして受け止め、
  リリースまで調整とトグルの追加を続けると回答〔要約経由〕

---

# 分野3：見せ方と予告（次に何をするかを、いつ・どんな形で伝えるか）

## 3-1. osu! の Approach Rate ── 予告時間そのものを数値で持っている

- 出どころ：https://raw.githubusercontent.com/ppy/osu-wiki/master/wiki/Beatmap/Approach_rate/en.md （osu! wiki、ppy/osu-wiki、master）
- 分野：**3**

Approach Rate (AR) は「defines when hit objects start to fade in relative to when they should be hit or collected.」

- 値の範囲は 0〜10。高いほど見えている時間が短く、反応の猶予が減る。低いほど猶予は増えるが画面が混む。
- **見えている時間：AR0 で 1800ms、AR10 で 450ms。**
  AR5 未満は 120ms 刻み、AR5 以上は 150ms 刻みで変わる。
- preempt の式：AR < 5 は `1200ms + 120ms × (5 - AR)`／AR ≥ 5 は `1200ms - 150ms × (AR - 5)`
- fade in の式（検索結果側に出ていた形）：AR<5 は `800ms + 400ms*(5-AR)/5`、AR=5 は `800ms`、AR>5 は `800ms - 500ms*(AR-5)/5`
- **「In osu!taiko and osu!mania, the approach rate setting has no effect.」**
  この二モードは slider velocity で速さを決める。
- Mod：Easy は AR を半分、Hard Rock は 1.4 倍（上限10）、
  Double Time / Half Time は AR の数値は変えないが再生速度で体感を変える。〔要約経由〕

## 3-2. 11機種の「ノーツが見えている時間」を実測して並べた記事

- 出どころ：https://cheru.hatenadiary.com/entry/2023/12/17/121000 （CheruceeのBlogみたいなSomething、2023-12-17）
- 分野：**3**

測り方：プレイ動画をコマ送りにして「ノーツが表示されているフレーム数を数え、緑数字に変換」。

**緑数字 = 60 / [動画のfps] × [表示フレーム数] × 10**
基準：**緑数字30 = 50ms**

外（アーケード）：

| 機種 | 緑数字 |
|------|-------|
| CHUNITHM | 約280 |
| オンゲキ | 約320 |
| beatmania IIDX | 約350 |
| SOUND VOLTEX | 約350 |

家（スマホ等）：

| 機種 | 緑数字 |
|------|-------|
| Arcaea | 427 |
| ユメステ | 376 |
| Dynamix | 約360 |
| DEEMO II | 約340 |
| TAKUMI³ | 約350 |
| Rotaeno | 約370 |
| KALPA | 約350 |

結論（仮説①）：**「運指組み込み型 < 固定鍵盤型」**の傾向が確認され、
だいたい固定鍵盤系が小さく、2本指運指系が大きい。〔要約経由〕

〔こちらでの換算・原文には無い〕記事の式（緑数字 = 表示フレーム数 × 10、60fps時）を使うと、
緑数字 280 ≒ 467ms、320 ≒ 533ms、350 ≒ 583ms、427 ≒ 712ms。
**つまりどの機種も「次に押すもの」を 450〜720ms 前後だけ先に見せている。**

## 3-3. 緑数字とは何か（IIDX の入門解説）

- 出どころ：https://rhychris.hatenablog.com/entry/2021/12/12/202238 （もやしのひとこと、2021-12-12）
- 分野：**3**

緑数字は「the display time from when notes appear at the top of the lane until they reach the judgment line.」
**数字が大きいほど遅い＝ほとんどの音ゲーのハイスピ表記と逆。**

調整の指針：
「If notes feel fast and your reaction can't keep up (SLOW > FAST), increase the green number.
If notes feel slow with excess reaction time (FAST > SLOW), decrease it.」

操作：START を押しながら白鍵で増、黒鍵で減、皿で微調整。粗くは鍵盤、細かくは皿。

**BPM が曲中で変わる場合**、表示は範囲になる（例「452-255」）。
推奨は「set the lower limit to match your standard green number」──**最速の場所で認識できるよう下限を基準に合わせる。**

「Check the green number before the song begins」──曲が始まる前に必ず確認する癖をつけろ。〔要約経由〕

## 3-4. Beat Saber の「reaction time」──予告時間の推奨レンジが表になっている

- 出どころ：https://bsmg.wiki/mapping/intermediate-mapping.html （BSMG Wiki / Beat Saber Modding Group、Intermediate Mapping）
- 分野：**3**

三つの設定：**BPM**（曲で決まる）、**Note Jump Speed (NJS)**、**Spawn Offset**。
これらから reaction time、jump distance、half jump duration が決まる。

- **Half Jump Duration**：オブジェクトが湧く「拍数」の先行量
- **Jump Distance**：メートル。プレイヤーからノーツ湧き位置までの距離の2倍
- **Reaction Time**：オブジェクトが湧く「ミリ秒」の先行量

NJS の推奨（m/s）：
- 0-8：非推奨（タイミングが読みにくすぎる）
- 8-12：とても低い（密度の低い Easy/Normal）
- 12-14：低い（Normal/Hard）
- 14-16：やや低い（Hard と一部 Expert+）
- **16：Expert+ の基準値**
- 16-18：やや高い（多くの Expert+）
- 18-20：高い（そこそこ混む譜面）
- 20-22：とても高い（速く複雑な譜面）
- 22-25：極端に高い（極端な挑戦譜面）
- 25+：非推奨

NJS の方針：「keep it as low as possible without the map getting too cluttered」

**Reaction Time の推奨（ms）：**
- **0-350 ms：非推奨**
- 350-425 ms：とても短い（正当化されることはめったにない）
- 425-500 ms：短い（とても速い譜面）
- **500-600 ms：Expert+ の標準レンジ**
- 600-750 ms：長い（大きく動く譜面）
- 750-1200 ms：とても長い（ふわふわした譜面、低難度）
- 1200+ ms：極端に長い（見た目のためだけ）

設定の順：音源のセットアップ → NJS を選ぶ → reaction time を合わせる → NJS を変えたら reaction time を合わせ直す。
「Most mappers focus on reaction time rather than technical calculations」〔要約経由〕

## 3-5. スクロール速度は「読む」と「合わせる」のトレードオフ

- 出どころ：https://exceed7.com/native-audio/rhythm-game-crash-course/game-design-and-notecharting.html （Native Audio "Rhythm Game Crash Course" / Game design and notecharting、著者は Native Audio 作者（5argon））
- 分野：**3**、**4**、**5**

（検索結果に出ていた同ページの言い回し）
「if you decrease scroll speed, the speed of notes will be decreased while the music remains the same.
Low scroll speed makes it easier to see the next note but harder to get the right timing,
high scroll speed helps with exact timing but makes it harder to see upcoming notes.」
スクロール速度は「how much music is visually shown on screen at once」を圧縮する量でもある。

本文から：
- **「design affects pattern readability」**。maimai、SDVX、Chunithm がそれぞれ
  視覚的な地平線・遠近・ノーツの登場アニメを違う形で使っている例を挙げている。
  フェード、拡大縮小、ノーツが現れる時刻の全部が、同時押しの読み取りやすさを左右する。
- 読みやすさの本体は **「how you can relate one note to the other」** であり、
  残りの問題は **「how notes enter the screen (suddenly? fading? scaling? how early?)」**。
- **多方向スクロールのゲームは、一方向のものより認知負荷が上乗せされる。**
- 色分けや同時押し表示を使って先読みを助けよ。
- **段取りをつけて配置を出せ。**難しい形を出す前に、読める形でプレイヤーを準備させる。
- 直らないときは「maybe it is impossible by design」──**盤面の作りが悪い可能性を疑い、
  無理に解こうとせず「harshly」に試作し直せ。**
- 「long note syndrome」「chords syndrome」（何でもかんでも装飾ノーツにする）を避けよ。
  「It is fine to try 'dry' charts and let the player 'feel it' instead of cluttering the chart.」
- 「slowdown syndrome」──ブレイクが来たら反射的にテンポを落とす癖に注意。
  作曲上の緊張点すべてがその効果に値するわけではない。
- レーンや視点を動かすのは変化を生むが、視覚効果が過ぎると
  「tiring instead of flowing」になる。狙いは穏やかな没入で、消耗ではない。〔要約経由〕

## 3-6. 譜面制作者は「基本→応用」で段取りを組む

- 出どころ：https://note.com/kisaragi_ykr/n/ne850ba974614 （note、如月ゆかり「譜面制作の手順・考え方」）
- 分野：**3**、**4**、**5**

0段階目：曲を聴く。作曲者の思想とメッセージ性を読み取る。
「楽曲は高級食材、制作者は料理人」という位置づけで、作曲者とユーザーの橋渡しを目指す。

1段階目：コンセプト。乱打系、同時押し系、テクニカル系などから方向性を決める。
難易度イメージも同時に検討するが、制作中に調整することが多いので**事前の決め打ちは避ける**。

2段階目：音採り。
- 優先順位：**「音が1番大きく聞こえるため」ボーカルやメインメロディを優先。次いでシンバル、声ネタ、キック。
  ベースは優先度が低いが、スラップソロなど活躍する区間では積極的に採る。**
- メリハリ：**「Bメロは難度を低めにして、サビ前に『タメ』を作ることで、盛り上がり前の緊張感を演出」**。
  音が鳴っているのに敢えてノーツを置かない配置を **「無音の美学」** と呼んでいる。
- 本格音楽ゲームとキャラソン主体のリズムゲームでは音採りが異なる。「聴かせたい音は何なのか」を判断する。

3段階目：配置。
- **「様々な譜面で過去使用された叩きやすい【基本形】をベースとし、
  その曲ならではのリズムに合わせた【見たことのない新しい形】を組み合わせるのがベター」**
- **「譜面は基本→応用の順で構成する」**。前半は4マスの単ノーツで練習させ、
  後半は同じリズムで4マス＋4マスと指を広げた配置にする。
- 楽曲テンションとの連動：**イントロ6 → Aメロ5 → Bメロ3 → サビ9 → 大サビ10** といった具合に
  難易度を曲全体のテンションに合わせて上下させる。

4段階目：テストプレイ。「制作者は世界で1番理解度がある」ので、
**「これが完全初見プレイなんだ」と言い聞かせながら**テストする。

5段階目：最終調整。複数のテストプレイヤーに**無言で**遊んでもらい「バイアスがかかることを防ぐ」。
**動きをよく観察して、想定運指で叩いているか確認。**反応が想定と違えば作り直すことも辞さない。〔要約経由〕

## 3-7. 「誘導」──新しい形を出す前に、簡易版を先に置く

- 出どころ：https://vivace0319.hatenablog.com/entry/2023/04/19/215349 （やまそうの音ゲー紀行「【音ゲー】"良い譜面"ってどういう事？」、2023-04-19）
- 分野：**3**、**4**、**5**

著者は、譜面評価は本来主観的だと認めつつ、**「置くべきではない配置」には客観的な正解がある**と主張する。
悪い配置の事例から逆に良い譜面を考える構成。

① **物理的に厳しい譜面**：不可能な速度やボタン配置は嫌われる。
「無理な事が分かり切っており、改善の余地がほぼないから」批判される。
解決策として **「譜面レギュレーション整備」** を挙げ、
SoundVoltex の **「鍵盤とつまみ同時操作原則禁止」** のような基準が重要と述べる。

② **音取りの正確性**：「演奏感」は音ゲーの重要要素で、正確な音取りが必須。
DDR EXTREME の「bag」を音が合わない悪い譜面の例に挙げている。
ただし全部の音を取ると **「何の音を演奏しているか分からない状態になりかねない」**。
密度と理解可能性のバランスが要る。

③ **配置の必然性**：「その配置をわざわざ置く必要ない？」という批判は必然性の欠如を指す。
無意味な難易度上げを批判し、「公式大会決勝で初お披露目する」ことの意味をもっと真摯に考えるべき、と述べる。

④ **丁寧な「誘導」**：運指や配置の意図を事前に準備させることが重要。
**「特殊な押し方をさせたい時に助走となる配置を置く」**。
オンゲキの例で **「新しい配置を出す際、前半で簡易版を置く」** テクニックを紹介している。

結論：主観性を認めつつ、「こういう配置は置くべきではない」という客観的基準は存在する。
要求される要素はゲームごとに違う。〔要約経由〕

## 3-8. 「認識」は暗記ではなく、塊にして情報量を減らすこと

- 出どころ：https://numerous000.hateblo.jp/entry/2021/04/22/195346 （音ゲーの上達方法を考えるブログ「音ゲーで訳の分からない譜面を認識する3つのコツ」、2021-04-22）
- 分野：**3**

譜面認識とは単なる暗記ではなく、**「押し方のパターンを体に染み込ませ、
いかに早くそのパターンを組み合わせて譜面を再現できるか」**というスキル。
数学の「解法パターンの習得と応用」に例えている。

1. **ハイスピの調整**：「高いハイスピでは画面内に一度に表示されるノーツ数が少なくなり、
   脳内で処理すべき情報量が減ります」。目線の位置もハイスピに連動させることが重要。
2. **サドン機能の活用**：「ノーツの発生元を隠して見えなくする機能」で、
   動体視力の要求と情報量削減のバランスを取る。「瞼サドン」（薄目にして視界を狭める）も効くと書いている。
3. **パターン認識の強化**：**縦認識**（リズムと腕の動かし方）と**横認識**（同時押しの判断）を組み合わせ、
   ノーツを **「塊で認識する」**。**「62個のノーツを11個の塊に分割すれば、脳の処理容量に余裕が生まれます」**。
   同時に目線を発生元に固定し、下げないことが必須。〔要約経由〕

## 3-9. リズム天国は「目押し」を潰しにいった

- 出どころ：https://realsound.jp/tech/2019/05/post-357258.html （リアルサウンド テック「『リズム天国』は何が革新的だった？ つんく♂が生んだ新たな"音ゲー"のかたち」、2019-05）
- 分野：**3**、**4**

1996年の PlayStation『パラッパラッパー』がこのジャンルの先駆で、
「流れてくる記号に合わせてタイミングよくボタンを押す」という基本形式を確立した。

つんく♂氏（任天堂とのインタビューでの発言として引用）：
> 「ぼくもいくつかやってみたんですけど、音楽をやっている立場からすると、どうもフラストレーションを感じるんです」

主張：従来の音ゲーは **「リズムに乗るというよりも、けっきょく、目押しをしてるんですよね」**。

『リズム天国』の見せ方：代表例の「カラテ家」では、植木鉢や樽が
**「画面の手前側から奥に向かって飛んでくる」**。
従来の上下・左右流しより **「遙かに目押しがしにくい」** ため、必然的にリズム感への依存度が高くなる。〔要約経由〕

## 3-10. しかし「目押しストレスの軽減」という節が公式インタビューに立っている

- 出どころ：https://www.nintendo.co.jp/ds/interview/ylzj/vol2/index4.html （任天堂「社長が訊く『リズム天国ゴールド』」Vol.2 の4ページ目）
- 分野：**3**
- **注意：本文は文字化けして読めなかった。読み取れたのは節見出しと話者記号だけ。**

読み取れたもの：
- 節見出し：**「4. 目押しストレスを軽減」**
- 話者が交互に立つインタビュー形式であること

**中身が読めていないので、何をどう軽減したのかは取れていない。**
ただし **3-9 が「目押しを潰す」方向の話であるのに対し、
同シリーズの公式インタビューに「目押しストレスを軽減」という節が立っている**ことだけは事実として残す。

## 3-11. CHUNITHM は「ノーツの大きさ」を予告と難度の両方に使った

- 出どころ：https://www.4gamer.net/games/283/G028316/20141128134/ （4Gamer、CHUNITHM 秋葉原ロケテストレポート、2014-12-01掲載。ディレクター 小早川賢氏）
- 分野：**3**、**4**、**5**

**GROUND SLIDER**：タッチセンサー式の入力デバイスで、**画面のノーツサイズに直結した操作**ができる。
小早川氏は、従来のボタン配置を覚える必要をなくすことで「初心者に優しい入力システム」の実現を目指したと述べている。

**AIR STRINGS（エア操作）**：筐体の空間センサーが腕の動きを検知。
「音楽にのる」という自然な身体動作をゲーム化した狙い。
小早川氏：**「従来の音楽ゲームになかった気持ちよさが実現できた」**

初心者配慮：ノーツサイズの可変性により
**「初心者から上級者まで幅広い層に向けたゲームデザインができる」**。
**難度調整がボタン数増加だけに依存しない設計**になっている。〔要約経由〕

## 3-12. 予告時間はコードの上では「何拍先に湧かせるか」という一変数

- 出どころ：https://www.gamedeveloper.com/programming/music-syncing-in-rhythm-games （Game Developer、Yu Chao、2017-03-16）
- 分野：**3**、**7**

拍への換算：
- `secPerBeat = 60f / bpm`
- `songPosInBeats = songPosition / secPerBeat`

「in the world of music, we record our notes in beats.」（譜面は拍で持つのが普通）

**先出しの湧かせ方：**
`notes[nextIndex] < songPosInBeats + beatsShownInAdvance`
「This allows visual preparation time before notes reach the interaction point.」

ノーツの位置はフレーム差分の積み上げではなく **`Vector2.Lerp()` で補間**して置く
（音のタイマーとフレームのタイマーがずれるため）。〔要約経由〕

## 3-13. 譜面制作の外注側から見た見せ方の注意

- 出どころ：https://www.g-angle.co.jp/blog/sound/sound-game-music/ （株式会社ジーアングル ブログ「音ゲー・リズムゲームの譜面（リズムノーツ）制作とは」）
- 分野：**3**、**5**

「楽曲を構成するさまざまな要素を、ノーツの種類や形状、配置などで表現していきます」
ノーツは「音楽のタイミングに合わせて叩く矢印や記号などのリズムアイコン」。

- テンポが速い曲は連続配置、盛り上がり部分は長押しノーツ、と楽曲特性に応じて変える
- 難易度は「かんたん／ふつう／むずかしい」などで区分けし、そのレベルに合わせてノーツ配置を変える
- **プレイ環境への配慮**：スマホの横向きプレイを想定する場合、
  「物理的に指が届かない譜面になっていないか意識して制作する必要」がある
- 歌詞の印象的ワードと連動した仕掛けも楽曲の魅力を引き出す鍵

制作の流れ：担当者決定 → 楽曲を聴いて譜面ベース作成 → ブラッシュアップ → 最終品質チェック。〔要約経由〕

---

# 分野4：構造（このジャンルの気持ちよさの本体はどこか）

## 4-1. 「目押し」ではなく「リズムに乗る」──つんく♂の立て方

- 出どころ：https://realsound.jp/tech/2019/05/post-357258.html
- 分野：**4**、**3**
- ※3-9 と同じ出どころ。**構造の話としてもう一度置く。**

つんく♂：「音楽をやっている立場からすると、どうもフラストレーションを感じるんです」
「リズムに乗るというよりも、けっきょく、目押しをしてるんですよね」

**このジャンルの気持ちよさの本体を「拍に体が乗っていること」に置くか、
「記号を正確に処理できたこと」に置くかで、作りが全部変わる**という主張になっている。
リズム天国は前者を選び、その結果として**予告の形（奥に向かって飛ぶ）を、わざと読みにくくした。**

## 4-2. 太鼓の達人：気持ちよさは三つの調和

- 出どころ：https://bandainamco-am.co.jp/company/asobito/article47.html （木水克典、2023-09-11）
- 分野：**4**
- ※2-3 と同じ出どころ。

**「叩く感触、連動する音、画面の演出…これらが調和した爽快感」**が「遊びのコア」。
**単独の要素ではなく、三つが同時に返ってくることを核に置いている。**

## 4-3. 太鼓の達人：普遍的な面白さがある、という当事者の言い方

- 出どころ：https://funfare.bandainamcoent.co.jp/1323/ （バンダイナムコ知新「第3回 太鼓の達人誕生秘話 現在に至るまで 後編」、2019-11-19。中館賢／笹岡武仁／露木雄二／木水克典／上田彩乃）
- 分野：**4**

タタコンの設計判断：中館は「ゲームセンターの『太鼓の達人』がそのまま家で遊べるというコンセプトを決め、
サイズやコストやセンサー部分など、いろいろな面で非常に苦労」したと述べている。

笹岡：「ハードの特性はうまく生かせたと思いますね。今後も新しいハードが出たら特性を生かした移植を心掛けていきたい」
中館（家庭用について）：「ミニゲームなどを入れて遊びのバリエーションを増やしていきました」

**このインタビューには、譜面や判定の技術的な設計論は出てこない。**〔要約経由〕

## 4-4. Guitar Hero：気持ちよさは「演奏している気」で、それは一週目に出た

- 出どころ：https://www.vice.com/en/article/the-oral-history-of-guitar-hero/ （Vice「The Oral History of 'Guitar Hero'」、Blake Hester、2021-01-27）
- 分野：**4**、**5**

**ノートハイウェイの発明**（Eran Egozy）：
「Let's add a third dimension and have you traveling through the music.」
最終形が何になるかは分からないまま作っていたが、**これが自分たちの欲しかった視覚表現だと分かった**。

**核が面白いと分かるまでの速さ**（Greg LoPiccolo）：
「It was a game where it was like, the first week of development it was fun.」

**5ボタンの理由**（Rob Kay）：
「If we had five buttons on the controller we could get three power chord positions that players could play with their fingers.」

（Eran Egozy）：
「Adding that fifth button actually was really important because it made for more interesting gameplay.
You actually had to think about shifting your hand to be able to play the faster passages.」

**ボタン数を難度の段にした**（Rob Kay）：
「We can start with three buttons, then work up to four buttons, then five buttons.
That can be part of the skill progression.」

**選曲の条件**（Chris Larkin）：
「You have to have certain songs for each difficulty option...medium difficulty songs, you have to have some hard songs.」

**演奏の空想を担う部品**（Eric Brosius、ワーミーバーについて）：
「You give a guitar with a whammy bar to any non-guitar player and the first thing they'd do was yank on it and try to make funny noises.」

**触る前と触った後で評価が逆転する**（Alex Rigopulos、Sony のテスト結果について）：
「Pre-play interest score was the lowest score...post-play intent to purchase score was the highest of any game they had taken to test.」〔要約経由〕

## 4-5. 「上手くなる」の中身は反応速度ではなく、読みと運指の最適化

- 出どころ：https://www.gamedeveloper.com/design/player-skill-patterns-randomization （Game Developer、James Hofmann、2009-07-14）
- 分野：**4**、**5**

主張：「players learn best by progressing from repetitive, well-ordered sequences to chaotic ones.」

Beatmania、DDR、Guitar Hero を、パターン習熟による技能の伸びの典型として挙げる。
これらは単なる記憶テストとは違い、上に進むには
「read ahead, developing a muscle memory, and optimizing the physical movements to be as fluid as possible.」

**乱数の副作用**：「randomness short-circuits the pattern-recognition elements,
it destroys the standard skill progression and replaces it with a pure reflex test.」
（**ランダム化はパターン認識を短絡させ、技能の段を壊して純粋な反射テストに置き換えてしまう**）

Spelunky のような例は「consistent ruleset」の部品を段階的に学ばせることで、
乱数がありながら段を保っている。〔要約経由〕

※分野2の 2-4（no4channel）は逆に **RANDOM を推奨**している。**ここは割れている。**

## 4-6. 「演奏感」──何の音を鳴らしているか分かること

- 出どころ：https://vivace0319.hatenablog.com/entry/2023/04/19/215349 （やまそう、2023-04-19）
- 分野：**4**
- ※3-7 と同じ出どころ。

「演奏感」は音ゲーの重要要素で、正確な音取りが必須。
ただし全部の音を取ると **「何の音を演奏しているか分からない状態になりかねない」**。
**気持ちよさの本体を「自分が音を鳴らしている感覚」に置くなら、
音数を増やすほど本体は薄くなる**という形の指摘になっている。

## 4-7. 正確さより「ノリノリさ」を採ることがある

- 出どころ：https://exceed7.com/native-audio/rhythm-game-crash-course/game-design-and-notecharting.html
- 分野：**4**
- ※3-5 と同じ出どころ。

不正確な音取りを批判するプレイヤーがいるが、著者はそれが的を外していると論じる。
まばらでぎこちない16分の配置は **"drop in norinori-ness"（ノリノリさの低下）** を生む
──**想像上の拍は「聴く」ぶんには助けになるが「遊ぶ」ぶんには邪魔になる。**
**戦略的に音を省くほうが、厳密な正確さより面白くなり得る。**

「Your player may share the same feeling as you, and you maybe even able to
silence those elitist rhythm polices out there with pure fun.」

同ページの他の観察：
- レーンごとに要る労力が違う。「accidental patterns」（ミニジャックなど）に注意。ただし狙ってやるなら可。
- DDR のような身体を使うゲームは重心を考える必要がある。
  **「UL to DR feels more like squatting」**、対して **「LR to UD」** は釣り合いが取れている。
- 良い変化はパターンの核の **"weight"** を保つ。ミラーや構造的な相似は有効な変化だが、
  認識が壊れる変え方は駄目。
- ただし文脈次第で **「repeating the same pattern over and over is more fun than changing the pattern often」**
  （テクノのようにジャンルが一貫している曲でとくに）。
- **BLACK JACKAL の DDR Expert 譜面の読み解き**：想像上のノートを足して流れを良くする、
  一貫したパターンを微妙に変えて飽きさせない、**クライマックスで音を省いて衝撃を最大化する**、
  フリーズノートを字義通りではなく表現的に使う。〔要約経由〕

## 4-8. 打鍵感は「音の作り」で上げられる＝気持ちよさの一部は音源側にある

- 出どころ：https://yuinore.net/2016/12/simamu/ （2016-12-01）
- 分野：**4**
- ※2-2 と同じ出どころ。

「キー音に打鍵感があると、BMSとしてのクオリティが1段階上がる」
**譜面でも判定でもなく、鳴る音の厚みを変えるだけで手応えが変わる**という立て方。

## 4-9. CHUNITHM の作り手が言う「直感」と、それを守るためのノイズ除去

- 出どころ：https://www.sega.co.jp/recruit/episode/episode04/ （セガ 採用サイト『CHUNITHM』開発者インタビュー。小早川賢（ディレクター）／佐藤啓太（デザイナー）／中村達也（筐体デザイン）／穴山大輔（サウンド）／糟谷将吾（プログラマ）／白川康平（筐体システム設計））
- 分野：**4**、**5**

**中村：**「スライダーをサーっと滑らせたら『気持ちいいじゃん！』みたいな。直感的に楽しさを感じてもらえたことが良かった」

**小早川：**「『直感的』って言葉で言うのは簡単なんですけど、作るのはすごく大変。
**直感を阻害するあらゆるノイズを除去する努力が必要**」

**白川**（エア操作のセンサーについて）：「手を上げる方向も振り幅も人によって変わるので、その中間点を探し続け」た。

運営：佐藤によれば、年1回のメジャーアップデート時に「ターゲットを１から練り直している」。〔要約経由〕

## 4-10. パラッパの「休むのが一番点が高い」は、本体を「グルーヴ」に置いた設計

- 出どころ：https://www.famitsu.com/article/202607/78894 （2026-07-04）
- 分野：**4**
- ※1-5 と同じ出どころ。

**連打は点にならず、「うまく休んでいる」ことが最高点になる。**
このジャンルの一番最初の作品が、**気持ちよさの本体を「正確に押せたこと」ではなく
「フレーズとして成立していること」に置いていた**という記録。

伊藤：「この採点システムのアイデアはミュージシャンでないと思いつけないものです」

---

# 分野5：進行と難度

## 5-1. IIDX のゲージ ── 難度の段は「判定」ではなく「失敗の扱い」で作られている

- 出どころ：https://iidx.org/beginner/gauge （iidx.org beginner guide）
- 分野：**5**

| ゲージ | 開始値 | クリア条件 | 曲中失敗 |
|---|---|---|---|
| NORMAL | 22% | 80% | しない |
| EASY | 22% | 80% | しない |
| ASSIST EASY | 22% | **60%** | しない |
| HARD | 100% | 0% で失敗 | **する** |
| EX-HARD | 100% | 0% で失敗 | **する** |
| DAN | 100% | **2% 未満で失敗** | **する** |

- NORMAL：「goes up if you get GOOD or better, and goes down for BAD / POOR」
  上がる量はノート数で決まり、下がる量は固定。
- EASY：「when you get BAD or POORs, the gauge will decrease less」。上がる量は NORMAL と同じ。
- HARD：「every BAD and POORs will decrease it」。
  30% 以下では「the rate of decrease for BAD / POORs will halve」。
  **「About 14 POORs in a row will bring your gauge down from 100% to 0%」**
- EX-HARD：「each BAD and POORs will greatly decrease the gauge」。30% 以下の半減は無い。
  **「About 6 POORs in a row will bring your gauge down from 100% to 0%」**
- DAN：**「About 40 POORs in a row will bring your gauge down from 100% to 0%」**。
  段位モードではステージ間で持ち越す。〔要約経由〕

## 5-2. DDR は途中で落ちる、IIDX の標準ゲージは最後まで落ちない

- 出どころ：https://dancedancerevolution.fandom.com/wiki/Dance_Gauge （DDR Wiki / Fandom、Dance Gauge）および https://iidx.org/compendium/gauges_and_timing
- 分野：**5**
- ※Dance Gauge のページは検索結果の本文抜粋で確認。**ページ本体は開いていない。**

DDR：「When the Dance Gauge is completely depleted, the player fails the song and the game ends prematurely, resulting in a 'Game Over'.」

IIDX（NORMAL）：ゲージが最低まで落ちても曲の途中で終了にはならない。80% に届かないことだけが失敗。

**ここは同じジャンルの二大作でまるごと割れている。**

## 5-3. 難度の段をボタン数で作る（Guitar Hero）

- 出どころ：https://en.wikipedia.org/wiki/Guitar_Hero_(video_game) と https://www.vice.com/en/article/the-oral-history-of-guitar-hero/
- 分野：**5**
- ※2-6、4-4 と同じ出どころ。

Easy = 3ボタン／Medium = 4ボタン／Hard = 5ボタン／**Expert = 新しいボタンは無く、ノート数だけ増える**。

Rob Kay：「We can start with three buttons, then work up to four buttons, then five buttons.
That can be part of the skill progression.」

## 5-4. 難度の段をノーツの「大きさ」で作る（CHUNITHM）

- 出どころ：https://www.4gamer.net/games/283/G028316/20141128134/
- 分野：**5**
- ※3-11 と同じ出どころ。

小早川氏：ノーツサイズの可変性により「初心者から上級者まで幅広い層に向けたゲームデザインができる」。
**難度調整がボタン数増加だけに依存しない設計。**

## 5-5. 曲の中の難度は一定にしない（テンション曲線）

- 出どころ：https://note.com/kisaragi_ykr/n/ne850ba974614
- 分野：**5**
- ※3-6 と同じ出どころ。

**イントロ6 → Aメロ5 → Bメロ3 → サビ9 → 大サビ10**
「Bメロは難度を低めにして、サビ前に『タメ』を作ることで、盛り上がり前の緊張感を演出」

## 5-6. 公式の難易度表記が飽和したら、有志が細かい表を作る（BMS 難易度表）

- 出どころ：検索で見つけた表の一覧
  https://mirai-yokohama.sakura.ne.jp/bms/insane_bms.html ／ http://bmsnormal2.syuriken.jp/ ／
  https://srdbms.otodo.net/hyou.html ／ https://w.atwiki.jp/bms_progress/pages/4471.html
- 分野：**5**
- **注意：どのページも本体を開けていない（503 / 403）。以下は検索結果の本文にあった記述のみ。**

- 通常難易度表：初心者から「段位認定 normal 10-dan」あたりまでを段階分けする
- 発狂難易度表：上級者向け。GENOCIDE が代表格で「last updated in 2017」
- Stella難易度表：高難度と地力に寄せた表で、乱打・ガチ押し・ディレイなどの技術別
- 目的：新規に入口の曲を見つけさせる、同程度の曲をまとめる、通常から発狂への道筋を作る

**「公式のレベル表記だけでは足りず、コミュニティが自前で段を作り直す」という現象そのものは、
複数の表が並存していることから確認できた。**

## 5-7. 上達に効くオプションと効かないオプション

- 出どころ：https://no4channel.xyz/2021/01/17/post-717/ （2021-01-17）
- 分野：**5**
- ※2-4 と同じ出どころ。

- **使え**：EASY/ASSISTED EASY（クリア済みの曲に。「there is no demerit whatsoever」）、
  FAST/SLOW 表示（必須）、RANDOM/R-RANDOM（レベル8以上）
- **使うな**：AUTO-SCRATCH / 5KEYS（「feel skilled but lose all ability」）、
  HARD / EX-HARD の一曲粘着（「meaningless for genuine skill development」）

## 5-8. 譜面研究──ゲーム外で譜面を読むという行為が定着している

- 出どころ：https://note.com/hubgry/n/n1739f726125b （note、hubgry「音ゲーの譜面研究って？（CHUNITHM、プロセカ）」）
- 分野：**5**、**3**

譜面研究の定義：**「譜面の理解を目的として、音ゲーの譜面の情報をゲームプレー以外で取り入れること」**

やり方：
- **譜面保管所の活用**：CHUNITHM「天火明命」のスライド部分が理解できず、オンラインの譜面保管所で視覚的に確認
- **手元動画の参考**：他プレイヤーの運指を動画で観察
- **繰り返しプレイ**：単なる反復ではなく、異なる運指を試すなど意図的な学習を組み込む

必須ではない、という立場：継続プレイで「地力」が上がれば研究なしでもスコアは伸びる。
ただし疑問点を調べることで上達速度は加速する。

プロセカについては「認識難」対策の YouTube 動画を参考資料として紹介している。〔要約経由〕

---

# 分野6：遊んだ人の文句

## 6-1. UNBEATABLE：情報が多すぎて脳が痛い、「up next」表示は効いていない

- 出どころ：https://steamcommunity.com/app/1290490/discussions/0/4523281307932936561 （2021-05〜06）
- 分野：**6**
- ※2-7 と同じ出どころ。**予告に関する文句なので、ここに再掲する。**

- **Falex**：UI が画面を占めすぎ、動きすぎる。方向転換の予告はポップアップではなく画面端の矢印にしてほしい。
  打鍵音が「a bit too distinct and interferes with the melody」。
- **Solidus**：エフェクトを切っても動きが多すぎる。**「up next」表示は効いていない。**
- **Green**：「my brain hurt」、目が揺れる。
  **常時ごちゃつかせるのではなく、曲の進行に合わせてリズミカルに視覚的複雑さを入れては**、と提案。
- **Hawthorne**：エフェクトを切っても直らない、重大な問題。
- 開発者 **龍 CHI XU**：ゲームの核に関わる指摘として受け止め、リリースまでトグルを増やすと回答。

## 6-2. Rhythm Doctor：較正を自分でやらせるのはおかしい、という文句と、その反論

- 出どころ：https://steamcommunity.com/app/774181/discussions/0/3200370144982666969/ （Steam、Rhythm Doctor、2022-01-04〜05）
- 分野：**6**、**7**

**bdot**（2022-01-04 16:38）：「Awesome game」「instant CLASSIC」と褒めつつ、
較正設定を「over compensate」しないといけない、と不満。
**なぜプレイヤー自身のリズム感を測らせる形なのか**と疑問を呈し、Melodics はそうしていないと比較。
主張：
- ユーザー入力に基づく較正は、悪い癖を直すどころか固定してしまう
- 手動でオフセットを測らせるのは、タイミングの正確さを扱うゲームの趣旨と矛盾する
- カジュアル層が離れる

**Klyzx**（16:46）：「detailed level results and offset visualiser」を使え。
狙いは「hard hit range」で **「ideally -40 to +40ms」**。Melodics との比較は自分の環境では成り立たなかった、と反論。

**Healion123**（22:15）：Easy/Hard の難度設定が既にある。
較正は **「both your system's latency and your reaction time」** の両方を吸収するものだと説明。
オフセットは曲のタイミングを変えるのではなく「adjust[s] the hit-timings to make up for that」。
開発者の言として、自動での遅延検出は「isn't possible since, once again, this is a game」。

**Mr.**（翌日 09:09）：音楽教師として、**オフセットが「completely janked」な状態でも生徒は音楽的に上達した**と報告。
bdot の「較正が悪いと悪い癖が付く」という懸念に反する例。

**bdot**（09:25）：必要悪だと理解した、と収束。ただし理想は
「the exact middle of the beat +/- whatever the green window is」を測ってくれることだ、と主張は維持。

## 6-3. 較正の作りは、作っても外し方が難しい（Rift of the NecroDancer の実測レポート）

- 出どころ：https://steamcommunity.com/sharedfiles/filedetails/?id=3434111928 （Steam ガイド「Latency Calibration is Surprisingly Hard」、JiminP、2025-02-25 投稿／2025-02-28 更新）
- 分野：**6**、**7**

用語：
- **AL (Audio Latency)**：音の補正の設定値
- **VL (Video Latency)**：入力遅延の補正の設定値
- **CT (Calibration Test value)**：較正が返してくる調整提案（例 ±20ms）

見つけた問題：
1. **Audio Calibration が VL の影響を考慮していない。**Video Calibration の後にずれが生じる
2. **較正用のティックのタイミング自体が間違っている**
3. **「Good to Go」の閾値が広すぎる。**「−15ms ≤ CT ≤ 15ms」で出てしまい、甘すぎる
4. **CT の値が ±40ms で頭打ちにされる**ため、根本の問題が隠れる
5. **CT の反応が増幅されている。**VL を 1ms 変えると CT が **約 2ms** 動く

著者の推奨手順：三段階の初期較正 → ブラインドテストと無音テストで調整 → 実プレイ中に手で微調整。〔要約経由〕

## 6-4. 同人・ジャム作品に来る文句は、ほぼ同じ三種類に寄る

- 出どころ：itch.io の検索結果に現れたコメント群
  https://itch.io/post/6871372 ／ https://itch.io/post/9223408 ／ https://itch.io/post/9246783 ／
  https://itch.io/post/6764336 ／ https://itch.io/post/8509697 ／ https://itch.io/post/10547253 ／
  https://itch.io/post/11110491 ／ https://itch.io/post/3170034 ／ https://itch.io/post/10433768 ／
  https://itch.io/post/10278598 ／ https://itch.io/post/6132408 ／ https://itch.io/post/15730446 ／
  https://itch.io/post/15707093 ／ https://itch.io/post/13237833
- 分野：**6**
- **注意：これらは検索結果として返ってきた投稿群で、個別ページは開いていない。
  以下は検索結果の本文に現れた文言のみ。**

**較正について：**
- 較正しても「かなり早めに叩かないと合わない」と感じる
- 正しいタイミングで叩いているのに一部のノートがずれる
- 「There is no way to adjust for audio-video latency」
- 開発者側の証言：「latency calibration is almost always a must for rhythm games」
- 開発者側の証言：オフセットのウィザードは、メニューに戻らされ、叩けるノートも少なく、面倒
- 開発者側の証言：**ゲームによっては較正が原理的に効かない。**
  視覚と聴覚の返しの両方があると「時間を巻き戻さないと」オフセットを実装できない

**読みにくさについて：**
- 矢印が見分けにくい。とくに速く出てくるとき
- ノーツが小さすぎて読みにくい。アクティブでないレーンだとさらに小さくなる
- フォントが「sometimes a bit… hardcore and hard to read」
- 同じノートの高速連打や交互ノートの区間が読みにくくリズムが取れない
- **同じ楽器の音を追い続けず途中で勝手に切り替わる譜面**は追えず、
  **難しい配置のせいではなく譜面が意図を伝えていないせいで下手になる**
- 譜面が読み解きにくく、初見で読めるようになるのはずっと後で、学習曲線がきつい

**返しについて：**
- ボタンを押してもノーツが来るまで画面が何も変わらない（Auto Rhythm）
- スケーリングが崩れてノートが押せない（EveryBody）
- UI が場所を取りすぎ、動きすぎて気が散る

## 6-5. 判定値そのものが分からない、という文句の層

- 出どころ：https://zenius-i-vanisher.com/v5.2/thread?threadid=11131 （2022）
- 分野：**6**
- ※1-4 と同じ出どころ。

**現行版の判定幅の正確な値が、コミュニティに公開されていない。**
プレイヤーが自分で総当たりして推定し、その推定同士が食い違ったまま残っている。

---

# 分野7：実装の落とし穴（遅れ・較正・端末差）

## 7-1. 音ゲーは「音の遅れ」に対して最も弱いアプリの分類である

- 出どころ：https://exceed7.com/native-audio/rhythm-game-crash-course/classes-of-audio-apps.html （Native Audio、5argon）
- 分野：**7**

音声アプリを四つに分ける：

1. **Music Player**：「Audio fidelity is the most important, and audio latency is not that of the concern.」
   非対話なので大きなバッファでよい。
2. **Sequencer**：「The app is interactive, but the reference of what is the 'correct' timing are all controllable.」
   DAW やルーパーは、タイミングをソフト側で直せるので「immune to mobile audio latency」。
3. **Instrument**：GarageBand のようなもの。反応の良さが要る。
   ただし「all instruments in the world do have their own latency」で、演奏者は練習で適応する。
4. **Music Games**：**「If there is a sound feedback on hitting the note, this is the hardest class of the latency problem.」**
   反応音があると、プレイヤーは無意識に自分のタイミングをずらして適応してしまう。

「Even a little bit of latency will be very obvious in a music game.」

**要点は、押した音を返すかどうかで難易度が変わること。**
返さないゲームは「音が耳に届くまでの時間」を較正で吸収できるが、
返すゲームはプレイヤー側の心理的補正が入るので単純な較正では吸収しきれない。〔要約経由〕

## 7-2. フレームの時計で音を追ってはいけない（Unity の定石）

- 出どころ：https://rhythmquestgame.com/devlog/04.html （Rhythm Quest Devlog 4「Music/Game Synchronization」、DDRKirby(ISQ)）
- 分野：**7**

同期を壊す原因を六つ挙げている：
1. **Audio scheduling** ── 音がハードに届くまでの処理遅れ
2. **Audio buffering** ── ミキシングのリングバッファの遅れ
3. **Frame-based timing** ── フレームとフレームの間で起きる事象は時刻が定まらない
4. **Input latency** ── ハードとエンジンの遅れ。とくにタッチ入力
5. **Visual/display latency** ── モニタの遅れと vsync
6. **Player expectations** ── **他のゲームで身についた遅延への慣れ**

素朴なやり方（`audioSource.time` を直接使う）が駄目な理由：
その値は「doesn't take into account all of the additional processing steps that happen later down the audio processing chain」。
さらにジッタがあり、「read the same value in two consecutive frames,
or changing by twice as much during one frame as the next, which results in stuttery movement.」

やっていること：
- `AudioSettings.dspTime` と `PlayScheduled()` を使う。**予約は「a full second」先**。
  `_audioDspStartTime` が「the DSP Time at which the music track first starts playing」。
- DSP 時計とゲーム時計の更新間隔が違うので、**15点の移動窓で線形回帰**して滑らかに写像する。
  単調増加を保証してプレイヤーが逆走しないようにする。
- 遅延補正は `GetCurrentTimeInSong()` から `_latencyAdjustment` を引くだけ。
  「the hard part is determining what _latencyAdjustment should be,
  as this is extremely device-specific and will need to be determined via player calibration.」
- **ドリフト検知**：平滑化した DSP 時刻と `AudioSource.time` を比べ、**50 milliseconds** を超えたら再同期。
  ただしこの補正は「won't be as good or consistent as the original synchronization」。〔要約経由〕

## 7-3. 同じ定石の、より短い版

- 出どころ：https://www.gamedeveloper.com/programming/music-syncing-in-rhythm-games （Yu Chao、2017-03-16）
- 分野：**7**

「AudioSettings.dspTime updates more frequently because it is the timer of the audio system.」
`Time.timeSinceLevelLoad` ではなくこれを使う。

ノーツの位置はフレーム差分の積み上げではなく `Vector2.Lerp()` で補間する
（音のタイマーとフレームのタイマーが合わないため）。

追うべき値：曲の現在位置（秒と拍）、BPM、拍で持ったノート配列、曲開始時の DSP 時刻。〔要約経由〕

## 7-4. 較正の作り自体にバグが入る（実例）

- 出どころ：https://steamcommunity.com/sharedfiles/filedetails/?id=3434111928 （JiminP、2025-02-25／28更新）
- 分野：**7**
- ※6-3 と同じ出どころ。**実装の落とし穴として再掲する。**

- 音の較正が映像遅延の設定値を考慮していない → 映像較正の後にずれる
- 較正用ティックのタイミングが間違っている
- 「Good to Go」が **−15ms ≤ CT ≤ 15ms** で出る（広すぎる）
- CT が **±40ms でクリップされる**ので、根本の問題が見えなくなる
- **VL を 1ms 変えると CT が約 2ms 動く**（反応が増幅されている）

## 7-5. 表示装置が変わると、コミュニティの較正値ごと動く

- 出どころ：https://fdscaa.hatenablog.com/entry/2013/01/04/133102 （2013-01-04）
- 分野：**7**
- ※2-5 と同じ出どころ。

- **ブラウン管：0.0～+0.1**
- **液晶筐体：+0.7～0.8**
- **非正規液晶：大きなばらつきあり**

**筐体の表示装置が CRT から液晶に替わったことで、
同じゲームの同じ譜面に対する判定調整の相場が丸ごと動いた**という記録。
「筐体によってプレイスタイルの工夫が必要」「気持ち早く押す練習が重要」

## 7-6. プレイヤーは緊張すると拍からずれる。それを吸収する自動較正

- 出どころ：https://www.gamedeveloper.com/audio/game-design-deep-dive-finding-the-beat-in-i-crypt-of-the-necrodancer-i- （Ryan Clark、2014-09-17）
- 分野：**7**
- ※1-6 と同じ出どころ。

デバッグログから分かったこと：
「players naturally drift away from the beat when stressed, then drift back toward it afterward.」

対処：**「leaky integrator」による自動較正**を実装。**最大 ±½拍のドリフト補正**を許し、
プレイヤーが「拍に乗っている」と感じている行動に対して誤った "MISS" を返さないようにした。

## 7-7. 端末側の遅延の実体（Android）

- 出どころ：検索結果に現れた Android 公式資料群
  https://source.android.com/docs/core/audio/latency/app ／
  https://developer.android.com/games/sdk/oboe/low-latency-audio ／
  https://developer.android.com/ndk/guides/audio/audio-latency ／
  https://android.googlesource.com/platform/compatibility/cdd/+/refs/heads/master/5_multimedia/5_6_audio-latency.md
- 分野：**7**
- **注意：これらのページは開いていない。以下は検索結果の本文に現れた記述のみ。**

- CDD の要求：出力タイムスタンプの精度 **±2 ms**、**cold output latency 500 ミリ秒以下**。
  cold input latency も 500 ミリ秒以下、**推奨は 100 ミリ秒以下**
- Oboe は Android 8.1 (API 27) 以降で AAudio、それ以前で OpenSL ES を呼ぶ C++ ラッパ
- 最小遅延の設定：`setPerformanceMode(oboe::PerformanceMode::LowLatency)` と
  `setSharingMode(oboe::SharingMode::Exclusive)`。
  MMAP バッファへの排他アクセスで DSP が読むバッファに直接書ける
- **タッチ遅延は音声遅延とは別物**：「Touch latency is the time between a user touching the screen
  and that touch event being received by an app.」
  音ゲーではネイティブ音声だけでは足りず、「perceived」音声遅延を解くには
  ネイティブなタッチ入力プラグインも要る

## 7-8. 同期の実装は、みんな同じところで詰まる

- 出どころ：https://itch.io/jam/rhythm-jam-2021/topic/1529555/does-anyone-here-actually-know-how-to-make-a-rhythm-game （itch.io Rhythm Jam 2021 のフォーラム、2021-07-15）
- 分野：**7**、**6**

**chantolove**（2021-07-15、スレ主）：
「I've been trying on and off to make a rhythm game of my own for ages, to no avail.」
ノーツを叩く／コンボを数えるところまでは作れたが、**ノーツの湧きを曲に同期させるところで詰まった**。GMS2 を使う予定。

**lypder**：線形補間を勧める。
「use linear interpolation with the place the song is at and where the place you want to
either effect something at the beginning or end」

**SkyanSam**（ジャム主催）：線形補間で合っていると確認し、コード例を出す。
`Note_Position_Y = Lerp(NoteSpawnY, noteTapY, timeSinceSpawned / noteTime);`
必要なクラスとして SongManager、Lane、Note を挙げている。〔要約経由〕

## 7-9. まず面白くしろ、技術はその後（同じ資料の立て方）

- 出どころ：https://exceed7.com/native-audio/rhythm-game-crash-course/index.html （Native Audio、5argon）
- 分野：**7**、**4**

「Before any of these technical tricks to make the game correct,
patterns and game design make the game fun.」
先に Game Design and Notecharting のページを読め、と誘導している。

「I will not release a game that is not fun.」
MVP を早く出せという圧力があるのは分かるが、自分の基準を持てと書いている。
音ゲーを作り慣れた者は、自作が同ジャンルの他作に及んでいないことを自分で分かる、とも。

目次（このサイトの構成）：
1. Rhythm Game Crash Course（index.html）
2. Game Design and Notecharting（game-design-and-notecharting.html）
3. Audio Import Settings（import-settings.html）
4. Backing Track（backing-track.html）
5. Classes of Audio Applications（classes-of-audio-apps.html）
〔6. Bonus: Synchronizing with dspTime（dsp-sync.html）は検索結果に出ていたが未取得〕

---

# 開けなかったもの（URL は残すが、中身は見ていない）

- https://wikiwiki.jp/rhythmgame/判定幅情報 … 403。各機種の判定幅一覧の原典
- https://w.atwiki.jp/iamkenzen/pages/204.html … 403。踏みゲーの判定幅比較
- https://duno.jp/knowledge/mapping/level … 403。譜面難易度基準（レベルごとの目安）
- http://www.ribbit.xyz/bms/tables/insane.html … 503。発狂BMS難易度表の本体
- https://dic.nicovideo.jp/a/キー音無しBMS … 403。キー音が無いと何が失われるかの議論
- https://note.com/mizu607/n/nb679819a9831 … 404。「叩くのが楽しい音ゲー曲」
- https://access-ability.uk/2023/02/09/hi-fi-rush-and-audio-visual-rhythm-game-feedback/ … 403
- https://medium.com/quick-game-design-notes/rhythm-heaven-quick-design-notes-5abb6ce52e97 … 403
- https://rwong.wordpress.com/2010/07/18/itg-dedicab-and-ddr-arcade-timings/ … 403。ITG/DDR の判定表
- https://rhythm-games.com/guides/rhythm-game-charting-level-design … 403
- https://www.cosmovibe.com/ncguide/skill.html … DNS 解決失敗。音ゲーの技能分類の解説
- https://www.stepmania.com/forums/general-questions/show/586 … 未取得。
  検索結果には StepMania/ITG の既定値として
  `TimingWindowSecondsW1=0.022500`（Marvelous）／`W2=0.045000`（Perfect）／
  `W3=0.090000`（Great）／`W4=0.135000`（Good）／`W5=0.180000`（Boo）が出ていたが、**原典は確認できていない**
- https://www.nintendo.co.jp/ds/interview/ylzj/vol2/index4.html … 文字化けで本文が読めず。
  節見出し「4. 目押しストレスを軽減」だけ取れた
- https://www.nintendo.co.jp/wii/interview/somj/vol1/index.html … 文字化け
- https://iwataasks.nintendo.com/interviews/ds/rhythm-heaven/0/3/ … 503
- https://shmuplations.com/parappa/ … 本文が取れず。1996年のパラッパ開発者インタビュー
- https://dl.digra.org/index.php/dl/article/download/326/326/323 … PDF のテキスト抽出に失敗。
  "Levels of Sound: On the Principles of Interactivity in Music (Video Games)"
</content>
</invoke>
