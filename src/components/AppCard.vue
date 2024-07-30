<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store,
            rating: [],
            emptyStars: 5,
            // favourite:[]
        }
    },
    props: {
        singleItem: Object,
        // isFavorite: {
        //     type: Boolean,
        //     required: true
        // }

    },
    methods: {
        toggleFavorite(singleItem) {
          this.store.toggleFavorite(singleItem);
        },
        isInFavorite(singleItem) {
            return this.store.myList.some(fav=> fav.id === singleItem.id)
        },
        // ratingFunction() {
        //     const rate = Math.floor(this.singleItem.vote_average/ 2);
        //     // itero sul voto
        //     for (let i = 1; i <= rate; i++) {
        //         this.rating.push('+');
        //     }
        
        // this.fullStars = (parseInt(this.singleItem.vote_average) / 2).toFixed(0);
        // console.log('stelle piene',this.fullStars)
        // this.emptyStars = this.emptyStars - rate;
        // console.log('stelle vuote',this.emptyStars)
        // }
    },
    created() {
        // this.ratingFunction()
    }
}
</script>

<template>

    <div :class="singleItem.poster_path !== null ? 'col' : 'none'">
        <div class="card">
            <img class="logo" src="/logo.png" alt="">
            <!-- <span class="save">&hearts;</span> -->
            <img class="poster" :src="'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt="">
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
                    <li id="stars">
                        <span>Voto:</span>
                        <span>
                            <font-awesome-icon v-for="icon in singleItem.vote" :key="icon" :icon="['fas', 'star']" />
                            <font-awesome-icon v-for="icon in 5 - singleItem.vote" :key="icon" :icon="['far', 'star']" />
                        </span>
                    </li>
                    <!-- <li>
                        <img class="flag" :src="singleItem.original_language + '.png'" alt="">
                    </li> -->
                    <li>
                        <p>Overview:{{ singleItem.overview }}</p>
                    </li>
                    <li>
                        <span @click="toggleFavorite(singleItem)" :class="isInFavorite(singleItem)? 'saved': 'save'">&hearts;</span>
                    </li>
                </ul>

            </div>
        </div>
        <!-- <p>{{ singleItem.genre_ids }}</p>
        <div v-for="genere in singleItem.genre_ids" :key="genere.id">{{ genere }}>
        <p ></p>
        </div> -->
    </div>


</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as*;
.card{
    @include card-mixin
}
.none{
    display: none;
}
.logo{
    @include logo-card-mixin

}
.save{
    position: absolute;
    font-size:20px;
    color: white;
    bottom:10px;
    right:10px;
    padding:5px 10px;
    background-color: red;
    border-radius: 15px;
    &:hover{
        border: 2px solid white;
        bottom: 8px;
        right: 8px;
    }
}
.saved{
    position: absolute;
    font-size:20px;
    color: red;
    bottom:10px;
    right:10px;
    padding:5px 10px;
    background-color: white;
    border-radius: 15px;
    &:hover{
        border: 2px solid red;
        bottom: 8px;
        right: 8px;
    }
}
.flag{
    width: 20px;
}
#stars{
    flex-direction: row;
    color: yellow;
}
.overlay{
@include overlay-mixin
}
.poster{
    @include poster-mixin
}
.none{
    display: none;
}
.col{
  width: 47%;
  margin: 5px;
}
@media (min-width:768px){
.col{
width: 19%;
margin: 5px;
}
.logo{
    width: 16px;
}
}
@media (min-width:992px){
.col{
width: 15%;
margin: 5px;
}
}
</style>
