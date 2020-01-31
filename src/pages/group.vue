<template>
  <v-container grid-list-xl id="groupPage">
    <v-layout row wrap>
      <v-flex sm12>
        <pageTitle :groupPage="true" />
      </v-flex>
      <v-flex sm12 md6 lg6 xl6>
        <groupsList
          :groupsData=testData.groups
          :onClickEditBtn=showSelectGroup
          :onClickCreateBtn=showEmptyGroup />
      </v-flex>
      <v-flex sm12 md6 lg6 xl6>
        <groupEditScreen
          :groupData=selectedGroup
          :companiesData=testData.groups
          :onClickCreateBtn=createNewGroup
          :onClickEditBtn=updateGroup
          :onClickDeleteBtn=deleteGroup />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import pageTitle from '@atoms/pageTitle'

import groupsList from '@organisms/group/groupsList'
import groupEditScreen from '@organisms/group/groupEditScreen'

import { PAGE_TITLTE_GROUP } from '@constants/pageTitles'

export const EMPTY_DATA = { name: '', company: '', color: '', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 0, updateInfo: '', registerInfo: ''}

export default {
  components: {
    pageTitle, // Atom
    groupsList, groupEditScreen // Organisms
  },
  methods: {
    /**
     * 新規作成フィールドを表示
     */
    showEmptyGroup: function() {
      this.selectedGroup = EMPTY_DATA
    },
    /**
     * 右エリアの編集ボタン押下時 左エリアのグループを更新する
     */
    showSelectGroup: function(id) {
      this.selectedGroup = this.testData.groups.filter(group => group.id === id)[0]
    },
    createNewGroup: function(data) {
      console.log('@createNewGroup: ', data)
      // TODO: API通信
    },
    updateGroup: function(data) {
      console.log('@updateGroup: ', data)
      // TODO: API通信
    },
    deleteGroup: function() {
      console.log('@deleteGroup: ')
      // TODO: API通信
    }
  },
  data() {
    return {
      selectedGroup: EMPTY_DATA,
      testData: { // TODO: load data
        groups: [
          { id: '1', name: 'ca-advance(CS)', company: '会社１', color: '#fffd46', email: { on: true, address: 'hoge.email.com' }, chatwork: { on: true, token: 'API_TOKEN_HOGE', roomId: '12345' }, slack: { on: true, webhook: 'https://hooks.slack.com/services/XXXXX/XXXXX', channel: 'hoge' }, userNum: 0, updateInfo: '', registerInfo: '' },
          { id: '2', name: 'ca-advance(開発)', company: '会社１', color: '#ff00ff', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)' },
          { id: '3', name: 'Ｂチーム', company: '会社2', color: '', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 888, updateInfo: 'hoge太郎 (2013-04-08 15:28:32)', registerInfo: ''  },
          { id: '4', name: 'AＢチーム', company: '会社１', color: '#f932af', email: { on: true, address: 'hoge.cyber.co.jp' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 114, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: ''  },
          { id: '5', name: 'ミクシーマングループ', company: '会社１', color: '#f9ffaf', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: ''  },
          { id: '6', name: '大量グループ	', company: '会社2', color: '#77f2af', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: ''  },
          { id: '7', name: 'CAアメリカ', company: '会社１', color: '#f9ccaf', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '8', name: 'Aチーム', company: '会社１', color: '', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '9', name: 'CSグループ01', company: '会社2', color: '#ff0ded', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '10', name: '推進委員会', company: '会社１', color: '#ffa6ee', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '11', name: 'サイゲームス01', company: '会社3', color: '#f9eeaf', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '12', name: 'CAAD cygamesチーム', company: '会社3', color: '#fcc2af', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '13', name: 'CAAD 管理ユーザ', company: '会社１', color: '#4df2af', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '14', name: 'シミュレーター', company: '会社１', color: '#dd32af', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' },
          { id: '15', name: 'SAPグループ01', company: '会社１', color: '#f9ddaf', email: { on: false, address: '' }, chatwork: { on: false, token: '', roomId: '' }, slack: { on: false, webhook: '', channel: '' }, userNum: 10, updateInfo: 'チケット 三郎汰 (2013-04-08 15:28:32)', registerInfo: '' }
        ]
      }
    };
  }
}
</script>