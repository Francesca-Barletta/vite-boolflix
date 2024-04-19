<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store,
            rating: [],
            whiteStar: ['+', '+', '+', '+', '+']
        }
    },
    props: {
        singleItem: Object,


    },
    methods: {

        ratingFunction() {
            const rate = (parseInt(this.singleItem.vote_average) / 2).toFixed(0);
            // console.log(rate);
            // itero sul voto
            for (let i = 1; i <= rate; i++) {
                this.rating.push('+');
            }
        },
        stars(i) {
            this.whiteStar.splice(i, this.rating.length);
            // console.log(this.whiteStar.length)
        }
    },
    created() {
        this.ratingFunction(),
            this.stars()
    }
}
</script>

<template>

  <div :class="singleItem.poster_path !== null ? 'col':'none'">
    <div class="card">
        <img class="logo" src="/logo.png" alt="">
        <img  class="poster" :src="'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt="">
        <div class="overlay">
            <ul>
                <li>
                    <p v-if="singleItem.name">Titolo:{{ singleItem.name }}</p>
                    <p v-else>Titolo:{{ singleItem.title }}</p>
                </li>

                <li>
                    <p v-if="singleItem.original_name">Titolo originale:{{ singleItem.original_name }}</p>
                    <p v-else>Titolo originale:{{ singleItem.original_title }}</p>
                </li>
                <!-- <li><img class="flag" :src="singleItem.original_language + '.png'" alt=""></li> -->
                <li id="stars">
                    <span>Voto:</span>
                    <span v-for="icon in rating">
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </span>
                    <span v-for="white in whiteStar">
                        <font-awesome-icon :icon="['far', 'star']" />
                    </span>
                </li>
                <li><img class="flag" :src="singleItem.original_language + '.png'" alt=""></li>
                
                <li>
                    <p>Overview:{{ singleItem.overview }}</p>
                </li>
            </ul>

        </div>


    </div>
  </div>

   
</template>

<style lang="scss" scoped>
.card{
    width: 100%;
    aspect-ratio: 1/1.5;
    color: white;
    position: relative;
    cursor: pointer;
    border-radius: 3px;
    overflow: hidden;
    &:hover .overlay{
        opacity: 1;
        transition: opacity 300ms ease-in-out;
    }
    

    li {
            display: flex;
            flex-direction: column;
            align-items: center;
           
        }
}
.none{
    display: none;
}
.logo{
    position: absolute;
    width: 16px;
    top: 10px;
    left: 10px;
}
.flag{
    width: 20px;
}
.movie{
    background-color: blueviolet;
}
.serie{
    background-color: darkmagenta;
}
#stars{
    flex-direction: row;
    color: yellow;
}
.overlay{
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    font-size: 11px;
    padding: 5px;
    border-radius: 4px;
    opacity: 0;
}
.poster{
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
    border-radius: 4px;
}
.none{
    display: none;
}
.col{
  width: 29%;
  margin: 5px;
}
@media (min-width:768px){
.col{
width: 15%;
margin: 5px;
}
}
@media (min-width:992px){
.col{
width: 9%;
margin: 5px;
}
}
</style>
