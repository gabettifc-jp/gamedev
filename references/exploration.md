# exploration.md — 探索・地図（exploration / cartography）の生の記録

調べた日：**2026-08-22**
調べた者：ジャンル調査（実装・既存シート・そのゲームの spec.md を読まずに、ネットだけから採取）

## この記録の読み方

- 一件ごとに **出どころ（URL・書いた人・いつのものか）／書き起こし／分野** を持つ。
- 分野は `templates/sheets/genre/README.md`「調べる分野」の七つ。
  1. 入力と判定　2. 返し　3. 見せ方と予告　4. 構造　5. 進行と難度　6. 遊んだ人の文句　7. 実装の落とし穴
- **「」で囲った部分は、そのページから取ってきた文言。**
  ただし取得は要約器を通しているので、**逐語である保証が無い。**
  特に日本語ページは要約器が言い換えている可能性があるので、**日本語の引用はすべて〔要約経由〕**と考えること。
  英語の `"..."` は要約器が「原文引用」として返したもの。数値は数値のまま写した。丸めた箇所は無い。
- **ここに書いた URL は全部、開いて中身を見たもの。**
  開けなかった URL は末尾の「開けなかったもの」にまとめた。
- このジャンルの定義：**未知の土地・海・空間が、遊ぶうちに開いていくことが遊びの本体になっているもの。**
  依頼により、**「探索して得た情報が確かかどうか」を遊ぶ人に判断させる作り**を厚めに当たった（分野1と3に散らばっている。末尾に横断のまとめを置いた）。

---

# 分野1：入力と判定（何をどれだけ「見えた」ことにするか）

## 1-1. 視界アルゴリズムの「望ましい六性質」と、対称性の定義

- 出どころ：https://www.albertford.com/shadowcasting/ （Albert Ford "Symmetric Shadowcasting"。取得日 2026-08-22）
- 分野：**1**（および7）

Adam Milazzo の一覧として引かれている、視界アルゴリズムに望ましい六つの性質（そのまま）：

1. "Symmetry"
2. "Expansive walls"
3. "Expanding pillar shadows"
4. "No blind corners"
5. "No artifacts"
6. "Efficiency"

対称性の保証の定義：

> "If any floor tile A is in the field of view of a floor tile B, then B will always be in the field of view of A."

傾きの計算（コードそのまま）：

> "slope(tile): row_depth, col = tile; return Fraction(2 * col - 1, 2 * row_depth)"

対称性判定：

> "is_symmetric checks if a given floor tile can be seen symmetrically from the origin. It returns true if the central point of the tile is in the sector swept out by the row's start and end slopes."

丸めの扱い：**`.5` で終わる値に対して、切り上げ用と切り下げ用の二種類の丸め関数を使い分けている。**
> "if n ends in .5, `round_ties_up` rounds up and `round_ties_down` rounds down."

壁タイルまで見せる版にするときの改造点：
> "Make slopes originate from the edges of the tile instead of the center."
> "Change the comparisons in `is_symmetric` to strict inequalities."

**注：ここで言う「対称」は、「見える／見えない」を対称にするという設計判断であって、物理ではない。**
非対称だと「こちらからは見えないのに向こうからは撃たれる」が起きる。

## 1-2. 視界アルゴリズムの選択肢の一覧（RogueBasin）

- 出どころ：https://chizaruu.github.io/roguebasin/field_of_vision （RogueBasin "Field of Vision" のミラー。原本 roguebasin.com は 403 で開けなかった。取得日 2026-08-22）
- 分野：**1**

「ローグライクの最も重要な機能のいくつかは、地図上のある点からある物が見えるかを判定することを必要とする」旨（"some of the most important features on roguelikes...require to check the visibility of an object from a given point on the map."）。

挙げられている手法（そのまま）：

- Light whole level
- Light whole room
- Extremely fast simplified LOS
- FastLOS
- Ray casting
- Shadow casting
- Restrictive Precise Angle Shadowcasting
- Permissive Field of View
- Digital field of view
- Very simple line of sight pseudo-code
- Quick and dirty FOV/LOS
- LOS using strict definition

**「部屋ごと全部明るくする（Light whole room）」「階全部を明るくする（Light whole level）」が、正式な選択肢として一番上に置かれている。**
このページは対称性・記憶（既踏破タイルの記憶）については触れていない。

## 1-3. Darkest Dungeon の「斥候（Scouting）」の数値

- 出どころ：https://darkestdungeon.wiki.gg/wiki/Scouting （Official Darkest Dungeon Wiki。取得日 2026-08-22）
- 分野：**1**（および3・5）

- 基礎確率："Base scouting chance is 25%"
- 光量ボーナス："Radiant light (>75% torch) grants a +15% scouting chance bonus compared to no light"
- 装飾品・技による加算：
  - Ancestor's Map / Evidence of Corruption："+25% Scouting Chance"
  - Survival Guide："+10% Scouting Chance"
  - Seer Stone："+15% Scouting Chance"
  - Raider's Talisman："+15% Scouting Chance"
  - Scouting Whistle："+20% Scouting Chance if Torch below 51"
  - Night Moves："+20% Scouting chance (4 Battles)"
  - Scout Ahead："+25% Scouting chance (4 Battles)"
  - Release the Hounds："+30% Scouting chance (4 Battles)"
- 大成功（critical scout）："If the party's scouting chance is no more than 100%, then if regular scouting triggers, there is a 50% chance to critically scout."
  100%超のときは "the chance of a critical scout is half of the regular scouting chance."
- 何が開くか：通常は "all corridors adjacent to the current room, and the rooms connected to those corridors"、
  大成功は "everything within two corridors' distance."

**明かりの強さが索敵範囲のつまみになっている（明かりを落とすと戦利品が増える代わりに地図が開かない）。**

## 1-4. Foxhole の「地図情報（Map Intelligence）」──索敵の走査周期と、情報の減衰

- 出どころ：https://foxhole.wiki.gg/wiki/Map_Intelligence （Official Foxhole Wiki。取得日 2026-08-22）
- 分野：**1**（および3・4。**不確かな情報の扱いとして最重要の一件**）

- 走査周期：全ての情報源が "scan their surroundings every 5-6 seconds."
- 範囲の例：
  - 偵察車 Drummond 100a：ground "60 meters"
  - 航空偵察：air "150 meters"
  - Observation Tower：all "500 meters"
  - Safe House："80 meters"、ただし "need the Radio Station upgrade."
  - Observation Bunker：稼働に "0.01 Reserve Power every minute (14.4 per day)"
- 装備：Radio Backpack は "must be equipped for intel gathering to be active"、かつ
  "must not be standing on rocks or be inside a vehicle."
- **減衰（この一行がこのジャンルの核）**：
  > "If an entity is not continuously spotted, its icon on the map will fade over time and disappear (in less than 10 minutes)."
- 更新：基地に触れたときにだけ見える。装備があれば "constant updates every 5-6 seconds."
- 地域をまたぐと "the intel on a player's map is cleared."
- 隠れる側：Scout Uniform は "an 80% and 75% chance of not being seen"。
  大雨は最大時に走査半径を半分にする。降下兵は "do not appear on intel for 30 minutes."

**つまり、地図上のアイコンは「いま在るもの」ではなく「最後に見えたもの」であり、10分未満で消える。**

## 1-5. Minecraft の地図アイテム──解像度と縮尺の数値

- 出どころ：https://minecraft.wiki/w/Map （Minecraft Wiki。取得日 2026-08-22）
- 分野：**1**（および2・7）

- 表示："128×128 square grid of colored pixels, with each pixel representing a square portion of land."
- 縮尺と1画素あたりのブロック数／覆う範囲：

| 縮尺 | 1画素 | 覆う範囲 |
|---|---|---|
| 0/4 | 1 block | 128×128 blocks |
| 1/4 | 2×2 blocks | 256×256 blocks |
| 2/4 | 4×4 blocks | 512×512 blocks |
| 3/4 | 8×8 blocks | 1024×1024 blocks |
| 4/4 | 16×16 blocks | 2048×2048 blocks |

- 埋まり方："To record the world on a map, that specific map must be held in either of the player's hands while the player moves around the world."
  **手に持って歩かないと埋まらない。**
- 描かないもの："The map only records the surface even if the player is underground."（地下にいるあいだは地表しか記録されない）
- 範囲外に出たとき："the pointer turns into a white dot which moves along the edge relative to the player's position."
  さらに離れると縮尺ごとの閾値で消える。

## 1-6. Elite Dangerous の探索の判定と報酬倍率

- 出どころ：https://ed-dsn.net/en/introduction-exploration-2/ （Deep Space Network、有志の解説。取得日 2026-08-22）
- 分野：**1**（および2・5）

- Discovery Scanner は二つの部分から成る："an energy signature scanner ('Honk')" と、系を詳しく調べる専用画面（FSS）。
- 段階と対価：
  - Detected：岩石惑星 500 CR 〜 テラフォーム可能な水惑星 約 85,000 CR
  - Discovered："3 times the amount of the Detected level"
  - Mapped："4 or 5 times of the Discovered level amount"
- 初回：最初に発見した者は "60%, cumulative credits"、最初に地図化した者も同じく "60%, cumulative credits"。
- FSS を開く条件（**入力の条件がはっきり書かれている珍しい例**）：
  - Analysis Mode に切り替える（武器が使えなくなる）
  - Super-cruise 中であること
  - **スロットルをゼロにすること**
  - "Enter FSS Mode" コマンド
- 地表の地図化：Detailed Surface Scanner でプローブを撃ち、"90%+ surface coverage" で完了。

## 1-7. Subnautica の深度制限（「行ける／行けない」の判定が深さ一本）

- 出どころ：https://wiki.subnautica.com/sn/Depth_Levels （Subnautica Wiki。取得日 2026-08-22）
- 分野：**1**（および5）

Seamoth：
> "0-199 meters | 0-299 meters | 0-499 meters | 0-899 meters | The Seamoth only suffers collision damage at high speeds"
> "200+ meters | 300+ meters | 500+ meters | 900+ meters | Hull integrity compromised"

Cyclops：
> "0-499 meters | 0-899 meters | 0-1299 meters | 0-1699 meters | None; the Cyclops will not take any impact damage"
> "500+ meters | 900+ meters | 1300+ meters | 1700+ meters | Hull integrity compromised"

Prawn Suit：
> "0-899 meters | 0-1299 meters | 0-1699 meters | None; the Prawn Suit will not take any damage"
> "900+ meters | 1300+ meters | 1700+ meters | Hull integrity compromised"

**未踏の領域を仕切っているのが壁ではなく「深さの数値」で、装備の段が 200/300/500/900/1300/1700 と刻まれている。**

## 1-8. NetHack：地図は「最後に見たもの」であって「在るもの」ではない

- 出どころ：https://www.nethack.org/v367/Guidebook.html （NetHack 3.6.7 公式 Guidebook。取得日 2026-08-22）
- 分野：**1**（および3。**不確かな情報の扱い**）

> "Normally, if you have seen an object at a particular map location and move to another location where you can't directly see that object any more, it will continue to be displayed on your map."
> "That remains the case even if it is not actually there any more — perhaps a monster has picked it up or it has rotted away — until you can see or feel that location again."

見えない敵の記憶マーカー：
> "However, if you encounter a monster which you can't see or sense — perhaps it is invisible and has just tapped you on the noggin — a special 'remembered, unseen monster' marker will be displayed at the location where you think it is."
> "That will persist until you have proven that there is no monster there, even if the unseen monster moves to another location or you move to a spot where the marker's location ordinarily wouldn't be seen any more."

記憶どうしの衝突の処理：
> "One notable exception is that if the object gets covered by the 'remembered, unseen monster' marker. When that marker is later removed after you've verified that no monster is there, you will forget that there was any object there regardless of whether the unseen monster actually took the object."

**古い情報を消す規則まで明文化されている。「確かめた結果、記憶ごと消える」。**

---

# 分野2：返し（見つけたときに、何が返るか）

## 2-1. Metroid Prime のスキャンバイザー──「調べる」こと自体を操作にした

- 出どころ：https://sourcegaming.info/2017/06/28/holism-metroid-prime-and-the-scan-visor/ （Source Gaming、2017-06-28）
- 分野：**2**（および3・4）

> "The player, then, is responsible for how much information he or she receives, instead of relying on other characters or cutscenes or tips on how to accomplish a task."

返しの作り：
> "It also takes a few seconds of locking onto any scannable thing to learn about it, and you can't fire during that period, making learning about enemies an actual challenge, with a reward that's personal instead of mechanical."

**「数秒間ロックし続ける／その間は撃てない」という、待ち時間と引き換えの返し。**
（この記事は走査対象の色分けについては書いていない。）

補足の出どころ：https://www.gonintendo.com/archives/246330-metroid-prime-s-scan-visor-was-nintendo-s-idea-says-former-retro-dev
（GoNintendo。元は Game Informer の Mark Pacini インタビュー。取得日 2026-08-22 は検索結果経由のため**未開封**。→ 開封していないので本文では使わない。末尾「開けなかったもの／確かめていないもの」に置いた。）

## 2-2. Elite Dangerous：発見の返しが「自分の名前が付く」こと

- 出どころ：https://ed-dsn.net/en/introduction-exploration-2/ （同上）
- 分野：**2**

- 発見しただけでは名前は付かない。**持ち帰って売った者に付く。**
- 初回発見・初回地図化にそれぞれ 60%（累積）の上乗せ。
- 段は Detected → Discovered → Mapped の三段で、後段ほど倍率が上がる（3倍、さらに4〜5倍）。

**「見た」と「記録した」と「持ち帰った」を分けている。**

## 2-3. Minecraft：返しが「歩いた跡が絵になる」こと

- 出どころ：https://minecraft.wiki/w/Map （同上）
- 分野：**2**

手に持って歩いた範囲だけが 128×128 の画素として塗られていく。地下では地表しか記録されない。
範囲外に出ると自分の印が白い点になって縁を滑り、やがて消える。
**「自分がどこにいるか」の表示そのものが、地図の埋まり具合に連動して劣化する。**

## 2-4. 塔の返し（Ubisoft 型）：登った瞬間に地図とアイコンが降ってくる

- 出どころ：https://gamerant.com/ubisoft-assassins-creed-far-cry-radio-tower-mechanic/ （Game Rant「In Defense of Ubisoft's Radio Tower Mechanics」。取得日 2026-08-22）
- 分野：**2**（および3・6）

> "At the top of the buildings, players have a greater view of their surroundings and, consequently, the map reveals more information."

擁護の論拠：
> "developers have to come up with a way of designing open worlds that pace the player's exploration without making players feel as though there are arbitrary boundaries in place."

Horizon の Tallneck のように作れば "interactive puzzles that enhance gameplay and also make sense on a narrative level" になる、とも。
**この記事は、返しの音や演出については何も書いていない**（探したが無かった）。

## 2-5. 個人開発の実装：霧を剥がす返しを、位置の移動量で間引く

- 出どころ：https://astralarchitects.itch.io/suits-of-the-abyss/devlog/717814/minimap-and-fog-of-war （itch.io 開発日誌 "Minimap and fog of war"。取得日 2026-08-22）
- 分野：**2**（および7）

- ミニマップの作り方："render the camera's view onto a texture, and save it as the minimap in the beginning of the map generating process."
- 霧："I combine a circle shape as the reveal shape with the current mask based on the player's position, so that it can masked out the unexplored areas."
- 速度の問題と対処："I record the last player's position and I only reveal the fog when the player is far enough from the last position."
- 本人の評価：これでも足りず、シェーダによる方法を検討中。数値は書かれていない。

**「動いた距離が閾値を超えたときだけ霧を剥がす」＝返しが連続でなく離散になる。手触りに直結する。**

---

# 分野3：見せ方と予告（未踏をどう「行きたい」と思わせるか）

> **依頼で名指しされた分野。ここが一番厚い。**

## 3-1. ゼルダ BotW の「引力」と「三角形の法則」──CEDEC 2017（数値つき）

- 出どころ：https://www.famitsu.com/news/201708/31140870.html
  （ファミ通.com、2017-08-31。CEDEC 2017 講演「『ゼルダの伝説 ブレス オブ ザ ワイルド』におけるフィールドレベルデザイン」。登壇：任天堂 藤林秀麿、米津真）
- 分野：**3**（および4・5）　※日本語のため**全て〔要約経由〕**

引力（プレイヤーを寄せる力）：

- 藤林氏は「光に吸い寄せられる昆虫をイメージ」するように、"引力"を発生させる場所を配置したと述べている〔要約経由〕。
- 引力源として挙がったもの：
  - **祠**：昼間でも目立つデザインにして引力を強化
  - **馬宿**：お得な情報が得られる場所へ改造
  - **敵の基地**：役立つ武器を配置
  - **不思議なオブジェクト**：好奇心を呼び起こす
- 「連鎖して、能動的に動く、理想的な遊びの無限機関を生み出せた」〔要約経由〕

**フィールド三角形の法則**（米津氏）──三つの役割：

1. **分岐ルート**：山を直登するか迂回するかの選択肢
2. **段階的な視界展開**：「目的地に向かっていったら、視界の端に自然と別の目的地が入っていた」という体験設計〔要約経由〕
3. **先端への視線誘導**：人間が三角形の先端を見る習性を利用

結果として「つねに何かしらの目標が見えているゲーム」が実現された〔要約経由〕。

**設計の三つのものさし（数値）**：

- **距離感**：京都の地図をベースに、実世界の感覚から導出
- **密度感**：コンビニや郵便ポストの分布率を参考にし、**祠は最終的に120個**に決定（**初期導出値は116**）
- **尺感**：**大ダンジョン約40分、小ダンジョン5〜20分**などの目標時間

開発運用：フィールドに「敵配置FIX」といったテキストをフキダシで直接置き、"フィールドタスクビュー"で担当範囲と進捗を色分け表示した。

## 3-2. 同じ講演の別レポート──「引力」の定義

- 出どころ：https://www.4gamer.net/games/341/G034168/20170901120/ （4Gamer.net、2017-09-01）
- 分野：**3**　※〔要約経由〕

- 引力＝「プレイヤーにとってお得であるがゆえに、そこに向かいたくなってしまう力」と定義されている〔要約経由〕。
- 三角形の大きさの役割分担：**大きい三角形はランドマーク、中サイズは遮蔽、小サイズは局所的な探索を促す。**
- 京都市内を実際に歩測して、距離感・密度感・尺感の三指標を決めた。

**注：3-1（ファミ通）と 3-2（4Gamer）は同じ講演の別レポートだが、三角形の役割の言い方が違う。**
ファミ通は「分岐／段階的な視界展開／視線誘導」、4Gamer は「ランドマーク／遮蔽／局所探索」。
**同じ講演でも、書き手によって取り出す軸が違う。**

## 3-3. レベルデザイナーによる BotW の空間構成の読み解き

- 出どころ：https://www.blog.radiator.debacle.us/2017/10/open-world-level-design-spatial.html
  （Radiator Blog、Robert Yang、2017-10）
- 分野：**3**（および4）

> "Instead of marking out a specific path somewhere, they would create these sort of bowls / funnels that direct the player to 'orbit' around certain landmarks"

三角形について：
> "You could go around the triangle and see what's on the other side"

道の引き方：
> "curve and meander your paths so that the player eventually discovers / reveals more of the world as they progress around the bend"

規模の階層：大きな山／中くらいの登攀対象／浅い丘、の三段でコントラストを保つ。
テストでヒートマップが特定の線に集中していた問題を、この「引力」型で分散させた。

**「まっすぐな道を作らない。曲げることで、進むにつれて世界が少しずつ出てくるようにする」**が、予告の作り方として明示されている。

## 3-4. 「見る→行く→見つける」の無限ループ

- 出どころ：https://gmtk.substack.com/p/how-nintendo-solved-zeldas-open-world （Game Maker's Toolkit / Mark Brown、substack）
- 分野：**3**（および4）

> "players still went from point to point — but, this time, instead of following a specific line, they were simply following a breadcrumb trail of interesting landmarks."

プレイヤーの内心を "ooh, what's that?", "ooh, what's that?" と繰り返す形で描いている。
三角形の役割：遠くを隠しつつ、視線を頂点へ導く。進むと "more terrain will start to be shown"。
結果：
> "players freely exploring various places, following their curiosity from landmark to landmark — but almost all players eventually got to the key locations."

**塔で一気に開くやり方は「80/20 に割れて失敗した」と書かれている**（塔に従うだけの人と、当てもなく彷徨う人に二極化した、の意）。

## 3-5. 門（gate）の見せ方──「鍵より先に錠を見せる」

- 出どころ：https://book.leveldesignbook.com/process/layout/typology/gates （The Level Design Book。取得日 2026-08-22）
- 分野：**3**（および5）

定義：
> "In level design, a **gate** is anything that blocks player flow, usually along a critical path."

種類：
- Hard gate："players must always complete the encounter with no shortcuts *(e.g. wait until a timer elapses, defeat all enemies, loot a key from a defeated boss)*"
- Soft gate："can potentially exit early, but must usually complete the encounter *(e.g. exit mechanism requires staying in a vulnerable position, so most players clear the arena first)*"
- Hidden exit："the player must explore the arena to find the exit *(e.g. an exit hidden in a corner that most players won't notice until after clearing the arena)*"

Lock and key gate：
> "A **lock and key gate** is a hard gate that prevents the player from passing through until they find the 'key' somewhere else in the level."

**予告の作法として明示されている三つ**：
- **錠を、鍵より先に見せる**（そうすると発見が偶然でなく意図的に感じられる）
- **鍵を見つけたとき、錠を思い出させる**：
  > "Maybe the key is on a balcony overlooking the lock, or the button is aligned with a window facing the lock"
- **必要な鍵の数を錠の見た目に出す**：
  > "a locked door that requires three keys should have three keyholes"

## 3-6. Subnautica：見えていることが安全を意味しない、という見せ方

- 出どころ：https://gamestudies.org/2404/articles/evans
  （Game Studies vol.24 issue 4、Evans "Too Afraid to Go Deeper: Creating Pervasive Dread Through Blended Design Structures in Subnautica and Subnautica: Below Zero"）
- 分野：**3**（および4・6）

> "In the Subnautica games, openness doesn't mean safety, and players can't trust that they are seeing the environment as accurately as they think."

> "Environmental dangers can come from any direction, can appear shockingly fast, are constantly heard but not seen, and...the environment is deadly by default."

> "a growing, gnawing anxiety that increases as the player proceeds through the game."

音が予告になっている：生き物の咆哮が "continuously remind players of nearby threats"（姿を見る前に鳴き声で予告される）。

進行の条件：
> "you have to go down there, you can't tell if you're prepared, and there's no guarantee you'll make it back."

## 3-7. Subnautica の骨組み（GDC 2019 講演の見出し）

- 出どころ：https://www.gamedeveloper.com/design/video-inside-the-design-of-i-subnautica-i- （Game Developer、Charlie Cleveland の GDC 2019 講演 "The Design of Subnautica" の紹介）
- 分野：**3**（および4）

講演で扱われたもの（そのまま）：
- "creating and adhering to specific design pillars and capturing emotion in the initial prototypes"
- "feelings of exploration, discovery and the unknown"
- "embracing player phobias"
- **"mysterious tooltips"**
- **radio signals が "adding structure to a sandbox"**
- "story beats that didn't overly direct or guide the player"

**「砂場に構造を足す方法」として選ばれたのが、無線信号（＝行き先の断片的な予告）だった、と名指しされている。**

## 3-8. Sea of Thieves：船に置いてある地図だけ。ミニマップは無い

- 出どころ：https://seaofthieves.wiki.gg/wiki/Map_Table （The Sea of Thieves Wiki。取得日 2026-08-22）
- 分野：**3**（および1）

- 地図台は "most islands and regions found within the Sea of Thieves" を表示し、"track their own ship's path and position on the sea, locate allies, identify potential threats or targets, and certain valuable treasures" ができる。
- 座標系："a 26-square grid classified in alphanumeric coordinates"（ただし航行範囲はこの外にも広がる）。
- **通常プレイ中のミニマップは無い。**船上（または Sea Fort・拠点）の物理的な地図台に触れているあいだだけ見える。
- 自船の印は "a simplified overhead drawing of the ship's type (Sloop/Brigantine/Galleon) and outlined with white"。
  ただし "visible only to the ship's crew until other markers that can expose the ship to other player crews are applied."
  Reaper's Mark の旗などを掲げると全員に見える。
- 最初に触った者が閉じるまで地図の操作権を握る（他の乗員は見られるが動かせない）。

**「自分の位置を常時表示しない」ことと「地図を見るには操作の手を止めて特定の場所へ行く」ことをセットにしている。**

## 3-9. 都市の読みやすさ（1960年）──ランドマーク理論の出どころ

- 出どころ：https://en.wikipedia.org/wiki/Phantom_island は別件。ここは
  検索で当たった Lynch 解説ページが 403 のため、**Lynch の一次・二次資料は開けていない。**
  → 「開けなかったもの」に記載。**この項目はゼロ本。**
- 分野：**3**（取れなかった）

〔相場が取れなかった〕：Kevin Lynch『The Image of the City』(1960) の五要素（paths, edges, districts, nodes, landmarks）が
ゲームの道案内設計の下敷きになっている、という話は検索結果には繰り返し出たが、**開ける一次／二次資料に当たれなかった。**

---

# 分野4：構造（このジャンルの気持ちよさの本体はどこか）

> **依頼で名指しされた分野。出どころどうしで割れている。割れたまま残す。**

## 4-1. 「空間そのものが報酬」──報酬の分類に「探索の報酬」を立てた論文

- 出どころ：https://gamestudies.org/1101/articles/gazzard_alison
  （Game Studies vol.11 issue 1、2011。Alison Gazzard "Unlocking the Gameworld: The Rewards of Space and Time in Videogames"）
- 分野：**4**

先行分類（Hallford & Hallford 2001, p.158）の "rewards of access"：
> "allow a player access to new locations or resources, that were preciously inaccessible, they are generally used only once, and have no other value to the player once they've been used"
（例："keys, picklocks, and passwords"）

Gazzard が立てた二つ：
- **Rewards of Exploration**："rewards that allow players to move along paths that have now been unlocked in the gameworld."
- **Rewards of Environment**："allow for new obstacles to be positioned along the path, as further puzzles to be solved."

地図の役割：
- 地図は "key locations, such as shops and save points" を示す道具であり、"reward of environment" の思い出させ役でもある。
- **地図は "a teaser for areas that the player can eventually access through completing set goals."**（＝地図が予告そのもの）

循環：
> "a cycle of reward of exploration leading to reward of environment and back again"

**この立場での本体＝「行けなかった場所に行けるようになること」。地図が埋まることではない。**

## 4-2. 「知識だけが進行」──Outer Wilds

- 出どころ：https://www.gamedeveloper.com/design/live-die-repeat-how-i-outer-wilds-i-piques-curiosity-in-an-ambivalent-solar-system
  （Game Developer。Alex Beachum、Loan Verneau の発言）
- 分野：**4**（および3・5）

> "if we remove any other reason you could possibly want to explore - collectibles or upgrades...all that's left is you wanting to piece together what's going on."

> "the only thing you can bring back in time with you is your memories. So it really focuses on knowledge being the only real thing of value."

**好奇心が湧く条件（重要）**：
> "if you want to make people curious, you can't expect someone to be curious about something specific unless they're already familiar with everything in their immediate vicinity."

（＝**周囲が既知になっていない人に、特定のものへの好奇心は湧かない。**未知を出す前に既知を作れ、という順序の話）

文章の書き方（Verneau）：
> "if you want people to care about the text they're reading, it helps if the people they're reading about are going through the same things...or are experiencing the same feelings."
> "it stops being like, 'I found a book in Skyrim!' and more of a like 'I want to know what happened to [these extinct aliens].'"

失敗したテスト：隕石の落下で好奇心を引こうとしたが、序盤は "everything is new" なので、一つ新しいものが増えても目立たなかった。

**この立場での本体＝「未知が既知に変わること」そのもの。集めるものも強化も置かない。**

## 4-3. 「未知の恐ろしさ」──Subnautica

- 出どころ：https://www.gamedeveloper.com/design/video-inside-the-design-of-i-subnautica-i- ／ https://gamestudies.org/2404/articles/evans
- 分野：**4**

Cleveland の柱は "Thrill of the Unknown"（下に何が居るか分からない状態の、興奮・怖さ・緊張）〔検索要約と記事の双方に現れる〕。
Evans は "The game creates pervasive dread by putting players in constant anticipation of danger." と書いている。

**この立場での本体＝「未知の恐ろしさ」。開けること自体が快ではなく、開ける前の緊張が本体。**

## 4-4. 遊ぶ人の型としての「探索者」（1996年）

- 出どころ：https://mud.co.uk/richard/hcds.htm
  （Richard Bartle "Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs"、1996）
- 分野：**4**（**古い層**）

> "Explorers delight in having the game expose its internal machinations to them."

彼らがやること："progressively esoteric actions in wild, out-of-the-way places."

彼らの台詞（そのまま）：
- "Hmm..."
- "You mean you _don't know_ the shortest route from <obscure room 1> to <obscure room 2>?"
- "I haven't tried that one, what's it do?"

- 点集めは退屈と感じ、達成型の遊びを知的に狭いと見なす。
- **"making the most complete set of maps in existence"** を誇りにする。
- "proud of their knowledge of the game's finer points, especially if new players treat them as founts of all knowledge."

**この立場での本体＝「仕組みが見えること」と「完全な地図を持っていること」。1996年の時点で、地図の完成そのものが誇りとして書かれている。**

## 4-5. 割れている点のまとめ（この節が本記録の要）

同じ「探索の気持ちよさ」に対して、四通りの答えが出ている：

| 出どころ | 本体はどこか |
|---|---|
| Gazzard 2011 | **行けなかった場所に行けるようになること**（空間の解錠） |
| Outer Wilds（Beachum） | **未知が既知に変わること**（知識だけが持ち帰れる） |
| Subnautica（Cleveland／Evans） | **未知のまま向き合う緊張**（開ける前が本体） |
| Bartle 1996 | **仕組みの露呈と、地図の完成**（塗り絵が誇り） |

**「地図が埋まること自体が報酬」と言い切っているのは Bartle だけ**で、
Gazzard は「地図は予告（teaser）」、Beachum は「集めるものを消したら残ったのが好奇心」と言っている。

---

# 分野5：進行と難度

## 5-1. 深さで区切る（Subnautica）

- 出どころ：https://wiki.subnautica.com/sn/Depth_Levels
- 分野：**5**

1-7 の表のとおり、200 → 300 → 500 → 900 → 1300 → 1700 メートルの段。
**難度の上げ方が「敵を強くする」ではなく「行ける深さを装備で買う」になっている。**

## 5-2. 密度と尺で区切る（BotW）

- 出どころ：https://www.famitsu.com/news/201708/31140870.html
- 分野：**5**　※〔要約経由〕

- 祠 **120個**（初期導出 **116**）。密度はコンビニ・郵便ポストの分布率を参考に決めた。
- 大ダンジョン **約40分**、小ダンジョン **5〜20分**。

**「一つの目的地に何分かかるか」を先に決めてから配置している。**

## 5-3. 錠と鍵で区切る（Level Design Book）

- 出どころ：https://book.leveldesignbook.com/process/layout/typology/gates
- 分野：**5**

hard gate / soft gate / hidden exit の三段。錠を先に見せる、鍵の数を見た目に出す（3-5 参照）。

## 5-4. 対価の倍率で伸ばす（Elite Dangerous）

- 出どころ：https://ed-dsn.net/en/introduction-exploration-2/
- 分野：**5**

Detected → Discovered（3倍）→ Mapped（さらに4〜5倍）、初回発見・初回地図化で各 +60%（累積）。
**「同じ星に三回手をかけると、対価が段違いになる」形で、深追いを促している。**

## 5-5. 明かりと引き換えにする（Darkest Dungeon）

- 出どころ：https://darkestdungeon.wiki.gg/wiki/Scouting
- 分野：**5**

Radiant（松明 >75%）で索敵 +15%。暗くすると索敵が落ちる。
**「先が見える」ことを、他の利益と取引させている。**

---

# 分野6：遊んだ人の文句

> **依頼で名指しされた分野。「どういう作りのときにそう言われたか」を残す。**

## 6-1. 探索の手続きを増やしたら「作業になった」──Elite Dangerous 3.3（FSS）

- 出どころ：https://steamcommunity.com/app/359320/discussions/0/2806204039997320360/
  （Steam コミュニティ「New exploration mechanics are bogus」。2018年12月）
- 分野：**6**（および1・5。**昔と今で変わったものの実例**）

否定側：
- **Average Bro**（2018-12-14）："The new content is great but not being able to see whats in the system right away...is taking the fun out of long trips"
- **Bullpup**（2018-12-14）："The mini-game is shockingly banal...New mechanics should have been additive, not substitutive."
- **deadraque**（2018-12-15）："100 % agree it is a completely pathetic system! after 50 planets i am done with it...it is boring and dreadful"

擁護側：
- **Tim Curry**（2018-12-14）："Now we can fly in, honk, open FSS, and instantly see if something falls in the earthlike signal range."
- **Dolphin Bottlenose**（2018-12-14）："You can scan them without actually flying to them. The only time you need to fly to them is if you want to also explore the surface."

**変更の中身**：それまでは「跳んで honk すれば系の中身が一望できた」。3.3 で FSS（周波数を合わせて拡大していく画面）に置き換わった。
**文句の形は「時間が増えた」ではなく「一瞬で判断できなくなった」。**
Bullpup の "additive, not substitutive"（足すべきで、置き換えるべきでなかった）が、この手の変更への最短の批判形。

## 6-2. 生成が均質だと「五つ見れば全部見た」になる──No Man's Sky

- 出どころ：https://steamcommunity.com/app/275850/discussions/0/4526764179299792414/
  （Steam コミュニティ「The game is still boring」。2024〜2025年）
- 分野：**6**

- **Naked Snake**（2024-07-17）："the gameplay loop is just boring, its the same with Starfield, planets are empty and there is nothing interesting to do in them"
- **DEMONVIA**（2025-07-08）："You visit one lame generated planet after the next and that's all there really is."
- **Flash Point**（2024-07-17）："Game literally has no goal, what did you expect when you bought it lol"
- **Sera**（2024-07-17）：探索は楽しめているが "more quests... (quest chains) with things to do" が欲しい、"bad RNG on finding stuff" に不満。
- **Grimmx**（2025-07-09）："The game has positive things, but at the same time its a little shallow... like i am stretching for more when playing it."

擁護側の言い分が**時間で殴る形**になっているのが特徴：
- **Mr. Bufferlow**（2024-07-17）："If you like the exploring angle of the game, you can play for thousands of hours (4,500 hr for me)."
- **Kobs**（2025-07-08）："I got bored too but only after 1800 hours."

## 6-3. 塔が「作業チェックリスト」と呼ばれた経緯

- 出どころ：https://40more.substack.com/p/design-dive-viewpoints （substack「design dive: viewpoints」）
- 分野：**6**（および3）

- 起源：Assassin's Creed が広めた。着想元は Shadow of the Colossus の "verticality, scale, and set base-points"。
- 初期は良かった理由："a natural fit between a vantage point as a 'real' thing"（登るのに技術が要り、キャラクター像とも噛み合っていた）。
- 崩れ方："a crutch"（松葉杖）になり、"a dozen AC titles, quite a few Far Cry titles" ＋ Spider-Man、Watch Dogs に広がった。
- 何が悪くなったか：登るのが "trivial" になり、地図に "information and access rain down on you" で溢れ、
  塔が **"a mindless chore"** に感じられるようになった。
- BotW の直し方：同期を必須にしない／アイコンで埋め尽くさない／登り方に工夫が要る／移動手段と結びつける。

## 6-4. 塔の擁護と、「塔は身代わりの生贄」という見立て

- 出どころ：https://jboger.substack.com/p/towers （substack "The Inevitable Open World Towers"）
- 分野：**6**（および3）

- 数値：**初代 Assassin's Creed には塔が 91 本あった。**
- 2015年ごろまでに "the hallmark of Ubisoft's massive worlds" となり、批判を受けて減らされたが、
  2017年の BotW と Horizon Zero Dawn が塔を復活させた。
- 塔の三つの働き：
  1. ランドマーク："Towers are ideal 'landmarks': they can be noticed from afar"（ディズニーランドの設計思想を引き合いに）
  2. 地図開き："to reveal the map around them and add icons to indicate interactive ingredients & activities"
  3. 出し方の調整："Towers...are a convenient band-aid proxy to discovery"（一度に全部出さないための絆創膏）
- 結論："making a world enjoyable to explore isn't as much about inventing new mechanics as it is about creating a massive variety of content"
- **著者は塔を「世界設計の限界の身代わり（scapegoat）」と呼んでいる。**

## 6-5. 日本語の文句（1）：移動時間が体験時間を食う

- 出どころ：https://anond.hatelabo.jp/20250406160751 （はてな匿名ダイアリー「オープンワールド苦手民」、2025-04-06）
- 分野：**6**　※〔要約経由〕

- 「定点カメラの映像をずっと見ているような感覚になり」〔要約経由〕、マップ上に散らばったイベントが「唐突でぶつ切りな印象」になる。
- 「物語やキャラに触れる時間よりも移動時間が長いというところもあわなかった」〔要約経由〕
- 従来のゲームを「切り抜き動画」、オープンワールドを「配信」に例え、「無加工感に慣れていない」ことが根本だと述べている〔要約経由〕。

**探索の文句が「密度」ではなく「編集されていないこと」として語られている珍しい例。**

## 6-6. 日本語の文句（2）：掲示板

- 出どころ：https://talk.jp/boards/ghard/1711063781 （みんなの掲示板 Talk「つまらないオープンワールドというジャンルはどうすれば面白くなるのか？」）
- 分野：**6**　※〔要約経由〕

- 「サブクエがなぜあんなにつまらないのかと考え続けたら、ただの時間稼ぎということに気付いた」
- 「ファストトラベルはいらない　開発者自らオープンワールドは面倒って認めてる」
- 「クエスト発生地点に行かないと何も起こらないのが良くない」（世界に流動性がなく、決まった場所でしか進行しない）
- ゼルダについて「祠がマップとぶつ切りになってて、ただの知育パズル」という批判が繰り返し出ている

## 6-7. 日本語の文句（3）：面白い／つまらないの分かれ目

- 出どころ：https://openworldnews.net/archives/1081474897.html
  （PS5速報「面白くてハマるオープンワールドとつまらないオープンワールドの違いを考えてみるスレ」）
- 分野：**6**　※〔要約経由〕

面白い側：
- 「フィールドの広さに対しオブジェクトが多い」
- 「探索するモチベを喚起するフィールド」
- 「操作が楽しいかってのがかなり重要」
- 「マップに立体差がある」「縦方向にも広がっている」

つまらない側：
- 「何をして良いのかわからない」
- 「移動が遅い」「ロードがアホ長い」
- お使いクエストばかり
- 「どこに行っても同じような風景、敵、ドロップ」

**「オープンワールドは形式であってジャンルではない」という指摘が複数。**

## 6-8. 日本語の文句（4）：「オープンワールド疲れ」を業界側の言葉で

- 出どころ：https://gendai.media/articles/-/169055?page=4 （現代ビジネス「オープンワールドにゲーマーたちが疲弊」4ページ目）
- 分野：**6**　※〔要約経由〕

- オープンワールドの定義として「シームレスで連続した探索可能な空間」「ステージの区切りが存在せず、自由に移動でき、直線的に設計されていない」〔要約経由〕。
- 「オープンワールドはかなり扱いが厄介な言葉」とし、「区切られた箱庭世界でも、広めだとオープンワールドと呼ばれたりする」と書かれている〔要約経由〕。
- **このページ（4ページ目）には、アイコンや探索の作業化についての具体的な記述は無かった。**

## 6-9. 地図をランダムにしたら「また探し直し」と言われた──Sunless Sea

- 出どころ：https://www.failbettergames.com/news/mapping-the-sunless-sea-geography-spoilers （Failbetter Games 開発者記事、地理ネタバレ注意）
- 分野：**6**（および7。**作り手側の説明。プレイヤー側の文句は開ける形で取れなかった**）

作り手の説明：
> "most of the terrain shown above is not fixed. In any game there's a chance that it will appear somewhere different or not appear at all."

置き方の制約：
> "We don't, for instance, want a tropical islet appearing in a sea of icebergs."

**縮尺の決め方（数値）**：
> "boats are basically realistic (between 25 and 50 meters long), because they will tend to be the player's point of reference. Buildings are realistic in relation to boats. Smaller items are scaled up a little so as to be visible, and geography is heavily scaled down, because spending your entire game trying to circumnavigate one small island would be hella boring."

最後に：
> "sometimes, something just won't *feel* right, for reasons that are hard to define, and the only way to discover that is to play it."

**「船は実寸、建物は船に対して実寸、小物は少し大きく、地形は大幅に縮める」という縮尺の非一様な決め方が、はっきり書かれている。**

---

# 分野7：実装の落とし穴

## 7-1. 霧の解像度は上げられない。上げるのではなく、上手に拡大する（League of Legends）

- 出どころ：https://www.riotgames.com/en/news/story-fog-and-war （Riot Games "A Story of Fog and War"。技術記事）
- 分野：**7**

- 元の実装：**128x128 のグリッド**でマップ全体を覆っていた。
- 倍にしようとしたら："even a modest doubling of the resolution to 256x256 would have incurred an unacceptable performance hit in the form of a quadrupled CPU cost."
- 採った手："Smartly upscaling the data from 128x128 to 512x512 (which I assumed was large enough to achieve the goals of smooth and narrow transitioning)"
  "Every pixel becomes a 4x4 block with some antialiasing to get rid of jaggies once and for all."
- 既にやっていたこと："already performing a Gaussian blur over the 128x128 source data before rendering it to the scene."
- 見つけた無駄："existing fog of war rendering code was not performing a separable blur"（分離可能フィルタを使っていなかった）
- 設計側の要求："the transition between the visible area and the fog of war to be as defined as possible for the sake of gameplay clarity."
  （**ぼかしたいのではない。境界はくっきりさせたい。ただしジャギは出したくない**という相反する要求）
- 見つけたバグ："The old code was actually darkening areas of the map that were totally clear of the fog of war"
  → 色の掛け算を "from something like 0.9" → "1.0" に直した。

**霧が晴れているはずの場所が、ずっと少し暗かった。**気付かれないまま出荷されていた種類のバグ。

## 7-2. ぼかしは破壊的にやってはいけない

- 出どころ：https://brendankeesing.com/blog/fog_of_war/ （Brendan Keesing のブログ "Fog Of War"）
- 分野：**7**

- 解像度が "almost always the largest bottleneck"。まず落とせ。
- ぼかし："A basic gaussian blur can do wonders for aliased fog."
- **落とし穴（そのまま）**：
  > blur must be "non-destructive (ie it should output to a separate temporary texture and not the persistent fog values, otherwise the blur will seep across the map over time)."
  （＝永続の霧の値そのものをぼかすと、**時間とともに霧がにじんで広がっていく**）
- 更新頻度："the fog may update once every 5 in-game frames. This is surprisingly bearable as the fog does not change significantly on a frame-by-frame basis."
- 数値：
  - "255 is fully fogged, and 0 is fully unfogged"
  - 既踏破だが今は見えていない場所は **128**
  - 視線判定のレイは "8 for a full circle" を最低、半円でよければ "2 or 3 per unit" まで落とせる

## 7-3. 広い世界は、浮動小数で壊れる

- 出どころ：https://frozenfractal.com/blog/2024/4/11/around-the-world-14-floating-the-origin/
  （Frozen Fractal「Around The World, Part 14: Floating the origin」、2024-04-11）
- 分野：**7**

- 地球半径のスケールでは、32bit float の精度は **"a precision of about 0.38 meters."**
  横に動かしただけで物体が上下に飛ぶ（格子に吸着する）。
- 単位を変えても無駄："the digits of each number remain the same, the only thing that changes is the location of the decimal point."
- 核心："floating-point numbers actually _are_ very precise — as long as you don't stray too far from the origin."
- 解："Instead of moving the player through the universe, we move the universe around the player."
- 実装：位置は 64bit double で世界原点基準に持ち、描画・物理に渡すときだけプレイヤー基準の 32bit float に変換する。
- 代償："now I need to put this 64-bit position on _every_ object in the world. And that's a whole new can of worms."

## 7-4. 二次元の探索を三次元にした瞬間に、読み込みが破綻する（ティアーズ オブ ザ キングダム、CEDEC 2024）

- 出どころ：https://gamemakers.jp/article/2024_09_04_78145/ （ゲームメーカーズ、CEDEC 2024 講演レポート、2024-09-04）
- 分野：**7**　※〔要約経由〕

- 前作 BotW は「二次元」設計。本作の最大の課題は「**二次元から三次元への拡張**」〔要約経由〕。
- 洞窟システム：「**メッシュベースのLoD + ストリーミング**」。**チャンク単位は最小 32m 立方体。**
  LoD の切り替えは「**LoD間では頂点のモーフィングを行う**」ことでシームレスにした〔要約経由〕。
- 製品化のためにやった読み込み最適化の四段（そのままの並び）：
  1. プロファイラーで可視化し、配置情報を「穴近くの部分」と「遠方部分」に分割
  2. 見えない配置物をロード対象外にして読込ファイル数を削減
  3. テクスチャ解像度を画面に映る範囲に最適化してファイルサイズ削減
  4. 穴に近づいた時点で必要データを先読みしてロード開始を前倒し
- 空島は「**積極的放置作戦**」で試行錯誤の制約を回避し、直接アクセスできる島を絞って
  「大島1つ＋小島複数」に分類することで「**ロード仕組みを単純化**」した〔要約経由〕。
- 制作側：エディタの編集が実機に即反映される「リアルタイムエディット」、
  レベル変更に追随する「プロシージャルデコレーション」（Houdini 連携）。

**「穴に近づいたら先読みを始める」＝プレイヤーの移動が、読み込みの予告になっている。**

## 7-5. 霧は「見せない」のではなく「送らない」

- 出どころ：https://en.wikipedia.org/wiki/Cheating_in_online_games （Wikipedia "Cheating in online games"）
- 分野：**7**

- world-hacking の定義："a method or third-party program that enables a user to exploit bugs and to view more of a level than intended by the developer."
- 霧について："World-hacking usually enables the user to bypass this mechanism, either by removing it entirely and/or by rendering objects through the fog that would not normally be visible."
- クライアントに送ってしまうと："The server will be very fast, but any wallhack program will reveal where all the players in the game are, what team they are on, and what state they are in — health, weapon, ammo etc."
- 原則："Never trust the client" is a maxim among game developers"
- 逆に、**隠しすぎても意味がない**という指摘："Complete map hiding offers no advantage to a cheater as they would be unable to navigate the invisible map pathways and obstacles."

## 7-6. 霧の下で AI に別ルールを使わせると、必ずばれる（Civilization）

- 出どころ：https://www.designer-notes.com/author/soren/page/22/ （Soren Johnson、DESIGNER NOTES）
- 分野：**7**（および6）

> "In the original version of the game, the AI could create units for free under the fog-of-war, a situation which clearly showed how the computer was playing by different rules from the human."

> "When the question is one of fairness, the player is always right."

**霧は「隠す場所」なので、隠れているあいだに何をしても良いという誘惑がある。**
Johnson の主張は、**客観的に不公平かどうかではなく、不公平に見えるかどうかが問題**だということ。
プレイヤーは霧の下を検算できないので、疑いだけが残る。

## 7-7. 素朴な霧の実装は、位置が動くたびに重くなる

- 出どころ：https://astralarchitects.itch.io/suits-of-the-abyss/devlog/717814/minimap-and-fog-of-war
- 分野：**7**

2-5 参照。スプライトマスクで円を重ねる方式にしたら重くなり、
「前回位置から一定以上離れたときだけ霧を剥がす」で間引いた。それでも足りない、と本人が書いている。

---

# 横断：探索の結果が「不確かな報告」として返る作り

> **依頼で特に厚く当たるよう指示された点。前例は多い。ただし多くは戦争ゲームとローグライクに在り、
> 「探索ゲーム」の看板の下には少ない。**

## U-1. 情報が古くなる（時間で腐る）

| 出どころ | 仕組み |
|---|---|
| Foxhole（https://foxhole.wiki.gg/wiki/Map_Intelligence） | 継続して見ていない対象のアイコンは薄れ、**10分未満で消える。**地域をまたぐと地図の情報は消去される |
| NetHack（https://www.nethack.org/v367/Guidebook.html） | 一度見た物は、**もう無くても表示され続ける。**「見るか触るか」するまで消えない |
| Combat Mission（https://steamcommunity.com/app/1369370/discussions/0/4712410385461689618/） | プレイヤーの実務知識として "The darker it is the more recent, the more faded out it is the older/less accurate it is."（**濃さ＝新しさ**）。マニュアル 43ページの "floating icons" に対応。既定の表示では区別しづらく、有志 MOD（"Vin CMSF2 Geometric Floating Icons"）で見分けやすくするのが定石になっている |

**共通しているのは「濃さ／薄さ」を確度の軸に使っていること。**
Combat Mission ではその既定の見せ方が弱すぎて MOD で補われている、という文句まで残っている。

## U-2. 情報の確度そのものを表示する

- 出どころ：https://steamcommunity.com/app/1369370/discussions/0/4712410385461689618/ （Steam。Combat Mission Shock Force 2）
  および https://combatmission.fandom.com/wiki/Spotting （**402 で開けなかった**。→ 末尾参照）
- 分野：**1・3**

開けた範囲から取れたのは：
- アイコンの濃淡が確度に対応する
- Engine Manual の 43ページに "floating icons" の説明がある
- 既定表示は見分けにくいという不満があり、MOD が定番になっている

**〔相場が取れなかった〕**：接触（contact）の「？」記号、透明度と確度の対応の公式な文言、音だけの接触（sound contact）の扱いは、
**開ける出どころからは取れなかった**（検索結果の要約には出るが、原典を開けていないので書かない）。

## U-3. 情報の中身を隠す（在ることは分かるが、何かは分からない）

- 出どころ：https://en.wikipedia.org/wiki/Block_wargame （Wikipedia "Block wargame"）／
  https://columbiagames.com/columbiablocksystem/ （Columbia Games 公式）
- 分野：**1・4**（**古い層：1972年**）

- 仕組み："the labeled side facing the owning player" とし、相手には "left unsure of the exact nature of piece"。
  **位置は見えるが、種類と質は見えない。**
- Columbia 公式："Each player's unit types and strengths are hidden from the other, giving a true fog-of-war feel that is vital to any combat simulation."
- 強さの段：ブロックを回して "up to four different levels of strength" を表す（従来のカウンターは2値が普通）。
- 歴史：**1972年**、Gamma Two Games の Lance Gutteridge が、サイコロより安いという理由で木のブロックを選んだ。
  最初の作品は *Quebec 1759*。1982年に Columbia Games に改称。
- **偽の駒**："A frequent feature of more unusual types of block games is that they'll often have phantom or fake blocks to enhance the fog of war."
  （＝**存在しない部隊を盤上に置ける**）
- 対照例：*Commands and Colors: Ancients* は両面表示にして**霧を無くした**。

**「位置は開示、正体は秘匿」「偽の駒を混ぜてよい」という二つの割り切りが、50年前に既に確立している。**

## U-4. 情報を人づてにする（噂）

- 出どころ：https://dwarffortresswiki.org/index.php/DF2014:Rumor （Dwarf Fortress Wiki）
- 分野：**1・4**

- "Rumors originally come from witnesses of the original event, but can then be spread to others who can, after having heard the rumor, spread it themselves."
- **重要な否定形（そのまま）**：
  > "In the current version, no false rumors will ever spread, barring those regarding events including individuals with secret identities, in which case the only misinformation will be regarding the true identity of those individuals."
- NPC は歴史的人物でなければ "a complete blank slate with almost no knowledge of anything" から始まる。
- 伝播："Once someone in a village knows of your deeds, the news will start spreading throughout the village, then to other nearby villages and then to places farther away (depending on how 'important' the news is considered to be)."

**噂の伝播を丸ごと作っている作品ですら、「嘘の噂は流れない」と明記している。**
唯一の例外が「正体を隠している者の身元」。
**＝「探索の報告が間違っている」を実装した例は、思ったより少ない。**

## U-5. 現実の地図では、間違いは何十年も残った

- 出どころ：https://en.wikipedia.org/wiki/Phantom_island （Wikipedia "Phantom island"）
- 分野：**4**（**古い層。設計の言い訳になる史実**）

- 定義："a purported island which has appeared on maps but was later found to not exist."
- 原因："navigational errors, mistaken observations, unverified misinformation, or deliberate fabrication"、
  蜃気楼・砕波・氷山・霧の誤認、火山活動や侵食で消えた島、
  そして **「盗用を見つけるための意図的な捏造」**（cartographic hoaxes to catch plagiarists）。
- 残った年数：
  - Dougherty Island：**1841〜1934**
  - Emerald Island：**1821〜1987**
  - Sandy Island：**1774〜2012**
  - Royal Company's Islands：1840年以降どの捜索でも見つからなかったが、海図から外れたのは **1904年**

**「一度地図に載った誤りは、否定する航海が要る」という構造が、そのまま遊びの骨になる。**

## U-6. 拾えなかったもの（この横断の穴）

- **「探索の報告が確率的に間違っている」ことを設計として説明した一次資料は、一本も見つからなかった。**
  探した言い方：`"unreliable information" exploration scouts report may be wrong design` /
  `"last known position" intel decay game mechanic` / `game design false report scouting` の三通り以上。
  出てきたのは、上の U-1〜U-3 のような**「古くなる」「確度を薄さで示す」「正体を隠す」**の三型だけで、
  **「積極的に嘘を返す」型は、盤上ゲームの偽ブロック（U-3）以外に確かめられなかった。**
- Kriegsspiel（1824年、審判が報告を書いて渡す方式）は検索では繰り返し出たが、
  **開ける一次／二次資料に当たれなかったので、この記録には入れていない。**（末尾参照）

---

# 開けなかったもの／確かめていないもの

**下記は開こうとして開けなかった。中身を見ていないので、この記録の本文では使っていない。**

| URL | 何が起きたか |
|---|---|
| https://www.roguebasin.com/index.php/Field_of_Vision | 403（ミラー https://chizaruu.github.io/roguebasin/field_of_vision で代替した） |
| https://www.resetera.com/threads/weve-been-absolutely-spoiled-with-some-amazing-open-world-games-but-there-has-to-be-a-better-way-to-uncover-a-map-than-ubisoft-towers-right.822981/ | 403。**塔への文句の掲示板層が、一番厚いはずの場所なのに取れていない** |
| https://combatmission.fandom.com/wiki/Spotting | 402（fandom.com は全て 402 で開けなかった） |
| https://supcom.fandom.com/wiki/Intel | 402。レーダーの ghost 表示・妨害による偽ブリップが取れなかった |
| https://edward-thomson.medium.com/preventing-cheaters-in-fog-of-war-games-69f202fbe107 | 403（medium.com は全て 403） |
| https://medium.com/@cordialkobold/interview-with-alex-beachum-creative-director-of-outer-wilds-a01bb9631e20 | 403 |
| https://media.gdcvault.com/GDC+2021/beachum_gdc_2021(1).pdf | 取得はできたが画像PDFでテキストが取れなかった |
| https://www.ieee-security.org/TC/SP2011/PAPERS/2011/paper032.pdf | 同上（OpenConflict 論文、map hack 対策の一次資料） |
| https://a-sharp.com/kodp/ios/KoDP-Manual.pdf | 同上（King of Dragon Pass 公式マニュアル） |
| https://courses.ems.psu.edu/geog486/node/906 | 認証必須（MacEachren の不確実性の可視化） |
| https://wustl.pressbooks.pub/digitalcartography/chapter/the-visualization-of-uncertainty/ | 403（同上） |
| https://psychologyfanatic.com/information-gap-theory/ | 403（Loewenstein 1994 の情報ギャップ理論） |
| https://ecampusontario.pressbooks.pub/studioskills/chapter/analysis-legibility-lynch/ | 403（Kevin Lynch の五要素） |
| https://beforeiplay.com/index.php?title=King_of_Dragon_Pass | 403 |
| https://manualzz.com/doc/o/qtlzm/cmbn-game-manual-v0.9_tut-floating-icons- | 403（Combat Mission マニュアル本文） |
| https://www.gamer.ne.jp/news/201709010048/ | 403（BotW CEDEC 2017 の三本目のレポート） |
| https://steamcommunity.com/app/304650/discussions/0/341537671988398590/ | 開いたが本文（投稿）が取れなかった（Sunless Sea のランダム地図への文句） |
| https://www.gonintendo.com/archives/246330-metroid-prime-s-scan-visor-was-nintendo-s-idea-says-former-retro-dev | 未開封（検索結果の要約のみ。Mark Pacini の「スキャンバイザーは任天堂の案」発言） |
| Kriegsspiel（1824）関係一式 | 検索結果の要約にしか当たれず、原典・解説とも未開封 |
