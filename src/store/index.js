import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoComic: {
      img: "",
      title: "",
      year: "",
      alt: "",
    },
  },
  mutations: {
    setInfoComic(state, payload) {
      state.infoComic = payload;
    },
  },
  actions: {
    getInfoComic({ commit }) {
      const numberComic = parseInt(Math.random() * (2592 - 1) + 1);
      let url = "http://comic.bhxq-tl6g.accessdomain.com/";
      console.log(numberComic);
      axios.post(url, { numberComic: numberComic }).then((response) => {
        console.log(response);
        commit("setInfoComic", response.data);
      });
    },
  },
});
