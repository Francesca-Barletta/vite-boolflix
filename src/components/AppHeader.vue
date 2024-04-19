<script>
import axios from 'axios'
import { store } from '../store.js'

export default{
    data() {
      return {
        store: store,
        searchInput: false
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
        <img class="logo-sm" src="/logo.png" alt="">
        <div class="search">   
            <input class="input-search" type="text" placeholder="inserisci film o serie-tv" v-model.trim="store.userValue" @keyup.enter="search"
            :class="searchInput === true ? 'inline-block':'none'">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" @click="searchInput = !searchInput" 
            :class="searchInput === true ? 'search-true':'icon'"></font-awesome-icon>/>
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
  display:none;
}
.logo-sm{
  width:30px;
}
.none{
  display:none;
}
.input-true{
 font-size: 20px;
}
.inline-block{
  display:inline-block;
}
.icon{
  color: white;
  font-size: 20px;
  cursor: pointer;
  top: 50%;
  left: 20px;
 
}
.search{
  position: relative;
}
.search-true{
  position: absolute;
  transform: translateY(-50%);
  font-size: 20px;
  top: 50%;
  left: 20px;
  color: white;
  cursor: pointer;
}
.input-search{
  outline: none;
  border: none;
  background-color: grey;
  width: 150px;
  height: 30px;
  padding-left: 50px;
  padding-right: 10px;
  caret-color: white;
  color: white;

  &::placeholder{
    color: white;
  }
  
}

@media (min-width:768px){
  .logo-sm{
    display:none;
  }

  .logo{
    display:block;
    max-width: 250px;
  }

 .icon{
  position: absolute;
  transform: translateY(-50%);
  pointer-events: none;
 }

  .input-search{
  display: inline-block;
  width: 200px;
}

}

@media (min-width:992px){
.input-search{
  width: 300px;
}
}
</style>