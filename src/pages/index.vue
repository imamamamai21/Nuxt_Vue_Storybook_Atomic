<template>
  <v-layout>
    <v-flex class="text-center">
      <pageTitle />
      <blockquote class="blockquote">
        <h2>フロントエンドの設計ベースです</h2>
        <p>フロントはAtomic designをもとに作っています</p>
        <ul>
          <li>オリジナルのCSS(sacc)の反映</li>
          <li>storybookによる確認環境の設定</li>
          <li>vuetifyを使ったデザインベースの採用</li>
        </ul>
        <footer>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import pageTitle from '@atoms/pageTitle'

export default {
  components: {
    pageTitle
  }
}
</script>