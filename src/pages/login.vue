<template>
  <v-layout>
    <v-flex class="text-center">
      <pageTitle :logoutPage="true" />
      <blockquote class="blockquote">
        none
        <footer>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
import pageTitle from '@atoms/pageTitle'

export default {
  components: {
    pageTitle
  }
}
</script>