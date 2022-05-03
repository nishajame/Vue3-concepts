<template>
    <h2>List Rendering</h2>
    <h4 v-for="(name, index) in names" :key="name">{{ index + 1}}. {{ name }}</h4>
    <h4 v-for="name in fulNames" :key="name.first">{{ name.first }} {{ name.last }}</h4>
    <hr>
    <div v-for="actor in actors" :key="actor.name">
        <h4>{{ actor.name }}</h4>
        <h5 v-for="movie in actor.movies" :key="movie">{{ movie}}</h5>
    </div>
    <h4 v-for="(value, key, index) in myInfo" :key="value">{{ index + 1}}. {{ key }}: {{ value }}</h4>

    <template v-for="name in names" :key="name">
        <hr>
        <h4>{{ name }}</h4>
    </template>
</template>

<script>
export default {
    data(){
        return{
            names: ['Bruce', 'Clark', 'Diana'],
            fulNames: [
                { first: 'Bruce', last: 'Wayne'},
                { first: 'Clark', last: 'Kent'},
                { first: 'Princess', last: 'Diana'}
            ],
            actors: [
                {
                    name: 'Christian Bale',
                    movies: ['Batman', 'The Prestige']
                },
                {
                    name: 'Di Caprio',
                    movies: ['Titanic', 'Inception']
                }
            ],
            myInfo: {
                name: 'Vikas',
                channel: 'Codevolution',
                course: 'Vue 3'
            }
        }
    }
}
</script>

<style>

</style>