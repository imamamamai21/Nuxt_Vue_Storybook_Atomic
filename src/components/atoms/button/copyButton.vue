<template functional>
  <v-btn @click="props.onClick" color="cyan" dark class="copyButton">
    <v-icon>mdi-content-duplicate</v-icon>複製
  </v-btn>
</template>

<script>
export default {
  name: 'copyButton',
  props: {
    onClick: Function
  }
};
</script>