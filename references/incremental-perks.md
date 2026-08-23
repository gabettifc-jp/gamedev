# インクリメンタルの「強化（アップグレード／パーク）」の設計

調べた日：2026-08-21／調べたのは `genre-research`（実装は読んでいない）
題であってジャンルではない。分野は呼んだ側が渡した三つ（A 解禁条件／B 構成／C 失敗）。

**生の記録。**要約していない。数値は原文のまま。引用は取得した本文に出た表現に近い形で残す。
`references/incremental-2026-08-20.md`（七分野を広く当てたもの）とは別。あちらは開いていない。

**この記録の弱点を先に書く。**
Fandom（`*.fandom.com`）が全滅（HTTP 402）、Miraheze が 403、`wiki.melvoridle.com` が 403、
`reddit.com` はクローラ自体が入れない。**インクリメンタルの有志資料はこの四つに厚く集まっている。**
代わりに wiki.gg・作品のソースコード（GitHub raw／配布物の .js）・Steam の掲示板・itch.io の講評で埋めた。
開けなかった URL は末尾に理由つきで全部残してある。

---

## A. 何を条件に強化が開くのか（解禁条件）

### A-1. Cookie Clicker：所持数 N の階段。数値がそのまま出ている

- 出どころ：The Cookie Clicker Wiki（wiki.gg）「Upgrades」
  https://cookieclicker.wiki.gg/wiki/Upgrades
- 一次性：有志 wiki だが、ゲーム内の実データを表にしたもの。一次に近い扱い。
- 分野：A

> As of version 2.058, there are "717 normal upgrades, and 13 debug upgrades" in the game.

建物強化の解禁しきい値（所持数）は、次の階段で固定されている。

> Own 1 / Own 5 / Own 25 / Own 50 / Own 100 / Own 150 / Own 200 / Own 250 / Own 300 /
> Own 350 / Own 400 / Own 450 / Own 500 / Own 550 / Own 600

カテゴリ分けは以下（原文の見出し）。

> 1. Building Upgrades (tiered upgrades, grandma types, synergies)
> 2. Income-multiplier Upgrades (Flavored Cookies, Kitten Upgrades)
> 3. Bingo Center/Research Facility upgrades
> 4. Other Upgrades: Clicking, Golden Cookie, Fortune, Miscellaneous, Easter Egg,
>    Christmas Santa, Dragon, and Heavenly Chips categories
> 5. Switches
> 6. Debug Upgrades

**解禁前の強化が見えているかどうかについては、このページは何も書いていない。**
（取得結果の原文：「The article does not explicitly state whether locked upgrades appear as visible
but unavailable to players, or remain completely hidden until unlocked.」）
→ 〔この論点は今回も相場が取れなかった。後述「相場が取れなかったもの」を見よ〕

補足：`Own 25` の型の実例として、検索結果に一件だけ具体名が出た。
「To unlock the Thousand Fingers perk, Cookie Clicker players have to first purchase 25 Cursors,
then spend 100,000 Cookies on the perk.」
（＝**解禁と購入が二段。**所持数で「店に並ぶ」だけで、買うにはさらに通貨が要る）

---

### A-2. ★Antimatter Dimensions：リセット回数そのもので開く（Eternity Milestones）

**「リセットの回数で開く強化」は実在する。これがいちばん明快な実例。**

- 出どころ：Antimatter Dimensions Wiki（wiki.gg）「Eternity Milestones」
  https://antimatterdimensions.wiki.gg/wiki/Eternity_Milestones
- 一次性：有志 wiki。ゲーム内の実データの写し。
- 分野：A

> Eternity Milestones are a quality-of-life feature unlocked on the player's first Eternity that
> unlock new things to make the player's life easier based on how many Eternities the player has,
> and work like milestones.

全表（Eternities＝これまでにエタニティ（＝二段目のリセット）を何回したか）：

| Eternities | Milestone |
|---|---|
| 1 | "Unlock an IP multiplier Autobuyer" |
| 2 | Start runs with Normal Challenges completed, Break Infinity purchased, and Dimension Autobuyers |
| 3 | "Unlock a Replicanti Galaxy Autobuyer" |
| 4 | Start runs with all Infinity Upgrades purchased |
| 5 | Unlock Big Crunch autobuyer options (Seconds between Crunches and X times highest IP) |
| 6 | "While offline, gain 25% of the highest EP per minute from previous Eternities" |
| 7 | Infinity Challenges auto-complete when unlocked; Dimensional Sacrifice Autobuyer becomes permanent |
| 8 | Start runs with all Break Infinity Upgrades purchased |
| 9 | Antimatter Galaxy Autobuyer now buys maximum |
| 10 | "Start Eternities with Replicanti unlocked" |
| 11-18 | Unlock autobuyers for Infinity Dimensions 1-8（一段につき一つ） |
| 25 | Infinity Dimensions automatically unlock at antimatter requirement |
| 30 | Start with all Antimatter Dimensions unlocked for purchase |
| 40 | Replicanti Galaxies only reset Replicanti, not normal Galaxy resets |
| 50 | "Unlock a Replicanti chance upgrade Autobuyer" |
| 60 | "Unlock a Replicanti interval upgrade Autobuyer" |
| 80 | "Unlock a Replicanti Galaxy cap upgrade Autobuyer" |
| 100 | "Unlock an Eternity Autobuyer" |
| 200 | "While offline, gain Eternities at 50% of the speed of the fastest one ever" |
| 1000 | Gain Infinities offline at 50% of highest Infinities per hour this run |

**「リセットを回すこと自体が作業にならないよう、何をしているか」への答えがこの表に全部入っている。**

- 中身が**ほぼ全部「自動化」と「初期状態の持ち越し」**である。1・3・5・9・50・60・80・100 は autobuyer、
  2・4・8・10・30 は「その状態で始まる」。つまり**回数で開くものは、次の周回の手数を減らすものに限定されている。**
- 100 で「Eternity Autobuyer」＝**リセットそのものが自動になる。**
  200・1000 は「オフライン中にリセットが進む」。
  **回数を稼ぐ作業は、回数が増えるほどプレイヤーの手から離れていく。**
- 25・30 は「解禁の手間そのもの」を消す（達したら自動で解禁される）。
- 40 の「Replicanti Galaxies only reset Replicanti」だけは自動化ではなく規則の書き換え。
- 6・200・1000 は**オフラインでの取り分。**放置時間が回数に変換される。

---

### A-3. ★Synergism：解禁条件が「リセット回数」という数値フィールドとして実装されている

- 出どころ：Synergism 本体のソース（GitHub raw）`src/singularity.ts`
  https://raw.githubusercontent.com/Pseudo-Corp/SynergismOfficial/master/src/singularity.ts
- 一次性：**一次（作品そのもののコード）。**
- 分野：A・B

`goldenQuarkUpgrades` に **90 個**の強化が定義されており、各要素が
`maxLevel` / `costPerLevel` / **`minimumSingularity`**（＝最低でも何回シンギュラリティ＝リセットを
していないと買えないか）を持つ。読み取った表（原文の値をそのまま）：

| Upgrade | Max Level | Cost/Level | Minimum Singularity |
|---|---|---|---|
| goldenQuarks1 | 15 | 12 | 0 |
| goldenQuarks2 | 75 | 60 | 0 |
| goldenQuarks3 | 1000 | 1000 | 0 |
| starterPack | 1 | 10 | 0 |
| wowPass | 1 | 350 | 0 |
| cookies | 1 | 100 | 0 |
| cookies2 | 1 | 500 | 0 |
| cookies3 | 1 | 24999 | 0 |
| cookies4 | 1 | 499999 | 0 |
| cookies5 | 1 | 1.66e15 | **209** |
| ascensions | -1（＝上限なし） | 5 | 0 |
| corruptionFourteen | 1 | 1000 | 0 |
| corruptionFifteen | 1 | 40000 | 0 |
| singOfferings1-3 | -1 / 25 / 40 | 1 / 25 / 500 | 0 |
| singObtainium1-3 | -1 / 25 / 40 | 1 / 25 / 500 | 0 |
| singCubes1-3 | -1 / 25 / 40 | 1 / 25 / 500 | 0 |
| singCitadel | -1 | 500000 | **100** |
| singCitadel2 | 100 | 1e14 | **204** |
| octeractUnlock | 1 | 8888 | **8** |
| singOcteractPatreonBonus | 1 | 9999 | **12** |
| offeringAutomatic | -1 | 1e14 | **222** |
| intermediatePack | 1 | 1 | **4** |
| advancedPack | 1 | 200 | **9** |
| expertPack | 1 | 800 | **16** |
| masterPack | 1 | 3200 | **25** |
| divinePack | 1 | 12800 | **36** |
| wowPass2 | 1 | 12500 | **9** |
| wowPass3 | 1 | 3e7-1 | **83** |
| potionBuff1-3 | 10 / 10 / 10 | 999 / 1e8 / 1e12 | **4 / 119 / 191** |
| singChallengeExtension1-3 | 4 / 3 / 3 | 999 / 29999 / 749999 | **11 / 26 / 51** |
| singQuarkImprover1 | 30 | 1 | **173** |
| singQuarkHepteract1-3 | 10 / 10 / 10 | 14999 / 449999 / 13370000 | **5 / 30 / 61** |
| singOcteractGain1-5 | -1 / 25 / 50 / 100 / 200 | 20000 / 40000 / 250000 / 750000 / 7777777 | **36 / 36 / 55 / 77 / 100** |
| platonicTau | 1 | 100000 | **29** |
| platonicAlpha | 1 | 2e7 | **70** |
| platonicDelta | 1 | 5e9 | **110** |
| platonicPhi | 1 | 2e11 | **149** |
| singFastForward1-2 | 1 / 1 | 7e6-1 / 1e11-1 | **50 / 147** |
| singAscensionSpeed1-2 | 1 / 30 | 1e10 / 1e12 | **128 / 147** |
| ultimatePen | 1 | 2.22e26 | **300** |
| halfMind | 1 | 1.66e12 | **150** |
| oneMind | 1 | 1.66e13 | **162** |
| wowPass4 | 1 | 66666666666 | **147** |
| blueberries | 10 | 1e16 | **215** |
| singAmbrosiaLuck1-4 | -1 / 30 / 30 / 50 | 1e9 / 4e5 / 2e8 / 1e19 | **187 / 50 / 119 / 256** |
| singAmbrosiaGeneration1-4 | -1 / 20 / 35 / 50 | 1e9 / 8e5 / 3e8 / 1e19 | **187 / 50 / 119 / 256** |
| singBonusTokens1-4 | 5 / 5 / 5 / 30 | 25 / 10000 / 1e8 / 1e13 | **1 / 25 / 100 / 166** |
| singInfiniteShopUpgrades | 80 | 1e18 | **233** |
| singTalismanBonusRunes1-4 | 5 / 5 / 5 / 10 | 25 / 10000 / 1e8 / 3e15 | **1 / 27 / 99 / 211** |
| favoriteUpgrade | 100 | 1 | **2** |

読み取れること（記録者の観察ではなく、表そのものが示していること）：

- **`minimumSingularity` の分布が 0 → 300 まで連続的に散っている。**特定の節目にまとめてあるのではなく、
  4・5・8・9・11・12・16・25・26・27・29・30・36・50・51・55・61・70・77・83・99・100・110・119・
  128・147・149・150・162・166・173・187・191・204・209・211・215・222・233・256・290・300 …と
  **ほぼ全域に「次に開くもの」が置いてある。**
- `singFastForward1`（minSing 50）・`singFastForward2`（minSing 147）という名前の強化が存在する。
  **「回数そのものを早送りする強化」が、回数で解禁される強化の中に含まれている。**
- `maxLevel: -1` は上限なし（段数型）、`1` は一回きり。90 個の中に両方が混在する。

---

### A-4. ★Synergism：Singularity Perks は「何回目で開く／何回目で強くなる」の列

- 出どころ：同上 `src/singularity.ts` の `singularityPerks` 配列
  https://raw.githubusercontent.com/Pseudo-Corp/SynergismOfficial/master/src/singularity.ts
- 一次性：一次（コード）
- 分野：A・B

各パークが `levels`（＝シンギュラリティ回数の配列）を持つ。読み取った一覧：

1. Welcome to Singularity — Level 1
2. Unlimited Growth — Level 1
3. Golden Coins — Level 1
4. XYZ — Levels 1, 20, 200
5. Generous Orbs — Levels 1, 2, 5, 10, 15, 20, 25, 30, 35
6. Research Dummies — Levels 1, 11
7. Recycled Content — Levels 1-10
8. Ant Gods Cornucopia — Levels 1, 30, 70, 100
9. Bring to Life — Levels 1, 9, 25, 49, 81, 121, 169, 196, 225, 256, 289
10. Token Inheritance — Levels 2, 5, 10, 17, 26, 37, 50, 65, 82, 101, 220, 240, 260, 270, 277
11. Sweepomatic — Levels 2, 101
12. Super Start — Levels 2, 3, 4, 7, 15
13. Invigorated Spirits — Levels 2, 10, 26, 50, 82, 122, 170, 197, 226, 257, 290
14. ELO Bonus — Levels 3, 11, 27, 51, 83, 123, 171, 198, 227, 258, 291
15. Not So Challenging — Levels 4, 7, 10, 15, 20
16. Auto Campaigns — Level 4
17. Automation Upgrades — Levels 5, 10, 15, 25, 30, 100
18. Even More Quarks — 50 段
19. Potion Autogenerator — Level 6
20. Persistent Global Resets — Level 8
21. Shop Special Offer — Levels 10, 50
22. For the Love of the Ant God — Levels 10, 15, 20
23. It All Adds Up — 15 段
24. Automagical Runes — Levels 15, 30, 40, 50
25. First Clear Tokens — Level 16
26. Derp Smith's Cornucopia — 16 段
27. Eternal Ascensions — Level 25
28. Exalted Achievements — Level 25
29. Cool QOL Cubes — Levels 25, 35
30. Infinite Recycling — 10 段

**`Bring to Life` の levels が 1, 9, 25, 49, 81, 121, 169, 196, 225, 256, 289 ＝ 1², 3², 5², 7², 9², 11², 13², 14², 15², 16², 17²。**
`Invigorated Spirits` はその +1、`ELO Bonus` はその +2 でずれている
（2,10,26,50,82,122,170,197,226,257,290 ／ 3,11,27,51,83,123,171,198,227,258,291）。
**同じ回数に三つ同時に来ないよう、一つずつずらしてある。**

- ここでも `Auto Campaigns`(4)・`Automation Upgrades`(5,10,15,25,30,100)・`Potion Autogenerator`(6)・
  `Sweepomatic`(2,101)・`Automagical Runes`(15,30,40,50) と、**自動化がリセット回数の報酬として置かれている。**
  A-2（Antimatter Dimensions）と同じ形。

---

### A-5. ★Realm Grinder：機能そのものが「転生回数（R番号）」で開く。作業になっていると文句が出ている

- 出どころ①：Realm Grinder Wikia「Research」の要点（検索結果経由の孫引き。**一次は fandom の Research ページで、
  今回 402 で開けなかった**）
  > Research is accessible from **R16** for Vanilla, **R23** for Neutral, **R29** for Prestige Factions,
  > **R46** for the Dragons, and **R75** for Mercenaries.
  > Your research points in each branch are **limited by the amount of Reincarnations you have**.
  > Upon abdication, your gained research points will persist, and your research slots will get reset,
  > enabling the player to make different research builds each run.
  （＝**リセット回数が、強化に注げる点数の上限そのものになっている**型）
- 出どころ②：Steam「Reincarnation reqs for unlocks: WTF?」（Realm Grinder General Discussions, 2017-07-08〜11）
  https://steamcommunity.com/app/610080/discussions/0/1457328392107228795/
- 一次性：②は遊んだ人の声＋公式 Officer の返答。一次。
- 分野：A・C

スレッドの中身：

- **M（2017-07-08）**：中核の内容が転生回数の後ろに置かれているのを "BS timewasting wall" と呼ぶ。
  bloodlines や mercenaries はもっと早く触れるべきで、
  「you shouldn't have to invest months to actually start playing」。
- **RogueFireWolf（Officer, 07-08）**：転生の仕組みは設計上必須で、これが無いと内容が一瞬で消費される、と反論。
  進行のタイムゲートに我慢できない人には放置ゲームは向かないかもしれない、とも。
- **Nico（07-08）**：転生は意味のある報酬と新機能をくれるので、無意味な作業ではない。
- **VampireKitten（07-09）**：dragons が昇天後の内容なのは意図的で、倍率が早期には無意味になるから。
- **M（07-11）**：bloodlines は "stupidly powerful" なのに R7 に置く理由が新規いじめ以外に無い、と再主張。
  つまらない時間の穴を減らすためにゲームを改造している、とも書いている。
- **DeRockProject（07-11）**：**「R7〜R16 は新しい仕組みがほとんど無い繰り返しで、
  R17 で research が開いてやっとまし（only improving when research unlocks at R17）」**と、退屈さを認めている。

**A-2 / A-3 とちょうど逆の実例。**Antimatter Dimensions と Synergism は
「回数で開くもの＝自動化と持ち越し」に限っていたが、Realm Grinder は
**「回数で開くもの＝新しい遊びの仕組み」**にしている。そして**そこが文句の出所になっている。**

---

### A-6. Universal Paperclips：解禁条件が「任意の述語関数」。所持数でも回数でもない

- 出どころ：作品本体のソース `projects.js`
  https://decisionproblem.com/paperclips/projects.js
- 一次性：**一次（作品そのもののコード）。**
- 分野：A・B

各プロジェクトは `id / title / priceTag / description / trigger / uses / cost / flag / element / effect`
というフィールドを持ち、**`trigger` は真偽を返す関数。**条件に制限が無い。

読み取れた trigger の実例（原文のまま）：

- project1 "Improved AutoClippers" — `function(){return clipmakerLevel>=1}` /（750 ops）
- project3 "Creativity" — `function(){return operations>=(memory*1000)}` /（1,000 ops）
  （＝**所持数ではなく「二つの値の比」が条件**）
- project6 "Limerick" — `function(){return creativityOn}` /（10 creat）
- project20 "Strategic Modeling" — `function(){return project19.flag == 1}` /（12,000 ops）（前提関係）
- project27 "Coherent Extrapolated Volition" — `function(){return yomi>=1}` /（500 creat, 3,000 Yomi, 20,000 ops）
- project37 "Hostile Takeover" — `function(){return portTotal>=10000}` /（$1,000,000）
- project45 "Clip Factories" — `function(){return project43.flag == 1 && project44.flag == 1}` /（35,000 ops）
  （＝**二つ揃ってはじめて出る**）
- project118 "AutoTourney" — `function(){return strategyEngineFlag == 1 && trust >= 90}` /（50,000 creat）
- project131 "Combat" — `function(){return probesLostCombat >= 1}` /（150,000 ops）
  （＝**「一度でも起きたか」というフラグ。プレイヤーが狙って作れない**）
- project140 "Message from the Emperor of Drift" — `function(){return milestoneFlag == 15}` /（priceTag 空）
- project147 "Accept" — `function(){return project146.flag == 1}` /（priceTag 空）
- project200 "The Universe Next Door" — `function(){return project147.flag == 1}` /（300,000 ops）
- project210 "Disassemble the Probes" — `function(){return endTimer1 >= 1000}` /（100,000 ops）
  （＝**経過時間（タイマー）で開く**）
- project216 "Disassemble Memory" — `function(){return project215.flag == 1 && endTimer5>=150}` /（cost null）
- project219 "Xavier Re-initialization" — `function(){return humanFlag == 1 && creativity>=100000}` /（100,000 creat）

「隠し条件・偶然見つかるもの」に当たる trigger の実例（原文のまま）：

- `return portTotal<wireCost && funds<wireCost && wire<1 && unsoldClips<1`
  （＝**詰んだときにだけ出る救済。プレイヤーが狙って出すものではない**）
- `return wireSupply >= 1500`
- `return (harvesterLevel + wireDroneLevel)>=500`（＝**二種類の合計**）
- `return probesLostHaz >= 100`（＝**損失の累計**）
- `return endTimer1 >= 1000`

**個数について、取得のたびに違う数が出た。**一度目は「70 project objects」、
二度目は「67 entries of the form "var projectNNN = {"」で、しかし列挙された id は
1,2,3,4,5,6,7,8,9,10,10b,11,12,13,14,15,17,16,18,19,20,21,22,23,24,25,26,34,35,70,27,28,29,30,31,41,
37,38,42,43,44,45,40,40b,46,50,51,60,61,62,63,64,65,66,100,101,102,110,111,112,118,119,120,121,125,
126,127,128,129,130,131,132,133,134,135,140,141,142,143,144,145,146,147,148,200,201,210,211,212,213,
214,215,216,217,218,219 の **96 個**だった。
**総数は確定できていない。**id が飛び飛び（26 の次が 34, 35, 70 で、そのあと 27 に戻る）で、
`10b` `40b` のような後付けの枝番があることは確か。**id の順＝定義の順ではない。**

---

### A-7. Kittens Game：前提関係だけで組んだ木。回数も所持数も使っていない

- 出どころ：Kittens Game 本体のソース `js/prestige.js`（GitHub raw）
  https://raw.githubusercontent.com/nuclear-unicorn/kittensgame/master/js/prestige.js
- 一次性：**一次（作品そのもののコード）。**
- 分野：A・B

**52 個**の prestige（メタフィジックス）パークが定義されている。
解禁条件は「Default unlocked」か「Requires ◯◯」のどちらかだけ。**所持数・回数・時間は使っていない。**
読み取れた分（原文の name と価格）：

| Name | Price | Prerequisite |
|---|---|---|
| engeneering | 5 paragon | Default unlocked |
| codexVox | 25 | engeneering |
| codexLogos | 50 | codexVox |
| codexAgrum | 75 | codexLogos |
| megalomania | 10 | engeneering |
| blackCodex | 25 | megalomania |
| codexLeviathanianus | 75 | codexLogos |
| goldenRatio | 50 | engeneering |
| divineProportion | 100 | goldenRatio |
| vitruvianFeline | 250 | divineProportion |
| renaissance | 750 | vitruvianFeline |
| diplomacy | 5 | Default unlocked |
| zebraDiplomacy | 35 | diplomacy |
| zebraCovenant | 75 | zebraDiplomacy |
| navigationDiplomacy | 300 | zebraCovenant |
| ambassadors | 100 | diplomacy |
| treaties | 500 | ambassadors |
| chronomancy | 25 | Default unlocked |
| astromancy | 50 | chronomancy |
| unicornmancy | 125 | chronomancy |
| alicornmancy | 200 | unicornmancy |
| anachronomancy | 125 | chronomancy |
| carnivals | 25 | Default unlocked |
| numerology | 50 | carnivals |
| willenfluff | 150 | numerology |
| pawgan | 400 | willenfluff |
| numeromancy | 250 | numerology |
| malkuth | 500 | numeromancy |
| yesod | 750 | malkuth |
| hod | 1250 | yesod |
| netzach | 1750 | hod |
| tiferet | 2500 | netzach |
| gevurah | 5000 | tiferet |
| chesed | 7500 | gevurah |
| binah | 15000 | chesed |
| chokhmah | 30000 | binah |
| keter | 60000 | chokhmah |
| voidOrder | 75 | numerology |
| adjustmentBureau | 5 | Default unlocked |
| ascoh | 5 | adjustmentBureau |

（**52 と申告されているが、読み取れた行は 40。**残り 12 は取得に入らなかった。数の不一致をそのまま残す）

形の特徴：

- **根が 5 つ**（engeneering / diplomacy / chronomancy / carnivals / adjustmentBureau）。
  すべて 5〜25 paragon の安価な入口。
- **枝の深さがまちまち。**adjustmentBureau→ascoh は 2 段で終わるのに、
  carnivals→numerology→numeromancy→malkuth→yesod→hod→netzach→tiferet→gevurah→chesed→binah→chokhmah→keter は
  **13 段。**しかも価格が 25 → 50 → 250 → 500 → 750 → 1250 → 1750 → 2500 → 5000 → 7500 → 15000 → 30000 → 60000 と、
  **後半はほぼ倍々。**（＝一本の枝の中で、序盤の枝と終盤の枝が三桁ちがう）
- 「Burned paragon」（燃やした paragon）は別のプールとして持たれ、
  > The system calculates production ratios based on burned paragon value with diminishing returns,
  > and storage bonuses scale differently during "dark future" periods.

---

### A-8. Cookie Clicker：リセット通貨の式と「持ち越し枠」

- 出どころ：The Cookie Clicker Wiki（wiki.gg）「Ascension」
  https://cookieclicker.wiki.gg/wiki/Ascension
- 分野：A・B

> The ratio between Prestige Levels gained and Heavenly Chips gained is 1:1.

> prestige grants the difference between the old prestige and (x/1trillion)^(1/3)
> where x is the amount of cookies baked all time

> Each prestige level provides "+1% boost to CpS"（加算で積む）

前提関係は在る：

> The upgrade tree features prerequisite dependencies. For example, "Archangels" requires "Angels"
> purchased first.

**Permanent upgrade slot（持ち越し枠）：**

> Five purchasable slots exist (I through V, costing 100 to 50 billion heavenly chips).
> "Placing an upgrade in this slot will make its effects permanent across all playthroughs."
> Importantly, these slots cannot hold research upgrades, heavenly chips upgrades, or switches.

（＝**強化そのものではなく「どの強化を次の周にも持っていくか」を選ばせる枠が 5 つ。**
717 個の中から 5 個を選ぶ形。除外規則が明示されている）

このページも**解禁前の強化が見えているかどうかには触れていない。**

---

### A-9. Cookie Clicker：昇天側の強化の全表（79 個）

- 出どころ：Unofficial Cookie Clicker Mobile Wiki「Heavenly Upgrades」
  https://nmexis.me/CookieClickerMobileWiki/heavenly.html
- 一次性：有志のデータ写し。**モバイル版基準**なので PC 版と数が食い違う可能性がある（後述）。
- 分野：A・B

**合計 79 個。**価格（heavenly chips）と効果が全部載っている。抜き書き：

| 名 | 価格 | 効果 |
|---|---|---|
| Legacy | 1 | heavenly chips の仕組みそのものを開く（＝**木の根が 1 で買える**） |
| Power clicks | 1 | power clicks トグルを開く |
| Heavenly cookies | 3 | "Cookie production multiplier +10% permanently" |
| How to bake your dragon | 9 | 100万クッキー後に crumbly egg を買えるようにする |
| Classic dairy selection | 9 | ミルクセレクタ（基本味） |
| Heavenly luck | 77 | Golden cookies appear 5% more often |
| Permanent upgrade slot I | 100 | 持ち越し枠 |
| Persistent memory | 500 | "Subsequent research will be 10 times as fast" |
| Season switcher | 1,111 | 季節イベントを任意に起動できる |
| Angels | 7 | power clicks が 28分ごと、上限10 |
| Belphegor | 7 | power clicks が 3倍、15秒間 +6% |
| Basic wallpaper assortment | 99 | 背景セレクタ（**見た目だけ**） |
| Lasting fortune | 777 | Golden cookie effects last 10% longer |
| Golden switch | 999 | "Passively boosts your CpS by 50% but disables golden cookies" |
| Permanent upgrade slot II | 2,000 | 持ち越し枠 |
| Label printer | 5M | 強化の階層情報を見られる（**cosmetic only**） |
| Starspawn / Starsnow / Starterror / Starlove / Startrade | 各 111,111 | 季節ごとの落下率 |
| Archangels | 49 | power clicks 26分ごと、上限15 |
| Mammon | 49 | power clicks 4倍、20秒 +7% |
| Starter kit | 50 | Start with 10 cursors |
| Decisive fate | 7,777 | Golden cookies stay 5% longer |
| Residual luck | 99,999 | Golden switch が golden cookie 強化1個につき +10% CpS |
| Permanent upgrade slot III | 30,000 | 持ち越し枠 |
| Unshackled flavor | 10M | "Unshackles all Plain-tier upgrades, making them more powerful" |
| Keepsakes | 1.1B | 季節の落し物が 1/5 の確率で昇天を越える |
| Virtues | 343 | power clicks 24分ごと、上限20 |
| Abaddon | 343 | power clicks 5倍、25秒 +8% |
| Starter kitchen | 5,000 | Start with 5 grandmas |
| Halo gloves | 55,555 | クリックが 10% 強い |
| Divine discount | 99,999 | 建物が 1% 安い |
| Divine sales | 99,999 | 強化が 1% 安い |
| Permanent upgrade slot IV | 400,000 | 持ち越し枠 |
| Dominions | 2,401 | power clicks 22分ごと、上限25 |
| Satan | 2,401 | power clicks 6倍、30秒 +9% |
| Five-finger discount | 555,555 | "All upgrades are 1% cheaper per 100 cursors" |
| Unholy bait | 44,444 | Wrinklers が 5倍速で出る |
| Divine bakeries | 399,999 | クッキー強化が 5倍安い |
| Fortune cookies | 77.8B | ニュース欄に押せる当たりが出る |
| Permanent upgrade slot V | 5M | 持ち越し枠 |
| Kitten angels | 9,000 | ミルク量に応じて CpS |
| Cherubim | 16,807 | power clicks 20分ごと、上限30 |
| Asmodeus | 16,807 | power clicks 7倍、35秒 +10% |
| Synergies Vol. I | 222,222 | 2建物にまたがる synergy 強化を開く（**各15個所持が要る**） |
| Synergies Vol. II | 2.2M | 同上（**各150個所持**） |
| Sacrilegious corruption | 444,444 | Wrinklers の吐き戻しが +5% |
| Elder spice | 444,444 | Wrinklers が 2匹増える |
| Kitten wages | 9B | kitten 強化が 10% 安い |
| Seraphim | 117,649 | power clicks 18分ごと、上限35 |
| Beelzebub | 117,649 | power clicks 8倍、40秒 +11% |
| Wrinkly cookies | 6.7M | "+10% permanently" |
| God | 823,543 | power clicks 16分ごと、上限40 |
| Lucifer | 823,543 | power clicks 9倍、45秒 +12% |
| Chimera | 40.4M | synergy 強化が 2% 安い／power click buff から +3% |

**Angels 系（7 / 49 / 343 / 2,401 / 16,807 / 117,649 / 823,543）と
Demons 系（Belphegor / Mammon / Abaddon / Satan / Asmodeus / Beelzebub / Lucifer）が、
まったく同じ価格列（7 の冪：7¹〜7⁷）で二本並んでいる。**片方が「間隔を詰める」、
もう片方が「一発を強くする」。**排他ではなく、両方買える二本の梯子。**

「Unshackled ◯◯」の列は、建物 17 種ぶんが順に並び、効果が
+180%（farms）→ +170%（mines）→ +160%（factories）→ +150%（banks）→ +140%（temples）→
+130%（wizard towers）→ +120%（shipments）→ +110%（alchemy labs）→ +100%（portals）→
+90%（time machines）→ +80%（antimatter condensers）→ +70%（prisms）→ +60%（chancemakers）→
+50%（fractal engines）→ +40%（javascript consoles）→ +30%（idleverses）→ +20%（cortex bakers）→
+10%（You）と、**建物の階層が上がるほど倍率が下がる。**
（価格は逆に 32.8B → 19.2Qa と上がり続ける）

**この 79 という数は、A-1 の「717 normal upgrades」とは別勘定。**
出どころが違う（モバイル版の有志 wiki）ので、PC 版の heavenly upgrade の総数とは限らない。

---

### A-10. 昇天の順序と「必要チップの累計」

- 出どころ：The Cookie Clicker Wiki（wiki.gg）「Ascension guide」
  https://cookieclicker.wiki.gg/wiki/Ascension_guide
- 分野：A

> The upgrades in each ascension are listed from **most to least important**, with upgrades
> required to get an important upgrade in the Prerequisites column.

周ごとに要るチップの累計：

- Ascension 1: 365
- Ascension 2: 2 185
- Ascension 3: 12 301

（＝**一周ごとに約6倍。**A-8 の prestige 式が cbrt（三乗根）なので、
チップを6倍にするには累計クッキーを 6³＝216倍にする必要がある、という関係になる）

このガイドも**解禁前の強化が画面に見えているかどうかは書いていない。**

---

### A-11. Melvor Idle：「達成率のパーセント」で開く型（※二次情報どまり）

- 出どころ：検索結果に出た wiki.melvoridle.com の抜粋（**本文は 403 で開けなかった。二次情報**）
  一次は https://wiki.melvoridle.com/w/Mastery（開けず）
- 分野：A

> Each individual item within the game has its own Mastery Level attached, with the maximum
> Mastery Level being **99**.
> Every Mastery Pool has **four Checkpoints**, and upon reaching these you will unlock a passive
> bonus. These checkpoints are reached at **10%, 25%, 50% & 95%** respectively.
> Skills levels unlock milestones: new items to craft/equip/extract.
> Reaching Skill Level 99 is classed as a Milestone.

**解禁前のものが見えるかどうかについて、唯一これだけ手掛かりが出た：**

> You can find the list of things to unlock by clicking on the icon displaying a medal in the
> bottom right corner of the screen.
> said bonus can be found by clicking on the "View Checkpoints" button in the top right corner

（＝**「これから開くもの」を専用のボタンで一覧できる。**ただし本文未確認）

「95%」というしきい値が入っているのが特徴。**最後の一つ手前で最後の報酬をやる**形になっている
（100% ではない）。

---

### A-12. 小規模作品での実例：解禁条件を「遊べば自然に満たす」ように置く

- 出どころ：Cat Clicker 開発日誌「upgrades people」（2024-03-13）
  https://abordaj-games.itch.io/cat-clicker/devlog/698987/upgrades-people
- 一次性：**一次（作り手本人）。**
- 分野：A・C

> they all have specific unlock requirements (buying the second pipe, buying things at the shop,
> getting a decent combo) but I am pretty sure you will be able to unlock them by simply playing
> the game

この更新で足したのは **4 個**の強化。作り手が強化に求めているものも書いてある：

> a combo meter that makes collecting multiple cats with an explosion or a sniper trickshot feel
> much cooler

（sniper cat の強化には手動照準モードと跳弾がついている＝**強化が「数値」ではなく「操作」を足している**）

抱えている問題：

> it's playable and beatable, but there are annoying bugs, that I will try my best to purge next update

---

### A-13. 日本語圏：リセット回数に応じた特典、という言い方が実際に流通している

- 出どころ：「最近やった放置ゲー・クリッカー・インクリメンタルゲーム。終わりがないのが終わり。」
  （kirmav, 2025-01）
  https://kirmav.blogspot.com/2025/01/recently-played-incremental-games.html
- 一次性：遊んだ人の記録。
- 分野：A・C

- **Universe Shrinker**：
  > ユニバースを潰したら次はマルチバース。マルチバースを潰したら今度はギガバースという感じで階層構造がわかりやすく
  > **これまでに潰した宇宙の数に応じて特典もあるぞ！**

  （＝**リセット回数そのものが報酬の源になっている実例。**A-2/A-3 と同型で、日本語で言い当てられている）

- **NGU Idle**：
  > 成長要素の数がすごいことになっており、ファンメイドの攻略Wikiには**939ページ**の記事が存在している。

- **Revolution Idle**：
  > 桁違いに強くなるタイミングが何度も用意されている
  > きみもインフィニティしたのをエタニティしたのをダイレーションで遅くしたのをスーパーノヴァで加速しよう！

- **Idle Sphere**：
  > リセットして強くなる（ありがちのやつ）が超対称性崩壊という名前だったりと

---

## B. 強化の構成（形）

### B-1. Antimatter Dimensions：48 ノードの「輪のある木」。取り直し不可

- 出どころ：Antimatter Dimensions Wiki（wiki.gg）「Perks」
  https://antimatterdimensions.wiki.gg/wiki/Perks
- 分野：B

> There are **48 perks total** in the game, with **21 of them providing Automator Points** in
> addition to their standard effects.

> Players gain **one Perk Point after every Reality reset**, beginning with the START perk.

> "The player can only unlock Perks that are **directly adjacent** to the ones the player already
> has, although **there are loops in the tree** that they can go through in either direction."

> "**Unlike the Time Study tree, the choices are permanent and cannot be respecced.**"

> Perks come in two shapes: **Circular nodes** provide their primary effect only;
> **Diamond-shaped nodes** provide their primary effect plus Automator Points.
> Each perk costs exactly **one Perk Point**.

名前の付いているもの（読み取れた分）：

- **START**：達成条件（achievement requirement）を外し、Reality 時のグリフ選択を与える
- **SAM**：リセット開始時に 5e130 の反物質
- **SEP1/SEP2/SEP3**：Reality 開始時の Eternity Point を段階的に増やす
- **EU1/EU2**：Eternity Upgrade を自動で解禁
- **PEC1/PEC2/PEC3**：Eternity Challenge を **60分／40分／20分**ごとに自動完了
- **ACH1〜ACHNR**：達成のタイマー要件を段階的に短縮

形として効いている点：

- **通貨が「1リセット＝1点」の整数。**通貨をどれだけ稼いだかではなく、**何回やったかが直接の予算になる。**
- 隣接制限があるので**取る順番が経路になる。**ただし輪があるので、
  同じノードに二方向から到達できる＝**順番が一意に決まらない。**
- **取り直しが無い。**48 個を全部取れば同じ形に収束するので、
  「取り直し不可」が意味を持つのは**途中の順番だけ。**（この点は明示されていない。記録者の読み）
- **48 個中 21 個（44%）が「別軸の通貨（Automator Points）も出す」二重の報酬。**
  形（丸／菱形）で見分けられるようにしてある。

---

### B-2. Antimatter Dimensions：Time Study 木。排他の分岐と、全額返る取り直し

- 出どころ：Antimatter Dimensions Wiki（wiki.gg）「Time Studies」
  https://antimatterdimensions.wiki.gg/wiki/Time_Studies
- 分野：B

> The Time Studies feature contains numerous studies arranged in a "tree-like fashion, where a
> previous time study is required to purchase another."
> （表は ID **11 から EC12** までを並べている。総数は明示されていない）

**排他の分岐が三種類ある：**

1. **Dimension Split**：Studies **71 (Antimatter) / 72 (Infinity) / 73 (Time)**。
   > "Initially, you may only have **one dimension split and one pace split at a time**,"
   > though later upgrades allow bypassing this. **Study 201** permits picking "a second path from
   > the Dimension Split."
2. **Pace Split**：Studies **121 (Active) / 122 (Passive) / 123 (Idle)**。同じく初期は一つだけ。
3. **Dark/Light Pairs**：
   > "**Only one study in each dark/light pair can be chosen.**"
   > 221 (Light) と 222 (Dark) が一組。**223/224、225/226、227/228** も同様。

**取り直し：**

> "The player can respec a tree, which **refunds all spent Time Theorems** and allows the player to
> pick different studies."（**代償はこのページには書かれていない**）

**通貨（Time Theorems）は三つの資源から買える。それぞれ別の逓増率を持つ：**

- Antimatter：initial cost of **e20000**、scaling multiplier **×e20000**
- Infinity Points：initial cost of **1 IP**、scaling multiplier **×e100**
- Eternity Points：initial cost of **1 EP**、scaling multiplier **×2**

> "Time Theorems **persist through Eternity resets**."

（＝**同じ強化通貨に三つの入口があり、逓増の速さが三桁ちがう。**
序盤は EP（×2）で買い、行き詰まったら他へ移る、という形になる）

**B-1 と B-2 が同じゲームの中で正反対の設計になっている点は重要：**
Perk 木は「一回きり・取り直し不可・1リセット1点」、Time Study 木は「排他・取り直しは全額返る・通貨で買う」。

---

### B-3. Trimps：割り振り型のパーク。取り直しは一周に一回、罰なし

- 出どころ：Trimps Wikia「Portal#Respec」「Perks」「Guide:Perk Analysis and Strategy」
  （**本文は 402 で開けず。検索結果経由の抜粋なので二次情報**）
  一次は https://trimps.fandom.com/wiki/Portal#Respec と https://trimps.fandom.com/wiki/Perks
- 分野：B

> Perks are first unlocked when the player uses the Portal for the first time, and can be assigned
> helium through the Portal screen.

> It is possible to **respec only once per run, with no penalties whatsoever**.
> There is **no Helium loss** by respeccing perks - you get a **100% return on each removed level**.

> To get another respec after using one, the player has to use the Portal to soft reset their game,
> or **purchase a Bone Portal from the Bone Trader**.

> After the Respec button is pressed, a new button called "Remove" is added to the amount selector.
> You can toggle this button to take off levels from specific perks and potentially assign them elsewhere.

段数型の値段の付け方（**逓増率を「1%あたりの単価」で正規化している**）：

> For perks with multiplicative gains (such as Carpentry), the Cost/% formula is:
> **Cost / ((1 + (Level * %)) / (1 + ((Level-1) * %)) - 1)**

個々のパークの性格（同ガイドより）：

> **Carpentry:** You should sink at least half of your helium into carpentry, as it gives you more
> workers and increases breed speed, loot and production.
> **Toughness:** Toughness affects health.
> **Looting:** Looting is special, as it is a **direct multiplier to helium gained**.
> In the early mid-game, the best perks are **Coordinated, Carpentry, Resilience, and Artisanistry**,
> with Looting being special ... could be considered best after those ones.

（＝**強化通貨そのものを増やす強化が一つ混ざっている**型。
「Looting は特別」と名指しされている。全パーク一覧は取得できていない）

**取り直しの相場として、この作品は「一周に一回・全額返る・追加は有料アイテム（Bone Portal）」。**
B-2（全額返る、回数制限は不明）とも、B-1（取り直し不可）とも違う三つ目の型。

---

### B-4. Antimatter Dimensions：ランダムに配られる型（Glyphs）

- 出どころ：Antimatter Dimensions Wiki（wiki.gg）「Glyphs」
  https://antimatterdimensions.wiki.gg/wiki/Glyphs
- 分野：B

> **"Every Reality reset, you gain 1 glyph."** With the START perk, "you can choose **1 glyph out of
> 4 different choices** (later increased to **8** through a Ra milestone)."

> When making choices, **all Glyphs presented will have a unique type.**
> （＝ランダムだが**同じ種類は出さない**。選択肢が潰れないようにしてある）

種類：

> There are **nine glyph types** total: five initial types (Power, Infinity, Time, Replication,
> Dilation), three unlocked during progression (Effarig, Cursed, Reality), and one cosmetic type
> (Companion).

レア度の生成（原文の式）：

> Rarity uses an internal "strength" value ranging from **1 to 3.5**, converting to 0-100% rarity
> via: **"40*(Strength−1)"**. The generation formula is **"(|x|+1)^0.65"** where x follows a normal
> distribution with mean 0 and standard deviation 1.

> The **Disparity of Rarity** upgrade multiplies generated strength by **1.3**, making the formula
> "1.3*(|x|+1)^0.65". This raises minimum rarity from **0% to 12%** and makes 100% rarity achievable
> at roughly **"1/3,014 chance" instead of 1/231 million**.

（＝**乱数の裾を強化で切る。**「最悪が出なくなる」「最良が 7万倍出やすくなる」という形の強化）

> "Achievement 146 adds **1%** to the final glyph rarity value"

効果の個数：

> "The amount of effects that a glyph has is decided by its level and rarity. The formula is
> **1.5*(x^(1−level*strength/100))+1**" rounded down.
> The **Duplicity of Potency** upgrade grants "**50% chance** of getting an extra effect."
> Effects range from **1-2 below level 10,000** (or 1-3 with upgrade), and **2+ effects above level 10,000**.

装備の代償：

> "replacing or removing a glyph from an equipped slot will **restart your Reality**."
> （＝**付け替えに周回のやり直しという代償がある。**取り直しの一形態）

犠牲（sacrifice）：

> "When the Reality Upgrade **Scour to Empower** is purchased, Glyphs can be sacrificed."
> Base sacrifice value uses: **"(min(level,10000)+10)^2.5*(1+max(level−10000,0)/100)*(1+(rarity/40))"**
> Caps vary: "five basic Glyph types reach their cap at **1e100** Sacrifice, Effarig reaches its cap
> at **1e70** Sacrifice."

---

### B-5. Realm Grinder：排他の陣営。取り直しはリセットでのみ

- 出どころ①：Steam ガイド「Realm Grinder: Factions」（PennDragon.Inc, 2018-11-15）
  https://steamcommunity.com/sharedfiles/filedetails/?id=1565440672
  **※このガイドは未完成。**「How to Unlock the Dwarf Alliance」等の見出しだけがあって中身が無く、
  2020〜2025 のコメントで「6年以上放置されている」と指摘されている。**数値は取れなかった。**
- 出どころ②：検索結果に出た Realm Grinder Wikia「Factions」の抜粋
  （**一次は https://realm-grinder.fandom.com/wiki/Factions で 402。二次情報**）
- 分野：B

> Factions represent the core progression mechanic of Realm Grinder, dictating the available
> **upgrades, spells, and building bonuses** for a given abdication.

> **Good Factions** are oriented to a more **Active** game-play, focusing on Spells and Treasure
> Clicks ... they are **Fairy, Elf, and Angel**.
> **Evil Factions** are oriented to a more **Idle** game-play, focusing on steady and passive
> building production ... they are **Goblin, Undead, and Demon**.
> **Neutral Factions** were added in the Ancient Races expansion. They cover a mixture of both
> active and passive game-play and may offer faster advancement.
> **Prestige Factions** enable the player to combine the powers from both factions, giving
> combinations such as **Dwairy** for Fairy-Dwarf, **Droblin** for Goblin-Drow, or **Dragtan** for Dragon-Titan.
> **Mercenaries**: By choosing a Mercenary Badge and a Secret Exchange, players can **hand-pick
> twelve upgrades and one spell** from the Good, Evil, and Neutral pools.

> Each Faction has its own Faction-specific spell and **3x4 Tier upgrades** (or **4x4 for mercenaries**).

> Faction alliances will be **reset when you abdicate**, allowing you to switch alignments and affiliations.

（＝**排他かつ、取り直しの単位が「周」。**周の中では変えられない。
そして最終形として「12個を自分で選ぶ（Mercenaries）」＝**排他を解除する強化**が用意されている。
A-5 によれば Mercenaries が開くのは **R75**）

---

### B-6. 段数型と一回きりの配分：実数で見える三例

| 作品 | 一回きり | 段数型（複数回買える） | 出どころ |
|---|---|---|---|
| Antimatter Dimensions（Perks） | **48個すべて**（各1 Perk Point） | 無し | B-1 |
| Kittens Game（Metaphysics） | **52個すべて**（各1回） | 無し | A-7 |
| Synergism（Golden Quark upgrades） | `maxLevel: 1` のもの多数 | `maxLevel: -1`（上限なし）が `ascensions` `singOfferings1` `singObtainium1` `singCubes1` `singCitadel` `offeringAutomatic` `singOcteractGain1` `singAmbrosiaLuck1` `singAmbrosiaGeneration1` など。他に 5 / 10 / 15 / 20 / 25 / 30 / 35 / 40 / 50 / 75 / 80 / 100 / 200 / 1000 段のものが混在 | A-3 |
| Cookie Clicker | 強化 **717個すべて一回きり**（建物のほうが段数型） | 建物のみ | A-1 |
| Trimps（Perks） | 無し（全部レベル制） | **全部が段数型。**helium を振り分ける | B-3 |

**＝「一回きり」と「段数型」を混ぜている作品（Synergism）と、どちらか一方に振り切っている作品
（AD・Kittens は全部一回きり／Trimps は全部段数）が、はっきり分かれている。**

---

### B-7. 相互作用（AをとるとBが強くなる）の実例

- **Cookie Clicker「Residual luck」（99,999 chips）**：
  「Golden switch gains **+10% CpS per golden cookie upgrade owned**」
  ＝**別の強化を何個持っているかが、この強化の強さになる。**（A-9）
- **Cookie Clicker「Five-finger discount」（555,555 chips）**：
  「All upgrades are **1% cheaper per 100 cursors**」＝**所持数が強化の値段に効く。**（A-9）
- **Cookie Clicker「Chimera」（40.4M）**：「synergy 強化が 2% 安い／power click buff から +3%」
  ＝**二つの系統をまたいで効く。**（A-9）
- **Cookie Clicker「Synergies Vol. I / II」**：
  synergy 強化そのものが「2つの建物を各 **15個**（Vol.II は各 **150個**）持っていること」を条件にする。（A-9）
- **Universal Paperclips project45 "Clip Factories"**：
  `project43.flag == 1 && project44.flag == 1` ＝**二つ揃ってはじめて三つ目が出る。**（A-6）
- **Antimatter Dimensions Time Study 201**：
  Dimension Split の**二本目**を取れるようにする＝**排他の規則そのものを緩める強化。**（B-2）
- **Antimatter Dimensions Glyphs「Disparity of Rarity」「Duplicity of Potency」**：
  **ランダム生成の分布を書き換える強化。**（B-4）

---

### B-8. 所持数に報酬を紐づける、という定石（作り手側の言い分）

- 出どころ：Anthony Pecorella（Kongregate）"Quest for Progress: The Math and Design of Idle Games"
  GDC Europe 2016、スライド PDF
  https://media.gdcvault.com/gdceurope2016/presentations/Pecorella_Anthony_Quest%20for%20Progress.pdf
  （**WebFetch はエラーになるが、エラー文末尾のローカルパスを `Read` に渡すと全59ページ取れる**）
- 一次性：**一次（講演者本人のスライド）。**
- 分野：B・C

スライド46「Keeping All Generators Relevant」：

> A common problem is keeping smaller generators relevant to the player
> – Production is generally dwarfed, especially with exponential growth of cost
> – This is an even bigger problem for derivative-style growth

スライド47：

> Do you care if lower generators are relevant for your players?
> – It adds a layer of complexity to both game balance and player understanding and may not be
>   necessary depending on your target audience, play style goals, and other elements

スライド48「Possible Solutions」：

> – Aggressive multipliers to force relevance
> – **Base bonuses on ownership of these generators**
>   • Even if direct generation is low, **impact of purchasing is high**
>     – Example: Newspapers in AdVenture Capitalist multiply other investments
>   • Note: track purchased and earned generators separately in derivative growth systems

スライド49：

> – Tie prestige currency to ownership
>   • **Clicker Heroes gives one prestige currency for every 2000 generators owned**
> – Use ownership multipliers to compound on cheaper generators
>   • **Clicker Heroes gives a x4 bonus for every 25 of a generator**

**＝「Own 25 で強化が開く」という Cookie Clicker 型の定石には、
「小さい生成器を捨てさせないため」という理由が実際に語られている。**（A-1 の型の理由がここに在る）

スライド16-17「Multiplier」：

> Typically a fixed multiple on a generator, or set of generators, in terms of production value or speed
> – These help offset cost growth speed
> – **Provide bumps and local victories**
> More complex ones might have dependencies on:
> • Its target (e.g. this generator count)
> • Other generators (e.g. total generator count)
> • **Meta statistics (e.g. total time played, count of lifetime skills used, lifetime currency
>   earned, seconds since last reset, etc.)**
> • **External data (e.g. time of day, holidays/events, concurrent player count, etc.)**

（＝**解禁条件・強化条件に使える軸の一覧がここに列挙されている。
「経過時間」「前回リセットからの秒数」「同時接続数」まで含む**）

スライド20「Prestige Currency」：

> In some cases this currency can also be spent for boosts (**at the loss of the relative Prestige
> Currency boost**)

（＝Kittens Game の「burned paragon」型。**強化に使うと、持っているだけで効く倍率が減る**という
二者択一が、2016年時点で相場として語られている）

スライド21-22「Idle Player Motivation Profile」：

> Quantic Foundry surveyed players of 3 idle games
> **70% identified as "core gamers", 20% as "hardcore"**
> Top motivators were **Completion and Power**
> – Power growth is central to the genre but you want to make sure players **"feel" that growth**
> – **Can you incorporate collection or completionism into your idle game design?**

スライド50-51「Prestige Cycles」：

> Common rule of thumb is to reset when you would gain somewhere in the range of **+50% to +200%**
> prestige currency
> Take a log or a fractional exponent (like square root) to scale back growth rates
> Do you want the cycles to get faster, slower, or vary?
> – Faster: players will shift prestige point to be a lot higher
> – **Slower: could get tiresome, must have a meta prestige too**
> – **Varied: prestige provides surprises, harder to design**

スライド53：所持数ボーナス（非累積）の実例表

| Count | Bonus |
|---|---|
| 25 | 2 |
| 50 | 2 |
| 100 | 4 |
| 200 | 4 |
| 300 | 8 |
| 400 | 8 |
| 500 | 16 |
| 600 | 16 |
| 700 | 32 |

> Zooming out we can see a lot of variation in time to prestige

（＝**同じ倍率を二回ずつ置いて、次で倍にする階段。**
Cookie Clicker の Own 50/100/150/200… とは刻みが違う）

---

### B-9. リセット通貨の式：四作品の実データ

- 出どころ：Anthony Pecorella "The Math of Idle Games, Part III"（Game Developer, 2017-02-01）
  https://www.gamedeveloper.com/design/the-math-of-idle-games-part-iii
- 一次性：一次（著者本人の記事）
- 分野：B

- **Realm Grinder（Max Earnings 基準）**：`p = (sqrt(1 + 8*(c_M/10^12)) - 1) / 2`
  → 「requiring players to earn roughly **4x** previous earnings to double prestige currency」
- **AdVenture Capitalist（Lifetime Earnings 基準）**：`p = 150*sqrt(c_L/10^15)`
  → 「players can **reset repeatedly at the same point and still gain currency** with diminishing returns」
- **Cookie Clicker（Lifetime Earnings 基準）**：`p = cbrt(c_L/10^12)`
  → 「requiring approximately **8x** earnings multiplication to double prestige currency」
- **Egg, Inc.（Current Run Earnings 基準）**：`Δp = (c_R/10^6)^0.14`
  → 「demanding **128x** previous run earnings to double currency」

> you likely want to have similar variation in your prestige resets too
> multiplier milestones create "**bumps of rapid purchases**" that inject momentum into otherwise
> linear advancement patterns

**基準が三種類ある：**「今回の最高到達額（Realm Grinder）」「通算（AdCap・Cookie Clicker）」
「今回の稼ぎ（Egg, Inc.）」。**通算基準だと同じ地点で何度もリセットしても増えてしまう**（AdCap）。

---

## C. うまくいっていない強化の設計

### C-1. 「リセット回数で機能を出す」ことへの、遊んだ人の文句

- 出どころ：Steam「Reincarnation reqs for unlocks: WTF?」（Realm Grinder, 2017-07-08〜11）
  https://steamcommunity.com/app/610080/discussions/0/1457328392107228795/
- 分野：C（内容は A-5 に全文。要点だけ再掲）

- "BS timewasting wall" / "you shouldn't have to invest months to actually start playing"（M）
- **「R7〜R16 は新しい仕組みがほとんど無い繰り返しで、R17 で research が開いてやっとまし」**（DeRockProject）
- 運営側（Officer）の反論：「これが無いと内容が一瞬で消費される」

**A-2（Antimatter Dimensions）が回数の報酬を自動化に限定していることと、真正面からぶつかる。**

---

### C-2. 「140時間やってこれ」：強化一つあたりの取り分が薄すぎる

- 出どころ：Steam「This is a VERY ultra slow game (140 hours in)」（Idle Sphere, 2024-11-30〜12-01）
  https://steamcommunity.com/app/3217600/discussions/0/4625855673285012919/
- 一次性：遊んだ人の声。一次。
- 分野：C

- **ISeeTheSorrow（2024-11-30 9:26am）**：140時間で、報われるのが "1.5XP boost" 程度。
- **Chance upgrades**：「expensive, rarest resource」で失敗率が高い。48/50 まで来ているが
  「**doubles in price each time**」。
- **Battle Area 4**：「can only exist to troll the player」。
  命中率のステータスが **31M** あるのに命中 **0.17%**。
- **Agency の進行**：#242 で #249 のために休めるが、
  「that will undo tons of progress for less Agency I will generate in an hour anyway」
  （＝**リセットの取り分が、リセットで失うものを下回っている**）
- **Revolution（リセット）**：ブーストを失って得られるのが "little 6x boost" だけ。
- 追随：Dwane Dibbley / Brabbit / tenri / Crimson406 が同意。
  cracatoa（12-01）は "a terrible IAP purchase scam"。別の人は「250 から 286 まで一週間」。
- **開発者の返答は無い。**

---

### C-3. 作り手が「強化は後付けだった」と書いている

- 出どころ：itch.io「Undivided Attention」のコメント欄（7年前）
  https://itch.io/post/779817
- 一次性：**一次（作り手本人 PseudoBytes の返答）。**
- 分野：C

- zestylimez（遊んだ人）：
  > The upgrades are a little slow for an incremental game. I think that if the game moved quicker,
  > it'd be more engaging.
- PseudoBytes（作り手）：
  > I agree that the upgrades are a bit slow/boring, it was **kind of an afterthought** since I
  > realised **you could do nothing with the gained points**.

（＝**「点が貯まるだけで使い道が無い」と気づいて後から強化を足した。**
「取ったのに何も起きない」型の一歩手前、「取るものが無い」型の失敗）

---

### C-4. 「一本道すぎる」「毎周なにも取れない周がある」

- 出どころ：itch.io「Wizard Mastery」へのコメント（Papajoshh, 171日前）
  https://itch.io/post/15621367
- 一次性：遊んだ人の声。一次。
- 分野：C

> with some ramification at the beginning you can **create the illusion of choice**, which would be
> interesting.

「報酬の無い周（no rewards runs）」は繰り返しになるので避けるべきで、代わりに：

> being able to get **an upgrade in every run**, more **ramification** upgrades, or upgrades that
> could be **purchased many times**

> partitioning upgrades into smaller increments could maintain engagement while achieving the same
> overall progression values
> （＝**総量は同じでも、刻みを細かくすれば持つ**）

---

### C-5. 「後の強化が前の強化より弱い」「上限が無い一つが最適解になる」

- 出どころ：itch.io「3 Clover Clicker」へのコメント（Meowdoleon, 4年前）
  https://itch.io/post/5913191
- 一次性：遊んだ人の声。一次。
- 分野：C

> **Grass is the only viable option since there's no limit on how much you can buy them**
> （＝**上限が無いものが一つあると、他が全部死ぬ**）

> later upgrades become worse than earlier ones

助言：

> increasing upgrade costs upon purchase and ensuring **each upgrade outperforms the previous version**

---

### C-6. 一括購入（x10/x100）とリセット強化の相性

- 出どころ：itch.io「99 Colors」のスレッド「some minor bugs few criticisms」（2021-11-22）
  https://itch.io/t/1773159/some-minor-bugs-few-criticisms
- 一次性：遊んだ人（hacxattack）＋作り手（bewelge）の返答。一次。
- 分野：C

> You included an **x10 x100 option**, but I'd advise **discluding the 'prestige' upgrades from that
> class** as it prevents you from upgrading there

他に挙がっている点：

- リセット後に「constructor / turret」のどちらのモードだったかを覚えていてほしい
  （＝**リセットのたびに同じ設定を手で戻させるな**）
- 価値の低い表示物をメニューから手で隠させるのではなく、
  **進行に応じて強化が自然に見た目から消していくべき**
- 「lowest only」の照準が level 50 と 70 あたりで撃たなくなる不具合

作り手（bewelge）の返答：

> I made this while still at school and the code is one big mess. Pretty sure I would just break
> things if I started to implement new features.

---

### C-7. 作り手（大手側）が「あれは失敗だった」と名指ししている例

- 出どころ：Pecorella スライド55（Egg Inc. の項）
  https://media.gdcvault.com/gdceurope2016/presentations/Pecorella_Anthony_Quest%20for%20Progress.pdf
- 分野：C

> Egg Inc.
> – Slick, minimalist visual design
> – Egg theme is cute and humorous
> – Dual limiters (egg rate and sale rate) provide for some interesting decisions over time
> – **Has a 2 hour limit on offline earning – I think this was a mistake, I churned out myself
>   largely because of this**

（＝強化そのものではないが、**「放置ゲームで取り分に上限を付けた」ことが離脱の理由になった**、
という作り手側の名指しの反省。強化の効果に上限を付ける設計への警告として読める）

同じスライド、27ページ：

> Do you want optimal purchasing to be an interesting choice for players?
> – **If so and you see optimal patterns always favoring the highest tier generator, you may have a
>   balance problem**

---

### C-8. 解禁条件そのものを作り直した記録

- 出どころ：itch.io 開発日誌「Prestige Requirements Redesign」（Terminal Colony: Deep Core, 281日前）
  https://meapps.itch.io/terminal-colony-deep-core/devlog/1111944/prestige-requirements-redesign
- 一次性：**一次（作り手本人）。**
- 分野：C

変える前：

> The current prestige system uses a **single requirement (1000m depth + 50 crystals)**

挙げている問題：

> - Becomes **repetitive after multiple prestiges**
> - **Doesn't scale with player progression**
> - **Ignores other resource types**
> - Lacks variety and strategic choices

変えた後：

> multi-resource prestige system:
> - **Different requirements for each prestige level**
> - Multiple resource types involved
> - Scaling difficulty
> - Strategic choices for players
> - Better integration with game progression

（＝**「毎回おなじ一つの条件」だと回数を重ねたときに退屈になる、という診断。**
A-3（Synergism が minimumSingularity を 0〜300 に散らしている）と同じ方向）

---

### C-9. 「上げても何も起きない」型：数値そのものが小さすぎる

- 出どころ：複数の Steam レビュー／itch.io コメントの検索結果に共通して出た記述。
  **個別の URL に当たって本文を確認していないため、出どころとしては弱い。二次情報。**
  参照した検索結果の入口：
  https://steamcommunity.com/app/2013870/reviews/?browsefilter=toprated （Idle Hero）
  https://steamcommunity.com/app/2962810/reviews/?browsefilter=toprated （Galaxy Idle Clicker）
- 分野：C

出た記述（原文に近い形）：

> Individual upgrades ... are extremely minuscule until reaching high levels (30-40). For example,
> one upgrade **reduces attack time by 0.05 seconds per level, requiring 20 upgrades to reduce a
> 5-second delay to 4 seconds.**

> upgrades provide such a small return for their cost that they **rob the satisfaction of progress**

> the upgrade system isn't scaled well and **players don't know what upgrades do when they purchase them**

> Some games have upgrades that **literally do nothing, showing an x1 boost with no actual effect**

**「取ったのに何も起きない」型の失敗として、いちばん直接的な記述がこれ。
ただし本文未確認なので、次に調べる者は個別レビューまで降りること。**

---

### C-10. 自動化の解禁が「いちばん嫌な部分」になる型

- 出どころ：Increlution についての検索結果（**個別レビュー本文は未確認。二次情報**）
  ストアページ：https://store.steampowered.com/app/1593350/Increlution/
- 分野：C

> In Increlution, **offline time does not accumulate when the game pauses due to reaching an
> automation-locked action**, and the vanilla game is designed to make this happen for the majority
> of times that you interact with it.
> some players **hate unlocking automations, considering it the worst part of the game**

（＝**自動化を解禁する行為そのものが作業になる**という失敗。
A-2 の Antimatter Dimensions が「回数を重ねると自動化が勝手に付く」形にしているのと対照的）

---

## この記録で拾えた「相場が割れている箇所」

| 論点 | 割れ方 | 出どころ |
|---|---|---|
| **リセット回数で開くものの中身** | ①自動化と持ち越しだけ（AD の Eternity Milestones、Synergism の Auto Campaigns/Automation Upgrades）／②新しい遊びの仕組みそのもの（Realm Grinder の bloodlines・research・dragons・mercenaries）。**②には「R7〜R16 は退屈」という文句がついている** | A-2, A-3, A-4, A-5, C-1 |
| **取り直し（respec）** | ①不可（AD Perks）／②全額返る・代償不明（AD Time Studies）／③一周に一回・全額返る・追加は有料アイテム（Trimps）／④取り直し自体が無く、周をまたぐと強制的に外れる（Realm Grinder の陣営）／⑤付け替えに「周のやり直し」という代償（AD Glyphs） | B-1, B-2, B-3, B-4, B-5 |
| **段数型と一回きり** | ①全部一回きり（AD Perks 48、Kittens 52、Cookie Clicker 717）／②全部段数型（Trimps）／③混在（Synergism 90 個の中に maxLevel 1 と -1 が同居） | B-6 |
| **リセット通貨の基準** | ①今回の最高到達額（Realm Grinder）／②通算（AdCap・Cookie Clicker）／③今回の稼ぎ（Egg, Inc.）。**②は同じ地点で何度リセットしても増える**という副作用が名指しされている | B-9 |
| **リセット通貨を強化に使えるか** | ①持っているだけで倍率になり、使うと倍率が減る（Kittens の burned paragon、Pecorella スライド20）／②使うためだけに在る（AD の Perk Point、Synergism の Golden Quark） | A-7, B-1, B-8 |
| **一括購入（x10/x100）の対象** | 遊んだ人から「リセット強化は一括購入の対象から外せ」と言われている。外している作品と外していない作品がある | C-6 |
| **上限（キャップ）** | Egg, Inc. の 2時間オフライン上限は作り手側（Pecorella）から「mistake」と名指しされている。一方 AD の Glyph sacrifice は 1e100／1e70 で明示的に頭打ちにしている | B-4, C-7 |

---

## 当たり前になっているが、理由が書かれていないもの

- **「Own 25」がほぼ全部の作品で使われている。**Cookie Clicker が 1/5/25/50/100/150/200/…、
  Clicker Heroes が「25 ごとに x4」、Pecorella のモデル表も 25/50/100/200/…。
  **なぜ 25 なのかを書いた出どころは一件も見つからなかった。**
  Pecorella スライド48-49 は「小さい生成器を捨てさせないため」という**目的**は書いているが、
  **数が 25 である理由は書いていない。**
- **強化通貨が「1リセット＝1点」の整数であること**（AD の Perk Point、Synergism の singularity count）。
  なぜ稼ぎに比例させないのかの説明が無い。
- **解禁と購入が二段であること**（「Own 25 で店に並ぶ」→「10万クッキーで買う」）。
  一段（達したら即もらえる）にしない理由がどこにも書かれていない。
  ただし A-2 の Eternity Milestones は**一段**（達したら即）なので、二段が絶対ではない。
- **「強化の一覧は常に画面に在る」という前提。**どの資料も、強化がどこに置かれ、
  どう並べられているかを説明していない。**解禁前のものが見えるかどうかは、
  今回も一件も明言が取れなかった。**

---

## 昔と今で変わったもの

- **Cookie Clicker の強化の総数が 717 まで増えた**（v2.058 時点）。
  初期は数十個。**「強化の種類」ではなく「建物ごとの階層 × 建物数」で増えている**
  （Own 1〜600 の 15 段 × 建物種）。
  昇天側でも「Unshackled ◯◯」が建物 17 種ぶん並ぶ形になっている（A-9）。
- **Realm Grinder は R16 → R23 → R29 → R46 → R75 と、後から追加された機能を
  さらに後ろの転生回数に置いている**（Vanilla / Neutral / Prestige Factions / Dragons / Mercenaries）。
  **拡張のたびに解禁がうしろへ伸びる**という形。2017年の時点で既に文句が出ている（A-5, C-1）。
- **Antimatter Dimensions の Glyph 選択肢が「4つ」から「Ra milestone で 8つ」に増える**（B-4）。
  ランダム性そのものを、進行にしたがって薄めていく設計。
- **Synergism の `minimumSingularity` が 300 まで伸びている**（A-3）。
  `ultimatePen` が minSing 300、`singInfiniteShopUpgrades` が 233、`singAmbrosiaLuck4` が 256。
  **後から足された強化ほど後ろの回数に置かれている**（cookies5 が 209、cookies1〜4 が 0）。
  → **cookies1/2/3/4 が minSing 0 で cookies5 だけ 209 なのが、この伸び方の証拠。**
- **Pecorella（2016）が「incremental」と「idle」と「clicker」を分けて定義している**（スライド7-9）。
  > **Incremental Games**: A game in which the primary goal is to continually increase a number.
  > Often grows in complexity over time. When the scope of a game change substantially it is can
  > referred to as an "**unfolding game**". Examples: A Dark Room, Candy Box, Frog Fractions
  > **Idle Games**: Subset of Incrementals. Progress or income is made **without player interaction**.
  > Player choices impact growth rates. It is expected that players leave the game alone regularly.
  > **Typically do not have an "end"**
  > **Clicker Games**: Emphasis on clicking or tapping to progress. ...
  > **Physicality of the game can be fun but also tiring**

---

## 相場が取れなかったもの（探したが出なかった）

1. **解禁前の強化が一覧に見えているかどうか。**
   **今回も取れなかった。**言葉を変えて三通り以上試した：
   - "locked upgrades visible greyed out show the player future unlocks incremental UI"
   - "Cookie Clicker ascension screen heavenly upgrade tree shows locked upgrades greyed lines prerequisites visible"
   - "Increlution upgrades unlock requirements visible locked list"
   出たのは個人開発者の作業メモ（「Unlock greyed out? Show yellow bg if unlockable? Green if unlocked?」
   https://itch.io/devlog/546562/unlockupgrade-functions-complete.amp 系）だけで、
   **相場を語った資料は一件も無い。**
   唯一の手掛かりは Melvor Idle の「medal アイコンから、これから開くものの一覧が見られる」
   （A-11、ただし本文未確認）。
   → **次に当たるなら、wiki ではなく作品のソース（UI 描画部）を読むのが確実。**
     Cookie Clicker は `orteil.dashnet.org/cookieclicker/main.js`、
     Antimatter Dimensions は GitHub、Synergism は GitHub にある。
     今回は「実装を読まない」の対象が自分たちのリポジトリなので、**他作品のソースは読んでよい**
     （A-3/A-6/A-7 で実際にそうした）。**時間の都合で UI 部までは降りなかった。**
2. **隠し条件・偶然見つかる強化。**Universal Paperclips の trigger 関数（A-6）以外に、
   「偶然見つかる」ことを狙って設計したと作り手が語っている資料は出なかった。
   Cookie Clicker の Grandmapocalypse 系や shadow achievement も、
   **「隠してある」という事実の記述はあっても、なぜ隠すかを書いた資料に届かなかった。**
3. **強化の総数と、遊びの長さの関係。**「N時間の作品に強化はいくつ」という相場は一件も出なかった。
4. **格子（grid）・環（ring）・道（track）・地図の形の強化。**木と一列と割り振りは実例が取れたが、
   **格子・環・地図の実例に一件も届かなかった。**
   （Synergism の Cube Upgrades が 1x1〜5x10 の格子らしいが、fandom が 402 で本文に届かず、
   コードの該当ファイルにも当たれていない）
5. **取り直しの代償を数値で示した資料。**AD の respec は「全額返る」とだけ書かれ、
   代償の有無が書かれていない。Trimps の「一周に一回」以外に、数値の付いた代償が出なかった。
6. **日本語の作り手側の資料。**日本語の検索で出たのは遊んだ人の記録と紹介記事だけで、
   **強化の設計を語った日本語の一次資料に一件も届かなかった。**

---

## 開けなかったもの（理由つき・全部）

**この節の URL は `check-refs.mjs` の対象外**（自分で「開けなかった」と申告したもの）。

### ドメインごと入れなかったもの

- **`*.fandom.com` すべて — HTTP 402 Payment Required。**
  試したのは以下。**全部同じ 402。**
  - https://cookieclicker.fandom.com/wiki/Upgrades
  - https://trimps.fandom.com/wiki/Perks
  - https://realm-grinder.fandom.com/wiki/Reincarnation
  → **インクリメンタルの有志資料はここに最も厚く集まっている。今回いちばん痛い穴。**
    Trimps・Realm Grinder・NGU Idle・Synergism・Evolve Idle・Universal Paperclips は
    fandom にしか wiki が無い（wiki.gg 版があるのは Cookie Clicker と Antimatter Dimensions だけ）。
  → **代替経路：**wiki.gg 版、breezewiki.com（https://breezewiki.com/antimatter-dimensions/wiki/Ra
    が検索結果に出ていた。**未検証**）、NamuWiki の en 版（en.namu.wiki）、
    そして**作品のソースコード**（今回はこれで三件埋めた）。
- **`reddit.com` — クローラが入れない**（"The following domains are not accessible to our user agent"）。
  r/incremental_games は**この題でいちばん厚い議論の層**だが、**一件も読めていない。**
  → 代替：itch.io のコメント欄と Steam の掲示板で埋めた（C-2〜C-6）。
- **`*.miraheze.org` — HTTP 403。**
  - https://universalpaperclips.miraheze.org/wiki/Projects
  - （https://incrementalgames.miraheze.org/wiki/Synergism_Guide は未試行）
  → 代替：Universal Paperclips は本体の `projects.js` を直接読んで埋めた（A-6）。
- **`wiki.melvoridle.com` — HTTP 403（サイト全体）。**
  - https://wiki.melvoridle.com/w/Mastery
  - https://wiki.melvoridle.com/w/Skills
  → A-11 は検索結果の抜粋のみ。**二次情報どまり。**

### 個別に開けなかったもの

- https://wiki.kittensgame.com/en/game-tabs/science/metaphysics
  — **本文が JavaScript で描画される wiki.js のため、取得したのはタイトルだけ。**
  → 代替：GitHub の `js/prestige.js` を読んで埋めた（A-7）。
- https://wiki.kittensgame.com/en/general-information/resources/paragon — 同上。
- http://musicfamily.org/realm/Factions/ — HTTP 503 Service Unavailable。
  （Realm Grinder の非 fandom ミラー。**再挑戦の価値あり**）
- https://www.diva-portal.org/smash/get/diva2:1481219/FULLTEXT01.pdf
  — HTTP 503。学位論文「An investigation of compulsive interactions and mechanics（idle games）」。
  **研究の層はこれ一本しか候補が出ず、それが開かなかったので、この記録に研究の層は無い。**
  → 再挑戦の価値あり（503 は一時的なことが多い）。
- https://www.researchgate.net/publication/324658906_Playing_to_Wait_A_Taxonomy_of_Idle_Games
  — **未試行**（researchgate は通常ログインを要求する）。
  66作品を分類した論文。**次に調べる者はここから入るとよい。**
  一次は CHI 2018（Alharthi ほか）。ACM DL か著者ページに PDF がある可能性。
- https://gdcvault.com/play/1023208/Idle-Chatter-What-We-Can — **未試行**（GDC Vault は多くが有料）。
  スライド PDF が media.gdcvault.com に置かれていることがある（今回 2016 年版はそれで取れた）。
- https://www.gdcvault.com/play/1022066/Idle-Games-The-Mechanics-and — 同上、未試行。
  **archive.org に動画がある**：https://archive.org/details/GDC2015Pecorella （未試行）
- https://archive.org/details/idlegameworksheets
  — Pecorella のスプレッドシート現物。**未試行。数値がそのまま入っている可能性が高い。**
- https://steamcommunity.com/sharedfiles/filedetails/?id=1565440672
  — **開けたが中身が無い。**Realm Grinder の Factions ガイド（PennDragon.Inc, 2018-11-15）は
  見出しだけで本文が書かれておらず、コメント欄で「6年以上未完成」と指摘されている。
  **陣営ごとの強化の個数は取れなかった。**
- https://steamcommunity.com/sharedfiles/filedetails/?id=3763597796
  — 開けたが**別のゲームのガイドだった**（Research/Academy/Diplomacy の unlock list を含む、
  Hentaika, Jul 29）。Increlution ではない。**内容を採らなかった。**

### 開いたが、この記録に採らなかったもの

- https://www.pcgamesinsider.biz/interviews-and-opinion/66271/interview-paperclips-developer-frank-lantz/
  （Ben Parfitt, 2017-10-24）— 開けたが、**強化の設計についての記述が無かった。**
  取れた発言は二つだけで、どちらも強化の話ではない：
  > "The basic shape of the game was clear to me from the beginning...that you would instantly throw
  > all of it under the bus as soon as you could, in pursuit of your one true goal."
  > "The main thing I love about clicker games in the first place is that they give you a concrete,
  > visceral sense of these otherwise abstract notions."
  → **Universal Paperclips の作り手が、70〜96個のプロジェクトをどう設計したかを語った資料には
    今回届かなかった。**A-6 はコードだけで、作り手の言い分が無い。
- https://wooledge.org/~greg/evolve/guide.html （Evolve 初心者ガイド、v1.4.9 向け、2026-04-14 更新）
  — 開けたが、**強化の構成についての記述が薄かった。**取れたのは：
  > MAD (Mutually Assured Destruction) is "the first of several different prestige resets."
  > gain a new resource called _Plasmids_（生存市民数と tech に使った知識の量による）
  > Bioseed Reset ... gives you a bunch of Plasmids plus a second resource called _Phage_.
  > Phage can be "stockpiled to push back the diminishing return part of the Plasmid global
  > production bonus" and spent on "**permanent minor trait upgrades for _all_ of your future species**."
  > 三つ目のリセットについて：「I will absolutely not cover that in this beginner's guide」
  → **Phage が「持っているだけで効く」と「使って強化にする」の二択になっている**点だけ、
    B-8 の burned paragon 型の追加例として使える。**challenge genes と mastery には触れていない。**
