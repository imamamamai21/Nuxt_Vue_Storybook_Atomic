<template>
  <v-card class="groupEditScreen">
    <v-card-title>
      <newButton
        :isRegister="true"
        :onClick="createNewData"
        class="editButtons"
        v-if="isNewCreate"
        :disabled="!canCreateNewGroup" />
      <div class="editButtons" v-if="!isNewCreate">
        <deleteButton :onClick="deleteGroup" />
        <updateButton :onClick="updateGroup" />
      </div>
    </v-card-title>
    <v-flex sm12 class="listScreen">
      <listWithTitle :listTitles="listTitles">
        <template v-slot:company>
          <v-select
            v-model="editedCompany"
            :items="companiesData"
            label="会社"
            item-text="company"
            item-value="company"
            required
            return-object />
        </template>
        <template v-slot:name>
          <input
            v-model="editedName"
            class="block inputFeiled"
            placeholder="例：CSグループ、開発グループ"
            maxlength="50"
            type="text" />
        </template>
        <template v-slot:color>
          <colorInputArea :color.sync="editedColor" />
        </template>
      </listWithTitle>
    </v-flex>
    <v-flex sm12 class="escalationsTitle">
      <h5>エスカレーション通知先</h5>
      <p class="cautionText">※通知はエスカレーション返信時に行われます</p>
    </v-flex>
    <v-flex sm12 class="listScreen">
      <listWithTitle :listTitles="listEscalationTitles">
        <template v-slot:email>
          <div class="block">
            <v-flex>
              <onOffButton :status.sync="editedEmailSwitch" />
              <p class="cautionText">
                ※複数のアドレスへ通知したい場合にご利用ください。(※カンマ区切りで複数指定可)
              </p>
            </v-flex>
            <input
              v-model="editedEmailAdress"
              placeholder="test@example.com,hoge@fuga.com"
              class="inputFeiled single"
              multiple="multiple"
              type="text"
              :disabled="!editedData.email.on" />
          </div>
        </template>
        <template v-slot:chatwork>
          <div class="block">
            <v-flex>
              <onOffButton :status.sync="editedCahtworkSwitch" />
              <p class="cautionText">{{ outSideCountion }}</p>
            </v-flex>
            <input
              v-model="editedChatworkToken"
              class="inputFeiled single"
              placeholder="APIトークンを入力(例：abcdefghijklmnopqrstuvwxyz012345)"
              :disabled="!editedData.chatwork.on" />
            <input
              v-model="editedChatworkRoomId"
              class="inputFeiled single"
              placeholder="通知先room idを入力(例：999999)"
              type="number"
              :disabled="!editedData.chatwork.on" />
          </div>
        </template>
        <template v-slot:slack>
          <div class="block">
            <v-flex>
              <onOffButton :status.sync="editedSlackSwitch" />
              <p class="cautionText">{{ outSideCountion }}</p>
            </v-flex>
            <input
              v-model="editedSlackWebhook"
              class="inputFeiled single"
              placeholder="Webhook URLを入力(例：https://hooks.slack.com/services/XXXXX/XXXXX)"
              :disabled="!editedData.slack.on" />
            <input
              v-model="editedSlackChannel"
              class="inputFeiled single"
              placeholder="通知先Channelを入力(例：general)"
              type="text"
              :disabled="!editedData.slack.on" />
          </div>
        </template>
        <template v-slot:userNum>
          <p class="smallText">{{ groupData.userNum }}名</p>
        </template>
        <template v-slot:updateInfo>
          <p class="smallText">{{ groupData.updateInfo }}</p>
        </template>
        <template v-slot:registerInfo>
          <p class="smallText">{{ groupData.registerInfo }}</p>
        </template>
      </listWithTitle>
    </v-flex>
  </v-card>
</template>

<script>
import newButton from '@atoms/button/newButton'
import deleteButton from '@atoms/button/deleteButton'
import updateButton from '@atoms/button/updateButton'
import onOffButton from '@atoms/button/onOffButton'

import listWithTitle from '@modules/listWithTitle'
import colorInputArea from '@atoms/colorInputArea'

import { EMPTY_DATA } from '@pages/group'

export default {
  name: 'groupEditScreen',
  props: {
    groupData: Object,
    companiesData: Array,
    onClickDeleteBtn: Function,
    onClickEditBtn: Function,
    onClickCreateBtn: Function
  },
  components: {
    newButton, deleteButton, updateButton, onOffButton, // buttons
    listWithTitle, colorInputArea
  },
  watch: {
    groupData: function(value, oldValue) {
      this.isNewCreate = (value.company === '' && value.name === '')
      this.editedData = value
    }
  },
  computed: {
    canCreateNewGroup () { // 新規作成できるか否かを返す
      return this.editedData.company != '' && this.editedData.name != ''
    },
    outSideCountion() {
      return '※外部サービスであるため、サービスの状況次第では通知されないことがあることにご注意下さい。'
    },
    listEscalationTitles() {
      return [
        { key: 'email', title: 'Email', icon: 'mdi-email' },
        { key: 'chatwork', title: 'ChatWork', icon: 'mdi-wechat' },
        { key: 'slack', title: 'Slack', icon: 'mdi-slack' },
        { key: 'userNum', title: 'ユーザー数' },
        { key: 'updateInfo', title: '更新者情報' },
        { key: 'registerInfo', title: '登録者情報' }
      ]
    },
    listTitles() {
      return [
        { key: 'company', title: '会社', coution: '※必須' },
        { key: 'name', title: 'グループ名', coution: '※必須' },
        { key: 'color', title: '色'}
      ]
    },
    editedCompany: {
      get () { return this.editedData.company },
      set (value) { this.editedData.company = value.company }
    },
    editedName: {
      get () { return this.editedData.name },
      set (value) { this.editedData.name = value }
    },
    editedColor: {
      get () { return this.editedData.color },
      set (value) { this.editedData.color = value }
    },
    editedEmailSwitch: {
      get () { return this.editedData.email.on },
      set (value) { this.editedData.email.on = value }
    },
    editedEmailAdress: {
      get () { return this.editedData.email.address },
      set (value) { this.editedData.email.address = value }
    },
    editedCahtworkSwitch: {
      get () { return this.editedData.chatwork.on },
      set (value) { this.editedData.chatwork.on = value }
    },
    editedChatworkToken: {
      get () { return this.editedData.chatwork.token },
      set (value) { this.editedData.chatwork.token = value }
    },
    editedChatworkRoomId: {
      get () { return this.editedData.chatwork.roomId },
      set (value) { this.editedData.chatwork.roomId = value }
    },
    editedSlackSwitch: {
      get () { return this.editedData.slack.on },
      set (value) { this.editedData.slack.on = value }
    },
    editedSlackWebhook: {
      get () { return this.editedData.slack.webhook },
      set (value) { this.editedData.slack.webhook = value }
    },
    editedSlackChannel: {
      get () { return this.editedData.slack.channel },
      set (value) { this.editedData.slack.channel = value }
    }
  },
  methods: {
    createNewData() {
      this.onClickCreateBtn(this.editedData) // TODO: APIに必要なデータを生成して渡す
    },
    updateGroup() {
      this.onClickEditBtn(this.editedData) // TODO: APIに必要なデータを生成して渡す
    },
    deleteGroup() {
      this.onClickDeleteBtn() // TODO: IDかなんかあるのかな？APIでデータ受け取ったら必要データ渡す
    }
  },
  data() {
    return {
      editedData: EMPTY_DATA,
      isNewCreate: true
    }
  }
}
</script>


<style lang="scss">
#groupPage {
  .groupEditScreen {
    .editButtons {
      margin: 0 0 0 auto;
    }
    .editButtons.newButton:disabled {
      background-color: map-get($grey, lighten-2) !important;
    }
    .flex.listScreen.sm12 {
      padding: 0;

      .block {
        display: block;
        width: 80%;

        .flex {
          padding: 8px 0;

          .onOffButton {
            margin-right: 8px;
          }
        }
      }
      .smallText {
        margin: 12px 0;
        font-size: 12px;
      }
    }
    .flex.escalationsTitle.sm12 {
      padding: 12px 12px 0;
      margin-top: 24px;
      color: gray;
      background-color: map-get($grey, lighten-3);

      .cautionText {
        padding: 0 0 8px;
        margin-bottom: 0;
      }
    }
    .cautionText {
      color: map-get($red, base);
      font-size: 10px;
      margin-bottom: 0;
      display: inline-block;
      vertical-align: -webkit-baseline-middle;
    }
    .listWithTitle {
      .listContents {
        .inputFeiled.single {
          width: 100%;
        }
      }
    }
  }
}
</style>