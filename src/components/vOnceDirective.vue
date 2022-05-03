<template>
  <h2 v-once>{{ name }}</h2> 
  <!-- the name never changes on click bcos the use of v-once  -->
  <button @click="name = 'Batman'">Change name</button>
  <!-- skips the compilation when use the v-pre directive -->
  <!-- compilation can be speed up if html tag do not use any other vue directives -->
  <h2 v-pre>{{ name }}</h2>
</template>

<script>
export default {
    data(){
        return{
            name: 'Vikas'
        }
    }
}
</script>

<style>

</style>