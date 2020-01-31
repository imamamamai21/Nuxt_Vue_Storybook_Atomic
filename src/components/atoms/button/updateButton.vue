<template functional>
  <v-btn @click="props.onClick" color="primary" class="updateButton">
    <v-icon>mdi-update</v-icon>更新
  </v-btn>
</template>

<script>
export default {
  name: 'updateButton',
  props: {
    onClick: Function
  }
};
</script>