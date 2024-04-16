<script>

export default {
    props: {
        singleMovie : Array
    }
}
</script>

<template>
    <div>
        <ul>
            <li v-for="(movieObject, i) in singleMovie.results">
            <p>{{ movieObject.title }}</p>
            <!-- <p>{{ movieObject.original_title }}</p> -->
            <!-- <p>{{ movieObject.original_language }}</p> -->
            <!-- <p>{{ movieObject.vote_average }}</p> -->
            </li>
        </ul>
    </div>

</template>

<style lang="scss">

</style>