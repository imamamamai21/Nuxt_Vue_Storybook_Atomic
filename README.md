# Nuxt.jsフロントエンド
以下の言語を使ったフロントエンド環境の構築です。
API通信などは行いません。

## 使用言語・フレームワーク
- Vue.js
- Nuxt.js
- Vuetify
- sass
- storybook

## 環境セットアップ
``` bash
# clone &　移動
$ git clone https://github.com/XXXX.git
$ cd 格納パス
# package install
$ yarn
# 開発サーバー起動
$ yarn dev
# localhost:3000でアクセス
```

# Nuxt.jsドキュメント
[Nuxt.js docs](https://nuxtjs.org).

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