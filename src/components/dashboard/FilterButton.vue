<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

function filterFamily() {

    consoler.log("filter");
    // const selectedRaces = Array.from(document.querySelectorAll('.dropdown-list input:checked')).map(checkbox => checkbox.name);

    //  console.log (selectedRaces);

    // if (selectedRaces.length > 0) {
    //   let result = store.characters.filter((character) => selectedRaces.includes(character.race));
    //   console.log(result)
    //   store.characters = result
    // } else {
    //   store.characters = []
    //   store.characters = store.originalCharacters
    // }
  } 


</script>

<template>
    
    <div id="dropdown-menu" @click="toggleDropdown" :class="{ 'clicked': isDropdownOpen }"> FILTER

<ul class="dropdown-list" v-show="isDropdownOpen">

  <div id="item-1">
  <input type="checkbox" id="item-1" name="Felids" value="Felids" @click="filterFamily" />
  <label> <a href="#"> Felids </a> </label>
  </div>

  <div id="item-2">
  <input type="checkbox" id="item-2" name="Canids" value="Canids" @click="filterFamily" />
  <label> <a href="#"> Canids </a> </label>
  </div>

  <div id="item-3">
  <input type="checkbox" id="item-3" name="Reptiles" value="Reptiles" @click="filterFamily" />
  <label> <a href="#"> Reptiles </a> </label>
  </div>

  <div id="item-4">
  <input type="checkbox" id="item-4" name="Mustelids" value="Mustelids" @click="filterFamily" />
  <label> <a href="#"> Mustelids </a> </label>
  </div>

  <div id="item-5">
  <input type="checkbox" id="item-5" name="Leporidae" value="Leporidae" @click="filterFamily" />
  <label> <a href="#"> Leporidae </a> </label>
  </div>

  <div id="item-6">
  <input type="checkbox" id="item-6" name="Birds" value="Birds" @click="filterFamily" />
  <label> <a href="#"> Birds </a> </label>
  </div>
</ul>

</div>
    
</template>

<style lang="scss" scoped>
#dropdown-menu {
  
    position: relative;
  display: inline-block;
  background-color: $orange;
  color: white;
  width: 30%;
  z-index: 1;
  text-align: center;

  padding: 10px;
  font-family: 'Shojumaru', system-ui;
  cursor: pointer;
  
  border-radius: 10px;
}
.dropdown-list {
  display: none;
  position: absolute;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: $orange;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 100;
  top: -25%;
  width: 120%;

  a {
    text-decoration: none;
    color: white;
  }

  div {
    display: flex;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }

  div input {
    margin-right: 8px;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid black;
  }
}

#dropdown-menu.clicked .dropdown-list {
  display: block;
  border-radius: 10px;
}

</style>