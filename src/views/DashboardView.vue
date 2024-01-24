<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Searchbar from "../components/buttons/Searchbar.vue";
import AddDesktop from "../components/buttons/AddDesktop.vue";
import AddMobile from "../components/buttons/AddMobile.vue";
import Filter from "../components/dashboard/FilterButton.vue";
import Cards from "../components/cards/Cards.vue";
import { ref } from "vue";

import AnimalRepository from "../repositories/AnimalRepository";
import AnimalService from "../services/AnimalService";

let repository = new AnimalRepository();
let service = new AnimalService(repository);
let animals = [];
let isLoaded = ref(false);

async function setAnimals() {
  animals = await service.index();
  isLoaded.value = true;
  console.log(animals);
}

setAnimals();
</script>

<template>
  <Header />
  <main>
    <div id="main-container">
      <div id="topContainer">
        <Searchbar />
        <div class="addDesktop">
          <AddDesktop />
        </div>
      </div>

      <div id="cards-container">
        <Cards
          v-for="(animal, index) in animals"
          v-if="isLoaded"
          :animal="animal"
          :index="index"
        />
      </div>

      <div id="bottomContainer">
        <Filter />
        <div class="addMobile">
          <AddMobile />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
main {
  background-image: url(../../public/img/background-hojas.png);
  background-repeat: repeat-y;
  background-size: cover;
  width: 100vw;
  display: flex;
  justify-content: center;
}
#main-container {
  width: 80%;
}

#topContainer {
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  padding: 5px;
}
#cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
.addDesktop {
  display: none;
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
