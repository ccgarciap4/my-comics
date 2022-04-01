<template>
  <div class="background-screen">
    <div>
      <info-comic class="background-screen-info" />
      <actions />
    </div>
    <div>
      <div class="zoom">
        <comics-app />
      </div>
    </div>
  </div>
</template>

<script>
import ComicsApp from "../components/ComiscApp.vue";
import InfoComic from "../components/InfoComic.vue";
import Actions from "../components/Actions.vue";

export default {
  components: {
    ComicsApp,
    InfoComic,
    Actions,
  },
  mounted() {
    this.getComics();
  },
  methods: {
    getComics() {
      this.$store.dispatch("getInfoComic");
    },
  },
};
</script>
