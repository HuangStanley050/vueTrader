<template>
  <div class="container"><Header /><router-view> </router-view></div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  created() {
    this.$store.dispatch("initStocks");
  },
  name: "app",
  components: { Header }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
