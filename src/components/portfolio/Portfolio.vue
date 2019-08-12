<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock"> </Stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    Stock
  }
};
</script>
