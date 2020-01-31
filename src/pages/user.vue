<template>
  <v-layout>
    <v-flex class="text-center">
      <pageTitle :userPage="true" />
      <blockquote class="blockquote">
        <newButton :isRegister="true" :onClick="registerNewUserData" />
        <newButton :isRegister="false" :onClick="initUserForm" />
        <deleteButton :onClick="deleteUserData" />
        <updateButton :onClick="updateUserData" />
        <copyButton :onClick="copyUserData" />
        <csvButton :isInput="false" :onClick="outputUserCsv" />
        <csvButton :isInput="true" :onClick="inputUserCsv" />
        
        <onOffButton :changeStatus="onChangeToggle" />
        <onOffButton :changeStatus="onChangeToggle" :isOn="false"/>

        <footer>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import pageTitle from '@atoms/pageTitle'
import newButton from '@atoms/button/newButton'
import deleteButton from '@atoms/button/deleteButton'
import updateButton from '@atoms/button/updateButton'
import copyButton from '@atoms/button/copyButton'
import csvButton from '@atoms/button/csvButton'
import onOffButton from '@atoms/button/onOffButton'

export default {
  components: {
    newButton,
    deleteButton,
    updateButton,
    copyButton,
    csvButton,
    pageTitle,
    onOffButton
  },
  methods: {
    registerNewUserData() {
        // ユーザー登録処理
    },
    initUserForm() {
        // ユーザー作成処理
    },
    editUserData() {
        // ユーザー編集処理
    },
    deleteUserData() {
        // ユーザー削除処理
    },
    updateUserData() {
        // ユーザー更新処理
    },
    copyUserData() {
        // ユーザー複製処理
    },
    outputUserCsv() {
        // ユーザー情報CSV出力処理
    },
    inputUserCsv() {
        // ユーザー情報CSV取込処理
    },
    onChangeToggle(isOn) {
      console.log('@ステータス変更しました: ONか否か = ', isOn)
    }
  }
}
</script>