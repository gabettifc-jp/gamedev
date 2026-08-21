# テストプレイ ── 生の記録

調べた日：2026-08-21
調べた者：genre-research（実装・spec を読まずに、ネットのみから収集）
題：「テストプレイ」（ジャンルではない）

分野の番号は依頼の七つに対応する。**ジャンル用の七分野ではない。**

1. 規模と時機
2. 何を測るか
3. 何を聞くか／聞いてはいけないか
4. 見ているあいだ何をするか
5. 出た声をどう扱うか
6. 機械にやらせるテストプレイ
7. テストプレイで間違えた話

各件：**出どころ（URL・書いた人・いつのもの）／原文に近い書き起こし／分野**。
二次情報は「一次はどれか」を書く。

---

## 001. Steve Bromley「How many players do I need for a playtest」

- URL: https://gamesuserresearch.com/how-many-players-do-i-need-for-a-playtest/
- 書いた人：Steve Bromley（元 Sony PlayStation の user researcher、`How To Be A Games User Researcher` の著者）
- いつ：最終更新 2022-09-24
- 分野：**1（規模と時機）**

書き起こし（数値はそのまま）：

> "Six players when you're trying to discover problems with your game"
> "Twelve players when trying to understand and define players"
> "One hundred players for quantitative measuring questions"

アンケートの標本数について。母集団が1,000人以上のとき、**400件の回答で誤差率5%**。ただし
Bromley の実務的な推奨は **100人（誤差率およそ10%）**。

> "100 players for your survey is a good, practical number"

6人という数の根拠は Nielsen の研究（**一次は Nielsen & Landauer 1993 / Nielsen 2000。下の 002**）。

> "At 5 users, around 80% of the issues have been found."

Bromley が5人ではなく6人を勧めるのは、**当日来ない人（no-show）を見込んで**のこと。

そして最後に：

> "One player is infinitely more than none"

---

## 002. Jakob Nielsen「Why You Only Need to Test with 5 Users」

- URL: https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
- 書いた人：Jakob Nielsen（Nielsen Norman Group）
- いつ：2000-03-18
- 分野：**1（規模と時機）**
- 一次：Nielsen & Landauer（1993）の測定。この記事はその要約であり、**この記事自体が業界の相場の出どころになっている**

書き起こし：

問題発見率の式：**N × (1 − (1 − L)^n)**。N は問題の総数、n は被験者数、L は
「一人の被験者が任意の問題に当たる確率」。Nielsen と Landauer が複数プロジェクトで測った
**L の平均は31%**。L=31% を入れると **5人で約85%** の問題が見つかる。

（別の出どころが計算し直した数値。**二次**、下の 003 経由）
L=20% なら85%に届くのに約9人、L=10%（気づきにくい・低頻度の問題）なら約18人。

**同じ予算なら15人を一回より、5人を三回。**

> "Spend this budget on 3 studies with 5 users each!"

理由は、直したところに新しい問題が出るから、直したあとに測り直さないと分からない。

> "After the fifth user, you are wasting your time by observing the same findings repeatedly but not learning much new."

**利用者層が分かれているときは足りない。**二群なら各3〜4人、三群以上なら各3人。

**種類が違うと必要数も違う（この節が落とされやすい）：**
- 定量調査（quantitative studies）… **20人**
- カードソート … **15人**

---

## 003. Maze「User Testing: How Many User Testers Do You Need per Method?」ほかの二次記事群

- URL: https://maze.co/blog/user-testing-how-many-users/
- 分野：**1**
- **二次。**一次は 002 の Nielsen 2000 と Nielsen & Landauer 1993

書き起こし：

> The 5-user rule was first proposed by Jakob Nielsen in 'Why You Only Need to Test with 5 Users' (2000), where he argued that five user testers will uncover 85% of usability problems.
> For the Nielsen-Landauer formula to be true, the problem discovery rate should be 31%.
> If L = 31%, 5 users find ~85%. If L = 20%, you need about 9 users to reach 85%. If L = 10%, you need roughly 18 users.

**注意：**この項目は検索結果の要約から取った数字であり、記事本文を直接開いていない。
**L を変えると必要人数が跳ね上がる**という主張だけを記録し、数値は再確認の必要がある。

---

## 004. Player Research「Getting More From Usability Testing Your Game」

- URL: https://www.playerresearch.com/learn/getting-more-from-usability-testing-your-game/
- 書いた人：Sebastian Long BSc（Player Research 社 Director）
- いつ：2021-02-17
- 分野：**1（規模と時機）／2（何を測るか）**

書き起こし（**この記事がいちばん数値が濃い**）：

> "Typically between 6 and 12 playtesters are invited for perhaps 90 minutes per person, one-at-a-time."

90分の内訳：
- 10分 … 説明・書類
- **50分 … 中断なしのプレイ（uninterrupted play）**
- 25分 … インタビュー
- 5分 … しめ

一回の実施サイクルは **3〜6営業日**。スプリントごとに繰り返し、直したものを測り直す。

進め方：訓練された研究者が司会をする。プレイヤーには
> "play as you would normally"
と言う。think aloud を頼むこともある。あとから「なぜその行動をしたのか」を聞く。

**ユーザビリティテストで分かること：**操作、UI、説明、視聴覚のフィードバック、学習曲線。
プレイヤーがゲームの仕組みを理解しているか、設計が意図した体験へ導けているか。

**ユーザビリティテストで分からないこと（★ここが重要）：**

> "With only 6 to 12 players involved there's simply not enough people involved to get a strong enough read"
> （面白いかどうかについて）

**「面白いか」を測るには最低25〜35人**が要る。さらに、内容が磨かれる前の初期段階で
「面白いか」を直接判定させるのは信用できない、とも書いてある。

→ **6〜12人（問題探し）と25〜35人（面白さ判定）は別物**という、はっきりした線引き。

---

## 005. PlaytestCloud / Gareth Lloyd「Research goals and methods for playtesting - Part 1」

- URL: https://start.playtestcloud.com/blog/methods-for-playtesting
- 書いた人：Gareth Lloyd（PlaytestCloud）
- いつ：2022-05-04
- 分野：**1（規模と時機）**

書き起こし：

> "Different research methods are more useful at different stages of game development, but there are no hard and fast rules."

二種類に分ける：

1. **Usability Testing** … UI・チュートリアル・仕組みの使いやすさ。少人数で、一人ひとりを濃く見る
2. **Appreciation Testing** … 楽しんでいるかどうか。**"generally requires a larger number of players"**

> "The most important thing to note here is that usability and appreciation research goals are not the same."

同時にやることは理屈上できるが "can get complicated quickly" と警告している。

→ **004 と同じ線引きを、別の会社が別の言葉で言っている。**この二社は一致している。

---

## 006. Steve Bromley「When should I run playtests?」

- URL: https://gamesuserresearch.com/when-should-i-run-playtests/
- 書いた人：Steve Bromley
- いつ：2023-11-02
- 分野：**1（規模と時機）**

書き起こし：

> "Frequent, small-scope studies timed intentionally throughout development create more opportunities to address the issues"

> "You don't need a thousand players to see if your tutorial works – just six people will be enough to spot any major issues around understanding."

> "Lots of little studies > One big test"

**頻度の決め方は日程ではなく決定の頻度で決める。**
"how often do we make important decisions about our game" に合わせる。
チームによっては隔月、四半期ごと。

---

## 007. Nathalie Pozzi & Eric Zimmerman「Don't follow these rules! A Primer for Playtesting」

- URL: https://ericzimmerman.com/assets/pdfs/A_Primer_for_Playtesting.pdf
- 書いた人：Nathalie Pozzi（建築家）と Eric Zimmerman（ゲームデザイナー、`Rules of Play` 共著者）
- いつ：2012年の Berlin University of the Arts でのレジデンシーに基づく
- 分野：**1／2／3／4／5（全域にまたがる。この題でいちばん密度が高い一次資料）**

**PDF 本文が丸ごと取れたので、原文をそのまま多めに残す。**

### 前提

> "Playtesting is a **methodology** borrowed from game design where unfinished projects are tested on an audience."
> "Playtesting is also an **attitude** towards the creative process"

一件あたりの長さ：
> "We would spend about 30-60 minutes interacting with and discussing one project"

### ……テストプレイの前に（分野1）

**A. Playtest before you think you are ready**

> "You always playtest a work in progress, not a finished design. That means you should playtest as early as you possibly can – usually much earlier than you think you should. It is much much better to playtest your ugly prototype than to wait and playtest a more polished project. **A playtest is not a presentation.** If you feel ready and comfortable to present and playtest your design, you have waited too long – it is probably too late to make substantial changes."
> "Is it too early for you to playtest? If the answer is yes, then playtest anyway."

**B. Strategize for early playtesting**

> "Can you make a paper prototype of a digital project? Can you scale down a work meant for 100 participants to something you can playtest with a dozen? Rather than plan your entire project in advance, focus instead on what is needed to enable the next playtest."
> "Simplify your project so that you can playtest today."

**C. Know why you are playtesting**

> "Enter into every playtest with a concrete idea about what you want to learn and what questions you hope the playtest will answer."
> "What is the one key question that you want your playtest to answer?"

**D. Prepare variations（★これは他のどの資料にも出てこなかった）**

> "Go into a playtest with different versions of your project to try out. ... Variations give you options if something breaks down, and they let you do comparisons to see which variation works best. **One tip: change as little as possible each time (only one element) so that you can understand better the exact effects of your change.**"

**F. Design the learning experience**

> "If you are creating a complicated interactive system, the experience of learning how to understand and interact with the system is an important part of the overall design problem."

**G. Blame yourself, not your playtesters**

> "Be sure to tell them that if they are frustrated or confused, it is not their fault – it is your fault for not designing a better experience for them. It's OK for them to be confused – after all, **the most valuable part of the playtest is not what they do understand, but what they don't.**"
> "Never make your playtesters feel foolish."

**I. Don't explain（分野3・4）**

> "Resist the temptation to explain the ideas and intentions behind your project to your playtesters. Instead, let them interact with the LEAST possible explanation from you in advance. **By explaining your ideas beforehand, you are ruining the chance to see the authentic reactions that your project provokes.**"
> "Is it possible to not say anything before the playtest starts?"

**J. Take notes（分野2）**

> "In game design, we often prepare a sheet of paper for each playtester, with questions written out and room to take notes. The notes page is structured to facilitate what you need to know BEFORE, DURING, and AFTER each playtest. During a discussion, taking notes will help to elicit better feedback – if your testers see you taking notes they will be more likely to give you detailed and thoughtful answers."

### ……テストプレイのあいだ（分野4）

**K. Be selfish**

> "The purpose of your playtest is not for your playtesters to have fun. It is for you to learn what does and does not work about your project. If you try too hard to give playtesters a good time, you will lose the opportunity to get the hard truth from them."

**L. Encourage your playtesters to talk aloud**

> "Don't be shy about reminding your playtesters to think aloud."

**M. Notice everything（分野2）**

> "Prepare on your notes sheet the categories of the main things you want to observe, such as **when players seemed frustrated, what make them laugh, or how many times they tried and failed before they gave up.** Keep track of **how long it took to run the playtest**, which variations your testers preferred... Try to take notes on everything that you can – otherwise, you will be at the mercy of your selective memory, which will cast everything in the best possible light."

**N. Shut up（分野4。★「いつ破るか」がここに書いてある）**

> "While you are observing the playtest, say as little as possible. You will feel an overwhelming urge to help out your playtesters, to tell them what to do and what they are doing wrong. But you must do everything you can to not interfere. Their mistakes and misunderstandings are extremely useful: you must let them explore the project on their own. **If they are completely confused, step in and assist them, but in general you should do everything you can to shut up.** If you tell them what to do, you lose the main purpose of the playtest, which is to see how OTHER people react to your project. Learning to shut up during a playtest requires discipline."
> "Can you shut up – not a just little, but really, completely, shut up?"

**O. See the big picture**

> "What are the emotional responses of your playtesters, what is their body language, how are they interacting with each other? Seeing the bigger picture can help you understand when your audience is engaged and when they are bored."

**P. Don't be afraid of data（分野2）**

> "At what moments did everyone fall silent? How many steps did each participant take as they walked through the space? If you are working in software, the program can record important user input, such as time spent in different areas of the experience. ... Too much data can be overwhelming to interpret, but tracking the right data can be incredibly valuable."
> "What is the data that will answer your key questions?"

**Q. Answer a question with a question（分野3）**

> "When playtesters ask you how something works, or what something means, it is probably because they are confused. Rather than explain it to them, you can answer their inquiry with a question of your own. **Don't tell them what the blue button does – instead, ask them what they think it does, or even better, what they think it SHOULD do.**"
> "Every time a playtester asks you something, ask them something back."

**R. Hunger for failure（★"happy face syndrome" という名前が付いている）**

> "If you are only looking for the successes, you will remember the smiles and laughter and think that your project is in perfect shape (**we call this the "happy face syndrome"**). But you need to cultivate a desperate hunger to focus on what is not working properly."

### ……テストプレイのあとに（分野3・5）

**S. Discuss what happened**

> "Begin with very specific questions, such as what was most difficult for them to understand about the project, or why they reacted to a particular aspect of the design. **Finish with more general questions**, such as what they liked best about the experience or what they would change to make it better."
> "The more concrete your questions, the more useful answers you will get."

→ **具体→一般の順。**逆にすると使えない答えになる、と読める。

**T. Put feedback into context（★分野5の中核）**

> "It can be useful to distinguish between expert and non-expert testers. ... When getting critical feedback from non-experts, remember that **they are the patient and you are the doctor** – you can take their suggestions as symptoms of what is and isn't working in the project, rather than as directions for the next steps in your design. **If someone tells you to tear down a room and make it bigger, they are really telling you that it feels small. Rather than take their advice, perhaps just rearrange the furniture.**"
> "Ask for feedback, but don't take suggestions literally."

**U. Collaborate with your playtesters（★上の T と食い違う。相場が割れている点）**

> "One of the most thrilling moments of playtesting is collaborating with your playtesters – brainstorming with them, trying out their ideas, and seeing how the changes impact your project. Plan your playtest session so that you have time to experiment with new ideas as they emerge through the playtesting itself. **They are seeing the project with fresh eyes and so their ideas are often better than yours.**"
> "Embrace shared authorship with your playtesters."

**Y and Z. Break these rules**

> "There is no single magic solution... Don't follow these 'rules.' They are not meant to be followed – they are meant to be twisted, modified, broken, and refashioned into something new."

---

## 008. Ken Birdwell「The Cabal: Valve's Design Process For Creating Half-Life」

- URL: https://www.gamedeveloper.com/design/the-cabal-valve-s-design-process-for-creating-i-half-life-i-
- 書いた人：Ken Birdwell（Valve）
- いつ：1999-12-10（Game Developer Magazine 1999年12月号）
- 分野：**1（規模）／2（何を測るか）／4（観察）／7（間違えた話）**

書き起こし（**1999年の資料。いまの相場の理由がここに残っている**）：

一回の形：

> "A play-test session consists of one outside volunteer (Sierra, our publisher, pulled play-testers from local people who had sent in product registration cards for other games) playing the game for **two hours**."

観察者の規則：

> "Other than starting the game for them and resetting it if it crashed, **the observers from Valve were not allowed to say anything.**"

観察者はテスターの真後ろに座り、無言でメモを取る。

学び：

> "**Nothing is quite so humbling as being forced to watch in silence as some poor play-tester stumbles around your level for 20 minutes, unable to figure out the 'obvious' answer that you now realize is completely arbitrary and impossible to figure out.**"

> "This was also a sure way to settle any design arguments."

規模（**数値がはっきりしている数少ない一次資料**）：

> "Over the course of the project we ended up doing **more than 200 play-test sessions, about half of them with repeat players**."

一回あたりの産出：

> "A typical two-hour play-test session would result in **100 or so 'action items'** — things that needed to be fixed, changed, added, or deleted from the game."

→ **200セッション × 2時間 = 400時間。うち約半分はリピーター**という点は、
「初見は一度しか取れない」という制約と正面からぶつかる（下の 022 参照）。

---

## 009. 米光一成「テストプレイは行動の観察が重要」

- URL: https://note.com/yonemitsu/n/nec445c5cc06e
- 書いた人：米光一成（ゲーム作家。『ぷよぷよ』等）
- いつ：2020-06-20
- 分野：**1（回数）／4（観察）／5（声の扱い）**

書き起こし（原文に近い形）：

> 「『おもしろい』と言ったあとに、『もう１回やろう』と言って、再度プレイするかどうか。実際に何度もプレイしてくれるか。その行動は、言葉よりも重要だ。」

> 「プレイしているときの顔や動作、話しっぷりを観察して、ゲームに夢中になっているか、笑っているか、真剣に考えているか。そういった『行動』こそが、テストプレイにおいて最大の『気づき』を与えてくれる」

回数（**数値**）：

> 「テストプレイは、最低100回やる。」（ただし「各自調整してください」との注記あり）

> 「プレイヤーが想定した遊び方をしてくれないケースがある。それは、改善すべきポイントを指し示している」

テスターの選び方：

> 「『ふだんはゲームなんてしない』という人に意識的にテストプレイしてもらうようにしている。」

→ **「言ったこと」より「したこと」（もう一回やるか）を見る**という主張。
分野5の「言ったことと したことの差」に、日本語圏から直接当たる一件。

---

## 010. WAZA games「ボードゲームを面白くしたい人のための、テストプレイ実践マニュアル」

- URL: https://note.com/waza_games/n/n9dc205907bb8
- 書いた人：WAZA games
- 分野：**1（段階）／2（記録）／3（質問）／4（観察）／5（声の扱い）**

書き起こし：

テストプレイを二段階に分ける：

1. **システムのテストプレイ** … ゲームが成立し面白いかを検証する
2. **ルールのテストプレイ** … ルールブックを読んだだけでプレイできるかを確認する

開催前に用意するもの：モックでよいコンポーネント、ルールブック、**試したいルール変更のリスト**、
**プレイヤー行動の仮説**、映像記録の機器、おもてなしの品。

→ **「プレイヤー行動の仮説」を事前に立てる**のは 007-C（何を知りたいか決めてから入る）と同じ主張。

実施時：

> デザイナー本人はプレイに参加しないほうが理想的。「作り手側がプレイヤーになったが最後、採点が甘くなりがち」

観察すべき項目：プレイヤーの表情の変化、盛り上がりの箇所、**ルールを誤解した箇所**。

> **「意見と感想の切り分け」**が重要。プレイヤーの感情的な反応のほうが信頼できる情報である。

→ ★**この言い回しは、日本語圏の同人・ボードゲーム界隈に定着しているらしい。**
ミヤザキユウ（ボードゲームデザイナー）の記事が同じ言葉を使っている、と検索結果には出るが、
**本文が 404 で開けなかったので出どころとして並べない**（末尾の「開けなかったもの」に入れた）。
**いま確かめられているのは、この 010 の一件だけである。**

→ 英語圏の "problems vs solutions"（018/019）とは**切り口が違う。**
英語圏は「問題か解決策か」で切り、日本語圏は「事実か推測か」で切っている。
**ただし日本語側の出どころが一件しか確かめられていないので、
「日本語圏はこう」と言い切れる材料はまだ無い。**

終わったあと：協力者への感謝と、**気づきのまとめを24時間以内に**行う。

---

## 011. indiegamesjapan「テストプレイを上手く行うための5つのポイント」

- URL: https://indiegamesjapan.com/archives/2022/02/12831/
- 書いた人：IndieGamesJapan
- いつ：2022-02-11
- 分野：**1／3／4**

書き起こし：

1. **積極的にゲーム公開** … 「恐れずに未完成のゲームでもプレイヤーに見せましょう」
2. **対象者の選定** … ゲーム経験者を選び、多様なゲーマーに遊んでもらう
3. **複数回テスト** … 「複数回やってもらえるようにコミュニティを作り上げたり」して、初回と異なる視点を得る
4. **アンケート実施** … 「『気に入っているところと嫌いなところ』『機会があればもう一度遊びたいですか』など感想を聞く」
5. **助言を控える** … 「チュートリアルやUIが正しく役割を果たしているのかが分からなくなる」ため、操作方法の事前説明や即座の助言は避ける

→ 5 は 007-I / 008 と同じ。**「助けない」は日英どちらでも共通して出てくる。**

---

## 012. みやこ出版「個人ゲーム開発のテストプレイどうする問題」

- URL: https://note.com/akutaba/n/nfd2a03e23da2
- 書いた人：みやこ出版（個人ゲーム開発）
- いつ：2023-12-05
- 分野：**1（規模と時機）**

書き起こし：

**「つら歴史」**という言い方。ストアレビューにバグ報告が残ると、修正後も否定的な評価が消えない。
**「プレイヤーにレビュー修正義務がなく、開発者に削除権もない」**ため、開発史に刻まれ続ける。
→ **公開前にクローズドテストをやる理由**をこう説明している。

テスター選定の基準：
- 目的別に選ぶ。**バグ探しなら経験者、操作方法の確認なら初心者**
- 完成・公開の経験がある人を優先
- 付き合いの長い同僚や友人から始める

時間の段階化（**数値**）：
> 最初は「15分程度の短時間テスト」から始め、相性を確認してから長時間テストへ移行する

心理面：
> 「心身の健康維持が開発継続の優先事項」であり、無理なテストプレイは「本末転倒」

---

## 013. はやなり「個人ゲーム開発者が Steam Playtest で感じたメリット」

- URL: https://zenn.dev/hayanariiii/articles/45c6376a049b89
- 書いた人：はやなり（個人ゲーム開発者）
- いつ：2023-08-04
- 分野：**1（規模と時機）／2（何を測るか）**

書き起こし：

個人開発ゲーム「Gluck」で Steam Playtest を使った記録。**参加者数は記事に書かれていない。**
フィードバックは Google Form で集めた。

> 「不具合を細かく報告いただけたり」「温かいコメントとともに厳しいコメントもいただきました」

良かった点：秘密保持契約が不要／Steamキー配布の手間がない／ストアページ共有で追加費用なし／
公開範囲を制限してじわじわ広げられる／**本編レビューへの直接的な影響がない**。

困った点：**Steam Playtest にはフィードバック機能が標準搭載されていない**ので、
開発者側が Google Form などの外部ツールを用意する必要がある。

→ 012 の「つら歴史」問題に対する、道具側の答えになっている。

---

## 014. Anders Drachen, Alessandro Canossa, Janus Rau Møller Sørensen「Gameplay Metrics in Game User Research: Examples from the Trenches」（Game Analytics 第14章）

- URL: https://cmps-people.ok.ubc.ca/bowenhui/game/readings/gameAnalyticsCh14.pdf
- 書いた人：Anders Drachen（Northeastern / Aalborg / Game Analytics）、Alessandro Canossa（Northeastern / ITU Copenhagen）、Janus Rau Møller Sørensen（Crystal Dynamics / IO Interactive、User Research Manager）
- いつ：2013年（Springer `Game Analytics: Maximizing the Value of Player Data` 所収、pp.285-319）
- 分野：**2（何を測るか）**
- **PDF 本文が取れた。**扱っている作品は Tomb Raider: Underworld、Kane & Lynch: Dog Days、Fragile Alliance 2

### 何を記録するか

> "Any action the player undertakes while playing can be tracked: every time a door is opened, a gun is fired, a treasure uncovered or a level completed, a telemetry tracking system can note down **where and when** that action happened"

どのゲームでも取る価値がある普遍的なもの：**playtime、player progress through a game's levels、player ID、asset use**。
それ以外は「何を取るかはゲームごとに大きく違う」。

### 事例1：Kane & Lynch: Dog Days の武器使用（**被験者3人**）

> "Playsessions were run with a small sample, **only three participants**"

取ったもの：キル位置、射線、敵の死亡位置、移動経路、体力の推移、死亡位置。
可視化は社内ツール **QuickMetrics**。「ユーザーテストのセッション直後にすぐ見られる」ことが利点。

**"The Perfect Path"（★他に出てこなかった手法）：**
> レベルデザイナー自身に「意図したとおり」にプレイしてもらい、その経路をテレメトリで記録。
> それを **2m幅** に広げたものを「perfect path」として地図に重ね、
> テストプレイヤーの経路を重ねて **2m を外れた場所を印**する。
> "The result pointed to specific areas where players strayed considerably from the ideal path."

### 事例2：Fragile Alliance 2 の死亡分析（**約38,000件の死亡イベント**）

> "The dataset used for this analysis contained roughly **38,000 death events**"

マップを4区画に分け、役割別の死因を数える。数値の例：
- 裏切り（traitor 化）は **55.72%** が road/exit エリア
- 自殺（環境要因の死）は **76.04%** が road/exit エリア（爆発する車）
- 警察側の死亡は **69.32%** が road/exit エリア
- traitor が殺されるのは spawn エリアが **61.25%**、road/exit は **8.81%**
- あるセッションでは **253キル中119キルが mercenary の spawn エリア**

時系列で割ると、最初の45秒と、その後90秒で「誰が殺しているか」が大きく変わる（設計意図どおり）。

**★ここが大事：**

> "This kind of behavioral pattern is however not necessarily a problem to the user experience – **it can be the opposite: the pattern observed may be fun to the players even though it is not what was expected.** To find out requires the use of other GUR methods than telemetry analysis, for example playtesting using a think-aloud protocol or surveys."

### 事例3：Kane & Lynch の「いらだち（frustration）」の定量化（**22人**）

観察から始まった。ユーザーテスト中に何人かが明らかにいらだっていた（うめく、コントローラーを投げる等）。
テレメトリは **1秒間隔**でサンプリング。位置、アバターの向き、カメラの向き、体力、
移動修飾（歩き・走り・スプリント）、しゃがみ、遮蔽物の裏かどうか。
加えて trigger イベント（チェックポイント、武器・弾の取得、爆発物の利用、「down but not dead」、NPC撃破、死亡）。

**いらだちの指標（5つ）：**

> 1. The player dies repeatedly in the same location or even regresses in terms of progress made between each death event.
> 2. The number of enemies killed decreases considerably with each successive attempt to progress in the game following a death event.
> 3. The pace of movement becomes considerably faster for each attempt, and the same route is taken each time.
> 4. There is minimal or no use of special abilities, picking up of weapons or using the environment for help, e.g. triggering explosions.
> 5. **The vector of the camera increasingly coincides with the direction of movement of the character – the higher the frustration the less interest in examining the environment.**

**22人を無作為に選んで当てはめたところ、6人が一致した。**

> "We found a match in the behavioral patterns of **6 out of the 22 players**."

モデル（原文のまま）：
```
tn <tf<tn+1
Pd>=2
0<Pdl<20
Pmf>Pm
NPCd(tfn)>NPCd(tfn+1)
WApu(tfn)>WApu(tfn+1)
```

> "**Importantly, all conditions need to occur simultaneously** for the model to contain all the indications of player frustration reported – i.e., frustration is not indicated by any single behavioral variable, but the occurrence of a set of behaviors"

その6人を呼び戻して、録画とデータの再生（**"G-player"** という自作の再生ツール）を見せながら
インタビューしたところ、**モデルが指した全区間で「いらだっていた」と本人が認めた**。

ただし警告：
> "just because it works on this game and with these users, does not necessarily mean it is universal."

### 事例4：Tomb Raider: Underworld の死因（発売後、全プレイヤー）

各レベルは記録用に「map unit」に分かれていて、**全体で約100個**。
死亡位置のヒートマップを作り、そのうえで**死因ごとに層（layer）を分けて8層**を重ね、
「**死因の種類が多い場所**」を数える。
死亡数が多いだけでなく**死因の種類が多い区画**が、難度が高すぎる候補になる。

### 最後の三つの戒め（★分野2の要点）

> - "**Remember that gameplay metrics inform what players are doing, not always why.** ... Gameplay metrics do not inform whether the player is having a good day, or what the player thinks of the game experience. In short, gameplay metrics cannot provide any contextual data."
> - "**Find the right metrics to track at the start of the process.** The earlier that the design and user research teams sit together and figure out what information to track, the better"
> - "**Manage the allure of numbers.** ... just because it looks good, does not mean it is true. **Heat maps and graphs look cool and travel better in organizations than two pages of text** with detailed explanation of a specific finding from a comprehensive user test. Heat maps, data visualizations and diagrams are deceptively easy to understand, but, also, they make it easy to ignore other factors... **Heatmaps can be printed out, provide valuable feedback on design, and also used as trophies on the wall of an office, or they can be powerful tools in the politics behind game development.**"

---

## 015. Steve Bromley「Expert playtest moderation - ask unbiased questions」

- URL: https://gamesuserresearch.com/expert-playtest-moderation-ask-unbiased-questions/
- 書いた人：Steve Bromley
- いつ：最終更新 2022-03-16
- 分野：**3（何を聞くか／聞いてはいけないか）**

書き起こし：

**聞いてよい質問（できるだけ味気なく、記述的に）：**
> "What is happening currently?"
> "How did you realise that?"
> "What would you do if I wasn't here?"

**聞いてはいけない質問の例：**
> "How did you know that was the right way to go?"
> → この聞き方は "reveals that this was the right way to go"。**質問そのものが、プレイヤーが持っていなかった情報を渡してしまう。**

原則：
> questions "can introduce information the player didn't have"

**注意：**この記事には「バイアスの類型の一覧」も「避けるべき言い回しの網羅表」も無い。
体系的な枠は著書 `How To Be A Games User Researcher` 側にあると書かれている（**未入手**）。

---

## 016. Steve Bromley の関連記事（検索結果の抜粋のみ。本文は開けず）

- URL（開けなかった。末尾の一覧にも再掲）:
  - https://www.stevebromley.com/blog/2015/01/06/some-things-ive-learned-about-moderating-playtesting-sessions/
  - https://www.stevebromley.com/blog/2015/03/19/some-things-ive-learned-about-observing-playtesting-sessions/
  - https://www.stevebromley.com/blog/2014/07/09/dont-playtest-your-game/
- 分野：**3／4**
- **二次（検索結果の要約から）。一次は上の URL 三本**

拾えた断片：

> "This was hard" は使えるフィードバックではない。司会は、**難しすぎたのか／難しいのは悪いことなのか／何が難しかったのか**まで詰めるべきである。

> 深掘りの例："What were your expectations with the controls?" / "how did using the controls differ to your expectations?" / "what did this cause?"

> チームのメンバーは、非現実的な課題を与える・誘導質問をする・**気に入らなかったプレイヤーの意見を過大に扱う**ことで結果を歪める。

**本文を確認していないので、上の引用は原文と一致する保証がない。**

---

## 017. 死に急ぐ生命の果実「#ゲーム制作徒然『テストプレイ』というものについて」

- URL: https://note.com/cf_gapple/n/n0f98bd135c24
- 書いた人：死に急ぐ生命の果実
- いつ：2024-07-03
- 分野：**3（何を聞くか）／5（声の扱い）**

書き起こし：

テストプレイを「人の心・感情の動きをゲームを通して意図的にコントロールするための技術」の検証手段と位置づけている。

準備段階：**実物のプロトタイプが不可欠。**企画書だけでは参加者の想像力に頼りすぎて非効率。

意見交換のとき：
> 「サバサバとズケズケは違う」

不用意な発言がモチベーションの低下を招く。改善提案が**「制作者の本来のビジョンを破壊する」**危険を述べている。

前提の明確化：制作者は事前に「**現在の状態**」「**求める意見の粒度**」「**方向性**」を示すべき。

司会役：制作者がファシリテーターとなり、議論の暴走を防ぐ。
**「声の大きい人」に主導権を譲らない**配慮が必要。

→ **★これは他の資料に無い論点。**英語圏の資料は「一対一のセッション」を前提にしているが、
この記事は**複数人が同席する場での司会**を扱っている。人数が増えると
「一人の意見が場を支配する」という別の問題が出る、と言っている。

---

## 018. Mark Rosewater「Twenty Years, Twenty Lessons — Part 3」

- URL: https://magic.wizards.com/en/news/making-magic/twenty-years-twenty-lessons-part-3-2016-06-13
- 書いた人：Mark Rosewater（Magic: The Gathering の head designer）
- いつ：2016-06-13。**一次は GDC 2016 の講演「Twenty Years, Twenty Lessons Learned」。この記事はその三部作の書き起こし**
- 分野：**5（出た声をどう扱うか）**

書き起こし：

**Lesson #19:**
> "Your audience is good at recognizing problems and bad at solving them"

説明は医者のたとえ。医者は患者に症状を聞く。患者は自分の体験をいちばんよく知っているから。
しかし**治すのは医者であって患者ではない。**
プレイヤーは「何かがおかしい」を見つけるのが上手いが、開発側の制約や全体の設計要求は見えていない。
したがって、**問題の発見にはプレイヤーの声を使い、提案された解決策には懐疑的でいる。**

→ 007-T（"they are the patient and you are the doctor"）と**同じたとえを、別の人が独立に使っている。**

---

## 019. Neil Gaiman の書き手向け助言（Tumblr）

- URL: https://www.tumblr.com/neil-gaiman/22573969110/for-all-the-people-who-ask-me-for-writing
- 書いた人：Neil Gaiman
- 分野：**5（出た声をどう扱うか）**
- **一次は The Guardian に載った複数作家の「執筆のルール」記事。**Gaiman 本人がそこへリンクしている

書き起こし（該当の一行）：

> "when people tell you something's wrong or doesn't work for them, they are almost always right"

全文としてよく引かれる形（**二次。goodreads / quotefancy などで流通している版**）：

> "Remember: when people tell you something's wrong or doesn't work for them, they are almost always right. When they tell you exactly what they think is wrong and how to fix it, they are almost always wrong."

→ ゲームの資料ではないが、**分野5の相場そのもの**として業界で繰り返し引かれている。

---

## 020. itch.io フォーラム「the benefits and pitfalls of playtesting」

- URL: https://itch.io/t/3864629/the-benefits-and-pitfalls-of-playtesting
- 書いた人：itch.io の開発者たち（複数）
- いつ：2024-06 ほか
- 分野：**5（出た声をどう扱うか）／7（間違えた話）**
- **★講演や記事には出ない層。**個人開発者が「大人数のテストで失敗した」と書いている

書き起こし：

**TheMetalCarrotDev**（2024-06-24）：

フィードバックを二種類に分ける。
> "Feedback about controls, bugs, other issues, that weren't meant to be part of the gameplay experience."

大人数を集めることへの否定：
> "if there's any way around it, **I no longer try to get large groups of playtesters together**"

20〜100人以上を集めると、**元のビジョンが薄まる**危険がある、と述べている。
また、ジャンル外の人（FPS のプレイヤーがパズルゲームを試す等）からのフィードバックは
過負荷になり、設計意図を覆い隠す。

**Salbei**：
> "Know what you yourself want to do and how you want to do it."

**Bynary Fission**：
> "they are excellent at determining when there is a problem, but they are generally not good at determining what the fix should be."

個々の提案を実装するのではなく**パターンを探す**こと、
意図した客層に合うかどうかで取捨すること、を勧めている。

→ **★これは 004/005 と真っ向から食い違う。**
プロの GUR は「面白さを測るには25〜35人要る」と言い、
個人開発者は「20〜100人集めると設計が壊れる」と言っている。
**測る目的と直す目的で必要な人数が逆向きに動く**という話かもしれないが、
どの資料もそこを橋渡ししていない。

---

## 021. Alexandra Ivanovici「Distilling Feedback in Game Design and Business」（Stonemaier Games）

- URL: https://stonemaiergames.com/distilling-feedback-in-game-design-and-business/
- 書いた人：Alexandra Ivanovici（Stonemaier Games へのゲスト寄稿）
- いつ：2024-09-19
- 分野：**5（出た声をどう扱うか）**

書き起こし：

**パターンを探す：**
> "If multiple playtesters are stumbling over the same rule or finding a particular mechanic unengaging, it's a signal that something needs attention."

**良いフィードバックと悪いフィードバック：**
> good feedback is "specific, and actionable, and often comes from people who understand the goals of your game."
> bad feedback tends to be "vague, even mean sometimes, or based on personal preferences that don't align with the game's objectives."

**無視するとき：**
> "I thanked the playtester for the suggestion but chose not to implement it."

例：運の要素を取り除けという提案を却下した。従うと、想定していたカジュアル層から離れてしまうから。

**Stonemaier Games のブラインドテストの規模（二次。検索結果からで、本文では未確認）：**
> ブラインドテスターには報酬を払い、2〜3週間で3回プレイして報告してもらう。
> 一本のゲームにつき **3〜5波（waves）** のブラインドテストを行う。

---

## 022. 「fresh eyes」と初見が一度しか取れない問題（複数の二次記事）

- URL: https://www.wayline.io/blog/effective-playtesting-strategies-indie-games
- 分野：**1（規模と時機）**
- **二次。**一次にあたるものは見つけられなかった

書き起こし（検索結果からの抜粋）：

> A mix of 'fresh eyes' and experienced players is valuable, with fresh eyes identifying initial hurdles while experienced players offer deeper insights into balance and long-term engagement.
> Fresh eyes testers are particularly useful for examining onboarding, tutorials, UI, and the first-hour experience.
> Assessing onboarding/tutorial would require the player to experience and provide feedback without any prior knowledge or guidance in most cases.
> once everyone you know already has a baseline for the game, getting fresh faces to the table for new impressions becomes a huge hurdle.

→ **008 の Valve が「200セッションのうち約半分がリピーター」だったことと合わせて読むと、
「初見でしか測れないもの」と「繰り返さないと測れないもの」が分かれている**、
という論点が見える。**どの資料も、この二つをどう配分するかは書いていない。**

---

## 023. Maria Rosala & Kate Moran「Synthetic Users: If, When, and How to Use AI-Generated 'Research'」

- URL: https://www.nngroup.com/articles/synthetic-users/
- 書いた人：Maria Rosala, Kate Moran（Nielsen Norman Group）
- いつ：2024-06-21
- 分野：**6（機械にやらせるテストプレイ）／5**

書き起こし：

合成ユーザー（AI が生成した「被験者」）の三つの限界：

1. **迎合する**
> "AI chatbots have a tendency to want to please"
> 実際の被験者より一貫して楽観的な回答を出した

2. **優先順位が付かない**
> synthetic users "seem to care about everything"（何にでも関心があるように見える）ので、機能の優先順位付けができない

3. **行動データが出ない（★ここが本題）**
> Synthetic users cannot replicate actual product usage or provide "behavioral data." They generate imagined experiences rather than real interactions.

できること：既存の公開知識の要約／仮説の生成／デスクリサーチ／**本番の調査のためのインタビュー設計の下書き**。

推奨：
> "Do not use synthetic-user research as a replacement for real-user research"
> "treat the data you acquire from synthetic users as hypotheses that need testing"

→ **★これは「AIに通しプレイをさせる」話とは別種だが、同じ罠の別の面。**
合成ユーザーは「言ったこと」を捏造する。AIエージェントは「したこと」しか出さない。
**どちらも、人間の「言ったことと したことの差」を再現しない。**

（関連する二次の数値。**未確認**：https://developmentcorporate.com/product-management/synthetic-users-in-2026-why-97-of-researchers-use-ai-but-only-8-trust-ai-generated-participants/
「97%の研究者がAIを使うが、合成被験者を生成するツールを常用しているのは8%」）

---

## 024. Gudmundsson et al.「Human-Like Playtesting with Deep Learning」（King / Candy Crush）

- URL: https://gwern.net/doc/reinforcement-learning/imitation-learning/2018-gudmundsson.pdf
- 書いた人：Stefan Freyr Gudmundsson, Philipp Eisen, Erik Poromaa, Alex Nodet, Sami Purmonen, Bartlomiej Kozakowski, Richard Meurling, Lele Cao（AI R&D, King Digital Entertainment, Activision Blizzard Group, Stockholm）
- いつ：2018年（IEEE CIG'18）
- 分野：**6（機械にやらせるテストプレイ）**
- **PDF 本文が取れた。★「絶対値か差分か」に直接答えている、いちばん重要な一件**

### 人間のテストプレイの何を置き換えようとしたか

> "human playtesting comes at the disadvantages of introducing latency and costs in the development process. Game designers need to wait for the results from the test players before they can continue with the next iteration... Additionally, **results from test players might not lead to appropriate conclusions about the general player population as the populations' skill levels can differ.**"

### やったこと

人間の実プレイのログ（**プレイヤーの約1%を無作為抽出、約2週間分**）から、
「この盤面で人間がどの手を打つか」を予測する CNN を教師あり学習で作る。
その CNN を方策として使うエージェントに新レベルを遊ばせる。

データ量（**数値**）：レベル1〜2,150について**1レベルあたり5,500の state-action ペア**、
合計およそ **1.2×10^7 サンプル**。訓練4,500／検証500／テスト500（各レベルあたり）。

盤面の表現：**9×9 のグリッド × 102 の二値特徴プレーン**。手は **144通り**にエンコード。
ネットワークは 11 層の畳み込み（3×3, stride 1, 35 filters）＋最終層 144 filters ＋ GAP ＋ softmax。
活性は ELU（ReLU より検証精度が **約2.5%** 良かった）。

学習時間：**1バージョンの訓練に約24時間**（6 CPU ＋ Nvidia Tesla K80 1枚）。

手の予測精度：**CCS で約47%、CCSS で約48%**（検証・テストとも）。
比較用：ランダム方策のベースラインは **16.67%**。MCTS のプレイデータで学習した場合より
**人間データで学習したほうが約50%良かった**。

### ★エージェントの数値は人間の数値に線形には対応しない

> "Prior to building a statistical model that expresses the players' success rate ρ_player using agent success rate ρ_agent, we observe that **they do not need to linearly map to each other.** For the following reasons:
> - The agent and players performance depends in a different way on the game mode and features present on the board
> - **Players show higher success rate in the presence of game features requiring deeper strategic thinking**
> - **The agent is much less random than players.** It is because (a) the agent is a single player while human-players belong to a large group of millions of individuals playing with different skills and strategies; (b) agents follow their own policy to the point and that leads to highly correlated results.
> - The average success rate observed for players is limited in its value. The same does not hold for a single player or a single agent. **The observed relationship between the agent and players cannot hold for levels where the agent needs much more attempts to succeed than the average observed for the population**
> - We have observed that **the agents and players exhibit different sensitivity to increased difficulty. The difference does not need to be linear.**"

→ したがって、**エージェントの成功率をそのまま「難度」として読むことはできない。**
二項回帰（binomial regression）で ρ_player ← ρ_agent の**写像を人間データから当てはめる**必要がある。
盤面上の要素を共変量として入れる。さらに、エージェントの挙動が自己相関するため
**overdispersion（過分散）**が起き、混合モデル（ランダム効果 κ）を足さないと不確かさを過小評価する。

### 予測精度（**数値**）

800レベルで回帰を当てはめ、**続く200レベル**（CNN が学習に使っていないもの）で予測する。

| Agent | Att/Lvl | Game | MAE | out-band ratio | STDDEV |
|---|---|---|---|---|---|
| MCTS | 100 | CCS | 5.4% | 4% | 53% |
| CNN | 1,000 | CCS | **4.0%** | 11% | 35% |
| CNN | 100 | CCS | 4.9% | 24% | 33% |
| CNN | 1,000 | CCSS | 5.7% | 17% | 38% |
| CNN | 100 | CCSS | 6.6% | 23% | 35% |

MCTS のほうが 95% 予測帯の外に出る率が期待値の5%に近い（4%）。
→ 著者は「**MCTS のほうがゲームの進化に対して頑健**」と解釈している。
CNN は新要素が入るたびに**再訓練が要る**（しかも新しい人間のログが要る）。

### 時間の節約（**★人間との比較で唯一の絶対的な数値**）

> "In CCS we can now estimate the difficulty of a new level in **less than a minute** and can easily scale the solution at a low cost. This compares to the previous **7 days needed with human playtesting on each new episode of 15 levels.**"

運用実績：
> "Since we ran the experiments presented in this paper we have used the CNN agent for **more than a year, for more than 1,000 new levels** in CCS. The prediction accuracy has been stable"

開発中のゲームにも試した：
> "Internally, we have also tried this approach on a game in development using rather limited playtest data. Nevertheless, we were able to train a decent agent, **albeit much noisier** than in CCS and CCSS"

### 限界として著者自身が書いていること

> "the agent learns by averaging over all the players' policies. **The policy of different players can be quite different and the result of an average policy does not have to represent the average result of different policies.**"

---

## 025. Jeppe Theiss Kristensen, Arturo Valdivia, Paolo Burelli「Estimating Player Completion Rate in Mobile Puzzle Games Using Reinforcement Learning」

- URL: https://arxiv.org/html/2306.14626
- 書いた人：IT University of Copenhagen ＋ Tactile Games
- いつ：2023-06-26（arXiv:2306.14626v1。初出は IEEE CoG 2020）
- 分野：**6**
- **★「絶対値としては使えず、差分としては使える」を、そのままの言葉で書いている**

書き起こし：

対象は Lily's Garden。PPO エージェントを訓練し、**約900,000人**の実プレイヤーのデータと比較。

> "**the strongest predictor of player completion rate for a level is the number of moves taken to complete a level of the ∼5% best runs of the agent on a given level.**"

★核心：

> "**While in absolute terms the agent is unable to reach human-level performance across all levels, the differences in terms of behaviour between levels are highly correlated to the differences in human behaviour. Thus, despite performing sub-par, it is still possible to use the performance of the agent to estimate, and perhaps further model, player metrics.**"

さらに、**いちばん下手なエージェント（one-step curriculum）が いちばん相関が高かった**。

限界として書かれていること：分析したのは **120レベル、ゲーム機構の約60%** のみ。
残りの機構にも同じ相関が伸びるかは未検証。手数の分布だけを使い、
エージェントやレベルの追加情報は使っていない。

→ **依頼者の手元の感触（「絶対値としては使えないが、変更前後の差分としては使える」）と
同じことを言っている出どころが、これで一件確定した。**

---

## 026. Roohi, Guckelsberger, Relas, Heiskanen, Takatalo, Hämäläinen「Predicting Game Difficulty and Engagement Using AI Players」

- URL: https://arxiv.org/abs/2107.12061 （PDF: https://arxiv.org/pdf/2107.12061 ）
- 書いた人：Shaghayegh Roohi, Christian Guckelsberger（Aalto University）／Asko Relas, Henri Heiskanen, Jari Takatalo（Rovio Entertainment）／Perttu Hämäläinen（Aalto）
- いつ：2021年（Proc. ACM Hum.-Comput. Interact. 5, CHI PLAY, Article 231）
- 分野：**6**
- **PDF 本文が取れた。**対象は Angry Birds Dream Blast

書き起こし：

### 何をどう「難度」「エンゲージメント」に読み替えたか（★分野2にも効く）

> They operationalize **engagement as level churn rate**, i.e., the portion of players quitting the game or leaving it for an extended duration after trying a level. **Game difficulty is operationalized as pass rate**, i.e. as the probability of players completing a level.

個々のプレイヤーの pass rate は「必要試行回数の逆数」。一度も突破しなければ0。
churn rate は「そのレベルを一回でも試したあと、**7日以上**プレイをやめた人の割合」。

正解データ：**95,266人の人間プレイヤー、最初の168レベル**。

### エージェント側の設定（数値）

状態は **84×84×3 の RGB ピクセル配列**＋数値ベクトル。行動空間は **32×32** の画面上の位置。
**人間に与えられる手数の4倍**をエージェントに与える。
PPO、experience budget 10240、batch size 1024、time horizon 1024、
学習率 0.0003（減衰）、γ=0.99、GAE 0.95、clip 0.2、entropy 0.005、curiosity 係数 0.02。

MCTS 側：各決定で **200反復**、木の深さおよそ4、rollout は最大10手、γ=0.9（myopic 版）。
1レベルあたり **16並列で20回**、**16コア 3.4GHz Xeon で1レベルあたり約10時間**。

### ★相関の数値

16特徴から3つに絞った（**Spearman 相関**）：
- **AI の pass rate … ρ=0.80**
- cleared goals percentage … ρ=0.60
- moves left / max allowed moves … ρ=0.74

（DRL エージェントを1レベルあたり **1000回**走らせた平均）

そのうえで「上位何%の走行だけを使うか」を変えて相関を測った（Fig.3）。結果：
- **AI pass rate は「全走行の平均」がいちばん相関が高い**
- **average moves left は上位15%、average cleared goals percentage は上位5%**を使ったときが最良

> "This supports Kristensen et al.'s hypothesis for **at least some, although not all,** investigated gameplay features."

### ★なぜ「上位の走行だけ」なのか

> "the number of moves required by AI agents to complete a level follows a **long-tailed distribution**. This is likely caused by the availability of an unlimited move budget and the stochasticity of their testbed, a property shared by many games. They propose to tighten the distribution, thus moving it closer to the human ground truth, by using the best, i.e., shorter, runs only."

### 結論の一行

> "**whenever there is a high variability in AI performance that does not match human players' ground truth, an AI agent's best-case behavior can be a stronger predictor of human play than the agent's average behavior.**"

誤差（MSE、5分割交差検証）：pass rate は 0.01890（元手法）→ **0.01419**（提案手法）。
churn rate は 0.00008 → **0.00007**。

限界：**1本のゲーム、168レベルのみ。**他ジャンルでの検証が必要、と自ら書いている。

---

## 027. Chang Xiao, Brenda Z. Yang「LLMs May Not Be Human-Level Players, But They Can Be Testers: Measuring Game Difficulty with LLM Agents」

- URL: https://arxiv.org/abs/2410.02829
- いつ：2024-10-01（arXiv:2410.02829。のちに Proc. ACM Hum.-Comput. Interact. https://dl.acm.org/doi/10.1145/3748634 ）
- 分野：**6**

要旨（原文のまま）：

> "Recent advances in Large Language Models (LLMs) have demonstrated their potential as autonomous agents across various tasks. One emerging application is the use of LLMs in playing games. In this work, we explore a practical problem for the gaming industry: Can LLMs be used to measure game difficulty? We propose a general game-testing framework using LLM agents and test it on two widely played strategy games: **Wordle** and **Slay the Spire**. Our results reveal an interesting finding: **although LLMs may not perform as well as the average human player, their performance, when guided by simple, generic prompting techniques, shows a statistically significant and strong correlation with difficulty indicated by human players.** This suggests that LLMs could serve as effective agents for measuring game difficulty during the development process. Based on our experiments, we also outline general principles and guidelines for incorporating LLMs into the game testing process."

**相関の数値（二次。検索結果からで、本文では未確認）：**
Wordle で、LLM エージェントの平均推測回数と人間の平均推測回数の **Pearson 相関 r=0.624（p<10^-3）**（最良のプロンプト時）。

→ **タイトル自体が「絶対値ではないが差分は取れる」という主張。**024・025・026 と同じ構図が、
RL ではなく LLM でも報告されている。

---

## 028. Chengjia Wang ほか「Leveraging LLM Agents for Automated Video Game Testing」（TITAN）

- URL: https://arxiv.org/html/2509.22170v1
- 書いた人：Chengjia Wang, Lanling Tang, Ming Yuan, Jiongchi Yu, Xiaofei Xie, Jiajun Bu
- いつ：2025-09-26
- 分野：**6**

書き起こし：

構成（原文）：
> "TITAN incorporates four key components to: (1) perceive and abstract high-dimensional game states, (2) proactively optimize and prioritize available actions, (3) enable long-horizon reasoning with action trace memory and reflective self-correction, and (4) employ LLM-based oracles to detect potential functional and logic bugs with diagnostic reports."

**測ったもの（★分野2の「機械版の指標」）：**
task success rate / state coverage / bug detection rate / average execution time。

| | TITAN | Wuji (DRL) | ReAct (LLM) | 人間のテスター |
|---|---|---|---|---|
| タスク成功率 | 95% | 82% | 83% | **100%** |
| 状態カバレッジ | 73.26% | 54.54% | 59.98% | — |
| バグ検出率（15件中） | 82% | 45.5% | 45.5% | **18%** |

→ **人間はタスクを100%こなすが、仕込んだバグは18%しか見つけていない。**
機械は逆（タスク95%、バグ82%）。**得意な仕事がはっきり分かれている。**

限界（6.3 Threats to Validity）：
- LLM の非決定性のため複数試行が必要。GPT-4o のみで検証。プロンプト設計は協力者の経験則に依存
- **MMORPG の物語主導型の構造に限った知見かもしれない。反射神経に依存するゲームや、要素の少ないゲームでは性能が落ちうる**
- 評価したのは2本のみ（研究後に8本の実運用QAに投入）

---

## 029. Cristiano Politowski, Yann-Gaël Guéhéneuc, Fabio Petrillo「Towards Automated Video Game Testing: Still a Long Way to Go」

- URL: https://arxiv.org/abs/2202.12777
- いつ：2022-02-25（改訂 2022-03-10。GAS '22 / ICSE workshop）
- 分野：**6**

要旨（原文のまま）：

> "As the complexity and scope of game development increase, playtesting remains an essential activity to ensure the quality of video games. Yet, the manual, ad-hoc nature of playtesting gives space to improvements in the process. In this study, we investigate gaps between academic solutions in the literature for automated video game testing and the needs of video game developers in the industry. We performed a literature review on video game automated testing and applied an online survey with video game developers. The literature results show a rise in research topics related to automated video game testing. **The survey results show that game developers are skeptical about using automated agents to test games.** We conclude that there is a need for new testing approaches that did not disrupt the developer workflow. As for the researchers, **the focus should be on the testing goal and testing oracle.**"

**アンケートの人数・懐疑の割合は abs ページに書かれていない。**（PDF 本体は未取得）

→ **★研究側の熱と、現場の温度差を測った唯一の資料。**
「testing oracle（何をもって正解とするか）」を問題にしている点が、
024〜027 の「人間データで写像を当てはめる」話と同じところを指している。

---

## 030. Fernando de Mesentier Silva ほか「Exploring Gameplay With AI Agents」（EA / The Sims Mobile）

- URL: https://arxiv.org/abs/1811.06962
- 書いた人：Fernando de Mesentier Silva, Igor Borovikov, John Kolen, Navid Aghdaie, Kazi Zaman（EA）
- いつ：2018-11-16
- 分野：**6**

要旨（原文のまま）：

> "**The process of playtesting a game is subjective, expensive and incomplete.** In this paper, we present a playtesting approach that explores the game space with automated agents and collects data to answer questions posed by the designers. **Rather than have agents interacting with an actual game client, this approach recreates the bare bone mechanics of the game as a separate system.** Our agent is able to play in minutes what would take testers days of organic gameplay. The analysis of thousands of game simulations exposed **imbalances in game actions, identified inconsequential rewards and evaluated the effectiveness of optional strategic choices.** Our test case game, The Sims Mobile, was recently released and the findings shown here influenced design changes that resulted in improved player experience."

→ **★重要な設計判断：実物のゲームクライアントを動かさず、仕組みだけを別システムとして作り直した。**
理由の詳細は abs には無い（本文未取得）。
検索結果の抜粋として、以下の記述が本文にあるとされる（**二次、未確認**）：

> "the game mechanics could only be driven as fast as the client allowed, since human gameplay was the only use case, it was built to fast enough to respond to human finger tapping, but no faster. Furthermore, agents had to navigate in-games menus as part of their logic"

→ もしこれが本文にあるなら、**「クライアント経由で計った時間はゲームの中身ではなく
クライアントの都合を測っている」**という、依頼者の関心そのものの指摘になる。**本文で確かめる価値がある。**

---

## 031. Jonas Gillberg ほか「Technical Challenges of Deploying Reinforcement Learning Agents for Game Testing in AAA Games」／EA SEED の紹介記事

- URL:
  - https://arxiv.org/abs/2307.11105
  - https://www.ea.com/seed/news/seed-ml-research-aaa-game-testing
- 書いた人：Jonas Gillberg, Joakim Bergdahl, Alessandro Sestini, Andrew Eakins, Linus Gisslén（EA SEED）
- いつ：2023-07-19（IEEE Conference on Games 2023）
- 分野：**6**

書き起こし：

対象は **Battlefield 2042 / Battlefield V** と **Dead Space (2023)**。

**規模の数値（★人間のQAの重さを示す唯一の数字）：**

> "A case study [for automated testing] is Battlefield V, which requires testing of **601 different features** amounting to around **0.5M hours of testing if done manually. This corresponds to ~300 work years.**"

スクリプト型ボットの限界：
> "scripting each test takes time, and each time a feature change breaks an existing test, a new one must be built."

要旨（abs ページから、途中で切れている）：
> "Going from research to production, especially for large and complex software systems, is fundam..."

abs ページに書かれていた要点：**開発中の環境と最終製品の環境が大きく違うことが中心的な障害**。

---

## 032. VGM「What AI Playtesting Can and Can't Do (And Where Real Players Still Win)」

- URL: https://vgm.co/blog/what-ai-playtesting-can-and-can-t-do-and-where-real-players-still-win
- 書いた人：VGM（ブログ）
- いつ：2026-07-25
- 分野：**6**
- **二次（業界ブログ）。一次資料への言及は無い**

書き起こし：

**AI のテストプレイで測れるもの：**
- 行動データ … "what happened, how often, in what sequence"
- 技術的な問題 … "broken paths, difficulty outliers, edge-case crashes"
- 系の正しさ … "dialogue trees branch correctly and that all endings are reachable"
- 難度の校正 … 特定の遭遇での失敗率（"dying at a specific encounter 70% of the time"）

**測れないもの：**
> "**AI agents can tell you a player technically completed the onboarding sequence. It cannot tell you that real players spent six minutes confused**"
> AI "doesn't experience confusion. They don't feel bored" し、"that a camera angle feels off in an emotionally charged cutscene" も分からない
> "They cannot evaluate whether a story is emotionally resonant, whether characters feel authentic, or whether players actually care what happens next"
> "Those are retention problems. **They don't show up in completion logs. They show up in Day 1 churn**"

→ **★"It cannot tell you that real players spent six minutes confused" は、依頼者の
「画面を読む時間が入らない」という感触と、ほぼ同じことを別の角度から言っている。**
ただしこれは業界ブログであり、測定に基づく主張ではない。

---

## 033. Serhiy Protsenko「Playtesting with AI - a new game changer in game development」

- URL: https://www.gamedeveloper.com/programming/playtesting-with-ai---a-new-game-changer-in-game-development
- 書いた人：Serhiy Protsenko
- いつ：2021-08-06
- 分野：**6**

書き起こし：

> "Deep Reinforcement Learning, in which the technology learns how to playtest efficiently and accurately, can take sequential actions over time and provides the optimal framework to achieve high levels of accuracy."

限界として書かれていること：
> "Managing unpredictability as it has proved to be efficient in synthetic scenarios like playtesting but still has a long road ahead when it comes to real-life scenarios."
> "One reason as to why this intelligent technology has not reached all it can is due to the lack of expertise in the field."

**この記事には数値が一つも無い。**主張はすべて比較の言葉（「時間から分へ」「より速いフィードバック」
「より多くの反復」）で書かれていて、**絶対的な基準は一つも示されていない。**

---

## 034. 4Gamer「AIが腕前を分析し，難度を自動調節してくれる日も近い？」（CEDEC 2024 レポート）

- URL: https://www.4gamer.net/games/999/G999905/20240824014/
- 書いた人：4Gamer（レポート記事）
- いつ：2024-08-24（講演は CEDEC 2024、2024-08-22）
- 分野：**6**
- **二次（講演レポート）。一次は CEDEC 2024 のセッション
  https://cedec.cesa.or.jp/2024/session/detail/s6606a3f14db6d/ （スクウェア・エニックス AI&エンジン開発ディビジョン、宋亜成氏・城所憲氏）**

書き起こし：

**「アビリティグラフ」**：プレイヤーの能力を「基本」「行動」「戦術」の3カテゴリに分類し、
各ノードに二つの数値を持たせる。
- **マスタリーレート（MR）** … プレイヤーの熟練度
- **チャレンジレート（CR）** … ゲーム側の難度要求

「得意←→苦手」と「困難←→容易」の2軸で判断し、ゲームマスターAIが敵配置やNPC支援を動的に調整する。

**レベル自動生成への応用**：PCGRL（Procedural Content Generation via Reinforcement Learning）で
**CR を報酬に設定**してステージを自動生成。**約0.3〜0.7秒で1レベル生成**。

→ **★これは「エージェントに難度を測らせる」ではなく「人間の腕前を測って難度を合わせる」側。**
024〜027 とは向きが逆で、**人間のプレイをAIが読む**話。日本語圏はこちらの向きが厚い。

---

## 035. CEDEC 2026「スクリプト不要、仕込みも最小限。動画と生成AIで挑むゲームQAの現在地」

- URL: https://cedec.cesa.or.jp/2026/timetable/detail/s6985e6f038961/
- 書いた人：岩崎浩（スクウェア・エニックス AI&エンジン開発ディビジョン マネージャー／リードプログラマー）、Gotier Boeda（同 AIエンジニア）
- いつ：CEDEC 2026、7月22日 15:00-16:00（Hall 1）
- 分野：**6**
- **講演の概要ページのみ。講演本体は未聴取**

書き起こし（概要から）：

**三層アーキテクチャ：**
- 「Planning層（指示・計画）」
- 「Skill層（操作・手順）」
- 「API層（基盤機能）」… 画像認識とUI操作を提供

**スキルマイニング：**AIにゼロから学習させるのではなく、
**開発者やQAスタッフの手動プレイ動画を正解データ**として、LLM で必要な操作（スキル）を抽出・整理する。

**AI Replay：**プレイ動画から視覚的な目印を取り、
現在の画面と目標画像の差を埋める操作を生成して位置ずれを自己修正する。

解決しようとしている痛み：**テストスクリプトの保守費用**と、**デバッグ用の仕込み機能への依存**。

→ **★「画面を見て操作する」型。**028 の TITAN と同系統で、
**ゲーム側に仕込みを入れずに外から操作する**方向。この型だと画面の描画・アニメーション待ちが
そのまま時間に乗る。**この講演概要はそのことに触れていない。**

---

## 036. Michael Washburn Jr. ほか「"What Went Right and What Went Wrong": An Analysis of 155 Postmortems from Game Development」

- URL: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/06/washburn-icse-2016-2.pdf
- 書いた人：Michael Washburn Jr., Pavithra Sathiyanarayanan, Meiyappan Nagappan（Rochester Institute of Technology）／Thomas Zimmermann, Christian Bird（Microsoft Research）
- いつ：2016年（ICSE '16 Companion）
- 分野：**7（テストプレイで間違えた話）**
- **PDF 本文が取れた**

書き起こし：

Gamasutra.com に載った **215本の postmortem** のうち、対象外を除いた **155本**を、
**22のカテゴリ**に分類して数えた。期間は1998〜2015年。

### テストについての数値（★分野7でいちばん硬い数字）

> "First, **30% of the developers without publishers listed testing as something that went right** during development, **while only 19% of those with publishers** listed this as having gone right. The two groups were comparable in the number of times they listed testing as something that went wrong, with **11% of those without publishers and 13% of those with publishers** listing it as having gone wrong. **This shows that those developers who published their own games performed better testing than the developers who had publishers.**"

（参考：いちばん多く「うまくいった」に挙がったのは game design 50%、development process 43%、
team 40%、art 39%。いちばん多く「失敗した」に挙がったのは obstacles 37%、schedule 25%、
development process 24%、game design 22%。**testing はどちらの上位4つにも入っていない。**）

### 個別の証言

**うまくいった例（Star Chamber / Nayantara Studios の Paul Dennen）：**
> "**Long, meticulous early testing periods allowed players to acquire deep understanding of the gameplay, and they were then able to provide well-informed feedback** that was invaluable in balancing the game."

→ 022 の「fresh eyes が要る」と**正反対の主張**。
「長く遊び込ませたからこそ、使えるフィードバックが出た」と言っている。

**失敗した例（Aaaaa! – A Reckless Disregard for Gravity / Dejobaan Games）：**
> 彼らは十分にテストしなかった。そして、ベータテスターを呼んだあとも
> "**when we did bring testers in to toss the game around, we underused the feedback we received.**"

→ **★「テストしなかった」ではなく「集めたのに使わなかった」という失敗の型。**

**失敗した例（Singapore-MIT GAMBIT Game Lab の Bruce Chia, Desmond Wong）：**
> 「失敗すると報われる」という概念のゲームを試作した。しかし
> "**testers didn't understand the logic behind these design decisions, and we spent a lot of time making a game that was not well thought-out and was boring to play.**"

**フィードバックがうまくいった例（BioShock / 2K Games の Alyssa Finley）：**
> 2K Games はフォーカスグループでテストした。反応を "**brutal**" と表現している。
> "**Based on this humbling feedback, we came to the realization that our own instincts were not serving us well,**" そして必要な修正ができた。

**フィードバックが失敗した例（Super Monkey Ball 2 / Other Ocean の Ethan Einhorn）：**
> 発売後、プレイヤーの反応が全部シングルプレイヤーについてで、
> マルチプレイヤーには誰も関心が無かったと分かった。
> "**if we had known that interest in the multiplayer would be so limited, we may have dropped it.**"
> → **発売前に聞いていれば避けられた。**

### 論文自身が挙げる妥当性の限界

> "(3) The authors of these postmortems may not report what actually happened during development or hide certain failures."

---

## 037. Jessica Conditt「The importance of playtesting: What Portal 2 could have been」（Engadget）

- URL: https://www.engadget.com/2012-03-08-the-importance-of-playtesting-what-portal-2-could-have-been.html
- 書いた人：Jessica Conditt
- いつ：2012-03-08
- 分野：**7（テストプレイで間違えた話）**
- **二次（GDC 2012 の Valve 講演のレポート）。一次は GDC Vault
  https://gdcvault.com/play/1015821/Creating-a-Sequel-to-a （Erik Wolpaw・Chet Faliszek）**

書き起こし：

Portal 2 の途中版で**切られたもの**：
- **ポータルそのもの**（"F-stop" という別の仕組みに置き換えていた）
- **GLaDOS**（"Betty" という膝丈の人格球に置き換えていた）
- **Chell**（名前のない金髪のキャラクターに置き換えていた）

テストの反応：
> ポータルを外した版では "players were dismayed by the lack of portals — it's _the name of the game_, guys."
> 新しい主人公については "Playtesters were disgusted and insulted by the impersonal meeting"（GLaDOS が彼女を認識しない場面について）

結果、GLaDOS もポータルも Chell も戻された。

**この記事には数値が無い。**何人がテストしたか、何回やったかは書かれていない。

---

## 038. Effie L.-C. Law, Florian Brühlmann, Elisa D. Mekler「Systematic Review and Validation of the Game Experience Questionnaire (GEQ)」

- URL: https://pure.itu.dk/en/publications/systematic-review-and-validation-of-the-game-experience-questionn/
- いつ：2018年（CHI PLAY 2018, Melbourne, pp.257-270。ACM: https://dl.acm.org/doi/10.1145/3242671.3242683 ）
- 分野：**2（何を測るか）**
- **上の URL は書誌ページのみ。要旨本文は取れなかった。**以下は検索結果からの二次

書き起こし（**二次、未確認**）：

> Despite lacking a formal peer-reviewed publication, the Game Experience Questionnaire (GEQ) is widely applied in games research, which might risk the proliferation of erroneous study implications.
> 73本の論文を体系的に調べた。
> 検証研究（**N = 633**）では、**当初に想定された7因子構造を支持する証拠は見つからなかった**。
> 心理尺度の報告が一貫していない。引用の仕方も誤解を招くもので、原典が "manuscript in preparation" のままだったことに起因するらしい。

→ **★「昔と今で変わったもの」の候補。**
アンケートで「体験」を測る道具として業界と学界で広く使われてきた GEQ が、
**そもそも査読を通っておらず、因子構造が再現しなかった。**

---

## 039. Steam Playtest（Steamworks ドキュメント）

- URL: https://partner.steamgames.com/doc/features/playtest?l=japanese
- 書いた人：Valve（Steamworks 公式文書）
- 分野：**1（規模と時機）**
- **公式文書。ただし本文は検索結果の抜粋のみで、ページ本体は未取得**

書き起こし（**二次、未確認**）：

> キー配布や外部メーリングリストの管理をせずに、プレイヤーを招いてテストできる。
> アクセスできるプレイヤー数、プレイヤーを追加する時期、テストの開始・終了の時期を制御できる。
> テスターが数人を超える場合は、キーによるベータテストではなくこちらを使う。

Steam Next Fest との関係（**二次、未確認**）：
> Playtest をやったことがある／やっているゲームも Next Fest に参加できる。
> ただし **Next Fest 中に Playtest を動かすのは推奨されない**（プレイヤーが二つのビルドに分かれるため）。
> Next Fest には demo が必須。

---

# 開けなかったもの／中身が取れなかったもの

**理由つきで全部残す。**次に調べる者はここから入るとよい。

| URL | 何を期待したか | 何が起きたか |
|---|---|---|
| https://alexiamandeville.medium.com/how-to-ignore-playtesting-feedback-to-improve-your-game-f7238af55c3f | 分野5。「どのフィードバックを無視するか」を正面から扱った記事。タイトルからして本命 | **HTTP 403 Forbidden**（Medium）。freedium 等の代替経路は試していない |
| https://www.stevebromley.com/blog/2015/01/06/some-things-ive-learned-about-moderating-playtesting-sessions/ | 分野3・4。司会の具体的な規則 | **HTTP 425 Too Early**。二回試して二回とも同じ |
| https://www.stevebromley.com/blog/2015/03/19/some-things-ive-learned-about-observing-playtesting-sessions/ | 分野4。観察の規則、観察者のバイアス一覧 | **HTTP 425 Too Early**。二回試して二回とも同じ |
| https://www.stevebromley.com/blog/2014/07/09/dont-playtest-your-game/ | 分野4。「自分のゲームを自分でテストするな」という主張の中身 | **HTTP 425 Too Early** |
| https://note.com/zkmymkz/n/n14a8f1aa79a8 | 分野5。「意見と感想の切り分け」の一次 | **HTTP 404 Not Found**。ただし検索エンジンには索引されており、`note.com/zakimiyayu` に本人のページはある。**記事が移動または削除された可能性** |
| https://smilegate.ai/en/2020/07/29/candy-crush-saga-human-like-testing/ | 分野6。024（Gudmundsson）の要約と数値 | **HTTP 503 Service Unavailable**。→ 024 の PDF 本体が取れたので不要になった |
| http://gamemodworkshop.com/readings/Playtesting_Game_Design_Workshop.pdf | 分野1〜5。Tracy Fullerton `Game Design Workshop` 第9章「Playtesting」全文 | **getaddrinfo ETIMEOUT**（ドメインが引けない） |
| https://wikis.nyu.edu/download/attachments/100635493/GameDesignWorkshop.Ch9.pdf | 同上（別経路） | **HTTP 503 Service Unavailable** |
| https://www.oreilly.com/library/view/game-design-workshop/9781482217179/K22093_C009.xhtml | 同上（O'Reilly 版） | **未試行。**要認証と思われる |
| https://www.gamesradar.com/games/action-rpg/path-of-exile-co-creator-tells-developers-dont-survey-your-players-because-your-audience-is-good-at-recognizing-problems-and-bad-at-solving-them/ | 分野5。Path of Exile 共同制作者の「アンケートを取るな」という主張 | **取得はできたが本文が途中で切れており、逐語引用ができなかった。**Rosewater の引用元だけは 018 で一次に到達した |
| https://gdcvault.com/play/1015821/Creating-a-Sequel-to-a | 分野7。Portal 2 の GDC 講演本体（037 の一次） | **未試行。**GDC Vault は動画で、本文が取れない見込み |
| https://dl.acm.org/doi/10.1145/3242671.3242683 | 分野2。GEQ 批判論文の要旨 | **未試行。**ACM DL は本文非公開の見込み。**PDF が見つかれば WebFetch → Read で読める可能性がある**（下の注記参照） |
| https://arxiv.org/pdf/2202.12777 | 分野6。029 の本文（アンケートの人数と懐疑の割合） | **未試行** |
| https://arxiv.org/pdf/1811.06962 | 分野6。030 の本文。**「メニュー操作」「クライアントの速度上限」の記述を確かめたい。依頼の核心に直結する** | **未試行。★次に調べる者は、まずここを読むこと** |
| https://arxiv.org/pdf/2307.11105 | 分野6。031 の本文（AAA で RL を運用したときの具体的な詰まり） | **未試行** |
| https://partner.steamgames.com/doc/features/playtest?l=japanese | 分野1。Steam Playtest の公式仕様 | **未試行**（検索結果の抜粋のみ使用） |
| https://cedec.cesa.or.jp/2024/session/detail/s6606a3f14db6d/ | 分野6。034 の一次（セッション概要） | **未試行**（4Gamer のレポート経由で内容を取った） |
| https://morikatron.ai/2024/09/cedec2024_qatool/ | 分野6。生成AIを使ったQAツールの日本語事例 | **未試行** |
| Tracy Fullerton `Game Design Workshop` 第9章 / Steve Bromley `How To Be A Games User Researcher` | 分野1〜5の体系。**この題でいちばん厚い二冊** | **どちらも書籍。全文は取れていない。**目次レベルの情報のみ |

---

## 道具についての注記（次に調べる者へ）

**`.claude/agents/genre-research.md` に「PDF は本文が取れない」と書いてあるが、これは正確ではない。**

手順：`WebFetch` で PDF の URL を叩くと、小さいモデルは本文を読めずに失敗するが、
**エラーメッセージの末尾に「Binary content also saved to /root/.claude/projects/.../tool-results/webfetch-XXXX.pdf」
というローカルパスが出る。そのパスを `Read` ツールで読むと、PDF の全文が取れる。**

この記録では、次の四本がその手順で取れた（**合計 80ページ超**）。

- 007（Zimmerman の Primer、7ページ）
- 014（Game Analytics 第14章、35ページ）
- 024（Gudmundsson の King 論文、8ページ）
- 026（Roohi の CHI PLAY 論文、18ページ）
- 036（Washburn の 155 postmortem 分析、10ページ）

**注意：`Read` に `pages` 引数を渡すと `pdftoppm is not installed` で落ちる。引数なしで呼ぶこと。**

**「研究の層は構造的に薄くなる」という前提は、この題については成り立たなかった。**
むしろ分野6は、研究の一次資料がいちばん厚い。
