<!--************************************************************
    ONとOFFを切り替えるトグルボタンです。
    import onOffButton from '@atoms/button/onOffButton'

    <onOffButton :status.sync="editedSwitch" />
    ....
    editedSwitch: {
      get () { return this.on },
      set (value) { this.on = value }
    }
*************************************************************-->

<template>
  <toggle-button
    :width="60"
    :height="28"
    :font-size="10"
    color="#3A76D2"
    :labels="{checked: 'ON', unchecked: 'OFF'}"
    class="onOffButton"
    v-model="inputStatus"
    sync />
</template>

<script>
export default {
  name: 'onOffButton',
  props: {
    status: Boolean
  },
  computed: {
    inputStatus: {
      get () {
        return this.status
      },
      set (value) {
        this.$emit('update:status', value)
      }
    }
  }
};
</script>