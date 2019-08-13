import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.filter("currency", value => `$${value.toLocaleString()}`);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
