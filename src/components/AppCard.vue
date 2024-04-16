<script>

export default {
    props: {
        singleMovie : Object
    }
}
</script>

<template>
    <div class="card">
            <p>Titolo film: {{ singleMovie.title }}</p>
            <p>Titolo originale: {{ singleMovie.original_title }}</p>
            <p>Lingua: {{ singleMovie.original_language }}</p>
            <p>Voto: {{ singleMovie.vote_average }}</p>
 
    </div>

</template>

<style lang="scss">
.card{
    border-radius: 25px;
    border: 1px solid black;
    padding: 15px;
}
</style>