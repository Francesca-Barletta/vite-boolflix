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
  <div class="serie">
    <div class="row">
        <AppCard v-for="(serie, i) in store.tvSeries" :key="i" :singleItem="serie" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as*;

.serie {
@include container-row-mixin;
}
.row{
@include row-evenly-mixin;
}

</style>