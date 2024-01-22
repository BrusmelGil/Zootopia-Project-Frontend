<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Searchbar from '../components/buttons/Searchbar.vue';
import AddDesktop from '../components/buttons/AddDesktop.vue';
import AddMobile from '../components/buttons/AddMobile.vue';
import Filter from '../components/dashboard/FilterButton.vue';
</script>

<template>
  <div>
    
    <Header />

      <div id="topContainer">

        <Searchbar />

        <div class="addDesktop">

          <AddDesktop />

        </div>

      </div>

    <h1>This is a dashboard view,</h1>

    <div id="bottomContainer">
      <Filter />

      <div class="addMobile">

        <AddMobile />

      </div>

    </div>

    
    <Footer />

  </div>
</template>

<style lang="scss" scoped>

#topContainer {
  display: flex;
  justify-content: flex-start;
  padding: 5px;

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
