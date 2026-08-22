# 交易・経済（trade / economy）調査 — 生の記録

調べた日：2026-08-22
集めた者：genre-research（実装は読んでいない。リポジトリの `src/` `spec.md` は一切開いていない）

ジャンルの定義（依頼文のまま）：
**離れた二点を結んで、その差で儲けることが遊びの本体になっているもの。**
安く買って高く売る、産地と消費地を結ぶ、路線を敷いて太らせる、という形。
経営全般ではなく、**繋ぐことで金が生まれる**作りを指す。

分野の番号は依頼文のもの。
1 入力と判定／2 返し／3 見せ方と予告／4 構造／5 進行と難度／6 遊んだ人の文句／7 実装の落とし穴

**開いて中身を見た URL だけを載せている。**開けなかったものは末尾「開けなかった出どころ」に理由付きで並べた。

---

## 001 Transport Tycoon（1994）— The Digital Antiquarian

- 出どころ：Jimmy Maher「Transport Tycoon」The Digital Antiquarian、2020年10月
- URL：https://www.filfre.net/2020/10/transport-tycoon/
- 分野：4（構造）、5（進行と難度）、6（文句）、1（入力）

書き起こし：

> "laying out your transportation network as efficiently as possible, then sitting back to watch it in action."

> "You need to raise and lower land at times, build tunnels and bridges at others."

金の話（**この記事はゲームの経済を「壊れている」と断じている**）：

> "Your finances might be mildly challenged during the first few years... but after that you have all the money in the world; you couldn't go bankrupt if you tried."

> "money is flowing like water, so you just flatten out the land without giving it a second thought."

> "taken purely as a zero-sum game design, it's horribly, hopelessly broken."

それでも成立している理由として挙げられているもの（**4の核心**）：

> "Even people who didn't normally play computer games would sit for hours on end, totally engrossed in building railway lines."

> "watching this bustling but orderly little world is a nice way to unwind."

Chris Sawyer の意図として引かれている言葉：

> he consciously created "something that was fun to watch as well as rewarding to play."

Sawyer は Sid Meier の Railroad Tycoon に "fascinated" し、
"whether an isometric viewpoint would be better" を考えたところから始めた、とある。

数値：

> "There's a limit of 40 trains, 80 road vehicles, 50 ships, and 80 airplanes in the game."

**メモ（この記録を書いた者の注記ではなく、記事の主張の整理）：**
記事は「金勘定としては破綻している」と「遊びとしては成立している」を同時に言っている。
つまりこの作品では、**気持ちよさの本体が差額の獲得ではなく、網を敷いて眺めることに移っている。**

---

## 002 OpenTTD — Cargo income（貨物収入の式）

- 出どころ：OpenTTD 公式 wiki、Manual / Game Mechanics / Cargo income（版の日付は頁上に明記なし・2026-08-22 閲覧）
- URL：https://wiki.openttd.org/en/Manual/Game%20Mechanics/Cargo%20income
- 分野：7（実装）、5（進行と難度）、3（見せ方）

書き起こし・数値：

- 収入は4つで決まる：**運んだ量／貨物の価値／運んだ距離／時間内に着いたか。**
- 距離は**マンハッタン距離**（ΔX + ΔY）。
  「if the source station is 50 X tiles & 25 Y tiles from the unload station that is 75 tiles as far as the game is concerned」
- **このページの "day" は、ゲーム内の2.5日にあたる。**
  「One "day" on this page is actually 2.5 days in the game. So if days_in_transit = 4, then you use 4 in the calculations that follow, but actually the cargo is already 10 days in transit.」
- 遅配の罰：
  「For each day after the Early Delivery time that you deliver the cargo, you are penalized 0.4%.
  For each day after the Late Delivery time that you deliver the cargo, you are penalized an additional 0.4%.
  Maximum penalty is 88%, after which you are penalized further based on how long after the max penalty it takes for you to deliver the cargo.」
- 時間成分は「will never be lower than 31」（下限がある）。
- 31種の貨物それぞれに **base rate / days1 / days2** の三つの数値が付く。頁の表から抜いたもの：

| 貨物 | Base Rate | Days1 | Days2 |
|---|---|---|---|
| Valuables | 7509 | 1 | 32 |
| Fizzy Drinks | 6250 | 30 | 50 |
| Goods | 6144 | 5 | 28 |
| Sweets | 6144 | 8 | 40 |
| Coal | 5916 | 7 | 255 |

（残り26種の rate は 3185〜7964 の範囲）

- 距離の収穫逓減：標準的な速度では **600タイル付近**から効きが鈍る。
- 速度に対する収入の伸びは**対数的**で、長距離ほど速度の効きが大きい。

**この式が意味していること（頁の記述の整理）：**
**価格差ではなく「距離 × 速さ」で払っている。**
産地と消費地に価格という概念が無く、遠くへ速く運んだかだけで金が出る。
Days1 までは満額、Days1〜Days2 は減額、Days2 以降はさらに減額、という三段の折れ線。

---

## 003 OpenTTD — Game Mechanics（産業の生産量変動・駅の評価・支払表）

- 出どころ：OpenTTD 公式 wiki、Manual / Game Mechanics（2026-08-22 閲覧）
- URL：https://wiki.openttd.org/en/Manual/Game%20Mechanics/
- 分野：5（進行と難度）、7（実装）、2（返し）

**産業の生産量変動（default economy）**

- 256×256 のマップで、**一ヶ月に一つの産業だけ**が生産量を変えうる。
- 減少専用でない産業が毎月変動する確率は「about 16.7%」。
- 輸送率が悪い（60%未満）産業：**増える 33% / 減る 67%**
- 輸送率が良い（60%超）産業：**増える 67% / 減る 33%**

**smooth economy（別モード）**

- 「The chance for a production change each month is 4.5%」
- 輸送率が優秀（80%超）：**増える 83% / 減る 17%**
- 変動幅は「between 3% and 23%」（default の「半分になるか倍になるか」と違い、細かく動く）

**駅の評価（Station Rating）**

- 上限 100%。内部は **255点満点**。
- 更新は「every 2.5 days」ごと。
- **一回の更新で動けるのは 2 点（0.78%）まで**（事件による変動を除く）。
- 内訳の例：
  - 前回の集荷からの経過が15秒未満なら、待ち貨物の項で最大 **130点**
  - 車両の新しさで最大 **33点**
  - 速度 85km/h 超で最大 **68点**

**支払表の例（1タイルあたり100単位）**

- 旅客：£39 / 100人・1タイル
- 郵便：£55 / 100袋・1タイル
- 石炭：£72 / トン・1タイル

**遅配罰**：0.4%/日、最大 88%。

**この頁の要点：**
価格差が無い作りなので、**枯れないようにする仕組みは「産業の生産量が勝手に上下すること」に載せている。**
しかも「よく運んでいる産業ほど増えやすい」ので、**繋いだ路線が自分で太る**。

---

## 004 OpenTTD — 経済（インフレ・不況・借入）

- 出どころ：OpenTTD 公式 wiki、Manual / Economy（2026-08-22 閲覧）
- URL：https://wiki.openttd.org/en/Manual/Economy
- 分野：5（進行と難度）、7（実装）

- **インフレは既定で切ってある。**
- 「Inflation starts in 1920 and lasts 170 years, ending in 2090.」
- 費用のインフレ率＝初期利率（難度で決まる）。**貨物の支払のインフレは、費用のインフレより約1ポイント低い。**
- 実際の効き：収入は **1970年に約61%、2020年に37%、2090年に18%** まで目減りする。
- **不況（recession）も既定で切ってある。**
  発動時：一世紀に2〜3回、各回 9〜12ヶ月。産業の生産は **50%** に、町とHQの旅客・郵便の発生も **50%** に。
  「No new industries will be built」
- 借入：既定の上限 **£300,000**（設定で変更可）。月利は開始時の難度で決まり、**ゲーム中ずっと固定**。
  他社を買収すると相手の借金も引き継ぎ、上限を超えることがある。
- 施設維持費は既定で切ってある。有効にすると
  「The more units of infrastructure a company has, the more they pay per unit of infrastructure for maintenance.」
  （**保有量が増えるほど単価が上がる**＝規模への罰）

**注目：**インフレも不況も維持費も、**全部「既定では切ってある」。**
枯らさない仕掛けを持っているのに、既定では使わない、という選択をしている。

---

## 005 OpenTTD — 列車の路線を一本引くまでの手数

- 出どころ：OpenTTD 公式 wiki、Manual / Tutorial / Trains（2026-08-22 閲覧）
- URL：https://wiki.openttd.org/en/Manual/Tutorial/Trains
- 分野：1（入力と判定）、3（見せ方と予告）

チュートリアルが数える手順（**一本引くのに合計 17 手前後**）：

- 場所探し（1手）：「Scroll around the map until you find a Coal Mine and a Power Station in close proximity.」
- 駅を建てる（7手）：
  1. 鉄道建設ツールバーを開く
  2. 「Build railroad station」ボタンを押す
  3. Number of Tracks を1、Platform Length を3にする
  4. 駅の向きを選ぶ
  5. 炭鉱の隣の平らな空き地を探す
  6. **「Coverage area highlight」で炭鉱が駅の範囲に入っているか確かめる**
  7. 置く。発電所側でも同じことを繰り返す
- 繋ぐ（3手）：Autorail ボタン → **まっすぐドラッグ** → 相手の駅に届くまで継ぎ足す
- 列車を用意する（6手）：車庫ボタン → 向きを決めて置く → 車庫をクリック → New Vehicles →
  機関車1と石炭貨車5を買う → 余った1両を売却ボタンにドラッグして外す
- 命令を与える（3手）：駅を指定 → 駅名をクリックして Full Load を選ぶ → 「Stopped」を押して発車

**このチュートリアルの中で、建設費・予想収益は一切出てこない。**
出てくるのは「Coverage area highlight」（**駅が産地を覆っているか**）だけ。
つまり **引く前に分かるのは「繋がるか」であって「儲かるか」ではない。**

---

## 006 OpenTTD — 車両一覧の色分け（儲けの返し方）

- 出どころ：OpenTTD 公式 wiki、Manual / Vehicle lists（2026-08-22 閲覧）
- URL：https://wiki.openttd.org/en/Manual/Vehicle%20lists
- 分野：2（返し）、3（見せ方）

並べ替えの軸：
「Number, Name, Age, Profit this year, Profit last year, Total capacity per cargo type, Reliability, Maximum speed, Model, Value (sum of values of all carriages), Length, Remaining life time, Timetable delay」

**番号の色**
- 青：車庫にいる
- 赤：「the vehicle is getting old and should be replaced」

**状態アイコン（去年の利益で三段）**
- 灰の丸／青リボン：まだ2歳未満
- 緑の丸／緑の＋つき硬貨：「the vehicle's profit was more than £10,000 ($20,000) last year」
- 黄の丸／硬貨1枚：「the vehicle's profit was between £0 ($0) and £10,000 ($20,000) last year」
- 赤の丸／赤の−つき硬貨：「the vehicle was losing money last year」

一覧の上には、現在の積載率（積んでいる量 ÷ 一覧に出ている全車両の総容量）が出る。

**要点：**個別の路線が儲かっているかを、**数字ではなく三色の丸で返している。**
しきい値は **£0 と £10,000** の二本だけ。

※同じ wiki の Manual / Vehicles（https://wiki.openttd.org/en/Manual/Vehicles ）も開いたが、
**利益の見せ方については何も書いていない。**車種・信頼性の話だけだった。

---

## 007 OpenTTD — 中継（feeder）で収入が赤字になる件

- 出どころ：OpenTTD 公式 wiki、Manual / Negative income with feeder service（2026-08-22 閲覧）
- URL：https://wiki.openttd.org/en/Manual/Negative%20income%20with%20feeder%20service
- 分野：7（実装の落とし穴）、2（返し）

書き起こし：

> "you get paid by the straight distance from source (the coal mine) to destination (the power plant), and you get fined for slower delivery from source to destination."

頁が挙げている具体例：

1. 列車が中継駅に石炭を持って着くと、**その時点で見積りの 732ポンド**が支払われる
2. そこから道路車両が最終地点まで運ぶ
3. 全行程の**実際の**支払は約 **711ポンド**
4. 差の **732 − 711 = 21ポンド**が、道路車両の収入から引かれる
5. 3台で割って、1台あたり約 **7ポンド**のマイナス

> "the vehicles get the bill for the (apparently) overestimated payment of the train."

赤字になる原因として頁が挙げるもの：
- **迂回**（多段の受け渡しは直線から外れる）
- **速度差**（速い列車は遅配罰が軽いので過払いになり、その分を遅い車両が被る）

**これは「途中で払ってしまう実装」の代償。**
到着時に清算する作りにすると、**中継のたびに見積りと実額の差を誰かに背負わせることになる。**

---

## 008 OpenTTD — 駅の評価に「予約済み貨物」が混ざる不具合（issue #6165）

- 出どころ：OpenTTD GitHub Issue #6165「Improve the calculation of the station rating.」
- URL：https://github.com/OpenTTD/OpenTTD/issues/6165
- 分野：7（実装の落とし穴）

報告の中身：

- 食品加工工場が **27,000トン**の食料を出している
- 輸送力は足りているのに、**駅の評価が 70% を超えない**
- 288トン積みの列車が5本同時に積み込める（**1,440トンが予約済み**）
- 残りの列車は 0% のまま待たされる

> "The rating of the station stays lower than 70%, and it doesn't matter what you do to increase this percentage, it's stays impossible"
> （駅を分けて積み込みを分散させる以外に手が無い）

提案されている修正（`station_cmd.cpp` 3295行あたり）：

- 現行：`uint waiting = ge->cargo.TotalCount();`
- 提案：`uint waiting = ge->cargo.TotalCount() - ge->cargo.ReservedCount();`

理由：「only the amount of cargo which can't be loaded into a train」だけを数えるべき。

**落とし穴の形：**「駅に積み上がっている量」で評価を出すと、
**積むために予約された分まで「捌けていない」と数えてしまう。**

---

## 009 Offworld Trading Company — Soren Johnson インタビュー

- 出どころ：Matchsticks for my Eyes、Soren Johnson インタビュー、2014年10月1日
- URL：https://www.matchstickeyes.com/2014/10/01/offworld-trading-company-interview-with-soren-johnson/
- 分野：4（構造）、5（進行と難度）、7（実装）

書き起こし：

> "The prices went up or down depending on what other players were doing. (If one player bought a lot of food, the price would go up for everyone.)"

**買値と売値を一本にした話（ここが一番具体的）：**

> "We originally tried two prices in Offworld, but collapsing them into a single price made the market mechanic so much more powerful."

> "Offworld is an RTS game that uses tycoon game mechanics, instead of combat mechanics, to create conflict between players."

出自として挙げているもの：資源のツリーと輸送路は **Railroad Tycoon から直接** 来ている。
小規模スタジオとしての方針：
> "our games will never be able to compete with established strategy franchises from big publishers, so we have to be different to stand out."

**「買値と売値を一本にした」は、このジャンルの通例（買値 < 売値のスプレッド）に真っ向から反する判断。**
スプレッドを消すと、市場が**プレイヤー同士の殴り合いの場**になる、と言っている。

---

## 010 Offworld Trading Company — 資源のループ分解

- 出どころ：Gabriel Chauri「Offworld Trading Company – Resources creating Loops」（日付は頁に明記なし・2026-08-22 閲覧）
- URL：https://www.gabrielchauri.com/offworld-resources/
- 分野：4（構造）、5（進行と難度）

- 資源は **13種**。上段が原料、下段が加工品。
- HQ の種類ごとに **建設に使う資源は3種**。
- 資源は「所持品」ではなく「ユニット」として扱われている、という読み。

三つのループ：

- **Boosting Engines**：新しい建物に使うか、資源生産設備に投資するか。他プレイヤーの株を買うのも繰り返し収入になる。
- **Economy Loops**：入れ子の交換。
  「water could be sold for money or converted into Fuel, that have a higher price but it could also be converted into Chemicals, that have even a higher price.」
- **Ecology Loops**：借金が均衡装置になっている。
  足りない資源は**自動で買わされ**、その分だけ株価が下がり、買収されやすくなる。
  これが **rubberbanding** として働き、独走を防ぐ。

市場をいじる道具：
- **Hacker Array** … 人為的に余剰や不足を作る
- **Black Market** … 買うたびに道具の値段が上がるので、使いすぎが止まる

---

## 011 Offworld Trading Company — GDC 2017 ポストモーテムの告知頁

- 出どころ：DESIGNER NOTES「Offworld Trading Company GDC Postmortem」（2017年3月1日の講演告知）
- URL：https://www.designer-notes.com/offworld-trading-company-gdc-postmortem/
- 分野：4（構造）

**開いたが、中身は告知文とスライド画像4枚だけで、講演の本文は載っていない。**
載っているのは講演の趣旨のみ：

- 「economics instead of combat」に絞ったこと
- その結果 "standard tropes of the genre, such as unit selection" を捨てたこと
- 「from conception to prototyping to Early Access to final release」を辿ること

**この出どころからは数値も設計判断も取れない。**（GDC Vault 本編は会員制で開けなかった。末尾参照）

---

## 012 Soren Johnson「Water Finds a Crack」

- 出どころ：DESIGNER NOTES、Game Developer 誌 2011年3月号のコラム再録
- URL：https://www.designer-notes.com/game-developer-column-17-water-finds-a-crack/
- 分野：5（進行と難度）、7（実装）

中心の主張：

> "Given the opportunity, players will optimize the fun out of a game."

Civ III の伐採（lumberjacking）の例：

> "Chopping down a forest gives 10 hammers to the nearest city. However, forests can also be replanted once the appropriate tech is discovered."

→ 無限に生産できてしまい、**面白さではなく苦役になった。**

**溢れ（overflow）の管理**の例：税率と市民配置を毎ターン細かく動かして、
ビーカー・食料・ハンマーの端数を捨てないようにする遊び方が生まれた。
それ自体は面白くなりえたが「completely bogs down the game」。
しかも **見つけてしまうと、プレイヤーはやめられない。**

Civ IV での手当て：
- **都市数に比例した維持費**を入れて「infinite city sleaze」を潰した
- 溢れた分は次の生産に繰り越すようにした（端数管理そのものを不要にした）
- 戦闘の乱数の種をセーブに含め、リロード当て直しを潰した。**そのうえで任意設定にした**

**このジャンルへの効き方：**交易は本質的に最適化ゲームなので、
「最適解が一つに固まる」問題はここで言われている現象そのもの。
手当ての形が三つ出ている：**規模に罰を付ける／端数を消す／抜け道の入力を封じる。**

---

## 013 Patrician III — 価格式の逆解析（p3modding）

- 出どころ：Patrician 3 Insights（Ascaron の Patrician 3 を逆解析した有志のサイト）、Towns / Ware prices / Buying price
- URL：https://p3modding.github.io/towns/ware-prices/buying-price.html
- 分野：7（実装の落とし穴）、5（進行と難度）

**買値の式：**

区間 i の中では

> **p_i = p_base × w_i × f_i**

w_i は区間 i から買った量。f は

> **f_4 = 0.6**
> **f_i = m_i − v_i × [(w_relative_stock + w_relative_remain) / (2 × interval_width)]**

角括弧の中は [0; 1] に収まる。

**区間ごとの定数：**

| 区間 | m_i | v_i |
|---|---|---|
| 0 | 4 | 2.5 |
| 1 | 1.5 | 0.5 |
| 2 | 1.0 | 0.2 |
| 3 | 0.8 | 0.2 |

- 区間は 4つのしきい値 t_0〜t_3 で区切られた **5区間**。
  区間0は [0; t_0]、区間4は [t_3; ∞)。
- 自動商人には熟練度に応じた値引きが入る：**100 − (2 × (50 − xp ÷ 43))**。
  **経験値 215 で最大値引き。**値引きは取引量が決まった後に適用される。

**読み取れる形：**在庫が空に近い区間0では基準価格の **4倍**から始まり、
在庫が積み上がった区間4では **0.6倍**で頭打ちになる。
**区分線形の5段の折れ線で、上も下も止まる。**

---

## 014 Patrician III — 価格式をめぐる Steam の議論

- 出どころ：Steam Community、Patrician III General Discussions「Equation for the price of goods」
- URL：https://steamcommunity.com/app/33570/discussions/0/7428213805118859628/
- 分野：7（実装）、3（見せ方）

- 「There does seem to be a maximum price」…在庫ゼロのとき。供給過多のときは下限もある。
- 区分線形で、**在庫が「数週間分の消費」に近づくと買値と売値の比が 1 に寄っていく。**
  供給過多側では非線形に定数へ収束し、**折れ点は町の週間消費量の倍数のところにある。**
- 逆解析は "alcapwn" が IDA で行い、C の擬似コードを pastebin に出した。
  注記：「All addresses and constants refer to the GOG version of P3.」
- **プレイヤーが式を測る方法**として挙がっているもの：
  大金を用意して、ある品を全部買い占めるか、**1樽ずつ売り足しながら買値・売値を記録していく。**

---

## 015 Port Royale 3 — 「推奨価格」は何から出ているか

- 出どころ：Steam Community、Port Royale 3 General Discussions「Why are these prices recommended?」
- URL：https://steamcommunity.com/app/205610/discussions/0/2132869574270730479/
- 分野：3（見せ方と予告）、7（実装）

- 推奨価格の元になっている式（プレイヤーの読み）：
  **(200 + 消費する原料の価格) / (その産業が1日に作る個数)**
  200 の内訳は **25 労働 × 6ゴールド/日 ＝ 150** に、建物の維持費 **50ゴールド/日** を足したもの。
- UI は難度別に4列を出す：「Good」「Normal」「Advanced」、それぞれに Sell と Buy。
- 投稿者は倍率が **175%, 125%, 140%, 110%** と半端で、丸め誤差ではないかと書いている。
- 取引の実務としての助言：
  > "increase the amount purchased until the price starts to go up. When selling, increase the amount sold until it gets close to the purchase price"
- 町の繁栄が上がると生産費がわずかに下がる。人口の需要が在庫の残り方を決める。

**見せ方の型：**この作品は**「この値段が妥当」を先に見せる。**
プレイヤーは差額を探す代わりに、**推奨線からどれだけ外せるかを見る。**

---

## 016 Patrician / Port Royale — 「20日分の在庫」と繁栄の連鎖

- 出どころ：同上スレッドおよび Patrician III の議論（上記015・014と同じ系統の投稿群）
- URL：https://steamcommunity.com/app/205610/discussions/0/2132869574270730479/
- 分野：5（進行と難度）

- 町は **どの品も最低20日分の在庫**を持ちたがる。
  在庫が足りなくなるほど**価格は上がり、繁栄は下がる。**
- 取引を続けて必需品を切らさないでいると **繁栄が上がる → 人が移住してくる → 人口が増える。**
- **人口が増えると「20日分」という量そのものが大きくなる**ので、
  同じ町が何度でも売り先として使える。

**枯れない仕掛けの型：****売れば売るほど、その町の受け入れ量が増える。**
（OpenTTD の「よく運んだ産業ほど生産が増える」と同じ向きの正のループ）

---

## 017 Port Royale 3 — 自動交易路への文句

- 出どころ：Steam Community、Port Royale 3 General Discussions（交易路の自動化について）
- URL：https://steamcommunity.com/app/205610/discussions/0/2274827383908641149
- 分野：6（遊んだ人の文句）、5（進行と難度）

書き起こし：

> "I end up making a huge transport fleet or two and trade by hand. It is fun and makes good money but gets long in the tooth to be honest."

> "Be nice to sit back and let the AI do the heavy lifting"

- 「tough to get an efficient trading route going」…自動交易路を組むのが難しく、
  結局**手動のほうが儲かるが飽きる**、という板挟み。
- 別の回答：**自動交易路を増やしすぎると却って儲からない。**
  > "if you have two routes running across each other's ports, then both routes will suffer with less profit."
- 別の回答：「This is very time-consuming but it's simple and easy to adjust depending what's needed.」
- 別の回答：自動交易路の主な用途は**船長の熟練上げ**であって、収入源ではない。

---

## 018 Port Royale 4 — 自動交易路が更新されない

- 出どころ：Steam Community、Port Royale 4 General Discussions
- URL：https://steamcommunity.com/app/1024650/discussions/0/2847921219522794353
- 分野：6（文句）、1（入力）、5（進行）

- **町ごとに「買う」か「売る」のどちらかしか設定できない**（前作は両方できた）。
  > "In previous games we could buy AND sell each good in each town along a trade route."
- **自動路線は町の生産が変わっても追随しない。**
  > "If towns get new production, you need to manually adjust the trade routes."
- 自動設定は「does not understand the fame game」と言われている。
- 一方で割れている：
  > "I am making a fortune off 'standard' set trade routes."
- 回避策として挙がるもの：自動を残したまま特定の町だけ手で上書きする、
  植民地品専用の船団を作って経験値を稼ぐ、依存する事業に合わせて数量を固定する。

---

## 019 Anno 1800 — 交易路の設定が面倒だという声

- 出どころ：Steam Community、Anno 1800 General Discussions「Ways to improve trade route management」
- URL：https://steamcommunity.com/app/916440/discussions/0/1678064284142713700/
- 分野：1（入力と判定）、3（見せ方）、6（文句）

書き起こし：

> "When I am missing something on one island, I always have a hard time finding how many ships are shipping to and from this island."

> "when you've opened a route and hit ESC, it exits the entire trading view. It should go back to the route list."

欲しいと言われているもの：
- **クリックせずにホバーで航路が見える**こと
- 港にどの船が紐付いているか一目で分かること
- 交易路メニューで**島名が常に見えている**こと
- 全ての路線・船の積載・港の情報を**一画面で同時に**見られる専用画面

不満の中心：**15路線・8島を超えると "very messy" になり、
うっかり重複を作って "logistic cluster" になる。**

**このジャンルの入力の弱点がそのまま出ている：
路線は「作る」より「後から見分ける」ほうが難しい。**

---

## 020 Transport Fever 2 — 「supply and demand が無い」という批評

- 出どころ：Dedoimedo「Transport Fever 2 - Very pretty, too easy」
- URL：https://www.dedoimedo.com/games/transport-fever-2.html
- 分野：6（文句）、5（進行と難度）、3（見せ方）

書き起こし：

> "Within maybe an hour, I felt unchallenged. And to be frank, the game is quite easy."

- 燃料を運ぶだけで、**タンカー5両の列車1本、10分のプレイで約2,000万の利益**が出たと書いている。

**距離の問題：**

> "the longer your route, the higher the profit"（減価する仕組みが無い）

> "you can leave people waiting at a station for several years in game time"
> — それでも到着時に満額もらえる。

**需給の不在：**

> "there's no actual supply and demand. You can keep sending raw materials to factories, and never really produce or ship anything else, and the whole thing will keep on working just fine."

> "build a single train, ship something from A to B, let the game run for a couple of hours, and you'll have a few extra millions."

**UI について：**

> "96/100 what? Tons, units? I want some big numbers!"

**注目：**OpenTTD が持っていた**遅配罰と距離の収穫逓減が抜けると、こうなる**という実例。
（002・003 と正面から対応する）

---

## 021 Merchant of the Skies — 10時間遊んだ人の意見と開発者の返答

- 出どころ：Steam Community、Merchant of the Skies General Discussions「Feedback after 10 hours」
- URL：https://steamcommunity.com/app/1040070/discussions/0/4300317773585571390/
- 分野：6（文句）、5（進行と難度）、3（見せ方）

**価格変動が無いことの帰結（核心）：**

> "lack of price fluctuation allows me to set up an automated route or two between islands"
> → 放置収入になり、**早送りするだけの遊びになる。**

**待ちと繰り返し：**

> "'Storage Full'. 'Storage Full'. 'Storage FULL'."
（同じ通知が何度も出る）
島の産物を確かめるのに毎回詳細を開き直すのが手間、とも。

**提案されているもの：**
- **価格変動**を入れること（自動路線の悪用を防ぐ）
- 船ごとに保管上限・生産上限を設定できるようにすること（無差別に買い売りしない）
- **台帳（Ledger）** … 「どの隊商がどれだけ儲けているか、往復に何日かかるか、費用の内訳」が見えない
- 事業をたたむ（人を解雇する）手段が無く、失敗すると復帰に長くかかる
- 必要な資源を都市パネルに直接出すこと
- スクロールの反応

**開発者の返答：**価格変動はサンドボックスの選択肢として存在すると認め、
クエスト情報の不具合はホットフィックス、隊商まわりは一週間以内に改善すると答えている。

**この一件は 3・5・6 が同じ根から出ている：
「路線の儲けが見えない」＋「価格が動かない」＝「組んだら終わり」。**

---

## 022 大航海時代 Origin — 売値が「距離」で決まる

- 出どころ：大航海時代Origin 交易攻略ガイド「『大航海時代Origin』の交易の基本について」
- URL：https://daiori.com/knowledge/1
- 分野：5（進行と難度）、3（見せ方）、4（構造）

書き起こし・数値：

- 交易品の売却価格は「**交易品種の販売港**」と「**交易品の売却港**」の
  **2点間を航路で結んだ最短の直線距離**で決まる。**離れているほど高い。**
- 地域ごとの需給は一応ある（「イベリアでは香辛料が高い」「ブリテンでは紅茶が高い」）が、
  **距離による上昇のほうがほとんどの場合で大きいため、フレーバー程度。**
- 食料品はイベント（「フェスティバル」「洪水」など）で
  売却価格が **「299〜319％も上昇」**。他品種よりイベント頻度が高く上昇率も大きい。
- **レベル20超で関税がかかり、最大で約30%。**自国の港では 0%。
- セオリーは従来の三角貿易ではなく、
  **A港で仕入れてできるだけ遠いB港で売り、B港で仕入れてA港に持ち帰る2点間貿易。**

**シリーズの中での変化（重要）：**
> 「従来の大航海時代シリーズでは交易品価格が地域ごとの需要と供給で決まっていました」
→ **Origin は需給を捨てて距離に置き換えた。**

---

## 023 大航海時代2 — 交易所の仕組み

- 出どころ：「大航海時代2 攻略・解析(SFC/Switch)」交易所・交易品
- URL：https://gcgx.games/dkj2/trade.html
- 分野：5（進行と難度）、1（入力）、3（見せ方）

書き起こし：

- 交易所の営業時間帯：**4:00〜19:30**。天秤マークの建物。
- 「交易品は地域によって販売しているものが決まっていて、地域内の港であれば同じものが販売されている」
  ただし「特産品は各港で異なる」
- 「リストの売値が初期設定されている価格です。**時間の経過によって相場は変動していきます**」
- **「免税書を持っていない場合は、現在の売値から20%の購入税が付加される」**
- 「商業投資」で所持金を交易所に投資して町の商業を発展させられる。
  「**商業価値が指定値以上になることでその商品が販売されるようになる**」
  制限：「首都にある交易所には投資できません」

**投資 → 品揃えが増える**は、**プレイヤーが売り先そのものを育てる**型。
（016 の Patrician の繁栄ループと同じ向き）

---

## 024 大航海時代VI — プロデューサーインタビュー

- 出どころ：4Gamer.net「『大航海時代VI』プロデューサーインタビュー。5年ぶりのナンバリング最新作は，商館経営とリアルタイム海戦を主軸に」2019年7月16日
- URL：https://www.4gamer.net/games/469/G046974/20190716099/
- 分野：4（構造）、5（進行）、2（返し）

書き起こし：

> 「プレイヤーがひとりの船長という存在ではなく，『商館の経営者』という立場にあることです。拠点を構え，そこに施設を建てて，商館を経営しつつ，複数の艦隊を運用するといった，これまでよりも1段高い視点でプレイすることになっていきます。」

> 「『なにかを生産する』ことはずっと続きます。これも本作の大きな特徴でして，加工所を建ててからは自身やほかのプレイヤーが作った1次生産品を組み合わせて，加工品を生産できるようになります。」

**マーケットと価格の返し：**

> 「出品した生産品が横並びになるので，同じ品なら安いものから売れていくという価格競争が生まれるでしょう。」

> 「品目によって価格の幅を決められるようにします。その範囲内で，市場の相場変動を踏まえて出品してもらう形式です。」

**「1段高い視点」＝ 船長から商館経営へ、という移動は、
このジャンルが繰り返してきた変化（自分で運ぶ → 網を持つ）そのもの。**

---

## 025 イル・ドー（海洋交易シミュレーション）— 価格を「平常時の何%」で見せる

- 出どころ：ひとりアウトプット広場「イル・ドー（海洋交易シミュレーション）紹介・感想・攻略メモ」
- URL：https://www.losspass.com/article/irudo.html
- 分野：3（見せ方と予告）、4（構造）、5（進行）

書き起こし・数値：

- 各港で通常 **3種類**の特産品が売られ、投資により**最大5種類**まで増える。
- **「販売価格が平常時の何パーセントであるか表示されている」**
  → プレイヤーは絶対額ではなく **%** を見て買う。
- 最初は低い%の商品を多く買い、他港で売る。
- 各取引に関税。港への投資状況で緩和される。
  投資すると購入数が増え、**追加される交易品は高額なものが多く、稼ぐ速度が上がる。**
- 感想の部分：**「その繰り返しが面白くなるように作られている」**
  （＝繰り返しであること自体は否定していない）

**「平常時の何%」表示は、このジャンルで最も安い予告。**
価格表を覚えなくても、その場で買うか買わないかが決められる。

---

## 026 Mount & Blade II: Bannerlord — 相場をどう知らせているか

- 出どころ：Steam Community、Bannerlord [EN] General Discussions「How to check trade prices?」
- URL：https://steamcommunity.com/app/261550/discussions/0/2149847049319804212/
- 分野：3（見せ方と予告）、5（進行と難度）、6（文句）

書き起こし：

- **ホバーの色分け**：
  > "If you hover over the item it tells you if its below average (green) or above (Red)."
- **NPC から聞く**：
  > "Just talk to regular people in town, they will randomly give trade advices"
  隊商に行き先と積荷を聞くと**自分の価格表が更新される。**
- **噂**：ツールチップに
  > "there is a rumour that this item is sold at sargoth for 110"
  のように出る（各地の市場を訪れた後）。
- **交易スキルで解禁される**：
  交易スキル **25 と 50** の最初の二つの特性で、取引画面に利益幅の色分けが出るようになる。
- 文句：
  > "Where is said price list?"
  Warband にあった価格一覧が Bannerlord には無い、という指摘。
  別の人は「heavier in roleplay」と表現し、
  価格は買い売りによって動的に動くと補足している。

**見せ方の型（これは珍しい）：
「相場が見えること」自体が育成要素になっている。**
最初は見えず、スキル25と50で見えるようになる。

---

## 027 Mount & Blade: Warband — 供給と需要の抽象化（検索結果からの引用のみ）

- 出どころ：zemalf「Mount & Blade: Warband Trading Guide」2011年4月
- URL：http://zemalf.blogspot.com/2011/04/mount-blade-warband-trading-guide.html
- 分野：3（見せ方）、5（進行）

**開いて確認した内容：**

- この案内が出しているのは**式ではなく、実測の「買っていい線・売っていい線」だけ。**
  例：「Iron. BUY under 150, SELL over 300」
- 交易スキルについて：「If you increase trading skill with one of the companions, put 2 points in it for your character to get the +1 extra.」
- 状況補正：「If you don't have much trading skill in your party, or the economy in the towns is a bit off because of wars etc, you might not get prices as high, so do drop them by ~10% or so.」
- 戦争状態、派閥との関係（クエスト達成）、町の景気が価格を動かす、とある。

**注記：**「買値は基準価格の112%、売値は89%」という数字は検索結果に出たが、
**その出どころ（fandom / strategywiki）は開けなかったので、ここには確定として書かない。**
確認できたのは上の実測線だけ。

---

## 028 Recettear — 値付けが入力そのものになっている作り

- 出どころ：Steam Community、Recettear General Discussions「People dont buy high price stuff? help?」
- URL：https://steamcommunity.com/app/70400/discussions/0/616188473202149815/
- 分野：1（入力と判定）、2（返し）、5（進行）

書き起こし・数値：

- **高すぎる値付けへの返し**：
  > "At that percentage, customers will reject it outright or haggle and you'll lose the combo bonus"
  21k の壺を 28k（**130%**）で出すと、断られるか不利な交渉になる。
- **売りの適正**：**105〜110%** が良いとされる。
  「118% usually everyone else accepts that」と言う人もいるが、上級者はそれでも高いと言う。
- **買いの適正**：**65〜75%**。
- **客の予算**：「Every customer has a certain budget」。
  最初は **1k〜10k** の範囲。評判が上がると増える。客ごとに評判が別にある。
- **コンボ**：高値をふっかけて交渉になるとコンボ賞与を失う。
  そこに **経験値の70%超**が乗っている。
- 結論として書かれていること：**強気の値付けは進行を遅らせ、適正価格のほうが結果的に儲かる。**

**このジャンルの中で異質な点：
「いくらで売るか」を数値でプレイヤーが打ち込む。判定はその一発で下りる。**
（路線を敷く型とは入力がまるで違う）

---

## 029 Recettear — 「Market Math Revealed」ガイド（開いたが本文は取れず）

- 出どころ：Steam Community Guide「Market Math Revealed」（Recettear）
- URL：https://steamcommunity.com/sharedfiles/filedetails/?id=336404171
- 分野：1、2、5

**開いたが、頁には見出しとコメントしか載っておらず、式と定数の本文は取れなかった。**
頁から確認できたのは、ガイドが扱うと宣言している項目だけ：

- 「Pin Bonus」と「No-Haggle Price」による最大経験値
- 「Just Bonus」の連鎖による最大利益
- 評判の仕組み（**レベル 0〜10**、予算の増加、交渉の頻度）
- 客の予算が評判で増えること

コメント欄に出ている断片：「normal-high-low-crash」という相場の四状態、
**105% / 125% / 236%〜275%** といった割合、
Pin 価格の許容幅 **±0.5% / ±5%**。

**この件は出どころが一件しかない扱いにしておく。**

---

## 030 A列車で行こうExp. — 線路を一本敷くまでの手順

- 出どころ：アートディンク公式「A列車で行こうExp. オンラインマニュアル」線路を敷設する
- URL：https://www.artdink.co.jp/manual/aexp/train05/train05.html
- 分野：1（入力と判定）、3（見せ方）

手順（マニュアル本文の順）：

1. 「[Rail]メニュー」から「[線路]-[敷設]」を選ぶ
2. 「[レイアウト開始]を押す／マウスカーソルを移動させると、マップ上に線路が表示」される
3. **始点**：「線路を通したい場所にカーソルを移動させ、○ボタンを押す／左クリックして開始位置を決定」
4. **終点**：「終了位置を決めてもう一度押すと、**青色の敷設予定線**が表示」
5. **確定**：「[確定]を選択／左ダブルクリックして敷設を完了」

戻す操作：「一つ前の経由地に戻す場合は、×ボタン／[キャンセル]を選択／右クリック」
既存線路の延長：終端に「カーソルを合わせ○ボタンを押す／左クリック」

**要点：二点を指して、青い予定線を見て、確定する。実質3操作。**
**このマニュアルの当該頁には、費用の表示や自動敷設についての記載は無い。**

---

## 031 Railroad Tycoon 3 — 価格の勾配場を貨物が流れる

- 出どころ：Wikipedia「Railroad Tycoon 3」（2026-08-22 閲覧）
- URL：https://en.wikipedia.org/wiki/Railroad_Tycoon_3
- 分野：4（構造）、5（進行と難度）、7（実装）

書き起こし：

> "carloads in *Railroad Tycoon 3* slowly move across the map (representing road and water transport) along the gradient of a scalar field representing price."

供給地と需要地は、そのスカラー場の **source と sink** として働く。

> "Revenue depends on the price difference between pick-up and delivery"

その帰結として書かれていること：
- 列車が一切関わらなくても、**原料が勝手に工場に流れて加工される**
- 列車は**産地で積む必要が無い**（途中で拾ってよい）

他の特徴：
- 貨車の自動編成で、収益の高い貨物を優先して積む
- 郵便・旅客・兵員には個別の行き先がある
- プレイヤーが持てる産業には**上限があり、拡張できる**
- 倉庫（Warehouse）が商品市場を補完する

批評の引用：Computer Gaming World は経済シミュレーションを "marvelous"、
X-Play は "more sophisticated economic model" を長所として挙げつつ、
前作からのインターフェイス変更を批判している。

**このジャンルの中で最も踏み込んだ作り：
「支払は距離ではなく、積んだ場所と降ろした場所の価格差」。
かつ、価格が地図上の場になっていて、貨物が自分で流れる。**
（002 の OpenTTD 方式と真逆）

---

## 032 X4: Foundations — 在庫の充填率で値段を決める

- 出どころ：Steam Community、X4: Foundations General Discussions（Ware Min/Max prices ほか。検索結果として得た説明を、以下の頁で確認）
- URL：https://steamcommunity.com/app/392160/discussions/0/2269193447669018283/
- 分野：7（実装）、5（進行）

**注意：この項は検索結果の要約からのもので、頁本文の直接の書き起こしは取れていない。**
出どころが一件しかない項目として扱う。

確認できた説明：

- 品目ごとに**最低価格と最高価格が固定**で決まっている。
- 各ステーションは**倉庫の充填率**に応じて、その二つの間の値を買値／売値として選ぶ。
- 例：「if a station has room for 100 widgets and has 10, then its price is the high price minus 10% times the price swing.
  If it has 90 widgets, then its price is the high price minus 90% times the price swing.」
- 全ステーションが同じ規則に従う（プレイヤーの station manager も含む）ので、
  **巨大な経済を実際に回さずに、その効果だけを模せる。**

**式の形：** price = max − (stock / capacity) × (max − min)
**在庫率の一次関数で、上下に硬い壁がある。**（013 の Patrician の5区間の折れ線と対比）

---

## 033 EVE Online — なぜ交易拠点が生まれるか

- 出どころ：EVE University Wiki「Trade hubs」（2026-08-22 閲覧）
- URL：https://wiki.eveuniversity.org/Trade_hubs
- 分野：5（進行と難度）、4（構造）

書き起こし：

> "The volume of goods increase customers to the system, attracting more sellers, increasing volume, and stabilizing prices."

拠点が立つ場所の条件：
> "Trade hubs are created in certain locations for a number of reasons, including location (choke points, proximity to mission hubs or different regions) and available facilities (research facilities, manufacturing lines etc)."

価格差が残る理由：
> "buyers are usually willing to pay a slight premium just to get the items at the hub rather than elsewhere in the region."

一方で
> "in low-population regions where the hubs are not as developed, there may be no premiums charged on goods and often the range must be increased on buy orders in order to reach more sellers."

数値（市場に出ている総額）：
- Jita：約 **687兆 ISK**
- Amarr：約 **54兆 ISK**
- Dodixie：約 **17兆 ISK**
- Hek：約 **10兆 ISK**

新人への注意：
> "Be mindful of low volumes as well, since if you do find products with decent profit margins (say above 20%), these items flow a lot slower than those with narrower margins."

**「利幅が広いものほど回転が遅い」は、このジャンルの数値設計に直に効く。
利幅と回転はトレードオフになっていないと、一本の路線だけが正解になる。**

---

## 034 Old School RuneScape — 市場介入の効果を測った論文

- 出どころ：Senan Hogan-Hennessy ほか「Market Interventions in a Large-Scale Virtual Economy」arXiv:2210.07970
- URL：https://arxiv.org/abs/2210.07970
- 分野：7（実装）、5（進行と難度）

要旨（原文）：

> "Massively multiplayer online role-playing games often contain sophisticated in-game economies. Many important real-world economic phenomena, such as inflation, economic growth, and business cycles, are also present in these virtual economies. One major difference between real-world and virtual economies is the ease and frequency by which a policymaker, in this case, a game developer, can introduce economic shocks. These economic shocks, typically implemented with game updates or signaled through community channels, provide fertile ground to study the effects of economic interventions on markets. In this work, we study the effect of in-game economic market interventions, namely, a transaction tax and an item sink, in Old School RuneScape. Using causal inference methods, we find that the tax did not meaningfully affect the trading volume of items at the tax boundaries and that the item sink contributed to the inflation of luxury good prices, without reducing trade volume. Furthermore, we find evidence that the illicit gold trading market was relatively unaffected by the implemented market interventions. Our findings yield useful insights not only into the effect of market interventions in virtual economies but also for real-world markets."

**要点：**
- **取引税は、税の境目にある品の取引量を目立って変えなかった。**
- **アイテムシンク（品物の除去）は、贅沢品の価格を押し上げたが取引量は減らさなかった。**
- 闇のゴールド取引市場は、これらの介入にほぼ影響されなかった。

（頁には具体的な数値は載っていない。結論は定性的な形で書かれている）

---

## 035 Shamus Young「Who Broke the In-Game Economy?」

- 出どころ：Shamus Young、Twenty Sided
- URL：https://www.shamusyoung.com/twentysidedtale/?p=48598
- 分野：7（実装の落とし穴）、5（進行と難度）

主張：

> "breaking the in-game economy is a mathematical certainty"
（拾える戦利品に値段があり、まともな値で売れて、まとめて運べるなら）

崩れる筋道として挙げているもの：
1. 見た目の一貫性：倒した相手の装備は拾えると思う
2. 公正な値段：商人は法外な買い叩きをしないでほしいと思う
3. 手間の少なさ：持ち運び量が足りないと苦役になる
4. 結果：
   > "A broken economy is a natural emergent result of the player wanting to loot lots of things that have value and sell them with minimal friction"

**静的な値段が効かない理由：**
Skyrim の商人の所持金上限は理屈の上では制限になるが、実際には
「fast-travel from one merchant to another until the goods are sold」で回避され、
**「boring repetitive menuing」を推奨するだけになる。**

根の問題：敵が無限に湧いて品物が無限に出ること、
かつ後半の装備が序盤の **1,000倍以上**の値になるので、世界の設定として意味を失うこと。

推す手当て：**指数的に上がっていく金の捨て場（money sink）。**
例として Borderlands 3 の倉庫拡張、
> "each tier of upgrade costs three times as much as the one before."

---

## 036 Jason Fantl「Simulated Economy」— 期待価格の更新則

- 出どころ：Jason Fantl「Simulated Economy (1)」
- URL：https://jasonfantl.com/posts/Simulated-Economy-(1)/
- 分野：7（実装の落とし穴）

**価格を明示的に置かない設計。**エージェント同士の取引から出てくる。

各エージェントが持つ二つの値：
- **personal value**（その者にとっての価値）
- **expected market value**（市場価格だと思っている値）

役の決まり方：
- **buyer**：`expectedMarketValue < personalValue`
- **seller**：`expectedMarketValue ≥ personalValue`

取引が成立したとき（買い手の提示 ≥ 売り手の提示）：
```
buyer.expectedMarketValue -= beliefVolatility
seller.expectedMarketValue += beliefVolatility
```

不成立のとき：
```
buyer.expectedMarketValue += beliefVolatility
seller.expectedMarketValue -= beliefVolatility
```

相手が見つからなかった者も同様に動く（買い手は上げ、売り手は下げる）。

定数：**`beliefVolatility := 0.1`**（寄っていく速さ）

試験条件：**200体**、personal value と expected value は初期ランダム。
途中で personal value を動かして市場の反応を見る。

限界として著者が挙げているもの：
この段階では**実際の品物のやり取り・お金・希少性・取引費用が無い。**

**この方式の利点：
需給曲線の交点を解かずに、更新則だけで均衡に寄せられる。
（0.1 という一つの定数が、収束の速さと振動の大きさの両方を決めている）**

---

## 037 Behavioral Game Design（John Hopson）— 強化スケジュールの四型

- 出どころ：John Hopson「Behavioral Game Design」Gamasutra、2001年4月27日（現 Game Developer）
- URL：https://www.gamedeveloper.com/design/behavioral-game-design
- 分野：2（返し）、5（進行と難度）

四つの型と、それが生む行動の形：

- **Fixed Ratio（固定比率）**
  例：「players might gain an extra life after killing 20 opponents」
  生む形：「a long pause, then a steady burst of activity as fast as possible until a reward is given.」
  **報酬の直後に長い休止が出る。**
- **Variable Ratio（変動比率）**
  「a specific number of actions are required, but that number changes every time」
  生む形：「a steady flow of activity at a reasonably high rate」（休止が出ない）
- **Fixed Interval（固定間隔）**
  例：「the game might introduce a power-up into the playing field 30 minutes after the player collected the last one」
  生む形：「pause for a while after a reward and then gradually respond faster and faster until another reward is given.」
- **Variable Interval（変動間隔）**
  「produce a steady, continuous level of activity, although at a slower pace」

助言：
- 変動型を使い「always, always a reason for the player to be playing」を保つ
- **報酬を急に減らさない**（ぶどうの後にレタスを出されたチンパンジーが怒る例）
- やる気が落ちる時間帯には**別の遊び道具を用意して、ゲームの外ではなく中に注意を逃がす**

**交易ものへの効き：
放置収入は Fixed Interval に近く、「報酬の直後の休止」が構造的に出る。
Transport Tycoon 型（車両が着くたびに払う）は Variable Interval に近い。**

---

## 038 Factorio — Friday Facts #337「Statistics GUI」

- 出どころ：Factorio 公式ブログ、Friday Facts #337 - Statistics GUI and Mod Debugger
- URL：https://factorio.com/blog/post/fff-337
- 分野：3（見せ方と予告）

**開いたが、「プレイヤーが何を知りたいか」の説明は載っていない。**
書いてあるのは変更の中身と、その理由：

- 電力の統計：
  「Satisfaction/Production/Accumulator charge are next to each other in a single row, as opposed to each in a separate row.」
  数値のラベルをバーの内側に移し、バーを太くした。
- 生産統計：**検索欄を追加**した。
- 検索欄を一つにした理由：
  Ctrl+F を押したとき、どの枠を対象にすべきか決められなかった。
  ばらばらの解決を入れるより「the simplest way to go is the use of just one search box on the header of the panel.」
  この一つの検索欄が「as a general feature for the entire panel」として働き、
  生産と消費の両方に同時に効く。
- 撃破統計を別窓・別ホットキーにしていたのをやめ、統計窓に統合した。

**取れたのは「情報の並べ方」の話であって、「予告」の話ではない。**
このジャンルの3の分野は、公式資料からは取りにくい。

---

## 039 Satisfactory — 何が気持ちいいのかについての長文（aphyr）

- 出どころ：Kyle Kingsbury（aphyr）「A Satisfactory Way of Building」
- URL：https://aphyr.com/posts/351-a-satisfactory-way-of-building
- 分野：4（構造）

書き起こし：

> "Satisfactory isn't a game about factories–it is a game about **building** factories."

気持ちよさの本体として挙げられている輪：
**今の動きを見る → 生産線を伸ばす → 繋ぎ直す。**

三つの本物の制約（無限の資源があっても遊びが成立している理由）：
1. **プレイヤーの時間** … 手で作るのが疲れるから、自動化と処理量が目標になる
2. **技術的な性能** … 工場を分散させないと処理落ちで遊べなくなる
3. **拡張性** … 序盤の選択が数百時間先まで響く

コメント欄からの引用：この作り方は
「makes the game look less industrial and spagettified and more aesthetically pleasing」

記事の含意として書かれていること：
多くの工場ものは**建設そのものを自動化してしまう。**
Satisfactory は機械を一台ずつ手で置かせるので、**序盤の判断に本当に費用がかかる。**
この摩擦は欠点ではなく、**計画そのものを遊びにしている。**

---

## 040 Lacus Opportunitas（ゲームジャム作品）— 個人開発者の交易経済の作り方

- 出どころ：shiftBacktick、itch.io devlog「v.1.0.0: Making of the jam edition」
- URL：https://shiftbacktick.itch.io/lacus-opportunitas/devlog/893480/v100-making-of-the-jam-edition
- 分野：4（構造）、5（進行）、7（実装）、3（見せ方）

書き起こし・設計判断：

- **経済の型を5種**用意して「provide multiple routes to success」にした。
  一番単純な路線は、農業港で必需品を積んで、どこの港でも廃棄物と交換するもの。
  複雑な路線は**品物を港から港へ「レベルアップ」させる**もの
  （鉄鉱石 → 鉄の延べ棒 → 消費財）。
- 品目の作りは意図的に単純化した：
  「Essentials stood in as replacements for separate foods, water, clothing, or medical supplies.」
  採掘・精製・製造も同様に基本概念まで削った。
- **需給の仕組みは入れなかった。代わりに「港のレベル」を入れた。**
  港は取引履歴を溜めて**指数的にレベルが上がり**、買値・売値に補正がかかる。
  狙いは**安い品物を後半まで意味あるものに保つこと。**
- 高級品は **Elite: Dangerous を参考に、原産地からの距離で値段が動く**形にした。
- 進行の刻み：**「it should take about eight transactions to acquire enough credits for what might be considered the next tier.」**
- UI：スクリーンリーダー対応に手をかけた。
  在庫と所持金の変化を告げる **aria-live** 領域、
  **利益の高い品を上に持ってくる動的な並べ替え。**
  Chromium の不具合を避けるため、各行の内容を写した aria-label を生成した。
- 捨てたもの：ジャム前に作っていた対戦型のオンライン版
  （Symfony で API とデータベースまで作っていたが、期間内に無理と判断）
- 学び：
  「certain ports and goods would become less desirable in the later game due to their opportunity costs」を受け入れたこと、
  「reward players for their precious time」の必要。

**「需給を実装せず、港のレベルで代用する」は、
個人規模でこのジャンルを作るときの現実的な逃げ道として明記されている数少ない例。**

---

## 041 Mini Metro — ポストモーテム

- 出どころ：Peter Curry / Robert Curry「Postmortem: Dinosaur Polo Club's Mini Metro」Game Developer
- URL：https://www.gamedeveloper.com/audio/postmortem-dinosaur-polo-club-s-i-mini-metro-i-
- 分野：4（構造）、6（文句・作り手側の反省）

**良かったこと：**
- 範囲を絞った：「No hand-built levels. Nothing art-heavy. No reliance on audio content.」
- ウェブで遊べる版を無料で出したこと：
  「we don't think Dinosaur Polo Club would be operating now if it wasn't for that web-playable build.」
- Early Access が合っていた：手続き生成の面、短いセッション、物語に依らないこと、都市ごとに区切れること
- 題材が伝わること：**地下鉄の路線図というだけで、スクリーンショットだけで何のゲームか分かる。**
  宣伝の摩擦と返品が減る。

**悪かったこと：**
- 「We spent at least a year saying that we'd be finished in about two or three months.」
- Early Access 中にモバイル対応と本体開発を行き来して、両方が遅れた
- 出版社の申し出を4件断った（会議と契約交渉を避けたかった）
- 二人の目的が食い違っていた（片方は副業、片方は人生の勝負）。1年以上こじれた

**数値：**開発は通算3年。Greenlight まで10ヶ月、発売まで16ヶ月。
IGF ノミネート4、受賞1（Excellence in Audio, 2016）、BAFTA ノミネート1。
常勤2＋非常勤2。

**注記：線を引く操作そのものの設計判断は、このポストモーテムには書かれていない。**

---

## 042 「交易・経済」の記録に載せる出どころ一覧（開いて確認済み）

上の各項に URL を書いた。`node tools/check-refs.mjs` で確認できるように、まとめて並べる。

1. https://www.filfre.net/2020/10/transport-tycoon/
2. https://wiki.openttd.org/en/Manual/Game%20Mechanics/Cargo%20income
3. https://wiki.openttd.org/en/Manual/Game%20Mechanics/
4. https://wiki.openttd.org/en/Manual/Economy
5. https://wiki.openttd.org/en/Manual/Tutorial/Trains
6. https://wiki.openttd.org/en/Manual/Vehicle%20lists
7. https://wiki.openttd.org/en/Manual/Vehicles
8. https://wiki.openttd.org/en/Manual/Negative%20income%20with%20feeder%20service
9. https://wiki.openttd.org/en/Manual/Industries
10. https://wiki.openttd.org/en/Manual/Production%20delivery
11. https://github.com/OpenTTD/OpenTTD/issues/6165
12. https://www.matchstickeyes.com/2014/10/01/offworld-trading-company-interview-with-soren-johnson/
13. https://www.gabrielchauri.com/offworld-resources/
14. https://www.designer-notes.com/offworld-trading-company-gdc-postmortem/
15. https://www.designer-notes.com/game-developer-column-17-water-finds-a-crack/
16. https://p3modding.github.io/towns/ware-prices/buying-price.html
17. https://steamcommunity.com/app/33570/discussions/0/7428213805118859628/
18. https://steamcommunity.com/app/205610/discussions/0/2132869574270730479/
19. https://steamcommunity.com/app/205610/discussions/0/2274827383908641149
20. https://steamcommunity.com/app/1024650/discussions/0/2847921219522794353
21. https://steamcommunity.com/app/916440/discussions/0/1678064284142713700/
22. https://www.dedoimedo.com/games/transport-fever-2.html
23. https://steamcommunity.com/app/1040070/discussions/0/4300317773585571390/
24. https://daiori.com/knowledge/1
25. https://gcgx.games/dkj2/trade.html
26. https://www.4gamer.net/games/469/G046974/20190716099/
27. https://www.losspass.com/article/irudo.html
28. https://steamcommunity.com/app/261550/discussions/0/2149847049319804212/
29. http://zemalf.blogspot.com/2011/04/mount-blade-warband-trading-guide.html
30. https://steamcommunity.com/app/70400/discussions/0/616188473202149815/
31. https://steamcommunity.com/sharedfiles/filedetails/?id=336404171
32. https://www.artdink.co.jp/manual/aexp/train05/train05.html
33. https://en.wikipedia.org/wiki/Railroad_Tycoon_3
34. https://steamcommunity.com/app/392160/discussions/0/2269193447669018283/
35. https://wiki.eveuniversity.org/Trade_hubs
36. https://arxiv.org/abs/2210.07970
37. https://www.shamusyoung.com/twentysidedtale/?p=48598
38. https://jasonfantl.com/posts/Simulated-Economy-(1)/
39. https://www.gamedeveloper.com/design/behavioral-game-design
40. https://factorio.com/blog/post/fff-337
41. https://aphyr.com/posts/351-a-satisfactory-way-of-building
42. https://shiftbacktick.itch.io/lacus-opportunitas/devlog/893480/v100-making-of-the-jam-edition
43. https://www.gamedeveloper.com/audio/postmortem-dinosaur-polo-club-s-i-mini-metro-i-

---

## 開けなかった出どころ（記録として残す）

**書きたい中身があったが、開けなかったので本文に載せなかったもの。**

| URL | 何が欲しかったか | 結果 |
|---|---|---|
| https://strategywiki.org/wiki/Mount%26Blade/Trade | M&B の True Price と供給修正の式 | HTTP 403 |
| https://w.atwiki.jp/offlinedaikoukai/pages/34.html | 大航海時代2 の交易の数値（買値は売値の半額ほか） | HTTP 403 |
| https://recettear.fandom.com/wiki/Pricing_Mechanics | Recettear の値付けの数値 | HTTP 402 |
| https://recettear.fandom.com/wiki/Haggling | 交渉の回数と賞与の数値 | HTTP 402 |
| https://forums.frontier.co.uk/threads/is-having-to-rely-on-third-party-sites-an-intentional-design-decision-or-a-side-effect.375459/ | Elite Dangerous で相場情報を外部サイトに委ねたのは意図か | HTTP 403 |
| https://www.neoseeker.com/uncharted-waters-new-horizons/faqs/1975155-new-horizons-market.html | 大航海時代2（英語版）の相場の逆解析 | HTTP 403 |
| https://gamefaqs.gamespot.com/snes/588823-new-horizons/faqs/62703 | 同上（GameFAQs 側） | HTTP 403 |
| https://aaltodoc.aalto.fi/bitstreams/8ffd4078-668f-4bb0-89f2-f897309e1375/download | MMORPG の仮想経済設計の学士論文 | HTTP 403 |
| https://gdcvault.com/play/1024492/-Offworld-Trading-Company-An | Offworld の GDC ポストモーテム本編 | 会員制 |
| http://yakitori.s7.xrea.com/koukai/koukai2/merchant.html | 大航海時代2 の交易のコツ | HTTP 503 |
