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
    <div class="header-container">
        <img class="logo" src="/boolflix.png" alt="">
        <div class="search">   
            <input class="input-search" type="text" placeholder="inserisci film o serie-tv" v-model.trim="store.userValue" @keyup.enter="search">
            <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
        </div>

    </div>

</template>

<style lang="scss" scoped>
.header-container{
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 30px;
  width: 90%;
}
.logo{
  width:250px;
}
.icon{
  color: white;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  pointer-events:none;
}
.search{
  position: relative;
}
.input-search{
  outline: none;
  border: none;
  background-color: grey;
  width: 300px;
  height: 30px;
  padding-left: 50px;
  padding-right: 10px;
  caret-color: white;
  color: white;
  &::placeholder{
    color: white;
  }
  

  &:focus-visible{
  outline: none;
}
}
</style>