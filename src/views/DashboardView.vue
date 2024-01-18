

<script setup>
import Cards from '@/components/cards/Cards.vue';


</script>

<template>
  <main>
    <Cards />
    <!-- <h1>This is a dashboard view,</h1> -->
  </main>
</template>

<style lang="scss" scoped>
/* 
*{
  margin: 0;
  padding: 0;
  
} */

main{
  background-image: url(../../public/img/backgroud\ hojas.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
gap: 10px; 
padding: 100px; //coloque este en 100 para que se colocara las cards más pequeñas.

}
</style>
