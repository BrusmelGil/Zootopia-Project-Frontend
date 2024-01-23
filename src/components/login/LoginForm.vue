<script setup>
    
import {ref} from "vue"
import AuthRepository from "./../../repositories/AuthRepository.js"

    let repository = new AuthRepository
    let username = ref("")
    let password = ref("")

 function login(username, password){

    let encryptedPassword = btoa (password)
    repository.login(username, password)
    //redirectToDashboard()
 }

 function redirectToDashboard() {
     const redirectPath = route.query.redirect || '/Dashboard'
     router.push(redirectPath) 
 }
</script>
<template>
        
    <section class="form-main" >
        <div id="logo-box"> 
            <img id="logo-mobile" src="/images/logo-zootopia.png"></img>
            
        </div>
        
        <div class="form-content">

                <h2>LOGIN </h2>
                
                <form @submit.prevent="login(username, password)">
                    <div class="input-box">
                        <input type="text"  name="username"  id="usernme" placeholder="Username" class="input-control" v-model="username">

                    </div>
                    <div class="input-box">
                        <input type="password" name="password" id="password" placeholder="Password" class="input-control" v-model="password">
                        
                    </div>
                <button type="submit" class="btn">Login</button>

                </form>
            
        </div>
    </section>
</template>


<style lang="scss" scoped>
.form-main {
    background-image: url("/images/background-mobile.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: rgba(255, 255, 255, 83%);
    font-weight: 300;
    font-size: 16px;
    //line-height: 1.5;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
#logo-box{
    width: 150px;
    position: top;
    justify-content: center;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    
}
#logo-mobile{
    height: 80px;
    
}
::placeholder {
  color: white;
  opacity: 1; /* Firefox */
  padding: 5%;
  font-family: 'Inter', sans-serif;
  //font-size: smaller;
}


.form-content h2 {
    font-size: 40px;
    margin-bottom:10vh;
    text-align: center;
    line-height: 1.2;
    color: white;
    font-family: 'Shojumaru', system-ui;
    font-weight: 500;
}

.form-content form {
    margin: 25px 0 20px;
    color: white;
} 


.form-content .input-control {
    display: flex;
    height: 55px;
    width: 65vw;
    background-color: $light-green;
    color: white;
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 20%;
    border-radius: 10px;
    padding: 5%;
}

button{
    text-decoration: none;
    color: white;
    border-radius: 10px ;
    font-weight: 300;
    padding: 5%;
    background: #FF9413;
    margin-top: 20%;

} 

.form-content .btn {
    height: 55px;
    width: 100%;
    width: 65vw;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Zen Tokyo Zoo', system-ui;
    background: #FF9413;;
    color: white;
    //margin-left: 20%;
   // margin-top: 10%;
    margin-bottom: 20%;

} 

.input-link {
    width: 100%;
    display: flex;
    justify-content: center;
}

</style>