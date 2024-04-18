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
        <h2>Serie</h2>
        <ul class="card-wrapper">
            <li v-for="(serie, i) in store.tvSeries" :key="i" class="card-wrapper">
                <AppCard :singleItem="serie" />
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
.serie {
  h2 {
    margin: 20px;
    font-size: 35px;
  }

  padding: 20px;
  background-color: rgb(32, 32, 32);
  color: white;
  text-align: center;
}
.card-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>