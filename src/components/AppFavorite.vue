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

  <div v-if="this.store.showFavorites" class="movie">
    <h2>La Mia Lista</h2>
    <div class="row">
        <AppCard  v-for="(item, i) in store.myList" :key="i" :singleItem="item" />
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
h2{
  color:white;
}

.none {
  display: none;
}

.block {
  display: block;
}
</style>