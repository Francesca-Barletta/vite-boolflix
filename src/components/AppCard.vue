<script>

export default {
    data() {
        return {
            rating: [],
            newRating: ''
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
        ratingFunction(){
        const rate = (parseInt(this.singleItem.vote_average)/2).toFixed(0);
        // console.log(rate);
        //itero sul voto
        for (let i = 1; i <= rate; i++) {
            //per ogni num del voto mette un *
            this.rating.push('*');
            // console.log(this.rating.length)
            // this.newRating = this.rating.join('')

        } 
        console.log(rate, this.rating.length)
        while(this.rating.length < 5){
            this.rating.push('o');
        }
        this.newRating = this.rating.join('')
        // console.log(rate, this.rating)
        },
        // stars(){
        //     this.ratingString.split('')
        //     for(let i = 1; i < this.ratingString.length; i++){
        //         if(this.ratingString.length < 5){
        //             this.ratingString.push('o')
        //         }
        //     }

        // }
    },
    created() {
        this.ratingFunction()
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
                    <span>{{newRating }}</span>
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
