<template>
  <div>
      <h2>{{ 2 + 5 + 3 }}</h2>
      <h2>Add method: {{ add(2,5,10) }}</h2>
      <h2>Add method: {{ add(10,15,5) }}</h2>
      <h2>Multiply method: {{ multiply(10) }}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            baseMultiplier: 5
        }
    },
    methods:{
        add(a,b,c){
            return a + b + c
        },
        multiply(num){
            return num * this.baseMultiplier
        }
    }
}
</script>

<style>

</style>