<script>

export default {
    data() {
        return {

        }
    },
    props: {
        singleMovie: Object
    }
}
</script>

<template>
    <div class="card">
            <p>Titolo film: {{ singleMovie.title }}</p>
            <p>Titolo originale: {{ singleMovie.original_title }}</p>
            <span>Lingua:</span>
            <img :src="singleMovie.original_language +'.png'" alt="">
            <p>Voto: {{ singleMovie.vote_average }}</p>
 
    </div>

</template>

<style lang="scss" scoped>
.card{
    border-radius: 25px;
    border: 1px solid black;
    padding: 15px;
}
img{
    width: 20px;
}
</style>