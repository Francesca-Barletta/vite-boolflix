<script>

export default {
    data() {
        return {
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
            console.log(rate);
            // itero sul voto
            for (let i = 1; i <= rate; i++) {
                this.rating.push('+');
            }
        },
        stars(i) {
            this.whiteStar.splice(i, this.rating.length);
            console.log(this.whiteStar.length)
        }
    },
    created() {
        this.ratingFunction(),
            this.stars()
    }
}
</script>

<template>

    <!-- <div v-if="singleItem = movie" class="card"> -->
    <div class="card">
        <ul  v-if="singleItem !== movie">
            <li><p>{{ singleItem.name }}</p></li>
            
            <li><p>{{ singleItem.original_name }}</p></li>
      
        </ul>
        <ul>
            <li><p>{{ singleItem.title }}</p></li>
          
            <li><p>{{ singleItem.original_title }}</p></li>
            <li><img :src="singleItem.original_language + '.png'" alt=""></li>
            <li><img class="poster" :src=" 'https://image.tmdb.org/t/p/w342/' + singleItem.poster_path" alt=""></li>
            <li id="stars">
                <span v-for="icon in rating">
                    <font-awesome-icon :icon="['fas', 'star']" />
                </span>
                <span v-for="white in whiteStar">
                    <font-awesome-icon :icon="['far', 'star']" />
                </span>
            </li>
        </ul>
 
      
    </div>




</template>

<style lang="scss" scoped>
.card{
    width: 200px;
    aspect-ratio: 1/2;
    color: white;
    border: 2px solid white;
    padding: 15px;
    background-color: black;
    

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
img{
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
img.poster{
width: 120px;
}
</style>
