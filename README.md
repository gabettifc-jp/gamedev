# gamedev

ゲームをまたいで育つ文書の置き場である。

- ここには、どのゲームにも効く作法・型・調査結果だけを置く
- 一本ごとのゲームは別のリポジトリに作る（dungeon-shop、burger-stack など）
- 特定のゲームの中身（仕様書・実装・素材）はここに入れない
- **`friction.md` はゲーム側には置かない。gamedev に一本だけ。**ゲームをまたいで溜まるほうが値打ちがある（同じつまらなさが二本目でも出たら、それは強い信号になる）

## 中身

| 置き場 | 何が入るか |
| --- | --- |
| `HANDOFF.md` | いまどこにいるか。次のセッションはまずこれを読む |
| `CLAUDE.md` | ゲームをまたいで効く作法 |
| `flow.md` | 作りかたの流れ |
| `ideas.md` | 面白さのアイディア置き場（種と点検） |
| `friction.md` | つまらなさの生ログ。整形せずその場で書く |
| `lessons.md` | 一本終えるたびの当たり外れ |
| `open.md` | 決めざるを得なかった点。承認があるものと無いものを分けて書く |
| `templates/` | ゲーム側へ写すひな形 |
| `templates/mihon.md` | 触って方向を決めてもらう見本の型。パッと試しに出すときに毎回見る |
| `templates/playtest.md` | **触ってもらうときの相場。**段階8に入る前に見る（生は `references/playtest.md`） |
| `templates/sheets/` | 段階3で埋めるシート。`00-kihon.md` から始める |
| `templates/sheets/genre/` | ジャンルシート。そのジャンルを名乗ったら答えなければならないこと |
| `tools/` | シートを埋める道具。`serve.mjs` で立ち上げるとファイルに保存される |
| `tools/check-sheets.mjs` | **写しとシート、相場表と問いを照合する。**`node tools/check-sheets.mjs` |
| `references/` | 参照元のゲームの調査結果 |

## 新しいゲームを始めるときの手順

1. ゲームのリポジトリを作る
2. `templates/` から `spec.md`、`checklist.md`、`prompt.md`、`check.md` を写す
3. **`flow.md` の段階0-a（設計文書の型を借りる）をやる。**そのゲームの種類で、仕様書に何の欄があるかを調べる
4. **`flow.md` の段階0-b（ジャンルシートを作る）をやる。**そのジャンルで既に解かれている問題を、
   `templates/sheets/genre/` に空欄のある表として置く（規則は `templates/sheets/genre/README.md`）
5. `templates/sheets/00-kihon.md` を写して埋める。答えで配られたシートも順に埋める
6. `gamedev/CLAUDE.md` を参照する一行を、ゲーム側の `CLAUDE.md` に書く
7. `flow.md` の1と2（面白さの核、面白いと思う仮説）を `spec.md` の先頭に埋める
8. `checklist.md` を眺め、後戻りが高い項目だけ先に埋める
9. 見た目の見本から作る
10. 感触が出たら、その場で `gamedev/friction.md` に生のまま書く

## 道具

| 走らせるもの | 何を見るか |
|---|---|
| `node tools/check-sheets.mjs` | シートの写しのずれ／ジャンルシートの一行めが本物の問いと合っているか |
| `node tools/check-refs.mjs` | `references/` の URL が本当に開くか（**調べさせた出どころが幻でないか**） |
