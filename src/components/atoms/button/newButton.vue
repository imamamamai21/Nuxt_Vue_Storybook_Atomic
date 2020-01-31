<template>
  <v-btn @click="onClick" :outlined="isOutline" color="primary" class="white--text newButton">
    <v-icon>mdi-plus</v-icon>新規{{ process }}
  </v-btn>
</template>

<script>
export default {
  name: 'newButton',
  props: {
    onClick: Function,
    isRegister: { type: Boolean, required: true, default: true }
  },
  computed: {
    process () {
      const process = this.isRegister ? '登録' : '作成'
      return process
    },
    isOutline () {
      const isOutline = this.isRegister ? false : true
      return isOutline
    }
  }
};
</script>

<style lang="scss">
.newButton {
  min-width: 90px !important;
}
</style>