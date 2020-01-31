<template>
  <v-btn @click="onClick" color="blue-grey" class="csvButton white--text">
    <v-icon>{{ icon }}</v-icon>CSV{{ process }}
  </v-btn>
</template>

<script>
export default {
  name: 'csvButton',
  props: {
    onClick: Function,
    isInput: { type: Boolean, required: true, default: true }
  },
  computed: {
    icon () {
      const icon = this.isInput ? 'upload' : 'download'
      return 'mdi-' + icon
    },
    process () {
      const process = this.isInput ? '取込' : '出力'
      return process
    }
  }
};
</script>