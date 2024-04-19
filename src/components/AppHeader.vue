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
.hamburger{
  color: white;
  font-size: 25px;
  cursor: pointer;
}
.header{
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  width: 90%;
}
.navbar{
  margin: 0 auto;
  width: 90%;
}
.nav{
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  gap: 10px;
  padding:5px 0;
}
.btn{
    padding: 3px 10px;
    border-radius: 20px;
    border: 2px solid white;
    font-size: 12px;
    cursor: pointer;
    &:hover{
      color: lightgray;
      border: 2px solid lightgrey;
    }
  }
  .btn-sm{
    font-size: 14px;
    cursor: pointer;
    &:hover{
      color: lightgray;
    }
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
  color: white;
  font-size: 20px;
  cursor: pointer;
  top: 50%;
  left: 20px;
  margin-bottom:3px;
 
}
.search{
  position: relative;
}
.search-true{
  position: absolute;
  transform: translateY(-50%);
  font-size: 20px;
  top: 55%;
  left: 5px;
  color: white;
  cursor: pointer;
}
.input-search{
  outline: none;
  border: none;
  background-color: grey;
  width: 150px;
  height: 30px;
  padding-left: 34px;
  padding-right: 10px;
  caret-color: white;
  color: white;

  &::placeholder{
    color: white;
  }
  
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
    position: absolute;
    transform: translateY(-50%);
    pointer-events: none;
    top: 55%;
  left: 5px;
  }

  .input-search {
    display: inline-block;
    width: 200px;
    padding-left: 34px;
    padding-right: 10px;
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
    width: 300px;
    padding-left: 34px;
    padding-right: 10px;
  }

  .hamburger {
    display: none;
  }
}
</style>