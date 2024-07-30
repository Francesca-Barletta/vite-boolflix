<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
  data() {
    return {
      store: store,
      searchInput: false,
      isVisible: false,
      filmGenres: false,
      tvSeriesGenres: false,
      genreId: 0,
      // showFavorites: false

    }
  },
  emits:['toggleFavoritesView'],
  methods: {
    activeGenre(id){
      this.genreId = id;
    },
    ratingMovie(array){
      this.store.movies = array.map((el) => {
              el.vote = Math.floor(el.vote_average / 2);
              return el;
      })
    },
    ratingTv(array){
      this.store.tvSeries = array.map((el) => {
              el.vote = Math.floor(el.vote_average / 2);
              return el;
      })
    },
    search() {
      if (store.userValue !== '') {
        this.store.showFavorites = false;  
        this.store.movies = [];
        this.store.tvSeries = [];
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=72624c339062fe86b275b999ded604cf&query=${store.userValue}`)
          .then((res) => {
            // console.log(res);
            // console.log(res.data);
            const data = res.data;
            console.log(data.results)
            const results = data.results;
           this.ratingMovie(results);
            //  console.log(store.movies)
          })
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=72624c339062fe86b275b999ded604cf&query=${store.userValue}`)
          .then((res) => {

            const data = res.data;
            console.log(data.results)
            const results = data.results;
            this.ratingTv(results);
          })
      }else{
        this.store.movies = [];
        this.store.tvSeries = [];
      }

    },
    movieGenres(id) {
      this.store.movies = [];
      this.store.tvSeries = [];
      this.store.showFavorites = false;                           
      this.activeGenre(id);
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=72624c339062fe86b275b999ded604cf&with_genres=${this.genreId}`)
      .then((res)=> {

        const data = res.data;
        const results = data.results;
        console.log(results)
        this.ratingMovie(results);
      })
    },
    tvGenres(id) {
      this.store.movies = [];
      this.store.tvSeries = [];
      this.store.showFavorites = false;              
      this.activeGenre(id);
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=72624c339062fe86b275b999ded604cf&with_genres=${this.genreId}`)
      .then((res)=> {

        const data = res.data;
        const results = data.results;
        console.log(results)
        this.ratingTv(results);
      })
    },
    toggleFavoritesView() {
      this.store.userValue = '';
      this.store.movies = [];
      this.store.tvSeries = [];
      this.filmGenres = false,
      this.tvSeriesGenres = false,
      this.showFavorites = !this.showFavorites;
      this.$emit('toggle-favorites-view', this.store.showFavorites);
      console.log(this.store.myList);
      console.log(this.store.showFavorites);

      
    },
    clear(){
      this.store.movies = [];
      this.store.tvSeries = [];
      this.filmGenres = false;
      this.tvSeriesGenres = false;
      this.store.showFavorites = false;
      this.store.userValue = '';
      this.fetchPopular();
      console.log(this.store.showFavorites);
    },
    fetchPopular(){
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=72624c339062fe86b275b999ded604cf`)
      .then((res) => {
        const data = res.data;
        const results = data.results;
        console.log(results)
        this.ratingTv(results);
      })
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=72624c339062fe86b275b999ded604cf`)
      .then((res) => {
        const data = res.data;
        const results = data.results;
        console.log(results)
        this.ratingMovie(results);
      })
    }
 
  },
  mounted() {
    this.fetchPopular();
  }

}
</script>
<template>
  <div class="header">
    <img class="logo" @click="clear" src="/boolflix.png" alt="">
    <img class="logo-sm"  @click="clear" src="/logo.png" alt="">
    <div class="search">
      <input class="input-search" type="text" placeholder="inserisci film o serie-tv" v-model.trim="store.userValue"
        @keyup.enter="search" :class="searchInput === true ? 'inline-block' : 'none'">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" @click="searchInput = !searchInput"
        :class="searchInput === true ? 'search-true' : 'icon'"></font-awesome-icon>/>
      <font-awesome-icon class="hamburger" :icon="['fas', 'bars']" @click="isVisible = !isVisible" />
    </div>
  </div>
  <div class="navbar" :class="isVisible === true ? 'block' : 'none'">
    <ul class="nav">
      <li class="btn" @click="filmGenres = !filmGenres" :class="tvSeriesGenres === true ? 'none' : 'block'">Film</li>
      <li class="btn" @click="tvSeriesGenres = !tvSeriesGenres" :class="filmGenres === true ? 'none' : 'block'">Serie Tv</li>
      <li class="btn" @click="toggleFavoritesView">La Mia Lista</li>
    </ul>
    <ul class="nav">
      <li class="btn" @click="clear">Indietro</li>
    </ul>
    <ul class="nav" :class="filmGenres === true ? 'block' : 'none'" >
      <li class="btn-sm" v-for="(genre, i) in store.filmGenres" :key="i" @click="movieGenres(genre.id)">{{ genre.name }}</li>

    </ul>
    <ul class="nav" :class="tvSeriesGenres === true ? 'block' : 'none'">
      <li class="btn-sm" v-for="(genre, i) in store.seriesGenres" :key="i" @click="tvGenres(genre.id)">{{ genre.name }}</li>

    </ul>
  </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as*;

.hamburger {
  color: white;
  font-size: 25px;
  cursor: pointer;
}

.header {
  @include header-mixin
}

.navbar {
  margin: 0 auto;
  width: 90%;
}

.nav {
  @include nav-mixin
}

.logo {
  display: none;
  cursor: pointer;
}

.logo-sm {
  width: 30px;
  cursor: pointer;
}

.none {
  display: none;
}

.block {
  display: block;
}

.input-true {
  font-size: 20px;
}

.inline-block {
  display: inline-block;
}

.icon {
  @include icon-mixin-sm
}

.search {
  position: relative;
}

.search-true {
  @include search-true-mixin
}

.input-search {
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
