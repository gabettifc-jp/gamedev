# ゲームの素材（絵と音）の管理 — 生の調査記録

- 調べた日：2026-08-24
- 集めた者：`genre-research`（ジャンルではなく「題」として呼ばれた）
- **実装・spec は一度も開いていない。**ネットから集めたものだけ
- 渡された分野は七つ：
  1. 一覧の作り方（asset list / asset inventory）
  2. 命名規則（naming convention）
  3. スプライトシートの作法（sprite sheet / texture atlas）
  4. 音の中間管理層（audio middleware / event layer）
  5. 足りない素材の扱い（placeholder / missing asset）
  6. 作り直しの単位（re-generation / iteration granularity）
  7. 失敗した話
- **相場には前提がある。**ここに書いたものは全部「その出どころの前提の下で成り立った話」であり、
  こちらで成り立つかは確かめていない。確かめていないものは「確かめていない」と書く
- 末尾に「開けなかったもの」の節がある。**消さないこと**

---

## 1. 一覧の作り方（asset list / asset inventory）

### 1-1. Joost van Dongen「The Game Asset Pipeline」（2007年8月6日・修士論文・ユトレヒト芸術大学）

- 出どころ：https://proun-game.com/Oogst3D/ARTICLES/TheGameAssetPipeline.pdf
- 書いた人：Joost van Dongen（Ronimo Games の共同創業者。当時は学生・プロジェクトリード兼唯一のフルプログラマ）
- 日付：2007-08-06。指導教員 Jeroen van Mastrigt。EMMA Game Design & Development
- 分野：1（数える単位）、5（正しさの検査）、6（作り直しの単位）、7（失敗した話）
- 一次資料（本人が書いた学位論文）。ただし2章は **Ben Carter『The Game Asset Pipeline』(2004, Charles River Media, ISBN 1-58450-342-4) の要約**であると本人が明記している。
  さらに一次を辿るならその本
- **PDFはWebFetchでは読めず、エラー文に出たローカルパスを `Read` に渡して全文（31ページ）取得した**

「素材」の定義（Noel Llopis, Game Developer Magazine 2004 "Optimizing the Content Pipeline" からの引用）：

> "Game assets include everything that is not code: models, textures, materials, sounds,
> animations, cinematics, scripts, etc." [Llopis2004]

パイプラインの定義（同じく Llopis の引用）：

> "The content pipeline is the path that all the game assets follow, from conception until
> they can be loaded in the game."

**数える単位について**（1章）：

> "A single character might require dozens of animations and lines of text and a
> game often has dozens of characters. Not only characters, but also levels are needed,
> maybe weapons, cinematics, music. An average game today easily contains thousands
> of assets."

図1a の説明：一人のキャラクターに、3Dモデル・diffuse/normal/specular の三枚のテクスチャ・
セリフ（dialogue）・効果音・アニメーション群がぶら下がる、という絵になっている。
**つまり「登場物ごと」に数えて、その下に「種類ごと」がぶら下がる形。**

> "Figure 1a: A single character already requires many different assets"

コードと素材の違い（一覧の粒度に効く）：

> "The different programming files are much more inter-dependent than other assets and
> code is much smaller. Even on larger projects, the total size of all the code in the game
> will probably still be smaller than a single Photoshop file that stores only one texture."

**メタデータ（一覧の「列」にあたるもの）**（2.9節）：

> "Along with what platform the asset is for, the meta-data might also contain information
> about whether an object is transparent, whether it is a character or a piece of furniture,
> etcetera. This way all files with a certain property can quickly be found.
> **The down-side of using meta-data is that it only works if the developers consistently fill it in.
> This is often forgotten or ignored, thus making the meta-data incorrect and useless.
> Forcing the developer to fill it in when committing a file might be a good idea in this case.**"

→ **一覧の列は「埋めるのを強制しないと腐る」**という指摘。埋める機会を commit 時に固定する、という解。

**素材の作り手を一グループとして扱う**（4.1.1節）：

> "The developers are split in only two groups here: asset developers and programmers.
> Normally, asset developers are split into further groups, like artists, level designers,
> game designers, sound designers and composers... However, from the perspective of the
> pipeline, all of these people create assets."

**パイプラインの処理は四分類**（4.1.3節・図4c）：

> "- Exporting is the process of converting data from the asset creation tool (e.g. Photoshop,
>   3D Studio MAX) to the format that the game can load.
> - Checking correctness is the step where bugs in the assets are automatically searched for,
>   like for example audio files that have the wrong bitrate for the game.
> - Data that is pre-computed is for example the lighting of an environment or the data needed
>   to plan the paths of the enemies through a level.
> - Optimising assets is done to increase the framerate..."

**前提**：2007年の、3D・チーム開発・パブリッシャ有りの前提。
一人で作る2Dの小品にそのまま当たるかは**確かめていない**。ただし
「素材の作り手は一グループ」「メタデータは強制しないと腐る」は規模に依らない指摘に見える。

### 1-2. Autodesk Flow Production Tracking（旧 ShotGrid / Shotgun）ゲーム向け入門

- 出どころ：https://help.autodesk.com/cloudhelp/ENU/SG-GetStarted/files/gs-games/SG_GetStarted_gs_games_gs_games_data_html.html
- 書いた人：Autodesk（公式ドキュメント）。日付表示なし（2026-08-24 に閲覧）
- 分野：1
- 一次資料（ツールの作り手による公式文書）

実務で動いている表の形が、そのまま entity として出ている：

- **Asset**（一件＝一つの登場物・物）。持つ列は asset name / asset type / description /
  complexity（取り込み時に作った独自列）
- **Asset Type**：`Player Character` / `Environment` / `Creature` / `Prop`
- **Pipeline Steps**（一つの Asset が通る工程）：`Concept, Model, Materials, Lighting, Rig, Integration` の六段
- **Task**：Asset × Pipeline Step の交点。列に Reviewer / bid（見積り）/ Sort Order（並び順）
- そのほか：サムネイル、開始日、期日、タスクの依存関係

**表計算からの取り込み手順**（原文の要点）：

1. スプレッドシートからブラウザにコピー＆ペースト、または Excel ファイルをドラッグ＆ドロップ
2. 列を Flow の項目に対応づける
3. 足りない項目はその場で作る
4. **識別子（Asset Name など）を指定して、既存レコードの更新にする**
5. エラーを解消する。原文：*"caught an error from our spreadsheet and will not include a duplicated row"*
   （＝**重複行は取り込み側が弾く**）
6. リンク先の entity（level など）が無ければ、その場で作る

→ **「一覧の単位＝登場物（Asset）」「工程は列」「一つのマスがタスク」**という形。
数えるのは物であって、コマではない。コマ数は complexity のような独自列に落ちている。

**前提**：チーム・分業・レビュー担当がいる前提。一人開発では Reviewer 列が空になる。
ただし **Asset × 工程 の格子**という形そのものは一人でも使える（**確かめていない**）。

### 1-3. Asset Logger（itch.io・個人ツール）— 表計算で管理することへの文句

- 出どころ：https://madteapartydevelopment.itch.io/asset-logger
- 書いた人：Mad Tea Party Development。日付表示なし（2026-08-24 に閲覧）
- 分野：1、7（失敗した話に近い）
- 一次資料（作った本人の説明文）

原文に近い書き起こし：

> "Manually tracking assets in spreadsheets is slow, error-prone, and easy to forget."

代わりに要るのは *"a guided workflow that guarantees accuracy"*。

**強制的に埋めさせる六項目**：

1. Platform（例：Fab, Unity Store, Unreal Marketplace）
2. Location in game（ゲーム内のどこで使うか）
3. Usage in game（何に使うか）
4. Asset name
5. Asset creator
6. License type

CSV の書式：`Platform,Location,Use,Asset Name,Asset Maker,License Type`

**手作業の表計算の痛点として挙げられているもの**：

- 複数の文書を行き来する（juggling multiple documents）
- 同じ情報を何度も打ち直す（re-typing identical information across entries）
- 重複・抜けの危険（duplicate or missing entries）
- 書式が揃わない（inconsistent formatting）
- 検証の仕掛けが無い（lack of validation safeguards）

→ **この六項目は「買ってきた素材」向け**（Platform / License Type がある）。
自作素材の一覧とは列が違う。**「一覧」は一枚では済まない**という示唆。

**前提**：外部素材を買って使う小規模開発。自分で全部作る場合は Platform/License 列が無意味になる。

### 1-4. Indiana Game Design Document Template「Detailed Asset Lists」

- 出どころ：https://sites.google.com/view/indiana-game-design-template/detailed-asset-lists
- 書いた人：教育用のGDDテンプレート（Indiana）。日付表示なし（2026-08-24 に閲覧）
- 分野：1
- 二次的（教材）。中身は薄い。**取れたのは「いつ作るか」だけ**

> "You should begin building these even during the prototyping phase, and have complete
> lists prior to entering production."

> "these docs and spreadsheets must be kept up to date"（作った後も更新し続けろ）

目的：一覧の分量そのものが**規模の見積り**になり、scope creep を防ぐ。

**列の内訳・数える単位・コマ数を書くかは、このページには書かれていない。**
（リンク先の "Game Objects" "Art and Sound Assets" にあるらしいが、そこは開いていない）

### 1-5. アートバイブルに載る「マスターリスト」（英語圏の相場）

- 出どころ：https://nastyrodent.com/game-art-bible/ （2026-08-24 閲覧、日付表示なし）
- 分野：1
- 二次（まとめ記事）

art bible に入れるものとして挙がっているのは六つ：

- Visual pillars と参照点
- 形と輪郭の規則（shape language and silhouette rules）
- 色・光・材質の論理（"rules: which colors carry narrative weight, how material families are
  expected to behave under the target lighting"）
- **カテゴリ別の参照シート**（characters / environments / props / UI）
- やってよいこと・悪いことを**絵で**示す（Do's and don'ts shown visually）
- **持ち主と版（Ownership and versioning）**

分量について、著者の主張：

> "restraint across all six categories, not exhaustive detail in one of them. A concise,
> well-organized art bible with strong visual examples outperforms an exhaustive one."

**この記事はテクスチャ解像度・命名規則・pivot・ポリゴン予算には触れていない**（確認済み）。
つまり **art bible は「見た目の規約」で、「素材の一覧」とは別物**として運用されていることが多い。
ただし別の出どころ（GameDev.net の議論）では、art bible に
「必要なアニメーションの一覧」「必要なアイコンの一覧」「使う外部素材とライセンスの一覧」を
入れるとされており、**相場が割れている**（→報告参照）。
なおその GameDev.net のスレッド本体は 403 で開けなかった（末尾の一覧に入れてある）。

---

## 2. 命名規則（naming convention）

### 2-1. Allar「Unreal Engine 5 Style Guide」（GitHub・広く使われている非公式の正典）

- 出どころ：https://github.com/Allar/ue5-style-guide
- 書いた人：Michael Allar。UE4版から続く。**Epic 公式ではないが、事実上の標準として引かれている**
- 分野：2
- 一次資料（規約そのもの）

**書式**：`Prefix_BaseAssetName_Variant_Suffix`

各部の役割（原文）：

> "All assets should have a _Base Asset Name_. A Base Asset Name represents a logical
> grouping of related assets."

- **Prefix**：種類で決まる略号
- **BaseAssetName**：短く、文脈から分かる名前
- **Variant**：論理的な部分集合を表す語、または**二桁の番号**（01, 02...）
- **Suffix**：種類で決まる

**なぜそうするか**（原文）：

> "Naming conventions should be treated as law. A project that conforms to a naming
> convention is able to have its assets managed, searched, parsed, and maintained with
> incredible ease."

→ **理由は「機械で扱えること」**（managed, searched, **parsed**, maintained）。
見た目の分かりやすさではなく、**パースできることが理由に挙がっている。**

種類ごとの略号（抜粋）：

| 種類 | 接頭 | 接尾 |
|---|---|---|
| Blueprint | `BP_` | — |
| Material | `M_` | — |
| Static Mesh | `S_` | — |
| Skeletal Mesh | `SK_` | — |
| Texture | `T_` | `_D`, `_N`, `_R`, `_A` など |
| Particle System | `PS_` | — |
| Widget Blueprint | `WBP_` | — |

**名前に入れてはいけないもの**（原文の禁止一覧）：

- "White space of any kind"（空白は一切禁止）
- "Backward slashes `\`"
- "Symbols i.e. `#!@$%`"
- "Any Unicode character"（**Unicode は一切禁止**）

使ってよいのは `[A-Za-z0-9_]` だけ。

**前提**：Unreal・チーム・Content Browser で検索する前提。
「Unicode 禁止」は日本語名を全部弾く規則である。日本語のフォルダ名を使う流儀（下の 2-5）と**真っ向から割れている**。

### 2-2. Epic Games 公式「Recommended Asset Naming Conventions in Unreal Engine projects」

- 出どころ：https://dev.epicgames.com/documentation/en-us/unreal-engine/recommended-asset-naming-conventions-in-unreal-engine-projects
- 書いた人：Epic Games（公式ドキュメント。UE 5.8 版）。2026-08-24 閲覧
- 分野：2
- 一次資料

**書式**：`[AssetTypePrefix]_[AssetName]_[Descriptor]_[OptionalVariantLetterOrNumber]`

各部（原文）：

- **AssetTypePrefix** … "identifies the type of Asset"
- **AssetName** … "the Asset's name"
- **Descriptor** … "provides additional context for the Asset, to help identify how it is used.
  For example, whether a texture is a normal map or an opacity map."
- **OptionalVariantLetterOrNumber** … "optionally used to differentiate between multiple
  versions or variations of an asset"

目的：大きなプロジェクトで "locate files and prevent potential conflicts or ambiguity"。

種類の接頭辞の表は General / Blueprints / Particle Effects / Skeletal Mesh Animations /
ICVFX / Animation / Media / Other に分かれ、30種以上（`M_` Material、`SK_` Skeletal Mesh、
`BP_` Blueprint、`FXS_` Niagara System など）。

**この規約は Epic が In-Camera VFX Production Test などのサンプルで実際に使っている名前の書き起こし**
だと明記されている。また **「これは推奨であり、プロジェクト固有の要件が優先する」**とも書かれている。

→ **Allar 版（Prefix_Base_Variant_Suffix）と Epic 公式（Prefix_Name_Descriptor_Variant）で、
「用途を表す語」と「版・変種の番号」の順序が逆。**これは相場が割れている箇所（→報告）。

### 2-3. Diversion「How Naming Conventions Can Boost Your Game Dev Workflow」

- 出どころ：https://www.diversion.dev/blog/how-naming-conventions-can-boost-your-game-dev-workflow
- 書いた人：Diversion（ゲーム向けVCSを売っている会社のブログ）。2026-08-24 閲覧
- 分野：2、6（版と差し替え）
- 二次的（自社製品への誘導がある）。ただし**版番号の扱いについての具体的な数字が取れる唯一の出どころ**だった

種類の接頭：`TEX_`（テクスチャ）、`S_`（音）、`MAT_`（マテリアル）、`M_`（メッシュ）。
テクスチャの接尾：`_C`（colour map）、`_N`（normal）、`_R`(roughness)、`_MT`（metallic）。
持ち主のタグ：`CH-Mage`、`ENV-Village`。動きの接尾：`_idle`、`_run`、`_attack`。

**版番号について**（この題でいちばん要る箇所）：

> 版番号を名前に入れる開発者はいる。ただし
> "enough digits to avoid conflicts later on or weird reordering in lists"
> ＝**桁数を十分に取れ**。例：`M_Skeleton_001.fbx` → `002` → `341`。
> **三桁にしておくと、10を超えても名前順が時系列と一致し続ける**

**そして版番号への否定的な評価**（要約でなく主旨をそのまま）：

> この版管理を維持するのは苦痛で、版ごとに何がどう変わったかを名前から知ることはできない。
> **名前に番号を振るやり方は、そこまでしか効かない。**代わりに VCS を使え

比較例：`blue_character_v4.png` ではなく `hero_sprint_001_diffuse.png` にせよ。
→ **「v4」のような漠然とした版番号は、名前から中身が分からないので悪い**という主張。

**注意：この記事は「生の素材と書き出し後をどう分けるか」には触れていない。**確認済み。

**前提**：VCS（Diversion 自身）を使う前提。VCS が無い場所では版番号を名前に入れるしかないので、
「番号を入れるな」はそのままは使えない（**こちらで成り立つかは確かめていない**）。

### 2-4. Unityアセット整理の基本（日本語・2025年9月24日）

- 出どころ：https://cbagames.jp/2025/09/24/unity-asset-management/
- 書いた人：C-BA Unity-memo。2025-09-24
- 分野：2
- 二次的（実務のまとめ）

- **Assets 直下を整理状態に保つ。**自作と外部を分けるために `_Project` / `Plugins` のような
  **ルートフォルダ分離**を置く
- フォルダの並べ方は二通り
  - **アセットタイプ別**（Scripts / Scenes / Prefabs / Materials …）… 初心者向け
  - **機能・特徴別**（Player / Enemy / UI …）… 中〜大規模・チーム開発向け
- 命名は `Prefix_BaseName_Variant_Suffix`。例：`P_Player_Weapon`、`M_Enemy_Body`
- 主張の核：**「フォルダ構成・命名規則・運用ルールをセットで考えることが最重要」**。
  どれか一つだけでは機能しない

→ **「生の素材と加工後を分ける」ではなく「自作と外部を分ける」**が、この記事の分け方の軸。
2-3 とも 1-3（Asset Logger の Platform/License 列）とも整合している。

### 2-5. ゲームUIデザインのガイドライン（日本語・フォルダ構成と命名規則）

- 出どころ：https://hanasaqutto.com/3248/game_ui_guideline/game-ui-design-guidelines/
- 書いた人：はなさくっと。日付表示は取れなかった（2026-08-24 閲覧）
- 分野：2、1（画面ごとに一フォルダ＝数える単位）
- 一次に近い（実務者本人の運用の書き起こし）

**フォルダの先頭に三桁の数字を付ける。**理由は「後でフォルダを追加するときに役立つ」——
`010_企画・仕様` と `020_デザイン` の間に `011_調査` を差し込める。

```
プロジェクト名
├── 000_スケジュール
├── 010_企画・仕様
├── 020_デザイン
└── 090_確認
```

`020_デザイン` の直下：

- `010_UIデザイン` … **各ページ（画面）単位で1フォルダを作成**
- `020_イラスト` … キャラクターと背景を分類
- `030_ストア` … アプリストア用素材

共通パーツ：

```
000_Common
├── 010_Jp
├── 020_En
└── 999_Font
```

インゲーム画面（**生の素材と書き出し後の分け方が、ここに明確に出ている**）：

```
040_Game
├── 010_Jp
│   ├── 01_Screen （画面レイアウト確認用画像）
│   ├── 02_Assets （個別に書き出したパーツ画像）
│   └── 03_Psd   （オリジナルUIデザインデータ）
└── 020_En
```

→ **`03_Psd`（生）／`02_Assets`（書き出し後）／`01_Screen`（並べて確認する用）の三段。**
「確認用の合成画像」を三つめの層として持っているのが特徴的。

**レイヤー名の命名規則**：`先頭 + サイズ + 固有名詞 +（番号）+（末尾）`

先頭（抜粋）：

| 名前 | 説明 |
|---|---|
| `gtxt_` | グラフィカルテキスト |
| `dtxt_` | ビットマップフォント化画像 |
| `btn_` | ボタン画像 |
| `parts_` | 各種パーツ画像 |
| `effect_` | エフェクト画像 |

サイズ：`_xs_` `_s_` `_m_` `_l_` `_xl_`。末尾で言語を区別：`_jp` `_en`。

**設計思想（原文に近い）**：

> 「最小工数で、UIガイドラインを作成しなくても他の人が分かるようなデータにする」
> **「画像を名前順でソートした時に、必要な素材を探しやすいか」**を重視する。
> ただしパーツが増えると完全な統一は難しい、とも書いている

→ **命名の目的が「名前順にソートしたときの並び」に置かれている。**
Allar の「パースできること」と、目的が違う。**同じ規則でも理由が二通りある。**

**前提**：Photoshop・レイヤー単位で書き出す、ローカライズ有りの前提。
言語が一つで書き出しが自動なら `_jp` は不要になる（**確かめていない**）。

---

## 3. スプライトシートの作法（sprite sheet / texture atlas）

### 3-1. TexturePacker 公式ドキュメント「Texture Atlas Settings」（CodeAndWeb）

- 出どころ：https://www.codeandweb.com/texturepacker/documentation/texture-settings
- 書いた人：CodeAndWeb GmbH（TexturePacker の作り手）。2026-08-24 閲覧
- 分野：3
- 一次資料（道具の作り手の公式文書）。**この題でいちばん数値が取れる出どころ**

**余白は三種類あって、別物である**（ここを混ぜると事故る）：

| 名前 | 原文 | コマンドライン |
|---|---|---|
| Shape padding | "Shape padding is the space between sprites. Value adds transparent pixels between sprites to avoid artifacts from neighbor sprites." | `--shape-padding <number>` |
| Border padding | "Border padding is the space between the sprites and the border of the sprite sheet. A value >0 adds transparent pixels around the borders of the sprite sheet." | `--border-padding <number>` |
| Extrude | "Extrude repeats the sprite's pixels at the border. **Sprite's size is not changed.**" | `--extrude <number>` |

**推奨値（数値のまま）**：

> Shape padding は **OpenGL で描くなら最低 2**。隣のスプライトの画素を引きずり込まないため

Extrude の用途（原文の要点）：
隣り合わせに並べたときのちらつきを減らす／タイルマップでスプライトの輪郭の品質を確かめる。

**Trim Mode（透明の余りを削る）は五通り**：

- **None** … 何もしない
- **Trim** … 透明を取り除くが、**見かけの元の大きさは保つ**
- **CropKeepPos** … 透明を取り除き、**アンカー位置は保つ**
- **Crop** … 透明を取り除き、**位置を 0/0 に戻す**
- **Polygon** … 輪郭を多角形で近似して、いちばん詰まるようにする

→ **`Crop` は位置を 0/0 にリセットする。**ここが「コマが枠から切れる／ずれる」の元。
**同じ列に `Trim` と `Crop` が並んでいて、名前だけでは区別がつかない。**

Size Constraints（シートの大きさの制約）：

- **POT** … 2の冪（256, 512, 1024 …）
- **MultipleOf4** … 4の倍数
- **WordAligned** … 16bit 形式に合わせる
- **AnySize** … 制限なし。いちばん小さい寸法になる

Scale：`--scale <float>`（既定 1.0）。倍率違いを複数作るときは Scaling variants を使う。

### 3-2. Pivot（原点）と、コマの大きさを揃える規則

- 出どころ：https://virtuall.pro/blog/how-to-make-sprite-sheets （Virtuall Blog、2026-08-24 閲覧）
- 分野：3
- 二次（まとめ記事）。ただし**「コマが切れる／揺れる」問題の直接の答えがここにある**

原文：

> "Every single frame in an animation sequence **must** have the exact same dimensions.
> Even if a frame has less visual content, do not crop it."

理由：切ると再生時に *"a jittery, misaligned appearance"* になる。
一つの動き（走りなど）の中でコマの寸法を揃えることが、**原点（pivot）を動かさないための条件**。

**余白の数値**：

> テクスチャの滲み（texture bleeding）は "when pixels from a nearby sprite appear on the edges
> of another one"。**"Just 2-4 pixels of padding is usually enough to resolve this issue."**

**2の冪**：

> "A sprite sheet that's **1024x1024** pixels will almost always be more memory-efficient and
> perform better than one sized at something arbitrary like 980x1150 pixels."

**シートを分ける基準**：

- 一つにまとめる：主人公の run / jump / idle / attack は**同じシートに置く**
  （テクスチャの切り替えを減らすため）
- 分ける：*"Your hero's animations should not be on the same sheet as an enemy's."*
  → **分ける単位は「登場物」。動きごとではない。**

TexturePacker 側の pivot の説明（3-1 と同じ出どころ群より）：

> pivot point（anchor point）は、回転と配置の中心としてスプライト内のどこを使うかを指す。
> TexturePacker には pivot 編集器があり、動きの実時間プレビューを見ながら直せる

**前提**：2D・スプライトを回転させる／位置合わせする前提。
回転しない固定表示だけなら pivot のずれは出にくい（**確かめていない**）。

### 3-3. 滲み（bleeding）の原因と、ミップとの関係

- 出どころ：https://bugnet.io/blog/how-to-fix-texture-bleeding-and-seams-in-an-atlas （Bugnet Blog、2026-08-24 閲覧）
- 分野：3
- 二次（技術ブログ）

原文に近い書き起こし：

> **"Texture bleeding is sampling across sprite edges in the atlas."**

対処：

1. **余白（gutter）**：*"Pack the atlas with a gutter of a few pixels between sprites"*、
   滲みが見えたら増やす。**この記事は具体的な画素数を書いていない**
2. **辺の押し出し（extrusion）**：*"Bleed each sprite's edge pixels into its padding so any sample
   just past the edge reads the sprite's own color rather than empty space or a neighbor."*
   → 拡大縮小しても継ぎ目が出なくなる
3. **ミップマップ**：**"Mipmaps blend across edges at distance and worsen bleeding."**
   UI と大きさ固定のスプライトはミップを切る。切れないなら
   **「使う中でいちばん低いミップに耐えるだけの余白」**を取る

→ **余白の必要量はミップの段数で決まる。**「2px あればいい」はミップ無しの前提の話である。
（3-2 の「2〜4px」も、ミップ無しの前提と読むべき。**確かめていない**）

なおこの記事は filter mode と pixel snapping には触れていない（確認済み）。

### 3-4. 現場の議論：余白を入れても滲みが直らなかった話（Unity Discussions）

- 出どころ：https://discussions.unity.com/t/2019-4-using-sprite-atlas-tilemap-still-bleeds/816253
- 書いた人：Unity フォーラムの利用者たち＋Unity スタッフ。Unity 2019.4 時点の話
- 分野：3、7
- **議論が残っている層。**作り手の資料には出ない

現場の声（原文に近い）：

> **"Unity only allows for 2,4,8. I tried all of those values but nothing worked."**
> （Sprite Atlas の padding は 2/4/8 しか選べず、全部試したが直らなかった）

実際に効いたもの：

1. **手で各タイルの周りに1画素足す**：*"What worked though was if I went back and manually
   surround each tile with 1 extra pixel"*
2. Sprite Atlas を作ること自体：*"creating the Sprite Atlas did indeed fix the issue."*
3. 決定打：**"All you have to do is set the sprite packer to 'Always Enabled'"**
   （ビルドでも Play モードでも直った）

その他の条件：タイル 160px、PPI 160。Cinemachine で pixel snapping は使っていなかった
（「余白だけで足りるはず」と思っていた）。

Unity スタッフの発言：**2020.1 以降の新規プロジェクトではこれが既定になるはずだが、
古い版から上げてきた場合は手で有効にする必要がある。**

→ **「設定は正しいのに直らない」の正体が、道具の既定値だった。**
これは 5（欠品の検出）にも 7（失敗した話）にも掛かる。

### 3-5. 9スライスの三つの表し方が、枠組みごとに違う

- 出どころ：https://www.codeandweb.com/texturepacker/knowledgebase/nine-scale-borders
- 書いた人：CodeAndWeb（TexturePacker の作り手）。2026-08-24 閲覧
- 分野：3
- 一次資料

**同じ 100x100 のスプライトを、三通りの言い方で表す**：

| 呼び方 | 何を書くか | 100x100・枠20 の例 | 使っている枠組み |
|---|---|---|---|
| **Borders（固定領域）** | 拡大しても変わらない縁の幅 | `20,20,20,20` | Unity |
| **Scale Rectangle（内側の伸びる矩形）** | 内側の矩形の位置と大きさ | 位置 `(20,20)` 大きさ `60x60` | Phaser |
| **Padding（中身を置く領域）** | 拡大後のスプライトの中に、文字などを置く範囲 | — | Android `.9.png` など |

原文：

> Some frameworks like Unity expect "the width of the **fixed borders**"...
> Other frameworks such as Phaser ... expecting "the position and size of the
> **inner, resizable rectangle**" instead.
> Some frameworks also support "**paddings** (or a fill area) to position extra content within
> a scaled sprite (e.g, a button text)."

TexturePacker は Android の `.9.png` から padding を読んで書き出せるが、
**TexturePacker の画面から padding を直接いじることはできない。**

→ **同じ数値でも「縁の幅」なのか「内側の矩形」なのかで意味が真逆。**
移植時にここで壊れる。

### 3-6. 9スライスの落とし穴（縁より小さく描いたとき）

- 出どころ：検索結果の要約経由で得た（複数の記事が同じことを言っている。
  代表：https://generalistprogrammer.com/tutorials/nine-slice-scaling-explained 、
  https://bugnet.io/blog/how-to-fix-unity-nine-slice-image-border-stretching-corners ）
- 分野：3
- 二次。**本文を開いていない記事の主張は書かない**という決まりに従い、
  ここは「探した言葉と、複数の記事が共通して言っていたこと」のみ記す。
  **一次に当たれていないので、採用の前に確かめること**

共通して出てきた主張（未検証）：

- 角を守るのが 9スライスの本体。伸ばしてよいのは平らな辺と中央だけ
- **パネルを (左の角幅 + 右の角幅) より小さく描くと、角どうしが重なって壊れる。
  最小の大きさで頭打ちにすること**
- 模様のある縁は Stretch ではなく Repeat にしないと、伸びて汚くなる
- ドット絵の UI は Filter Mode = Point、Compression = None、
  Pixels Per Unit を絵の画素の大きさに揃える。
  **圧縮は小さい UI では割に合わない**（にじみ・色ずれのほうが損）

---

## 4. 音の中間管理層（audio middleware / event layer）

### 4-1. FMOD Studio のイベント巨視制御（Event Macro Controls）— 同時再生の上限と、あふれたときの捨て方

- 出どころ：https://javierzumer.com/blog/2022/2/26/fmod-event-macros
- 書いた人：Javier Zúmer（ゲームオーディオの実務者）。2022-02-26
- 分野：4
- 二次に近い一次（実務者が公式の項目を解説している）。
  **一次は FMOD 公式の "Event Macro Controls Reference"
  （https://fmod.com/resources/documentation-studio?page=event-macro-controls-reference.html&version=2.1 ）。
  この公式ページは本文が空で返ってきたので開けていない**（末尾の一覧に入れてある）

**Max Instances**：

> "This value limits the amount of instances in total that can play at the same time."

著者の注：これは必ずしもイベントの同時発音数と等しくない（既定のエミッタで one-shot を使う場合を除く）。
柔軟に制御したいなら自前のエミッタクラスを書け。

**あふれたときの捨て方（Stealing）は五通り**（この五つが、この題でいちばん効く相場）：

| モード | 原文 | 向いている場面 |
|---|---|---|
| **Oldest** | "Stop the instance that started the longest time ago." | ぶつかり音が大量に出るとき（壁が崩れて瓦礫が床に当たり続ける、など） |
| **Furthest** | "Stop the instance that is the furthest from the listener." | — |
| **Quietest** | "Stop the least audible instance."（距離減衰を考慮した上で最も聞こえないもの） | — |
| **Virtualize** | "Works like the quietest but the instance is not stopped but virtualized" — 作られて再生はされるが、空きが出るまで音が出ない | 環境音（地下迷宮の松明が何本もある、など） |
| **None** | "No stealing, so the new instances just don´t play until an existing instance stops." | — |

→ **「あふれたら新しい音が鳴らない（None）」と「あふれたら古い音を止める（Oldest）」は真逆の手触りになる。
既定がどちらかで、遊んだ感じが変わる。**

**Priority**：これは voice の優先度であって instance の優先度ではない。

> "Higher priority voices will be able to steal lower priority voices.
> The 'Highest' priority will never be stolen."

エンジンの voice 上限に達したときに効く。

**Cooldown**：

> "This option allows you to have a minimum time between instances.
> This is very useful to prevent spamming."

著者の助言：**これは最後の安全網として扱え。**まずコード側で連打の原因を潰すべき。

### 4-2. FMOD の Virtual Voice System（仮想ボイス）

- 出どころ：検索結果の要約経由。**一次の FMOD Low Level API ドキュメント
  （https://documentation.help/fmod-studio-api/virtualvoices.html ）は 403 で開けなかった**（末尾の一覧）
- 分野：4
- **本文を開けていないので、ここは「探して出てきた説明」であり、採用前に一次で確かめること**

要点（未検証）：

- FMOD Low Level には仮想ボイスの仕掛けがあり、**何百〜何千の音を「再生中」にしたまま、
  実際に音を出すのはごく少数**にできる
- 実時間の可聴性（audibility）で、仮想と実体を動的に入れ替える。
  遠い／音量の低い音は仮想になり、近づく／大きくなると実ボイスに戻る
- ゲームの voice 上限に達すると盗み（stealing）が始まり、優先度の高いボイスが低いものを奪う。
  **優先度が高ければ、どれだけ小さい音でも奪われない**

### 4-3. Wwise 側の同じ問題（playback limit / volume threshold / virtual voice）

- 出どころ：検索結果の要約経由。
  **Audiokinetic の該当ページ（https://www.audiokinetic.com/naming-convention-best-practices 、
  Wwise User's Guide 第11章の manualzz 版）は両方とも 403**（末尾の一覧）
- 分野：4
- **一次に届いていない。**用語だけ控える

出てきた用語と説明（未検証）：

- **Playback limit** … 同時に鳴らせる sound / music / motion の instance の上限。
  **仮想ボイスは数に入らない**
- **Volume Threshold** … 音量の敷居。これを下回ったものは切られる。
  「ゲーム中の音の大半はこの仕掛けで間引かれる」
- **Virtual voice list** … 音を処理せずに、一部の変数だけを見張っておく場所。
  音量に応じて実ボイスと行き来する
- 優先度・仮想ボイスの挙動・ボイス上限の三つで資源を抑える

→ **FMOD と Wwise で名前は違うが、解いている問題は同じ。
「上限」「優先度」「あふれたときの規則」「小さい音を切る敷居」の四点セット。**

### 4-4. 中間管理層は何を解いているのか（イベントとファイルの分離）

- 出どころ：https://kindatechnical.com/game-development/audio-middleware-fmod-and-wwise.html
  （2026-08-24 閲覧、日付表示なし）
- 分野：4
- 二次（教材的なまとめ）

**何を解いているか**（原文）：

> "Building a complete audio system from scratch — mixing, streaming, spatialization,
> compression, platform abstraction, authoring tools — is an enormous engineering effort."

**イベントとファイルの分離**：
生の音ファイルを鳴らすのではなく、**名前の付いた Event を叩く。**
Event の中には "multiple sounds, random containers, sequences, and parameter-driven behavior"
が入る。これによって音の担当がコードを書かずに挙動を作れる。

**バス（ducking はここに入る）**：

> "Buses: Mixing groups (SFX, Music, Dialogue, UI) with independent volume, effects,
> and **ducking rules**."

例：

- FMOD … ライフルの発砲、RPM と負荷を変数にした車のエンジン音
- Wwise … 足音を地面の種類（木・金属・草）で変える、音楽の状態遷移（探索／戦闘／ボス）

別の出どころ（`strayspark.studio` の比較記事の要約より、**本文は開いていない**）で出てきた言い回し：

> イベントは「これを鳴らせ」という命令ではなく、**「何かが起きた」という情報**であり、
> それを受けて何をするかは音の担当が決める

→ **この一行が、この分野の核だと思われる。ただし一次に当たれていない。**

**前提**：音の担当が別にいて、コードを触らない前提。
一人で全部作る場合、この分離の利得は「担当の独立」ではなく
**「差し替えたときにコードを直さなくていい」**の側だけになる（**確かめていない**）。

### 4-5. 軽い版（Web Audio・小規模）— howler.js の実際の既定値

- 出どころ：https://github.com/goldfire/howler.js/
- 書いた人：GoldFire Studios（James Simpson）。2026-08-24 閲覧
- 分野：4
- 一次資料（ライブラリの公式 README）

**数値がそのまま取れる**：

| 設定 | 既定 | 原文 |
|---|---|---|
| `pool` | **5** | "The size of the inactive sounds pool. Once sounds are stopped or finish playing, they are marked as ended and ready for cleanup." |
| `html5PoolSize` | **10** | "Each HTML5 Audio object must be unlocked individually, so we keep a global pool of unlocked nodes to share between all `Howl` instances." |
| `sprite` | `{}` | オフセットと長さ（ミリ秒）で、一本のファイルの中の区間に名前を付ける。第三引数でループ指定 |

- `play()` は個別制御用の sound ID を返す。一つの Howl から複数の instance を同時に鳴らせる
- **audio sprite**：効果音ごとにファイルを分けず、一本にまとめて区間で呼ぶ。
  `audiosprite` というツールで定義を作るのが推奨されている
  → **音にもスプライトシートがある。**分野3と同じ発想

**壊れ方（議論の層）**：`html5PoolSize` を使い切ると、ブラウザに

> "HTML5 Audio pool exhausted, returning potentially locked audio object."

が出る（GitHub issue #1110）。
原因はホバーのたびに新しい Howl を作っていたこと。**本文は issue 本文しか取れず、
返信・解決策は取れなかった。**

**同時再生数の相場**（検索結果の要約経由・**本文未確認**）：

> howler.js で **50 個の重なりは問題ないが、500 になると崩れ始める**

**MDN「Web Audio API best practices」は、同時再生数の推奨値も警告も書いていない**
（https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices を開いて確認済み）。
代わりに書いてあるのは、

- 音の読み込み方は四通り。**長い曲は `HTMLMediaElement`（ストリーミング内蔵）、
  短い標本のような音は fetch して buffer に decode**（精密に扱えるから）
- **自動再生の制約**：*"Create or resume context from inside a user gesture"*。
  文脈が `suspended` なら click の中で `audioCtx.resume()` を呼ぶ
- `AudioParam` は直接代入（`gainNode.gain.value = 0.5`）より
  メソッド（`setValueAtTime`）のほうが優先される。**時刻を扱うならメソッドを使え**

---

## 5. 足りない素材の扱い（placeholder / missing asset）

### 5-1. Josh Sawyer（Obsidian）の規則 — 「間違えようがないほど、みっともなく作れ」

- 出どころ：https://kotaku.com/crimson-desert-ai-art-placeholder-game-devs-share-assets-images-genai-2000681053
- 書いた人：Kotaku（記者のまとめ）。開発者たちが自分の仮素材を公開した反応をまとめたもの。
  **一次は各開発者の SNS 投稿**（Josh Sawyer ら）。この記事はそれを引用している
- 日付：2026年（Crimson Desert の発売直後の話題）。2026-08-24 閲覧
- 分野：5

**Josh Sawyer（Obsidian Entertainment、『Pentiment』2022）の言葉（原文）**：

> "Placeholder assets in a game should look **obnoxiously temporary**, so obvious that no one
> would mistake it for the final asset. In past games we've used the doge dog (rip) as an icon,
> hot pink versions of characters, our CEO's head, etc."

『Pentiment』で実際に使われた仮素材として挙げられたもの：

- 逆さに吊るされたバンビ
- MS ペイントで描いた「Guy Sux」という文字

**ほかの開発者が挙げた仮素材の作り方**：

- **dokidoki** … チーム内の伝達が壊れたとき、クレヨンで木目のテクスチャを描いた
- **Úna-Minh** … ADHD による見落としを前提に、**「とても分かりやすい」**仮素材を使う
- **Quandtuniverse**（『Beaconing』）… "Too obnoxious since playtesting this was horrible"
  （テストプレイがひどかったので、わざと目に余るほどにした）
- **Dr. Miko Charbonneau**（『The Spirit Lift』）… 配信で見せるために、ふざけた仮素材を描いた
- 複数の開発者 … キャラの明るいピンク版、ミーム画像、魚人の絵、カエルのメモ用紙の落書き

記事の結論：**仮素材はわざと醜く、明らかに未完成であるべき。
だから生成AIの絵は仮素材に向かない**——**きれいすぎて、そのまま残ってしまうから。**

### 5-2. 仮のまま出荷した実例（2025〜2026年）

- 出どころ：https://www.pcgamesn.com/ai/placeholder-assets
- 書いた人：PCGamesN。2026-08-24 閲覧
- 分野：5、7

**まともな仮素材は目立つように作られているので、
最終検査で誰も見ていない限り、間違って混ざることはない**——という筋で書かれている。

挙がっている作品：

| 作品 | 何があったか |
|---|---|
| **Crimson Desert**（Pearl Abyss） | 生成AIの素材が "unintentionally included" だったとして謝罪 |
| **The Alters** | 同じ「出すつもりはなかった」という説明 |
| **Clair Obscur: Expedition 33** | 同上 |
| **The Expanse: Osiris Reborn** | 開発中に生成AIを使ったことを認めた |
| **Slay the Spire 2**（早期アクセス中） | **粗い棒人間**が仮素材として入っている（＝正しい仮素材の例） |

まともな仮素材の見た目として挙がっているもの（原文）：

- "Crude stick figures. They look silly, they don't match the art style"
- **"gigantic red letters reading CHANGE ME"**
- 棒人間からディズニーキャラの JPEG まで、**最終版に居るはずがないもの**なら何でもよい

記事の懐疑：*"A cynic might suggest that studios are happy to ship AI assets and just hope
players won't notice."*

→ **「仮素材が出荷される」事故は、2026年の時点で複数の商業作品で起きている。
そしてその全部が、生成AIで仮素材を作った作品である。**
これが「生成AIで素材を作る場合」の一番大きい落とし穴として、この題の新しい層になっている。

### 5-3. 仮素材がテストプレイの声を歪める（Unity 公式ブログ）

- 出どころ：https://unity.com/blog/placeholder-asset-problem
  （"The placeholder asset problem: How programmer art kills playtests"）
- 書いた人：Unity（公式ブログ）。2026-08-24 閲覧
- 分野：5
- 一次に近い（エンジンの作り手の公式媒体）。**一次はこの記事が引く GDC 2012 の
  "Juice It or Lose It"**（Martin Jonasson & Petri Purho）

主張（原文に近い）：

> 人間は**見た目からの印象と、仕組みからの印象を、完全には分けられない。**
> 中身のコードが同一でも、見た目が仕上がっているほうを、遊んだ人は
> 「反応が良い」「面白い」と評価する

**Visual Minimum（見た目の最低線）という枠**：
「見た目がテストプレイの声を毒しないために、最低限どれだけ絵に投資すればいいか」を問う。
必要なのは三つだけ：

1. **輪郭が見分けられること**（recognizable silhouettes）— 何の物か分かる
2. **色が分かれていること**（color differentiation）— 敵と背景が分かれる
3. **材質の違いが最低限あること**（basic material variation）— 金属と草が違って見える

根拠として引かれているもの：

> GDC 2012 の "Juice It or Lose It" — **物理のコードを一行も変えずに**
> 画面揺れ・粒子・補間アニメを足しただけで、遊んだ感じがはっきり変わった

**この記事は「仮素材と完成素材の見分け方」は定義していない。**
出てくるのは「灰色の立方体・カプセル」と「テクスチャの付いたキャラ・石畳・砂埃」の対比だけ（確認済み）。

→ **5-1（仮素材は醜くあれ）と 5-3（醜すぎるとテストの声が歪む）は、
正面からぶつかっている。**割れている箇所（→報告）。

### 5-4. 欠品を機械で見つける（1）Unreal の Data Validation

- 出どころ：https://dev.epicgames.com/documentation/en-us/unreal-engine/data-validation-in-unreal-engine
- 書いた人：Epic Games（公式）。UE 5.7 版。2026-08-24 閲覧
- 分野：5
- 一次資料

> "The Unreal Engine (UE) Editor features a **Data Validation** plugin for developers to
> validate assets with custom-scripted rulesets."

**いつ走るか（三通り）**：

1. **素材を保存するとき（既定で有効）**
2. エディタと Content Browser のメニューから
3. **CI（Continuous Integration System）からコマンドラインで**

**フォルダ単位で走らせる**：Content Browser でフォルダを右クリック →
**"Validate Assets in Folder"**。結果は Message Log の **Asset Checks** に出る。

**よくある検査の中身**（原文）：

- **"Checking that assets meet name conventions"**（＝分野2の規約を、機械で強制する）
- "Enforcing space and performance budgets"（容量と性能の予算を守らせる）
- "Catching non-cyclic dependencies"

**書き方**：

- 自作の `UObject` 派生クラスで `IsDataValid` を上書きする
- または `UEditorValidatorBase` 派生クラスを作り、`CanValidateAsset` と
  `ValidateLoadedAsset` を実装する（**`AssetPasses` か `AssetFails` を必ず呼ぶ**）

C++・Blueprint・Python で書ける。**エディタ起動時に自動で見つかる（Python だけは手で登録が要る）。**

→ **命名規則の検査が「よくある用途」の筆頭に来ている。
分野2と分野5は、実装上は同じ仕掛けの上に乗る。**

### 5-5. 欠品を機械で見つける（2）Unity の Missing References Hunter

- 出どころ：https://github.com/AlexeyPerov/Unity-MissingReferences-Hunter
- 書いた人：Alexey Perov。2026-08-24 閲覧
- 分野：5
- 一次資料（道具のソース＋README）

**やり方（原文）**：

1. "At first, it collects all your project GUIDs and forms a map of them."
2. "Then it reads the contents off all GameObjects, ScriptableObjects and Scenes to gather
   GUIDs they contain."
3. "Then it simply checks whether these GUIDs are present in the map from the first step."

→ **「参照されている ID の集合」から「存在する ID の集合」を引く。**
それだけで欠品が出る。**この題の骨はこれ一行に尽きる。**

**何を読むか**：GameObject/prefab・ScriptableObject・シーンの直列化データ。
GUID、FileID、UnityEvent のデータ、スクリプト参照、レイヤー値を見る。

**壊れ方の分類**（そのまま使える）：

| 種類 | 意味 |
|---|---|
| Missing FileID **と** GUID の両方 | 確実な誤り |
| Missing GUID | プロジェクトに存在しない GUID を参照している |
| Missing FileID | 自分の中の FileID を参照しているが、それがもう無い |
| Broken UnityEvent callbacks | 呼び先のメソッドがもう無い |
| Deleted scripts | MonoBehaviour の GUID がスクリプト資産に解決できない |

**原因として挙がっているもの**：*"may happen due to bad merge, for example"*
（＝**マージの失敗**）。

**前提**：Unity の GUID/meta ファイルという仕掛けの上の話。
ファイル名で直接参照する作り（Web など）では、
**「参照されているファイル名の集合 − 実在するファイル名の集合」**が同じ役目をする
（**こちらで成り立つかは確かめていない**）。

### 5-6. 仮素材を使う理由（仕事を切り離すため）

- 出どころ：https://en.wikipedia.org/wiki/Programmer_art （2026-08-24 閲覧）
  および https://blog.lipsumhub.com/placeholder-content-in-game-development/ の要約
- 分野：5
- 二次。**lipsumhub のほうは本文を開いていない。**Wikipedia は用語の定義として引く

Wikipedia「Programmer art」：

> プログラマが作った素材。**すぐに必要なのに、まだ存在しない素材があるときに作られ、
> 公開前に差し替えられることが前提。**

理由として複数の出どころが共通して言っていること（要約経由・未検証）：

- **仕事の切り離し**：仮の絵を置くことで、プログラムと絵の日程が独立して進む
- **先に確かめる**：中身の仕組みを、最終素材に時間を掛ける前に試して直せる。
  **面白くならないゲームの絵に金を掛けるのを防ぐ**

---

## 6. 作り直しの単位（re-generation / iteration granularity）

### 6-1. 一枚だけ差し替えられるようにするには何が要るか（Asset Registry と AssetReference）

- 出どころ：https://wejdell.github.io/asset-hot-reloading/
- 書いた人：Nicolas Wejdell。2026-08-24 閲覧
- 分野：6
- 一次資料（自分の実装の記録）

**中心の仕掛け**：

- `AssetReference` は**ファイルパスとハッシュ化した UID**を持つ構造体
- 素材のデータ（メッシュ・テクスチャ等）は **registry が一元的に持つ。**
  各コンポーネントはデータを持たず、`AssetReference` を持つだけ
- 使う側は参照を registry に渡してデータを引く

**一枚だけ差し替えるとどうなるか**（原文）：

> "we don't need to update all the components that care about that particular asset,
> the registry just internally updates the data that it manages."

→ **これが「一枚だけ差し替えられる」の条件。**
使う側が実体を持たず、名前（参照）だけを持っていれば、実体の入れ替えは一箇所で済む。

**ファイルの見張り**：ディスク上の元ファイル（FBX, DDS など）が変わったら registry が再取り込みする。
**ただし、資源の無駄を避けるため、見張るかどうかは素材ごとに手で有効にする。**

**素材を動かした（改名した）ときの仕掛け（redirection）**：

> 素材を移動すると、古いパスと新しいパスの間にリンクが作られる。
> 読み込み時に元のパスが無ければ *"we traverse the redirections to try to find an existing file."*
> 見つかったら**元のハッシュ済みの識別子はそのまま保つ**ので、
> 他の使い手はリンクを辿り直さずに済む

**残っている問題（本人の申告）**：
リダイレクタの自動掃除が無い。完全にやるなら
*"go through all entities on disk, and iterate through all components to see if there are
any old asset references"* が要る。

→ **改名は「一枚差し替え」の中でいちばん高くつく操作。**分野2（命名規則）と直結する。

### 6-2. どの種類なら綺麗に差し替わるか（Bevy の hot reload）

- 出どころ：https://bevy-cheatbook.github.io/assets/hot-reload.html
- 書いた人：Unofficial Bevy Cheat Book。2026-08-24 閲覧
- 分野：6
- 一次に近い（エンジンの有志ドキュメント）

- 実行中に素材ファイルを直すと自動で読み直す。
  **既定では切れている。**`AssetPlugin` の `watch_for_changes: true` と、
  cargo feature の `filesystem_watcher` が要る
- **綺麗に差し替わるもの**：*"typical asset types like textures / images should work without issues"*
- **差し替わらないもの**：*"Complex GLTF or scene files, or assets involving custom logic, might not"*
- シェーダはファイルから読んだものなら差し替わる。
  **ソース中に静的文字列として埋めたシェーダは差し替わらない**
- 特別な処理が要るなら `AssetEvent` を受けるシステムを書く

→ **「差し替えられる単位」は、素材の種類ごとに違う。
一枚の画像はほぼ確実に差し替わるが、組み合わさったもの（シーン・独自処理付き）は駄目。**
これは「束ごとやり直しになる条件」の一つの答え。

### 6-3. 束ごとやり直しになる条件（形式が変わったとき）— 1-1 の再掲だが、この分野の本体

- 出どころ：https://proun-game.com/Oogst3D/ARTICLES/TheGameAssetPipeline.pdf （2.10節）
- 分野：6

> "If for example the format of one type of file changes at some point, then in the worst case
> **all files of the same type will have to be re-exported.** This is a cumbersome task, as each
> file will have to be manually opened in the asset creation tool to export it."

**解は三つ挙がっていて、著者は三つめを推している**：

1. 古い形式から新しい形式へ変換する道具を作る
   → **元ファイルに必要な情報が全部残っている場合しか使えない**
2. ゲーム側で新旧どちらも読めるようにする
   → 形式が何度も変わると *"this will clutter the code and make it more error prone"*
3. **中間形式（intermediate file format）を挟む。**
   書き出し器は中間形式に落とし、別の道具が中間形式から最終形式に変換する。
   最終形式が変わったら、**中間ファイルから自動で全部作り直せる**

> "In the intermediate files, efficiency is not an issue, so it is no problem to store a lot of
> extra data in them that is not needed at the moment, but might come in handy in the future."

中間形式は**テキストにしておくと読めるし直せる。XML が良い**（2007年の話）。

→ **「束ごとやり直し」を安くする唯一の手が、中間層を一枚挟むこと。**
中間層に「今は要らないが将来要るかもしれないデータ」を余分に持たせておくのが要点。

### 6-4. 同じものが、別々に作ると別物になる問題（人間の場合）

- 出どころ：https://opengameart.org/forumtopic/maintaining-a-consistent-art-style
- 書いた人：OpenGameArt.org のフォーラム利用者（Chasersgaming、Saliv ほか）
- 分野：6
- **議論が残っている層。**日付は取れなかった（2026-08-24 閲覧）

スタイルガイドに書くべきものとして挙がった項目（原文の語をそのまま）：

- "Color palette"（色数と配色）
- "sprites, vector, 3d?"（何で作るか）
- **"How big a sprite sheet is each character allowed?"**（一キャラのシートの大きさの上限）
- **"frame counts"**（コマ数）
- "Scale (How big is a meter or does it matter?)"（尺度）
- "Grey Scale Index, Dithering, pallet swaps, transparency"
- "Shading (Yes/no, when and how?)"（陰影を付けるか、どこにどう付けるか）

→ **「一キャラのシートの大きさの上限」と「コマ数」が、スタイルガイドの項目として出てくる。
これは分野1（一覧の作り方）と分野3（シートの作法）が、ここで合流している。**

**限界についての本人たちの言葉**：

- Saliv：*"there is no way to account for everything"*、
  **"a style guide is a 'guide book' not a 'law book.'"**
- Chasersgaming：*"Most Artists will have there own style"*

→ **2-1 の Allar「命名規則は法として扱え（treated as law）」と真逆の態度。
規則の強さについて、絵の側と名前の側で相場が割れている。**

### 6-5. 同じものが、別々に作ると別物になる問題（生成AIの場合）

- 出どころ：https://www.apatero.com/blog/ai-consistent-character-generator-multiple-images-2026
- 書いた人：Apatero Blog。2026年版と銘打たれている。2026-08-24 閲覧
- 分野：6
- 二次（実務のまとめ記事）。**数値が出ているが、どう測ったかは書かれていない。要注意**

**なぜずれるか**（原文）：

> **"Every generation starts from a different noise pattern, which means every output is unique."**

文字の指示だけでは解けない。「赤毛で傷のある女」のような記述は、
毎回ちがう解釈をされる（潜在空間が広すぎるため）。

**seed 固定の限界**：

> seed を固定するのは **"not a magic button."**
> 同じ seed ＋同じ指示なら同じ絵になるが、**指示を少し変えただけで別の絵になる。**
> よって seed 固定は主役ではなく補助でしかない

**参照シート（turnaround sheet）に入れるもの**：
正面の中立姿勢／顔の寄り／左右の横顔／背面／表情の違い。
これは **"a visual dictionary for your character"** であり、どの手法とも併用できる。
ただし**単独では足りない**（force multiplier であって、単体の解ではない）。

**LoRA の学習枚数（数値そのまま）**：

> 最適は **15〜30枚**。
> **"fewer than 10 images usually does not give the model enough information to generalize"**
> **"more than 50 images introduces too much variation unless every image is extremely consistent"**
> 枚数より、質と角度の多様さが効く

**画風をまたぐとき**：写実からアニメ調へ、のような大きな画風の差は
*"one of the hardest consistency challenges"*。
LoRA は参照ベースの手法よりこれに強いが、**画風が大きく違うなら別々の LoRA が要る。**

**一貫性の達成率（この記事が挙げている数値。測り方は書かれていない）**：

| 手法 | 一貫性 |
|---|---|
| LoRA 学習 | **85〜95%** |
| IPAdapter / InstantID | **70〜85%** |
| Midjourney の `cref` | **60〜80%** |
| 参照シートだけ | **40〜60%** |

**前提**：拡散モデルで絵を作る前提。
**ドット絵のような、画素単位で正しさが決まる絵にこの数値が当たるかは確かめていない。**
（そもそも「一貫性 85%」が何を意味するのかが、この記事からは分からない）

### 6-6. 参照画像を「画風の指定」として使う（生成3Dの場合）

- 出どころ：https://www.sloyd.ai/blog/how-to-style-consistent
- 書いた人：Sloyd（生成3Dの会社の公式ブログ）。2026-08-24 閲覧
- 分野：6
- 一次だが**自社製品の宣伝**。割り引いて読むこと

- 参照画像を一枚上げて、それを **style guide** として使う。
  文字の指示が**何を**作るかを、参照画像が**どう見えるか**を決める
- **画風を複数保存できる**：キャラ用・小物用・背景用で別々に持つ
- 事例：同じ指示で、二つの違う参照画像（ぬるっとした画風／気まぐれな画風）を当てると、
  **同じ地下迷宮の素材が別の見た目になる**
- 問題意識：*"nothing breaks immersion faster than mismatched art styles."*

**seed・数値・束ごとの作り直しについては、この記事は何も書いていない**（確認済み）。

---

## 7. 失敗した話

### 7-1. Diablo II の postmortem（2000年10月・Erich Schaefer）— 「道具を作ったのに捨てた」

- 出どころ：http://ksuweb.kennesaw.edu/~jprest20/cgdd2002/readings/postmortem_blizzards_diablo_ii.php.htm
  （Gamasutra の記事を大学が再掲したもの。**Gamasutra 本体は Game Developer に移り、
  https://www.gamedeveloper.com/design/postmortem-blizzard-s-i-diablo-ii-i- にある**）
- 書いた人：Erich Schaefer（Blizzard North。Diablo II の senior designer / art director / story writer）
- 日付：2000年10月。Diablo II は2000年6月発売
- 分野：7、6
- 一次資料（作り手本人の postmortem）

**"What Went Wrong" の Tools の節**（原文）：

> "We developed the original _Diablo_ with almost no proprietary tools at all...
> _Diablo II_'s vastly increased scale required much better tools, and we made some,
> but not enough."

**道具を作ったのに捨てた話**（Joost van Dongen の論文が引用しているのと同じ箇所）：

> "In many cases we created tools to speed up content creation, but then abandoned them.
> **Too often, we decided to keep using inferior tools because we thought we were almost done
> with the game, and didn't want to take the time to improve them.**
> Unfortunately, in most of these cases, we were not really almost done with the game,
> and in retrospect a couple of weeks' worth of work would have helped in the year or more
> of development remaining."

**絵の担当への影響**：
ゲーム内で自分の作ったものを見る道具が無かったので、
**直しが何ヶ月も遅れた。**音の担当は、音とアニメを合わせるために
**手で .AVI ファイルを作っていた。**

**結論**：
> "The extra tool development time would have been more than offset by increased efficiency
> and higher-quality work."

規模：40人以上、3年以上。**「二つか三つのゲームを作って、いちばん良いものだけ残した」**からだと本人が言っている。
12ヶ月のクランチ。
本人の弁：*"None of us had any management experience, and kind of still don't. We did a lot of
things wrong."*

→ **「もうすぐ終わるから道具は直さない」が、いちばん高くついた判断だった。**
そしてそれは**判断としては何度も繰り返された**（"In many cases"）。

### 7-2. Activision 対 Spark の訴訟（2007年）— 素材管理の不整合が納期遅れになった

- 出どころ：Joost van Dongen の論文（1章）が引用している。
  一次は Jeffrey Fleming "Call of Duty: The Lawsuit"（2007, Gamasutra）
  → **論文の参考文献欄に書誌はあるが、URL は載っていない。当たれていない**
- 分野：7

論文の記述（原文）：

> 開発元 Spark が契約上の納期を何度も守れなかった。理由は、**購入したゲームエンジンが、
> 使っていた素材管理システムの機能の多くと噛み合わなかった**こと。
> これに時間を取られすぎて、最終的に Activision が**30人の開発者を追加投入**し、
> その追加費用と遅延について Spark を訴えた

> "This exemplifies that a bad game asset pipeline can actually bring a company into legal
> problems, as missing deadlines can be a reason for a lawsuit or a fine."

→ **エンジンと素材管理の噛み合わせが、訴訟になった実例。**二次のままなので、
一次（Fleming2007）に辿るには Gamasutra/Game Developer の記事を探す必要がある。

### 7-3. IceMagnet（2007年・学生の卒業制作）— 書き出しに15分

- 出どころ：https://proun-game.com/Oogst3D/ARTICLES/TheGameAssetPipeline.pdf （5章）
- 分野：7
- 一次資料（本人の記録）

**5.2 A slow exporter**：

> 3D Studio MAX のスクリプト言語が遅かったため、**ポリゴンと物の多いレベルを一つ書き出すのに
> 最大15分**かかった。書き出し中はそのマシンで他の作業ができない。
> 結果として、**設計担当は事務所をうろつき、冗談を言い、他の人の仕事を邪魔していた。**
> 時間が無くて根本解決はできず、**「変えた物だけに印を付けて、それだけ書き出す」**
> という応急処置を入れた

**5.4 The lack of correctness checks**：

> キャラの技術的制約は厳しく分かりにくい。**守るべき点の一覧を作って渡したが、
> 絵の担当は必ず何かを見落とし、作り直しになって大きな時間を失った。**
> 規則を自動で確かめる小さな道具を作れば、これは軽くできたはずだった

**5.1 の教訓**（原文）：

> "The main lessen learned here is that **a tool should not contain any options that are not
> supported by the game**, because the asset developers need to be taught about which tools
> they can use and which not and **they easily forget these rules, in turn breaking the tools.**"

**5.6 Subversion の欠点**：

- 全員が全ファイルを持つので、更新に無駄に時間がかかることがあった。
  エンジンを新版に上げた翌日、**チーム全員が10分待たされた**（エンジンのコード自体は要らないのに）
- **非プログラマには難しく、何度も説明する羽目になった**
- ファイルロックの機能はあるが**うまく動かないので使わなかった。**
  同じ部屋にいたので「誰かこのファイル触ってる？」と聞いて解決した

**5.5 Grass and flowers**（うまく行った側）：
草を手で置くのは非現実的なので、3D Studio MAX の中で**マウスでなぞって草を撒ける道具**を作った。
その場で結果が見える。

> "It did cost a lot of work to develop this tool, though, so it remains uncertain whether this
> actually saved us any time. **It brought us a lot of joy and ease in creating the levels,
> which is invaluable during crunch time.**"

→ **道具の元が取れたかは本人にも分からない。**それでも「作るのが楽しくなった」ことを利得に数えている。

### 7-4. 生成AIでスプライトシートを作って壊れた話（2026年前後・Qiita）

- 出どころ：https://qiita.com/ryoun5053/items/3a750cd76a732a7c71d5
  「AI×Unityで2D格闘ゲームを作る際に直面したスプライトシート問題と解決策」
- 書いた人：ryoun5053（個人開発）。2026-08-24 閲覧
- 分野：7、3、6
- 一次資料（本人の記録）。**この題で「生成AI × 素材管理」の一次資料としてはいちばん具体的**

**問題1：頼んでいないものが出てくる**

> AIに「正面の構えポーズ」を指示しても、
> **「頼んでいないカッコいいアングルの回し蹴りが出てきたりします」**

→ AIが勝手に見栄えを優先する。

**問題2：コマが等間隔にならない／枠から切れる**（**渡された分野3の「コマが枠から切れる問題」の実例**）

> 最も困難だったのは、**「AIはスプライトシート上にキャラクターを等間隔に配置してくれないことがあります」**
> という点。**髪の毛のはみ出し、足の切断、拳の次フレーム突き抜け**が発生していた

**問題3：原点（ピボット）が揃わない**

> **「各フレームのキャラクターの足元位置がバラバラだと、アニメーション再生時にキャラが上下にガタガタ揺れます」**

**解決策（数値そのまま）**：

1. **フレーム構成を厳密に指定**：**18フレーム構成（6列×3行）**を明示的に指示に組み込み、
   「これ以外のポーズは不要」と念押しした
2. **Unity エディタ拡張で「スプライトシート分割＆中央配置」道具を自作。**
   プレビュー上で分割線をドラッグで調整でき、
   **「各コマのアルファ値を走査して、実際にピクセルが存在する矩形を検出」**し、
   出力画像の中央に自動配置する
3. **原点の自動検出**：**Idle フレームの最下部の不透明ピクセルを pivot の Y 座標**に採用。
   X は**アルファ値の加重平均で重心**を算出。**全フレームに共通の pivot を当てる**

→ **生成AIを使うと、分野3（シートの作法）が自動では守られないので、
「後から機械で直す層」を自分で書くことになる。**
そしてその直し方（アルファ走査で矩形を出す・最下部を接地点にする）が具体的に残っている。

### 7-5. 個別画像とシート、どちらが管理しやすいか（日本語・ドット絵）

- 出どころ：https://pixelartlab.net/game-dev/sprite-sheet-tsukurikata （ピクセラボ）。2026-08-24 閲覧
- 分野：3、7、1
- 二次（解説記事）だが、**数値と「よくある失敗」が具体的**

**大きさ**：入門は **16x16 / 32x32 / 64x64** の三つに絞る。
32x32 は「情報量と作業量の釣り合いがよく」最初の歩行アニメに向く。
64x64 は表情差分や髪の揺れが足せるが、修正の負荷が上がる。

**コマ数と速さ**：歩行ループは **4〜8フレーム**。
4コマは記号的な動きで成立、8コマは足が地面を押す瞬間まで出せる。
**入門の基準は「1秒間に8枚、8fps の歩行ループ」。**

**余白**：固定グリッドではセル寸法を全コマ統一し、接地ラインなどの基準点を厳密に合わせる。
**「2〜4px程度の余白」**をコマ境界に設けると滲みを避けやすい。

**保存形式**：PNG。**可逆圧縮を使う。JPEG のような非可逆は避ける**
（ドット絵の輪郭は色の境界が命で、途中で JPEG を挟むと直しても雑音が残る）。

**Unity**：Sprite Mode を **Multiple**、Sprite Editor でセル単位に分割。
PPU は「1ユニットを何ピクセルとするか」の基準で、**プロジェクト全体で統一する。**
**Filter Mode は Point、Compression は None。**

**Godot**：AnimatedSprite2D に **Hframes（横分割数）/ Vframes（縦分割数）**を入れて自動分割。
固定グリッドなら「分割数を入れた瞬間に正しい区切りに変わる」。

**よくある失敗（そのまま）**：

- セルサイズのばらつきで再生時にガタつく
- 各コマの中心位置がずれると**「跳ねている」ように見える**
- セル間の余白不足で隣接フレームの色が混入（にじみ）
- **フレーム数を12枚以上に増やすと管理が破綻しやすい**
- 補間設定（Bilinear）でドット輪郭がぼやける

**個別画像 vs シート**（検索結果の要約経由・**この論点の本文は未確認**）：

> 個別画像を何十枚も置く構成だと、**差し替え・命名・取り込み漏れの確認**に手間が増える。
> シートに一枚にまとめると読み込み対象が減り、アセット管理も一本化できる

### 7-6. 使っていない素材が製品に入る（議論の層）

- 出どころ：https://discussions.unity.com/t/does-unused-assets-takes-space-increase-the-overall-size-of-the-game/721209
- 分野：7、5
- フォーラムの議論

- Ryiah：使っていない素材が製品の大きさを増やすのは **"Only if they're in a folder named 'Resources'."**
- Peter77：**`StreamingAssets` フォルダに入っているか、asset bundle に入れた場合**も入る

→ **「使われているか」ではなく「どこに置いたか」で入るかが決まる。**
参照から辿れない置き場（Resources / StreamingAssets）が、そのまま欠品検査の穴になる。

**このスレッドは「使っていない素材の見つけ方」には答えていない**（確認済み）。

実際の事故として検索で出てきたもの（**itch.io の個別投稿は本文を開いていないので、
出どころとしては採用しない**。件数だけ記す）：ゲームジャム作品が素材パック丸ごと入りで
**2GB**になった、**47GB** のデモに使っていない素材が大量に入っていた、
エンジンの「使っていない素材を削除」を使うと起動しなくなるので締切に間に合わせるため放置した、など。

### 7-7. 買ってきた素材の見た目が混ざる（asset flip への文句）

- 出どころ：https://en.wikipedia.org/wiki/Asset_flip （2026-08-24 閲覧）
- 分野：7、6
- 二次（百科事典）。**遊んだ人の文句の層としては、これが取れた範囲**

- asset flip ＝ 既製の素材を買って、それを並べただけの粗製濫造品
- 遊ぶ側の文句の中心は **style mismatching**（画風が揃っていないので、
  買ってきた素材だと一目で分かる）
- **2017年9月、Steam は Silicon Echo とその関連アカウントが出した 173本を削除した。
  うち86本は直前の2ヶ月に出されたもので、その期間に Steam に追加されたゲームの約10%にあたる**

→ **「画風が揃っていない」ことは、遊ぶ側から見える。**
分野6（一貫性）の失敗は、内部の都合ではなく製品の評価に直結する。

---

## 道具の覚書（次に調べる者へ）

**PDF は取れた。**`WebFetch` に PDF の URL を渡すとエラーになるが、
**エラー文の末尾に保存先のローカルパスが出る。それを `Read` に渡すと全文が取れる。**
`pages` 引数は付けないこと（`pdftoppm is not installed` で落ちる。今回も一度踏んだ）。

この方法で、**この題でいちばん厚い一次資料（Joost van Dongen の修士論文・31ページ）が取れた。**

---

## 開けなかったもの

**この節の URL は `check-refs.mjs` が確かめに行かない。**自分で「開けなかった」と申告したものである。
**消さないこと。**次に調べる者には、この一覧がいちばん良い入口になる。

### 403 Forbidden（本文が取れなかった）

| URL | 何を取りに行ったか | 分野 |
|---|---|---|
| https://rpgmaker.net/articles/1413/ （Game Development Project Management using Spreadsheets） | 表計算での素材追跡の列・単位・抜けの見つけ方 | 1 |
| https://www.gamedev.net/forums/topic/644435-what-is-an-art-bible-and-any-tips-to-make-one-better/ | art bible に入れる「アニメ一覧・アイコン一覧・外部素材とライセンス一覧」の原文 | 1 |
| https://www.gamedev.net/forums/topic/552212-creating-art-biblestyle-guide/ （未試行だが同ドメインで403） | 同上 | 1 |
| https://www.audiokinetic.com/naming-convention-best-practices （Audiokinetic 公式ブログ） | **Wwise の命名規約の一次資料。分野2と4をつなぐ唯一の公式文書だった** | 2, 4 |
| https://ansoaudio.com/2016/07/07/game-audio-asset-naming-and-organisation/ | 2016年の実務者による音素材の命名と整理 | 2, 4 |
| https://documentation.help/fmod-studio-api/virtualvoices.html | **FMOD 仮想ボイスの一次説明。4-2 は要約経由でしか書けていない** | 4 |
| https://manualzz.com/doc/o/ul710/wwise---user-s-guide-chapterandnbsp;11.andnbsp;managing-the-priority-of-sounds-and... | Wwise User's Guide 第11章「音の優先度の管理」 | 4 |
| https://prompting.systems/blog/creating-consistent-characters-in-ai-art | 生成AIのキャラ一貫性 | 6 |
| https://www.gamedev.net/forums/topic/661856-why-do-unused-game-assets-get-stored-in-the-game/ | **なぜ使っていない素材が製品に入るのかの議論。7-6 の穴** | 7, 5 |

**代替経路の候補**（次に調べる者へ）：

- Audiokinetic 系は `audiokinetic.com` が全部 403 の可能性が高い。
  **Wwise のドキュメントは `www.audiokinetic.com/en/library/...` にもある。試していない**
- FMOD は `fmod.com/docs/2.02/...` を試したが**本文が空**で返る。
  **`fmod.com/resources/documentation-api?page=...` の形も未試行**
- GameDev.net は全滅の見込み。**Internet Archive（web.archive.org）経由を試していない**

### 本文が空で返った（HTTP は 200 らしいが中身が無い）

| URL | 何を取りに行ったか | 分野 |
|---|---|---|
| https://www.fmod.com/docs/2.02/studio/fmod-studio-concepts.html | FMOD のイベントと素材の分離の一次説明 | 4 |
| https://fmod.com/resources/documentation-studio?page=event-macro-controls-reference.html&version=2.1 | **Event Macro Controls の一次資料。4-1 は実務者ブログ経由でしか書けていない** | 4 |
| https://www.consolecreatures.com/style-guide-development-game-visuals/ | スタイルガイドの検証手順（二回目の発注で試す、という話） | 6 |

### 404

| URL | 何を取りに行ったか | 分野 |
|---|---|---|
| https://offpathllc.itch.io/guildmestar/devlog/568867/guildmestar-developer-insights-august-1-2023 | **「大きなシートを個別シートに割ったら、参照していたアニメが全部壊れて作り直しになった」という失敗談。分野6と7の直球だったが取れなかった** | 6, 7 |

### 503（一度目）→ 二度目で取れた

- https://proun-game.com/Oogst3D/ARTICLES/TheGameAssetPipeline.pdf
  … 一度 503 を返したが、**時間をおかずに再試行したら取れた。**PDF として保存され、`Read` で全文読めた

### URL が分からない／辿れていない一次資料

| 資料 | どこから知ったか | なぜ要るか |
|---|---|---|
| Ben Carter『The Game Asset Pipeline』(2004, Charles River Media, ISBN 1-58450-342-4) | van Dongen の論文の参考文献。**論文の2章はこの本の要約だと本人が明記** | **この題の一次はこの本。書籍なのでネットには無い可能性が高い** |
| Noel Llopis "Optimizing the Content Pipeline"（2004, Game Developer Magazine） | 同上。素材とパイプラインの定義の出どころ | 定義の一次 |
| Jeffrey Fleming "Call of Duty: The Lawsuit"（2007, Gamasutra） | 同上。7-2 の一次 | 訴訟の詳細 |
| GDC 2012 "Juice It or Lose It"（Martin Jonasson & Petri Purho） | Unity 公式ブログ（5-3）が引用 | 「見た目が手触りの評価を変える」の一次 |
| `strayspark.studio` の middleware 比較記事 | 検索結果の要約に出た「イベントは命令ではなく『何かが起きた』という情報」の一節 | **4-4 の核の一行が、この記事の要約経由でしか取れていない** |
| howler.js の「50個は平気、500個で崩れる」の出どころ | 検索結果の要約 | **4-5 の数値の一次が不明** |
| https://www.aeno.nl/uploads/Art-bible.pdf | 検索で出てきた実物のアートバイブル（5.8MB） | **PDF の取得はできたが、画像主体で重く、読んでいない。次に調べる者は `Read` で開ける** |
| itch.io の個別投稿（2GB / 47GB の事故） | 検索結果の要約（7-6） | **本文を開いていないので出どころとして採用しなかった** |
