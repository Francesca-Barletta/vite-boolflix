<script>
import axios from 'axios'
import { store } from './store.js' 
import AppCard from './components/AppCard.vue'

  export default {
    components: {
      AppCard
    },
    data() {
      return {
        store: store
      }
    },
    methods: {
      search(){
        if(store.userValue !== ''){
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=72624c339062fe86b275b999ded604cf&query=${store.userValue}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            const data = res.data;
            // console.log(data.results)
            // const results = data.results;
           store.movies = data;
          })
        }
        
      }
    }
  }

</script>
<template>
  <div>
<div class="container">
  <input type="text" placeholder="inserisci film o serie-tv" v-model.trim="store.userValue">
  <button @click="search">cerca</button>
</div>
<ul>
  <li v-for="(movie, i) in store.movies" :key="i">
  <appCard :singleMovie="movie"/>
  </li>
</ul>
  </div>
</template>

<style lang="scss">
.container{
  width: 900px;
  margin: 0 auto;
  text-align: center;
}
</style>