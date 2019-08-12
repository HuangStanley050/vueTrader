<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small
            >(price: {{ stock.price }} | quantity: {{ stock.quantity }})</small
          >
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
            @click="sellStock"
            :disabled="quantity <= 0"
            class="btn btn-success"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
