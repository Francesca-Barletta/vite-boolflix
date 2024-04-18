<script>
import axios from 'axios'
import { store } from '../store.js'

export default{
    data() {
      return {
        store: store,
      }
    },
  methods: {
    search() {
      if (store.userValue !== '') {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=72624c339062fe86b275b999ded604cf&query=${store.userValue}`)
          .then((res) => {
            // console.log(res);
            // console.log(res.data);
            const data = res.data;
            console.log(data.results)
            const results = data.results;
            this.store.movies = results;
            //  console.log(store.movies)
          })
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=72624c339062fe86b275b999ded604cf&query=${store.userValue}`)
          .then((res)=>{
            
            const data = res.data;
            console.log(data.results)
            const results = data.results;
            this.store.tvSeries = results;
          })
      }

    }
  }
}
</script>
<template>
    <div class="container">
        <h1>Boolflix</h1>
        <div>
            <input type="text" placeholder="inserisci film o serie-tv" v-model.trim="store.userValue" @keyup.enter="search">
            <!-- <button @click="search">cerca</button> -->
        </div>

    </div>

</template>

<style lang="scss">
.container{
    h1{
        color: red;
        font-size: 50px;
    }
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 30px;
}
</style>