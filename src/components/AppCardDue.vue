<script>

export default {
    data() {
        return {

        }
    },
    props: {
        singleSerie: Object
    }
}
</script>

<template>
    <div class="serie">
    <h2>series</h2>
        <div class="card">
            <p>Titolo: {{ singleSerie.name }}</p>
            <p>Titolo originale: {{ singleSerie.original_name }}</p>
            <span>Lingua:</span>
            <img :src="singleSerie.original_language +'.png'" alt="">
            <p>Voto :{{ singleSerie.vote_average }}</p>
 
        </div>
    </div>


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