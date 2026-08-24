# Coin Tavern（2026 / Steam app id 4358310）— 生の記録

- **調べた日**：2026-08-22
- **調べた理由**：spice-lanes の特産品の効果とレアリティを作るため
- **調べた者**：実装（src/ や spec.md）を一切読んでいない。この記録はネット上の一次〜二次資料だけで出来ている
- **書き方**：一件ごとに「出どころ URL ／ 何語の資料か ／ 原文のまま ／ 訳・注」を持つ。
  要約された引用には **［要約／逐語ではない］** と明記する。

---

## 0. まず結論（この仕事で分かったこと・分からなかったこと）

### 取れたもの
- **コインの実名**：日本語・英語・簡体中文・韓国語の**公式訳つき**で約 40 種取れた（実績ページが正本）。
- **宝石（gem）の実名と効果文**：**7 種**まで特定。うち 2 件は**ゲーム内文言の逐語**が取れた。
- **レリック（relic）の実名**：**約 15 種**。うち 1 件（Cheat Dice）は**改訂前と改訂後の文言が両方**逐語で取れた。
- **レアリティの段**：**存在する。**簡体中文の投稿に「铜卡 / 银卡 / 金卡」（銅・銀・金）とあり、
  英語投稿にも "20 bronze units in the pool" とある。**英語 wiki には無かったが、実在した。**
- **構造の数値**：1 ラン = **10 ステージ**、1 ステージ = **10 ラウンド**、
  ステージ開始時に袋から**最大 20 枚**が場に出る。（韓国語の長文レビューが唯一の出どころ）

### 取れなかったもの（推測で埋めていない）
- **コイン 164 種の全一覧**：**どの言語にも存在しない。**
- **レリック 204 種の全一覧**：**どの言語にも存在しない。**
- **宝石 16 種の全一覧**：**存在しない。**7 種しか名前が挙がらなかった。
- **借金（debt）の段ごとの額の並び**：**通しの表はどの言語にも無い。**断片が 4 件だけ（下記 §5）。
- **一ラウンドの「振り回数の上限」**：**一次資料に一件も無い。**
  英語 SEO サイトだけが "flip allowance" と書いているが、
  実プレイを書いた韓国語資料の記述と食い違う（§5-6 に併記）。

### この作品について確認した「無いこと」（言語とサイトを名指しする）
| 当たった先 | 言語 | 結果 |
|---|---|---|
| `cointavern.wiki`（/coins/monsters/ を直接確認） | 英語 | **コイン名ゼロ。**「Monster multipliers scale with **duplicate types**, **dead tokens**, or **total bodies** of a tag.」のような抽象文だけ。親エージェントの見立て（SEO 生成の骨組み）を追認 |
| Steam コミュニティ**ガイド**（app/4358310/guides/） | 全言語 | **ガイドが 1 本も存在しない。**「Create your own」の空ページ |
| 巴哈姆特（forum.gamer.com.tw） | 繁體中文 | **「硬幣酒館」の板・記事が無い** |
| bilibili 専欄 / 百度貼吧 / NGA | 简体中文 | 検索語を 3 通り変えたが**攻略記事・図鑑がヒットしない**（ヒットするのは同名の別ゲーム「矛之酒馆」など） |
| gamersky ku ページ | 简体中文 | 紹介文とスペックのみ。**「攻略記事のリンクは無い」** |
| 루리웹 / 아카라이브 / DC인사이드 | 한국어 | 検索でヒットせず。**韓国語の攻略記事は Steam レビュー以外に無い** |
| Reddit | 英語 | **クローラが弾かれて到達できず**（reddit.com はこのツールでは開けない）。取れたか取れなかったか自体が不明 |
| YouTube（動画ページ本文・コメント欄） | 全言語 | **本文が取れない**（ページが空で返る）。**タイトルだけが証拠として使える** |
| MobyGames | 英語 | **HTTP 403** で開けず |
| Portuguese / Polski の Steam レビュー | pt / pl | **レビューが 0 件**（フィルタをかけて「No more content」を確認） |

---

## 1. 数の公称値（作り手が書いたもの）

### 1-1. 発売時の告知（2026-07-23）
- 出どころ：https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-23-coin-tavern-releases-fully-today-f17c98ea0cc0dc1e
- 言語：英語（Steam ニュースの転載）
- ［要約／逐語ではない］
  - 「8 Game Modes (including Endless Mode unlockable after campaign)」
  - 「**164 uniquely functional coins**」
  - 「**204 uniquely styled relics**」

### 1-2. 発売日告知（2026-06-08）＝ 発売前の予告値
- 出どころ：https://changelog.gg/games/coin-tavern-4358310/updates/2026-06-08-release-date-confirmed-and-full-version-content-preview-ddb2e7a3c8d00b99
- 言語：英語
- 逐語に近い引用：
  - 「150 unique, functional coins to choose from」
  - 「200 distinct relics with one-of-a-kind effects」
  - 「**16 versatile gems with varied styles**」
  - 「8 completely different play themes」

> **食い違い**：6月時点で「150 コイン / 200 レリック」、7月の発売時に「164 コイン / 204 レリック」。
> **宝石 16 種**は 6 月告知にしか出てこない。**どちらが最新かは確かめられなかった。**

### 1-3. Demo 大型更新（2026-05-26）
- 出どころ：https://changelog.gg/games/coin-tavern-4358310/updates/2026-05-26-coin-tavern-demo-major-update-45b256bd54a51b3c
- 言語：英語
- 逐語：
  - 「🎪 Two New Game Modes Added」
  - 「**Circus** : A stage full of surprises and twists! Test your luck and pull off big wins to earn stacks of coins!」
  - 「**Fairy Tale Castle** : Step into a whimsical fairy-tale world, and unlock brand-new challenges and strategic possibilities.」
  - 「🪙 **30 New Coins Added**」
  - 「💎 **24 New Relics Added**」

### 1-4. ストアページ本文
- 出どころ：https://store.steampowered.com/app/4358310/Coin_Tavern/
- 言語：英語（対応 15 言語）
- 逐語：
  - 「This is a roguelike centered around coin-tossing. Navigate a chaotic tavern to collect a variety of unique coins, combine them into synergistic builds, and unleash devastating Combos.」
  - 「The game features coin types tied to multiple factions: **Humans, Monsters, Beasts, and Machines**—each with its own distinct mechanics. Cross-faction combinations unlock a wealth of creative, powerful playstyles.」
  - 「At each stage, choose from a range of effect-driven relics. Pair their abilities with your coin builds to forge diverse, dynamic playstyles.」
- 対応言語（15）：English, Simplified Chinese, Traditional Chinese, Japanese, German, Korean, French, Portuguese - Brazil, Spanish - Spain, Spanish - Latin America, Ukrainian, Russian, Turkish, Czech, Polish
- 中文ストア文（gamersky 転載 https://ku.gamersky.com/2026/coin-tavern/?tag=wap ／简体中文）：
  「这是一款以投掷硬币为核心的 roguelike 游戏体验。在混乱的酒馆中探索，收集各类独特硬币」
  「四种族：人类、魔物、野兽与机械」
  開発元表記：**Woven Dream Isle** ／ 発売 2026-07-23 ／ 容量 600 MB ／ Windows 10

---

## 2. **コインの実物**（実名・4言語の公式訳つき）

**この節の正本は Steam 実績ページ。**言語パラメータを変えると**同じ実績の公式訳**が出るので、
原語（中文）・英語・日本語・韓国語を突き合わせられる。**これがこの調査で一番確度が高い資料。**

- 英語：https://steamcommunity.com/stats/4358310/achievements/
- 日本語：https://steamcommunity.com/stats/4358310/achievements/?l=japanese
- 简体中文：https://steamcommunity.com/stats/4358310/achievements/?l=schinese
- 한국어：https://steamcommunity.com/stats/4358310/achievements/?l=koreana

### 2-1. 実績から確定したコイン名（原語＝简体中文 ／ 英語 ／ 日本語 ／ 韓国語）

| 简体中文 | English | 日本語 | 한국어 | 実績本文（英語・逐語） |
|---|---|---|---|---|
| 钻石币 | Diamond Coin | ダイヤコイン | 다이아몬드 코인 | 「Obtain one Diamond Coin with Value 100」／「Obtain one Diamond Coin with Value 1000」 |
| 超级炸弹 | Super Bomb | スーパーボム | 슈퍼 폭탄 | 「Trigger one Super Bomb effect」 |
| 金色硬币 | golden coins | 金コイン | 금색 코인 | 「Have 5 golden coins on the field at once」／「…10 golden coins…」 |
| 狸猫 | Tanuki | タヌキ | 너구리 | 「Destroy one Tanuki」（実績名 "Oops!" / 「あら！」） |
| 渔夫 | Fisherman | 釣り人 | 어부 | 「**Fisherman catches something other than fish**」 |
| 小丑 | Jester | ピエロ | 광대 | 「Destroy one Jester」（実績名 "Betrayal of Useful Allies" / 「用済みの道具を捨てる」/ 中文「鸟尽弓藏」） |
| 骷髅 | skeletons | 骸骨 | 해골 | 「Have 10 skeletons on the field at once」 |
| 骑士 | knights | 騎士 | 기사 | 「Have 10 knights on the field at once」 |
| 小偷 | thieves | 盗賊 | 도적 | 「Destroy a total of 100 thieves」 |
| 金母鸡 / 母鸡 | Golden Hen / hens | 金ニワトリ / ニワトリ | 금암탉 / 암탉 | 「Obtain one Golden Hen」／「Have 10 hens on the field at once」 |
| 铁皮小人 | Tinfolk | ブリキ人形 | 양철 인형 | 「**Convert 100 Tinfolk Total**」 |
| 老虎机 | slot machines | スロットマシン | 슬롯머신 | 「Have 10 slot machines on the field at once」 |
| 邪教徒 | Cultists | カルト信者 | 이단 신도 | 「Gain 100 Cultists Total」 |
| 海盗 | pirates | 海賊 | 해적 | 「Have 10 pirates on the field at once」 |
| 保险箱 | Safes | 金庫 | 금고 | 「Destroy 100 Safes Total」 |
| 金星星 | Gold Stars | 金星 | 금별 | 「**Convert 100 Gold Stars Total**」 |
| 疯狂博士 | Mad Doctor | ―（該当行が日本語版で欠落） | 매드 닥터 | 「**Mad Doctor converts 100 coins total**」 |
| 铜宝箱/银宝箱/金宝箱 | bronze/silver/gold chests | 銅・銀・金宝箱 | 동/은/금 상자 | 「Destroy bronze/silver/gold chests 100 times total」 |

> 注：日本語版の実績 59 番は「流星群 / 金星累計 100 個変換」で、「疯狂博士（Mad Doctor）」に当たる行が
> 日本語一覧の取得結果に出てこなかった。**取り漏れか、日本語版の訳ゆれかは確かめられなかった。**

### 2-2. Steam の議論スレッドに実名で出てきたコイン（英語）

出どころ：https://steamcommunity.com/app/4358310/discussions/0/565911090118199179/
（"Write your favorite strategies!"、2026-06-11 〜 07-28、英語）

- **novalesca (Jun 11 @ 6:02pm)**（逐語）：
  「Mine is **frog, jump dice, his relic, breeder**(with or without his relic) **Dog**(with or without his relic) **Faun**(with or without his relic) and **witches/mermaids**. Legitimately amazing. Remove all other coins. **Frog with over 500 is possible.** My lil jumpy boi.」
- **the_Gonopo (Jul 1 @ 1:31pm)**（逐語の一部）：
  「the cool thing is **the n value of the thief doesnt reset when it revives**, so everytime it gets shot its value goes up.」
  ［要約］frog を 620 まで上げ、スコア $300k 超。
- **Yaaargh! (Jul 8 @ 3:01pm)**（逐語）：「**Frog with frog medal** seems like the only viable strategy to me.」
- **Criptfeind (Jul 8 @ 6:28pm)**（逐語）：
  「**Humans** with some sort of way to get buffed finishing with **kings and pandas** has been very consistent for me at the highest difficulty levels.」
- **jiggilowjow (Jul 14 @ 4:59am)**［要約］：bomb 系、進化させた **stars**、**lion をレベル 397** まで。
- **Mekhane Cultist (Jul 18 @ 9:40am)**（逐語）：「**Frogs are consistent in basically every setting** while being even better in the **Fantasy set**.」
- **Yennycat_McMeow (Jul 18 @ 2:34pm)**（逐語の一部）：「**Lion+ immortal sheep + several Pans**」でコイン値 **1161**。
- **penguinsgomoo (Jul 24 @ 12:54pm)**（逐語）：
  「My most busted combo so far was **pirates with the upgrade to steal the full value of a coin**, and **pearl merchants**.」
- **Royale Lady (Jul 26 @ 2:08pm)**（逐語）：「**10 bomb guys + 10 frogs. Frog relic** and multiple add ons to the frogs and bomb guys.」
- **El Señor Dano (Jul 26 @ 11:21pm)**［要約］：**octopus を 20 匹以上**にすると動作が重くなる。人間側は **jumping girl**。
- **Epiphany (Jul 28 @ 6:30am)**（逐語の一部）：
  「Creative mode.. Machine build of **Slot machine/Robot Butler**」＋ **Magic Mirror, Goblin Engineer, Crystal Ball** で
  エンドレス **stage 34 / 25 trillion**。
- **jiggilowjow (Jul 28 @ 8:08pm)**（逐語の一部）：
  「put **revive gems on treasure chests** and they never go away... works perfect when ya have the **crowbar**.... **endless money glitch**.」

### 2-3. ほかのスレッドから拾えたコイン（英語）

- **Cyclops / Monks**（https://steamcommunity.com/app/4358310/discussions/0/561409322576251441/ ・英語・2nd Brain, Jun 29）逐語：
  「I had a **revive gem on my cyclops** and I'm doing a **monster defeating build**. At some point the cyclops just disappeared, I never replaced his gem. **He was supposed to buff my monks** but now he's just gone. … The only item I had that effected the cyclops was the **spiked club**. … I also DO NOT have **ritual dagger** or anything like it that could threaten my cyclops.」
- **Fisherman > Murloc > Cleric**（https://steamcommunity.com/app/4358310/discussions/0/658233614222303001/ ・英語・Harathon13, May 27）逐語：
  「Somebody help me I enjoyed the **fisherman > Murlock > Cleric** combo. especially with the relics that help all three in play. (**fisherman level up, new murlocks after eating fish, and base power of cleric increases every monster clensed**) 3-4 fishermen, 1-3 clerics, and the rest murlocks was fun but fell just short of winning.」
  - w00t42 (May 28) 逐語：「you would want to add **Pandas**, as they give you the value for all of your nearby leveled up fisherman and clerics. **Panda is a good target for the gem that triggers it effect an extra time** too.」
  - El Señor Dano (Jul 22) 逐語：「**Thugs** maybe to make the beefy humans jump again? **Kings**?」
- **Vampire / Demon Hunter / Coffin**（https://steamcommunity.com/app/4358310/discussions/0/592936781602706383/ ・英語・Justin, Jul 29）**逐語（全文）**：
  「When you say spooky level, do you mean the one with **Vampires** and stuff? Because those are how I managed to get **10,000,000 to buy the Tavern**. Fill your deck with nothing but **Vampires and Demon Hunters**, get their respective relics and preferably at least one **Demon Hunter with the gem that guarantees he's added to the bag**. There's also a **relic that gives you a copy of the most valuable thing that was destroyed during your round**, so what happens is - Demon hunter kills a vampire, **which becomes a coffin**. Another vampire then kills the demon hunter which immediately spawns a new one and **if you have the relic, he always lands face up**, killing another vampire and the cycle repeats until all your vampires have killed the demon hunter. Round ends and you get a copy of the most expensive vampire you had, which at round start (If you have the relic) kills one of the coffins you created, spawning a new vampire, which kills another coffin. Repeat ad infinitum. **I was able to make over a million in a single round** with this, and it was scaling even farther if I hadn't ended the run.」
  - 同スレ・好兄弟索尔 (Jul 29) 逐語：「the most potential coin is the **dancer**, you can make **more than 10k on only one dancer at one turn**」
- **Skeleton / Frog / Goose / Necrobook**（https://steamcommunity.com/app/4358310/discussions/0/836124703224503071/ ・英語）
  - Drachnon (May 14)［要約］：「skeleton は **1 体だと base value 0**、3 体そろって初めて効く。**プールに bronze が 20 種**あるので stage 1 で skeleton が出る確率は約 **15%**、stage 1 の間に 3 体そろう確率は **1% 未満**。base value を 1 にしてほしい」
  - Harathon13 (May 27)［要約］：「**人間を skeleton に変えるレリック**を取り、**20 体並べても**上位の skeleton 亜種が無いと目標に届かない」
  - novalesca (Jun 9)（逐語の一部）：「**the goose and it's relic** to boost them, with the **necrobook**」／「**The only good broze**（＝bronze）は frog」
  - Drachnon (Jun 10)（逐語の一部）：frog は「**probably the only bronze coin I never remove**」
- **Clay Giant**（https://steamcommunity.com/app/4358310/discussions/0/588433527532467576/ ・英語・QuillQuickcard, Jul 29）逐語：
  「It would appear that there is a unique interaction between the **Clay Giant** and the **Double Gem**. I reached **the end of Stage 10** with a Clay Giant whose value was **over 1 billion**.」
- **Frog Knight / Magic Mirror / Pearl Merchant / Pearl Necklace**
  （https://steamcommunity.com/app/4358310/discussions/0/588433527532631981/ ・英語）
  - TorrentOfWar [TTV] (Jul 31) 逐語：
    「1. I have, as you can see, multiple **Frog Knights with the Jump Gems** but it appears that the **+2** is all placed on a singular one (the first one). 2. As you can see, the **Magic Mirror** coins have a value of **810**. Why? … 3. With the **Pearl Merchant**, I can explain the **741** of the first one but I cannot explain why the last one is **735**.」
  - **開発者 zhujian987-b (Jul 31 @ 5:00am) 逐語（＝作り手による仕様説明。この記録で最重要の一つ）**：
    「Regarding the Magic Mirror: **Magic Mirror cannot copy Frog Knights, since Frog Knights will always end up showing their numeric side eventually.** At some point, an 810 value got copied by a Magic Mirror. The other Magic Mirrors couldn't find any higher-value targets afterward, so they copied that 810 value from one another. Regarding the Pearl Merchant: Check the count of **Pearl Necklaces**. If shows 741, that is working as intended. **Each merchant only updates its value when its pattern side up.** Any merchants with a value lower than 741 are showing their number side up.」
  - 同 (Jul 31 @ 5:04am) 逐語：「The highest-value Frog Knight is **37.7K**, which is significantly higher than the second one at **11.6K**.」
  - TorrentOfWar (Aug 4) 逐語：「The second one was, the 11.6K, was copied from the first one via **the high value copy relic** (forget what it was called).」／「the **741 had a +1 gem** on it」
- **Prince / Hunter**（https://steamcommunity.com/app/4358310/discussions/0/588433527532577272/ ・英語・ice cream, Jul 30）逐語：
  「**Cloning Pod** doesnt copy your highest value coin. I had a **prince** that was worth **123 $** and it coppied my **hunter** that was worth **41 $**.」
  → 開発者 zhujian987-b 逐語：「You are correct, this is indeed a bug. … we will fix it in the next patch.」
- **Robot monster / Energy tower**（https://steamcommunity.com/app/4358310/discussions/0/588433820963923183/ ・英語・the_Gonopo, Aug 2）**逐語（全文）**：
  「first one small. **the robot monster seemingly always triggers before the energy towers. so if they absorb enough to go over 10 value they get eaten.** id love if it didnt work this way, would be better for endless. if thats deliberate game design, i understand but a bummer.
  the other, probably already requested a bunch, but it would be real nice to **have a way to refresh gems**. even if it cost **hammers or currency**. would really open up new strategy and reduce RNG. could also be an interesting risk/reward option if **it increased the debt goal of the next stage**.」
- **Gambler**（https://steamcommunity.com/app/4358310/discussions/0/837251071121454757/ ・英語）
  - Justin (Jul 29) 逐語：「**When the gambler lands face up, he rolls his 50/50. Landing face down just gives you his value and doesn't trigger his gamble.**」
  - novalesca (Jun 9) 逐語：「The game treats gambler the same as any other. **A binary character. One side he wins(face) one side he loses**(money symbol for other dice.」
- **Crystal Ball**（https://steamcommunity.com/app/4358310/discussions/0/84032037661558707/ ・英語・knunkel, Aug 17）逐語（全文）：
  「**crystal ball moves 100 coins.** Why does the tooltip say **all**? its not even close to the coin count i have :/」
- **Rabbit / Trap Cage / Chest / Cheese / Egg / Potion / Totem / Frankenstein**
  （https://steamcommunity.com/app/4358310/discussions/0/592936781602682530/ ・英語）
  - Draco18s (Jul 25)［要約］：「**Trap Cage (or hunter) destroying a Rabbit doesn't seem to count**（Frankenstein の破壊カウントに入らない）。**Crowbar** で壊した chest は Frankenstein の後に計上される。potions, cheese, eggs は数え方が不安定。**Keys** で開けた chest は破壊として数えない」
  - **Elite (Jul 27) 逐語の要点**：
    「**Chests, Cheese, Eggs, Potions and the Totem are 'Neutral' coins**」＝ Frankenstein は
    「**Animal, Human, Monster, and Machine**」しか数えない。**Power potion** は範囲内の全種を上げるので数えられる。
    → **陣営は 4 つではなく、実際には第5の "Neutral"（中立）がある。**ストア文には書かれていない。

### 2-4. 中文の議論から拾えたコインと**その効果文（原語）**

- **狮子 / 幻叶 / 狸猫 / 坟墓 / 海盗**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/800092529560126528/
  言語：简体中文 ／ limqiwei045（Apr 5 前後）／ **逐語（全文）**：
  > 「理论上的1000币？
  > **狮子(掠夺同类 落地加2)+幻叶(狸猫优先复制最高面值)+狸猫(随机复制)+坟墓（被摧毁后一回合后复活）**
  > 据我观察似乎是本体先触发，才到复制体狸猫触发
  > 但实际上，狮子和复制狮子，同时正面朝上时(我没有太注意)，也没有互相吞噬，(六七个回合，一真两假总不可能没有同时朝上过吧)
  >
  > 按照这种思路(复制体优先度低），那能不能只留**海盗(掠夺最低面值)**和狸猫」

  訳（当方訳）：
  - **狮子（Lion／ライオン）**：「同類を略奪する。着地で +2」
  - **幻叶（訳不詳。レリックか）**：「狸猫が最高面値を優先して複製するようになる」
  - **狸猫（Tanuki／タヌキ）**：「ランダムに複製する」
  - **坟墓（Tomb／墓）**：「破壊された後、1 ラウンド後に復活する」
  - **海盗（Pirate／海賊）**：「最低面値を略奪する」

- **大变活人 / 红炸弹 / 舞娘 / 国王币**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/592936781602794383/
  言語：简体中文 ／ moclight（Jul 27 @ 9:42am）／ **逐語（全文）**：
  > 「**大变活人+红炸弹太bug了！**
  > 无敌啊，只要有大变活人，**全摧毁也能复活，而且币值并不会重新计算**，用**舞娘**的话，下一回合就能出**远远超过上限的币**到场上，而且炸了以后，哪怕在阶段末尾，下一阶段仍然能把所有被炸的人币复活，**我一次让40个币在第一回合出现，随手4万起步**，太可怕了」
  - 続き（同人物 Jul 27 @ 9:49am、逐语）：
    「好吧，又试了一下，反而好像是在**阶段末尾衔接的时候炸**才能保证复活币值不变，这次回合中炸完好像几个币值复原了，但是**国王币**又没变，但是一个国王币的**镶嵌**炸没了，不是很清楚具体机制」
  - 帝企鸥（Jul 28）逐语：「你是不是给一些硬币加了**复活宝石**」→ moclight：「没有啊，我只用大变活人，没用复活宝石」
  - 注：**大变活人** は英語パッチノートの **"Human Transmutation"**（下記 §4-2）に当たる。
    訳は「人体変換／人間手品（大がかりな人間消失マジック）」。

- **青蛙 / 珍珠 / 美人鱼 / 小女巫 / 熊 / 蜂蜜酒 / 狼 / 羊 / 萨提尔（羊男）**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/564784556120508506/
  言語：繁體中文（スレ題「童話模式根本是青蛙的天下啊」）
  ［要約／逐語は取れなかった］：
  - 「**青蛙（frog）の pearl と 美人鱼（mermaid）・小女巫（little witch）** を合わせると、
    毎ラウンド **100 超えの青蛙が数匹**になり、付呪しだいで **1 ラウンド 1000〜2000 コイン**」
  - 「**金コインは 2 種とも童話モード専属**。他モードでは青蛙の pearl、犬、飼育員（trainer）、羊男に頼るが伸びが遅い」
  - 「標準モードの**最後の 20000** を運なしで達成できるか不安」
  - 「**熊＋蜂蜜酒**型、**狼＋羊**型もある。**魔物（monster）型が一番弱く**、運がいる」

- **章魚 / 採珍珠船 / 炸彈手**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/592936492464250670/
  言語：繁體中文 ／ **逐語**：
  - 君莫笑（Jul 24 @ 12:08am）：「玩了一下正式版才有的**海盜主題**，然後**章魚**養了幾隻，現在每回合收入都很高，不知道可以撐過幾回合無盡模式」
  - 东看一下（Jul 24 @ 3:29am）：「这个**无尽模式线性增长**的，完全赶不上**章鱼哥**的成长速度，感觉可以无限打」
  - s119009t（Jul 24 @ 7:54am）：「我自己測試可以無限打 **20隻章魚定場** 有**固定上場寶石**裝在**炸彈手**身上 過程盡量選**會生硬幣的硬幣** 比如**採珍珠船**
    **袋子的硬幣數超過200**你的錢就絕對能超過每階段的要求 **超過300**你每回合的錢都夠你付一階段了」

- **珍珠（Pearl）の扱い**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/592936492464245197/ ／繁體中文
  - 919262741（Jul 23）逐語：「bug吗？**珍珠不被算入上场硬币数**？可以无限上场」
  - s119009t（Jul 23）逐語：「**珍珠在階段結束後就會變成道具啊 本來就不會留在場上**」
    （＝真珠はステージ終了時に「道具（＝レリック側の資源）」に変わるので場に残らない）

- **狗頭人戰鼓 / 百變怪**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/592936492464199680/ ／繁體中文
  - s119009t（Jul 23）逐語：「目前**狗頭人戰鼓**的效果不會生效」（Kobold War Drum）
  - CLBA（Jul 25）逐語：「**百變怪**有時候會自動被破壞然後下個回合再生成 剛好**跳過三選一變形**....」
    （百變怪＝Shapeshifter。韓国語レビューでも「메타몽」と呼ばれている。**「3つから選んで変身する」**仕様が読める）

- **骷髅头（Skull／レリック）**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/588433820963941531/ ／简体中文
  - 人柏（Aug 2 @ 6:28am）逐語：「**暗黑地牢**的道具"**骷髅头**"结算有问题啊，**200多个头乘以几千的面值就给两万**，无尽通关太折磨了」
  - 開発者 zhujian987-b（Aug 2 @ 7:55am）逐語：「"骷髅头"的BUG会在下次更新时修复」

- **鸟窝 / 猎魔手册 / 奇妙蛋 / 狮鹫 / 羊圈**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/800092562772762691/ ／简体中文
  - 小怪兽（Apr 8 @ 7:11am）逐語：「**部分摧毁计数的道具未实际生效，例如鸟窝和猎魔手册，购买后什么作用都没有**」
  - Crab X Swallow（Apr 8）［要約］：「**鸟窝**は **奇妙蛋（wondrous egg）** を出す。**猎人と狮鹫**が **羊圈** で無限に湧く羊を壊し続ける構成で確認した。**猎魔手册**はカウントは増えるが 1 ターンの増分が小さすぎて気づきにくい」
  - s119009t（Apr 27）［要約］：「鸟窝は発動条件の書き方が悪い。**釣り人（fisherman）構成では発動せず、ターン終了時に魚を自動で殺す道具**を取ったら働いた」

- **砂磨驱魔师 / 小精灵（レリック）**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/800092239616356397/ ／简体中文
  - 我啷个晓得（Apr 5 @ 2:02am）逐語：「**遗物刷新**：1.刷新后三个里面还能两个不变的，真无语，改改吧。… 2.那个**砂磨驱魔师和小精灵的遗物出现频率非常高**，早期就出这些没用的」
  - a0956632843（Apr 5）逐語：「不止刷三個兩個不變，玩到後面就是**遺物池子裡完全沒東西了**，玩到後來怎麼刷新都的那三個一模一樣的物品 剛關掉遊戲後再重開，遺物池子刷新了」

- **日本語レビューに出たコイン**
  出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=japanese ／日本語
  - Mosadango（7/24）逐語：「**たこが最強すぎる**」
  - enpel（8/8）逐語：「おもろいし好きだけど**共通コインのカエル１匹とサキュロス、飼育員だけで、どの最高難易度でもだいたい勝てるため**ビルドの幅がないように感じます。」
    （「サキュロス」は「サテュロス（Faun/Satyr、中文の羊男）」の誤記と思われるが、**原文のまま残す**）

---

## 3. **宝石（gem）の実物**

**公称 16 種。実名が取れたのは 7 種。**残り 9 種は**どの言語でも見つからなかった。**

| 名前（英語） | 原語（分かる範囲） | 効果（**引用元の文をそのまま**） | 出どころ |
|---|---|---|---|
| **Jump Gem** | 中文 未確認 | ゲーム内文言（プレイヤーが引用）：「**each time it jumps, increases its jump count by one.**」 | https://steamcommunity.com/app/4358310/discussions/0/565911090118115113/ （英語） |
| **Revive Gem** | 简体中文「**复活宝石**」 | 韓国語レビューの説明：「**파괴되어도 즉시 부활**」（破壊されても即座に復活）／英語スレでの用法：「put **revive gems on treasure chests** and they never go away」 | https://steamcommunity.com/app/4358310/discussions/0/561409322576251441/ ／ https://steamcommunity.com/app/4358310/discussions/0/592936781602794383/ |
| **Double Gem** | ― | 効果文は取れず。**Clay Giant と組むと面値が指数的に増える不具合**があった：「Fixed the bug of **excessive face value increase in Clay Giant with the Double Gem**」 | https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-30-patch-notes-1-0-05-fbe3c0af43b116a1 （英語） |
| **Red Gem** | ― | プレイヤーの記述：「The red gem **which duplicates the effect**」（効果をもう一度起こす）。**Cleric には効かない**との報告 | https://steamcommunity.com/app/4358310/discussions/0/592936492464233852/ （英語） |
| **Racial Gem** | ― | 効果文は取れず。「Fixed **Racial Gem** failing to trigger counters for **Frankenstein and Human Transmutation**」 | https://changelog.gg/games/coin-tavern-4358310/updates/2026-08-04-patch-notes-1-0-06-d1030281660d4752 （英語） |
| **Heritage Gem** | ― | 効果文は取れず。「Fixed the **Safe generated by Heritage Gem** missing a counter setup」 | 同上 |
| **Devotion Gem** | ― | 「The **trigger timing for Devotion Gem** has been adjusted from '**at the start of the round**' to '**before the start of the round**'」 | https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-30-patch-notes-1-0-05-fbe3c0af43b116a1 （英語） |

**名前は無いが効果だけ判っている宝石（同一物の可能性あり）**

- 「the gem that makes him "**always land face up**" **on his first jump of the round**」
  — novalesca、https://steamcommunity.com/app/4358310/discussions/0/837251071121454757/ （英語）
- 「a **Demon Hunter with the gem that guarantees he's added to the bag**」
  — Justin、https://steamcommunity.com/app/4358310/discussions/0/592936781602706383/ （英語）
  ＝繁體中文の「**固定上場寶石**」（s119009t）と同じものと思われる
- 「**the gem that triggers it effect an extra time**」— w00t42（＝Red Gem の可能性が高いが同一とは確認できない）
- 「the **741 had a +1 gem** on it」— TorrentOfWar（**面値 +1 の宝石**）
- 韓国語レビュー Napols の総説（逐語）：
  「젬의 경우에는 원하는 동전을 선택하여 효과를 부여할 수 있습니다. **가치를 상승시키거나 라운드의 첫번째는 항시 앞면으로 던지기, 파괴되어도 즉시 부활 등이 존재하죠. 동전마다 1개만 장착이 가능하기에** 동전의 효과와 가치에 맞춰 젬을 장착시키는 것이 좋습니다.」
  → 訳：「宝石は好きなコインを選んで効果を付けられる。**価値を上げる／ラウンドの一投目は常に表で投げる／破壊されても即復活**などがある。**コイン 1 枚につき 1 個しか装着できない**」
  出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=koreana

**宝石にまつわる仕様上の摩擦（プレイヤーの文句）**
- 「**gem を付け替える手段が無い**」：the_Gonopo（Aug 2、英語）逐語：
  「it would be real nice to have a way to **refresh gems**. even if it cost **hammers or currency**.」
- 「**合体するコインが宝石ごと食う**」：JXM040（Aug 8、英語）**逐語（全文）**：
  「This applies to anything that **merges or plunders**. But when I have a **lion with a gem** on it and i pick another lion coin, I've had it where **the new lion will eat the old one with a gem and completely wasting it**. This is a poor experience. I've had a similar thing with **2 clay giants**. Doesn't feel worth it to put gems on them if it's just going to get wasted because the coins just randomly consume the others. **Best experience is to check if there is a gem, if so, have it consume the other way.** Because right now, this kind of sucks.」
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/585056732983702421/

---

## 4. **レリックの実物**

**公称 204 種。実名が取れたのは 15 種前後。**

### 4-1. 効果文が逐語で取れたもの

**Cheat Dice（賭博師のイカサマ賽）— 改訂前と改訂後の両方が取れた唯一の例**
出どころ：https://steamcommunity.com/app/4358310/discussions/0/837251071121454757/ ／英語

- **改訂前の文言**（General Heavy が引用、May 22 @ 2:30am、逐語）：
  > 「**''When a Gambler loses a bet, 50% chance to turn the loss into a win.''**」
- **実際の挙動**（同、逐語）：
  > 「However, as I've observed in the game, the Cheat Dice instead makes it so that **when a Gambler loses a bet, they still reset their value but get a 2 value headstart 50% of the time the same round.**」
- **改訂後の文言**（Draco18s が引用、Aug 2 @ 7:24pm、逐語）：
  > 「Description has updated, but if this is still true, it wildly differs from the new description. "**Before triggering Value Reset to 0, there is a 50% chance to turn this effect into increase its own value by 2.**"」
- 開発者 zhujian987-b（Jul 30 @ 8:44pm）逐語：
  > 「You're right, **the description for Cheat Dice was quite ambiguous. The description text for it has been revised in the patch.**」
- General Heavy（Aug 2 @ 10:28pm）逐語：
  > 「This post was made **during the demo**, where even if the cheat dice's ability triggered, **the gambler still lost all value.** It was since then **fixed in the updated demo and the full game.**」

> **これは「増幅系レリックの文言をどう書くか」の生きた失敗例。**
> 「損を得に変える」と書いたら、プレイヤーは「値がリセットされない」と読んだ。
> 実際は「リセットは起きるが、そのあと +2 で再スタート」。
> **直した後の文言は挙動の順序（Before triggering Value Reset to 0）を明示している。**

**ゲーム内の効果文の書式（繁體中文・実物のスクリーンショットからの書き起こし）**
出どころ：https://steamcommunity.com/app/4358310/discussions/0/800092239616363975/ ／繁體中文
> 「**回合結束(69): 搜索1個面額最大的硬幣,將其翻面並獲得其面額等量的基礎幣**」

訳：「ラウンド終了(69)：面値が最大のコインを 1 枚探し、それを裏返して、その面値と同じだけの基礎コインを得る」
→ 投稿者はこの **(69)** に相当する**発動順の番号を表示してほしい**と要望している。
   つまり**現状は発動順が番号で見えていない**（要望の中身から逆算した記録）。

### 4-2. 名前だけ／断片だけのレリック

| 名前 | 判っていること（引用元の文） | 言語・出どころ |
|---|---|---|
| **Cloning Pod**（クローン槽） | 「Cloning Pod **doesnt copy your highest value coin**」（本来は最高面値を複製する）／パッチ 1.0.07「**Removed the [LookUp] keyword from Cloning Pod**」／1.0.06「Fixed the Cloning Pod failing to duplicate maximum value coins」「Fixed **Octopus duplicated by Cloning Pod entering the bag**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/588433527532577272/ ／ https://changelog.gg/games/coin-tavern-4358310/updates/2026-08-05-patch-notes-1-0-07-80d1c3e4065bb576 |
| **Skull Relic**（骷髅头） | 「Fixed the **Skull Relic generating too few base coins**」／中文報告「200多个头乘以几千的面值就给两万」 | 英・简 上記 |
| **Carving Knife**（彫刻刀） | 「The effect of the relic **Carving Knife** will only be activated **if there are no Totems on the field**」 | 英 https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-29-patch-notes-1-0-04-17f64debbd27c461 |
| **Golden Shovel**（金のシャベル） | 「Fix the BUG that caused the **Golden Shovel to take effect too early**」 | 同上 |
| **Magic Mirror**（魔鏡） | 「Change the **Magic Mirror effect to 'lasting for 1 round'**」／「Fix the bug of copying Magic Mirror **with a face value not exceeding 100 million**」／開発者：「Magic Mirror **cannot copy Frog Knights**」 | 英 上記／https://steamcommunity.com/app/4358310/discussions/0/588433527532631981/ |
| **Frog Medal / Frog relic**（カエルの勲章） | 「**Frog with frog medal** seems like the only viable strategy to me.」 | 英 https://steamcommunity.com/app/4358310/discussions/0/565911090118199179/ |
| **Necrobook**（ネクロブック） | 「the goose and it's relic to boost them, **with the necrobook**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/836124703224503071/ |
| **Spiked Club**（棘付き棍棒） | 「The only item I had that effected the cyclops was the **spiked club**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/561409322576251441/ |
| **Ritual Dagger**（儀式の短剣） | 「I also DO NOT have **ritual dagger** or anything like it that **could threaten my cyclops**」（＝自分のコインを壊す代わりに何かを得る類） | 同上 |
| **Crowbar**（バール） | 「works perfect when ya have the **crowbar**」（宝箱をこじ開ける）／「**Crowbar**-broken chests register after Frankenstein's action」 | 英 上記 2 スレ |
| **Rum**（ラム酒） | 文言への苦情：「**Rum** - **Drop the word randomly**, it implies I will get it at a random point rather than just **gaining three identical**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/561409599920596780/ |
| **Invitation**（招待状） | 文言への苦情：「**Invitation** - Drop '**of three options**'」 | 同上 |
| **（名称不明）ハンマーのレリック** | 「There is also a **relic about gaining value on a hammer** - It makes no sense, I don't understand it at all」→ Gwonbush の説明［要約］：「**クリックしてハンマーを消費し、場のランダムなコインにハンマーを乗せる**。ただし**ハンマー除去アイコンが袋から除去するアイコンと同じ**なので、レリックごと消えるのかと勘違いする」 | 同上 |
| **（名称不明）最高値の複製レリック** | 「copied from the first one via **the high value copy relic** (forget what it was called)」 | 英 https://steamcommunity.com/app/4358310/discussions/0/588433527532631981/ |
| **（名称不明）破壊された最高値の複製レリック** | 「a **relic that gives you a copy of the most valuable thing that was destroyed during your round**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/592936781602706383/ |
| **（名称不明）Demon Hunter 常時表レリック** | 「if you have the relic, **he always lands face up**」 | 同上 |
| **（名称不明）人間→骸骨変換レリック** | 「a relic that **animates humans into skeletons**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/836124703224503071/ |
| **鸟窝**（Bird's Nest） | 「**鸟窝**…购买后什么作用都没有」／反論「鸟窝は **奇妙蛋** を出す」 | 简 https://steamcommunity.com/app/4358310/discussions/0/800092562772762691/ |
| **猎魔手册**（Monster Hunter's Manual） | 「摧毁计数の道具」だが「1 ターンの増分が小さすぎる」 | 同上 |
| **砂磨驱魔师 / 小精灵**（レリック名） | 「出現頻度が非常に高い」「早期に出ても役に立たない」 | 同上（商店刷新问题スレ）|
| **狗頭人戰鼓**（Kobold War Drum） | 「目前**狗頭人戰鼓**的效果不會生效」 | 繁 https://steamcommunity.com/app/4358310/discussions/0/592936492464199680/ |

### 4-3. 親からの依頼「増幅／振り回数を伸ばす／経済／方針転換」の四つの役に当たる実物

| 役 | 当たる実物 | 根拠（引用） |
|---|---|---|
| **増幅** | Frog Medal、Magic Mirror（1 ラウンド持続の複製）、high value copy relic、破壊された最高値の複製レリック、Cloning Pod、Skull Relic | 上記各行 |
| **振り回数を伸ばす** | **Jump Gem**（「each time it jumps, increases its jump count by one」）、「always land face up on his first jump of the round」の宝石、Demon Hunter 常時表レリック、**Thugs**（「to make the beefy humans **jump again**」） | 上記各行 |
| **経済** | 採珍珠船（コインを生むコイン）、Pearl → ステージ終了で「道具」に変わる、Rum（同一物 3 つ）、Invitation（3 択）、hammer 系レリック、**티켓（チケット）＝ 店の通貨** | §3・§6 |
| **方針転換（ピボット）** | **人間→骸骨変換レリック**、**Mad Doctor**（「converts 100 coins total」）、**Tinfolk の Convert**、**百變怪／Shapeshifter の「三選一變形」**、**Carving Knife（Totem が場に無いときだけ発動）** | 上記各行 |

> **注意：「レアリティごとにレリックが分かれている」という記述は、どの言語にも一件も無かった。**
> 段があるのは**コイン**の方（§7）。

---

## 5. **借金（debt）・ラウンド・振り回数**

### 5-1. 確度の高い構造（韓国語レビュー Napols、2026-08-18）
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=koreana
言語：**한국어** ／ **逐語**

> 「동전을 던지고 정산이 완료되면 라운드가 종료됩니다.
> 마지막 라운드가 아니라면 **3개의 랜덤한 동전이 주어지고 이 중에서 1개를 선택**해 책상 위에 올려둘 수 있죠.
> 이후로 동전을 던지고 선택하고를 반복하면서 라운드를 진행하고 마지막 라운드가 종료되면 빚 정산을 진행하게 됩니다.
> **보유 금액이 빚보다 낮으면 그대로 게임 오버**가 되고 안전하게 빚을 처리하면 다음 스테이지로 이동하게 되죠.」

> 「스테이지와 스테이지 사이에서는 **상점**을 이용할 수 있게 됩니다.
> 스테이지 클리어나 유물 등으로 **티켓**을 획득하게 되며 이를 소모해 **유물이나 젬을 구매**할 수 있죠.
> 유물은 보유한 것으로 **특정 동전의 효과를 강화하거나, 가치 증가, 동전이나 망치 등을 생성**하는 특별한 효과들을 발동하게 됩니다.
> **대부분 패시브로 작동을 하며 일부 발동형은 일정 라운드나 조건에 따라 효과가 발생**하게 되죠.」

> 「상점 이용 후 새로운 빚을 처리하기 위한 동전 던지기를 이어가게 됩니다.
> **총 10개의 스테이지를 진행하며 점점 빚의 규모가 늘어나기에** 동전과 유물의 조합이 중요해지죠.」

> 「참고로, **스테이지를 시작할때 주머니에 보유한 동전 중 최대 20개의 동전을 랜덤하게 집어들어 책상에 던집니다.**
> 그 외의 동전은 주머니에 잔존하며 **책상 위의 동전이 20개 미만이 되는 경우에만 추가로 드로우**하여 사용할 수 있게 되죠.
> 이에 따라 **너무 많은 동전을 보유한 경우, 메인으로 사용할 동전을 드로우하지 못해** 게임 진행에 문제가 발생하기도 합니다.
> **라운드 사이에 획득하는 동전은 책상 위 동전 최대에 영향을 받지 않기에** 무의식적으로 선택하다가 보유 수량이 확 늘어나기도 하죠.
> 그렇기에 **가능한 20개 전후로 동전 수량을 유지하는 것이 좋으며 불필요한 하위 등급의 동전은 망치로 뽀각내버리기** 해야합니다.」

> 「**착지한 면에 상관없이 동전의 가치만큼 기본 자금을 획득**하게 되고 종류에 따라 특수 효과가 발생하기도 합니다.
> 특수 효과는 **앞면 착지, 라운드 종료, 라운드 시작** 등의 조건에 따라 발동하게 됩니다.」

**日本語訳（当方訳・要点）**
- コインを投げて精算が終わるとラウンドが終わる。**最終ラウンドでなければ、ランダムなコイン 3 枚が提示され、1 枚を選んで机に置ける。**
- 最終ラウンド終了時に**借金の精算**。**所持金が借金より少なければその場でゲームオーバー。**
- ステージ間に**店**。**チケット**（ステージクリアやレリックから得る）を使って**レリックか宝石を買う**。
- レリックは**大半がパッシブ**。一部は**一定ラウンドまたは条件で発動する型**。
- **1 ラン＝10 ステージ。**進むほど借金が増える。
- **ステージ開始時、袋から最大 20 枚をランダムに机へ投げる。**残りは袋に残り、**机の枚数が 20 未満になったときだけ追加で引く。**
- **コインを持ちすぎると主力を引けなくなる。**ラウンド間で得たコインは 20 枚の上限に数えられない。
- **20 枚前後に保ち、不要な下位等級のコインはハンマーで壊す。**
- **着地した面に関係なく、コインの価値ぶんの基礎資金が入る。**特殊効果は**表着地／ラウンド終了／ラウンド開始**などで発動する。

### 5-2. 1 ステージのラウンド数
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=schinese
言語：简体中文 ／ 烤鹌鹑（7/24）／ **逐語**：
> 「无尽模式过于拖沓，无尽模式说起来是无尽，但还是最终应该有个结束，**每一轮才加一万，递增太慢了，一轮10个回合也有点多**，毕竟这个游戏的结算速度是比其他游戏慢不少的。」

→ **「一轮10个回合」＝ 1 ステージ 10 ラウンド。**
→ **無限モードの借金は「每一轮才加一万」＝ 1 ステージあたり +10,000 の一次増加。**

### 5-3. 借金の額として実際に言及された数字（**通しの並びは無い**）

| 数字 | 文脈 | 言語・出どころ |
|---|---|---|
| **$6,000** | YouTube 動画タイトル「I Built a Coin Circus to Pay Off My **$6,000 Debt** \| Coin Tavern」（Circus モード） | 英 https://www.youtube.com/watch?v=mOHPa16tb10 （**タイトルのみ確認。本文は取得できず**） |
| **10k → 30k**（最終 2 ステージの跳ね） | 「One of the deck groups **goes from 10k to 30k** yet there is no balance of the cards to make it possible **unless you get mega bomb at the very last shop**.」 | 英 https://steamcommunity.com/app/4358310/discussions/0/84031737849688674/ （BlurryRawr, Aug 15） |
| **20000**（標準モードの最後） | 「標準モードの**最後の 20000**を運なしで達成できるか不安」［要約］ | 繁 https://steamcommunity.com/app/4358310/discussions/0/564784556120508506/ |
| **無限モード +10,000／ステージ** | 「每一轮才加一万」 | 简 上記レビュー |
| **酒場の買い取り 5,000,000〜100,000,000** | ［要約］「テーブル左の封筒アイコンをクリックすると酒場を買える。**難度／モードにより 500 万〜1 億**。**そのランのみ有効で、以後の目標額が 0 になる**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/592936492464271401/ |
| **10,000,000 で酒場を買った** | 「those are how I managed to get **10,000,000 to buy the Tavern**」 | 英 https://steamcommunity.com/app/4358310/discussions/0/592936781602706383/ |
| **累計 1 億 $ 納付** | 実績「Turn in a Total of 100,000,000$」 | 全言語（実績） |

### 5-4. **「一ラウンドの振り回数の上限」は一次資料に無い**
- 英語 SEO サイト `cointavern.wiki` だけが「Every stage has a clear **budget of flips per round** and rounds per stage, and you **flip until your flip allowance is spent or you choose to stop**」と書いている
  （検索結果の要約として返ってきた文。出どころ：https://cointavern.wiki/guides/how-to-play/ ）。
- 一方、実プレイを書いた韓国語資料（§5-1）は「**手持ちを机に投げ、着地面に関係なく価値ぶんの金が入り、効果で追加の投げが起きる**」としか書いておらず、**「振り回数の割り当て」という概念が出てこない。**
- **どちらが正しいかは確かめられなかった。**ただし **cointavern.wiki は §0 のとおり実データを持たないサイトである**ことを併記しておく。

---

## 6. **レアリティの段（英語資料には無かったもの）**

**存在する。**少なくとも **銅・銀・金** の三段。

- **简体中文（最も明確）**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/809100726410305976/
  投稿者：我啷个晓得? ／ **逐語（全文）**：
  > 「我玩了几个小时，也是全部通关了，有一些小问题不知道怎么回事，一个就是**开始抽卡概率问题，刚开始都是铜卡，但为什么不能刚开始就出金卡或者让银卡概率高点呢**，有时候来的卡太差甚至第一阶段都过不了，在一个就是**当硬币多的时候，一些高价值硬币会被更容易留在硬币袋里**，不知道真的是我运气差还是官方机制的问题，我一直玩的养熊，但是我一两百块的几头熊还有一些附魔的硬币全被留在了袋子里，上场的只是一些廉价的硬币，甚至**把场上的硬币敲了再从袋子里掏，也还是掏不出来高价值硬币**，所以到底是不是我的运气太差，最后就是玩法问题，太过单调，希望后来会出一些无尽模式或者创意工坊」

  訳（当方訳）：「最初のドロー確率の問題。**序盤はぜんぶ銅カード。なぜ最初から金カードを出す、あるいは銀カードの確率を上げるということができないのか。**……コインが増えると**高価値のコインほど袋に残りやすい**。……**場のコインをハンマーで壊してから袋を探っても、高価値コインが出てこない。**」

- **英語（数値つき）**
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/836124703224503071/ ／ Drachnon（May 14 @ 2:24pm）
  ［要約］：「**プールに bronze が 20 種**あるので、**stage 1 で skeleton が出る確率は約 15%**、
  **stage 1 の間に 3 体そろう確率は 1% 未満**」／novalesca：frog は「**The only good broze**」
  → **bronze（銅）は「プール」として実装されている**ことが読める。

- **金コインは実績の単位でもある**：「Have 5 golden coins on the field at once」／「Have 10 golden coins…」
  （简体中文「场上同时存在5个金色硬币」）
- **ダイヤモンド**：`Diamond Coin`（钻石币）は**個別のコイン名**であり、段の名前として使われている証拠は無い。
- **宝箱にも銅／銀／金の三段がある**：「Destroy **bronze/silver/gold** chests 100 times total」
- **韓国語レビューは「하위 등급의 동전」（下位等級のコイン）と書いている**（§5-1）。
  → **等級（tier）という語が公式訳にも入っている。**

> **未解決：金の上に段があるか（ダイヤ／虹など）は、どの言語でも確認できなかった。**
> **未解決：レリックと宝石にレアリティ段があるかは、一件も記述が無かった。**

---

## 7. **モードとテーマ（8 種）— 4 言語の公式名**

出どころ：実績ページ（英・日・简・韓）

| English | 简体中文 | 日本語 | 한국어 | 備考 |
|---|---|---|---|---|
| Casual Tavern | 休闲酒馆 | カジュアル酒場 | 캐주얼 선술집 | 最初のモード |
| Circus | 马戏团 | サーカス | 서커스 | Demo 2026-05-26 で追加 |
| Fairy Wonderland | 童话仙境 | 童話の楽園 | 동화 낙원 | Demo 時は「Fairy Tale Castle」表記。**カエル一強と言われるモード** |
| Treasure Cove | 宝藏海湾 | 宝の湾 | 보물 만 | 繁中で「海盜主題」。章魚・採珍珠船・海賊 |
| Dark Dungeon | 黑暗地牢 | 暗黒ダンジョン | 어둠 던전 | 骷髅头レリック。**吸血鬼・デーモンハンター・棺**もこの系統と思われる（英語投稿は "the spooky level" と呼ぶ） |
| Moving Castle | 移动城堡 | 移動城 | 이동 성 | 機械系（Slot machine / Robot Butler / Goblin Engineer / energy tower / Tinfolk） |
| Custom Mode | 自选模式 | カスタムモード | 커스텀 모드 | 「Creative mode」と呼ぶ投稿もある |
| Ultimate Mode | 终极模式 | アルティメットモード | 얼티밋 모드 | |
| （Endless Mode） | 无尽模式 | 無限モード | 무한 모드 | キャンペーン後に解放 |

**モードごとに専用のコイン／レリック／宝石がある（開発者の明言）**
出どころ：https://steamcommunity.com/app/4358310/discussions/0/588433527532645579/ ／英語
- mithras（Jul 31 @ 7:29am）逐語：「While I see game modes unlock, **do any of the coins get permanent upgrades? Do new coins unlock for each different game mode (like Circus, etc)?**」
- **開発者 zhujian987-b（Jul 31 @ 11:27pm）逐語**：
  「**Different game modes unlock brand-new gameplay content such as new coins, relics and gems. At present, the game does not feature permanent upgrade mechanics.**」
  → **メタ進行（恒久強化）は無い。**

**モード解放の条件（プレイヤーの記述、英語）**
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=english ／ Mojo（7/26）逐語：
> 「there are multiple levels you can choose to play on, **each with their own set of exclusive items for your 3 item draft picks at the end of each stage**. To unlock another level, **you need to beat the previous one TWICE - once on beginner and once on easy difficulty** … **Each level takes around 30 minutes(on 4x speed)** and even if you have enough money to pay off the debt for all stages **the game just forces you to play**.」

- 1.0.04（2026-07-29）で緩和：「Change the unlocking condition of the new mode **from the second level to the first level**」「**After unlocking the new mode, players can choose any difficulty level** of this mode to play」「Slightly increase the numerical requirement for **difficulty 1**」
  出どころ：https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-29-patch-notes-1-0-04-17f64debbd27c461

---

## 8. 遊んだ人の文句（原文のまま・言語別）

### 日本語
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=japanese
- **minamin（7/25）逐語**：
  > 「構築のためのリソースに余裕がある、難易度低めのデッキ構築ローグライト。画面いっぱいにコインが溢れる様を気持ちよく眺めましょう。**最初から最後までやることが変わらないので、ビルドが固まってくると後はボタンを押すだけ、という感じの単調さがあるのが惜しい。一番簡単なモードから順に開放していかないといけないから、後半眠くなってきちゃうのよね**」
- **ets（7/25）逐語**：
  > 「**古くはドミニオンからの系譜の、デッキ構築系にかなり肌感は近い**...間違いなく面白いのだけど**途中開放要素等が無いため、強い構成に目途をたてたら後はそれをコスっていくと最高難易度までクリア出来てしまう。**」
- **rrrrrrringo31（7/25）逐語**：「**幸運の大家様っぽい**」（＝Luck be a Landlord）
- **enpel（8/8）逐語**：「共通コインのカエル１匹とサキュロス、飼育員だけで、どの最高難易度でもだいたい勝てるためビルドの幅がないように感じます。」
- **Mosadango（7/24）逐語**：「たこが最強すぎる」

### 简体中文
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=schinese
- **人类(简单的)（7/28）逐語**：
  > 「**数值设计极佳，构筑很多，平衡性强，数值设计非常好。卡牌效果简单，但构筑并非一目了然，还是需要大量思考的。卡池不会稀释，重抽票给的多，而且能和硬币互动，硬抽肯定比较困难，但合理规划的话比较容易抽到想要的牌。指数级的增长都在宝石里，数值不崩坏。**」
  → **重要：「卡池不会稀释（カードプールは薄まらない）」「重抽票给的多（リロールチケットが多く配られる）」「指数级的增长都在宝石里（指数的な伸びは全部宝石の側にある）」**
- **736404423（7/25）逐語**：「挺好玩的，**类似小丑牌**，但是**内容太少了，无尽模式又太无聊，我一天基本就通关所有难度了**」（小丑牌＝Balatro）
- **村口母猪轮番怀孕（7/24）逐語**：
  > 「有点上头，甚至有时弄出完美搭配时有点爽感，又不缺乏挑战性，**有时候阵容就有那么一点纰漏就直接卡住，阵容搭配对了，又是直接碾压式过关**，刚玩的时候看似无脑哪个等级高选哪个然后一直点翻牌就完事，**后面一次次卡关强行逼我动脑组搭配**，整体来说挺上头的，其次方便，**没人催你做选择，可以挂在一边**」
- **纵有千古（8/11）逐語**：「有时候**血心吊坠**不能触发所有的**棺材**，在**大概100个以上棺材**的时候不能全部打开」
  （**血心吊坠＝Blood Heart Pendant（レリック）。棺（coffin）を開ける効果**。100 個超で頭打ちになる）
- **笑着哭（8/8）逐語**：「增量游戏，解压，不过**这类游戏通病，后面越来越无聊**」
- **雨季（7/27）逐語**：「很爽，就是**无尽有点太简单**」

### 繁體中文
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=tchinese
- **lin0300260（8/10）逐語**：
  > 「重玩性還不錯，但『**為什麼明顯第10個階段了，當前存款早已遠多於目標金額(酒債),還得浪費時間拋硬幣......超級不合理，請添加『直接還債』的選項**』」
- **ͦollͤǝн（7/31）逐語**：「還不錯玩，消磨時間。但有個建議**能不能有個按鈕提前交錢**」
- **卡布丁（7/25）逐語**：「**跟租戶賭財運一樣**，不小心把這遊戲玩壞掉了，**無盡模式永遠結束不了**XD」（＝Luck be a Landlord）
- **hoxv00（8/10）逐語**：「很棒，**比起試玩版又增加了更多流派**」

### 한국어
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=koreana
- **나무인형（7/26）逐語**：「게임은 재미있으나 **배속 4배는 너무 느림 무한모드 가면 갈수록 한 라운드마다 시간이 오래 걸리는데** 그냥 지침...」
- **wlghdhkgod（8/21）逐語**：「**후반에 게임이 너무 너무 느려서 지루해짐**」
- **alstole（7/24）逐語**：「**게임이 너무 쉬워서 별로 맛이 없음.**」
- **Kark（7/25）逐語**：「**뇌빼고하기 아아아아주 좋음**」（脳を抜いて遊ぶのに最高）
- **Emiya（8/4）逐語の一部**：「황금별 업적 할려고 **메타몽** 작해놨더니...」（메타몽＝百變怪＝Shapeshifter）
- **Napols（8/18）の「아쉬운 점」逐語**：
  > 「-동전 가방을 연 상태에서 빈영역 터치로 닫히면 좋을듯
  > -게임 종료 선택에서 좌우 1칸씩만 이동 가능 (좌우 스크롤로 여러 단계 이동 가능하면 좋을듯)
  > -**좀 더 이펙트가 강하면 좋을듯 (파워 게이지 방식으로 쾅하고 친다거나 특정 위치를 중심으로 친다거나 등)**」

### English
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=english
- **Mojo（7/26）逐語**：§7 に既出。加えて「the game doesn't respect your time」「**play 8 hours of [grinding] to unlock any actual challenge**」／AI 利用の未開示を理由に返金要求。
- **Keny McCormick（7/27）［要約］**：AI 利用の未開示（Steam ポリシー違反）を指摘。「terribly boring」「**no coin flipping physics**」。
- **El Señor Dano（Jul 24、議論スレ）逐語**：
  > 「Very disappointed with it. **The payout increases for each round is so low that you can easily outscale it and go infinite** every when your scaling isn't even crazy.
  > My first run taken to endless is already in **Round 41** and getting that far doesn't even feel rewarding. **It really wore out its welcome by round 20, maybe even 15.**
  > … If you don't want to the design extra, just **adjust endless so the cost increases are exponential** so it becomes impossible to keep up after a while.」
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/592936492464271401/
- **Rwyn（Aug 1）逐語**：「**higher exponential targets** / **The possiblity to skip stages if the target debt is reached**」
  → Captain_Crumbcake 逐語：「Skipping stages on its own is alright if your build is truly OP but it generally sets you up for failure. **What would be nice is some relics or perks to provide an actual incentive for skipping.**」
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/588433820963862077/
- **Spuzy（Aug 4）逐語の一部**：
  「I played 4 runs of it, **it's a bit too easy** and for new scenarios we are **FORCED to play the beginner difficulty**. … **there is no way I will play a run where I get enough money to win the whole level 60% into the run and then am forced to watch the animations for 15 more minutes**」
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/588434092960281847/
- **Michael（May 5、Balatro との比較）［要約］**：
  「**ラウンドのスコアが見づらく、後付けのように見える。**今どれだけ強いかが見えることは組み合わせを考えるうえで大事。
  **Basic Coins が湧くのでどのコインが働いたのか追えない。**
  **Balatro のジョーカーに比べ、アイテムがコインほど大きな役割を果たしていない。**
  **方針転換に必要なコインの数が Balatro より多い。店の枠を 3 から 4〜5 に増やしてほしい。**」
  出どころ：https://steamcommunity.com/app/4358310/discussions/0/844005195821100842/

### Deutsch
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=german
- **fuchsvv（7/31）逐語**：
  > 「Ich finde das Spiel großartig. Tolle Animationen, Relaxen, Spielen, Spannung. **Die Unterschiedlichen Orte bieten auch unterschiedliche Voraussetzungen.** Top-Spiel zu kleinem Preis. Was ich noch wünschen wäre ist, dass **für jeden Level die beste Leistung in einer Statistik gezeigt wird**. Aber wahrscheinlich zu viel Aufwand. Also von meiner Seite: DAUEMEN HOCH und bitte weitere Updates.」
- **svenny（7/28）逐語**：「cool sehr chilliges Spiel :)」

### Français
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=french
- **Formboy（7/25）逐語**：「Petit jeu sympathique. **Très similiaire a landlord mais le systeme de 'monde' apporte une petite touche qui change le gameplay quand vous voulez.**」
- **Oro（7/24）逐語**：「Tu lances des pièces ça fait des trucs gg」
- **billytarget（7/26）逐語**：「Voir ses petites piécettes combotillées c'est assez fun !」

### Русский
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=russian
- **Ugandon Warrior（7/29、3.0 時間）逐語**：「прикольная можно залипнуть, но **простовата**」（面白くて没頭できるが、**やや単純すぎる**）
- 関連：1.0.04「Fix the issue of **excessive character width in Russian and Ukrainian**」／
  議論スレ「Russian localization – **font/letter spacing is broken throughout the game, hurts readability**」
  https://steamcommunity.com/app/4358310/discussions/0/592936492464216408/

### Español
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=spanish
- **Unpatogamer（7/23）逐語**：「bastante entretenido lo unico **las animaciones y la manera que voltean las monedas las mejoraria**」

### Türkçe
出どころ：https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=turkish
- **calisharun（8/3）逐語**：「çok iyi oyun tavsiye ediyorum :)」
- **afroi7（8/1）逐語**：「Eğlenceli, çerezlik bir oyun」
- 議論スレ（Murad, Jul 29）逐語：「oyunu güncelledikten sonra açmak istediğimde **failed to load il2cpp** hatası alıyorum oyun açılmıyor」
  → **Unity + IL2CPP 製であることが読める**（データ抽出が容易でない理由）
  https://steamcommunity.com/app/4358310/discussions/0/588433527532467858/
- 1.0.06：「Fixed **translation errors for the Cheat Die in Turkish, Polish and Czech languages**」

---

## 9. ビルド・コンボの実例（まとめ）

| ビルド名（当方の呼び） | 中身 | 到達した数字 | 出どころ |
|---|---|---|---|
| **カエル（Frog）** | frog + jump dice + そのレリック + breeder + Dog + Faun + witches/mermaids、**他は全部抜く** | frog 単体 **500 超 → 620 → 37.7K** | 英 discussions/565911090118199179 |
| **カエル＋爆弾** | 10 bomb guys + 10 frogs + Frog relic + 付加物 | 「a round over 4000」 | 同上 |
| **吸血鬼×デーモンハンター（無限ループ）** | Vampires + Demon Hunters + 双方のレリック + 「袋に必ず入る」宝石 + 「破壊された最高値を複製」レリック + 「常に表で着地」レリック。**倒された吸血鬼が棺になり、棺がまた吸血鬼になる** | **1 ラウンドで 100 万超**／通算 **1000 万で酒場を購入** | 英 discussions/592936781602706383 |
| **釣り人→マーロック→クレリック** | 3-4 fishermen / 1-3 clerics / 残り murlocks。3 種を同時に強めるレリック（fisherman level up、魚を食べたら新 murlock、浄化した魔物ぶんクレリックの基礎値上昇）＋ **Panda** ＋「効果をもう一度起こす宝石」 | 惜敗と報告 | 英 discussions/658233614222303001 |
| **ライオン＋不死の羊＋パン（Pan）** | Lion + immortal sheep + several Pans（複製系バフ） | コイン値 **1161**／別報告で lion **level 397** | 英 discussions/565911090118199179 |
| **盗賊（Thief）＋復活石＋保安官＋踊り子** | thief は**復活しても n 値がリセットされない**ので、撃たれるたび値が上がる | ― | 同上 |
| **海賊＋真珠商** | pirates（**全額を奪うアップグレード**）+ pearl merchants | 「most busted combo」 | 同上 |
| **章魚（Octopus）定場** | **20 隻の章魚**で場を固定、**炸彈手に「固定上場宝石」**、**採珍珠船**などコインを生むコインを優先 | **袋のコイン 200 枚超**でステージ要求を必ず超え、**300 枚超**で 1 ラウンドの稼ぎが 1 ステージ分 | 繁 discussions/592936492464250670 |
| **機械（Moving Castle）** | Slot machine / Robot Butler + Magic Mirror + Goblin Engineer + Crystal Ball | エンドレス **stage 34 / 25 兆** | 英 discussions/565911090118199179 |
| **粘土巨人（Clay Giant）＋ Double Gem** | 合体のたびに面値が指数的に増える**不具合**（1.0.05 で修正） | **Stage 10 終了時に 10 億超** | 英 discussions/588433527532467576 |
| **大变活人＋红炸弹** | 全部壊れても復活し、**币值が再計算されない**。舞娘と合わせると**上限を大きく超える枚数**が場に出る | 「40 个币在第一回合出现，随手 4 万起步」 | 简 discussions/592936781602794383 |
| **人間（Humans）** | 何かでバフしてから **kings と pandas** で締める | 「最高難度でも安定」 | 英 discussions/565911090118199179 |
| **骸骨（Skeletons）** | 人間→骸骨変換レリック。**20 体並べても届かない**（弱い） | **失敗例として記録** | 英 discussions/836124703224503071 |

---

## 10. 資料どうしの食い違い（**どちらが正しいかは確かめられなかった**）

1. **コイン／レリックの数**：6 月告知「150 / 200」 vs 7 月告知「164 / 204」。宝石 16 は 6 月告知にしか無い。
2. **無限モードの伸び方**：
   - 简中レビュー：「每一轮才加一万」（**一次増加・+10,000/ステージ**）
   - 繁中投稿：「这个无尽模式**线性增长**的」（**一次増加**）
   - 英語 SEO wiki：「rising debt targets」としか書かない
   → 一次増加である点は 2 件で一致。**具体的な開始値は不明。**
3. **一ラウンドの「振り回数」**：英語 SEO wiki だけが "flip allowance" を主張。韓国語の詳細記述にはその概念が無い（§5-4）。
4. **賭博師（Gambler）の判定**：
   - novalesca：「A binary character. One side he wins(face) one side he loses」
   - Justin：「**When the gambler lands face up, he rolls his 50/50. Landing face down just gives you his value and doesn't trigger his gamble.**」
   → **表が出て初めて 50/50 を振るのか、表裏そのものが勝敗なのかで食い違っている。**
5. **Cheat Dice の効果**：旧文言「損を勝ちに変える」／実挙動「リセットは起きるが +2 から再スタート」／新文言「Before triggering Value Reset to 0, there is a 50% chance to turn this effect into increase its own value by 2.」
6. **狸猫（Tanuki）が復活したときに何になるか**：the_Gonopo「**they sometimes revive as the thing they were impersonating instead of turning back into a tanuki**」「it only happens sometimes」→ **意図か不具合か、開発者の回答が無い。**
7. **鸟窝（Bird's Nest）が効くかどうか**：「购买后什么作用都没有」vs「鸟窝好用的哦亲」／「発動条件の書き方が悪いだけ」。

---

## 11. 当たり前になっているが、理由がどこにも書かれていないもの

1. **ステージ開始時に机へ出るのは「最大 20 枚」。**なぜ 20 なのかを説明した資料は無い。
   だが**この 20 という上限が、このゲームで最も苦情を集めている数値**である
   （「高価値コインが袋に残る」「デッキを増やすと主力が引けない」）。
2. **「着地した面に関係なく面値ぶんの金が入る」。**
   つまり**投げは損得の判定ではなく、効果の発動判定にしか使われていない。**
   なぜそうしたかを書いた資料は一件も無い。**これがこのジャンルの本体かもしれない。**
3. **宝石はコイン 1 枚につき 1 個、かつ付け替えられない。**理由の記述は無い。
   ただしこの一点が「合体でコインが宝石ごと食われる」という最大級の苦情を生んでいる。
4. **ラウンド間に必ず「3 枚から 1 枚選ぶ」。店も 3 枠。**
   3 という数の理由はどこにも無い。**プレイヤーは 4〜5 枠を要求している。**
5. **借金を早く払えるのに、最終ラウンドまで投げさせられる。**
   繁中・英語の両方から同じ苦情が出ている（「請添加『直接還債』的選項」「forced to watch the animations for 15 more minutes」）。
   **設計側の意図の説明はどこにも無い。**

---

## 12. 昔と今で変わったもの（変えた理由が残っているもの）

| いつ | 何が変わったか | 変えた理由（分かる範囲） |
|---|---|---|
| Demo → 製品版 | **Cheat Dice**：Demo 期は「発動しても賭博師が全値を失う」不具合。製品版で修正 | General Heavy の報告（英語）。開発者が「description text for it has been revised in the patch」と明言 |
| 1.0.04（07-29） | **モード解放条件を「2 つ目の難度クリア」から「1 つ目」に緩和**／解放後は**任意の難度を選べる**ように | Steam レビュー・議論の「beginner を強制されるのが苦痛」という苦情に対応したものと読める |
| 1.0.04 | **難度 1 の要求値をわずかに引き上げ** | 「too easy」という苦情群 |
| 1.0.04 | **Carving Knife は場に Totem が無いときだけ発動**に変更 | 理由の記述なし |
| 1.0.04 | **Hunter の対象から Dog を外す** | 理由の記述なし |
| 1.0.05（07-30） | **Magic Mirror の効果を「1 ラウンド持続」に変更** | 無限に複製が連鎖する問題（810 の複製連鎖）と関係すると読める |
| 1.0.05 | **Devotion Gem の発動を「ラウンド開始時」→「ラウンド開始前」に** | 理由の記述なし。**発動順の設計が繊細であることの証拠** |
| 1.0.05 | **Clay Giant × Double Gem の面値暴走を修正** | Stage 10 で 10 億に達する報告 |
| 1.0.07（08-05） | **Cloning Pod から [LookUp] キーワードを削除**／**Pearl Merchant の値の更新タイミングを増やし、ラウンド開始時だけではなくした** | Pearl Merchant の「値が揃わない」報告（735 / 741）への対応と読める |
| 発売後 | **無限モードで酒場を買う演出（アニメーション）を追加**（1.0.04「Add animated prompts for purchasing taverns in endless mode」） | 「封筒アイコンに気づかない」という声 |

---

## 13. 当たった言語と、その言語で何件取れたか

| 言語 | 資料の件数 | 内訳 | 実物（コイン／宝石／レリックの名前や効果文）が取れたか |
|---|---|---|---|
| **English** | **27** | Steam 議論 20、レビュー 4、パッチノート 5（重複あり）、ストア、実績 | **取れた（最多）**。宝石 4 種の効果文、レリック 12 種、コイン 30 種以上 |
| **简体中文** | **13** | Steam 議論 5、レビュー 8 | **取れた**。**コイン効果文の逐語 5 件（狮子・狸猫・坟墓・海盗・幻叶）**、レリック 5 種、レアリティ「铜卡/银卡/金卡」 |
| **繁體中文** | **9** | Steam 議論 5、レビュー 4 | **取れた**。**ゲーム内効果文の書式 1 件**、章魚ビルド、珍珠の仕様、狗頭人戰鼓、百變怪 |
| **日本語** | **7** | レビュー 6、実績（公式訳 59 件） | **公式訳は取れた。効果文は 0 件。**コイン名は「たこ／カエル／サキュロス／飼育員」のみ |
| **한국어** | **11** | レビュー 10、実績（公式訳 59 件） | **構造の記述としては最良**（Napols）。**個別の効果文は 0 件** |
| **Deutsch** | 2 | レビュー 2 | **実物 0 件** |
| **Français** | 3 | レビュー 3 | **実物 0 件**（Luck be a Landlord との比較のみ） |
| **Русский** | 2 | レビュー 1、議論 1（ローカライズ不具合） | **実物 0 件** |
| **Español** | 1 | レビュー 1 | **実物 0 件** |
| **Türkçe** | 3 | レビュー 2、議論 1 | **実物 0 件**（IL2CPP であることのみ） |
| **Português** | **0** | — | **レビュー 0 件を確認した**（filterLanguage=brazilian で「No more content」） |
| **Polski** | **0** | — | **レビュー 0 件を確認した**（filterLanguage=polish で「No more content」） |
| **Čeština / Українська** | 0 | — | 当たっていない（パッチノートに言及があるのみ） |

**合計：78 件（重複を含む）／ 12 言語に当たり、10 言語で何かが取れた。**

---

## 14. 出どころが一件しかない答え（**単一情報源リスク**）

| 主張 | 唯一の出どころ |
|---|---|
| **1 ラン＝10 ステージ** | 韓国語レビュー Napols のみ（Clay Giant の「end of Stage 10」が傍証） |
| **1 ステージ＝10 ラウンド** | 简体中文レビュー 烤鹌鹑 のみ |
| **ステージ開始時に袋から最大 20 枚** | 韓国語レビュー Napols のみ |
| **店の通貨は「チケット」** | 韓国語レビュー Napols のみ（简中の「重抽票」が傍証） |
| **宝石はコイン 1 枚に 1 個** | 韓国語レビュー Napols のみ |
| **無限モードは +10,000／ステージ** | 简体中文レビュー 烤鹌鹑 のみ |
| **酒場の買い取り価格 500 万〜1 億** | 英語スレ 1 件のみ（別のプレイヤーの「10,000,000」が部分的な傍証） |
| **bronze プールは 20 種** | 英語 Drachnon 1 件のみ |
| **Neutral（中立）という第 5 の分類** | 英語 Elite 1 件のみ（**開発者ではない**） |
| **Jump Gem の文言** | 英語 [OTG] Idemus 1 件のみ |
| **Red Gem＝効果の複製** | 英語 E_Turne 1 件のみ |
| **珍珠はステージ終了で「道具」に変わる** | 繁體中文 s119009t 1 件のみ |

---

## 15. 探したが出てこなかった問い（**三通り以上、語を変えて探した**）

1. **コイン 164 種の名前と効果の一覧** — 英・日・简・繁・韓の 5 言語で
   「all coins / 一覧 / 图鉴 / 列表 / 목록 / 大全」の語を変えて検索。**どこにも無い。**
2. **レリック 204 種の一覧** — 同上。**無い。**
3. **宝石 16 種の一覧** — 同上。**7 種しか名前が挙がらない。**
4. **借金の段ごとの額の通しの並び**（stage 1 から 10 まで） — **どのモードについても無い。**
   断片が 4 件（$6,000／10k→30k／20000／+10,000）あるだけ。
5. **一ラウンドの振り回数の上限** — **一次資料にゼロ。**
6. **難度の段の数と名前**（beginner / easy / … / highest） — **beginner と easy の 2 つの名前しか確認できなかった。**
   「difficulty 1」という表記がパッチノートにあるだけ。
7. **金より上のレアリティ段があるか** — **確認できず。**
8. **レリック・宝石にレアリティ段があるか** — **一件も記述が無い。**
9. **Reddit にどれだけ書き込みがあるか** — **クローラが弾かれて到達不能。**取れたかどうかも不明。
10. **公式 Discord のログ** — 招待リンクが「期限切れ」との報告あり（繁體中文 discussions/800092239616363975）。**中身に到達できず。**
11. **開発者インタビュー／ポストモーテム／講演** — **どの言語でも一件も見つからなかった。**
    開発元 Woven Dream Isle についての記事も無い。

---

## 16. 参照 URL 一覧（**すべて実際に開いて中身を見たもの**）

### ストア・公式
- https://store.steampowered.com/app/4358310/Coin_Tavern/
- https://steamcommunity.com/stats/4358310/achievements/
- https://steamcommunity.com/stats/4358310/achievements/?l=japanese
- https://steamcommunity.com/stats/4358310/achievements/?l=schinese
- https://steamcommunity.com/stats/4358310/achievements/?l=koreana

### パッチノート（Steam ニュースの転載）
- https://changelog.gg/games/coin-tavern-4358310/
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-08-05-patch-notes-1-0-07-80d1c3e4065bb576
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-08-04-patch-notes-1-0-06-d1030281660d4752
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-30-patch-notes-1-0-05-fbe3c0af43b116a1
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-29-patch-notes-1-0-04-17f64debbd27c461
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-07-23-coin-tavern-releases-fully-today-f17c98ea0cc0dc1e
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-06-08-release-date-confirmed-and-full-version-content-preview-ddb2e7a3c8d00b99
- https://changelog.gg/games/coin-tavern-4358310/updates/2026-05-26-coin-tavern-demo-major-update-45b256bd54a51b3c

### Steam 議論（英語）
- https://steamcommunity.com/app/4358310/discussions/
- https://steamcommunity.com/app/4358310/discussions/?fp=2
- https://steamcommunity.com/app/4358310/discussions/?fp=3
- https://steamcommunity.com/app/4358310/discussions/?fp=4
- https://steamcommunity.com/app/4358310/discussions/0/565911090118199179/ （Write your favorite strategies!）
- https://steamcommunity.com/app/4358310/discussions/0/84032037661558707/ （crystal ball moves 100 coins）
- https://steamcommunity.com/app/4358310/discussions/0/84031737849688674/ （The Scaling is Off）
- https://steamcommunity.com/app/4358310/discussions/0/585056732983702421/ （Lion Suggestion）
- https://steamcommunity.com/app/4358310/discussions/0/837251071121454757/ （Gambler's Cheat Dice）
- https://steamcommunity.com/app/4358310/discussions/0/588433527532467576/ （The Billion Dollar Clay Giant）
- https://steamcommunity.com/app/4358310/discussions/0/588433527532631981/ （Strange values）
- https://steamcommunity.com/app/4358310/discussions/0/588433820963862077/ （Endless Mode Improvements）
- https://steamcommunity.com/app/4358310/discussions/0/588433820963923183/ （couple suggestions）
- https://steamcommunity.com/app/4358310/discussions/0/592936492464233852/ （Red Gem not working on cleric）
- https://steamcommunity.com/app/4358310/discussions/0/592936781602706383/ （Pointers needed）
- https://steamcommunity.com/app/4358310/discussions/0/588433527532577272/ （Bug Report Cloning Pot）
- https://steamcommunity.com/app/4358310/discussions/0/592936492464271401/ （Worst Endless Mode I've seen in a game.）
- https://steamcommunity.com/app/4358310/discussions/0/588433527532645579/ （Permanent Upgrades?）
- https://steamcommunity.com/app/4358310/discussions/0/592936781602682530/ （Frankenstein doesn't count some destructions）
- https://steamcommunity.com/app/4358310/discussions/0/565911090118115113/ （What does the Jump Gem do）
- https://steamcommunity.com/app/4358310/discussions/0/561409599920596780/ （Wording feedback）
- https://steamcommunity.com/app/4358310/discussions/0/836124703224503071/ （Skeletons are a bit of a trap）
- https://steamcommunity.com/app/4358310/discussions/0/658233614222303001/ （Neat Combo）
- https://steamcommunity.com/app/4358310/discussions/0/561409322576251441/ （Revive Gem Bug）
- https://steamcommunity.com/app/4358310/discussions/0/588434092960281847/ （Harder difficulties instant unlock）
- https://steamcommunity.com/app/4358310/discussions/0/844005195821100842/ （My impressions）
- https://steamcommunity.com/app/4358310/discussions/0/592936492464216408/ （Russian localization broken）

### Steam 議論（中文・繁中・土耳其語）
- https://steamcommunity.com/app/4358310/discussions/0/588433820963941531/ （bug修一修・简）
- https://steamcommunity.com/app/4358310/discussions/0/592936781602794383/ （大变活人+红炸弹太bug了！・简）
- https://steamcommunity.com/app/4358310/discussions/0/592936492464250670/ （無盡模式上限・繁）
- https://steamcommunity.com/app/4358310/discussions/0/592936492464199680/ （bug回報・繁）
- https://steamcommunity.com/app/4358310/discussions/0/592936492464245197/ （珍珠不被算入上场硬币数・繁）
- https://steamcommunity.com/app/4358310/discussions/0/564784556120508506/ （童話模式根本是青蛙的天下啊・繁）
- https://steamcommunity.com/app/4358310/discussions/0/809100726410305976/ （硬币上场概率和刷新是否有问题・简）
- https://steamcommunity.com/app/4358310/discussions/0/800092529560126528/ （理论上的1000币？・简）
- https://steamcommunity.com/app/4358310/discussions/0/800092562772762691/ （部分道具未实际生效・简）
- https://steamcommunity.com/app/4358310/discussions/0/800092239616363975/ （試玩時發現的幾個問題・繁）
- https://steamcommunity.com/app/4358310/discussions/0/800092239616356397/ （商店刷新问题・简）
- https://steamcommunity.com/app/4358310/discussions/0/588433527532467858/ （güncellenme sonrası sorun・土）

### Steam レビュー（言語フィルタ）
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=english
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=japanese
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=schinese
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=tchinese
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=koreana
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=russian
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=german
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=french
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=spanish
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=turkish
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=brazilian （**0 件を確認**）
- https://steamcommunity.com/app/4358310/reviews/?browsefilter=toprated&filterLanguage=polish （**0 件を確認**）

### その他（**中身が無かったことの証拠として残す**）
- https://cointavern.wiki/coins/monsters/ （**コイン名ゼロ**）
- https://cointavern.wiki/guides/how-to-play/ （"flip allowance" の出どころ。数値ゼロ）
- https://steamcommunity.com/app/4358310/guides/ （**ガイド 0 本**）
- https://ku.gamersky.com/2026/coin-tavern/?tag=wap （紹介文のみ。**攻略記事リンク無し**）
- https://todaywegame.gg/demos/coin-tavern （**本文が取れず**）
- https://www.mobygames.com/game/265138/coin-tavern/ （**HTTP 403**）
- https://www.youtube.com/watch?v=mOHPa16tb10 （**タイトル「I Built a Coin Circus to Pay Off My $6,000 Debt」のみ確認。本文は取得不能**）
