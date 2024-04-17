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
    <div>
        <h2>Serie</h2>
        <ul class="card-wrapper">
            <li v-for="(serie, i) in store.tvSeries" :key="i" class="card-wrapper">
                <AppCard :singleItem="serie" />
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
.serie{
    background-color: rgb(0, 119, 255);
}
.card-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>