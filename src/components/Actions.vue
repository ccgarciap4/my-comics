<template>
  <div>
    <star-rating
      v-model="rating"
      :show-rating="false"
      inactive-color="#a5a4a4"
    ></star-rating>
    <button class="main-button" @click="getComics">Saltar</button>
    <button class="main-button main-button-rate" @click="rate">
      Calificar
    </button>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "Actions",
  components: {
    StarRating,
  },
  data() {
    return {
      rating: 0,
    };
  },
  methods: {
    rate() {
      if (this.rating != 0) {
        this.$toast.open({
          message:
            "has calificado: " + this.rating + " Gracias por tu Calificación ",
          type: "success",
          duration: 1500,
        });
        this.rating = 0;
        this.getComics();
      } else {
        this.$toast.open({
          message: "Elija una Calificación correcta u Oprima el boton saltar",
          type: "error",
          duration: 1500,
        });
      }
    },
    getComics() {
      this.rating = 0;
      this.$store.dispatch("getInfoComic");
    },
  },
};
</script>
