import { action } from '@storybook/addon-actions';

import pageTitle from '@atoms/pageTitle'
import newButton from '@atoms/button/newButton'
import deleteButton from '@atoms/button/deleteButton'
import updateButton from '@atoms/button/updateButton'
import copyButton from '@atoms/button/copyButton'
import csvButton from '@atoms/button/csvButton'
import onOffButton from '@atoms/button/onOffButton'


export default {
  title: 'Atoms'
};

export const Buttons = () => ({
  components: { 
    newButton, deleteButton, updateButton, copyButton, csvButton, onOffButton
  },
  props: {
    onOffValue: false
  },
  template: `
    <div>
      <h2>ボタン系コンポーネント</h2>
      <p><h3>新規ボタン</h3>
        <newButton :isRegister="true" :onClick="action" />
        <newButton :isRegister="false" :onClick="action" />
      </p>
      <p>
        <h3>削除ボタン</h3>
        <deleteButton :onClick="action" />
      </p>
      <p>
        <h3>更新ボタン</h3>
        <updateButton :onClick="action" />
      </p>
      <p>
        <h3>複製ボタン</h3>
        <copyButton :onClick="action" />
      </p>
      <p>
        <h3>CSVボタン</h3>
        <csvButton :isInput="false" :onClick="action" />
        <csvButton :isInput="true" :onClick="action" />
      </p>
      <p>
        <h3>ON・OFFボタン</h3>
        <onOffButton :status.sync="editedSwitch" />
      </p>
    </div>
  `,
  computed: {
    editedSwitch: {
      get () { return this.onOffValue },
      set (value) { this.onOffValue = value }
    }
  },
  methods: {
    action: action('clicked')
  }
});

export const Title = () => ({
  components: { pageTitle },
  template: `
    <div>
      <h2>タイトルコンポーネント</h2>
      <p>ページ別にフラグがあるので、それを立ててページの出し分けをします</p>
      <pageTitle />                    
      <pageTitle :companyPage="true" />
      <pageTitle :groupPage="true" />
      <pageTitle :userPage="true" />
      <pageTitle :appPage="true" />
      <pageTitle :logoutPage="true" />
    </div>
  `
});
