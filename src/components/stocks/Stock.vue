<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }} <small>(price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            v-model.number="quantity"
            class="form-control"
            placeholder="Quantity"
          />
        </div>
        <div class="pull-right">
          <button
            @click="buyStock"
            :disabled="quantity <= 0"
            class="btn btn-success"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  data() {
    return {
      quantity: 0
    };
  }
};
</script>
