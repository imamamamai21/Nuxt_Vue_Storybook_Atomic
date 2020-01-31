<template>
  <v-card class="groupsList">
    <v-card-title class="tableTitle">
      <v-flex xs7>
        <v-select
          v-model="selected"
          :items="companies"
          label="会社"
          item-text="company"
          item-value="company"
          required
          return-object
          @change="changeCampany" />
      </v-flex>
      <v-flex xs2 class="companyNum">
          {{ showGroups.length }}件
      </v-flex>
      <v-flex xs3>
          <newButton :isRegister="false" :onClick="onClickCreateBtn" />
      </v-flex>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="showGroups"
      :items-per-page="10"
      multi-sort
      class="elevation-1"
    >
      <template v-slot:item.colorId="{ item }">
        <v-icon :style="{ color: item.color }">mdi-circle</v-icon>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon @click="onClickEditBtn(item.id)" color="grey" dark>
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import newButton from '@atoms/button/newButton'

const ALL_TEXT = '全て'

export default {
  name: 'groupsList',
  props: {
    groupsData: Array,
    onClickEditBtn: Function,
    onClickCreateBtn: Function
  },
  components: {
    newButton
  },
  computed: {
    headers() {
      return [
        { text: 'ID', value: 'id' },
        { text: 'グループ名', value: 'name' },
        { text: '色', value: 'colorId', align: 'center', sortable: false },
        { text: '編集', value: 'action', align: 'center', sortable: false }
      ]
    },
    companies() {
      return this.groupsData.concat({ company: ALL_TEXT })
    }
  },
  methods: {
    /**
     * selectBoxの値変更時、table内の値も変更する
     */
    changeCampany: function() {
      if (this.selected.company === ALL_TEXT) this.showGroups = this.groupsData
      else this.showGroups = this.groupsData.filter(group => group.company === this.selected.company)
    }
  },
  data() {
    return {
      selected: {},
      showGroups: this.groupsData
    }
  }
}
</script>

<style lang="scss">
#groupPage {
  .groupsList {
    .tableTitle {
      padding: 0 8px;
    }
    .companyNum {
      font-weight: normal;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>