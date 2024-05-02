<script>
import axios from 'axios'
import { store } from '../store.js'

export default{
    data() {
      return {
        store: store,
        searchInput: false,
        isVisible: false,
        menuVisible: false,
        generes: false
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
            this.store.movies = results.map((el)=> {
              el.vote = Math.floor(el.vote_average / 2)
              return el
            })
            //  console.log(store.movies)
          })
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=72624c339062fe86b275b999ded604cf&query=${store.userValue}`)
          .then((res)=>{
            
            const data = res.data;
            console.log(data.results)
            const results = data.results;
            this.store.tvSeries = results.map((el)=> {
              el.vote = Math.floor(el.vote_average / 2)
              return el
            })
          })
      }

    }
  }
}
</script>
<template>
  <div class="header">
    <img class="logo" src="/boolflix.png" alt="">
    <img class="logo-sm" src="/logo.png" alt="">
    <div class="search">
      <input class="input-search" type="text" placeholder="inserisci film o serie-tv" v-model.trim="store.userValue"
        @keyup.enter="search" :class="searchInput === true ? 'inline-block' : 'none'">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" @click="searchInput = !searchInput"
        :class="searchInput === true ? 'search-true' : 'icon'"></font-awesome-icon>/>
        <font-awesome-icon class="hamburger" :icon="['fas', 'bars']"  @click="isVisible = !isVisible"/>
    </div>
  </div>
  <div class="navbar" :class="isVisible === true ? 'block': 'none'">
    <ul class="nav">
      <li class="btn" @click="menuVisible = !menuVisible">Film</li>
      <li class="btn" @click="menuVisible = !menuVisible">Serie Tv</li>
      <li class="btn">La Mia Lista</li>
      <li class="btn gnr" :class="menuVisible === true ? 'block': 'none'"  @click="generes = !generes">Generi</li>
    </ul>
    <ul class="nav">
      <li class="btn-sm" :class="generes === true ? 'block': 'none'">Azione</li>
      <li class="btn-sm" :class="generes === true ? 'block': 'none'">Commedia</li>
      <li class="btn-sm" :class="generes === true ? 'block': 'none'">Horror</li>
      <li class="btn-sm" :class="generes === true ? 'block': 'none'">Fantascenza</li>
      <li class="btn-sm" :class="generes === true ? 'block': 'none'">Romantici</li>

    </ul>
  </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as*;

.hamburger{
  color: white;
  font-size: 25px;
  cursor: pointer;
}
.header{
  @include header-mixin
}
.navbar{
  margin: 0 auto;
  width: 90%;
}
.nav{
  @include nav-mixin
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
.block{
  display:block;
}
.input-true{
 font-size: 20px;
}
.inline-block{
  display:inline-block;
}
.icon{
  @include icon-mixin-sm
}
.search{
  position: relative;
}
.search-true{
  @include search-true-mixin
}
.input-search{
  @include input-search-sm-mixin
  
}

@media (min-width:768px) {
  .logo-sm {
    display: none;
  }

  .logo {
    display: block;
    max-width: 250px;
  }

  .icon {
    @include icon-mixin-md
  }

  .input-search {
    @include input-search-md-mixin
  }

  .hamburger {
    display: none;
  }

  .navbar {
    padding: 0 10px;
    display: block;
  }

}

@media (min-width:992px) {
  .input-search {
    @include input-search-lg-mixin
  }

  .hamburger {
    display: none;
  }
}
</style>
