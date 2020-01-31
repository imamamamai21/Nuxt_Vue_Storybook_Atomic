# Storybook
[Storybook](https://storybook.js.org/)を導入しています。
こちらを使って利用しているComponentを確認できます。
(Atom,Moduleなど)

## 確認(実行)方法
```bash
$ yarn storybook
```
上記実行でlocalhostが立ち上がります。
http://localhost:6006/

## 実装
新しいatomなどを作ったら、Sotrybookでも確認できるようにしましょう。
`src/stories`ディレクトリに`xxx.stories.js`ファイルがあります。
こちらに必要なファイル・componentを追加してください。

## 設定ファイル置き場
ディレクトリ直下に`.storybook/`という隠しディレクトリがあります。
そちらにあるconfigファイルやaddonファイルなどを編集ください。