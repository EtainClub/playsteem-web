import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import i18n from "./i18n";
import BootstrapVue from "bootstrap-vue";
import store from "./store";

import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue);

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
