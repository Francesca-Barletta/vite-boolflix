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
    <h2>Movie</h2>
    <div class="movie">
        <ul class="card-wrapper">
            <li v-for="(movie, i) in store.movies" :key="i" class="card-wrapper">
                <AppCard :singleItem="movie" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.movie{
    background-color: blue;
}
.card-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>