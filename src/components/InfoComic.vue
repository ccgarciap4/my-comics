<template>
  <div>
    <h1 class="tit">{{ getInfoComic.title }}</h1>
    <p class="year">{{ getInfoComic.year }}</p>
    <p class="alt">{{ getInfoComic.alt }}</p>
  </div>
</template>

<script>
export default {
  name: "InfoComic",
  computed: {
    getInfoComic() {
      return this.$store.state.infoComic;
    },
  },
};
</script>
