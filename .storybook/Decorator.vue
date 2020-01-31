<template>
  <div class='decorator'>
    <slot name='story'></slot>
  </div>
</template>
<script>
  export default {
    name: 'decorator'
  }
</script>

<style lang='scss'>
@import '@assets/variables.scss';
@import '@assets/sass/app.scss';
</style>