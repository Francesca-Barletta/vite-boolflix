<script>
import { store } from './store.js' 
// import AppCard from './components/AppCard.vue'
// import AppCardDue from './components/AppCardDue.vue'
import AppMovie from './components/AppMovie.vue'
import AppSerie from './components/AppSerie.vue'
import AppHeader from './components/AppHeader.vue'


  export default {
    components: {
      // AppCard,
      AppHeader,
      AppMovie,
      AppSerie

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
    <div class="container">
    <AppHeader/>
    </div>
    <AppMovie/>
    <AppSerie/>  
  </div>

</template>

<style lang="scss">
.container{
  width: 900px;
  margin: 0 auto;
  text-align: center;
}
</style>