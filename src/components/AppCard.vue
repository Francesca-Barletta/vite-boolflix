<script>

export default {
    data() {
        return {

        }
    },
    props: {
        singleItem: Object,
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
            <li><p>{{ singleItem.vote_average }}</p></li>
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
</style>