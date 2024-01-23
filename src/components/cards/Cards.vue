<script setup>

import { ref } from 'vue';

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

const deleteCard = () => {
    name.value = "";
    family.value = "";
    type.value = "";
    gender.value = "";
    date.value = "";
};


</script>

<template>

    <div id="card-global">
        <div class="card-container">
            <div class="image">
            <img src="../../../public/img/loro.png" alt="Imagen de ave">
            </div>

            
            <div class="input-global">
            <h1 class="name-title">{{ name }}</h1>

            <div class="form-group">

                <div class="white-input" >
                    <h2>Family:</h2>
                    <p v-if="!editing"> {{ family }} </p>
                    <input v-if="editing"  v-model="family" placeholder="Aves" />
                </div>

                <div class="white-input" >
                    <h2>Type:</h2>
                    <p v-if="!editing">{{ type }}</p>
                    <input v-if="editing" v-model="type" placeholder="Guacamaya" />
                </div>


                <div class="white-input" >
                    <h2>Gender:</h2>
                    <p  v-if="!editing" >{{ gender }} </p>
                    <input v-if="editing" v-model="gender" placeholder="hembra" />
                </div>


                <div class="white-input" >
                    <h2>Date of admission:</h2>
                    <p v-if="!editing" >{{ date }} </p>
                    <input type="date" v-if="editing" v-model="family" placeholder="hembra" />

                </div>
                
        </div>

            <div class="buttons-container">
                <div class="btn">
                <button @click="editCard()">
                    <img src="../../../public/img/lapiz3.png" alt="">
                </button>
                </div>
                <div class="btn">
                <button @click="deleteCard">
                    <img src="../../../public/img/papelera.png" alt="">
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

</template>

<style lang="scss" scoped>

#card-global {
    width: 35%;
    display: flexbox;
    padding: 50px;
    /*  display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 2fr)); */
    gap: 20px;
    margin: 50px 30px;

    .card-container{
    display: flex;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(35, 216, 183, 0.751) 47%, rgb(68, 158, 46) 98%);
    width: 100%;
}

.name-title{
    font-size: xx-large;
    text-align: center;
    margin-top: 10%;
}

.image{
    width: 70% ;
    margin-top: 30px;
    margin-left: 5%;
    
}

img{
    height: 80%;
}

.input-global{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;

}

.form-group {
display: flex;
flex-direction: column;
align-self: center;
border-radius: 10px;
margin-bottom: 10px;
}

h2{
    font-size: large;
}

p{
    margin-left: 8%;
    
}

.buttons-container {
display: flex;
gap: 10px;
margin-top: 10px;
justify-content: center;
width: 60%;
}

.btn button {
padding: 8px 16px;
background-color: #ff9513f0;
border-radius: 10px;
cursor: pointer;
margin-bottom: 15%;

}

.btn img {
max-width: 100%;

}

/* .white-input {
    display: flex;
    border-radius: 10px;
    height: 20px;
} 
 */
input{
    width: 90%;
}




}


</style>