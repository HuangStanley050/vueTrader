<template>
  <div><Stock :stock="stock" v-for="stock in stocks"> </Stock></div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  components: { Stock }
};
</script>
