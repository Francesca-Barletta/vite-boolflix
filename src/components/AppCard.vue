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



    <div class="card">

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
                <!-- <li class="hover-card"><img class="poster" :src=" 'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt=""></li> -->
                <!-- <li><p>Titolo:{{ singleItem.title }}</p></li> -->

                <!-- <li><p>Titolo originale:{{ singleItem.original_title }}</p></li> -->
                <li><img class="flag" :src="singleItem.original_language + '.png'" alt=""></li>
                <!-- <li><img class="poster" :src=" 'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt=""></li> -->
                <li id="stars">
                    <span>Voto:</span>
                    <span v-for="icon in rating">
                        <font-awesome-icon :icon="['fas', 'star']" />
                    </span>
                    <span v-for="white in whiteStar">
                        <font-awesome-icon :icon="['far', 'star']" />
                    </span>
                </li>
                <li>
                    <p>Overview:{{ singleItem.overview }}</p>
                </li>
            </ul>

        </div>


    </div>




</template>

<style lang="scss" scoped>
.card{
    width: 346px;
    color: white;
    border: 2px solid white;
    background-color: black;
    position: relative;

    &:hover .overlay{
        opacity: 1;
    }
    

    li {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
    li > *{
    padding: 5px;
}
}
li*>{
    padding: 5px;
}
.flag{
    width: 30px;
}
.movie{
    background-color: blueviolet;
}
.serie{
    background-color: darkmagenta;
}
#stars{
    flex-direction: row;
}
.overlay{
    position:absolute;
    top: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    padding: 10px;
}
// .poster{
//     border: 2px solid white;
// }
</style>
