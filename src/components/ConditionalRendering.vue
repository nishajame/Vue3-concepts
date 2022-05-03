<template>
<div >
    <h2>Directives</h2>
    <h4 v-if="num == 0">The number is zero</h4>
    <h4 v-else-if="num < 0">The number is negative</h4>
    <h4 v-else-if="num > 0">The number is positive</h4>
    <h4 v-else>Not a number</h4>



    <template v-if="display">
        <h4>Codevolution</h4>
    </template>

<!-- if showElement: false then also v-show element will be present in the DOM, only display is set to none  -->
<h2 v-show="showElement">Using v-show directive</h2> 
<h2 v-if="showElement">Using v-if directive</h2>

</div>
</template>

<script>
export default {
    data(){
        return{
            num: 5,
            divStyle:{
                border: '1px solid red'
            },
            display: true,
            showElement: false
        }
    }
}
</script>

<style>

</style>