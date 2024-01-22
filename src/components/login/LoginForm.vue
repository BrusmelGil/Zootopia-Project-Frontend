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
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Username"
          class="input-control"
          v-model="email"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          class="input-control"
          v-model="password"
        />
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
  font-family: "Yanone Kaffeesatz", sans-serif;
  img {
    height: 80px;
  }
}
.form-content {
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  form {
    margin: 25px 0 20px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    input {
      display: flex;
      width: 90%;
      height: 55px;
      background-color: $light-green;
      color: white;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 20%;
      border-radius: 10px;
      padding: 5%;
    }
    button {
      text-decoration: none;
      color: white;
      border-radius: 10px;
      background: #ff9413;
      margin-top: 20%;
      height: 55px;
      width: 90%;
      font-size: 30px;
      font-weight: 600;
      font-family: "Zen Tokyo Zoo", system-ui;
    }
  }
  h2 {
    padding: 1% 0;
    font-size: 40px;
    text-align: center;
    line-height: 1.2;
    color: white;
    font-family: "Shojumaru", system-ui;
    font-weight: 500;
  }
}

::placeholder {
  color: white;
  opacity: 0.5;
  font-family: "Inter", sans-serif;
}

.input-link {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
