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
.serie {
  padding-top: 5vh;
  margin: 0 auto;
  width: 90%;
}
.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 3vh;
}
</style>