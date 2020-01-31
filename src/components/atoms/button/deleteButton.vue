<template functional>
  <v-btn @click="props.onClick" color="error" class="deleteButton">
    <v-icon>mdi-delete</v-icon>削除
  </v-btn>
</template>

<script>
export default {
  name: 'deleteButton',
  props: {
    onClick: Function
  }
};
</script>