<script setup>
import AnimalRepository from "@/repositories/AnimalRepository";
import AnimalService from "@/services/AnimalService";
import { ref } from "vue";

const props = defineProps({
  animal: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

let repository = new AnimalRepository
let service = new AnimalService(repository)

const name = ref("Mark");
const family = ref("Aves");
const type = ref("Guacamayo");
const gender = ref("Macho");
const date = ref("");
const editing = ref(false);

const editCard = () => {
  editing.value = true;
};

const saveChanges = () => {
  editing.value = false;
};

function deleteAnimal() {
    service.delete(props.animal.id)
}
</script>

<template>
  <div class="card-container">
    <div class="image">
      <img src="/img/Loro.png" alt="Imagen de ave" />
    </div>

    <div class="input-global">
      <h1>{{ animal.name }}</h1>

      <div class="form-group">
        <div>
          <h2>Family:</h2>
          <p v-if="!editing">{{ animal.family.family }}</p>
          <input v-if="editing" v-model="family" placeholder="Aves" />
        </div>

        <div>
          <h2>Type:</h2>
          <p v-if="!editing">{{ animal.type.type }}</p>
          <input v-if="editing" v-model="type" placeholder="Guacamaya" />
        </div>

        <div>
          <h2>Gender:</h2>
          <p v-if="!editing">{{ animal.gender.gender }}</p>
          <input v-if="editing" v-model="gender" placeholder="hembra" />
        </div>

        <div>
          <h2>Date of admission:</h2>
          <p v-if="!editing">{{ animal.admission_date }}</p>
          <input
            type="date"
            v-if="editing"
            v-model="family"
            placeholder="hembra"
          />
        </div>
      </div>

      <div class="buttons-container">
        <button @click="editCard()">
          <img src="/img/lapiz3.png" alt="" />
        </button>
        <button @click="deleteAnimal()">
          <img src="/img/papelera.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: "Inter", sans-serif;
}
.card-container {
  display: flex;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(35, 216, 183, 0.751) 47%,
    rgb(68, 158, 46) 98%
  );
  max-width: 480px;
  height: 330px;
  .image {
    width: 50%;
    margin-top: 30px;
    margin-left: 5%;

    img {
      width: auto;
      height: 90%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .input-global {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: xx-large;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
      color: $dark-green;
    }
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;

  > div {
    width: 100%;
    > h2 {
      margin: 0 0 5px 5px;
      color: white;
      font-size: 0.8em;
    }
    > p {
      background-color: white;
      min-height: 15px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding-left: 5px;
    }
  }
}

.buttons-container {
  display: flex;
  margin-top: 10px;
  justify-content: center;
  width: 130px;

  gap: 30px;

  button {
    background-color: #ff9513f0;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
  }
}
/* @media (max-width: 1000px) {
        width: 80%;
        padding: 20px;

        .card-container {
            flex-direction: column;
        }

        .name-title {
            margin-top: 5%;
        }

        .image {
            width: 100%;
            margin-top: 15px;
            margin-left: 0;
        }

        .buttons-container {
            width: 100%;
        }

        input {
            width: 100%;
        }
    } */
</style>
