# RACCOIN: Coin Pusher Roguelike — 生の記録（コイン／チップ／その他）

- **調べた日：2026-08-22**
- **調べた理由：spice-lanes の特産品の効果とレアリティを作るため**
- 対象作品：『RACCOIN: Coin Pusher Roguelike』（日本語表記「ラッコイン」／簡体中文「浣熊推币机」／繁體中文「浣熊推幣機」／한국어「라코인」）
  開発 Doraccoon、販売 Playstack、Steam 2026年3月31日、App ID **3784030**
- この文書は**要約ではない。**効果の文は資料に出ていた形のまま引く。訳を付けた箇所は「訳：」と明記する。
- **推測で埋めた箇所は無い。**取れなかったものは「見つからなかった」と書いてある。

---

## 0. まず、資料の質について（この記録を読む前に必ず読むこと）

この作品を検索すると、**中身が食い違う二系統の資料**が出てくる。両方を記録するが、
**どちらが正しいかを確かめられた／られなかったを、一件ごとに書く。**

### 系統A：ゲーム内ツールチップをそのまま写したと見られるもの
- Steam ガイド「100% Collection」（Permatoma、英語、v1.1.0）
- RACCOIN Wiki（wiki.gg、英語）

この二つは**互いに独立**でありながら、コイン名・効果文・レアリティ配分が**ほぼ一字一句一致する。**
コイン名は「-oin」で終わる駄洒落（Cat→**Catoin**、Rat→**Ratoin**、Seed→**Seedoin**、Multi→**Multicoin**）。
合計も 26+51+45+28 = **150** でぴったり合う。

### 系統B：一般名詞の英語名を使うもの
- gamerch「ラッコイン攻略Wiki」の「最強コンボリスト」（日本語）
- raccoincoinpusherroguelike.wiki / raccoin.wiki / rac-coin.wiki（英語、複数ドメイン）
- games.gg の一部記事、gamerekt、xmodhub

この系統は **Rainbow Coin / Crown Coin / Fire Coin / Magnet Coin / Lucky Coin / Ice Coin / Ghost Coin /
Coin of Greed / Shield Coin / Portal Coin / Black Hole Coin**、
アイテム **Chain Reactor / Animal Tamer / Rainbow Catalyst / Lucky Dice / Drop Refund / Money Tree Fertilizer**、
キャラクター **Pyro / Clockwork Engineer / Shadow Thief / Raccoon Manager** を挙げる。
**これらは系統Aの150枚・100チップ・7キャラクターのどこにも存在しない。**

さらに、系統Bのサイト同士は語彙も数値も互いに一致しており、
**系統Aと系統Bの間に、名前が一つも重ならない。**
（例外は Steam ストアの宣伝文にある6枚だけ。宣伝文は Seed / Water / Cat / Rat / MultiCoin / TNT を
「Seed Coin」「Cat Coin」のような一般名で書いているので、系統Bはここから膨らませたと見られる）

> **どちらが正しいかは、こちらでは確かめられなかった。**
> ただし、系統Aは (1) 二つの独立資料が一致し、(2) 合計数がストア公称の150と一致し、
> (3) wiki.gg は「生成AIによる本文執筆を厳禁」と明記しており、
> (4) Steam の実プレイヤー掲示板の書き込み（Collapsoin / Omuricecoin / Seven-Herb Porridge /
> Christmas Stocking / Knight card）が系統Aの名前だけを使う。
> 系統Bの名前は、実プレイヤーの掲示板書き込みに**一件も現れなかった。**

**以下、断りのない限り系統Aを本文に置き、系統Bは第9章に隔離して全文載せる。**

---

## 1. 一次情報：Steam ストアページ

**出どころ：** https://store.steampowered.com/app/3784030/RACCOIN_Coin_Pusher_Roguelike/
**言語：English（同ページの各国語版も確認）／取得日 2026-08-22**

- Release Date: **March 31, 2026**
- Developer: **Doraccoon** / Publisher: **Playstack**
- 価格 $11.99 USD、Steam実績 **23個**
- レビュー：直近30日 **192件中77%好評（Mostly Positive）**、全体 **2,619件中84%好評（Very Positive）**
- 対応言語 **10**：English, Simplified Chinese, Traditional Chinese, French, German,
  Spanish (Spain), Japanese, Korean, Portuguese (Brazil), Spanish (Latin America)
  → **ロシア語・ポーランド語・トルコ語の公式対応は無い。**（ロシア語は有志翻訳のみ。§8参照）

公称の数：
- **6 playable characters**, each with distinct coin sets and playstyles
- **150 unique coins** featuring special effects
- **150 power-up items** with unique abilities
- Endless run mode
- **8 difficulty levels**

宣伝文に出る特殊コイン6枚（English）：
> "Seed Coins with Water Coins to grow a money tree right inside your machine"
> "Cat Coin to hunt down every last Rat Coin and rack up extra tickets"
> "MultiCoin to boost your score across the board"
> "TNT Coin to trigger a massive explosion and blast every coin forward at once"

**食い違い①：** ストアは「**150 power-up items**」と書くが、
RACCOIN Wiki（wiki.gg）のコレクション表は「**100 chips**」である。
系統Bのサイトも「over 100 chips」と書く。
**150 と 100 のどちらが正しいかは確かめられなかった。**
（コレクション総数 360 の内訳が 150+18+21+100+30+20+7+14＝360 で閉じているので、
 ストアの「150 items」はコイン150枚と混同した宣伝文の可能性がある。ただし裏は取れていない）

---

## 2. 特殊コイン 150枚（レアリティ別・効果文そのまま）

**出どころ①：** Steam ガイド「100% Collection」 by **Permatoma**
https://steamcommunity.com/sharedfiles/filedetails/?id=3721442011
言語：**English**／Posted: **May 9 @ 9:41am**／Updated: **Jun 26 @ 9:32am**／対象パッチ **1.1.0**
著者の前書き（原文）：
> "This guide is a quick reference to check if you have everything unlocked as well as the coins description."

**出どころ②（照合用）：** RACCOIN Wiki（wiki.gg）
https://raccoin.wiki.gg/wiki/Coins ／ https://raccoin.wiki.gg/wiki/Collection
言語：**English**／wiki.gg 上の記事数 283／
同wikiは "usage of generative AI to write content on this wiki ... is **strictly prohibited.**" と明記。

**二資料はコイン名・順序・レアリティがすべて一致した。**
効果文の差は「Tickets」と「Green Tickets」の表記ゆれ程度（§7に列挙）。

### 2-1. レアリティの段は「ある」

**日本語の資料には出てこなかったが、英語資料では明確に4段。**
コインは **Common / Uncommon / Rare / Epic**。
wiki.gg の説明（原文）：
> "Items range from Common (weakest/most accessible) to Epic (strongest/hardest to obtain)."

内訳（数はこちらで数えた）：
| 段 | 枚数 |
|---|---|
| Common | 26 |
| Uncommon | 51 |
| Rare | 45 |
| Epic | 28 |
| 合計 | **150** |

**Bad Coin（21枚）はこの4段の外にある別カテゴリ。**
**Modifier（18種）も別カテゴリで、コインに後付けする「めっき」にあたる。**

### 2-2. Common（26枚）

| 名前 | 効果（原文そのまま） |
|---|---|
| Copper Coin | "The most common coin. Your best friend." |
| Glue Coin | "Sticks to coins it touches, and +8 Value to them." |
| Tickoin | "When scored -> +20 Tickets."（wiki.gg 版は "When scored →+20 Green Tickets"） |
| Chummy Coin | "While in play/clip -> All Chummy Coins gain +5 Value." |
| Wateroin | "Waters Budoin & Seedoin by touching them, then destroyed. Conducts Energized modifier." |
| Bunny Coin | "Breed 1~2 Bunny Coins when touching Bunny Coin, then weaken." |
| Relicoin | "+15 Value per round start." |
| Eggoin | "Next round -> Becomes Hen Coin." |
| Cooinkie | "This cookie is just cruelly occupying your cabinet." |
| Poocoin | "Fertilizes Lotusoin, Budoin, Seedoin & Corncoin, then destroyed." |
| Lotusoin | "Destroys any Poocoin it touches, then breeds a Lotusoin." |
| Cloveroin | "While in play -> +3% Conversion Rate." |
| +1 Coin | "While in play/clip -> +1 to numbers of Spin Wheel rewards." |
| Minion Coin | "Each spin -> +1~30 Tickets. At round start -> 50% chance to be destroyed." |
| Bean Coin | "Unmodifiable. When spawned -> Flies to Scoring Zone." |
| Sandoin | "When in an explosion -> Becomes Colored Glazeoin. When touching Wateroin -> Becomes Clayoin." |
| Aeroliteoin | "Astrofall -> Adds 50% Score to Current Score. Next round -> Astrofalls." |
| Mercury Coin | "While in play -> +1 Ticket per Astro coin scored." |
| Marsoin | "While in play -> +0.5 Score Rate per Prize Ball spawned (Resets each round)." |
| Riceoin | "Attracts other ingredients to cook." |
| Burnt Foodoin | "The result of failed cooking. Oh no." |
| Tired Bunny Coin | "This is a weakened Bunny Coin." |
| Rotten Chococoin | "This is a weakened Chococoin." |
| Rotten Bananoin | "This is a weakened Bananoin." |
| Rotten Corncoin | "This is a weakened Corncoin." |
| Salted Fishoin | "This is a weakened Fishoin." |

### 2-3. Uncommon（51枚）

| 名前 | 効果（原文そのまま） |
|---|---|
| Silver Coin | "Triggers a random effect when scored: +2 in hand coins, +6 Tickers, +10 Value"（"Tickers" は原文ママ。誤字と思われる） |
| Bomboin | "On exchange -> Explosion." |
| Chococoin | "3 rounds later -> Weakens" |
| Radiation Coin | "+20 Value to nearby coins. (Explodes when in an explosion)" |
| Hen Coin | "At round start -> Breeds 2 Eggoins. When any Eggoin or Hen Coin is scored -> 20% chance of flying back." |
| Boost Coin | "+6 Value per coin it touches." |
| JawBreakoin | "When scored -> 90% chance to spawn a new JawBreakoin." |
| Magnetoin | "Attracts Silver & Gold Coins. At round end -> +3/6 Value per nearby Silver/Gold Coin." |
| Sensoroin | "Emits a laser to score the highest Value coin and coins in its path." |
| Wolfoin | "+12 Value when hunting Bunny Coins, Hen Coins & Turtle Coins." |
| Star Coin | "Astrofall -> Where Star Coin lands convert nearby Copper to Silver. When any coin scored -> 1% chance to astrofall." |
| Bananoin | "Grown on Coin Tree. Monkey Coin loves to eat it! Next round -> Weakens." |
| Monkey Coin | "Picks up nearby coins to fertilize Budoin, Seedoin, Corncoin. +5 Value when hunting Bananoin." |
| Primal Coin | "Scores any Silver/Gold Coin it touches, gaining +20 Value and spawning a Copper Coin" |
| Jetoin | "Value = -100~200" |
| Lightning Coin | "Applies the Energized modifier to unmodified coins it touches." |
| Ally Coin | "Converts Silver Coin touches into Ally Coin. While in play/clip -> +10 Value to all Ally Coin." |
| Bubble Coin | "Removes modifiers from coins it touches, gains +15 Value, and is scored after 3 removes." |
| Bubble Gum Coin | "Applies the Giant modifier to unmodified coins it touches." |
| Ratoin | "+8 Value when hunting various rotten Coins." |
| Mushroin | "Applies the Fungus modifier to unmodified Food coins it touches." |
| Creditoin | "Value x Debt. At round start -> Debt +15%. When scored -> Lose Tickets equal to Debt." |
| Fishoin | "On exchange -> Spawn 2 Wateroin. Next round -> Weaken." |
| Catoin | "+40 Tickets when hunting Hen Coin, Ratoin & Fishoin." |
| Frozen Coin | "Applies the Icebound modifier to unmodified coins it touches." |
| Workoin | "On exchange -> +8 Tickets. 3 rounds later -> Corrupts into Creditor Coin." |
| TNT Coin | "Applies the Gunpowder modifier to unmodified coins it touches. When in an explosion -> Big explosion, then is destroyed." |
| Earthquakoin | "When scored -> Shake the cabinet." |
| Hypnoticoin | "Applies the SleepWalk modifier to unmodified coins it touches. On exchange -> Move towards Scoring Zone." |
| Magicoin | "Non-Chaos coins touched become Chaos coins with the same rarity." |
| Blind Boxoin | "Triggers a random effect next round: Becomes Epic coin, Corrupts to Mimicoin" |
| Dice Coin | "Triggers a random effect next round: +1 Score Rate (permanently), Nothing, Corrupts to Pooroin" |
| Red Packet Coin | "When scored -> +5~80 Tickets." |
| Percentoin | "When scored -> Adds 10% of Target Score to Current Score (Effect weakens as rounds increase)." |
| Bait Coin | "While in play -> +1 Value to all Copper Coins." |
| Raw Ore Coin | "When in an explosion/shaken -> +20 Tickets, and become Sandoin/Quartzoin/Amethystoin/Diamondoin." |
| Quartzoin | "Valuable. When scored -> +15 Value to Quartzoin, Amethystoin & Diamondoin." |
| Meteoroin | "Astrofall -> Spawns 2 Aeroliteoin. Next round -> Becomes Aeroliteoin." |
| Venusoin | "When scored -> Generates Light Balls that +20 Value to 5 Astro coins." |
| Jupiteroin | "4 Satellites explode when touching new coins, and +5 Value to coins in explosion." |
| Dr. Balloin | "Taps nearby new Prize Balls. +45 Value per tap." |
| Doughoin | "Attracts other ingredients to cook. While in play -> +0.1 Score Rate." |
| Clayoin | "Absorbs other Clayoins to boost its size and Value." |
| Colored Glazeoin | "While in play/clip -> Boosts the chance for Raw Ore Coin to spawn high-rarity coins." |
| Budoin | "Get Nutri when fertilized by Wateroin, Poocoin, Rotten Bananoin & Rotten Corncoin. At full Nutri -> Grows a Coin Flower." |
| Rice Balloin | "When scored -> +15 Tickets per remaining exchange." |
| Omuriceoin | "Attracts specific ingredients to cook. When scored -> Gain Bonus Coins equal to 50% of in hand coins (Up to 200 coins)." |
| Mushroom Rice | "When scored -> Scores nearby Mushroin, Mushroin Rice & Mushroin Pizza." |
| Rice Pudding | "Valuable. When scored -> 88% chance to spawn a new Rice Pudding." |
| Seven-Herb Porridge | "While in play/clip -> +5% Conversion Rate. When scored -> +5% Conversion Rate until next round." |
| Chikuwaoin | "On exchange -> Gains Value equal to 1.5x Score Rate." |

### 2-4. Rare（45枚）

| 名前 | 効果（原文そのまま） |
|---|---|
| Gold Coin | "Triggers a permanent effect when scored: +0.1 Score Rate OR +1 initial Copper Coin." |
| Seedoin | "Gets Nutri when fertilized by Wateroin & Poocoin. Grows a Coin Tree at full Nutri or at round start." |
| Atomicoin | "Big explosion when touching another coin." |
| Multicoin | "Apply x3 Value to new coins Multicoin touches." |
| Square Coin | "Value = 25 x Square Coin quantity^2." |
| Fried Chickoin | "Just yummy." |
| Giraffe Coin | "At round start -> Long neck sweeps around twice." |
| Moon Coin | "Astrofall -> +3 Tickets per nearby Silver, Gold & Coinrona. On exchange -> 50% chance to astrofall." |
| Roulette Coin | "When scored -> Spins Bad Coin Russian Roulette once." |
| Popcorn | "Just yummy." |
| Equal Coin | "When spawned -> Gains Value equal to 12x the highest sale price among coins in clip." |
| Stomachoin | "While in play -> Spawns a Bunny Coin/Hen Coin/Fishoin after 3 hunts." |
| Whirlwind Coin | "Spawns Coinado. After 12 coins inserted -> Moves towards Scoring Zone." |
| Saw Coin | "Saws unmodified coin into 4 Mini coins. (Destroyed after 15 uses)" |
| Pigeoin | "+3 Value when hunting Corncoin & Popcorn (unless Corncoin < 3). When inserted -> Poops 4-9 Poocoin." |
| Bullish Coin | "While in play -> +1 Score Rate." |
| Rocketoin | "When on lower platform -> Charges to Scoring Zone, then it is destroyed Big explosion on touching Astro coin." |
| Frogoin | "Jumps backwards and +1 Value to Lotusoin in play after 5 coins inserted." |
| Speakeroin | "+3 Tickets to sale price of all coins in clip, per new coin it touches." |
| Greater Coin | "On exchange -> Scores nearby coins with higher Value." |
| Snowman Coin | "Starts with a high Value and large size. Over time or when in an explosion -> Both Value and size reduce." |
| Palette Coin | "Applies its modifier to nearby coins, then is destroyed." |
| Richoin | "When inserted and at round start -> +0~5 in hand coins." |
| Slime Coin | "While in play -> +5 to Glue Coin's effect value. On exchange -> Scores coins glued by Glue Coin." |
| Emoin | "Converts nearby Bad Coin to Baby Bad Coin. (Ignores BadBad)" |
| Rooster Coin | "When inserted -> triggers round effects of nearby Animal, Plany and Eggoin once."（"Plany" は原文ママ） |
| Chomp Coin | "Hunts the most valuable nearby Animal coin. On exchange -> Breeds a Bean Coin." |
| Amethystoin | "Highly valuable. When scored -> +0.1 Score Rate (permanently)" |
| Comboin | "Value = current Combo." |
| Coinrona | "Valuable. Spawned from Astrofalling Sun Coin." |
| Coinmet | "Astrofall -> +25 Value to nearby Astro coins. Next round -> Becomes Meteoroin." |
| Earthoin | "For each unique 'planet' coin in play -> Value x5." |
| Uranusoin | "At round start -> Drop a Prize Ball." |
| Greenoin | "Attracts other ingredients to cook. When inserted -> +10 Tickets." |
| Fridgeoin | "Nearby Food Plant coins won't weaken. On exchange -> Spawns 1~2 Food coin(s)." |
| Sushioin | "When scored -> Recover 1 exchange." |
| Veggie Burgeroin | "Attracts specific ingredients to cook. +1 Value after 3 Tickets earned." |
| Egg Puffsoin | "While in play/clip -> +12 Value to Bonus Coins." |
| Mushroin Pizza | "When inserted/scored -> Applies the Fungus modifier to nearby unmodified Food/Animal coins, and +20 Value to nearby Fungus coins." |
| Swiss Rolloin | "Value = 2x number of Jawbreakoins, Rice Puddings, Tanghuluoins & Swiss Rolloins spawned this run. When scored -> 50% chance to spawn a new Swiss Rolloin." |
| Clover Fritteroin | "Value = 3x Conversion Rate. While in play/clip -> +6% Conversion Rate." |
| Sour Fish Soupoin | "+1 exchange after 100 Tickets earned. When destroying nearby Wateroin -> +15 to progress." |
| Tanghuluoin | "When scored -> Gain Tickets equal to number of Jawbreakoins & Tanghuluoins spawned this run, and 65% chance to spawn a new Tanghuluoin." |
| Saladoin | "While in play/clip -> +8 Conversion Rate. When scored -> Gain Tickets equal to Conversion Rate." |
| Beggar's Chickeoin | "At round end -> +50 Tickets." |

### 2-5. Epic（28枚）

| 名前 | 効果（原文そのまま） |
|---|---|
| Sun Coin | "Astrofall -> Converts nearby Silver Coins to Coinrona. When Astro coins scored -> 30% chance to astrofall." |
| Battery Coin | "At round start -> Removes Energized modifiers of nearby coins. Each remove -> Value x1.1." |
| Corncoin | "Next round -> Grow into a Corn Tower or weaken. When fertilized by Poocoin -> 30% chance to grow immediately." |
| Fireball Coin | "When in an explosion -> Value x1.4. When touching Wateroin -> Value x0.5." |
| Tigeroin | "Hunts Animal and other coins around it. (except Epic coins) Value x [unique coins hunted]." |
| Wish Pool Coin | "On exchainge -> Spawns 1 Silver Coin per nearby Silver Coin."（"exchainge" は原文ママ） |
| Division Coin | "When scored -> Divides Target Score by 1.5." |
| Wormhole Coin | "While in play, each coin inserted from the left/right side -> 30% chance to spawn an extra coin." |
| Luckcoin | "Each spin -> Value x1.5." |
| Drumoin | "Adds Drumoin quantity to Combo when touching a new coin." |
| Sumoin | "When inserted -> Gains Value equal to 10x the total sale price of coins in clip, then destroys the cheapest coin." |
| 1/2 Coin | "When inserted -> Consumes 1/2 Ticket balance, and +10 Value per Ticket consumed." |
| Foxoin | "When a hunt happens nearby -> Add 25% of the hunter's Score to Current Score." |
| Killer Coin | "Kills nearby Bad Coin. Ignores BadBad modifier. Each kill -> +20 Tickets. (Destroyed after 6 kills)" |
| Factorial Coin | "Value = N! (Up to 30!). N = Exchanges made this round." |
| Dogoin | "When scored -> Returns the most valuable coin scored this round (Except Dogoin)." |
| Pinwheel Coin | "When bown by Whirlwind Coin -> Adds Score to Current Score, then -5 Value (Destoryed when Value <0)."（"bown"/"Destoryed" は原文ママ） |
| Souloin | "Each Spin -> Spawns the last Special Coin inserted (except Souloin)." |
| Diamondoin | "Extremely valuable. When spawned -> Value x1.5." |
| Saturoin | "Converts nearby Aeroliteoin to Meteoroin, nearby Meteoroin to Coinmet (Destoryed after 30 uses)." |
| Neptuoin | "Makes nearby coins Astrofall again. (Destroyed after 25 Astrofalls)." |
| Coin Alien | "While in play -> Gains 1 Astro coin after 2 prizes sold." |
| Cheateroin | "When scored -> Next spin is guaranteed to reach the 2nd wheel." |
| Collapsoin | "At round start -> Scores nearby coins with equal or lower Value, and gains 2x their Value." |
| Jokeroin | "Value = Chaos quantity When attacked by Killer Coin/Emoin/Raccoon Tower -> Value x2, won't be destroyed/converted." |
| Oyakodoin | "When scored -> Gain in hand Coins equal to 40% of the last Bonus Coin amount. When destorying nearby Hen Coin -> +15%" |
| Beggar's Chicken Riceoin | "When scored -> +30 Tickets. At round start -> +20 to Ticket scoring bonus." |
| Fish Burgeroin | "On exchange -> Gains Value equal to 15% of Ticket balance if in play." |

### 2-6. コインが属する「族（タグ）」

効果文から読み取れる族。**公式にタグ一覧を明示した資料は見つからなかった**が、
wiki.gg には "Tags" というカテゴリページの存在だけ確認できた（中身は取れず）。
効果文の中で名指しされている族：

- **Math coin**（1-Shaped Candle の効果文 "Math coin Value x1.03 per Math coin in play"）
- **Animal coin**（Furry Clip, Cloaca, Pet Toilet ほか）
- **Plant coin / Food Plant coin**（Fridgeoin, Silver Fertilizer の "Giant Plants"）
- **Food coin**（Mushroin, Fridgeoin ほか）
- **Astro coin**（Mercury Coin, Bomb Planet, Mooncake, Astrolabe ほか）
- **Element coin**（Chemist の perk）
- **Chaos coin**（Magicoin, Robber Gun, Jokeroin, Trader の perk）
- **Master coin**（Supply Crate, Astrolabe, Flu Planet）

---

## 3. Bad Coin（21枚）

出どころ：同上（Permatoma / wiki.gg、**English**）。二資料一致。

| 名前 | 効果（原文そのまま） |
|---|---|
| Minusoin | "-5 Value per coin it touches." |
| Zero Coin | "Sets Value of coins it touches to 0." |
| Pooroin | "While in play -> No exchange possible." |
| Death Staroin | "Next round -> Destroys all nearby coins." |
| Thiefoin | "Steals 1 chip until Thiefoin is scored." |
| Turtle Coin | "While in play -> Doubles the required Combo for Spin Energy." |
| Bad-apple Coin | "Applies the Mini modifier to unmodified coins it touches." |
| Lion Coin | "Next round -> Hunts the most valuable coin, then disappears." |
| Trash Can Lid | "While in play -> Target Score +10%." |
| Lockoin | "While in play -> No prize can be used." |
| Robot Vacooin | "Steals 1/2 from the Ticket balance. Returns Tickets only when Robot Vacooin scored this round." |
| Toxic Lipoin | "After 50 coins scored -> Destroys a coin in clip." |
| Profiteeroin | "While in play -> +20% Shop Prices." |
| Pluto Coin | "While in play -> Instead of being scored, coins are destroyed while falling into Scoring Zone (Destroyed after 30 uses)." |
| Bearish Coin | "While in play -> Halves Score Rate." |
| Unluckoin | "While in play -> Disable the 2nd wheel." |
| Coinpire | "While in play -> Inserting coins consumes 1 more in hand coin." |
| Baby Bad Coin | "Looks evil, actually harmless! Won't be killed by Killer Coin or Raccoon Tower." |
| Mimicoin | "Looks like Copper Coin and won't be affected by Emoin. While in play -> Target Score is shown as '??'." |
| Creditor Coin | "This is a corrupted Workoin. At round start -> -40 Tickets." |
| Coinroach | "While in play -> -2 Value to Food coins. At round start -> 50% chance to spawn a Coinroach." |

---

## 4. Modifier（めっき／18種）

出どころ：同上（**English**）。Steam ストアの中国語宣伝文が「用特殊**镀层**升级你最喜欢的代币」
（訳：特殊なめっきでお気に入りのコインを強化する）と書いているものにあたる。
Steam 中国語ガイド（SJHM）では **镀层** と呼ばれ、「巡回镀层兔兔币」「巡回四叶草」という例が挙がっていた。

| 名前 | 効果（原文そのまま） |
|---|---|
| Rust | "Make the coin unmodifiable (It appears on the "Evil Ticket" difficulty)." |
| Mini | "Makes everything... smaller?! Size, area of effect and even value? ;(." |
| BadBad | "Can't be converted or scored by item effects." |
| Zero | "Value has been turned 0." |
| Demonic | "When scored -> 66.6% chance to respawn(counts as an Extra Bad Coin)." |
| Golden | "While in clip -> +25 sell price per round. When scored -> +10 Tickets." |
| Clock | "If the coin has a round effect, it will trigger with every 12 coins inserted." |
| Triangle | "When scored -> Treated as scoring for 3 times." |
| BUG | "Increases the coin's frequency of appearing in the shop." |
| Gunpowder | "When scored/destoryed -> Explosion." |
| Icebound | "Slippery! When in an explosion or 20% chance at round start -> Removes modifier and spawns a Wateroin." |
| SleepWalk | "ZZZ..... When any Hypnoticoin scored -> Move towards Scoring Zone." |
| Energized | "+8 Value." |
| Origin | "Spawns the same coin per round." |
| Fungus | "At round start -> 80% chance to spawn 1 of its ingredient or a Mushroin." |
| Giant | "Makes everything bigger...Size, area of effect and even value!" |
| Zombie | "Converts coins it touches into the same coins. (Up to 20 times per round)." |
| Return | "When scored -> Return the coin." |

**食い違い②：** Energized の効果は Permatoma / wiki.gg では "+8 Value" だが、
韓国語の Vortex Gaming 記事は
> 「활성화 수정치를 중첩시켜 코인 기본 가치를 최대 80까지 높여주어」
> （訳：Energized 修正値を重ねてコインの基本価値を最大 **80** まで上げてくれる）
と書く。Epic チップ **Power Bank**「Energized modifier can stack up to 10 layers.」と併せれば
8×10＝80 で整合する。**両方を記録する。矛盾ではなく前提の違いの可能性が高いが、確かめられなかった。**

---

## 5. チップ（＝アイテム／道具）100種

**「名前が一つも公開されていない」というのは誤り。**Steam ガイドと wiki.gg に全100種が名前・効果付きで載っていた。
出どころ：Permatoma ガイド／ https://raccoin.wiki.gg/wiki/Chips （どちらも **English**）。

レアリティは **Common / Uncommon / Rare / Epic** の4段。内訳 11 / 34 / 35 / 20 ＝ **100**。

### 5-1. Common（11）

| 名前 | 効果（Permatoma 版） | 効果（wiki.gg 版、差がある場合） |
|---|---|---|
| Money Bag | "+8 initial coins" | "+8 initial Copper Coins" |
| Silver Paint | "Next Copper coin will be Silver Coin after 6 Copper Coins inserted" | 同 |
| Cookie Redemption | "When Bankrupt -> +20 in hand coins, and spawns 40 Cooinkies, then it is destroyed" | "…+20 in hand Copper Coins and spawns 40 Cooinkie" |
| Raccoon's Paw | "On exchange -> 25% chance of getting 2x coins" | "…2x Copper Coins" |
| Shopping Coupon | "At round start -> +3 bars of Spin Energy" | 同 |
| Chocolate Box | "On exchange -> Obtain a random coin" | 同 |
| Sparrow | "+2 Score Rate -0.3 per clip expansion" | 同 |
| Ticket Whip | "40% chance for coins to give +1 Ticket when scored" | "…+1 Green Ticket…" |
| Magic Set | "Each conversion -> +2 Tickets" | "…+2 Green Ticket" |
| Robber Gun | "-3% Shop Prices per Chaos coin in play (Up to 30%)" | 同 |
| Bank | "At round end -> Gains +1 Ticket per coin in hand" | "…+1 Green Ticket per Copper Coin in hand" |

### 5-2. Uncommon（34）

| 名前 | 効果（原文そのまま／Permatoma） |
|---|---|
| Magic Bean | "When clip is empty -> 40% chance to apply Golden or Triangle modifier" |
| Coffee Marshmallow | "At round start -> +8 Value to coins in play" |
| Encyclopedia | "+0.3 Score Rate for each unique coin that appears this run" |
| Rabbit Hole | "Breeding Rabbit Coin will generate 2 Rabbit Coins. (Destroyed after 30 uses)"（wiki.gg は "Breeding Bunny Coins will generate 2 Bunny Coins (Destroyed after 30 uses)"） |
| Engineerat | "+3 Score Rate per Gadget in play" |
| Silver Pickaxe | "Every 15 Silver/Gold Coins in play -> Raw Ore Coin spawns 1 more coin" |
| Coin Courier | "Each re-roll in the shop increases the chance of high rarity coins (Resets each round)" |
| Telescope | "Every 3 Astrofalls -> +0.1 Score Rate (Resets each round)" |
| Police Light | "Prevents next wave of Bad Coins, destroyed afterwards" |
| Silver Polishing Machine | "Doubles Silver/Gold Coin's Value" |
| Piggy Bank | "At round end -> Adds remaining unused exchanges to initial coins" |
| Silver Bean | "When clip is empty -> +25% Conversion Rate" |
| 1-Shaped Candle | "Math coin Value x1.03 per Math coin in play" |
| Archaeologist's Eyeball | "If >20 modified coins in play -> Score Rate x1.5" |
| Pet Toilet | "30% chance for Animal coins to spawn a Poocoin per round start" |
| Simple Bowl | "When hunting, hunter coins gain 100% more of target coin's Value" |
| Stargazy Pie | "Coins gain +20 Value when Astrofalling" |
| Raccoon Poster | "On exchange -> +8 to sale price of coins in clip, but Exchange Cost x1.5" |
| Magnifier | "Biologist's exchange won't get Common Animal" |
| Digital Ticket | "+1 Score Rate per digit of Ticket balance" |
| Color Printer | "While a coin is modified -> +6 Tickets" |
| Bubble Fish | "On exchange -> Fishoin spawn an extra Bubble Coin" |
| Wanted Poster | "At least 2 unique Bad Coin in play -> Score Rate x2"（wiki.gg は "At least 2 unique in play → Score Rate x2" と目的語が欠けている） |
| Yo-yo | "Coins gain +16 Value when a Prize Ball lands nearby" |
| Copying Toast | "Spin -> If the reward has a number, add it to Ticket balance" |
| Furry Clip | "+0.4 Score Rate per Animal coin in clip" |
| Warm Henhouse | "When Hen Coin is hunted, become Eggoin instead of being destroyed" |
| Pancake Mouse | "When Prize Slots are full -> Ratoin can eat Uncommon Prize Ball to grow large and gain x5 Value"（wiki.gg は "…to grow large" までで x5 の記述が無い） |
| Folding Screen | "+0.1 Score Rate per coin scored on the specific side (Resets each round)" |
| Moonlight Clan | "When coins in hand are less than 6 -> Score Rate x1.3" |
| Bull-Shaped Plate | "Dishes cooked by being touched inherit Value from the ingredients" |
| Clover Chef Hat | "When Conversion Rate >40% -> 10% chance for inserted coin to be Riceoin or Doughoin" |
| Clover Badge | "When Conversion Rate >25% -> Increase the chance of high rarity coins" |
| Rainy Doll | "When using Rain Badge -> Consumed 3 in hand coins to add 3 coins to Coin Rain" |

### 5-3. Rare（35）

| 名前 | 効果（原文そのまま／Permatoma） |
|---|---|
| Desktop Vacuum | "Every 10 coins scored -> +1 to coins in hand." |
| Gray Hole | "Blackhole Doll returns the 3 most valuable Astro coins. Astro coins drawn by Whitehole Doll will Astrofall again." |
| Silver Bracelet | "When Copper Coin becomes Silver/Gold Coins -> 0.2% to Conversion Rate (up to 40%)." |
| Mooncake | "At round start -> +1 free use of Astro coin." |
| Ticket Insurance | "After Target Score has been reached -> Coins score x2 Tickets." |
| Rain Cloud | "Use Wateroin for 2 Spin slots of Bonus Coin rewards." |
| Landlord | "Increases Manager's Ticket bonus by 30%." |
| Angry DogBird | ">5 Auto-fills triggered this round -> Score Rate x3." |
| Silver Fertilizer | "Each Silver/Gold Coin in play -> All coins from Giant Plants gain +1 Value." |
| Silver Whistle | "+0.2 Score Rate per Silver/Gold Coins in play." |
| Wolf Doll | "When any Wolfoin hunts -> All Wolfoins gain +1 hunt." |
| Iron Stomach | "Each hunt earns +0.2 Score Rate (Resets each round)." |
| Hamster | "+5 Score Rate for each different prize held."（wiki.gg は "for each different prize field"。**field / held のどちらが原文かは確かめられなかった**） |
| Coin Family | "Chummy Coin, Square Coin & Ally Coin are treated as the same coin when calculating their effects." |
| Police Dog Doll | "On exchange -> All Bad Coin move towards Scoring Zone." |
| Fashion Bomb | "When a coin explodes -> 10% chance to apply its modifier to unmodified nearby coins." |
| The Snow Kid | "Snowman Coin destroys Wateroin to recover size and Value. Snowman Coin breeds Snowman Coin for every 2 Wateroins destroyed." |
| Bad Encyclopedia | "+2 Score Rate for each unique Bad Coin cleared." |
| Golden Finger | "All random effects values are fixed to MAX." |
| Coin God | "Destroys coins which are going to be corrupted." |
| Magic Ball | "When Magicoin and Mask Doll convert coins -> 50% chance to raise rarity." |
| Raccoon Economics | "+1.5 Score Rate per remaining exchange." |
| Mutant Gene | "Breeding buff: children gain +20% Value." |
| Bomb Planet | "Astro coin Value x1.5 when in an explosion." |
| Strong Magnet | "Magnetoin also attracts Wish Pool Coin." |
| Alien Translator | "You understand alien speech now. UFO from UFO Caller may drop Dr. Balloin & Coin Alien." |
| Combo Gloves | "Score Rate bonus from Combo doubled." |
| Supply Crate | "When Bankrupt -> Gain 10 Master coins, then it is destroyed. +5 Free Use of Master coins." |
| Bumper Car | "Each Bankrupt -> +1 Score Rate." |
| Universe Clip | "Replace condition 'while in play' with 'while in play/clip' for Mercury Coin, Earthoin & Marsoin." |
| Glimmer Knife | "Cook -> +0.5 Score Rate (Resets each round)." |
| Rat Chef | "Ratoin can cook nearby ingredients. Value x2 for dishes cooked by Ratoin." |
| Health Permit | "Score Rate x3. At round start -> Attracts Coinroach (Disabled when 10 or more Coinroaches in play)." |
| Critical Mark | "Coins may score 3x Score according to Conversion Rate, but Copper Coins may not become Silver/Gold Coins." |
| Shy Raccoon | "+30 Value for all coins in play. But -4 per chip equipped." |

**食い違い③（重要）：** Landlord。
- Permatoma（v1.1.0）："Increases Manager's Ticket bonus by 30%."
- wiki.gg："At round end → Gain +30% of Green Ticket balance"

前者はキャラクター Manager の perk（"Gain 20% of Green Tickets held at round end"）を強化する読み、
後者は単独で効く読み。**どちらが正しいかは確かめられなかった。**
（Manager perk が 20% で、Landlord が「+30%」なら 50% になる、という読みも成立する）

### 5-4. Epic（20）

| 名前 | 効果（原文そのまま／Permatoma） |
|---|---|
| Year-end Bonus | "At round end -> If Current Score is >120% Target Score, +60 Tickets. (Higher round, more Tickets)" |
| Square Pocket Watch | "On exchange -> Chips with round effect have a chance to trigger immediately (Rarer chip, lower chance)." |
| Treasury | "+0.1 Score Rate per in hand coin (up to 40)." |
| Chili Sauce | "50% chance for explosion to detonate Gunpowder modified coins." |
| Jenga | "+1 Score Rate for every 10 layers of the tallest coin tower this run." |
| Colorful Feather | "Score Rate x1.1. Adds x0.3 per different modifier in clip." |
| Round Pocket Watch | "On exchange -> Coins with round effect have a chance to trigger immediately (Rarer coin, lower chance)." |
| Air Token | "Immune to effects that destroy coins in clip." |
| Cloaca | "50% chance for Animal coins to breed a child coin, instead of a Poocoin (Rarer coin, lower chance)." |
| Power Bank | "Energized modifier can stack up to 10 layers." |
| Coai | "Bonus Time -> Add number of Bonus Coins to next Coin Tower (Up to 150)." |
| Astrolabe | "Every 12 Master coins inserted -> +1 Free Use of Master coins." |
| Ninja Raccoon | "When at maximum exchanges -> Score Rate x 2.5." |
| Combo Gavel | "Set the Score Rate bonus from Combo to the highest value reached during the current round." |
| Chameleon Hat | "When an unmodified coin hunts -> Gains the target's modifier. If it's Return, return the target." |
| Captain Rice | "35% chance for cooked Rice Balloin, Sushioin, Omuriceoin, Mushroin Rice, Rice Pudding & Seven-Herb Porridge to fly towards Scoring Zone." |
| Mushroom Cloud | "The area effects of Mushroin Rice & Mushroin Pizza also target Copper, Silver & Gold Coins." |
| Cauldron | "+60% Conversion Rate. However, inserting coins consumes 1 more in hand coin." |
| Flu Planet | "Coins become Master coins when a Prize Ball lands nearby. However, inserting a coin has a 50% chance to fail." |
| Herbal Medicines | "Immune to your chips' negative effects." |

---

## 6. 賞品（Prize、30種）／キーホルダー（Keychain、20種）／ステッカー（7種）／カード（14種）

### 6-1. Prize（30種、3段）

出どころ： https://raccoin.wiki.gg/wiki/Prizes （**English**）。
**Prize には Common が無く、Uncommon / Rare / Epic の3段だけ。**

**Uncommon（14）**

| 名前 | 効果（原文そのまま） |
|---|---|
| Gold Squishie | "Apply the Golden modifier to a coin." |
| Clock Squishie | "Apply the Clock modifier to a coin." |
| Triangle Squishie | "Apply the Triangle modifier to a coin." |
| Fault Squishie | "Apply the BUG modifier to a coin." |
| Whitehole Doll | "Draws in coins in selected area and transports them back to upper platform." |
| Tax Doll | "+2 Green Ticket for each coin in selected area" |
| Rain Badge | "Rain 3~6 of your most purchased coin" |
| Screw Badge | "Strongly shake the cabinet!" |
| Ice Badge | "Reduces friction for 10s!" |
| Pause Badge | "Combos won't break for 10s!" |
| Bakugan Badge | "Detonates all Prize Balls in play."（Permatoma 版は "Detonate all coins in selected area."。**食い違い④、確かめられなかった**） |
| Fishbone Figurine | "Place Gadget: Fragile Fishbone" |
| Dish Figurine | "Place Gadget: Cooking Pot" |
| Leftovers Figurine | "Place Gadget: Leftovers Pot" |

**Rare（8）**

| 名前 | 効果（原文そのまま） |
|---|---|
| Root Squishie | "Apply the Origin modifier to a coin." |
| Doodle Squishie | "Apply the last modifier you used to a coin." |
| Blackhole Doll | "Draws in coins to a selected area and scores them all." |
| Rich Doll | "Consumes 20% of Green Ticket balance. Coins in selected area gain Value equal to consumed Tickets." |
| Mirror Badge | "Copy a selected coin in chip." |
| Saucer Figurine | "Place Gadget: UFO Caller" |
| Cage Figurine | "Place Gadget: Coin Cage" |
| Woof Figurine | "Place Gadget: Woofchelin Table" |

**Epic（8）**

| 名前 | 効果（原文そのまま） |
|---|---|
| Zombie Squishie | "Apply the Zombie modifier to a coin." |
| Infinity Squishie | "Apply the Return modifier to a coin." |
| Mask Doll | "Converts coins in selected area into random coins of the same rarity." |
| Balance Doll | "Set coins in selected area to Value of the most valuable coin in it." |
| Berserker Badge | "Random effect: Achieves Target Score or An extra Bad Coin wave" |
| Idol Figurine | "Place Gadget: Coin Stage" |
| Delivery Figurine | "Place Gadget: Food Trolley" |
| TV Tower Figurine | "Place Gadget: Raccoon Tower" |

賞品は3系統に分かれている（名前の接尾辞で分かる）：
- **Squishie** ＝ コインに Modifier を貼る
- **Doll / Badge** ＝ 盤面の選択範囲に一発効果
- **Figurine** ＝ Gadget を盤面に置く（設置物）

### 6-2. Keychain（20種）

出どころ： https://raccoin.wiki.gg/wiki/Keychains （**English**）
中国語ガイド（SJHM）では **挂件**、「20个挂件」と数も一致。

| 名前 | 効果（原文そのまま） |
|---|---|
| BankBook | "Retain unused Copper Coin at round end." |
| Christmas Stocking | "8% chance for inserted Copper Coin to become a coin in Clip." |
| Dog Food | "Auto-Fill has no limit on the number of uses." |
| Card Puncher | "+1 Chip Slot" |
| Scallop Credit Pay | "Continued exchanges allowed, but cost x2 per additional exchange." |
| Black Card | "+1 Exchange Limit, gains 3 more in hand Copper Coin on exchange." |
| Hourglass | "+30% Combo duration" |
| Pass Loop | "Modifier Prizes can be applied to the coins in play." |
| Santa's Portrait | "When you use a prize, 40% chance to spawn a Prize Ball of the same type." |
| Santa's Gift | "+1 Prize stack limit" |
| Angry Blowfish | "The area of effect from Prizes expanded." |
| Green Bag | "+1 Prize Slot" |
| Racket | "When Prize Slots are full and a Prize Ball is scored, 70% chance a duplicate Prize Ball is dropped." |
| Shop Coupon | "-20% Shop Prices" |
| Owner's Tail | "+1 coin in shop." |
| Color Bucket | "25% chance to offer modified coins in shop." |
| Custom Joystick | "2 free re-rolls per shop visit" |
| Free Stick | "Increased chance to Buy One Get One in shop." |
| Tiny Clip | "+1 expansion limit" |
| Anti-lost Strap | "You can lock shop items to buy them later." |

**食い違い⑤：** Permatoma ガイドの末尾を読み出したとき、
BankBook / Scallop Credit Pay / Custom Joystick / Pass Loop / Tiny Clip / Free Stick / Supply Crate /
Year-end Bonus が **Prize セクションの続きとして** 別の効果文で出てきた：
- "BankBook — At round end -> +1 Ticket per 10 coins scored."
- "Scallop Credit Pay — When scored -> +30 Tickets."
- "Custom Joystick — Move coins in selected area to Scoring Zone."
- "Pass Loop — Coins in selected area pass through obstacles."
- "Tiny Clip — Temporarily expand Clip size by 50%."
- "Free Stick — Temporarily remove friction for coins."
- "Manager — +40 Tickets per coin scored this round."
- "Biologist's Exchange — Exchange 1 in hand coin for a random Animal coin."

**wiki.gg の Keychain 表とまったく別の効果文である。**
節の切れ目を読み違えた可能性と、v1.1.0 から仕様が変わった可能性の両方がある。
**どちらが正しいかは確かめられなかった。**両方をここに残す。

### 6-3. Sticker（7種）

出どころ：Permatoma ガイド／wiki.gg（**English**）。
wiki.gg 側は名前が "Ticket, Score, Icy, Silver, Spring, Copy, Special" と略記。

| 名前 | 効果（原文そのまま／Permatoma） |
|---|---|
| Ticket Sticker | "Gain 1 extra Ticket when coins are scored this round." |
| Score Ticket | "Score Rate x1.5 this round."（名前が "Score Ticket" なのは原文ママ。wiki.gg では "Score" ステッカー） |
| Ice Sticker | "Reduces friction on half of the cabinet during this round." |
| Silver Sticker | "Converts passing Copper Coin into Silver Coin." |
| Spring Sticker | "Bounces passing coins to Scoring Zone." |
| Copy Sticker | "Converts passing Copper Coins & Silver Coins to the same as random coin in clip." |
| Special Sticker | "Obtain a Special Coin for every 3 coins passing." |

ステッカーは **Astronomer をクリアすると解放される**（wiki.gg の Characters 表：Astronomer の "Also unlocks: Stickers"）。

### 6-4. Card（14種）＝ 走行開始時の縛り／恩恵

出どころ：Permatoma ガイド（**English**）。**これがローグライクでいう「開始デッキの選択」にあたる。**

| 名前 | 効果（原文そのまま） |
|---|---|
| Baby Card | "A tutorial for beginners!" |
| Paper Card | "+1 Exchange Limit" |
| Refitted Card | "+1 Chip Slot" |
| Prize Card | "+1 Prize Slot" |
| Gadget Card | "Gadget placement limit +1" |
| Knight Card | "Have -1 exchanges for BankBook & Desktop Vacuum at run start" |
| Silver Card | "+25% Conversion Rate Coins sold in shop -1" |
| Wood Card | "Start with Custom Joystick Able to re-roll keychains once" |
| Staff Card | "Start with Year-end Bonus & Scallop Credit Pay" |
| Zoo Card | "Start with Tiny Clip & Free Stick" |
| Sketch Card | "Duplicate an owned prize per round. (Except Gadget Prize)" |
| Poker Card | "No Score Rate bonus for Combo. But every 8 Combo adds 1 Value to all coins." |
| Universe Card | "+1 Bankrupt Shake per round start. Start with Supply Crate." |
| Royal Card | "Each inserted Coin is Special Coin. Start with Pass Loop. No coin and prize in shop." |

新規プロフィールは "Baby Card" と "Paper Card" の2枚だけ持って始まる（wiki.gg Collection ページ）。

---

## 7. キャラクター（7人。ストア表記は6人）

**出どころ：** https://raccoin.wiki.gg/wiki/Characters （**English**）

| 名前 | 説明（原文） | Perks（原文） | 解放条件（原文） | ほかに解放するもの |
|---|---|---|---|---|
| **Owner** | "Teaches you how to play the game." | N/A | Unlocked from start | N/A |
| **Manager** | "Master in using Math coins and earning Green Tickets" | "+2 Exchange Limit; Gain 20% of Green Tickets held at round end" | Unlocked from start | N/A |
| **Biologist** | "Nature explorer, master of Animal and Plant coins" | "Every hunt has 50% chance to spawn Poocoin; On exchange, get an extra Animal coin" | "Reaching round 8 using Manager" | N/A |
| **Chemist** | "Conducts crazy experiments using Element coins" | "Modifier Prizes can stack up to 5; Get an Element coin per Modifier Prize used" | "Reaching round 9 using Biologist" | **Modifier Prizes** |
| **Trader** | "Turns Chaos coins and Spin into advantage" | "-2 required combo for Spin Energy; Shop item has 15% chance to be free" | "Reaching round 10 using Chemist" | **Custom Wheel** |
| **Astronomer** | "Master of Astro coins and Area Prize" | "Get an Area Prize Ball at round start; +1 Astro Free Use per round" | "Reaching round 11 using Trader" | **Stickers** |
| **Big Eater** | "Loves using Food coins and Gadgets to cook dishes" | "+1 Gadget Limit, start with Dish Figurine; +1 free re-roll per unique coin cooked this round" | "Reaching round 12 using Astronomer" | N/A |

**解放は一本鎖。**Manager→8ラウンド→Biologist→9→Chemist→10→Trader→11→Astronomer→12→Big Eater。
**「勝つ」ではなく「そのラウンドに到達する」が条件。**しかも段が1つずつ上がる（8,9,10,11,12）。

**食い違い⑥：** ストアページは "6 playable characters"、wiki.gg は Owner を含めて7人。
Owner はチュートリアル役なので数に入れていないと見られるが、**確かめられなかった。**

**食い違い⑦：** games.gg のキャラクター記事
（https://games.gg/raccoin-coin-pusher-roguelike/guides/raccoin-character-every-animal-trait-and-unlock-path/
著者 Nuwel、2026年6月5日、**English／韓国語・ロシア語版あり**）は
人数を6人とし、Owner を含めず、Manager を「Math Coins を使う」とだけ書いて
perk の数値（+2 Exchange Limit / 20%）を出していない。名前と解放条件は wiki.gg と一致した。

**食い違い⑧（系統B）：** raccoincoinpusherroguelike.wiki 系のサイトは
"Raccoon Manager" "Pyro" "Clockwork Engineer" "Shadow Thief" というキャラクター名を挙げる。
**この4つは wiki.gg にも Steam ガイドにも Steam 実績にも存在しない。**

---

## 8. 難度（8段）— 「チケット」で表す

**出どころ：** https://raccoin.wiki.gg/wiki/Tickets （**English**）
補足：https://games.gg/raccoin-coin-pusher-roguelike/guides/raccoin-every-difficulty-level-explained/

**8段はすべて「チケット」の名で、上の段は下の段の罰をすべて重ねて背負う。**
（games.gg 原文：「every new tier you select layers its penalties on top of everything that came before」）

| 順 | 名前 | 効果（原文そのまま／wiki.gg） |
|---|---|---|
| 1 | Green Ticket | N/A（基準。罰なし） |
| 2 | Crispy Ticket | "Inserted Copper Coins, Silver Coins, and Gold Coins have 10% chance to become Cooinkies." |
| 3 | Blue Ticket | "+20% Shop Prices per re-roll (Resets each round)" |
| 4 | Orange Ticket | "-1 clip expansion limit" |
| 5 | Wizard Ticket | "Bad Coins are BadBad or Demonic" |
| 6 | Evil Ticket | "Rust coins may appear in the shop" |
| 7 | Moo Ticket | "Start with a Sturdy Fence placed" |
| 8 | Golden Ticket | "-1 coin in shop" |

games.gg 版の補足（原文）：
> Orange Ticket: "You will have one less expansion slot, with the maximum being five instead of six."
→ **クリップ拡張の上限は通常6、Orange 以上で5。**

**8段の罰は、どれも「盤面の物理」ではなく「店」と「引ける物」を痛めつける方向に寄っている。**
盤面側を触るのは Moo Ticket（Sturdy Fence を置く）だけ。

---

## 9. ラウンドごとの目標点

**見つからなかった。**

- ラウンド数が **15** であることは複数資料で一致：
  wiki.gg 本文「"15 rounds, during which a score requirement must be met by scoring points through Coins."」
  thegamer.com「Endless Mode unlocks after clearing round 15 in a standard run.」
- **各ラウンドの目標点の数字の並びを載せた資料は、一件も見つからなかった。**
- 探した言葉（すべて空振り）：
  1. "Raccoin 15 rounds target score round 1 2 3 requirement"（English）
  2. "Raccoin target score round 1 500 round 2 numbers list progression endless"（English）
  3. "Raccoin \"target score\" ... scaling guide" / "score rate conversion rate scaling"（English）
- 分かったのは向きだけ。games.gg（English）：
  > "Past round 15, the targets scale so aggressively that a low SR means your run ends before you can react."
- 目標点を動かす手段は二つ確認できた（数値付き）：
  - Bad Coin **Trash Can Lid**「While in play -> Target Score +10%.」
  - Epic コイン **Division Coin**「When scored -> Divides Target Score by 1.5.」
  - Epic コイン **Percentoin（Uncommon）**「Adds 10% of Target Score to Current Score」
  → **目標点は「絶対値」ではなく「割合」で殴られる設計。**目標点そのものの数列は非公開。

---

## 10. 得点の式と、噛み合いの本体

**出どころ：** Steam ガイド「Basic Strategy Guide for Raccoin! :D」 by **Dayspring**
https://steamcommunity.com/sharedfiles/filedetails/?id=3697885603 （**English**）
＋ 韓国語 Vortex Gaming https://vortexgaming.io/postdetail/727803 （**한국어**）
＋ grindnstrat / games.gg（**English**）

- **得点 ＝ コインの Value × Score Rate。**
  Dayspring：「points = "coin value x scoring rate."」
  韓国語版：「코인 시스템의 핵심 공식은 코인 가치 × 스코어링 레이트」
  （訳：コインシステムの中核の式は「コインの価値 × スコアリングレート」）
  韓国語版の例：「10점 가치의 코인에 5배 스코어링 레이트가 있으면 50점」
  （訳：価値10のコインに5倍のスコアレートなら50点）
- **Score Rate は Balatro でいう「Mult」にあたる**（複数の英語ガイドがこの比喩を使う）。
- **Conversion Rate は別物。**Copper Coin が Silver / Gold として出てくる確率。
  Dayspring：「conversion rate affects whether coins upgrade from copper to silver/gold quality」
- **Combo。**短い間隔で連続して点を入れると Combo が伸び、
  Combo が Score Rate の上乗せと「Spin Energy（ボーナスホイール）」を同時に貯める。
  Combo が切れるとホイールが回る。回る前にさらに点を入れるとホイールが強化される。
  Dayspring：「The wheel spins when combos end and can be upgraded by additional scoring before it activates.」
- **盤面はラウンドをまたいで残る。**
  Dayspring：「Cabinet state persists between rounds, allowing setup before opening shops」
  → **これがこのジャンルの本体。**「今ラウンドの点」ではなく「盤に何を積んだか」で次が決まる。
- Dayspring の助言（原文の趣旨）：
  「Early wheel spins with small rewards often chain together」
  「Timing matters—sometimes accumulating small bonuses beats attempting single large combos」

---

## 11. ビルド・コンボの実例（実プレイヤーの書き込み）

### 11-1. 10,000 Combo 実績を取るための組み合わせ

**出どころ：** Steam 掲示板スレッド "10,000 Combo help"（**English**）
https://steamcommunity.com/app/3784030/discussions/0/809100133028403843/

- **cjx0r**（Apr 12 @ 4:19pm）
  > "I just can't get the 10k combo, even using the collapsoin. Any tips?"
- **Uber Mech**（Apr 12 @ 4:27pm）
  > "Corn and pigeons + desk top vacuum + Christmas Stocking. Icon figurine with pigeon and rooster. Knight card if you have it."
  （※ "Icon figurine" は **Idol Figurine**（Place Gadget: Coin Stage）の打ち間違いと思われる）
  **噛み合いの中身：** Corncoin（Epic「Next round -> Grow into a Corn Tower」）が塔を建てて玉数を作り、
  Pigeoin（Rare「+3 Value when hunting Corncoin & Popcorn」「When inserted -> Poops 4-9 Poocoin」）が
  それを食って糞を撒き、Poocoin が「Fertilizes ... Corncoin」でまた Corn を育てる**閉じた輪**。
  Desktop Vacuum（Rare「Every 10 coins scored -> +1 to coins in hand」）が手持ちを枯らさず、
  Christmas Stocking（Keychain「8% chance for inserted Copper Coin to become a coin in Clip」）が種を絶やさない。
  Rooster Coin（Rare「When inserted -> triggers round effects of nearby Animal, Plany and Eggoin once」）が
  ラウンド効果を任意に前倒しする「起爆スイッチ」。
- **Winter Creator**（Apr 13 @ 6:50am）
  Big Eater と Seven-Herb Porridge で **11k コンボ**、
  corn と pigeon と mask（Mask Doll）で **27k コンボ**、biologist を使った、と報告。
- **Ledow**（Apr 13 @ 2:36pm）
  Omuricecoin（＝Omuriceoin）でコインが自動湧きする無限走行を作り「**40,000+ combo**」。
  → Omuriceoin「When scored -> Gain Bonus Coins equal to 50% of in hand coins (Up to 200 coins)」の
    「手持ちの50%が返ってくる」が**上限200**で切られているのに、それでも壊れた、という証言。
- **cjx0r**（Apr 13 @ 5:47pm）
  > チケット上限は **999,999**。

### 11-2. 全コイン集めと詰まり方

**出どころ：** Steam 掲示板スレッド "100% all coins"（**English**）
https://steamcommunity.com/app/3784030/discussions/0/809099441085702929/

- **Hoshi**（Apr 5 @ 3:46am）
  > "I 100% the game after 3 days, what was hardest for me was finding all the coins, I made a video its not great but couldn't find any myself at least at the time"
  → **発売6日目で全収集が済んでいる。**そして「一番難しかったのは全部のコインを見つけること」。
- **Shivver**（Apr 5 @ 12:27pm）
  10〜15k 枚コインを貯めてから W 押しっぱなしで自動排出を起動する。UFO は切る。
  鶏や兎の養殖でも代用可。ただし exchange や特殊コインが多すぎると自動排出が壊れる、と警告。
- **Zeelightful → Shivver**：Return めっき付き Bunny を10回狩らせる実績について
  > "I've done this with multiple return bunnies and wolves =)"
- **s0lidacid**（Apr 10 @ 7:05pm）— **不具合の報告**
  > "My Diamondoin isn't going to my collection. I've exploded the ore coin, visibly see the Diamondoin, collect it, complete the run, several times and it's still hidden."

### 11-3. Rabbit Hole 実績（フランス語ガイド）

**出どころ：** Steam ガイド "Rabbit Hole achievement" by **SilkO**、Posted **April 10 @ 4:07pm**
https://steamcommunity.com/sharedfiles/filedetails/?id=3702162158 （**Français**）
※ このガイドは現在 Steam のコンテンツガイドライン違反で公開停止されており、著者にしか見えない状態。
　（取得時にその旨の表示が出た。内容自体は読み取れた）

- 実績名はフランス語で **「Terrier」**（訳：巣穴）。
- 条件は「獲物型のコインが1回の走行で10回、狩られてクリップに戻ること」。
- SilkO の言い分：
  - **Chameleon Hat は「indispensable」（不可欠）**
    （Epic チップ「When an unmodified coin hunts -> Gains the target's modifier. If it's Return, return the target.」）
  - 虎／猿の組み合わせは失敗した。「classic pig/wolf」（＝ Bunny/Wolfoin ではなく豚と狼と表現）を使った。
  - 両方のコインに Return めっき（骨のアイコン）を付ける。
  - **めっきの付いていない狼や豚が他に居ると仕組みが壊れる。**走行の早いうちに2枚を隔離するのが肝。
  - **Christmas Stocking のキーホルダーと、コインを変質させるアイテムは避ける。**

---

## 12. 実績23個（数値の入っている目標が読める）

**出どころ：** https://steamcommunity.com/stats/3784030/achievements （**English**、取得日 2026-08-22）
**カッコ内は全世界の達成率。**この数字は「どこで人が落ちるか」の目安になる。

| 実績名 | 条件（原文） | 達成率 |
|---|---|---|
| At least you got an achievement... | "Lose a run." | 83.6% |
| New Customer | "Win a run!" | **42.5%** |
| Silver Spoon | "Start a new run with more than 10 Silver Coins in play." | 38.4% |
| Hey! This isn't a Slot Machine Game! | "Have a single coin's score start with '777'." | 34.2% |
| Shiny Coin | "Have a single coin score over 1,000,000 points." | 28.2% |
| Coin God | "Insert more than 10,000 coins." | 21.2% |
| Sticker Book | "Activate all Stickers." | 15.5% |
| Clogged Toilet | "Poop over 500 Poocoins." | 13.4% |
| Stretched Raccoon | "Complete all Milestones." | 7.5% |
| E.T. has arrived! | "The UFO summons an Alien Coin!" | 7.2% |
| Single-Minded | "Fully expand the Coin Clip in only one direction and complete the run." | 7.0% |
| Pylon | "Have a coin tower made entirely of Silver or Gold Coins." | 6.7% |
| Carpal Tunnel | "Reach 10,000 Combo!" | 6.0% |
| Commander Raccoon | "Win at least once with every character!" | 6.0% |
| Herculean Strength | "Shake the machine 100 times!" | 5.1% |
| Keychain Collector | "Get all of the Keychains in a single run." | 3.4% |
| Coin Police | "Clear all types of Bad Coins." | 1.6% |
| Rabbit Hole | "Have a Bunny Coin with the 'Return' modifier be hunted 10 times in a single run." | 1.4% |
| Prize Collector | "Use every Prize." | 1.1% |
| King of Raccoon | "Win with every character using a Golden Ticket." | 1.0% |
| You Are the Coin Clip | "Collect all Coins in the Collection." | 0.7% |
| Chip Collector | "Collect all Chips in the Collection." | 0.7% |
| Scholar Raccoon | "Complete the Collection 100%!" | 0.6% |

**「一度勝つ」が42.5%。**「負ける」が83.6%。
つまり**購入者の半分以上は一度も15ラウンドを抜けていない。**
「全コイン集め」は0.7%。**150枚を全部見た人は千人に7人。**

---

## 13. コレクション総数（数の内訳）

**出どころ：** https://raccoin.wiki.gg/wiki/Collection （**English**）

| 種別 | 数 |
|---|---|
| Coins | **150** |
| Modifiers | **18** |
| Bad Coins | **21** |
| Chips | **100** |
| Prizes | **30** |
| Keychains | **20** |
| Stickers | **7** |
| Cards | **14** |
| **合計** | **360** |

Steam 中国語ガイド「全图鉴及部分成就」（SJHM、**简体中文**）も
「20个挂件」（キーホルダー20個）と一致した。

**Cabinet（筐体）は未実装。**
https://raccoin.wiki.gg/wiki/Cabinets 原文：
> "Cabinets are an upcoming feature. As of now, only the default cabinet is available."

---

## 14. 各言語の資料（原語のコイン名など、拾えた分すべて）

### 14-1. 日本語

**出どころ①：** gamerch「【ラッコイン】特殊コイン一覧」 https://gamerch.com/raccoin/950072
**日本語 wiki に載っていたのは6枚だけ**という前提は正しかった。しかも**6枚とも Steam ストアの宣伝文の焼き直し**である：

| 日本語名 | 効果（gamerch 原文） |
|---|---|
| Seed Coin（シードコイン） | 「ウォーターコインと組み合わせると、マシン内に『お金の木』が成長する。」 |
| Water Coin（ウォーターコイン） | 「シードコインに使うと、『お金の木』を育てる。」 |
| Cat Coin（キャットコイン） | 「ラットコインをすべて追跡して、追加チケットを得る。」 |
| Rat Coin（ラットコイン） | 「キャットコイン使用時に消去される対象となる。」 |
| TNT Coin（TNTコイン） | 「巨大な爆発を起こし、すべてのコインを一斉に前方へ吹き飛ばす。」 |
| MultiCoin（マルチコイン） | 「スコア全体をブーストし、獲得効率を上げる。」 |

→ **英語資料の実物名（Seedoin / Wateroin / Catoin / Ratoin / Multicoin）と一致しない。**
　 日本語 wiki は宣伝文の英語表記をそのままカタカナにしている。

**出どころ②：** gamerch「【ラッコイン】最強コンボリスト」 https://gamerch.com/raccoin/981999
→ **第15章（系統B）に全文を隔離した。**日本語資料だが、系統Aと名前が一つも合わない。

**出どころ③：** gamerch「【ラッコイン】最強コインランキング」 https://gamerch.com/raccoin/981992
（存在は確認したが、②と同じ語彙系統と見られる。中身は取っていない）

### 14-2. English
本文の大半がこれ。出どころは §1〜§13 に列挙済み。

### 14-3. 简体中文

**出どころ①：** Steam ガイド「全图鉴及部分成就」 by **SJHM**
https://steamcommunity.com/sharedfiles/filedetails/?id=3701179610
拾えた中国語名（画像中心のガイドで、本文に出ていたものだけ）：

| 中国語 | 対応する英語（推定できたもの） |
|---|---|
| 铜币 | Copper Coin |
| 银币 | Silver Coin |
| 特殊币 | Special Coin |
| 原矿币 | Raw Ore Coin |
| 钻石 | Diamondoin |
| 鬼魂币 | （英語側に対応が見つからなかった。**確かめられなかった**） |
| 母体杀手币 | （同上） |
| 社畜币 | Workoin |
| 讨债币 | Creditor Coin |
| 生锈币 | Rust（めっき付きコイン） |
| 糊糊币 | Burnt Foodoin か |
| **镀层**（＝Modifier） | 巡回镀层 / 生锈镀层（Rust） |
| **芯片**（＝Chip） | 变色龙帽＝Chameleon Hat、外星语翻译器＝Alien Translator |
| **挂件**（＝Keychain） | 20个 |
| キャラ | 大胃王＝Big Eater、化学家＝Chemist、操盘手＝Trader |
| カード | 皇家卡＝Royal Card |
| 実績 | 惨兔轮回＝Rabbit Hole、马拉松＝Marathon、白金巨塔＝Pylon、流浪币球 |

ガイド本文中の一文（原文）：
> 「有些代币是衍生出来的，如钻石需要炸原矿概率获得」
> （訳：一部のコインは派生物で、たとえばダイヤは原鉱を爆破して確率で得る）
→ Raw Ore Coin の効果文「become Sandoin/Quartzoin/Amethystoin/Diamondoin」と噛み合う。

**出どころ②：** Steam ストア中国語版の宣伝文（**简体中文**）
> 「将种子币与水滴币组合在一起，就能在机台里长出一棵摇钱树。投下橘猫币可将鼠鼠币一网打尽，并额外获得大量奖券。用加加币可全面提高你的得分。发射核弹币引爆全场，一口气将所有代币炸向前方。」

| 中国語名 | 英語 |
|---|---|
| 种子币 | Seedoin |
| 水滴币 | Wateroin |
| 摇钱树 | Coin Tree |
| 橘猫币 | Catoin |
| 鼠鼠币 | Ratoin |
| 加加币 | Multicoin |
| 核弹币 | TNT Coin |
| 奖券 | Ticket |

**出どころ③：** 3DM https://www.3dmgame.com/games/raccoin/ ／
游民星空 https://www.gamersky.com/z/raccoin-coin-pusher-roguelike/
→ ダウンロード・修改器（チートツール）・汉化补丁の配布ページ。**コインの一覧は無かった。**

**出どころ④：** bilibili「【浣熊推币机】全图鉴收集攻略&解锁办法讲解」
https://www.bilibili.com/video/BV1e1SUBSEqU/
→ 動画。**説明欄にコイン名の一覧は出ていなかった。**

### 14-4. 繁體中文

**出どころ①：** 巴哈姆特 GNN https://gnn.gamer.com.tw/detail.php?sn=302822
> 「種子幣加水滴幣能在推幣機裡直接長出一棵搖錢樹。投入一枚橘貓幣，便會追捕所有鼠鼠幣並賺取額外票券。使用加加幣即可讓得分全面加倍。發射一枚核爆幣，引爆巨大的爆炸，將所有硬幣一口氣轟向前方。」

| 繁體中文名 | 英語 |
|---|---|
| 種子幣 | Seedoin |
| 水滴幣 | Wateroin |
| 搖錢樹 | Coin Tree |
| 橘貓幣 | Catoin |
| 鼠鼠幣 | Ratoin |
| 加加幣 | Multicoin |
| 核爆幣 | TNT Coin |
| 票券 | Ticket |

同記事の公称：
> 「《浣熊推幣機》正式版包含 6 名可玩角色（各自擁有專屬硬幣）、150 種特殊效果特制幣、150 種能力各異的強化道具，以及 8 個難度等級與無盡模式」

**出どころ②：** Game-Guider https://game-guider.com/view.php?id=1226 （日付 2026-04-17）
拾えた繁體中文名：**黑洞娃娃（Blackhole Doll）／平衡娃娃（Balance Doll）／面具娃娃（Mask Doll）／
浣熊塔（TV Tower Figurine）／1/2 金幣／多重金幣（Multicoin）／信用幣（Creditoin）／
轉盤（Bonus）／連擊（Combo）／票券／無盡模式／債務（Debt）**
→ **賞品の繁體中文名が取れたのはこの資料だけ。**
　 ただしこのサイトは「AI遊戲平台」と自称しており、**生成物である可能性がある。**

### 14-5. 한국어

**出どころ①：** Vortex Gaming https://vortexgaming.io/postdetail/727803 （**한국어**、作成日・著者の表示なし）
拾えた韓国語名：**화학자（Chemist）／번개 코인（Lightning Coin）／비구름（Rain Cloud）／
틱 코인（Tickoin）／나쁜 코인（Bad Coin）／레이저 코인（Sensoroin か）／톱（Saw Coin）／
파워 뱅크（Power Bank）／초콜릿 상자（Chocolate Box）／UFO／블랙홀 인형（Blackhole Doll）／
룰렛 휠／코인 보관함（Coin Clip、수직/수평 확장＝縦横の拡張）／티켓／보너스 게이지／콤보**

効果文（原文のまま拾えた2件）：
> 「활성화 수정치를 중첩시켜 코인 기본 가치를 최대 80까지 높여주어」
> （訳：Energized 修正値を重ねてコインの基本価値を最大80まで上げてくれる）
> 「닿는 코인의 가치를 감소」
> （訳：触れたコインの価値を減らす → Minusoin と思われる）

**出どころ②：** Steam ストア韓国語版
> 「씨앗 코인과 물 코인을 조합하여 기계 안에서 돈 나무를 키우세요.
>  고양이 코인으로 쥐 코인을 전부 사냥하여 추가 티켓을 모으세요.
>  배율 코인으로 보드에서 점수를 높이세요.
>  핵 코인으로 거대한 폭발을 일으켜 모든 코인을 한 방에 밀어내세요!」

| 韓国語名 | 英語 |
|---|---|
| 씨앗 코인 | Seedoin |
| 물 코인 | Wateroin |
| 돈 나무 | Coin Tree |
| 고양이 코인 | Catoin |
| 쥐 코인 | Ratoin |
| 배율 코인 | Multicoin |
| 핵 코인 | TNT Coin |
| 티켓 | Ticket |

**出どころ③：** gamemeca「[오늘의 스팀] 코인 무너뜨리기에 덱빌딩 더한 '라코인' 주목」
https://www.gamemeca.com/view.php?gid=1773530 （**한국어**、存在確認のみ。中身は取っていない）

### 14-6. Русский

**出どころ：** Steam ガイド「Русификатор игры RACCOIN: Coin Pusher Roguelike」 by **clarkkent**
https://steamcommunity.com/sharedfiles/filedetails?id=3696585098
Posted **March 31 @ 11:03am**（＝**発売当日**）、評価 星3・32件

- **ロシア語は公式対応言語に入っていない。**これは有志の非公式ロシア語化パッチ。
- 規模の数値（原文の趣旨）：
  > 「1851 строк: интерфейс, описания монет, описания чипов, описания призов, описания персонажей, обучение и многое другое」
  > （訳：**1851 行**。インターフェース、コインの説明、**チップ（芯片）の説明**、賞品の説明、キャラクターの説明、チュートリアル、ほか）
  → **ゲーム内テキストの総量は約1851ストリング。**
- 差し替えるファイルは1個だけ：`RACCOIN_Data/resources.assets`
- Windows と Steam Deck (Linux) 対応。ゲーム更新のたびに入れ直しが要る。
- **ロシア語のコイン名の一覧は、本文中には無かった**（スクリーンショットのみ）。**取れなかった。**

### 14-7. Español

**出どころ①：** pcmgames「Análisis de RACCOIN: Coin Pusher Roguelike [REVIEW]」
https://www.pcmgames.com/analisis-de-raccoin-coin-pusher-roguelike/
（**Español**。本文の全文は取れなかったが、検索結果に出た一文）
> 「La variedad de monedas es sorprendente: puedes encontrar desde fichas que simplemente aumentan el valor de las adyacentes, hasta otras que se estiran como una jirafa y barren todo lo que hay a su alrededor para ayudarte a puntuar.」
> （訳：コインの種類の幅は驚くほどで、隣接するコインの価値を上げるだけのものから、**キリンのように伸びて周りを一掃してくれるもの**まである）
→ **Giraffe Coin（Rare「At round start -> Long neck sweeps around twice.」）の実機での挙動を、
　 系統Aの効果文とは独立に裏付けている。**

**出どころ②：** Steam ストアスペイン語版・Mediavida のスレッド
https://www.mediavida.com/foro/juegos/raccoin-coin-pusher-roguelike-hg-733701 （存在確認のみ）
**スペイン語のコイン名の一覧は見つからなかった。**

### 14-8. Português (Brasil)

**出どころ：** Critical Hits「Raccoin – Guia Completo de Itens de Melhoria」
https://criticalhits.com.br/dicas/raccoin-guia-completo-de-itens-de-melhoria/
著者 **Valteci Junior**、**08/04/2026**
→ **本文が取り出せなかった（2回試したが、記事本体が返ってこなかった）。
　 ポルトガル語のチップ名は取れなかった。**
同サイトの関連記事の存在だけ確認：「Raccoin – 8 Dicas Para Iniciantes」「As 5 Melhores Cartas do Jogo」「Como Invocar um OVNI」。

検索結果に出た一文（**Português**）：
> 「Alguns exemplos de moedas especiais mencionadas incluem: a Moeda Coelho, que precisa de outras Moedas Coelho presentes, ou moedas de caçador como a Moeda Lobo, que dependem de moedas de presa como a Moeda Frango para funcionar.」
> （訳：特殊コインの例には、他の Moeda Coelho が場に居ることを要求する **Moeda Coelho（Bunny Coin）**、
> 　　 Moeda Frango（Hen Coin）のような獲物コインが要る狩人コイン **Moeda Lobo（Wolfoin）** などがある）
→ **Bunny Coin「Breed 1~2 Bunny Coins when touching Bunny Coin」と
　 Wolfoin「+12 Value when hunting Bunny Coins, Hen Coins & Turtle Coins」を、独立に裏付けている。**
> 「o personagem escolhido no início da partida influencia quais moedas especiais aparecem com mais frequência na loja, e algumas são exclusivas de determinados personagens.」
> （訳：**開始時に選んだキャラクターが、店に出やすい特殊コインを左右する。一部はキャラ専用**）
→ **これはどの英語資料にも書かれていなかった。**キャラ perk 表には無い挙動。

### 14-9. Deutsch

**出どころ①：** ntower https://www.ntower.de/news/99012-raccoin-coin-pusher-roguelike-l%C3%A4sst-euch-im-herbst-m%C3%BCnzen-z%C3%A4hlen
> 「Insgesamt gibt es 150 Münzen, die meisten davon findet man während des Spielens. Samenmünzen können beispielsweise mit Wassermünzen kombiniert werden, um einen Geldbaum wachsen zu lassen. Eine Katzenmünze kann verwendet werden, um jede einzelne Rattenmünze aufzuspüren und zusätzliche Tickets zu sammeln.」

| ドイツ語名 | 英語 |
|---|---|
| Samenmünze | Seedoin |
| Wassermünze | Wateroin |
| Geldbaum | Coin Tree |
| Katzenmünze | Catoin |
| Rattenmünze | Ratoin |

同記事の重要な情報：
> 「RACCOIN: Coin Pusher Roguelike wird im Herbst für Nintendo Switch 2, PlayStation 5 und Xbox Series X|S erscheinen」
> （訳：**2026年秋に Switch 2 / PS5 / Xbox Series X|S へ移植予定**）

**出どころ②：** Steam ガイド「Achievement / Errungenschaften Guide」 by **Archaeen**
https://steamcommunity.com/sharedfiles/filedetails/?id=3702447355
Posted **Apr 8 @ 4:56am**、Updated **Apr 10 @ 8:52am**（**Deutsch + English**）
実績のドイツ語名：

| ドイツ語 | 英語 |
|---|---|
| Immerhin eine Errungenschaft… | At least you got an achievement... |
| Ach, so geht das | New Customer |
| Privilegiert | Silver Spoon |
| Funkelnde Münze | Shiny Coin |
| Münzgottheit | Coin God |
| Verstopfte Toilette | Clogged Toilet |
| Karpaltunnelsyndrom | Carpal Tunnel |
| Waschbärteam | Commander Raccoon |

（同ガイドは Clogged Toilet の条件を「biologist coins を使って糞コインを500個残す」と補足していた）

### 14-10. Français

**出どころ：** §11-3 の SilkO ガイド。フランス語の実績名 **「Terrier」**＝Rabbit Hole。
それ以外のフランス語のコイン名は**見つからなかった。**

### 14-11. Polski / Türkçe

- **公式対応言語に入っていない**（対応10言語に PL / TR は無い）。
- **ポーランド語・トルコ語のコイン一覧、攻略、レビューは、どれも見つからなかった。**
- 探した言葉：「RACCOIN monety lista poradnik」「RACCOIN madeni para listesi rehber」相当の検索を試みたが、
  作品固有の結果が返らなかった。**この2言語は0件。**

---

## 15. 系統B（照合が取れなかった資料）— 隔離して全文

**以下は、系統Aのどの資料とも名前が一致しなかったものである。
消さずに残すが、実物として扱ってはいけない。**

### 15-1. gamerch「最強コンボリスト」（日本語）
https://gamerch.com/raccoin/981999

1. **シード×ウォーター×肥料**
   コイン：🌱シードコイン、💧ウォーターコイン／アイテム：🌿マネーツリー肥料
   > 「シードコインで生成したマネーツリーに対し、ウォーターコインで生産速度を倍化、さらに肥料で再度倍化することで、爆発的な収益効率を実現する。フロア4時点でも、追加投資なしで1分あたり3〜4枚のゴールドコインを安定生成可能。」
2. **キャット × ラット × アニマルテイマー**
   コイン：🐱キャットコイン、🐀ラットコイン（3〜4枚）／アイテム：🐾アニマルテイマー
   > 「ラットコインを3〜4枚フィールドに常駐させて"餌"とし、キャットコインで回収してチケット報酬へ変換する。さらにアニマルテイマーによりチケット収入が倍化し、収益効率が大きく向上する。」
3. **TNT × アイス × 爆発強化**
   コイン：💥TNTコイン、❄️アイスコイン／アイテム：💥爆発強化（エクスプロージョンアンプリファイア）
   > 「アイスコインでコインの密集地帯を凍結・固定し、その中心にTNTコインを投入。爆発強化により爆風範囲が50％拡大し、盤面全体を巻き込む大規模爆発を引き起こす。状況次第では数万スコア規模の一掃が可能。」
4. **マルチコイン × チェーンリアクター**
   コイン：✖️マルチコイン（2〜3枚）／アイテム：🔗チェーンリアクター、✖️スコア倍率系
   > 「チェーンリアクターによりコンボ数が常に＋1され、マルチコインはコンボ中に落下することで0.5倍のスコア倍率を追加付与する。マルチコインを複数枚重ねることで倍率が連鎖的に増幅し、盤面が密集している状況では×15〜20規模のコンボ到達も現実的。」
5. **レインボー × クラウン × レインボーカタリスト**
   コイン：🌈レインボーコイン、👑クラウンコイン／アイテム：🌈レインボーカタリスト
   > 「クラウンコインは本作最高クラスの固定スコアを持ち、レインボーコインは場に存在する最も価値の高いコインへ変化する＝実質クラウン化する。さらにレインボーカタリストにより、隣接する2枚のコインもクラウンへ変換。これにより、レインボーコイン1枚から最大3枚分のクラウンスコアを同時に発生させることが可能。」
6. **接着剤 × マグネット × TNT**
   コイン：🫧接着剤コイン、🧲マグネットコイン、💥TNTコイン／アイテム：💥爆発強化
   > 「マグネットコインで散らばったコインを中央へ引き寄せ、接着剤コインで一塊に固定。そこへTNTコインを投入して爆発させる。自然にコインが溜まるのを待たずとも、安定して盤面一掃を狙える。」
7. **ファイア × 高密度ビルド**
   コイン：🔥ファイアコイン（2〜3枚）／アイテム：🔗チェーンリアクター
   > 「ファイアコインは隣接する最大5枚のコインへ炎を広げ、それぞれにボーナススコアを付与する。複数のファイアコインと高密度な盤面が揃えば、1回の連鎖で20枚以上のコインにボーナスが発生することも可能。」
8. **ラッキー × ラッキーダイス × ギャンブラー**
   コイン：🍀ラッキーコイン（4〜5枚）／アイテム：🎲ラッキーダイス、↩️ドロップリファンド
   > 「固有パッシブにより、ラッキーコインの10倍ジャックポット発生率が5％→15％まで上昇する。ラッキーコインを複数枚揃え、さらにラッキーダイスによるフロア開始時ボーナスが重なることで、各フロアごとに大幅なスコア爆発を狙える。」

**注意点：** この記事は場所の単位を「**フロア**」と呼ぶが、
系統Aと Steam の実プレイヤーはすべて「**ラウンド（round）**」と呼ぶ。
また「アニマルテイマー」「チェーンリアクター」「爆発強化」「レインボーカタリスト」「ラッキーダイス」
「ドロップリファンド」「マネーツリー肥料」は、**100チップのどこにも無い。**

### 15-2. raccoincoinpusherroguelike.wiki（英語）
https://raccoincoinpusherroguelike.wiki/coins/
S/A/B/C ティア分けで50枚を挙げていた。**系統Aと1枚も名前が合わない。**代表例：
> MultiCoin — "applies a ×1.5–×5.0 score multiplier to every coin currently on or falling toward the ledge"
> Rainbow Coin — "transforms into a copy of the most valuable currently active special coin"
> Cat Coin — "hunts every Rat Coin present. Each Rat Coin collected restores 3 Drop Charges"
> Seed Coin — "Plants a Money Tree at its landing position. The Money Tree spawns 1 Gold Coin every 8 seconds"
> Coin of Greed — "converts 10% of the points scored into Shop Gold"
> Crown Coin — "multiplies the total score accumulated this floor by ×1.5"
> TNT Coin — "creates a large AOE blast that pushes all coins within 4 coin-widths off the ledge"
> Dice Coin — "rolls 6-sided die determining effect: 1=+50 Gold, 2=+3 Charges, 3=Spawn Rat, 4=500 pts, 5=Wheel, 6=MultiCoin"

**「Shop Gold」「Drop Charges」「floor」「coin-widths」という語が使われているが、
系統Aと実プレイヤーの語彙は「Tickets」「in hand coins」「round」であり、一致しない。**

同系のサイトが挙げるアイテム例：
> "Score Multiplier adds a permanent ×0.5 score bonus, while Combo Keeper slows combo decay by 50%"
→ **Score Multiplier / Combo Keeper も100チップに無い。**

### 15-3. xmodhub.com「Item IDs List & Spawn Codes」
https://www.xmodhub.com/info/blog/raccoin-coin-pusher-roguelike-item-ids-spawn-codes/
「Coins, Perks & Hats のスポーンコード」を謳うが、
**"Perks" も "Hats" も、系統Aのどのカテゴリにも無い。**（Chameleon Hat はチップ1個の名前）
**中身は取っていない。**

---

## 16. 当たった言語と、その言語で取れた件数

「件」＝**独立した出どころの数**（URL単位）。

| 言語 | 取れた件数 | 何が取れたか | 何が取れなかったか |
|---|---|---|---|
| **English** | **11** | Steamストア、Permatomaガイド（150コイン＋21悪貨＋18めっき＋100チップ＋賞品＋7ステッカー＋14カード、全部効果文つき）、wiki.gg（Collection/Chips/Prizes/Keychains/Characters/Tickets/Coins/Cabinets）、Steam実績23個＋達成率、Steam掲示板2スレッド、Dayspringガイド、games.gg | **各ラウンドの目標点の数列** |
| **简体中文** | **4** | SteamガイドSJHM（镀层/芯片/挂件/キャラの中国語名、一部）、Steamストア中国語版（コイン7語）、3DM、游民星空 | 中国語の**コイン全名一覧**。3DM・游民星空は配布ページのみで攻略無し |
| **日本語** | **3** | gamerch特殊コイン一覧（**6枚のみ、しかも宣伝文の焼き直し**）、gamerch最強コンボリスト（系統B）、gamerch最強コインランキング（未取得） | **実物の日本語コイン名。日本語資料からは1枚も取れなかった** |
| **繁體中文** | **2** | 巴哈姆特GNN（コイン7語＋公称数）、Game-Guider（賞品の繁体名4件。ただしAI生成の可能性） | 繁体字の全コイン名 |
| **한국어** | **3** | Vortex Gaming 韓国語版（コイン名10語前後＋Energized最大80の記述）、Steamストア韓国語版（コイン7語）、gamemeca（存在のみ） | 韓国語の全コイン名。記事に作成日・著者が無い |
| **Deutsch** | **2** | ntower（コイン5語＋**2026年秋の家庭用機移植**）、Steamガイド Archaeen（実績のドイツ語名8件） | ドイツ語のコイン全名 |
| **Português (BR)** | **2** | Critical Hits（**本文が取り出せず**。著者・日付のみ）、検索結果の断片（Moeda Coelho / Moeda Lobo / Moeda Frango、**キャラが店の品揃えを左右するという記述**） | ポルトガル語のチップ全名 |
| **Español** | **2** | pcmgames レビュー断片（Giraffe Coin の実機挙動）、Mediavida（存在のみ） | スペイン語のコイン全名 |
| **Русский** | **1** | Steamガイド clarkkent（非公式ロシア語化、**1851ストリング**、差し替えは resources.assets 1個） | ロシア語のコイン名（画像のみで本文に無し） |
| **Français** | **1** | Steamガイド SilkO（実績名「Terrier」、Chameleon Hat 必須、Return めっき2枚を隔離する手順） | フランス語のコイン名 |
| **Polski** | **0** | — | **全部。公式対応言語外で、資料が一件も無い** |
| **Türkçe** | **0** | — | **全部。同上** |
| **合計** | **31件** | | |

---

## 17. この記録で埋まらなかったもの（推測で埋めていない）

1. **各ラウンド（1〜15）の目標点の数字の並び。**
   検索語を3通り以上変えたが出なかった。分かったのは「15ラウンド」「Trash Can Lid で +10%」
   「Division Coin で ÷1.5」「Percentoin で目標点の10%を現在点に加算」という**相対値の操作**だけ。
2. **チップの総数が 100 か 150 か。**ストアは150、wiki.gg とコレクション表は100。
3. **Prize / Keychain の効果文の二重系統。**§6-2 の食い違い⑤。
4. **ロシア語・ポーランド語・トルコ語のコイン名。**前者は画像のみ、後2つは資料が存在しない。
5. **ポルトガル語のチップ一覧。**記事はあるが本文が取り出せなかった。
6. **中国語・韓国語・繁体字の「全150枚」の原語名。**部分しか取れなかった。
7. **Tags（族）の公式一覧。**wiki.gg にページの存在だけ確認、中身は取れず。
8. **PC Gamer「All 150 special coins in Raccoin, plus the 21 bad coins, and their effects explained」の本文。**
   https://www.pcgamer.com/games/roguelike/raccoin-special-coins-list/
   **2回試したが、本文が会員登録の壁の向こうで取り出せなかった。**
   タイトルの「150 coins + 21 bad coins」という数え方は系統A（wiki.gg / Permatoma）と一致するので、
   **系統Aを裏づける3本目の独立資料になり得たが、確かめられなかった。**
