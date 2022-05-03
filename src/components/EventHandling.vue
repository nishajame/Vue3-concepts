<template>
    <h2>{{ name }}</h2>
    <div>
        <button v-on:mouseover="changeName">Change Name</button>
    </div>

    <h2>{{ count }}</h2>
    <div>
        <button v-on:click="increment(1, $event)">Increment</button>
        <button v-on:click="count--">Decrement</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'Vikas',
            count: 0
        }
    },
    methods:{
        changeName(event){
            this.name = 'Batman'
            console.log("Event", event);
        },
        increment(num, event){
            this.count += num 
            console.log("Event", event);
        }
    }
}
</script>

<style>

</style>