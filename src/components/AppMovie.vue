<script>
import { store } from '../store.js'
import AppCard from './AppCard.vue'
export default {
    components: {
      AppCard
    },
    data() {
      return {
        store: store,
      }
    },
}
</script>
<template>

  <div class="movie">
    <div class="row">
        <AppCard  v-for="(movie, i) in store.movies" :key="i" :singleItem="movie"/>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.movie {
  background-color: black;
  padding-top: 5vh;
  margin-left: auto;
}
.row{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 3vh;
}

</style>