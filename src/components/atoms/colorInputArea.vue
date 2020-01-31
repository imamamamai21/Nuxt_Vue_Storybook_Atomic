<!--**********************************************************
    色を編集できるComponentです。
    import colorInputArea from '@atoms/colorInputArea'

    <colorInputArea :color.sync="inputColor" />
    ....
    inputColor: {
      get () { return this.color },
      set (value) { this.color = value }
    },
*************************************************************-->
<template>
  <div class="colorInputArea">
    <v-btn @click="openPicker" color="white">
      <v-icon :style="{ color: colorCode }">mdi-circle</v-icon>
      <input
        type="text"
        v-model="colorCode"
        placeholder="例(赤)：#FF0000" />
      <v-icon class="editIcon">{{ editIcon }}</v-icon>
    </v-btn>
    <v-color-picker
      v-if="showPicker"
      v-model="colorCode"
      sync
      show-swatches
      swatches-max-height="80"
      mode="hexa" />
  </div>
</template>

<script>
export default {
  name: 'colorInputArea',
  props:　{
    color: String
  },
  computed: {
    colorCode: {
      get () {
        return this.color
      },
      set (value) {
        this.$emit('update:color', value)
      }
    },
    editIcon() {
      return this.showPicker ? 'mdi-close-circle-outline' : 'mdi-border-color'
    }
  },
  methods: {
    openPicker() {
      this.showPicker = !this.showPicker
    }
  },
  data() {
    return {
      showPicker: false
    }
  }
};
</script>

<style lang="scss">
.colorInputArea {
  width: 300px;
  padding: 8px 0 8px;

  input {
    padding-left: 12px;
    height: 36px;
    color: map-get($grey, darken-2);
  }
  .editIcon.v-icon {
    color: map-get($grey, lighten-1);
  }
}
</style>