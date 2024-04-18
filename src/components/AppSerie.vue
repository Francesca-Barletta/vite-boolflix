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
  background-color: black;
  padding-top: 5vh;
}
.row{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 3vh;
}
.col-6{
  width: 19%;
  margin: 5px;
}
.none{
  display: none;
}
</style>