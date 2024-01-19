<script setup>
function login() {
  for (let index = 0; index < store.users.length; index++) {
    if (
      store.users[index].username == email.value &&
      store.users[index].password == password.value
    ) {
      store.users[index].isAuthenticated = true;
      redirectToDashboard();
    } else {
      alert("Incorrect email or password");
    }
  }
}

function redirectToDashboard() {
  const redirectPath = route.query.redirect || "/Dashboard";
  router.push(redirectPath);
}
</script>
<template>
  <section>
    <div id="logo-box">
      <img src="/images/logo-zootopia.png" />
    </div>
    <div class="form-content">
      <h2>LOGIN</h2>
      <form @submit.prevent="login(), store.changeLoggedState()">
        <div class="input-box">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username"
            class="input-control"
            v-model="email"
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            class="input-control"
            v-model="password"
          />
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  color: rgba(255, 255, 255, 83%);
  font-weight: 300;
  font-size: 16px;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
}
#logo-box {
  width: 150px;
  position: top;
  justify-content: center;
  font-family: "Yanone Kaffeesatz", sans-serif;
  img {
    height: 80px;
  }
}
.form-content {
  width: 80%;
  form {
    margin: 25px 0 20px;
    color: white;
  }
  h2 {
    font-size: 40px;
    margin-bottom: 10vh;
    text-align: center;
    line-height: 1.2;
    color: white;
    font-family: "Shojumaru", system-ui;
    font-weight: 500;
  }
}
.input-box {
  display: flex;
  justify-content: center;
  input {
    display: flex;
    height: 55px;
    width: 90%;
    background-color: $light-green;
    color: white;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 20%;
    border-radius: 10px;
    padding: 5%;
  }
}

::placeholder {
  color: white;
  opacity: 0.5;
  padding: 5%;
  font-family: "Inter", sans-serif;
}

button {
  text-decoration: none;
  color: white;
  border-radius: 10px;
  background: #ff9413;
  margin-top: 20%;
  height: 55px;
  width: 50%;
  font-size: 30px;
  font-weight: 600;
  font-family: "Zen Tokyo Zoo", system-ui;
  margin-bottom: 20%;
}

.input-link {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
