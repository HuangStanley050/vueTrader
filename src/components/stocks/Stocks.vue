<template>
  <div><Stock :stock="stock" v-for="stock in stocks"> </Stock></div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: { Stock },
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 100
        },
        {
          id: 2,
          name: "Mercedes",
          price: 200
        },
        {
          id: 3,
          name: "Honda",
          price: 50
        },
        {
          id: 4,
          name: "Mazda",
          price: 78
        }
      ]
    };
  }
};
</script>
