import Vue from "vue";
import Router from "vue-router";
import Base from "../views/Base";
import Main from "../views/Main";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "base",
      component: Base,
    },

    {
      path: "/main",
      component: Main,
    },
  ],
});
