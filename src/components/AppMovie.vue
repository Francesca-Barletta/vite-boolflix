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
@use '../style/partials/mixins' as*;
.movie {
@include container-row-mixin;
}
.row{
@include row-evenly-mixin;
}

</style>