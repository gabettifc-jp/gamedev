# ローグライトの「一回のなかで、何を賭けさせ、何を諦めさせるか」

調べた日：2026-08-25
調べた理由：**「選ばせ方」と「賭けさせ方」の相場が、既存の四本に入っていないため。**
既存の四本（下記）は全部「コイン／シンボルの噛み合わせ」で、
**効果の型と組み合わせは厚いが、選択肢の出し方・枠の有限・リスクの自己申告・外れ・一回の設計が無い。**

| 既にあるファイル | 中身 | 今回との関係 |
|---|---|---|
| `references/roguelite-effects.md`（712行） | 効果の型・レアリティ・二層（盤面／規則） | **重複しない。**唯一かぶるのは §12-3「スロットが半分埋まるまでスキップ厳禁」で、本書 §1-7 で番号参照する |
| `references/raw/luck-be-a-landlord.md`（1,201行） | 家賃全13回・シンボル・アイテム | 締め切りの数値は向こうにある。本書では引かない |
| `references/raw/raccoin.md`（1,232行） | コイン150枚・チップ100種 | 重複なし |
| `references/raw/coin-tavern.md`（842行） | 実名40種まで | 重複なし（削り方の原則だけ `roguelite-effects.md` §14 にある） |

---

## この記録の読み方（**逐語と要約の区別**）

- **【逐語】** … 出どころのページに、その文字列がそのまま在る。引用符の中がそれ
- **【要約経由】** … `WebFetch` の要約器を通した文。**数値は原典由来だが、言い回しはこちらのものではない**
- 断りが無い数値は、出どころのページに書かれている数値をそのまま写した

**開けなかった URL は末尾の「開けなかったもの」に理由つきで全部残してある。消していない。**

---

## こちらの前提（**相場の可否を判定する基準。呼んだ側から渡されたもの**）

一人用／ターン制（リアルタイムでない）／一回22ターン／関門は二回（取り立て600と2,400）／
中心の行為は「二つの都市を線で繋ぐ」／切る手が既に在る／繋いだ年数で効果が育つ／
スコアは所持金ひとつ／待ち時間を作らない。

**各節の末尾に「前提／こちらで成り立つか」の表を置く。**
`gamedev/flow.md`「相場には前提がある（決）」に従う。
**「確かめていない」と書いた欄は、確かめていない。**

---
---

# 1. 選択肢の出し方 ── N個から1つ、選ばなかったものは消える

## 1-1. Slay the Spire ── **三択＋スキップ**。Nは3で固定

出どころ：https://www.spirebuilds.com/guides/understanding-card-rewards （攻略サイト・Slay the Spire 2）

**【逐語】**「You see three cards and must choose one or skip.」
**【逐語】**「Skipping is the most underrated option in Slay the Spire 2.」
**【逐語】**「Taking a card makes your deck larger. Larger decks draw key cards less often.」
**【逐語】** スキップの基準として一つだけ数字が書いてある ──「Skip when: Your deck is already over 25 cards.」

**【要約経由】** 数字はこの一つだけで、勝率や確率は載っていない。
経験者の判断基準は **【逐語】**「Experienced players approach card rewards functionally. What problem does this solve?」

## 1-2. Slay the Spire ── **三枚の中身の抽選確率**（実数）

出どころ：https://spire-codex.com/mechanics/card-rarity （Slay the Spire 2 のデータサイト）

| 出る場面 | コモン | アンコモン | レア |
|---|---|---|---|
| 通常戦闘 | **60%**（A7+ 61.5%） | **37%** | **3%**（A7+ 1.49%） |
| エリート | **50%**（A7+ 54.9%） | **40%** | **10%**（A7+ 5%） |
| ボス | ── | ── | **100%**（必ずレア） |
| 店 | **54%**（A7+ 58.5%） | **37%** | **9%**（A7+ 4.5%） |

**天井（pity）の仕組みが在る。**
**【逐語】**「A hidden offset starts at **−5%** and is added to the rare-card chance on every combat-reward roll.」
レアが出たらオフセットは −5% に戻り、出なければ **+1%**（A7+ は +0.5%）ずつ増え、**上限 +40%**。
**【逐語】**「Slots are rolled left-to-right, sharing the same offset.」
**【逐語】**「Skipped rewards still count as three ticks.」

> **スキップしても天井は進む。**「取らなかったこと」が次の抽選に効いている。

## 1-3. Slay the Spire ── **選択肢が出てくる場所そのものが選択**（地図）

出どころ：https://slaythespire.wiki.gg/wiki/Map_Generation （wiki.gg・一次に近い）

**【逐語】**「Each act contains 17 floors, with up to six map locations on each floor in a roughly horizontal row.」
**【逐語】**「Every room has 1-3 paths entering it from rooms on the floor below, and 1-3 paths exiting it to rooms on the floor above」

部屋の種類の割合 ── **通常戦闘 53%／エリート 8%／休憩 12%／店 5%／「?」22%**。

固定床：**1階＝弱い戦闘のみ／9階＝全部が宝箱／15階＝全部が休憩／16階＝ボス／17階＝ボス宝箱。**
第2幕・第3幕も同じ形（18・26・32-33・35 / 35・43・49-50）。

**【逐語】**「Beginning with Ascension 1, Elite encounters increase by about 60%.」

**「?」部屋の中身の決まり方**（同じページ）──
**【要約経由】**「?」に入ると、モンスター／店／宝／イベントのどれかが決まり、
**決まった種類の確率がベース値に下がり、残りの種類の値が上がる。**幕をまたぐとリセット。
別サイトの数値（https://spire-codex.com/mechanics/unknown-rooms 由来の検索結果。**本文は開いていない**）
では モンスター 10%・宝 2%・店 3%・残り全部イベント、とされる。**この数値は未確認として扱う。**

## 1-4. Balatro ── **選ぶのは「戦うか、飛ばすか」**。飛ばすと報酬が付く

出どころ：https://balatrowiki.org/w/Skip ／ https://balatrowiki.org/w/Tags

**【逐語】**「Skipping a blind will grant you 1 of 24 Tags」
**【逐語】**「Only the Small Blind and Big Blind can be skipped.」（ボスは飛ばせない）

**飛ばすと失うもの（同ページ）── 【逐語】**
「accruing money from interest and extra hands」
「visiting the shop」
「scaling Jokers and hand levels, and deck fixing」
**【逐語】**「especially detrimental on Gold Stake, where economy, interest, and shop visits are vital to success.」

**タグ 24種の全一覧（【要約経由】。効果文は原文の写し）**

| タグ | 効果 | 出る最小アンティ |
|---|---|---|
| Boss Tag | ボスブラインドを引き直す | 1 |
| Buffoon Tag | Mega Buffoon Pack を無料で | 2 |
| Charm Tag | Mega Arcana Pack を無料で | 1 |
| Coupon Tag | 次の店の初期カードとパックが無料 | 1 |
| D6 Tag | 次の店のリロールが $0 から始まる | 1 |
| Double Tag | 次に選ぶタグの複製（自身は除く） | 1 |
| Economy Tag | 所持金を倍に（**上限 $40**） | 1 |
| Ethereal Tag | Spectral Pack を無料で | 2 |
| Foil Tag | 次の店の素のジョーカーが無料＆Foil に | 1 |
| Garbage Tag | **この回で使わなかった捨て札1回につき $1** | 2 |
| Handy Tag | **この回でプレイした手札1回につき $1** | 2 |
| Holographic Tag | 次の店の素のジョーカーが無料＆Holographic に | 1 |
| Investment Tag | **次のボスを倒したあとに $25** | 1 |
| Juggle Tag | 次のラウンド **+3 手札枚数** | 1 |
| Meteor Tag | Mega Celestial Pack を無料で | 2 |
| Negative Tag | 次の店の素のジョーカーが無料＆Negative に | 2 |
| Orbital Tag | 役を **3レベル** 上げる | 2 |
| Polychrome Tag | 次の店の素のジョーカーが無料＆Polychrome に | 1 |
| Rare Tag | 店に無料のレアジョーカー | 1 |
| Speed Tag | **この回で飛ばしたブラインド1回につき $5** | 1 |
| Standard Tag | Mega Standard Pack を無料で | 2 |
| Top-up Tag | コモンジョーカーを最大2枚生成（**枠が空いていれば**） | 2 |
| Uncommon Tag | 店に無料のアンコモンジョーカー | 1 |
| Voucher Tag | 次の店にバウチャーを1枚追加 | 1 |

**【逐語】**「Equal probability for each tag appearing」（24種は等確率）。
**アンティ1では15種しか出ない。**同じタグが一回のなかで何度も出ることがある。

> **Speed Tag（飛ばした回数×$5）と Garbage Tag（使わなかった捨て札×$1）は、
> 「やらなかったこと」を通貨に変えている。**
> **飛ばすほど、飛ばすことの見返りが増える。**

## 1-5. Vampire Survivors ── **引き直し・消す・飛ばす の三つに、別々の値段が付いている**

出どころ：https://vampire.survivors.wiki/w/Banish ／ https://vampire.survivors.wiki/w/Skip

**Banish（消す）── 【逐語】**「Twice per rank, allows you to remove an item from level up choices, for the rest of the run.」
**【要約経由】** 1ランクにつき +2回。**最大5ランク＝合計10回。**
最初のランクは **100ゴールド。**2ランク目以降は**図鑑を 60／70／80／90／100 件埋める**のが条件。
**【要約経由】** 消したものは、そのプレイのレベルアップ候補から永久に消える。
**既に持っていた場合はその段のまま止まり、以後強化できない。**

**Skip（飛ばす）── 【逐語】**「Twice per rank, allows you to skip level up choices and get Experience instead.」
同じく1ランク +2回・最大5ランク＝+10回、初回 **100ゴールド。**

**Reroll（引き直す）── 【要約経由】** 上限が無く、何度でも使える（回数を買い足す形）。初回 **1,000ゴールド。**

**攻略の言い方（同ページの tips）── 【要約経由】**
「**Reroll と Banish を先に使い切ってから Skip を使え。**Skip は次のレベルに必要な経験値の20%をくれるので、
**必要経験値が大きくなった後半に使ったほうが得。**」

> **三つの値段が違う。**引き直し 1,000／消す 100／飛ばす 100。
> **「引き直し」がいちばん高い。**

## 1-6. Hades ── **引き直しは、使うほど高くなる**

出どころ：https://www.rpgsite.net/feature/10287-hades-pact-of-punishment-heat-modifiers-and-how-to-maximize-your-rewards
（Pact の表はこちら。Fated Persuasion の値段は下記の掲示板）
出どころ：https://steamcommunity.com/app/1145360/discussions/0/2568689796949796137/ （Steam 掲示板・プレイヤー報告）

**【要約経由・検索結果より】** Fated Persuasion は、三択の恩恵を引き直す鏡の能力。
**一回目の費用は1、二回目は2、三回目は3 …と一つずつ上がる。**
※**この費用の段階は検索結果に出た記述で、掲示板本文には書かれていなかった。出どころ一件。**

掲示板本文で確認できたのは、**引き直しの中身のほう** ──
**【逐語】**「after the first reroll, every subsequent reroll will give you the EXACT same 3 boon choices with the exact same rarity.」
**【逐語】** カロンの井戸は「6-8 different options locked into each well」で、引き直しても変わらない。
神の恩恵も「6 or so choices」を巡回するだけ。

プレイヤーの文句 ── **【逐語】**
「You should not be able to see the same stuff when you reroll, unless you have already rolled through every option.」

> **引き直しが「新しい三つ」を作っていない。**あらかじめ決まった小さな袋の中を回しているだけ。
> **プレイヤーはそれに気づいて、文句を書いている。**

## 1-7. Slay the Spire ── **一回の最初に四択が来る**（Neow）

出どころ：https://slaythespire.wiki.gg/wiki/Neow

四つの枠があり、それぞれ中身が抽選される。**【要約経由】**

| 枠 | 中身の候補 |
|---|---|
| 一つめ（カード系） | カードを1枚除去／1枚変換／1枚強化／キャラのカード3枚から1枚／アンコモンの無色1枚／ランダムなレア1枚 |
| 二つめ（素直な得） | 最大HP **+8/6/7/7**（Ascension 14 では +7/5/6/6）／**Neow's Lament（次の3戦、敵のHPが1）**／ランダムなコモンのレリック／**100ゴールド**／ポーション3個 |
| 三つめ（**損と得の組**） | 損：**最大HP −8/7/7/7**／**現在HPの1/10（切り捨て）×3 のダメージ**／**呪いを1枚**／**所持金を全部失う**<br>得：**2枚除去**／2枚変換／**250ゴールド**／レアカードを選ぶ／レアの無色を選ぶ／ランダムなレアのレリック／**最大HP +16/12/14/14** |
| 四つめ | **初期レリックを、ランダムなボスレリックと取り替える**（Boss Swap） |

> **三つめだけが「損＋得」の組になっている。**一つめ・二つめは損が無い。
> **四つ並べたうちの一つだけを、引き換えの枠にしている。**

## 1-8. Rogue Legacy ── **三人の子から一人。引き直しは無い**

出どころ：https://roguelegacy.wiki.gg/wiki/Traits

**【逐語】**「There is a 94% chance that a hero will have at least 1 trait and 55% chance of 2 traits.」
**【逐語】** 特性の段の分布は「1st is 50%, 2nd is 36% and the 3rd is 14%.」
**【逐語】**「chosen randomly but in case of 2 same or conflicting traits were chosen the game rerolls the traits」

> **引き直すのはゲームであって、プレイヤーではない。**
> プレイヤーは**引き直せない。**三人のうちから選ぶだけ。
> **94%の子が、何か欠陥を持っている。**

## 1-9. 設計論 ── **「三つのうち常に一つ目を選ぶなら、それは選択ではない」**

出どころ：https://www.gamedeveloper.com/design/gdc-2012-sid-meier-on-how-to-see-games-as-sets-of-interesting-decisions
（GDC 2012 の Sid Meier 講演の記事。**一次は GDC Vault の講演** https://www.gdcvault.com/play/1015756/Interesting ── **こちらは開いていない**）

**【逐語】**「it's easier to look at it as what is not an interesting decision」
**【要約経由】** つまらない選択の見分け方 ──「a player always chooses the first from among a set of three choices, it's probably not an interesting choice」。
でたらめに選ぶのも同じ。

面白い選択の四つの型 **【要約経由】**
1. **引き換え（Trade-offs）** ── 500ゴールドで強い剣を買う、速さのために操作性を捨てる
2. **状況次第（Situational）** ── **【逐語】**「Good decisions are situational. There's a very key idea that when the decision is presented to the player, ideally it acts in an interesting way with the game situation.」
3. **自分の色（Personal Expression）**
4. **長く効く（Persistence）** ── ただし**早い選択で一回が壊れないよう、判断材料を十分に見せること**

> **「選ばなかったほうが犠牲に見えること」が、面白い選択の条件だと言っている。**
> **善vs悪は引き換えが無いので豊かではない**、とも。

### 相場と前提（第1節）

| 相場 | 前提 | こちらで成り立つか |
|---|---|---|
| **N＝3、＋スキップ** | 一回のなかで報酬場面が何十回も来る（StS は17階×3幕） | **確かめていない。**22ターンで報酬場面が何回あるかを、こちらは知らない（実装を読んでいない） |
| **スキップにも天井が進む** | 抽選に段（レアリティ）が在ること | **成り立たない可能性が高い。**渡された前提に「レアリティ」が無い。ただし `roguelite-effects.md` 指摘チで「決定35でレアリティが四段になった」とあり、**版が新しければ成り立つ** |
| **引き直し／消す／飛ばす に別々の値段** | 通貨が複数あるか、通貨が余ること | **成り立たない。**スコアは所持金ひとつで、かつ「安い順に引けるだけ引ける」＝**通貨が余っている。**値段は制約にならない |
| **飛ばすと報酬（タグ）** | 飛ばすと**同時に何かを失う**こと（Balatro は店と利子） | **成り立たない。**渡された前提に「店」も「利子」も無い。**失うものが無ければ、飛ばす代わりの報酬は純増になる** |
| **四択のうち一つだけが「損＋得」** | 損として差し出せる資源が在ること（HP・所持金・呪い） | **一部成り立つ。**所持金は在る。HP・呪いに当たるものは、渡された前提に無い |
| **94%の駒が欠陥を持つ** | 駒が使い捨て（一回一人） | **確かめていない。**都市／航路が使い捨てかどうかを知らない |

---
---

# 2. 枠の有限 ── 何枠で、捨てさせるときに何を見せるか

## 2-1. Balatro ── **ジョーカーは5枠**。デッキで増減する

出どころ：https://balatrowiki.org/w/Joker_slot

**【逐語】**「For most Decks, the default count of Joker slots is 5.」
**【逐語】**「If all Joker slots are full, the player generally cannot acquire new Jokers without selling or destroying an existing one to free up space.」

**枠を動かすもの（【要約経由】）**

| もの | 枠 |
|---|---|
| Black Deck | **+1（計6）** |
| Five-Card Draw | **+2（計7）** |
| Painted Deck | **−1（計4）** |
| Blast Off | **−1（計4）** |
| Cruelty | **−2（計3）** |
| Typecast | **アンティ4のボスを倒すと 0 になる** |
| Jokerless | **0** |
| Antimatter（バウチャー） | **+1** |
| Negative（エディション） | **+1**（そのカードが枠を食わない） |

**Negative の性質 ── 【要約経由】**「+1 の枠はそのカードが在るあいだだけ。売れば枠も消える。
枠オーバーの状態では、下回るまで Negative ジョーカーを買えない。」
（出どころ：https://balatrohq.com/guides/negative-jokers/ 由来の検索結果。**本文は開いていない。未確認扱い**）

> **Balatro は「枠を増やす」を、いちばん強い報酬として売っている。**
> **枠が5しか無いから、6枚目のジョーカーが「捨てるものを選ばせる装置」になる。**

## 2-2. Balatro ── **消耗品は2枠**

出どころ：https://balatrowiki.org/w/Consumable_slot

**【逐語】**「By default, can hold up to 2 consumables at once.」
増やすもの：Crystal Ball バウチャー **【逐語】**「+1 consumable slot」／Negative エディション／Perkeo。
減らすもの：Nebula Deck **【逐語】**「-1 consumable slot, reducing the maximum number of consumable slots from 2 to 1」

**枠が埋まっているときの見せ方 ── 【要約経由】**
「The Emperor や The High Priestess のように**2枚生成する**タロットは、
**他に1枚在ると1枚しか生成しない。**」
── **溢れた分は黙って消える。**警告を出すのではなく、**出る数が減る。**

## 2-3. Slay the Spire ── **ポーションは3枠。Ascension 11 で2枠になる**

出どころ：https://slaythespire.wiki.gg/wiki/Potions

**【逐語】**「Potions are stored in Potion Slots, of which there are 3 (2 Ascension 11).」
増やす手段は **Potion Belt** レリックだけ。
**【逐語】**「The default chance of a potion dropping is 40% and resets at the start of each Act.」
落ちたら **−10%**、落ちなかったら **+10%**（ここにも天井が在る）。

補足（https://slaythespire.wiki.gg/wiki/Ascension より）── **【逐語】**
Ascension 11 は「Fewer Potion Slots.」
**難度を上げる手段として「枠を減らす」を使っている。**

> **レリックには枠が無い。**枚数無制限。
> **枠が在るのはポーション（消耗品）だけ。**ここは Balatro（ジョーカー5枠）と割れている。→ §7-1

## 2-4. Monster Train ── **一階につき7体まで（硬い上限）**

出どころ：https://steamcommunity.com/app/1102190/discussions/0/2284960483091819074/ （Steam 掲示板）

**【逐語】**「if you have 6 units, only 1 of your 2 summons is going to spawn.」
**【要約経由】** 上限は硬い（hard cap）。溢れた召喚は**単に出ない。**
例外として **【逐語】**「morsels duplicated by Morsel masters can make you go over the room limit for that turn.」

**【要約経由】** プレイヤーの対処 ── 部屋の定員を増やすアーティファクトを取る／
複数階に散らす／弱い初期カードを早く抜く／昇降で並べ替える。

> **溢れたものを「捨てさせる」のではなく、「出さない」。**
> 見せ方が Balatro（売るか壊すかを迫る）と違う。→ §7-1

## 2-5. Backpack Hero ── **枠が「面積」になっている**

出どころ：https://www.comfycozygaming.com/2023/11/20/backpack-hero-review/ （レビュー・遊んだ人の文句）

**【逐語】**「More often than not, you're going to have to leave behind items to make room for other loot, weapons, shields, or consumables.」
**【逐語】**「you have to get creative with how loot is stashed」

**【要約経由】** さらに置き方に条件が付く ──
**兜は上端でなければならない／特定の装備は隣に武器が要る／周りが空きマスでないと効かないものが在る。**
評者はこれを「満足のいくパズル」ではなく**苛立ち**として書いている ──
ランダムなドロップのせいで**使えそうなものを置いていかざるを得ない**、
**回復品を他の装備より優先せざるを得ない**、と。

盤の大きさ（**別の出どころ由来の検索結果。本文は開いていない。未確認**）──
「開始は **3×3**、レベルアップのたびに好きな方向へ数マス伸ばせる」「Purse は最大 **7×9**」。

> **「置く場所が無い」は、「枠が5つある」より強く効いている。**
> **形が合わないと、空きマスが在っても入らない。**

## 2-6. Into the Breach ── **枠は7。しかも「守る側」の枠**

出どころ：https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-
（Game Developer の記事。**一次は GDC 2019 の Subset Games 講演** https://gdcvault.com/play/1026333/-Into-the-Breach-Design ── **こちらは開いていない**）

**【逐語】** Power Grid は「just seven points, so at best you're only seven cities away from the apocalypse.」

**【逐語】** Justin Ma「We're requiring players to unlearn something that's been taught by almost every other strategy game, which is that losing your mechs or main characters is the worst thing that can happen.」
**【逐語】** Matthew Davis「Mechs do still matter in the sense that if they die you get punished with the pilot death.」
**【逐語】** Justin Ma「When you have this interplay between buildings being important, mechs being important, objectives being important, it empowers interesting decision-making.」
**【逐語】** Matthew Davis「Any amount of atmosphere you can put over the top of something is going to be shallow compared to tying it to an important mechanic like your health.」

> **枠が「持てる数」ではなく「あと何回失敗できるか」になっている。**
> **7 という小さい数字だから、一棟の建物を捨てる判断が毎ターン起きる。**

## 2-7. 日本の開発者の反省 ── **「初期デッキが6枚と少なすぎて、不要な初期カードの廃棄が簡単すぎる」**

出どころ：https://hothukurou.com/blog/post-4556
（作っちゃうおじさん制作記録。**デッキ構築ローグライトを何本も作った本人の記事**）

**【逐語】**「初期デッキが6枚と少なすぎて、不要な初期カードの廃棄が簡単すぎる点だ。」
**【逐語】**「今から初期デッキを10枚にするのはユーザーにとってストレスなはずなので、これは次回作での改善点になる。」
**【逐語】**「このゲームは初期デッキをいくつかのパターンから選択できるが、そのデッキに1~2枚のカードパーツを揃えてしまえばデッキが完成してしまう」
**【逐語】**「デッキの完成が速すぎて、デッキ3~4枚を序盤に早々にくみ上げて後は無双して終わるだけのパターンをいくつか確認した。」
**【逐語】**「もっとコンボに必要なカードの枚数を増やすとか、せめて同じカードを複数枚持っていないと効力がないカードをもっと増やして必要なカードパーツ数を増やすべきだったと思う。」
**【逐語】**「デッキ完成が速すぎる原因はいくつかある。」

**【要約経由】** 記事の結論 ──「デッキが完成した瞬間、**将来の成長への期待が消える。期待が消えると満足感も消える。**
ガチャゲームで全部揃えた後に興味を失うのと同じ」。

> **これは「枠が余っている間はジレンマが無い」の裏返しの証言である。**
> **枠が小さすぎても、捨てるのが簡単すぎてジレンマにならない。**
> 本人は「初期デッキ 6 → 10」と、**具体的な数字で直し方を書いている。**

### 相場と前提（第2節）

| 相場 | 前提 | こちらで成り立つか |
|---|---|---|
| **枠5（Balatro のジョーカー）** | 拾えるものが十分多い（150種）／枠を増やすものが報酬として売れる | **確かめていない。**特産品／航路の総数を知らない |
| **消耗品2枠。溢れたら黙って出る数が減る** | 消耗品という層が在ること | **成り立たない。**渡された前提に消耗品が無い |
| **枠が「面積」（Backpack Hero）** | 置き方に形の制約が在ること | **成り立たない。**中心の行為は「二つの都市を線で繋ぐ」で、線に面積は無い |
| **枠が「あと何回失敗できるか」（Into the Breach の7）** | 完全情報／失敗の回数が数えられること | **一部成り立つ。**ターン制で一人用なので情報は出せる。ただし**関門が二回しかないので、「あと何回」が2しかない** |
| **初期の持ち物が少なすぎると、捨てるのが簡単すぎる** | 捨てる操作に代価が無いこと | **成り立つ。**呼んだ側の実測に「切るのはほぼ無痛」と書かれている。**この相場は、そのまま当てはまる** |
| **枠が硬い上限で、溢れたら出ない（Monster Train）** | 溢れる量が予測できること | **確かめていない** |

---
---

# 3. リスクを自分で上げる仕掛け ── 見返りは何か

## 3-1. Hades ── **Pact of Punishment（熱）。見返りは「通貨をもう一度取れる権利」**

出どころ：https://www.rpgsite.net/feature/10287-hades-pact-of-punishment-heat-modifiers-and-how-to-maximize-your-rewards
（**一次は Hades 本体の UI。二次は Hades Wiki（Fandom）だが 402 で開けず。**下記「開けなかったもの」参照）

**【逐語】**「For every one Heat point you add to the total, you'll get the chance to re-earn Titan Blood from the Furies, Diamonds from the Bone Dragon and Ambrosia from Theseus and the Minotaur.」
**【逐語】** 攻略の言い方「don't increase your heat meter by more than one point at a time」（**一度に1点ずつ上げろ**）。

**全15条件（【要約経由】。数値は原文どおり）**

| 条件 | 効果 | 段数 | 熱／段 |
|---|---|---|---|
| Hard Labor | 敵の与ダメ **+20%／段** | 5（最大 +100%） | 1 |
| Lasting Consequences | 回復の効き **−25%／段** | 4（最大 −100%） | 1 |
| Convenience Fee | オボル価格 **+40%／段** | 2（最大 +80%） | 1 |
| Jury Summons | 敵の数 **+20%／段** | 3（最大 +60%） | 1 |
| Extreme Measures | ボスの技を1つ追加／段 | 3 | 1/2/2 |
| Calisthenics Program | 敵HP **+15%／段** | 2（最大 +30%） | 1 |
| Benefits Package | 装甲敵に特典 +1／段 | 2 | 2/3 |
| Middle Management | エリート／妨害を1つ追加／段 | 2 | 2 |
| Underworld Customs | **恩恵を1つ捨てる／段** | 2 | 2 |
| Forced Overtime | 敵の速度 **+20%／段** | 2（最大 +40%） | 3 |
| Heightened Security | 罠・溶岩のダメージ **+400%** | 1 | 1 |
| Routine Inspection | 才能を3つ無効化／段 | 4（最大12） | 2 |
| Damage Control | 敵に遮蔽HP +1／段 | 2 | 1 |
| Approval Process | **恩恵の選択肢を1つ減らす／段** | 2 | 2/3 |
| Tight Deadline | 各領域の制限時間を **−2:00／段**（最短 7:00） | 2 | 2/3 |

> **注目すべきは Approval Process。「三択を二択にする」ことが、難度を上げる手段として売られている。**
> **選択肢の数そのものが、値段の付いた資源になっている。**
> **Tight Deadline は「時間を削る」。締め切りを短くすることも商品になっている。**

**【要約経由】** 賞金（Bounty）は**武器ごと**に別勘定。
各領域のボスを、熱を満たした状態で初めて倒したときに1つ得る。

## 3-2. Slay the Spire ── **Ascension 20段。段ごとに一つだけ悪くなる**

出どころ：https://slaythespire.wiki.gg/wiki/Ascension

**【逐語】**（各段の見出し文）

| 段 | 文 | 中身 |
|---|---|---|
| 1 | 「Elites spawn more often.」 | エリート **約+60%** |
| 2 | 「Normal enemies are deadlier.」 | 通常敵の与ダメ増 |
| 3 | 「Elites are deadlier.」 | ── |
| 4 | 「Bosses are deadlier.」 | ── |
| 5 | 「Heal less after Boss battles.」 | 回復が**欠損HPの75%**まで |
| 6 | 「Start each run damaged.」 | **開始時にHP −10%** |
| 7 | 「Normal enemies are tougher.」 | HPとブロック増 |
| 8 | 「Elites are tougher.」 | ── |
| 9 | 「Bosses are tougher.」 | ── |
| 10 | 「Start each run cursed.」 | **Ascender's Bane を持って開始** |
| 11 | 「Fewer Potion Slots.」 | **枠 3→2** |
| 12 | 「Upgraded cards appear less often.」 | 第2・3幕で **−50%** |
| 13 | 「Poor bosses.」 | ボスの金 **−25%** |
| 14 | 「Lower Max HP.」 | ── |
| 15 | 「Unfavorable Events.」 | イベントの結果が悪いほうに寄る |
| 16 | 「Shops are more costly.」 | **+10%** |
| 17〜19 | 敵の行動が厳しくなる | ── |
| 20 | 「Double Boss.」 | **第3幕の最後にボスが2体** |

> **20段のうち「数値をいじる」段が14。「規則を変える」段が6**（10・11・12・15・20 と 1）。
> **段ごとに一つだけ変える。**まとめて上げない。

## 3-3. Darkest Dungeon ── **明かりを消すと、拾いが良くなる**

出どころ：https://www.gamepressure.com/darkestdungeon/light-level-and-its-influence/z28424

**【逐語】**（表そのもの。原文は相対表記で、数値は暴きの部分だけ）

| 明かり | 名前 | 効果 |
|---|---|---|
| 76+ | Radiant Light | 「++ Scouting chance」「++ Chance to surprise enemies」 |
| 51-75 | Dim Light | 「+ Stress damage」「+ Scouting chance」「+ Chance to surprise enemies」 |
| 26-50 | Shadowy | 「+ Stress damage」「+ Monster accuracy and damage」「+ Chance to surprise the player」「**+ Chance of getting better loot**」「+ Increased (**+1%**) critical chance for player's heroes」 |
| 1-25 | Dark | 「+++ Stress damage」「++ Monster accuracy and damage」「++ Chance to surprise the player」「**++ Chance of getting better loot**」「++ Increased (**+2%**) critical chance」 |
| 0 | Black as Pitch | 「++++ Stress damage」「+++ Monster accuracy and damage」「+++ Chance to surprise the player」「**+++ Chance of getting better loot**」「+++ Increased (**+3%**) critical chance」 |

**【要約経由・別出どころ】** 拾いの増分は「戦闘や仕掛けの後に**通常の戦利品に加えてもう1個**見つかる確率」で、
**通常の戦利品とは独立に判定される。**
（https://darkestdungeon-archive.fandom.com/wiki/Light_Level 由来の検索結果。**本文は 402 で開けず。未確認**）

> **明かりは「つまみ」である。0〜100 の連続値で、プレイヤーが松明を焚けばいつでも戻せる。**
> **上げっぱなし／下げっぱなしではなく、部屋ごとに上下できる。**
> **暗くすると、自分の会心率まで上がる**（+1/+2/+3%）── **危険側にも見返りが乗っている。**

## 3-4. Dead Cells ── **呪いの箱。開けると「10体倒すまで、1発でも食らったら死ぬ」**

出どころ：https://deadcells.wiki.gg/wiki/Curse

**【要約経由】** 呪いは点で管理される。**倒した敵1体につき1点減る。**

| 呪いの元 | 点 |
|---|---|
| 呪いの箱を開ける | **10** |
| 黄金の扉（通常） | **10** |
| 黄金の扉（専門店） | **50** |
| The Bank 最終階 | **15／5** |
| Forgotten Sepulcher | **30** |
| Corrupted Artifact を拾う | **20** |
| Cursed Flask（変異）＋回復瓶 | **20** |
| Sore Loser（敵） | 3 |
| Curser の弾 | 5 |
| Acceptance（変異）＋食事 | 5 |
| Doom Bringer の近接 | 1 |
| Anathema／Misericorde の一撃 | 1 |
| Cursed Sword（持っている間） | 継続 |

**呪われた領域の見返り ── 【逐語】**「+1 in gear level to all sources of gear」
「+10% increased chance for a Cursed Chest to spawn」「~9 (+/-2) total cursed enemies will spawn」

**【要約経由・検索結果】** 変異で必要撃破数が変わる ── Acceptance で **5体**、Alienation で **15体**、両方で **8体**。
（https://deadcells.fandom.com/wiki/Curse 由来。**本文は開けず。未確認**）

## 3-5. Dead Cells ── **その仕掛けへの、遊んだ人の文句**

出どころ：https://www.gameskinny.com/tips/dead-cells-opening-the-cursed-chest-isnt-worth-it/

**【逐語】**「you die in one hit for a short while until you kill 10 enemies without dying」
**【逐語】**「The prize sucks. No, really.」
**【逐語】**「the reward promised to you might seem like it's worth it, but it's really not」

**【要約経由】** 損をする層が二つある ──
**序盤の人は10体倒す腕が無い。終盤の人は既にもっと良い装備を持っている。**
つまり**中盤の人にしか効いていない。**

> **自分でリスクを上げる仕掛けは、「見返りが腕と進み具合に噛み合っているか」で評価が割れる。**
> Hades の熱は**通貨**（進めば進むほど要る）なので腐りにくい。
> Dead Cells の呪いの箱は**その場の装備**なので、**進むと腐る。**

## 3-6. Enter the Gungeon ── **呪いを上げると、敵が強くなり、拾いは「減る」**

出どころ：https://enterthegungeon.wiki.gg/wiki/Curse

**【要約経由】** 呪いを得る手段は多い ── アイテム（Cursed Bullets +1、Elder Blank +2、最大 +2.5）、
銃（Boxing Glove +1 〜 **Finished Gun +5**）、祠（Ammo Shrine **+3.5**、Angel Shrine +1.5、Dice Shrine の Cursed **+5**）、
Cursula の店で買う、鏡を割る、盗む、Spice を使う。

**呪い1点で敵が「Jammed」になる確率は 1%、10点で 50%。10点を超えても 50% で頭打ち。**

**Jammed の敵 ── 【逐語】**「deal 1 full heart of damage」「move and shoot 50% faster」
「have their cooldowns reduced by 33%」「increased health equal to `health * 3.5 + 10`」
最大HPは **【逐語】**「`175 * X`, where X is the floor's health scaling multiplier」

**そして拾いの式 ── 【逐語】**「`(1+[coolness]-[curse])%`」

**呪い10点で ── 【逐語】**「The Lord of the Jammed spawns」「continually chases the player」「cannot be killed」

> **ここが他と決定的に違う。**
> **呪いを上げると、部屋の報酬確率は「下がる」**（式に −curse が入っている）。
> 上がるのは**弾薬の確率だけ**（x1.05 〜 x1.50）。
> **「リスクを上げれば見返りが増える」は、この作品では成り立っていない。**→ §7-2

## 3-7. Blazing Beaks ── **持っているだけで弱くなる品を集めて、店で交換する**

出どころ：https://www.superjumpmagazine.com/hidden-gems-of-game-design-volume-46/

**【逐語】**「Enemies have a chance to drop cursed artifacts that actively make your run worse while you're carrying them, the kind of modifiers that take a comfortable flow and turn it into a stress test.」
**【逐語】**「these curses aren't just punishment for punishment's sake. When you finally reach the shop, you can trade them for stronger rewards, which means every single artifact pickup becomes a weighty decision.」

**【要約経由・検索結果より】** 各アーティファクトには**危険値**が付いていて、高いほど悪い効果が大きい。
例：「Nettle」はハートを拾えなくする。「Death」は**一撃で死ぬようになる。**
店の Crow に渡すと **greed（強欲）**が上がり、**上がり幅は拾ったときの危険に比例する。**
（https://blazingbeaks.fandom.com/wiki/Artifacts 由来。**402 で開けず。未確認**）

> **「悪い品」が、そのまま通貨になっている。**
> **持っている時間の長さが、そのまま賭け金の大きさになる。**

## 3-8. Risk of Rain 2 ── **拾おうとすると、時間が経つ。時間が経つと、難しくなる**

出どころ：https://riskofrain2.wiki.gg/wiki/Difficulty

**【逐語】** 難度係数の式
```
coeff = (playerFactor + timeInMinutes × timeFactor) × stageFactor
playerFactor = 1 + 0.3 × (playerCount − 1)
timeFactor  = 0.0506 × difficultyValue × playerCount^0.2
stageFactor = 1.15^stagesCompleted
```
difficultyValue は Drizzle **1**／Rainstorm **2**／Monsoon **3**。
**【要約経由】** 一人用では係数は 1.0 から始まる。**ステージを一つ越えるごとに 1.15 倍（指数）。**

**【要約経由・別出どころ】** 攻略側の言い方 ──
「難度が上がるとアイテムの値段も上がる。**ステージ上のアイテム数はほぼ一定なので、
長居するほど、強くなった敵から資源を集めることになって危ない。**」
「**時間より、越えたステージ数のほうがずっと効く。**ステージごとに約15%増えるので、
時間の線形の伸びをすぐ追い越す。」
（https://rndthursday.com/how-difficulty-works-risk-of-rain-2/ 由来の検索結果。**本文は開いていない。未確認**）

> **これは「リスクを上げる操作」ではない。**プレイヤーは何も押していない。
> **「拾う」という行為そのものが、時間を消費して難度を上げている。**
> ボタンではなく、**行為の副作用として賭けが起きている。**

## 3-9. Loop Hero ── **カードを置くと、資源も敵も増え、締め切りも近づく**

出どころ：https://www.pcgamesn.com/loop-hero/beginners-guide-tips-tricks
出どころ：https://www.destructoid.com/closing-the-loop-four-quarters-on-the-making-of-loop-hero/ （**開発者インタビュー・一次に近い**）

**【逐語】**「Each time you play a card, the bar in the top left hand side, next to the skull, fills up. Once this bar is full, the boss will spawn.」
**【逐語】**「You need to think about placing your cards tactically, in order to maximise your earnings before the boss arrives.」
**【逐語】**「You can only hold thirteen cards in your hand at once; any additional cards you receive will send your oldest card off to become Memory Fragments.」

**開発者（Aleksandr Goreslavets）── 【逐語】**
「Meadows were initially placed anywhere on the map and there was no special strategy in their placement. Then we added a combination where if the player placed them next to other tiles, they began to give 50% more healing, which radically changed the principle of placing this card.」

**【要約経由・別出どころ】** 置いたタイルが敵を呼ぶ具体例 ──
「空の宝物庫（周りが全部埋まっている）は**ガーゴイルの巣になる**」
「山を沢山置くと**ゴブリンの野営地**が湧き、並びが揃うと**ハーピー**が舞い降りる」
（https://medium.com/super-jump/loop-hero-is-a-refreshingly-great-tile-placement-rpg-599c7aab30c5 由来の検索結果。
**本文は開いていない。未確認**）

> **これが「引くと何が悪くなるか」の最も直接的な形。**
> **一枚置くたびに、(a) 資源が増え (b) 敵が増え (c) ボスが近づく。**三つが同じ一手に乗っている。
> **さらに手札上限13で、置かないと古いカードが勝手に消える。**「置かない」も無料ではない。

## 3-10. Balatro ── **難度を上げる段（ステーク）が、枠と経済を削る**

出どころ：https://balatrowiki.org/w/Stakes

**【逐語】**（8段。効果は累積）

| 段 | 効果 | 開くもの |
|---|---|---|
| White | 無し | ── |
| Red | 「Small Blind gives no reward money.」 | Zodiac Deck |
| Green | 「Required score scales faster for each Ante」＋「**+2 hand size, -1 Joker slot**」 | Painted Deck |
| Black | 「**30% chance** for Jokers in shops or booster packs to have an **Eternal** Sticker」 | Anaglyph Deck |
| Blue | 「-1 Discard」＋「Balance Chips and Mult when calculating score」＋「X2 base Blind size」 | Plasma Deck |
| Purple | 「Required score scales even faster for each Ante」 | ── |
| Orange | 「**30% chance** … **Perishable** Sticker」＋「All Ranks and Suits in deck」をランダム化 | Erratic Deck |
| Gold | 「**30% chance** … **Rental** Sticker (Costs $3 per round)」 | ── |

**シール（https://balatrowiki.org/w/Stickers）── 【逐語】**
**Eternal**「Can't be sold or destroyed」／**Perishable**「Debuffed after 5 rounds」／**Rental**「Lose $3 at end of round」

> **難度の上げ方が三種類ある。**
> (1) 要求スコアを速く上げる（Green・Purple）
> (2) **枠を減らす**（Green の −1 ジョーカー枠）
> (3) **持ち物に賞味期限と家賃を付ける**（Perishable 5ラウンド／Rental $3/回）
>
> **Eternal は「売れない」だけで、能力は下がらない。**
> **それでも罰になっているのは、枠が5しか無いから。**枠が有限だと「売れない」が罰になる。

### 相場と前提（第3節）

| 相場 | 前提 | こちらで成り立つか |
|---|---|---|
| **熱／Ascension のような、プレイ前に積む難度** | 一回を何十回も繰り返す前提／繰り返しの通貨が在る | **確かめていない。**繰り返しの通貨（メタ進行）の有無を知らない |
| **「選択肢の数を減らす」が難度になる**（Approval Process、Green の −1枠） | 選択肢の数が多いこと自体が強さになっていること | **成り立たない。**呼んだ側の実測が「105通り全部引ける」＝**選択肢の数が制約になっていない** |
| **明かり／呪いのような、いつでも上下できる連続つまみ** | 上下する操作が安く、頻繁にできること | **確かめていない**（ただしターン制なので、毎ターン上下させると待ち時間にならない） |
| **「拾う行為そのものが難度を上げる」（RoR2・Loop Hero）** | 難度が時間か手数の関数であること | **成り立ちうる。**22ターンという固定尺があるので「手数」は数えられる。**ただし現状は繋ぐ手が難度を上げていない**（呼んだ側の実測：赤字0本） |
| **持ち物に賞味期限・家賃を付ける（Perishable／Rental）** | 持ち物が有限枠であること | **確かめていない。**枠の有無を知らない |
| **リスクを上げると見返りが増える** | ── | **相場が割れている。**Gungeon は逆（拾いが減る）。→ §7-2 |

---
---

# 4. 盤面が入れ替わる仕掛け ── 「選び直す場面」の作り方

## 4-1. Balatro ── **ボスブラインドが、いちばん得意な手を狙って潰す**

出どころ：https://balatrowiki.org/w/Boss_Blind

**【逐語】**（全23種。最小アンティつき）

| ボス | 効果 | 最小アンティ |
|---|---|---|
| The Hook | 「Discards 2 random cards held in hand after every played hand」 | 任意 |
| **The Ox** | 「**Playing the most played hand this run sets money to $0**」 | 6 |
| The House | 「First hand is drawn face down」 | 2 |
| The Wall | 「Extra large blind」（**4倍**） | 2 |
| The Wheel | 「1 in 7 cards get drawn face down during the round」 | 2 |
| **The Arm** | 「**Permanently reduces poker hand level by 1**」 | 2 |
| The Club | 「All Club cards are debuffed」 | 任意 |
| The Fish | 「Cards drawn face down after each hand played」 | 2 |
| The Psychic | 「Must play 5 cards (not all cards need to score)」 | 任意 |
| The Goad | 「All Spade cards are debuffed」 | 任意 |
| The Water | 「Start with 0 discards」 | 2 |
| The Window | 「All Diamond cards are debuffed」 | 任意 |
| The Manacle | 「-1 Hand Size」 | 任意 |
| The Eye | 一回のなかで同じ役を二度使えない | 3 |
| **The Mouth** | 「**Only one hand type can be played this round**」 | 2 |
| The Plant | 「All face cards are debuffed」 | 4 |
| The Serpent | 「After Play or Discard, always draw 3 cards」 | 5 |
| **The Pillar** | 「**Cards played during Small/Big Blinds become debuffed**」 | 任意 |
| The Needle | 「Play only 1 hand」（**1倍**） | 2 |
| The Head | 「All Heart cards are debuffed」 | 任意 |
| The Tooth | 「Lose $1 per card played」 | 3 |
| The Flint | 「Base Chips and Mult for played poker hands are halved」 | 2 |
| The Mark | 「All face cards are drawn face down」 | 2 |

> **The Ox は「この回でいちばん多く使った役」を狙う。専門化そのものを罰している。**
> **The Pillar は「この回の小・大ブラインドで使ったカード」を狙う。直前の自分の手を罰している。**
> **The Arm は役のレベルを永久に1下げる。**一回のなかで、**積み上げが巻き戻る。**
>
> **これが「選び直す場面」の作り方である。**新しい選択肢を配るのではなく、
> **既に持っているものの一部を、その場面だけ無効にする。**

## 4-2. Balatro ── **持っているだけで痩せていくジョーカー**

出どころ：https://balatrowiki.org/w/Gros_Michel

**【逐語】** Gros Michel「+15 Mult」／「1 in 6 chance this card is destroyed at end of round」／
壊れたときの表示は「Extinct!」
**【要約経由】** Gros Michel が**自然に自壊したときだけ** Cavendish（×3 Mult）が出現するようになる。
**売ったり Ankh／Hex で壊した場合は出ない。**

**同型のジョーカー（検索結果より。個別ページは開いていない。未確認）**
Ice Cream（+100 Chips、**1手ごとに −5 Chips**）／Popcorn（+20 Mult、**1ラウンドごとに −4 Mult**）／
Turtle Bean（+5 手札枚数、**1ラウンドごとに −1**）／Ramen（×2 Mult、**捨てた1枚ごとに −0.01**）／
Cavendish（×3 Mult、**1/1000 で自壊**）。

> **「今は強いが、確実に弱くなる」品を混ぜている。**
> **持ち続ける判断が、毎ラウンド発生する。**
> **さらに Gros Michel は「自壊しないと次の段が解禁されない」。**
> **強い品を持ち続けることが、次の強い品を塞いでいる。**

## 4-3. Loop Hero ── **消す札（Oblivion）。ただし消すことでも締め切りが進む**

出どころ：https://steamcommunity.com/app/1282730/discussions/0/3115906960349139933/ （Steam 掲示板）

**【逐語】**「when you play an Oblivion card the 'card count' first goes up but when Oblivion's effect resolves(removing something) the 'card count' goes down.」

**【要約経由】** 結果として、**ボスのバーが残り1枚のときに Oblivion を切ると、ボスが湧く。**
「カードを1枚出した」判定でバーが満ちてボスが出てしまい、
その後 Oblivion の効果でバーが下がっても、**出たボスは引っ込まない。**
残り2枚以上あれば湧かない。

**【要約経由・検索結果より】** Oblivion は Lich の宮殿タイルも壊せて、**壊すごとに Lich のHPと攻撃力が 5% 下がる。**
（https://loophero.fandom.com/wiki/Oblivion 由来。**402 で開けず。未確認**）

> **「消す」に代価が付いている作りの実例。**
> 消す操作にも札を1枚使うので、**消せば消すほど締め切りが近づく。**
> **消すことで盤面は良くなるが、締め切りは進む。**

## 4-4. Vampire Survivors ── **進化すると、元の武器が消える**

出どころ：https://vampire.survivors.wiki/w/Evolution

**【逐語】**「On evolution, the base weapon is typically removed and the evolved weapon is added.」
**【逐語】** 合体（union）では「both base weapons are removed and their union is added, **freeing a weapon slot**」

**【要約経由】** 進化には、最大まで育てた元武器と、対応する付帯品（多くは最大レベル）が要る。
**付帯品は通常は消費されない。**
ただし Emergency Meeting DLC は例外 ── **【逐語】**
「The passive item will be consumed after evolving, and can be obtained again through leveling or pick-ups.」

**枠は武器6・付帯品6**（検索結果より。**未確認**）。

> **「合体すると枠が空く」が、この作りの要点。**
> **枠を空けるために合体する、という手が生まれている。**

## 4-5. Balatro ── **ステークの Perishable が、期限で盤面を回す**

出どころ：https://balatrowiki.org/w/Stickers （§3-10 と同じ）

**【逐語】** Perishable「Debuffed after 5 rounds」

> **5ラウンドで無効になる。**壊れるのでも売れるのでもなく、**居座ったまま効かなくなる。**
> **枠を占めたまま死ぬので、売る判断が要る。**

### 相場と前提（第4節）

| 相場 | 前提 | こちらで成り立つか |
|---|---|---|
| **節目のボスが「いちばん使った手」を狙って潰す** | 節目が何度も来ること（Balatro は8回） | **一部成り立つ。**関門は二回しかない。**二回では、潰されたあと組み直す余地が少ない**（未検証） |
| **持っているだけで痩せる品** | ラウンドという単位が在ること | **成り立つ。**22ターンという単位が在る |
| **消す操作に代価が付いている（Oblivion）** | 「置く／消す」が同じ資源を食うこと | **成り立たない。**呼んだ側の実測が「切るのはほぼ無痛」 |
| **合体すると枠が空く** | 枠が有限であること | **確かめていない** |
| **賞味期限で盤面が回る** | 効果が「持っている間ずっと効く」型であること | **成り立つ。**渡された前提が「繋いだ年数で効果が育つ」なので、**時間が効果に効く構造は既に在る** |

---
---

# 5. 外れ ── 明確に損な選択肢を混ぜているか

## 5-1. Slay the Spire ── **呪いカード14種。デッキに残り、使えない**

出どころ：https://www.slaythespire.gg/cards/curse

**【逐語】**「Curses are unplayable negative cards added by Events, chests, or relics.」
**【逐語】** 一覧（14種）── Ascender's Bane／Clumsy／Curse of the Bell／Decay／Doubt／Injury／
Necronomicurse／Normality／Pain／Parasite／Pride／Regret／Shame／Writhe
**【逐語】**「can be exploited with relics like Du-Vu Doll or removed with Blue Candle」

個別（https://slaythespire.wiki.gg/wiki/Necronomicurse ／ https://slaythespire.wiki.gg/wiki/Parasite
── **検索結果からの引用。個別ページ本文は開いていない**）
**Necronomicurse**「There is no escape from this Curse. (Cannot be Exhausted or Removed from your deck.)」
── **Cursed Tome イベントで The Necronomicon を拾うと付く。**
**Parasite** ── **除去／変換すると、その場で最大HPが3減る。**
Hypnotizing Colored Mushrooms イベントと Writhing Mass 戦から来る。

**【逐語】**（wiki.gg の一般説明）「Unlike Status cards, they stay in your deck outside of combat.」

> **「外れ」を選択肢に混ぜているのではない。**
> **「得と引き換えに、外れを受け取る」形にしている。**
> Neow の三つめ（§1-7）、Cursed Tome、Hypnotizing Mushrooms ── **全部が引き換え。**

## 5-2. Slay the Spire ── **見た目は良いが弱いカード（noob trap）が、実在すると community が言っている**

出どころ：https://steamcommunity.com/app/646570/discussions/0/2269193447665792325/ （Steam 掲示板）

**【逐語】**
「Grand Finale requires the ability to discard cards and hold onto GF until your draw pile is 0, making it a very bad card」
「All of Defect's darkness cards are useless IMO」
「I basically never take Collect, Foreign Influence, Study, Wreath of Flame, Alpha, Conjure Blade, or Master Reality」
「Signature Move is an ok Act 1 card but it flops out later」
「Wish is a card I take grudgingly because I can see its value, but actually getting it played is usually a pain」

そして**反論が同じスレッドに在る ── 【逐語】**
「I think the never word should not exist in the card game like slay the spire」

**【要約経由・検索結果より】** Clash（0コストで14〜18ダメージだが、**手札が攻撃だけのときにしか撃てない**）が
「biggest noob trap」と呼ばれている。**敵が状態異常カードを混ぜてくる／呪いを持って始まる／
高コストのパワーを取る、のどれかが起きると死ぬ。**
（https://tvtropes.org/pmwiki/pmwiki.php/LowTierLetdown/SlayTheSpire 由来。**403 で開けず。未確認**）

> **「外れだと分かるのはいつか」への答えが、ここに在る。**
> **Clash は「選ぶ前」には外れに見えない。**0コストで14ダメージは強く見える。
> **外れになるのは、後半にデッキが膨らんでからである。**
> **つまり「外れかどうかが、自分の後の選択で決まる」型。**

## 5-3. Enter the Gungeon ── **リスクを上げると、拾いが減る**（外れの裏側）

出どころ：https://enterthegungeon.wiki.gg/wiki/Curse （§3-6 と同じ）

**【逐語】**「`(1+[coolness]-[curse])%`」

> **呪いを持つと部屋の報酬確率が下がる。**
> つまり **「呪い＋1」の品は、単体では純粋な外れである。**
> 得になるのは**呪いを狙って積む型を組んだときだけ。**
> **「外れ」と「組み合わせたときだけ得」が、同じ品の裏表になっている。**

## 5-4. 設計論 ── **「完全な知識があれば、完全に無用な品は無いようにせよ」**

出どころ：https://www.gamedeveloper.com/game-platforms/analysis-the-eight-rules-of-roguelike-design
（John Harris の記事。Game Developer）

**八つの規則（【要約経由】。引用符の中は逐語）**

1. **No Beheading Rule** ──「The player's character should not be killed or harmed too greatly and permanently in one attack」
2. **No Cyanide Rule** ──「No unidentified item should be immediately fatal upon use given reasonable circumstances.」
3. **Item Masquerade Rule** ── 同じ種類の品は似た見た目にして、正体を隠しにくくする
4. **Situational ID Advantage Rule** ── 品の効果は重ねて、試すことが**ある状況では得、別の状況では損**になるようにする
5. **Item Enchantment Rule** ── 正体が割れた品は、資源配分の判断材料になるようにする
6. **Two-Sided Coin Rule** ──「**Given perfect knowledge of identifications and uses, items should never be completely useless.**」
7. **Reducing Grind Rule** ── 時間そのものが有限資源（普通は食料）を減らし、居座りを止める
8. **Race You Can't Win Rule** ── 敵の強さの伸びがプレイヤーの伸びを追い越すようにして、
   **拾った品と戦術に頼らせる**

> **6番が「外れ」への直接の答え。**
> 理由も書いてある ── **【要約経由】**「無用な品が無ければ、
> プレイヤーは**でたらめな品生成の気まぐれから守られる**」。
> **知識への報酬だけが理由ではない。**

**同記事の傍証 ── 【要約経由】** 初代 Rogue でいちばん弱い防具（Leather Armor）は、
**錆びの罠と錆び喰いに対して無敵**という性質を持っている。
**いちばん弱い品に、一つだけ他が持たない性質が付いている。**

## 5-5. 設計論 ── **善vs悪は面白い選択ではない**

出どころ：https://www.gamedeveloper.com/design/gdc-2012-sid-meier-on-how-to-see-games-as-sets-of-interesting-decisions （§1-9 と同じ）

**【要約経由】**「'good vs. bad' isn't particularly rich since it lacks tradeoffs」
「interesting decisions ask players to weigh choices and ensure that the **choice not taken feels like a sacrifice**」

## 5-6. 割合について ── **見つからなかった**

**「外れの割合」を数字で書いた出どころは、三通り言葉を変えても出てこなかった。**

探した言葉 ──
`roguelike design "trap options" bad items deliberately weak choices debate newbie trap` ／
`Balatro joker tier list worst jokers F tier how many jokers are bad 150 distribution` ／
`Slay the Spire "trap card" newbie trap cards that look good but are bad community list`

出たのは**ティア表の存在**だけで、**各段に何個入っているかを数えた出どころに辿り着けなかった。**
（https://punquix.com/balatro-joker-tier-list/ は 404、
https://mobalytics.gg/blog/tier-lists/best-balatro-jokers/ は 403。下記「開けなかったもの」）

**唯一得られた質的な記述（検索結果より。本文は開いていない。未確認）** ──
「F-tier jokers in Balatro almost never help and can actively hurt your run」
例として Stone Joker（極端に限定的で当てにならない）、Misprint（見返りの無いでたらめさ）、
Séance（一貫性が無く枠に見合わない）。

> **「外れは何割か」は、この調査では答えが出ていない。**

### 相場と前提（第5節）

| 相場 | 前提 | こちらで成り立つか |
|---|---|---|
| **外れは「選択肢」ではなく「引き換えの片側」として渡す** | 得と損を同じ一手で渡せること | **成り立つ。**所持金という差し出せる資源が在る |
| **完全な知識があれば無用な品は無い（Two-Sided Coin）** | 品に正体不明の段階が在ること（Rogue の未鑑定） | **確かめていない。**特産品／航路に「正体不明」が在るかを知らない |
| **外れかどうかは後半に決まる（Clash 型）** | デッキ／盤面が膨らんでいくこと | **成り立たない可能性が高い。**呼んだ側の実測が「105本全部引ける」＝**膨らむことが罰になっていない** |
| **リスクを上げると拾いが減る（Gungeon）** | 拾いの確率という層が在ること | **確かめていない** |
| **選ばなかったほうが犠牲に見えること** | 選択肢が同時に見えていること | **成り立つ**（ターン制・完全情報側） |

---
---

# 6. 一回の設計 ── 長さ、山場、関門、負け方、持ち越し

## 6-1. Balatro ── **8アンティ × 3ブラインド ＝ 最大24ラウンド**

出どころ：https://balatrowiki.org/w/Ante

**【逐語】**「An Ante is made up of three rounds, each consisting of a Small Blind, a Big Blind, and a Boss Blind.」
**【逐語】**「By completing Ante 8 and finishing the Showdown Blind, the run is considered 'won'.」

**要求スコア（【要約経由】。数値は原文）**

| アンティ | 基本 | Green Stake+ | Purple Stake+ |
|---|---|---|---|
| 1 | **300** | 300 | 300 |
| 2 | 800 | 900 | 1,000 |
| 3 | 2,000 | 2,600 | 3,200 |
| 4 | 5,000 | 8,000 | 9,000 |
| 5 | 11,000 | 20,000 | 25,000 |
| 6 | 20,000 | 36,000 | 60,000 |
| 7 | 35,000 | 60,000 | 110,000 |
| 8 | **50,000** | 100,000 | 200,000 |

**倍率（https://balatrowiki.org/w/Blinds）── 【逐語】**
Small Blind「1x base chips」／報酬 **$3**
Big Blind「1.5x base chips」／報酬 **$4**
Boss Blind 標準「2x base」／報酬 **$5**（例外：The Wall **4x**、The Needle **1x**）
Showdown Blind「2x base」／報酬 **$8**（例外：Violet Vessel **6x**）

> **一回は最大24ラウンド、最短は 8×1＝8ラウンド**（小・大を全部飛ばした場合）。
> **要求スコアは 300 → 50,000 で 167倍。**アンティごとの伸びは 2.67／2.5／2.5／2.2／1.82／1.75／1.43 倍。
> **前半のほうが伸び幅が大きく、後半で緩む。**

## 6-2. Balatro ── **利子。「使い切る」を罰する**

出どころ：https://balatrowiki.org/w/Interest

**【逐語】**「At the end of each round, $1 of interest is earned for every $5 the player has at the end of the round, with a cap of $5 each round (which means that any money over $25 won't generate interest).」
**Seed Money（バウチャー）** ── 上限 **$10**（$50 まで）
**Money Tree（バウチャー）** ── 上限 **$20**（$100 まで）
**To the Moon（ジョーカー）** ── **$5 につきさらに $1**
**Green Deck / The Omelette / Mad World** ──「Earn no Interest」
**Yellow Deck** ──「Start with extra $10」

**【要約経由・別出どころ】** 攻略の言い方 ──
「毎回のブラインドに **$25 以上**を持って入れ。**店で $0 まで使うのは働いた気がするが、
次のラウンドの受動収入を切っている。**」
（https://games.gg/balatro/guides/balatro-economy-guide/ 由来の検索結果。**本文は開いていない。未確認**）

> **これが「何を諦めさせるか」の最も乾いた形。**
> **買うと、買わなかった場合の利子（最大 $5/回）を失う。**
> **買わない選択に、はっきりした値段が付いている。**
> **上限 $25 なので、$25 を超えた分は「貯める理由が無い」── 貯めすぎも罰する。**

## 6-3. Slay the Spire ── **17階 × 3幕**

出どころ：https://slaythespire.wiki.gg/wiki/Map_Generation （§1-3 と同じ）

**【逐語】**「Each act contains 17 floors」
固定床 ── **1階＝弱い戦闘／9階＝宝箱／15階＝休憩／16階＝ボス／17階＝ボス宝箱。**

> **休憩が15階に固定されている。**つまり**ボスの直前に必ず一回、「回復するか強化するか」の二択が来る。**
> **山場（16階）の直前に、必ず一つ判断を置いている。**

## 6-4. Slay the Spire ── **休憩は二択**（回復か、強化か）

出どころ：https://slaythespire.wiki.gg/wiki/Map_Locations 由来の検索結果。**本文で確認できたのは種類の一覧まで。**
数値（**回復は最大HPの30%、切り捨て**）は検索結果由来で、**本文は開いていない。未確認。**

**【要約経由・検索結果より】** 攻略側の相場 ──
「焚火では強化のほうが強いことが多いが、**ボスに瀕死で着くと一回が終わる。**」
「最良の道が最も安全な道とは限らない。**エリートが多く休憩が少ない道のほうが、
デッキが強くなってボスや後の幕に備えられることがある。**」
（https://www.spirebuilds.com/guides/best-map-pathing-strategy を開いたが、**数値は一つも書かれていなかった** ──
**【逐語】**「Say yes when your deck has early damage, your health is stable, you have a useful potion, or a campfire supports the route.」
**【逐語】**「Do not assume every campfire is for resting. A route with campfires is strong partly because upgrades create permanent power.」）

> **開いてみると、攻略記事に数字が無い。**
> **「HPが◯以上ならエリートを取れ」のような線を、誰も引いていない。**→ §8-2

## 6-5. Loop Hero ── **負け方が三段階。持ち帰る割合が違う**

出どころ：https://www.slythergames.com/2021/03/12/loop-hero-when-to-retreat-guide/
出どころ：https://steamcommunity.com/app/1282730/discussions/0/3112522283881051908/ （Steam 掲示板）

**【逐語】**（Steam）「If you retreat when you're at the campfire you get to keep _100%_ of the resources you obtained during the expedition!!」
**【逐語】**（slythergames）「Dying results in losing **70%** of your resources」

**途中撤退が 60%** という数値は、**検索結果には出たが、本文を開けた出どころが無い。未確認。**
（https://gamertweak.com/how-to-return-camp-loop-hero/ は 403）

**【逐語】**（slythergames）撤退を考える場面 ──「Sometimes you're better off retreating with your resources so you can upgrade the camp further」
**【逐語】**「Deciding when to retreat depends on how much of a risk-taker you are.」

> **「負ける」が三段階に割れている。**
> **焚火まで歩いて戻る（100%）／その場でやめる（60%？）／死ぬ（30%）。**
> **「やめる」が、途中の一手として盤上に在る。**
> しかも**焚火に戻る途中で死ぬ**という形で、**やめる行為そのものが賭けになっている。**

## 6-6. Loop Hero ── **開発者は「負けを罰しない」と言っている**

出どころ：https://www.destructoid.com/closing-the-loop-four-quarters-on-the-making-of-loop-hero/

**【逐語】** Aleksandr Goreslavets
「Loop Hero doesn't have any option for it, but we don't 'punish' players for losing. Even if the hero dies—they will take some resources to their camp to upgrade some buildings. **We didn't want players to feel afraid to experiment or punished for 'ineffective play.'**」

**【逐語】** 発想の元 ──
「We discussed the genre of 'Zero Player Games,' and our artist created the idea of a Hero who walks in the Loop.」

## 6-7. Rogue Legacy ── **持ち越さない。所持金は入口で全部取られる**

出どころ：https://roguelegacy.wiki.gg/wiki/Charon

**【逐語】**「For every heir except Sir Lee (even if he enters NG+) the castle entrance is blocked by Charon demanding **100% of your gold** in exchange for letting you pass.」
**【逐語】**「Haggle, one of the Manor Upgrades gives **+10% Charon's toll discount per level (up to 50% discount at lv 5)**.」
**【逐語】** Charon's Obol を持っていれば「I will let you pass for free, but only this one time.」

> **「持ち越さない」を、演出ではなく規則で書いている。**
> **一回が終わったら金は消える。だから使い切るしかない。**
> **迷う余地が無い形で、貯金という手を潰している。**
> 割引が **50% までしか行かない**のも重要 ── **完全には貯金できない。**

## 6-8. Balatro ── **メタ進行が無い、と作品側もプレイヤー側も言う**

出どころ：https://steamcommunity.com/app/2379780/discussions/0/7434950195648231985/ （Steam 掲示板）

**【逐語】**「Decks and jokers are unlocked by in-run actions and show up on later runs.」
**【逐語】**「It is more roguelike than roguelite.」
**【要約経由】** Hades や Isaac のように**進めるほど楽になる**のとは違って、Balatro は難度が
「more stable」で、解禁は**強さではなく種類を増やすだけ。**

> **持ち越すのは「選択肢の種類」であって、「強さ」ではない。**

## 6-9. Hades ── **持ち越すのは「知識」と「物語」**

出どころ：https://www.gamedeveloper.com/design/roguelikes-and-narrative-design-with-i-hades-i-creative-director-greg-kasavin
（Game Developer の記事。**一次は GDC Podcast ep.16**
https://gdconf.com/article/roguelikes-and-narrative-design-with-hades-creative-director-greg-kasavin-gdc-podcast-ep-16/
── **こちらは開いていない**）

**【逐語】** Kasavin ──「what about a character who's just immortal--like they don't die for real, Because you don't really die for real in roguelike games?」
**【逐語】**「every time you run into a boss, they remember, you start keeping a tally of who won this time, who won last time.」
**【要約経由】** 持ち越すものとして真っ先に挙げているのは「your knowledge of the mechanics in the game」。
Spelunky のような古典ローグライクと同じ、と。
**【逐語】** 難所への対処 ──「we try to build systems into our games that mitigate those kinds of moments, so that if you are engaged in the narrative, but you haven't been playing games since you were six or whatever, you can still work your way through.」

**続編での言い直し（検索結果より。本文は開いていない。未確認）** ──
「If you don't finish the run, it doesn't mean that you failed」
（https://www.gamesradar.com/games/hades/hades-2-director-challenges-roguelike-convention-.../ ）

## 6-10. Into the Breach ── **「主役を失うのが最悪」を、忘れさせにいく**

出どころ：https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i- （§2-6 と同じ）

**【逐語】** Justin Ma「We're requiring players to unlearn something that's been taught by almost every other strategy game, which is that losing your mechs or main characters is the worst thing that can happen.」

> **負け方の設計を、「何を惜しませるか」の付け替えとして語っている。**
> **機体ではなく建物（＝電力網の7点）を惜しませる。**

## 6-11. 一回の長さの相場 ── **20〜30分。ただし出どころが弱い**

出どころ：https://bugnet.io/blog/how-to-design-a-roguelite-meta-progression

**開いた結果、期待した内容は入っていなかった。**
**【逐語】** 唯一使える一文 ──「meta-progression that enhances—giving lasting progress and motivation, opening new options, making the player somewhat stronger—**while preserving the skill challenge**」
**【逐語】**「upgrades that enhance the player's capabilities and options while runs still demand skillful play, so the meta-progression and the skill challenge coexist」
**分類も、持ち越す／持ち越さないの具体的な指針も、数値も、実例も無かった。**

**「20〜30分が良い」という言い方は検索結果に出たが**
（https://medium.com/@todorovicnik2/... は 403、https://www.thegamer.com/best-shortest-roguelite-roguelike-video-games/ は未取得）、
**本文を開けた出どころがゼロ。この相場は、この調査では裏が取れていない。**

## 6-12. 指標で調整した話（**中身が薄い**）

出どころ：https://podwise.ai/episodes/1459444 （GDC 2018「Slay the Spire: Metrics Driven Design and Balance」の要約サイト）
**一次は GDC Vault** https://www.gdcvault.com/play/1025731/-Slay-the-Spire-Metrics **── 開いていない。**

**【逐語】**（要約サイトに載っていた文）
「they used an internal Slack channel and a metric server to gather and analyze player data」
「metrics can be misleading if not carefully interpreted」
「every card should have its place and avoid overpowered effects to maintain diverse strategies」
「rare overpowered combos without disrupting other players' experiences」（**一人用だからできる**という文脈）

**【要約経由】** 勝率・カードの採用率という言葉は出るが、**具体的な数値は要約に入っていない。**

> **「一人用だからこそ、まれに壊れた組み合わせを許せる」**という一文だけは、そのまま使える形で残っている。

## 6-13. 日本語の開発者の反省 ── **「完成した瞬間に満足感が消える」**

出どころ：https://hothukurou.com/blog/post-4556 （§2-7 と同じ）

**【要約経由】**「デッキが完成した瞬間、**将来の成長への期待が消える。期待が消えると満足感も消える。**
ガチャゲームで全部集めた後に興味を失うのと同じ。」
**【逐語】**「デッキの完成が速すぎて、デッキ3~4枚を序盤に早々にくみ上げて後は無双して終わるだけのパターンをいくつか確認した。」

**【要約経由】** 面白さの側の結論も書いてある ──
**「ゲームバランスを壊す瞬間が面白さの核。」**噛み合ったデッキが組み上がったときの圧倒的な強さ。
**複数の勝ち筋（回復スタッフ型・コンボ型）があると繰り返し遊ばれる。**

**【要約経由】** 市場の話 ──**Slay the Spire（2017）以降、ジャンルが飽和して目新しさが減った。**
本人の最新作は、直近の別作品（Combat Reversi）より反応が明らかに薄かった。
「**仕組みだけでは足りず、それ以外の引っかかりが要る。**」

## 6-14. 日本語のジャンル論 ── **選択の単純さと、諦めどきの分かりやすさ**

出どころ：https://note.com/j1n1/n/n188bbd94ee5a （Jini「ローグライク論」）
出どころ：https://www.4gamer.net/games/463/G046327/20240129026/ （4Gamer・Slay the Spire）

**【要約経由】**（note）ローグライクの判断は**単純で回数が多い**ものを重ねている。
複雑な機構ではなく、資源管理と道の選択。**単純さは意図的で、
プレイヤーの操作技量を要因から外して、でたらめな条件への適応に絞るため。**
**【要約経由】** 撤退・失敗を**自然に理解させる**設計になっており、
人為的な難度の壁を置かないので、**やり直しが「罰」ではなく「自分で選んだこと」に感じられる。**

**【要約経由】**（4Gamer）
「デッキ枚数が少ないことがデメリットにならないため、**デッキ枚数を抑えて、強力なカード**が戦略となる」
「敵の次の行動を確認できる」ことで「**完璧に対応したくなる**」心理が働き、
「目の前の状況に応じるだけでなく、**次の次まで考慮する**プレイングが重要」になる。
「**10回プレイすれば10回違うデッキができる**」ことが繰り返しの動機。

## 6-15. デッキ圧縮の日本語の相場

出どころ：https://note.com/stssaturn/n/nad2936249b84

**【逐語】**「ある閾値に達して当面は大丈夫だとわかったら、長期的に見て不利になるようなカードをデッキに追加する理由はない」
**【逐語】**「目の前の課題に対して自分のデッキを有意義に改善するカード」だけを採る
**【逐語】**「アタックが2,3枚あれば基本的にはAct1とAct2の道中までは乗り切ることが出来るはず」

> **「閾値に達したら、それ以上は取らない」という判断の型。**
> **数は「アタック2〜3枚」と具体的に書かれている。**

### 相場と前提（第6節）

| 相場 | 前提 | こちらで成り立つか |
|---|---|---|
| **一回 = 8関門 × 3ラウンド = 最大24** | 関門ごとに店と報酬が来ること | **成り立たない。**関門は二回。**22ターンに対して関門が二回は、Balatro の24ラウンドに対して8関門より、はるかに疎い** |
| **要求額が 300 → 50,000 で 167倍** | スコアが指数的に伸びる仕組みが在ること | **成り立たない。**取り立ては 600 → 2,400 で**4倍。**呼んだ側の実測では最終所持金が関門の千〜五千倍 |
| **利子で「使い切る」を罰する** | 通貨が一つで、貯めることに意味があること | **成り立つ。**スコアは所持金ひとつ。**ただし通貨が余っている状態では、利子は制約にならない** |
| **山場の直前に必ず二択を置く（15階＝休憩）** | 山場の位置が固定されていること | **成り立つ。**関門の位置は固定（600 と 2,400） |
| **負け方が三段階（100%/60%/30%）** | 途中で自発的にやめられること | **確かめていない。**22ターン固定なら「早くやめる」が在るかどうかを知らない |
| **所持金は持ち越さない（Charon 100%）** | 一回のあいだの通貨と、繰り返しの通貨が分かれていること | **確かめていない。**メタ進行の有無を知らない |
| **持ち越すのは「種類」であって「強さ」ではない** | 種類が十分多いこと | **確かめていない** |
| **一回は20〜30分** | ── | **裏が取れていない。**本文を開けた出どころがゼロ（§6-11） |

---
---

# 7. 相場が割れている箇所

## 7-1. **枠の見せ方が三つに割れている**

| やり方 | 作品 | 何が起きるか |
|---|---|---|
| **売るか壊すかを迫る** | Balatro（ジョーカー5枠） | 「6枚目を買うには、5枚のどれかを売れ」と**画面で迫る** |
| **溢れた分は黙って出ない** | Monster Train（一階7体）、Balatro の消耗品（生成数が減る） | **何も迫らない。**溢れる量が減るだけ |
| **形が合わないと入らない** | Backpack Hero（面積の枠） | 空きマスが在っても入らない。**「捨てる」ではなく「置けない」** |

**さらに、枠を持つ層も割れている。**
Balatro はジョーカー（＝盤面の主力）に枠を掛ける。
**Slay the Spire はレリック（＝規則の側）に枠を掛けていない。**枚数無制限。
枠が在るのは**ポーション（消耗品）だけ**で、しかも Ascension 11 でそこを減らす。

> **「主力に枠を掛けるか、消耗品にだけ掛けるか」で二派に割れている。**
> Slay the Spire はレリックに枠を掛けない代わりに、**デッキが膨らむことを罰している。**
> **枠を明示的に置くか、暗黙の罰にするか、の違い。**

## 7-2. **リスクを上げると見返りが増える、が成り立たない作品がある**

- **Hades** ── 熱を上げると、通貨をもう一度取れる。**素直に増える**
- **Darkest Dungeon** ── 暗くすると拾いが良くなり、**自分の会心率まで上がる**
- **Dead Cells** ── 呪いの箱は箱の中身。**遊んだ人は「割に合わない」と言っている**（§3-5）
- **Enter the Gungeon** ── 呪いを上げると**部屋の報酬確率が下がる**（式に −curse）。増えるのは弾薬だけ

> **「上げるほど得」から「上げるほど損だが、それを利用する型が在る」まで、四段階に散っている。**
> **どちらが正解かは、資料の中で決着していない。**

## 7-3. **メタ進行を置くか置かないか**

- **Balatro** ── **【逐語】**「It is more roguelike than roguelite.」種類だけ増える
- **Rogue Legacy** ── 所持金は入口で **100% 取られる**が、館の強化は永続
- **Loop Hero** ── **【逐語】**「we don't 'punish' players for losing. Even if the hero dies—they will take some resources to their camp」
- **Hades** ── 物語と鏡の能力が永続。持ち越すのは**知識**だと本人は言う
- **Slay the Spire** ── 解禁のみ。**Ascension は逆向き**（自分で難しくする）

> **「一回の中の強さ」を持ち越すか否かで、はっきり割れている。**
> **持ち越さない側（Balatro・StS）は、代わりに「自分で難度を上げる段」を用意している。**
> ここは対になっている可能性がある。**だが「対にせよ」と書いた出どころは無い。**

## 7-4. **外れを混ぜるか、混ぜないか**

- **Eight Rules の 6番** ──「完全な知識があれば、完全に無用な品は無いようにせよ」
- **Sid Meier** ──「善vs悪は引き換えが無いので豊かではない」
- **一方 Slay the Spire は、呪いカードを14種持っている。**ただし**選択肢としてではなく、引き換えの片側として渡している**
- **Blazing Beaks は、悪い品そのものを通貨にしている**
- **プレイヤーは「取らないカード」を挙げる**が、同じスレッドに**【逐語】**「the never word should not exist」という反論が在る

> **「外れを混ぜるな」と「外れを混ぜろ」が、両方在る。**
> **決着しているのは一点だけ ── 外れを『三択の一つ』として黙って混ぜている作品は、
> この調査の範囲では見つからなかった。**外れは必ず**引き換えか、通貨か、後から分かる形**で渡されている。

## 7-5. **スキップに代価を付けるか**

- **幸運の大家様** ── **一回ごとに1払う維持費が在り、「何も拾わないで生き延びる」ことができない**
  （`roguelite-effects.md` §12-3・第1節。**本書では再掲しない**）
- **Slay the Spire** ── スキップは無料。**ただし天井は3ティック進む**（§1-2）
- **Balatro** ── スキップすると**タグをもらえる**が、**店と利子とジョーカー強化を失う**（§1-4）
- **Vampire Survivors** ── スキップに**経験値がもらえる**。しかも**回数を金で買う**（§1-5）

> **「スキップは罰される」から「スキップは報酬される」まで、正反対まで割れている。**
> **共通しているのは一つだけ ── どの作品も、スキップの結果を必ず何かに換えている。
> 「何も起きない」スキップは、一本も見つからなかった。**

---

# 8. 当たり前になっているが、理由が書かれていないもの

## 8-1. **なぜ N＝3 なのか**

Slay the Spire（カード3枚）、Hades（恩恵3つ）、Rogue Legacy（子3人）、
Neow（各枠の候補から3つ）── **ほぼ全部が3。**

**理由を書いた出どころは一つも無かった。**
Sid Meier の講演は「三択で常に一つ目を選ぶなら面白くない」と、**3を前提にして話している。**
**なぜ4でも2でもないのかを説明した資料に、辿り着けなかった。**

## 8-2. **攻略記事に、線を引く数字が無い**

`spirebuilds.com` の道選びの記事を開いたら、**数字が一つも書かれていなかった。**
**【逐語】**「Say yes when your deck has early damage, your health is stable, you have a useful potion, or a campfire supports the route.」
── **「health is stable」が何HPかは書いていない。**

一方でカードの枚数には線が在る ── **【逐語】**「Skip when: Your deck is already over 25 cards.」
日本語の攻略にも在る ── **【逐語】**「アタックが2,3枚あれば」
`roguelite-effects.md` §12-3 にも在る ──「スロット数が半分以上埋まるまでスキップは厳禁」（20マス中10）。

> **「持ち物の数」には線が引かれるが、「HP や資源の残量」には線が引かれない。**
> **なぜ片方だけなのかを説明した出どころは無い。**

## 8-3. **なぜ「捨てる」より「無効化する」なのか**

Balatro のボスブラインドは、**カードを取り上げない。**「debuffed」にする。
Perishable も**壊さない。**「Debuffed after 5 rounds」。
Slay the Spire の呪いも**除去されない。**デッキに残って手札を詰まらせる。

**「取り上げる」ではなく「持たせたまま効かなくする」という形が共通しているが、
理由を書いた出どころは無かった。**

## 8-4. **なぜ天井（pity）を隠すのか**

Slay the Spire のレアの天井（−5% から +1% ずつ、上限 +40%）も、
ポーションの ±10% も、**ゲーム内には表示されない。**
**【逐語】**「A hidden offset starts at −5%」── hidden と書かれている。

`roguelite-effects.md` 第1節にも同じ話が在る ──
幸運の大家様のプレイヤーが「オートチェスみたいに％を出してほしい」と要求して、**開発は答えていない。**

> **二本の別の作品で、同じことが起きている。**
> **理由を書いた出どころは、どちらにも無い。**

---

# 9. 昔と今で変わったもの

## 9-1. **「死んだら全部失う」→「死んでも何割か持ち帰る」**

**1980年の Rogue** は永久死（Eight Rules の記事が扱っているのはこの系統）。
**2021年の Loop Hero** は **【逐語】**「we don't 'punish' players for losing. Even if the hero dies—they will take some resources to their camp to upgrade some buildings.」
**変えた理由が本人の口から出ている ── 【逐語】**「We didn't want players to feel afraid to experiment or punished for 'ineffective play.'」

**2018年の Into the Breach** は、**主役を失うことを最悪でなくする**方向に踏み込んでいる ──
**【逐語】**「We're requiring players to unlearn something that's been taught by almost every other strategy game」

> **「実験を怖がらせない」が、変えた理由として明示されている数少ない例。**

## 9-2. **メタ進行が「増えた」あと、「戻した」作品が出ている**

**2020年の Hades** はメタ進行の代表（鏡・物語・武器の相）。
**2024年の Balatro** はプレイヤー自身が **【逐語】**「It is more roguelike than roguelite.」と言う位置に戻している。
比較対象として **Hades と Isaac** が名指しされ、**あれらは進むほど楽になるが Balatro は「more stable」**とされる。

> **一度メタ進行に寄ったジャンルが、戻す方向の作品を出している。**
> **戻した理由を作者本人が書いた出どころには、辿り着けなかった。**

## 9-3. **Slay the Spire 以降、ジャンルが飽和したと開発者が書いている**

出どころ：https://hothukurou.com/blog/post-4556
**【要約経由】**「Slay the Spire（2017）以降、デッキ構築ローグライクは飽和し、目新しさによる注目が減った。
**仕組みだけでは足りず、それ以外の引っかかりが要る。**」

> **これは相場の変化ではなく、相場が普及したことによる変化。**
> **「仕組みが良い」だけでは通らなくなった、と当事者が書いている。**

## 9-4. **Balatro 自身の中で、進化した仕掛け ── シールとステーク**

**Eternal（売れない）→ Perishable（5ラウンドで無効）→ Rental（毎ラウンド $3）**が、
**難度の段（Black → Orange → Gold）の順に一つずつ足されている。**
**同じ「持ち物への課税」を、三通りの形で段階的に足している。**

> **段が上がるにつれて、罰の性質が「動かせない」→「腐る」→「金がかかる」と変わる。**
> **理由は書かれていないが、順番そのものが記録として残っている。**

## 9-5. **Loop Hero の草原タイル ── 開発中に「置く場所」が意味を持つように変えた**

**【逐語】** Goreslavets「Meadows were initially placed anywhere on the map and there was no special strategy in their placement. Then we added a combination where if the player placed them next to other tiles, they began to give 50% more healing, **which radically changed the principle of placing this card.**」

> **「どこに置いても同じ」を「隣が何かで 50% 変わる」に変えたら、置き方の戦略が生まれた、と本人が言っている。**
> **数値は 50%。**変更前は「特別な戦略が無かった」と明記されている。

---

# 10. 出どころが一件しかない答え（**一覧**）

| 答え | 一件だけの出どころ |
|---|---|
| Hades の Fated Persuasion の費用が 1→2→3 と上がる | 検索結果のみ。掲示板本文には書かれていなかった（§1-6） |
| Loop Hero の途中撤退が 60% | 検索結果のみ。本文を開けた出どころゼロ（§6-5） |
| Backpack Hero の盤が 3×3 開始・最大 7×9 | 検索結果のみ（§2-5） |
| Vampire Survivors の武器6・付帯品6 の枠 | 検索結果のみ（§4-4） |
| Balatro の Negative は売ると枠も消える | 検索結果のみ（§2-1） |
| Dead Cells の Acceptance 5体／Alienation 15体／併用8体 | 検索結果のみ（§3-4） |
| Darkest Dungeon の「拾いは通常戦利品と独立に+1個」 | 検索結果のみ（§3-3） |
| Loop Hero の Oblivion が Lich の宮殿を壊すと 5% 下がる | 検索結果のみ（§4-3） |
| StS の「?」部屋の内訳（モンスター10%・宝2%・店3%） | 検索結果のみ（§1-3） |
| StS の休憩の回復量（最大HPの30%・切り捨て） | 検索結果のみ（§6-4） |
| Balatro の「毎ブラインドに $25 以上持って入れ」 | 検索結果のみ（§6-2） |
| Loop Hero のタイル連鎖（空の宝物庫＝ガーゴイル、山＝ゴブリン／ハーピー） | 検索結果のみ（§3-9） |
| Blazing Beaks の危険値と greed の比例関係 | 検索結果のみ（§3-7） |
| RoR2 の「ステージごとに約15%、時間より効く」 | 検索結果のみ（§3-8） |
| Balatro の F-tier ジョーカーの実名 | 検索結果のみ（§5-6） |
| StS の Clash が「biggest noob trap」 | 検索結果のみ（§5-2） |
| 一回の長さ 20〜30分 | 検索結果のみ。**本文ゼロ**（§6-11） |
| Monster Train の 7体上限の理由（重ねると壊れるから） | 検索結果のみ（§2-4 の理由部分） |
| StS の呪い個別（Necronomicurse・Parasite）の効果文 | 検索結果のみ。個別ページ本文は開いていない（§5-1） |

**19件。**うち **1件（一回の長さ 20〜30分）は本文を一つも開けていないので、相場として扱えない。**

---

# 11. 開けなかったもの

**この節に入れた URL は `check-refs.mjs` が確かめに行かない**（自己申告のため）。

## 11-1. 402 Payment Required（Fandom 系。**全滅**）

- https://hades.fandom.com/wiki/Pact_of_Punishment ── **402。**rpgsite で代替した
- https://darkestdungeon-archive.fandom.com/wiki/Light_Level ── **402。**gamepressure で代替した
- https://darkestdungeon.fandom.com/wiki/Light_Meter ── **402**
- https://loophero.fandom.com/wiki/Oblivion ── **402。**Steam 掲示板で一部代替した
- https://loophero.fandom.com/wiki/Campfire_(tile) ── **402**
- https://blazingbeaks.fandom.com/wiki/Artifacts ── **402。**superjumpmagazine で一部代替した
- https://slay-the-spire.fandom.com/wiki/Card_Rewards ／ `.../Merchant` ／ `.../Category:Curse_Cards` ／
  `.../Curse` ／ `.../Neow` ／ `.../Unknown_Location` ／ `.../Rest_Site` ── **全部402。**wiki.gg で代替した
- https://balatrogame.fandom.com/wiki/Jokers ／ `.../Gros_Michel` ／ `.../Stakes` ── **402。**balatrowiki.org で代替した
- https://vampire-survivors.fandom.com/wiki/Skip ／ `.../Reroll` ／ `.../Banish` ／ `.../Passive_items` ── **402。**
  vampire.survivors.wiki で代替した
- https://monster-train.fandom.com/wiki/Floor_Overstacking ── **402。**Steam 掲示板で代替した
- https://deadcells.fandom.com/wiki/Curse ／ `.../Objects` ── **402。**deadcells.wiki.gg で代替した
- https://enterthegungeon.fandom.com/wiki/Curse ／ `.../Lord_of_the_Jammed` ── **402。**wiki.gg で代替した
- https://riskofrain2.fandom.com/wiki/Difficulty ── **402。**riskofrain2.wiki.gg で代替した
- https://diceydungeons.fandom.com/wiki/Dicey_Dungeons ── **402**
- https://ftl.fandom.com/wiki/Rebel_Fleet ／ `.../Rebel_defector` ── **402。代替を見つけられなかった。
  FTL は一件も取れていない**

> **Fandom は今回、例外なく 402 を返した。**
> **`incremental-perks.md`（2026-08-21）と同じ挙動。**
> **代替は wiki.gg・balatrowiki.org・vampire.survivors.wiki・gamepressure。全部で埋まった（FTL を除く）。**

## 11-2. 403 Forbidden

- https://medium.com/@sacitsivri/game-design-breakdown-loop-hero-4a86d55142b8 ── **403**
- https://medium.com/super-jump/loop-hero-is-a-refreshingly-great-tile-placement-rpg-599c7aab30c5 ── **403**
- https://medium.com/@todorovicnik2/video-games-roguelite-restart-length-of-a-perfect-run-... ── **403。
  一回の長さの相場が、これで裏を取れなくなった**
- https://problemmachine.wordpress.com/2021/11/17/inscryption-curses-sacrifices-and-roads-untraveled/ ── **403。
  題名がそのまま今回の問い5だったので、これが痛い**
- https://tvtropes.org/pmwiki/pmwiki.php/LowTierLetdown/SlayTheSpire ── **403**
- https://mobalytics.gg/blog/tier-lists/best-balatro-jokers/ ── **403**
- https://unduel.com/slay-the-spire/tier-list/the-best-boss-relics ── **開いたが、効果文が本文に無かった。**
  **【逐語】**「Each comes with an upside, but many also have a downside, which can be minor or crippling.」だけ取れた
- https://slaythespire.org/wiki/relics ── **403**
- https://gamertweak.com/how-to-return-camp-loop-hero/ ── **403。撤退60%の裏取りができなかった**
- https://www.gamingnexus.com/Article/7280/Loop-Hero/ ── **403**
- https://www.supercheats.com/loop-hero-walkthrough-guide/how-to-use-the-oblivion-card ── **403**
- https://www.pcgamer.com/loop-hero-combos-cards-tile/ ── **開いたが本文が truncated で、タイル連鎖が一つも取れなかった**

## 11-3. 404

- https://punquix.com/balatro-joker-tier-list/ ── **404。ティアの分布（各段に何個）が取れなくなった**
- https://www.slaythespire.gg/relics/boss ── **404**

## 11-4. 開いたが、中身が薄かった／期待と違った

- https://slaythespire.wiki.gg/wiki/Relics ── ボスレリックの**名前と画像だけで、効果文が本文に無い。**
  個別ページに分かれている。**Slay the Spire のボスレリックの引き換え文（Sozu・Coffee Dripper・
  Fusion Hammer・Ectoplasm・Runic Dome など）は、逐語では一つも取れていない**
- https://bugnet.io/blog/how-to-design-a-roguelite-meta-progression ── 分類も実例も数値も無かった（§6-11）
- https://podwise.ai/episodes/1459444 ── GDC 講演の要約サイト。**数値が要約に入っていない**（§6-12）
- https://www.spirebuilds.com/guides/best-map-pathing-strategy ── **数字が一つも書かれていなかった**（§8-2）

## 11-5. 存在は確認したが、開いていない一次資料

- https://www.gdcvault.com/play/1015756/Interesting ── Sid Meier「Interesting Decisions」GDC 2012 の**一次**
- https://www.gdcvault.com/play/1025731/-Slay-the-Spire-Metrics ── Slay the Spire GDC 講演の**一次**
- https://gdcvault.com/play/1026333/-Into-the-Breach-Design ── Into the Breach GDC 2019 の**一次**
- https://gdconf.com/article/roguelikes-and-narrative-design-with-hades-creative-director-greg-kasavin-gdc-podcast-ep-16/
  ── Kasavin の GDC Podcast ep.16 の**一次**
- https://www.designer-notes.com/designer-notes-70-justin-ma/ ── Justin Ma（FTL / Into the Breach）の長い聞き取り
- https://www.youtube.com/watch?v=4LDazcvZwzI ── 2018 TGDF「Design Lessons from FTL and Into the Breach」
- https://www.youtube.com/watch?v=BT-qkoaeGrw ── noclip「The Design of FTL & Into The Breach」
- https://thegamedesignroundtable.com/211-slay-the-spire-a-designers-deep-dive-with-anthony-giovannetti/
- https://toucharcade.com/2024/03/18/balatro-interview-mobile-port-localthunk-dlc-plans-updates-new-jokers-demo-feedback/
  ── **LocalThunk の聞き取り。今回の六つの問いには触れていない可能性が高いが、確かめていない**
- https://www.windowscentral.com/loop-hero-interview ── Four Quarters の聞き取り（destructoid とは別）

> **次に調べる者は、ここから入るのがいちばん早い。**
> **とくに GDC Vault の三本と Designer Notes #70 は、今回の六つの問いに正面から当たる可能性がある。**

---

# 12. ★この枠そのものへの文句（材料）

**枠を直すのは呼んだ側の仕事なので、材料だけ置く。**

## 12-1. **問2と問4が、同じものを別角度から見ていた**

「枠の有限（問2）」と「盤面が入れ替わる（問4）」は、**別の問いのつもりで渡されているが、
実際には同じ仕掛けが両方に出た。**

- **Balatro の Perishable（5ラウンドで無効）** ── 枠を占めたまま死ぬので問2、盤面が回るので問4
- **Vampire Survivors の合体（枠が空く）** ── 問4に書いたが、実質は問2の解消
- **Monster Train の7体上限** ── 問2に書いたが、「溢れるから並べ替える」は問4

**枠が有限であることは、盤面が入れ替わる仕組みの前提条件になっている。**
**枠が無限なら、入れ替えは起きない**（新しいものを足せばいいだけ）。
**この二つは、独立な分野ではなく、片方がもう片方の必要条件だった。**

## 12-2. **問3と問5が、同じ品を裏表から見ていた**

「リスクを自分で上げる（問3）」と「外れ（問5）」も重なった。

- **Blazing Beaks のアーティファクト** ── 単体では外れ（問5）だが、店で交換できるので問3
- **Enter the Gungeon の呪い +1 の品** ── 単体では純粋な外れ（拾いが減る）だが、積む型では問3
- **Neow の三つめ（損＋得）** ── 問1に書いたが、問3でも問5でもある

**「外れ」と「自分で上げるリスク」は、同じ品の呼び名の違いだった。**
**分けているのは「交換できる場所が在るかどうか」だけである。**

## 12-3. **同じ出どころを何度も書くことになった**

- `balatrowiki.org` ── Skip / Tags / Joker_slot / Consumable_slot / Boss_Blind / Gros_Michel /
  Stickers / Stakes / Interest / Ante / Blinds の **11ページ。**六つの問いのうち**六つ全部**に出た
- `slaythespire.wiki.gg` ── Map_Generation / Neow / Potions / Ascension の4ページ。**問1・2・3・6**に出た
- `hothukurou.com/blog/post-4556` ── **問2と問6**に出た

**Balatro と Slay the Spire だけで、六つの問いが全部埋まってしまう。**
**枠が「問いごと」に切られているので、同じ作品を何度も書き直すことになる。**
**「作品ごと」に切って、その中で六つの問いに触れる形のほうが、重複が減ったかもしれない。**

## 12-4. **問5の「どのくらいの割合」に、答えられる出どころが構造的に存在しない**

「外れをどのくらいの割合で混ぜているか」は、**開発者しか知らない数字である。**
ティア表はプレイヤーの主観で、**しかも作品ごとに段の数も基準も違う。**
**三通り言葉を変えても出なかったのは、探し方が悪いのではなく、
この問いに答えられる資料が公開されていないためだと思われる。**

**問いを「割合」ではなく「外れをどの形で渡しているか（選択肢／引き換え／通貨／後から判明）」に
切り直せば、答えが出る。**実際、§5 はその形でなら答えが出ている。

## 12-5. **どの分野にも入らなかったもの（★落とさずにここへ出す）**

### (ア) **「取らなかったこと」が次の抽選に効く**

Slay the Spire ── **【逐語】**「Skipped rewards still count as three ticks.」
Balatro ── Speed Tag（**飛ばした回数 × $5**）、Garbage Tag（**使わなかった捨て札 × $1**）。
Slay the Spire のポーション ── **落ちなかったら次の確率が +10%。**

**六つのどの問いにも入らない。**
問1は「選択肢の出し方」、問4は「盤面が入れ替わる」だが、
**これは「選ばなかった履歴が資源になる」という別の型である。**

### (イ) **乱数の相関（同じ種から複数の乱数器が出発している）**

出どころ：https://forgottenarbiter.github.io/Correlated-Randomness/

**【要約経由】** Slay the Spire では `monsterRng` `eventRng` `merchantRng` `cardRng` `treasureRng`
`relicRng` `potionRng` が**全部同じ初期状態から始まる**ので、**別々の系統のはずの結果が相関する。**
**「最初のカード報酬の一枚目がアンコモンなら、その戦闘でポーションが落ちる」**といった予測ができる。
宝箱の大小（**50未満なら小**）も、カード報酬から読める。

**これは実装の話であって、六つのどれにも入らない。**
だが**「選択肢の出方が読めてしまう」という結果を生んでおり、問5（外れが分かるのはいつか）に隣接する。**

### (ウ) **「一人用だから、まれに壊れた組み合わせを許せる」**

出どころ：https://podwise.ai/episodes/1459444
**【逐語】**「rare overpowered combos without disrupting other players' experiences」

**六つのどれにも入らないが、渡された前提の一つ目（一人用）に直接効く。**

### (エ) **選択肢を減らすことが、商品になっている**

Hades の Approval Process ── **【要約経由】**「Reduce boon choices by 1 per rank」で **熱 2/3。**
Balatro の Green Stake ── **【逐語】**「-1 Joker slot」。

**問1（選択肢の出し方）でも問3（リスクを上げる）でもない。**
**「選択肢の数そのものが値段の付いた資源である」という話で、どちらの問いも想定していない。**

### (オ) **「置かない」も無料ではない（手札の上限）**

Loop Hero ── **【逐語】**「You can only hold thirteen cards in your hand at once; any additional cards you receive will send your oldest card off to become Memory Fragments.」

**問2（枠の有限）に入れかけたが、これは「持ち物の枠」ではなく「まだ使っていない選択肢の枠」である。**
**選ばないでいると、選択肢のほうが腐って消える。**
**六つのどれも、この形を想定していない。**
