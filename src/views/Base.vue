<template>
  <div class="card-base">
    <div class="card-base-logo">
      <img src="@/assets/logo.comic.png" />
    </div>
    <p class="card-base-p">
      ! Hey Que Tal ¡ Califica tus Comics Favoritos con una puntuación de 1 a 5,
      si no quieres calificar alguno simplemente oprime el Boton Saltar
    </p>
    <button class="card-base-button">
      <router-link to="/Main" class="letter-base">Entrar</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Base",
};
</script>
