# gamedev

ゲームをまたいで育つ文書の置き場である。

- ここには、どのゲームにも効く作法・型・調査結果だけを置く
- 一本ごとのゲームは別のリポジトリに作る（dungeon-shop、burger-stack など）
- 特定のゲームの中身（仕様書・実装・素材）はここに入れない
- **`friction.md` はゲーム側には置かない。gamedev に一本だけ。**ゲームをまたいで溜まるほうが値打ちがある（同じつまらなさが二本目でも出たら、それは強い信号になる）

## 中身

| 置き場 | 何が入るか |
| --- | --- |
| `CLAUDE.md` | ゲームをまたいで効く作法 |
| `flow.md` | 作りかたの流れ |
| `ideas.md` | 面白さのアイディア置き場（種と点検） |
| `friction.md` | つまらなさの生ログ。整形せずその場で書く |
| `lessons.md` | 一本終えるたびの当たり外れ |
| `templates/` | ゲーム側へ写すひな形 |
| `templates/sheets/` | 段階3で埋めるシート。`00-kihon.md` から始める |
| `tools/` | シートを埋める道具。`serve.mjs` で立ち上げるとファイルに保存される |
| `references/` | 参照元のゲームの調査結果 |

## 新しいゲームを始めるときの手順

1. ゲームのリポジトリを作る
2. `templates/` から `spec.md`、`checklist.md`、`prompt.md`、`check.md` を写す
3. `templates/sheets/00-kihon.md` を写して埋める。答えで配られたシートも順に埋める
4. `gamedev/CLAUDE.md` を参照する一行を、ゲーム側の `CLAUDE.md` に書く
5. `flow.md` の1と2（面白さの核、面白いと思う仮説）を `spec.md` の先頭に埋める
6. `checklist.md` を眺め、後戻りが高い項目だけ先に埋める
7. 見た目の見本から作る
8. 感触が出たら、その場で `gamedev/friction.md` に生のまま書く
