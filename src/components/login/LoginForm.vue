<script setup>


 function login(){

     for (let index = 0; index < store.users.length; index++) {
         if (store.users[index].username == email.value && store.users[index].password == password.value) {
             store.users[index].isAuthenticated = true
             redirectToDashboard()
         } else {
             alert("Incorrect email or password")
         }
     }
 }

 function redirectToDashboard() {
     const redirectPath = route.query.redirect || '/Dashboard'
     router.push(redirectPath) 
 }
</script>
<template>
        
    <section class="form-main" >
        <div id="logo-box"> 
            <img id="logo-mobile" src="/images/logo.png"></img>
            <h2>Zootopia</h2>
        </div>
        
        <div class="form-content">

                <h2>LOGIN </h2>
                
                <form @submit.prevent="login(), store.changeLoggedState()">
                    <div class="input-box">
                        <input type="email"  name="email"  id="email" placeholder="Username" class="input-control" v-model="email">

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
    justify-content: space-evenly;
    flex-direction: column;
}
#logo-box{
    width: 100px;
    position: center;
    justify-content: center;

    
}
#logo-mobile{
    height: 60px;
}
::placeholder {
  color: white;
  opacity: 1; /* Firefox */
  padding: 10px;
  font-family: 'Inter', sans-serif;
}


.form-content h2 {
    font-size: 30px;
    margin-bottom:20vh;
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
    height: 45px;
    width: 50vw;
    background-color: $light-green;
    color: white;
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 16%;
    border-radius: 10px;
}

button{
    text-decoration: none;
    font-weight: 500;
    color: white;
    border-radius: 10px ;
    font-weight: 300;
    padding: 5%;
    background: #FF9413;
    

} 

.form-content .btn {
    height: 45px;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    font-family: 'Zen Tokyo Zoo', system-ui;
    background: #FF9413;;
    color: white;
    //margin-left: 20%;
    margin-top: 20%;

} 

.input-link {
    width: 100%;
    display: flex;
    justify-content: center;
}

</style>