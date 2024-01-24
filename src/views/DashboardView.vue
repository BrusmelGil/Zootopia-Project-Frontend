
<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Searchbar from "../components/buttons/Searchbar.vue";
import AddDesktop from "../components/buttons/AddDesktop.vue";
import AddMobile from "../components/buttons/AddMobile.vue";
import Filter from "../components/dashboard/FilterButton.vue";
import Cards from "../components/cards/Cards.vue";
</script>

<template>

  
  
    <Header />

    <main>

    <div id="topContainer">
      <Searchbar />

      <div class="addDesktop">
        <AddDesktop />
      </div>
    </div>
    <div id="cards-container">
    <Cards />
  </div>
  

    <div id="bottomContainer">
      <Filter />

      <div class="addMobile">
        <AddMobile />
      </div>
    </div>
  </main>
    <Footer />


  </template>


<style lang="scss" scoped>
#topContainer {
  display: flex;
  justify-content: flex-start;
  padding: 5px;

*{
  margin: 0;
  padding: 0;
  
} 

main{
  background-image: url(../../public/img/backgroud\ hojas.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

#cards-container{
  display: flex;
  justify-content: space-between;
  width: 85%;
  
}

  .addDesktop {
    display: none;
  }
}

#bottomContainer {
  display: flex;
  justify-content: center;
  padding: 5px;
}

@media only screen and (min-width: 768px) {
  #topContainer {
    .addDesktop {
      display: block;
    }
  }

  #bottomContainer {
    .addMobile {
      display: none;
    }
  }
}
</style>
