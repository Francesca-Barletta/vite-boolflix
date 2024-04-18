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
   
    <AppHeader/>
    
    <AppMovie/>
    <AppSerie/>  
  </div>

</template>

<style lang="scss">

</style>