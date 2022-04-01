<template>
  <img class="img" v-bind:src="getImgComic.img" v-bind:alt="info.alt" />
</template>

<script>
export default {
  name: "ComiscApp",
  props: {
    msg: String,
  },
  data() {
    return {
      info: {
        img: " ",
      },
    };
  },
  computed: {
    getImgComic() {
      return this.$store.state.infoComic;
    },
  },
};
</script>
