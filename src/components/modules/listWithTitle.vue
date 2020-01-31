<!--**********************************************************
    タイトル付きのリストです。
    受け取ったデータの数だけリストを作って返します

    import listWithTitle from '@modules/listWithTitle'

    <listWithTitle :listTitles="[
      { key: 'company', title: '会社', coution: '※必須' }, // 注意文言が付きます
      { key: 'mail', title: 'Email', icon: 'mdi-email' } // アイコンが付きます
    ]">
      // titleと同じ数だけ、componentを設置できます。
      // このslotはlistの右側に作られます
      // slot名はlistTitlesのkeyと同様のものをセットしてください
      <template v-slot:company>
        {{ hogeData.company }}
      </template>
      <template v-slot:mail>
        {{ hogeData.mail }}
      </template>
    </listWithTitle>
*************************************************************--> 

<template>
  <ul class="listWithTitle">
    <li v-for="data in listTitles" :key="data.key">
      <div class="listTitle">
        <div>
          <p><v-icon>{{ data.icon }}</v-icon>{{ data.title }}</p>
          <span class="caution">{{ data.coution }}</span>
        </div>
      </div>
      <div class="listContents">
        <slot :name="data.key"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'listWithTitle',
  props: {
    /* listTitles: [{ // 以下の形のObjectの配列です
      key    : String // 必須 slot作成に使います
      title  : String // 必須 タイトル 
      coution: String // タイトル下に表示する注意文言(あれば)
      icon   : String // タイトル前のicon名(あれば)
    }] */
    listTitles: Array
  }
};
</script> 

<style lang="scss">
@import '@assets/variables.scss';

.listWithTitle {
  padding-left: 0 !important;
  background-color: white;

  li {
    min-height: 40px;
    list-style: none;
    border-top: 1px solid map-get($grey, lighten-2);
    display: flex;
    flex-wrap:wrap;

    .listTitle {
      padding: 8px;
      float: left;
      min-width: 90px;
      color: white;
      background-color: map-get($grey, darken-1);
      font-weight: bold;
      font-size: 12px;
      border-right: solid 1px map-get($grey, lighten-5);
      margin-right: 8px;
      border-bottom: 1px solid white;

      .div {
        display: table-cell;
        vertical-align:middle;
      }
      p {
        margin-bottom: 0;
        i::before {
          color: white;
          font-size: 14px;
          padding-right: 4px;
        }
      }
      .caution {
        color: map-get($red, lighten-2);
        font-size: 12px;
      }
    }
    .listContents {
      display: contents;
    }
  }
  li:last-child {
    border-bottom: 1px solid map-get($grey, lighten-2);
  }
}
</style>