<script setup>

import { ref } from 'vue';

const isFormOpen = ref(false);
const newAnimalName = ref('');
const newAnimalFamily = ref('');
const newAnimalType = ref('');
const newAnimalGender = ref('');
const newAnimalDate = ref('');
const animals = ref({name: newAnimalName.value,
    photo: null,
    familyName: newAnimalFamily.value,
    typeName: newAnimalType.value,
    genderName: newAnimalGender.value,
  });

const openForm = () => {
  isFormOpen.value = true;
};

const closeForm = () => {
  isFormOpen.value = false;
};

const submitForm = () => {
  const newAnimal = {
    name: newAnimalName.value,
    photo: null,
    familyName: newAnimalFamily.value,
    typeName: newAnimalType.value,
    genderName: newAnimalGender.value,
  };

  console.log(newAnimal);
  closeForm();
};

</script>

<template>
  <div id="app">
    <div id="addMobile">
      <button @click="openForm">ADD</button>
    </div>

    <div v-if="isFormOpen" class="popup">
      <div class="popup-content">
        <form @submit.prevent="submitForm">
          <button @click="closeForm">X</button>
          <h2>NEW ANIMAL</h2>

          <div class="form-group">
            <label for="animalName">NAME:</label>
            <input type="text" id="animalName" v-model="newAnimalName" />
          </div>

          <div class="form-group">
            <label for="animalFamily">FAMILY:</label>
            <select id="animalFamily" v-model="newAnimalFamily">
              <option value="felids">Felids</option>
              <option value="canids">Canids</option>
              <option value="reptiles">Reptiles</option>
              <option value="mustelids">Mustelids</option>
              <option value="leporidae">Leporidae</option>
              <option value="birds">Birds</option>
            </select>
          </div>

          <div class="form-group">
            <label for="animalType">TYPE:</label>
            <input type="text" id="animalType" v-model="newAnimalType" />
          </div>

          <div class="form-group">
            <label for="animalGender">GENDER:</label>
            <select id="animalGender" v-model="newAnimalGender">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <div class="form-group">
            <label for="animalDate">DATE OF ADMISSION:</label>
            <input type="date" id="animalDate" v-model="newAnimalDate" />
          </div>

          <div class="form-group">
            <button type="submit">SAVE</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


#addMobile {
    
    background: rgba(255, 255, 255, 0.87);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    font-family: 'Shojumaru', system-ui;
    padding: 10px;
    border-radius: 5px;
  
    height: 40px;
    margin-top: 9px;
  
    button {
      color: black;
      text-align: center;
    }
  }
  
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 40px;
        padding: 25px;
    }
  }
  
  .popup-content {
    background-color: $light-green;
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 20px;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  
    label {
      margin-bottom: 5px;
    }
  
    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    button {
      margin-top: 10px;
      background-color: $orange;
      border-radius: 10px;
      padding: 5px;
      color: white;
    }
  }

</style>