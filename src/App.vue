<script>
import { store } from './store.js' 
// import AppCard from './components/AppCard.vue'
// import AppCardDue from './components/AppCardDue.vue'
import AppMovie from './components/AppMovie.vue'
import AppSerie from './components/AppSerie.vue'
import AppHeader from './components/AppHeader.vue'
import AppFavorite from './components/AppFavorite.vue'

  export default {
    components: {
      // AppCard,
      AppHeader,
      AppMovie,
      AppSerie,
      AppFavorite

    },
    data() {
      return {
        store: store,
        
      }
    },
    methods: {
      handleToggleFavoritesView() {
        this.store.showFavorites = !this.store.showFavorites;
      }
    }
}

</script>
<template>

  <AppHeader @toggleFavoritesView="handleToggleFavoritesView" />
  <AppFavorite v-if="store.showFavorites && store.userValue == '' && store.movies.length == 0 && store.tvSeries.length == 0 "/>
  <div v-else="!store.showFavorites || store.userValue !== ''">
    <AppMovie />
    <AppSerie />
  </div>


</template>

<style lang="scss" scoped>

</style>