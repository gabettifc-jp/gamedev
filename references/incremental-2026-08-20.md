# インクリメンタル（放置・クリッカー）── 生の記録

- 調べた日：2026-08-21
- 調べた者：genre-research（実装・既存シート・既存 `incremental.md` を一切読まずに、ネットのみから採取）
- 出す先の指定：`references/incremental-2026-08-20.md`（既存の `incremental.md` とは別名。突き合わせ用）
- 分野の番号は `templates/sheets/genre/README.md`「調べる分野」に従う
  1 入力と判定／2 返し／3 見せ方と予告／4 構造／5 進行と難度／6 遊んだ人の文句／7 実装の落とし穴

**この文書は要約ではない。**数値は数値のまま、言い回しは原文に近い形で置く。
日本語資料は日本語のまま、英語資料は英語のまま引く。

## 途中で開けなかった出どころ（組織の外向きポリシーで 403/402）

以下のホストは全部弾かれた。**「調べたが無かった」ではなく「開けなかった」**なので区別して残す。

- `reddit.com` / `old.reddit.com` / `libredd.it`（**r/incremental_games に一件も入れていない。**このジャンルの議論の本体はここに在るはずで、**穴として自覚している**）
- `*.fandom.com`（Cookie Clicker Wiki、AdVenture Capitalist Wiki、Candy Box Wiki、Progress Quest Wiki）
  → Cookie Clicker は `cookieclicker.wiki.gg` で代替できた。AdCap は代替できていない
- `medium.com` / `zencron.medium.com`（"Onboarding in Incremental Games" by Justin Chong。**分野3の本命だった**）
- `en.namu.wiki`
- `screenzilla.helpshift.com`（AdVenture Capitalist 公式FAQ）
- `wiki.melvoridle.com`（Melvor Idle 公式wiki。Steam掲示板で代替した）
- `slideshare.net`（Pecorella の GDC Europe 2016 スライド本文）
- `bogost.com`（Cow Clicker の作者本人の記事。503）

GDC Europe 2016 の PDF（`media.gdcvault.com`）は落とせたが、この環境に PDF を開く道具（poppler）が無く、
**中身を読めていない。**よって本文には入れていない。

---

# 1. 入力と判定

## 1-1. Cookie Clicker の「速く押しすぎ」判定 ── 1/15 秒

- 出どころ：The Cookie Clicker Wiki, "Uncanny Clicker" — https://cookieclicker.wiki.gg/wiki/Uncanny_Clicker
- 著者：有志wiki（wiki.gg 版）／取得日 2026-08-21

書き起こし：

> 実績の説明文（ID: 71）："Click really, really fast." *'Well I'll be!'*
>
> "clicking within 1/15 second (66 ms) of the previous click approximately six times within one second
> (or more specifically, at least n+5 times in n seconds)."
>
> "The exact rate required to earn this achievement has been tweaked multiple times over the development of
> Cookie Clicker and may be subject to further changes."
>
> ページ内に載っている自動化コード：`setInterval(function(){Game.ClickCookie()}, 10);`
> （wiki の註：ブラウザは 10ms を下限として強制する）

検索結果側に出ていた、より細かい判定の記述（同じ実績について）：

> "Cookie Clicker monitors for behavior, and if the click frequency is faster than 1000 milliseconds divided by 15,
> the detection will fire and you will get the 'Uncanny clicker' Achievement.
> The variable responsible for unlocking this achievement is even called **autoclickerDetected**."
>
> "each time you click, if less than 1/15 second has passed since your last click, **Game.fps** is added.
> Each frame, 1 is subtracted. If the counter reaches **5 × Game.fps**, you get the achievement."
>
> 人力での到達手段として "drag clicking"（マウス上で指を滑らせて震わせる）と
> "butterfly clicking"（二本指を交互に）が挙がっている。
> "As humans don't click with fully consistent timing, this achievement will usually be gotten with
> somewhere between **10-12 clicks per second**."

分野：1（入力と判定）。**「速すぎる入力」を弾くのではなく、実績にして肯定している**点が特徴。

## 1-2. 自動クリックの実装と、判定のすり抜け

- 出どころ：Jacob Strieb, "The Simplest Cookie Clicker Autoclicker" — https://jstrieb.github.io/posts/auto-cookie/
- 著者：Jacob Strieb／2020-04-20

書き起こし：

> ```javascript
> var autoclicker = setInterval(function(){
>   try {
>     Game.lastClick -= 1000;
>     document.getElementById('bigCookie').click();
>   } catch (err) {
>     console.error('Stopping auto clicker');
>     clearInterval(autoclicker);
>   }
> }, 1);
> ```
>
> "It creates a timer that calls a function every 1 millisecond. That function finds the cookie element in
> the document and clicks it."
>
> `Game.lastClick -= 1000` は、ゲーム側の自動クリック検出を避けるために入れてある。

分野：1、7。**判定の材料が「前回クリックからの経過時間」一個しかないと、そこを一行で潰せる。**

## 1-3. 黄金クッキーの当たり判定 ── 出現間隔 300〜900 秒、画面上 13 秒

- 出どころ：The Cookie Clicker Wiki, "Golden Cookie" — https://cookieclicker.wiki.gg/wiki/Golden_Cookie
- 著者：有志wiki／取得日 2026-08-21

書き起こし（数値はそのまま）：

> - Minimum interval: **300 seconds**
> - Maximum interval: **900 seconds**
> - On-screen duration: **13 seconds**（base）
>
> 効果と確率：
> - **Frenzy**：x7 CpS、**77 seconds**（約 40%）
> - **Lucky**：「whichever gives less: 15% of cookies banked + 13 then multiplied by goldenCookieGain」
>   または「15 minutes worth of cookies (CpS * 900) + 13」
> - **Click Frenzy**：x777 cookies per click、**13 seconds**（約 3%）
> - **Building Special**：N x 10% boost（N = building count）、**30 seconds**（約 8%）
> - **Dragon Harvest**：x15 CpS、**60 seconds**（約 6%）
> - **Dragonflight**：x1,111 cookies per click、**10 seconds**（約 6%）
> - **Everything Must Go**：全建物が 5% 安く、**8 seconds**（約 1.5%、Business Day 限定）
> - **Cookie Storm**：1〜7 分ぶんの CpS のクッキーが多数降る、**7 seconds**（約 0.7%）
> - **Cookie Chain**：x10 + 7 more cookies per click（約 0.7%）
> - **Sweet**：Sugar Lump 1個（約 0.015%）
> - **Blab**：効果なし、メッセージのみ（約 0.003%）

分野：1（13秒という窓＝これがこのジャンルで唯一に近い「時間判定」）、2、5。

## 1-4. まとめ買いの計算式（買える最大個数）

- 出どころ：Anthony Pecorella, "The Math of Idle Games, Part I", Game Developer, 2016-10-13
  — https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i

書き起こし：

> Bulk Purchase Cost：`cost = b × [r^k(r^n-1)]/(r-1)`
> Maximum Generators Purchasable：`max = floor(log_r[c(r-1)/(b·r^k) + 1])`
>
> （b = base cost、r = rate growth、k = すでに所持している数、n = 買う数、c = 手持ち通貨）

分野：1（「x1 / x10 / x100 / max」ボタンを出すなら、この閉じた式が要る）、3。

## 1-5. 収穫の当たり外れ ── Sugar Lump は 20 時間で 50%、23 時間で 100%

- 出どころ：The Cookie Clicker Wiki, "Sugar Lumps" — https://cookieclicker.wiki.gg/wiki/Sugar_Lumps
  （検索経由で本文を取得。直接 URL の一部は 404 だった）

書き起こし：

> "At base values, a sugar lump takes **20 hours** to mature, then **3 hours** to ripen, then **1 hour**
> to finally fall, with the natural cycle lasting **24 hours**."
>
> - Mature（20h）：「attempting to harvest a mature Lump has a **50% chance to fail** and yield no Lumps at all」
> - Ripe（23h）：「you can harvest the Sugar Lump with a **100% chance** to collect it」
> - Fall（24h）：「the lump to automatically fall and be collected」

分野：1（「早く押すと失敗する」＝このジャンルでは珍しい、明確な早押し罰）、3（時間が見えている）。

---

# 2. 返し（成功／失敗のとき、音と画面で何が返るか）

## 2-1. Cookie Clicker の大きいクッキーを押したときに返るもの

- 出どころ：The Cookie Clicker Wiki, "Big Cookie" — https://cookieclicker.wiki.gg/wiki/Big_Cookie

書き起こし：

> - The cookie "momentarily decreases slightly in size"
> - "a small cookie particle effect"
> - "A number that fades away while floating up to the top of the screen"（得たクッキー数）
> - これらの視覚効果は "can be disabled in the settings"

分野：2。**三つだけ。**縮む／粒／浮かぶ数字。しかも**全部オフにできる。**

## 2-2. ニュースティッカー ── 10秒ごとに、進行度に合わせて文言が変わる

- 出どころ：The Cookie Clicker Wiki, "News" — https://cookieclicker.wiki.gg/wiki/News

書き起こし：

> "a visual, and further on in the game, a gameplay element, which displays messages about the player's
> current Cookie Clicker legacy, appearing at the top middle of the screen."
>
> "The message automatically changes **every ten seconds** on its own, and it can also be manually
> refreshed with a click."
>
> 例：
> - 5クッキー未満："You feel like making cookies. But nobody wants to eat your cookies"
> - 50クッキー："Your family accepts to try some of your cookies"
> - 10兆クッキー：（"it's time to stop playing" の類の不条理な文言に至る）
> - 建物由来："News : cookie farms suspected of employing undeclared elderly workforce!"
> - 実績由来："News : cookie manufacturer completely forgoes common sense, lets strange obsession with
>   round numbers drive building decisions!"

wiki の評：
> "The ticker primarily provides humorous commentary rather than functional announcements.
> However, it does signal gameplay progression milestones through its evolving message pools,
> indirectly reflecting player advancement **without explicit warnings or hints about upcoming mechanics**."

分野：2、3。**進行の返しではあるが、予告ではない**と wiki 自身が書いている。

## 2-3. 黄金クッキーの音の通知は「9999 heavenly chips の昇天アップグレード」

- 出どころ：Steam 掲示板 "Golden Cookie Alert Sound?"（Cookie Clicker）
  — https://steamcommunity.com/app/1454400/discussions/0/3044984779780604369/
- 立てた人：NeckRomancer／2021-09-06

書き起こし：

> NeckRomancer：黄金クッキーの通知音の mod は作れないか、と質問。
> Mysterious Penguin：「The ability is unlocked as a Heavenly upgrade when you ascend for
> **9999 heavenly chips** as well as any pre-requisites.」
> 別の書き手：この音は "also alerts you to the sound of Reindeer when they spawn if you have Christmas enabled"
> Nelly：そのアップグレードの存在自体を忘れていた、と述べている

- 併せて：kiraacorsac, "GoldenCookieObserver" — https://github.com/kiraacorsac/GoldenCookieObserver
  > "Simple addon to Cookie Clicker that beeps when new Golden Cookie appears."
  > "The CookieMonster is a bit 'too much of everything' for my taste, so I made the Golden Cookie Observer."

分野：2、3、6。**「見逃したくないものが出た」という通知が、本編では超終盤の有料級アンロック。**
そのため有志が最小の mod を別途作っている。

## 2-4. 「全部を画面に描く」ことが返しの本体だ、という作り手の言

- 出どころ：Joel Couture（聞き手）, "You have to hit the rock: How (the) Gnorp Apologue uses minimal design to
  maximum effect", Game Developer, 2024-03-07
  — https://www.gamedeveloper.com/design/interview-the-gnorp-apologue
- 語っている人：Myco（(the) Gnorp Apologue 作者、ノルウェー、ソロ）

書き起こし：

> Myco："If you have **2,000 gnorps** hitting a rock and **20,000 shards** flying in the air,
> that should all be shown on screen."
>
> Myco（色について）："I picked a mostly monochromatic color scheme so that players would feel they were
> **bringing color into the world** as they progressed in the game."
>
> Myco（表情について）："Their expressiveness was discovered through experimentation, and I found it
> immensely satisfying to communicate their emotions effectively through just a few pixels."
>
> 倍率の設計について：倍率を gnorp の数に紐付けた理由は
> "Gnorps are the heart of the game, and it made sense that they would all grow stronger as their numbers grew."
> ── 不要な購入を誘わず、分かりやすさと予測可能性を保つため。
>
> 記事の地の文：個体ごとに個別シミュレートしているので、
> "it allows creating interesting upgrades beyond simple percentage increases to their output"。

分野：2、4。**数が増えたことを「数字」ではなく「画面に出ている個体の数」で返す**という立場。

## 2-5. 戻ってきた瞬間を祝う ── Kongregate の設計原則

- 出どころ：Anthony Pecorella, GDC 2015 "Idle Games: The Mechanics and Monetization of Self-Playing Games"
  スライドの OCR 全文 — https://archive.org/stream/GDC2015Pecorella/GDC2015-Pecorella_djvu.txt
- 語っている人：Anthony Pecorella（当時 Kongregate.com, Director of Browser Virtual Goods）／2015-03

書き起こし（スライド文言）：

> "Progress without interaction"
> "Low pressure experience"
> "Constant positive growth and feedback"
> "a celebratory moment every time you return to the game" ── 離れていた時間が長いほど、戻る理由が強くなる

分野：2、3、5。

---

# 3. 見せ方と予告（次に何をするかを、いつ・どんな形で伝えるか）

**この分野は意識して厚く取った。**以下 3-1 〜 3-9。

## 3-1. 本編が出さない指標を、有志アドオンが出している ── Payback Period

- 出どころ：CookieMonsterTeam, "Cookie Monster" 公式ドキュメント
  — http://cookiemonsterteam.github.io/CookieMonster/
  および GitHub — https://github.com/CookieMonsterTeam/CookieMonster

書き起こし：

> Payback Period (PP) の式：
> `max(cost - cookies in bank, 0)/cps + cost/Δ cps`
>
> 意味：「how long you have to wait to get the item **and then** how long it takes for that item to pay for itself」
> （＝ Time to Afford + Cost/ΔCpS）。**PP は小さいほど良い。**
>
> "will take _everything_ in consideration, meaning if buying a building also unlocks an achievement
> which boosts your income"
>
> 色分け（買うべき順位を、色一つで返す）：
> - **Light Blue**：best building より PP の良いアップグレード
> - **Green**：PP が最良の建物
> - **Yellow**：PP 上位10
> - **Orange**：PP 上位20
> - **Red**：PP 上位30
> - **Purple**：上位10より悪い
> - **Gray**：PP なし（CpS が変わらないもの）

分野：3、6。**本編には「どれを買うのが得か」の表示が無い。**だから外付けができた。

## 3-2. どの買い方が本当に速いか、を回して確かめた人

- 出どころ：May Lawver, "Optimizing Cookie Clicker" — https://www.maycod.es/blog/2020/05/25/optimizing-cookie-clicker/
- 2020-05-25

書き起こし：

> 比べた三つの戦略：
> 1. **Minimize Cost** — 常に一番安いものを買う
> 2. **Maximize +CpS/Cost** — 「change in cookies per second divided by cost」が最大のものを買う
> 3. **Minimize Payback Period** — 「time to afford plus cost divided by change in CpS」が最小のものを買う
>
> 仮想一週間ぶん回した結果：
> - "Minimize Payback Period" が僅差で "Maximize +CpS/Cost" を上回る
> - "Minimize Cost" は明確に劣る（低ティアの建物ばかり買うため）
> - 上位二つは "nearly identical outcomes"

分野：3、5。**「安い順に買う」は負ける**という、このジャンルの基礎の一つ。

## 3-3. 昇天前に「何がもらえるか」を必ず見せる

- 出どころ：The Cookie Clicker Wiki, "Ascension" — https://cookieclicker.wiki.gg/wiki/Ascension

書き起こし：

> 「the difference between the old prestige and (x/1trillion)^(1/3) where x is the amount of cookies baked all time」
>
> "A prestige level grants a **+1% boost to CpS**. This stacks additively for every prestige level."
>
> "The ratio between Prestige Levels gained and Heavenly Chips gained is **1:1**"
>
> **予告について：**"The ascension screen displays what you would gain before committing.
> The interface shows your current prestige level and the additional heavenly chips and prestige you'd obtain
> from ascending with your current cookie total."
>
> 引き継ぐもの：Heavenly Chips で買ったアップグレードは "never deleted (unless the save file is wiped, or through cheating)"。
> 建物と通常アップグレードはリセットされる。

分野：3、5。**「捨てる決断」の前だけは、必ず結果を数字で見せる。**

## 3-4. アップグレードは「所持数」で段階的に湧く ── 1 / 5 / 25 / 50 / 100 / 150 / 200

- 出どころ：The Cookie Clicker Wiki, "Upgrades" — https://cookieclicker.wiki.gg/wiki/Upgrades

書き起こし：

> ツールチップに出るもの：Icon / Name / **Unlock condition（例："Own 1 cursor"）** / Base price /
> Description（効果） / Flavor text（引用符つき、ガイドライン上 125 文字まで）
>
> ほとんどの建物のアップグレード階層：
> - Tier 1：Own 1 → CpS が倍
> - Tier 2：Own 5 → 倍
> - Tier 3：Own 25 → 倍
> - Tier 4：Own 50 → 倍
> - Tier 5 以降：Own 100, 150, 200... → 倍が続く
>
> Cursor だけは Tier 3 以降、"non-cursor objects owned" に比例する形に変わる。
>
> アップグレードは条件を満たした時点で店に現れる。
> **wiki は「解禁前のアップグレードが見えているかどうか」を明記していない。**

分野：3、5。**「25個買え」という予告は、上限ではなく次の褒美の位置として使われている。**

## 3-5. 「あと何秒で買える」を出す作品がある

- 出どころ：TinyTakinTeller, "Interlude - WEEK 6 : How to make a good game?"（A Dark Forest 開発日誌）
  — https://tinytakinteller.itch.io/the-best-game-ever/devlog/739972/interlude-week-6-how-to-make-a-good-game
- 2024-06-03

書き起こし（開発者が「ジャンルの標準」として並べたもの）：

> 自分の失敗：
> 1. "with no plan in mind - the scope of the project was never defined"
> 2. 進む先が定義されていない
> 3. "what defines the genre and the standards" を知らなかった（**ジャンル知識の欠如**）
>
> インクリメンタルの仕組みとして挙げたもの：
> - Max capacity（上限）を置いて、使わせる／数字を手に負えなくしない
> - **時間表示："how long will it take to unlock the highlighted upgrade"**
> - オフライン時間を「その間ずっと遊んでいたかのように」シミュレートする
> - プレステージによる再帰的な層
> - 無限にスケールする内容
> - 機能優先の最小限 UI
> - 自動レベルアップ・自動割り当てなどの自動化
> - 環境の見た目が変わることで進行を可視化する
> - 物語で好奇心を持たせる
> - 仕組み同士の噛み合わせが、有志の攻略記事を生む
> - 放置と能動、両方の遊び方の釣り合い
> - 中毒性を足すための RNG
>
> 検索側に出ていた同記事の記述：
> "Adding max capacity to encourage resource spending and avoid unimaginable numbers is a good practice
> used in games like **Kittens Game** and **Trimps**. Both of these games display a **time estimate for
> how long it will take to unlock the highlighted upgrade**."

分野：3、5。

## 3-6. 逆に「何も説明せず、ボタンが一つ増える」型

- 出どころ：Candy Box 2 について（複数）
  - Official Candy Box 2 Wiki, "How to play"（fandom は開けず、検索結果の本文引用のみ）
  - あいらのゲーム紹介ブログ, "Candy Box 2: Whimsical ASCII Incremental RPG", 2026-05-09
    — https://ailvgames.com/2026/05/09/candy-box-2-introduction-en/
  - 作者：aniwey（当時十代のフランスのプログラマ）

書き起こし：

> "Candy Box 2 starts with almost nothing: a candy counter, a tiny choice, and a screen that looks far too
> simple to hide a whole adventure."
>
> "At first, the page may seem nothing except just one button, but it is not an error.
> Wait a little while and you'll see that there's an increase of **one candy per second**."
>
> "That opening is intentionally plain, almost suspiciously plain."
>
> "The player starts off with the Candy counter and the classic button **'Eat all the Candies'**
> with the keyboard shortcut of **'E'**. After the player accumulates **10 or more candies**, the button
> **'Throw 10 candies on the ground'** will appear, with the shortcut **'T'**."

分野：3、4。**予告をせず、条件を満たした瞬間にボタンが増えることだけが合図。**

## 3-7. 段階的に UI を開く／新しい選択肢を目立たせる、という一般則

- 出どころ：Machinations.io, "How to design idle games"
  — https://machinations.io/articles/idle-games-and-how-to-design-them

書き起こし：

> コアループ："The player clicks or taps on something and earns a reward, normally an in-game currency or resource."
>
> 必須の三点：
> 1. 単純な操作で入れる入口
> 2. 資源を使わせる仕込みのある経済
> 3. **"A visible counter displaying resource generation rates (per minute/hour)"**
>
> "an idle game needs to have a robust offline mode, in which the player can progress even when they are not
> actively interacting with the game." / "return to the game to find that they have earned some kind of reward."

（註：この記事には具体的な式・数値・プレステージの記述は無い。**予告についての具体的な指示も無い。**）

分野：3、2。

## 3-8. 「効果が分からない書き方」を避けよ、という設計側の言

- 出どころ：The Paper Pilot, "Guide to Incrementals / Balancing"
  — https://paperpilot.dev/garden/guide-to-incrementals/balancing
- 著者：The Paper Pilot（Anthony Lawn。Profectus / The Modding Tree の作者）／planted 2025-11-16

書き起こし：

> "You should make mechanics easy to understand unless you have a really good reason not to."
>
> 入れ子の効果について："multipliers to other effects that are also multipliers" のほうが単純で、
> "'Based on X' multipliers" は "make it unclear the actual effects of player's actions"。
>
> "The player _feeling_ like they have more agency is almost always desirable,
> even if behind the scenes things are still tightly controlled."

分野：3、4、5。

## 3-9. AdVenture Capitalist の「あと何個で倍」

- 出どころ：AdVenture Capitalist Wiki（fandom は開けず）の記述を検索結果本文から
  および Steam ガイド — https://steamcommunity.com/sharedfiles/filedetails/?id=445227074

書き起こし：

> "Production time gets halved at **25, 50, 100, 200, 300, and 400** of each business."
>
> "Capitalist unlocks are special, as they are awarded when **every** business is bought a specific number of
> times. Also, the corresponding bonus affects every business. Unlike other unlocks, Capitalist unlocks always
> say **'doubled'** in their description, rather than **'×2'**."

分野：3、5。**〔相場が取れなかった〕**：解禁前の unlock が一覧に見えているかどうかは、開けた資料から取れなかった。

---

# 4. 構造（このジャンルの気持ちよさの本体はどこか）

**この分野も意識して厚く取った。**以下 4-1 〜 4-10。

## 4-1. 「本当の資源は、起こしたブレイクスルーの数」

- 出どころ：清水（プランナー）, 「クリッカーゲームのインフレはどうして面白いの？」, filament Inc.
  — https://flmt.jp/press/6835/
- 2023-11-02

書き起こし（原文の言い回しに近い形）：

> クリッカーゲームの中毒性は「連続的なブレイクスルー」に由来する。
> 「ゲーム内リソースがインフレしているのに、ゲームバランスは崩壊していない」という一見矛盾した現象を扱っている。
>
> 通常の RPG ではレベル上昇ペースが段々と落ちていく。
> これに対しクリッカーゲームでは「クリックで得られるリソースが〇〇倍」「アップグレード費用が〇〇%減少」
> といったアップグレードが次々と発生し、「常に上位種の大量経験値エネミーを見つけていく」状態が継続する。
>
> **「実質的なゲーム内リソースは『起こしたブレイクスルーの数』」**であり、
> クリックで増える数字は「ひとつ低次のリソース」に過ぎない。
> プレイヤーは「ゲームバランスを崩壊させている」と錯覚させられながら、実際には堅くコントロールされている。

分野：4。**「数字が伸びること」ではなく「壁を割った回数」が単位だ**という主張。

## 4-2. ジャンルの正典を並べて共通項を抜く（ベルリン解釈の応用）

- 出どころ：The Paper Pilot, "Guide to Incrementals / Defining the Genre"
  — https://paperpilot.dev/garden/guide-to-incrementals/defining-the-genre
- planted 2024-06-02、last tended 2026-06-16

書き起こし：

> 正典に選んだ八本：
> 1. **Dodecadragons** — 多層のプレステージ、素早いリセット
> 2. **Evolve Idle** — 層は少なく、リセットは遅い。資源管理が主
> 3. **The Gnorp Apologue** — 中心の仕組みを追加系が強化する
> 4. **Idle Momentum** — 多項式的な成長が主機構
> 5. **Melvor Idle** — インクリメンタル×RPG
> 6. **Stuck in Time** — リセットと、行動のキュー
> 7. **Universal Paperclips** — **パラダイムシフトが前の遊びを置き換える**
> 8. **Unnamed Space Idle** — 独立した複数の進行系
>
> **High-Value Factors（インクリメンタルらしさが強い）**
> - **"Pure UI" Display** — 絵ではなく数字とボタンで見せる
> - **Reduced Consequences** — 失敗状態がまれ。失敗ではなく進行の損失
> - **Optimization Problems** — 遊びの本体が資源配分の最適化問題
> - **Resource Management** — 複数の資源を追う
>
> **Low-Value Factors（相関が弱い）**
> - **Fast Numeric Growth** — 超線形の伸び
> - **Automation** — 前の仕組みが自動化／置換される
> - **Goal-Oriented** — 外発的な目標
> - **Waiting is a Mechanic** — 待つこと自体が仕組み
>
> 中心概念は **unfolding**（新しい仕組みを定期的に開いていくこと）。
> 完璧な定義は置かず、"incrementalness" を測るものとして扱う。

分野：4。**「数字が速く伸びること」と「自動化」と「待つこと」を、著者は low-value に置いている。**

## 4-3. なぜ遊ぶのか、を八つに割る

- 出どころ：The Paper Pilot, "Guide to Incrementals / Appeal to Players"
  — https://paperpilot.dev/garden/guide-to-incrementals/appeal-to-players
- planted 2024-06-02、last tended 2025-11-16、2,120 words

書き起こし：

> **Numbers Going Up** — 大きい数字そのものではなく進行が本体。満足は
> "comparing where you are to where you started and feeling like you've earned your way here" から来る。
>
> **Progression** — "an extremely exaggerated sense of progression"。
> メタ進行はリセットをまたいで残る。入れ子のリセットがこのジャンルでは普通。
> メタ進行は "augments the increases in skill the player is naturally gaining as they play"（腕の伸びを置き換えるのではなく足す）。
>
> **Effortlessness** — 他のことをしながら進む。"multitasking, in a way."
> "click a few buttons every so often while you're paying attention to a lecture or studying or working."
> 他ジャンルの競技的フロー状態と比べ、"lower the barrier to entry by allowing more people to get 'really good.'"
>
> **Addiction** — ギャンブルやスキナー箱との重なりを認めている。
> 問いは "players continue to play because they are enjoying the gameplay, or if they are just conditioned to keep doing it"。
> 註記：これらは "can exacerbate video game addiction more than other genres"。
>
> **Strategy** — "feel like you've found a good solution to a puzzle"。難度を上げずに「賢い」と感じさせられる。
>
> **Avoiding Staleness** — "Paradigm shifts" が停滞を防ぐ。
>
> **Good Game Design** — よくできたインクリメンタルは "show their game design plainly"。
> "rely more on good game design than other genres, due to **not having much to distract from bad game design**."
>
> **Artistic Merit** — 資本主義やゲームの型への論評を含むものが多い。

分野：4。最後の一行（**隠すものが無いので、設計の粗が直接見える**）は、このジャンル固有の重さ。

## 4-4. 「内容」とは何か ── 待ち時間と連打は内容ではない

- 出どころ：The Paper Pilot, "Guide to Incrementals / What is Content?"
  — https://paperpilot.dev/garden/guide-to-incrementals/what-is-content
- planted 2024-06-02、last updated 2025-11-16

書き起こし：

> content ＝ "the parts of the game that engage the player"。
>
> **内容でないもの**
> - *Idle Waiting*：判断も理解も伴わずに条件を待つ時間。無操作で増えるカウンタは内容ゼロ
> - *Mindless Repetition*：連打。"each consecutive click blends together"。一回と百回で違いが無い。
>   遊びを足さずに時間だけ伸ばす
> - *Over-Complicated Abstraction*："players don't bother reading the effects" になった時点で内容ではなくなる
>
> **内容だが留保が要るもの**
> - *Repeatable Purchases*：反復するほど内容としての戻りは減る。最初の選択（どの次元を上げるか等）には判断がある。
>   同じものを買い続けるのは "a chore"（著者は Antimatter Dimensions の IP/EP 倍率を名指しで批判）
> - *Following Instructions*：攻略どおりに進む一本道は、内容ではなく指示の実行になる
>
> **積み上げよ、置き換えるな**
> 新しい層を入れるたびに前の仕組みを丸ごと自動化するのは業界の悪癖。
> プラットフォーマーはジャンプを *augment* するのであって、自動化して消しはしない。
> インクリメンタルは仕組みを *replace* しがちで、話がつながらなくなる。
>
> **具体的な助言**
> - 新機能を開けたら、すぐ使える中身を渡すこと（例：開始用の通貨を配る）
> - **「N倍になり、費用も N 倍になる」だけの購入は、実質的に水増し（padding）**
> - 無限に伸ばす前提ではなく、意味のある終わりを設計せよ

分野：4、5。

## 4-5. リセットの階層こそが構造だ（日本語圏）

- 出どころ：yhara, 「放置ゲー・incremental game の世界」 — https://yhara.jp/IncrementalGames
- 著者：yhara（記事自体の公開日記載なし。関連記事は 2025-08〜2026-08）

書き起こし：

> 「放置ゲー」は「クリックや放置によってどんどん桁がインフレしていくタイプのゲームの俗称」で、
> 英語圏では「incremental game」と呼ばれる。
>
> Incremental Game を構成する要素：
> - **Reset**：「貯めたリソースを０に戻すかわりに新しい要素を解禁する(つよくてニューゲーム)」
> - **階層構造**：「n回リセットすると上位の構造がアンロックされ、そこでは新たなリソースを稼ぎつつ
>   下位のゲームをもう一度(強化された状態で)やる」
> - **Automation**：「自動化。特定の操作が自動で行われるようにする」
> - **Buffs**：「未使用リソース数に応じたバフ」
>
> 紹介作（ボリューム／放置度）：Synergism（★5／★5）、Antimatter Dimensions（★5／★3）、
> Evolve（★5／★4）、Your Chronicle（RPG 要素が強い）

分野：4。**「未使用リソース数に応じたバフ」＝使わずに持っていることに価値を付ける仕掛け**が、独立要素として挙がっている。

## 4-6. 数字を上げること自体に外の理由は無い、という作り手の言

- 出どころ：Y Combinator Blog, "Frank Lantz — Director of NYU's Game Center and Creator of Universal Paperclips"
  — https://www.ycombinator.com/blog/frank-lantz-director-of-nyus-game-center-and-creator-of-universal-paperclips/
- 語っている人：Frank Lantz（NYU Game Center ディレクター、Universal Paperclips 作者）

書き起こし：

> "They are kind of an underappreciated little micro-genre in games."
>
> "There's no external reason you would want to make this number go up in any clicker game,
> **except that it's fun to make this number go up**."
>
> "I want to make something that truly hypnotizes you. Where you get absorbed by this thing,
> and you can't stop."
>
> ── そしてその没入は、批評的な距離と同時に成立すべきだ、と述べている。

分野：4。

## 4-7. パラダイムが入れ替わる構造（Universal Paperclips）

- 出どころ：Aaron A. Reed, "2017: Universal Paperclips", *50 Years of Text Games* (if50)
  — https://if50.substack.com/p/2017-universal-paperclips
- 対象：Universal Paperclips（Frank Lantz、2017-10-09 公開）

書き起こし：

> 段階：
> 1. 序盤：手押しクリック、価格と需要の基本経済
> 2. 中盤：計算資源が研究（Marketing / Creativity / Trust）を開く
> 3. 終盤前：人類の Trust が計算資源の上限になる。"Male Pattern Baldness" や "World Peace" のような
>    プロジェクトが Trust の枠を広げる
> 4. 終盤：自己複製ドローンが宇宙の物質を変換する。フォン・ノイマン探査機は "value drift" による目減りを抱える
>
> "New systems emerge when players accumulate sufficient resources, maintaining forward momentum."
>
> Lantz は clicker を "radical simplicity"（過剰なマルチメディアの意図的な拒否）として評価している。
> マイクロトランザクションを排し、**明確な終わり**を用意した点が、搾取的なソーシャルゲームとの違いとして挙がる。

分野：4、3、5。

## 4-8. 三つの段階と、「本当の通貨は時間」（掲示板の層）

- 出どころ：Better Than Wolves Forum, "Game Design - Incremental Games"
  — https://forum.btwce.com/viewtopic.php?t=9033
- 立てた人：Zhil（2011年参加）／2016-03-14 〜 2016-03-24、全41投稿

書き起こし：

> Zhil：インクリメンタルは "focused on grinding idly"。手押しがやがて自動の「factory」に置き換わる。
>
> 挙げた定番要素：クリック（序盤）／放置（オフライン進行）／段階的な機能解禁／
> 強化つきのリセット／通貨で買う強化屋。
>
> 三つの段階：
> 1. **Grind phase**（反復クリック）
> 2. **Idle phase**（工場の管理）
> 3. **Cycle phase**（最適化と戦略）
>
> Zhil："**the real currency here is time**"。本当の遊びは cycle phase に現れるのであって、
> 序盤のスキナー箱にはない。ジャンルは "on Skinner Boxes far too much" 依存している。
>
> Zhil：クリックという入口はパロディ（Cow Clicker）由来で、いまや "worn out"。
> 戦略と発見を前に出すべきだ、と主張。
>
> **Uristqwerty**：Progress Quest（2002）に触れ、インクリメンタルの利点として
> "**they don't stop progressing when left alone...they just stop accelerating**"。
>
> **gaga654**（歴史）：A Quest for Idle（2009）が放置の仕組みを開き、
> Anti-Idle（2009）が対話性を足して、のちの Cookie Clicker に影響した。
>
> **jakerman999**：Sand Castle Builder を "deepest of incremental games" と推し、
> idle game と incremental game は近いが別のジャンルだと区別している。
>
> **Ethinolicbob**：Cookie Clicker の v2 でプレステージが入ったこと、
> Blacksmith Lab がランダムイベントで grind と idle の釣り合いを取っていることを挙げる。
>
> **DiamondArms**：わざとリセットを遅らせる "deep runs" を楽しんでいる。
> Zhil はそれが最適ではないと説明しつつ、遊び方としては妥当だと認めている。

分野：4、6、5。**「放置しても止まらない、加速が止まるだけ」**は、このジャンルの待ち時間の性格を一行で言っている。

## 4-9. 定義が定まっていないこと自体が議題になっている（2026年）

- 出どころ：AUTOMATON, 「『インクリメンタルゲームとは何か』を巡り議論白熱。“数値が増えるゲーム”だと雑だし、
  クリッカー・放置ゲーム以外もあるし」 — https://automaton-media.com/articles/newsjp/20260130-414641/
- 2026-01-30

書き起こし：

> ユーザー vkaike2 氏は、「incremental」という言葉の意味から考えると、キャラクター成長やマップ拡張といった
> 要素を持つ RPG や工場自動化ゲーム『Factorio』もインクリメンタルゲームに該当してしまうと指摘。
> 定義の曖昧さが混乱を招いていると問題提起した。
>
> 開発者 Anthony Lawn 氏は、ジャンル定義の参考として「ベルリン解釈」を提唱。
> ローグライクで使われた「複数の正典作品から共通要素を抽出する」方法論をインクリメンタルに適用した。
> Lawn 氏が選定した正典は『Universal Paperclips』『Melvor Idle』など8タイトル。
> これらから「純UI表示」「資源管理」といった「高価値要素」を抽出し、
> 複数備えていればインクリメンタルゲームらしいと定義している。
>
> 結論：ジャンル概念は社会的構成物であり時間とともに変化するため、完璧な定義は存在しない、
> というのがコンセンサスのよう。

分野：4。（4-2 の Paper Pilot ＝ Anthony Lawn。**同一人物の同じ主張が、2024年の記事と2026年の議論に跨っている。**）

## 4-10. 起源は「操作を全部取り除いたRPG」

- 出どころ：Wikipedia, "Incremental game" — https://en.wikipedia.org/wiki/Incremental_game
  および Wikipedia, "Progress Quest"（検索結果本文）
- 併せて：Zoya Street, "An early history of games designed for inactivity", *Memory Insufficient*
  — https://meminsf.silverstringmedia.com/labour/an-early-history-of-games-designed-for-inactivity/

書き起こし（Wikipedia）：

> 定義："incremental accumulation of in-game resources, and gradual, often exponential progression through
> repetitive actions or automation."
> 能動的なクリックを重視するものが "clicker games"、最小限の操作で自動化を主にするものが "idle games"。
>
> 年表：
> - **2002**：*Progress Quest*（Eric Fredriksen）── 最初の idle/incremental とされる。MMORPG のステータス進行のパロディ
> - **2000年代初頭**：*Kongregate Chat*、*Ayumilove's HackerStory v1*
> - **〜2010**：*Cow Clicker*
> - **2013**：*Cookie Clicker* がジャンルを広めた
> - **2013**：*Candy Box!* ── **終わりのある**、探索寄りの別構造
> - **2015**：*Clicker Heroes*（Playsaurus）がモバイルでプレステージを広めた
>
> 引用されている作り手の言：
> Anthony Pecorella："a genre that almost doesn't want to exist; it's a joke, but despite itself,
> keeps being really successful" / 多くの作品は "glorified spreadsheets with some really neat mechanics"
> Julien "Orteil" Thiennot は自作を "non-games" と呼んでいる。

Progress Quest について：

> "once the player has set up their artificial character, there is **no user interaction at all**;
> the game 'plays' itself, with the human player as spectator."
> EverQuest 等の auto-attack（戦闘を始めたらあとは見ているだけ）への当てこすり。

Zoya Street：

> 放置ゲームは逆説を抱える。内容としては
> "inescapable systems in which the player is just a tiny agent" を模して資本主義とゲーム文化を批評しながら、
> 商業的には保持と課金で巨大な価値を生む。
> 遊びの性格は身体的ではなく管理的（managerial）。毎日入って収穫し、効率を上げる。
> これは "that seem to keep turning inevitably, regardless of the actions of the individual" という、
> 個人の作用の小ささへの不安を映している。
> 早い例として *Sora*（2003、物語寄りのアバター放置）も挙げている。

分野：4。**ジャンルの出発点は「面白くする」ではなく「操作を全部抜いても成り立つか」の実験だった。**

---

# 5. 進行と難度

## 5-1. 費用は指数、生産は多項式 ── 相場は 1.07

- 出どころ：Anthony Pecorella, "The Math of Idle Games, Part I", Game Developer, 2016-10-13
  — https://www.gamedeveloper.com/design/the-math-of-idle-games-part-i

書き起こし：

> Cost：`cost_next = cost_base × (rate_growth)^owned`
> Production：`production_total = (production_base × owned) × multipliers`
>
> AdVenture Capitalist の例：
> - **Rate growth：1.07**
> - **Base cost：4**
> - **Base production：1.67/sec**
> - **Multiplier triggers：25 と 50 で ×2（積み上がる）**
>
> "exponential growth will eventually catch and far exceed any polynomial growth"（定数によらず）。
> 序盤は生産が費用を上回るのでプレイヤー有利。やがて指数の費用が線形／多項式の生産を飲み込む。
> **その落差を埋めるためにプレステージが要る。**

分野：5、4。

## 5-2. Cookie Clicker は 1.15 ── 建物ごとの底値と底 CpS

- 出どころ：The Cookie Clicker Wiki, "Buildings" — https://cookieclicker.wiki.gg/wiki/Buildings

書き起こし：

> "Price of Building Number (N+1) = Price of Building Number N × **1.15**"
>
> | 建物 | Base Cost | Base CpS |
> |---|---|---|
> | Cursor | 15 | 0.1 |
> | Grandma | 100 | 1 |
> | Farm | 1,100 | 8 |
> | Mine | 12,000 | 47 |
> | Factory | 130,000 | 260 |
> | Bank | 1.4 million | 1,400 |
> | Temple | 20 million | 7,800 |
> | Wizard Tower | 330 million | 44,000 |
> | Shipment | 5.1 billion | 260,000 |
> | Alchemy Lab | 75 billion | 1.6 million |
> | Portal | 1 trillion | 10 million |
> | Time Machine | 14 trillion | 65 million |
> | Antimatter Condenser | 170 trillion | 430 million |
> | Prism | 2.1 quadrillion | 2.9 billion |
> | Chancemaker | 26 quadrillion | 21 billion |
> | Fractal Engine | 310 quadrillion | 150 billion |
> | Javascript Console | 71 quintillion | 1.1 trillion |
> | Idleverse | 12 sextillion | 8.3 trillion |
> | Cortex Baker | 1.9 septillion | 64 trillion |
> | You | 540 septillion | 510 trillion |
>
> 建物は 20 種類。

分野：5。**AdCap の 1.07 と Cookie Clicker の 1.15 が、この二本の「一段の重さ」の違い。**

## 5-3. プレステージ通貨の式、四本（一次資料の並べ方をそのまま）

- 出どころ：Anthony Pecorella, "The Math of Idle Games, Part III", Game Developer, 2017-02-01
  — https://www.gamedeveloper.com/design/the-math-of-idle-games-part-iii

書き起こし：

> **Realm Grinder**（max earnings 基準）
> `p = (√(1 + 8·(c_M/10^12)) - 1)/2`
> プレステージを倍にするには、前回の **4倍** 稼ぐ必要がある。
>
> **AdVenture Capitalist**（lifetime earnings 基準）
> `p = 150·√(c_L/10^15)`
> 同じ地点で何度でもリセットして通貨を得られる（額は逓減する）。
>
> **Cookie Clicker**（lifetime earnings 基準）
> `p = ∛(c_L/10^12)`
> プレステージ通貨を倍にするには、おおよそ前回の **8倍**。
>
> **Egg, Inc.**（**この run の稼ぎ**基準）
> `Δp = (c_R/10^6)^0.14`
> 指数はおよそ 1/7。倍にするには **128倍（2^7）**。
>
> 設計上の含意：lifetime 基準と run 基準では挙動が根本的に違う。
> lifetime 基準は継続的な前進を促す。run 基準は決まった地点での稼ぎ直しが成立するので、
> オフラインの上限を扱うのに向く。
>
> Pecorella："balancing progression is hard"。表計算で回して詰めよ。
> "determine where the 'fun' is and focus on that" ── 目新しさだけではもう通らない。

分野：5、4、3。

## 5-4. 生成器が生成器を作る型 ── テイラー級数に収束する

- 出どころ：Anthony Pecorella, "The Math of Idle Games, Part II", Game Developer, 2016-12-14
  — https://www.gamedeveloper.com/game-platforms/the-math-of-idle-games-part-ii

書き起こし：

> 各層が下の層の変化率になる形（derivative generators）のとき、通貨の伸びは
> **1, x, x²/2, x³/6, x⁴/24, ..., xⁿ/n!**
>
> 層を無限に増やすと
> **eˣ = 1 + x + x²/2 + x³/6 + ... + xⁿ/n!**
> つまり "adding more tiers of generators...approach[es] exponential growth"。
>
> 問題："how to keep purchasing of lower-level tiers relevant."
>
> Derivative Clicker の解：
> - "every purchased tier 1 building boost[s] the production of all tier 1 buildings by **0.05%**"
> - 費用式：**Cost = 5 × 1.1ⁿ**

分野：5、4。**「下の層を買う意味を残す」**が、多層構造の唯一の宿題として名指しされている。

## 5-5. AdVenture Capitalist の天使 ── 150·√(千兆単位)、一体 +2%

- 出どころ：Steam 掲示板 "Real formula for Angel Investors?"（AdVenture Capitalist）
  — https://steamcommunity.com/app/346900/discussions/0/620712999971234569/
- 2015-05-07、VFX / Mazey / cinedine

書き起こし：

> VFX（原投稿）：FAQ の式「150 * square root of your total earnings - total angel investors spent」が合わない。
> 手元は total earnings 81.5 duodecillion、spent 1.3 trillion。式だと毎秒 1.3 quadrillion 得るはずが、
> 実際は 12〜14 時間で 417.1 trillion しか得ていない。
>
> Mazey：この式は毎秒の率ではなく **総数**を出すもの。
> 係数 150 は "to ensure that you have 150 angels when you reach **1 quadrillion**" として選ばれている。
>
> Mazey：抜けていたのは単位。**earnings を quadrillion 単位で入れる。**
> VFX の 1.206 trillion は 0.001206 quadrillion であり、代入するとおよそ 5 angels で実測と一致する。
>
> cinedine（確定形）：**"150*sqrt(life time earnings in Quadrillions) - total AI spent"**
>
> 効果：「Each angel gives you **+2% profits**, so 50 angels gives you +100% profits（＝全収入 ×2）」

分野：5、6。**公式FAQ の書き方だと単位が落ちて、掲示板で三往復してようやく正しい式になっている。**

## 5-6. 費用より効果の伸びを速く、でなければ上限を置け

- 出どころ：The Paper Pilot, "Guide to Incrementals / Balancing"
  — https://paperpilot.dev/garden/guide-to-incrementals/balancing
- planted / last tended 2025-11-16

書き起こし：

> 伸びの型（遅い順）：
> - **Linear**："when something grows a constant absolute amount with its input"
> - **Polynomial**：線形より速く指数より遅い
> - **Geometric/Exponential**："when something grows a constant relative amount with its input"
> - **Factorial**："when something grows by multiplying its previous effect by an ever increasing factor"
>
> 好んで使う型："every time [input] goes up by an order of magnitude, [effect] becomes [x] times stronger
> (e.g. **1.2x**)"
>
> インフレを止める規則：
> **"the effect of any repeatable purchase has a higher asymptotic growth than the cost."**
> 手は三つ：
> 1. 効果の伸びが費用の伸びを上回る
> 2. 反復購入に上限を置く（制御されたインフレ）
> 3. Softcapping（しきい値の先で伸びの関数を変える）
>
> 別途、**Jacorb** による七分類の式の枠組みが引かれている。
> 註意点として、指数側と分母側に同じ変数を同時に出さないこと。

分野：5、4。

## 5-7. オフラインの上限は 24 時間（Melvor Idle）

- 出どころ：Melvor Idle 公式wiki "Offline Progression"（wiki 本体は 403 で開けず、検索結果本文から）
  — https://wiki.melvoridle.com/w/Offline_Progression
- 併せて：Steam 掲示板 "Maximum offline progression - WHY?"
  — https://steamcommunity.com/app/1267910/discussions/0/3192493998739513526/

書き起こし：

> "Offline Progression in Melvor Idle is capped at a maximum of **24 hours**."
> 戻ってきたとき、離れていた時間（最大24時間）を求め、その間ゲームを開いていたのと同じ進行を模擬して、
> Skill XP、Mastery XP、アイテム等を渡す。
>
> 例外：Combat と Thieving は 'Toggle Offline Combat' を入れるまでオフラインでは進まない。
> 農業は、育成に 12 時間以上かかる高レベルの木は **12時間の上限を無視して**離れている間ずっと育つ。
>
> 上限を外す "Unlimited Offline" mod が有志にある。

分野：5、7、6。

---

# 6. 遊んだ人の文句

## 6-1. 「最初のアップグレードまでが長すぎる」── ジャンルの前提として語られる

- 出どころ：itch.io, 2 Buttons Jam 2020 の講評（作品：Programmer Sim）
  — https://itch.io/jam/2-buttons-jam-2020/rate/861663
- 書いた人：zyenapz／5年前（2020年ごろ）

書き起こし：

> zyenapz："I appreciate the incremental game concept very much. However, there is much to be desired
> for about the pacing of the game."
>
> **"The premise of incremental games is that it should provide instant feedback and satisfaction."**
>
> "It just takes too long to save up to buy the first upgrade, and it feels way too long to buy the next one."
>
> Vizipokemon："Could become a great game."

分野：6、5。

## 6-2. 「壁は一週間ぶんが普通」── 作り手の反論

- 出どころ：Steam 掲示板 "Suddenly slow progression after area 5?"（Nomad Idle）
  — https://steamcommunity.com/app/3042190/discussions/0/601900862720228255/
- 立てた人：Shyguymask／2025-04-05

書き起こし：

> Shyguymask：初回 ascension のあと Area 6 の途中で壁。敵が固くなり、
> "GIGANTIC Ghost Blade nerf" と重なって進まない。ステータスも装備も上限まで上げたのに、
> 遊びも解禁もほとんど起きない。Cookie Clicker や Clicker Heroes と比べて不利だと書いている。
>
> Palandus（2025-04-06）：ascension talent が高い、mana/skill level の制約、資源が貯まらない、
> 後半エリアの難度の跳ね、など**十件**を列挙。
>
> **The Fox Knocks [developer]（2025-04-06 11:44am）**：
> 「Idle」ゲームで idle の時間が要ることへの不満に困惑している、と述べ、
> **"week-long walls" は idle game では普通だ**とし、
> "your position requires **half a day at worst**" と返している。
>
> 同（1:17pm）：bestiary と装備を進めるか、別のビルドを試せ。
> "Nomad Idle allows you to push further with different setups"（Clicker Heroes と違って）。
>
> 同（1:43pm）：クリアには "a few days" であって週単位ではない、と主張。

分野：6、5。**6-1 の「即時の手応え」と真っ向から食い違う。**

## 6-3. 140時間遊んだ人の内訳

- 出どころ：Steam 掲示板 "This is a VERY ultra slow game (140 hours in)"（Idle Sphere）
  — https://steamcommunity.com/app/3217600/discussions/0/4625855673285012919/
- 立てた人：ISeeTheSorrow／2024-11-30

書き起こし：

> - sphere level 最高 **1.43NoOcg**、"Homeostasis" のマイルストーンには遠い
> - まともに進むのは Gust sphere（**#266**）だけ
> - Revolution は **#47** で止まり、リセットの見返りが小さい
> - Agency **#242**、そこから伸びが急に鈍る
> - Chance は高くて制約が強い（48/50 完了、12/50 battles）
> - Battle Area 4 は accuracy 31M でも命中 **0.17%**
> - 実績が資源生成速度に完全に律速されている
> - 原文："Other than leaving the game open in the background for many many hours I don't know what else
>   I can do to progress."
> - 別の書き手：e250 → e286 に一週間かかった
> - 資源生成は毎時 1.08。高額アップグレードには 55時間以上の放置が要る
>
> 課金への文句：
> "This paywall is almost on the level of mobile games"
> "This isn't a game. It is a terrible IAP purchase scam."

分野：6、5。

## 6-4. 「進行が遅すぎる」に対して開発者が数字で答える例

- 出どころ：Steam 掲示板 "Progression feels imminently slow"（Idle Fishing）
  — https://steamcommunity.com/app/2725560/discussions/0/7051042646089811640/
- 立てた人：mwoninggg pwincessss／2024-11-14 2:41am

書き起こし：

> 原投稿：5分ごとに ascend しないと進まないのが楽しくない。課金寸前まで行ったがアンインストールした。
>
> **AO Games [developer]（同日 3:04am）**：どの船／ゾーンまで行ったかを尋ねたうえで、
> "the progression is designed to always be fast, even if you are F2P" と述べ、
> ascension upgrade は **6〜24時間に一度**買えるものだと説明。
>
> zipper76（同日 7:46am、15時間prayed）：自分には進行は快適。
> ただし auto clicker が物足りない。複数のリールを同時に扱えるか、
> リール操作を完全自動にしてほしい。

分野：6、5、1。

## 6-5. オフライン上限への文句と、それを擁護する側の理屈

- 出どころ：Steam 掲示板 "Maximum offline progression - WHY?"（Melvor Idle）
  — https://steamcommunity.com/app/1267910/discussions/0/3192493998739513526/
- 立てた人：Liveor／2022-03-01

書き起こし：

> Liveor：複数セーブを定期的に見に行かされる。"Why I can't play the way I like to?"
> 毎日ログインさせる仕組みを正当化するような課金要素も無いのに、と。
>
> **Segan（技術面の擁護）**："The game has to simulate hours worth of progress when you log in.
> That's a lot of calculations that have to be completed nearly instantly."
> 上限が無ければ、長期離脱で固まるか落ちる。
>
> **Holonaut（設計面の擁護）**：無制限だと何年か後に戻って資源が有り余り、
> gold の管理などの進行系が壊れる。"not unlike using a cheat engine"。
>
> **Quaixor**："You can buy as many inventory spaces as you want and never have to worry about
> not having enough money."
>
> **Cygmus（反論）**：開発者 Malcs が v0.18 で計算を最適化した。
> "Offline Progress has been revamped, basically eliminating the wait times when loading."
>
> **DeeTeeUK**："Considering that the Steam version requires money upfront, there shouldn't be a limit
> on offline progression that can't be turned off or adjusted."
>
> **Shaorune**："I'm currently using a mod call Unlmited Offline, its basically remove the time limit."

分野：6、7、5。**上限の理由が「計算量」と「バランス」の二つに割れている。**

## 6-6. 日本語圏の遊んだ人の記録

- 出どころ：やみ, 「最近やった放置ゲー・クリッカー・インクリメンタルゲーム。終わりがないのが終わり。」
  — https://kirmav.blogspot.com/2025/01/recently-played-incremental-games.html
- 2025-01-02

書き起こし（原文の言い回しに近い形）：

> **Idle Sphere**：「ゲームとしての出来は微妙なのに妙な中毒性がある」。UI の使いにくさとバグに不満。
> 数値が **10^520** を超えた時点で「進捗がだいぶゆっくりになった」。
>
> **Universe Time**：評価が低い。「途中から変化が乏しくなり無味乾燥な味になってくる」
> 「やることがなくなり、本当の意味で放置することしかできなくなる感じ」。
>
> **Universe Shrinker**：上記より「色々手触りが良い感じで好き」。階層構造が理解しやすい。
> 「宇宙を潰すって何だよそれ感がずっとあるのもバカっぽくてよい」。
> 現在「直径『10^100,000光年』の何かを潰している」。
>
> **NGU Idle**：「インクリメンタルの記事を書くにあたって NGU に触れないものはモグリである」。
> 成長要素が多く、ファンメイド wiki が **939ページ**ある。
>
> **Revolution Idle**：「見た目からはすぐ終わりそうな感じがしたが、実際のところかなり要素が多い」。
> **160個**の実績を全部取ることがクリア条件。

分野：6、5、4。**「本当の意味で放置することしかできなくなる」＝このジャンル固有の壊れ方の言語化。**

## 6-7. 学術側からの批判（快適さと搾取の同居）

- 出どころ：Justin Buergi（Rensselaer Polytechnic Institute）,
  "Idle Games: A Cozy Genre Turned Exploitative", *Replay. The Polish Journal of Game Studies*, Vol. 12 No. 1
  — https://czasopisma.uni.lodz.pl/Replay/article/view/23588
- 2024-11-29

書き起こし：

> "while idle games can fit within the cozy game genre, their monetization practices raise questions about
> ethical responsibility on the part of game developers and taint the genre's potential as a serene
> gaming experience."
>
> 論点：待つことが中核機構であるため、進行が日常の全体に染み出す。
> 開発者はその「待ちたくなさ」を課金で買わせる。
> 矛盾："comfort, relaxation, and safety" を提供しながら、強迫的な関与を作る。
> "a continuous sense of growth and progression" という欲求が、有料の近道によって武器化される。
>
> 参照作品：Cookie Clicker、Adventure Capitalist、Virtual Villagers: Origin 2、The Longing。

分野：6、4。

## 6-8. 作り手に向けた「批判の受け方」

- 出どころ：The Paper Pilot, "Guide to Incrementals / Navigating Criticism"
  — https://paperpilot.dev/garden/guide-to-incrementals/navigating-criticism

書き起こし：

> 二分：constructive feedback は "typically offers specific suggestions for improvement"、
> 不要なものは "often vague or hurtful"。前者を優先し後者は捨てよ。
> "due to different player preferences you'll never satisfy everyone"
> "Negative feedback can naturally feel like an attack" ── 冷ましてから返す。仕返しはしない。
> 意見を求める先として、遊び手より**作り手のコミュニティ**を勧めている
> （"are much more likely to leave positive and constructive comments"）。

分野：6。**〔註〕このページ自体には、具体的な文句の例は載っていない。**

---

# 7. 実装の落とし穴

## 7-1. double は 1.79e308 で止まる ── 数の実装を差し替える

- 出どころ：Patashu / IvarK, `break_infinity.js` — https://github.com/Patashu/break_infinity.js/
- 併せて：https://patashu.github.io/break_infinity.js/index.html

書き起こし：

> "A replacement for decimal.js for incremental games who want to deal with very large numbers
> (bigger in magnitude than **1e308**, up to as much as **1e(9e15)**) and want to prioritize speed over accuracy."
>
> "A double floating point has a maximum value of around **1.78e308**."
> それを超えると JavaScript の Infinity になり、"there are places it breaks"。
>
> 実装：mantissa（float/double）と exponent（int64_t）を持つ Decimal クラス。
> 値は mantissa × 10^exponent。上限は 1e(2^63)。
>
> decimal.js 比の速度：
> - Constructor：**2.8x**
> - Addition：**2.5x**
> - Multiplication：**2.9x**
> - Logarithmic：**121x**
> - Exponential：**401x**
> - Power：**442x**
>
> 実例："Antimatter Dimensions script time improved by **4.5x** after swapping from decimal.js to break_infinity.js."
>
> 註："If you want to prioritize accuracy over speed, please use decimal.js instead."
> さらに大きい数のために `break_eternity.js`（10^^3、10^^4、10^^5 以上）がある。

分野：7。

## 7-2. オフライン進行は「時刻の差」でしかない ── だから時計を触られる

- 出どころ：Edvins Antonovs, "Rebuilding the 'Welcome Back' mechanic from idle games in React"
  — https://edvins.io/rebuilding-the-welcome-back-mechanic-from-idle-games-in-react
- 2025-11-02

書き起こし：

> `gained = Math.floor((now - last_saved) / tick_ms) * rate;`
>
> デモでは `TICK_MS = 3000`、進行は `Math.floor(diff / TICK_MS)`。
> localStorage に置くのは二つだけ：`wood`（総量）と `startedAt`（Unix timestamp）。
> 読み込み時に `Date.now() - startedAt` を取る。
>
> "no background timers or intervals needed" ── 背景で回さない。戻ってきたときにだけ計算する。
>
> 危険："For a real game, relying on the browser's clock means a player could just change their system time
> and 'earn' a week's worth instantly."
>
> 実運用の解：計算をバックエンド（例：Supabase）に移し、
> サーバ側の権威ある時刻（DB の `now()`）で差を取る。式は同じで、時計だけ差し替える。

分野：7、2。

## 7-3. 端末の時計をどう疑うか（作り手同士のやりとり）

- 出どころ：Godot Forum, "Idle Game Background Progress"
  — https://forum.godotengine.org/t/idle-game-background-progress/105645
- 2025-03-17

書き起こし：

> **yangtegap（19:19）**：モバイルの放置ゲームを作りたい。
> "calculating progress when you re-launch the game based on time elapsed between when the game was last closed"
> が定石なのは分かるが、システム時計をいじられるのが心配。
> オフライン収入に上限を置くのが緩和策の一つだと理解している。
> あと、有名な放置ゲームは通知のために背景タイマーを使っているが、Godot でどうやるのか。
>
> **hexgrid（19:33）**："invisible local notifications" を将来時刻に予約しておき、
> OS がそれを配ったタイミングとのずれで時計の改竄を検出する。
> "actual background processes on mobile are difficult to keep running"（OS の制約）。
> そもそも金銭的被害が無い一人遊びの不正を止める意味はあるのか、とも問うている。
>
> **yangtegap（19:42）**："net-connected scoreboard for events" を考えているので、公開スコアが不正の動機になる。
>
> **hexgrid（19:47）**："scored" な run と "non-scored" な run を分け、
> サーバ側で UUID と時刻を突き合わせて、累積稼働時間と実時間のずれを見る。

分野：7。

## 7-4. 背景タブは止まる／間引かれる

- 出どころ：（検索経由で得た記述。一次の当たり先は Melvor Idle wiki と itch.io の開発日誌）
  - Melvor Idle 公式wiki "Offline Progression" — https://wiki.melvoridle.com/w/Offline_Progression （403で本文は未読）
  - itch.io devlog（Idle Ant Farm ほか）

書き起こし：

> "Offline progression may also trigger if the game is left open in a separate tab and it becomes slowed
> by browser throttling."
>
> "Although this is now enabled in the game, it seems like browsers like to optimize out of focus tabs
> to still pause it."

**〔註〕この項は検索結果の抜粋で、一次ページを開けていない。**弱い出どころとして扱うこと。

分野：7。

## 7-5. ブラウザのタイマー下限

- 出どころ：The Cookie Clicker Wiki, "Uncanny Clicker" — https://cookieclicker.wiki.gg/wiki/Uncanny_Clicker

書き起こし：

> ページ内の自動化例 `setInterval(function(){Game.ClickCookie()}, 10);` に添えて、
> **ブラウザは 10ms を下限として強制する**旨の註がある。

分野：7、1。

## 7-6. オフラインの計算量そのものが上限の理由になる

- 出どころ：Steam 掲示板 "Maximum offline progression - WHY?"（Melvor Idle、6-5 と同じスレッド）
  — https://steamcommunity.com/app/1267910/discussions/0/3192493998739513526/

書き起こし：

> Segan："The game has to simulate hours worth of progress when you log in.
> That's a lot of calculations that have to be completed nearly instantly."
> Cygmus：v0.18 で "Offline Progress has been revamped, basically eliminating the wait times when loading."

分野：7、5。**「離れた時間ぶんを本当に回す」実装だと、離れた時間の上限＝読み込み時間の上限になる。**

---

# 付録：日本語圏で採れた、ジャンルの言い直し

## A-1. クリッカーの必須三要素

- 出どころ：たなお, 「クリックだけで面白いのはなぜ？クリッカーゲームの核心に迫る」, note
  — https://note.com/tanao32note/n/n4c80339a8896
- 2024-10-31

書き起こし：

> クリッカーゲームの本質は「通貨を生産することが目的であり、その手段としてクリック操作を使う」こと。
> 単なるクリック機能では退屈するため、三つの仕組みが要る。
>
> 1. **自動化**：クリック自体またはクリック以外の手段で「通貨を生成する建物や人を購入する仕組み」
> 2. **強化**：「1クリックで稼げる通貨の量を増やすことだ」
> 3. **放置**：不在時も生産が進む。再開時に「潤沢になった生産環境でのプレイは、画面や進行に少し変化が生まれ」
>    新鮮さが出る
>
> 例に挙げているもの：*Cookie Clicker*、*Adventure Capitalist*、
> *Banana*（Steam で最高 90万同時プレイ）。

分野：4、2。

## A-2. 個人開発者の立ち位置の取り方

- 出どころ：Torenia Fournieri, 「個人による放置ゲームの開発:コンセプト」, note
  — https://note.com/fournieri/n/na2801516b439
- 2023-08-21

書き起こし：

> 放置ゲームは、放置の仕組みのおかげで成功しているのではなく、**それにもかかわらず**成功している、という立場。
> ガチャを外すと「incredibly fun」になる作品がある（例に挙げているのは『冒険ギルド物語2』の類）。
> 面白さは放置の仕組みそのものではなく、課金圧の無さから来ている。
>
> 商業のガチャ放置ゲームと正面から張り合わないこと。
> 代わりに「develop interesting game prototypes in under **1,000 lines of code** without relying on
> sheer content volume」。
>
> 完全自動より、プレイヤーの裁量が残るターン制のほうが強い。
> 「interactive play allows better feedback for analyzing builds and strategies」。
>
> Godville の二人チームを、個人開発の現実的な手本として挙げている
> （更新量ではなく、不確実性とキャラクターの人格で持たせている）。
>
> 絵を作る前に、テキストだけの試作で中核を検証せよ。

分野：4、6。
