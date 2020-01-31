# Components
[AtomicDesign](https://bradfrost.com/blog/post/atomic-web-design/)の概念をベースに使っています。
このディレクトリでは以下の3構成に別れます。

## ディレクトリ
### Organisms
- 使い回しは基本しないもの
- Componentsの中では最大単位
- データの操作を行う
- 各ページごとにディレクトリをわける
- 共通で使うものは `shared` ディレクトリに入れる

### Molecules
- 使い回しを意識したもの
- Atomよりも単位の大きい共通パーツ
- データの操作をしない


### Atoms
- 最小単位
- 使い回しを意識したもの
- データの操作をしない

## PresentationalとContainer 
### Presentational
- 見た目に関する系
- Modules・Atoms

### Container
- Store操作するデータの書き換えやユーザー動作に関わる系
- Organisms