import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
require("@/index.css");

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  axios,
}).$mount("#app");
