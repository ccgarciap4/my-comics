import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import router from "./router";
import "./assets/scss/base.scss";
import "./assets/scss/main.scss";
import VueParticles from "vue-particles";

Vue.use(VueParticles);
Vue.use(VueToast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
