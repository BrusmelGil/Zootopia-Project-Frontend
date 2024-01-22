
<script setup>
import Cards from '@/components/cards/Cards.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


</script>

<template>

  <main>

    <Cards  v-for="character in store.characters" v-if="store.isLoaded" :character="character" />
    <!-- <h1>This is a dashboard view,</h1> -->

    <Header /> 
    <!--  <h1>This is a dashboard view,</h1> -->
    <Footer />

  </main>


<style lang="scss" scoped>

*{
  margin: 0;
  padding: 0;
  
} 

main{
  background-image: url(../../public/img/backgroud\ hojas.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
