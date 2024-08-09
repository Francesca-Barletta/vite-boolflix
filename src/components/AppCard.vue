<script>
import AppModal from './AppModal.vue';
import { store } from '../store.js'

export default {
    components: {
        AppModal
    },
    data() {
        return {
            store: store,
            rating: [],
            emptyStars: 5,
            isOpen: false,
        }
    },
    props: {
        singleItem: Object,
      

    },
    methods: {
     
        openModal() {
            this.isOpen = true;
            console.log(this.singleItem);
        }, 
     

    },
    created() {
        
    }
}
</script>

<template>

    <div :class="singleItem.poster_path !== null ? 'col' : 'none'">
        <div class="card" @click="openModal">
            <img class="logo" src="/logo.png" alt="">
           
            <img class="poster" :src="'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt="">
            <!-- <div class="overlay">
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
                    <li>
                        <img class="flag" :src="singleItem.original_language + '.png'" alt="">
                    </li>
                    <li>
                        <p>Overview:{{ singleItem.overview }}</p>
                    </li>
                    <li>
                        <span @click="toggleFavorite(singleItem)" :class="isInFavorite(singleItem)? 'saved': 'save'">&hearts;</span>
                    </li>
                </ul>

            </div> -->
        </div>
      
    </div>
 <AppModal :open="isOpen" :item="singleItem" @exit="isOpen = false" />

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
