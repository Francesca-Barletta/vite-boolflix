<script>

export default {
    data() {
        return {
            ratingString:'',
            allStars
        }
    },
    props: {
        singleItem: Object,
        

    },
    methods:{
        // vote(singleItem){
        //     let rating = (parseInt(this.singleItem.vote_average)/2);
        //     console.log(rating);
        // }
        rating(){
        const rating = (parseInt(this.singleItem.vote_average)/2);
        console.log(rating);
        //itero sul voto
        for (let i = 1; i <= rating; i++) {
            //per ogni num del voto mette un *
            this.ratingString += '*' ;
        }
        },
        stars(){
            this.allStars = this.ratingString.split('')
            for(lei i = 1; i < this.allStars.length; i++){
                if(this.allStars.length < 5){
                    this.allStars.push('o')
                }
            }

        }
    },
    created() {
        this.rating(),
        this.stars()
    }
}
</script>

<template>

    <!-- <div v-if="singleItem = movie" class="card"> -->
    <div class="card">
        <ul  v-if="singleItem !== movie">
            <li><p>{{ singleItem.name }}</p></li>
            <!-- <p v-if="singleItem = movie">{{ singleItem.original_title }}</p> -->
            <li><p>{{ singleItem.original_name }}</p></li>
      
        </ul>
        <ul>
            <li><p>{{ singleItem.title }}</p></li>
            <!-- <p v-if="singleItem = movie">{{ singleItem.original_title }}</p> -->
            <li><p>{{ singleItem.original_title }}</p></li>
            <li><img :src="singleItem.original_language + '.png'" alt=""></li>
            <li><img class="poster" :src=" 'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt=""></li>
            <li>
                <div>
                    <span>{{ ratingString }}</span>
                </div>
            </li>
        </ul>
 
      
    </div>
    <!-- <div v-else-if="singleItem = serie" class="card">
            <p>Titolo: {{ singleItem.name }}</p>
            <p>Titolo originale: {{ singleItem.original_name }}</p>
            <span>Lingua:</span>
            <img :src="singleItem.original_language +'.png'" alt="">
            <p>Voto: {{ singleItem.vote_average }}</p>
        </div> -->



</template>

<style lang="scss" scoped>
.card{
    border-radius: 25px;
    border: 1px solid black;
    padding: 15px;
    background-color: white;
}
img{
    width: 20px;
}
.movie{
    background-color: blueviolet;
}
.serie{
    background-color: darkmagenta;
}
img.poster{
width: 70px;
}
</style>
