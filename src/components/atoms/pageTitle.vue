/************************************************************
    全てのページのタイトルに使います。
    import pageTitle from '@atoms/pageTitle'

    <pageTitle />                     // TOPページ
    <pageTitle :companyPage="true" /> // 会社情報管理ページ
    <pageTitle :groupPage="true" />   // グループ管理ページ
    <pageTitle :userPage="true" />    // ユーザー管理ページ
    <pageTitle :appPage="true" />     // アプリケーション管理ページ
    <pageTitle :logoutPage="true" />  // ログアウトページ
*************************************************************/

<template>
  <h3 class="pageTitle">
    <v-icon>{{ titleData.icon }}</v-icon>
    {{ titleData.title }}
  </h3>
</template>

<script>
import {  PAGE_TITLTE_TOP,
          PAGE_TITLTE_COMPANY,
          PAGE_TITLTE_GROUP,
          PAGE_TITLTE_USER,
          PAGE_TITLTE_APPLICATION,
          PAGE_TITLTE_LOGOUT } from '@constants/pageTitles'

export default {
  name: 'pageTitle',
  props: {
    companyPage: { type: Boolean, required: false, default: false },
    groupPage:   { type: Boolean, required: false, default: false },
    userPage:    { type: Boolean, required: false, default: false },
    appPage:     { type: Boolean, required: false, default: false },
    logoutPage:  { type: Boolean, required: false, default: false }
  },
  computed: {
    titleData() {
      return  (this.companyPage) ? PAGE_TITLTE_COMPANY :
              (this.groupPage)   ? PAGE_TITLTE_GROUP :
              (this.userPage)    ? PAGE_TITLTE_USER :
              (this.appPage)     ? PAGE_TITLTE_APPLICATION :
              (this.logoutPage)  ? PAGE_TITLTE_LOGOUT :
              PAGE_TITLTE_TOP
    }
  }
};
</script>

<style lang="scss">
@import '@assets/variables.scss';

.pageTitle {
  width: 100%;
  padding: 6px 12px;
  margin-bottom: 16px;
  color: map-get($grey, darken-3);
  background-color: white;
  text-align: left;
  font-weight: normal;
  border: solid 1px lightgray;
  border-left: solid 10px map-get($grey, darken-1);

  .v-icon {
    color: map-get($grey, darken-3);
  }
}
</style>