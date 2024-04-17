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
            <!-- <p v-if="singleItem = movie">{{ singleItem.title }}</p> -->
            <p>{{ singleItem.name }}</p>
            <!-- <p v-if="singleItem = movie">{{ singleItem.original_title }}</p> -->
            <p>{{ singleItem.original_name }}</p>
            <img :src="singleItem.original_language +'.png'" alt="">
            <p>{{ singleItem.vote_average }}</p>
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