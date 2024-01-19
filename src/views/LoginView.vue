<script setup>
import LoginForm from "./../components/login/LoginForm.vue";
import ImagesLogin from "./../components/login/ImagesLogin.vue";
</script>

<template>
  <main>
    <div id="login-images">
      <ImagesLogin />
    </div>
    <div id="login-form">
      <LoginForm />
    </div>
  </main>
</template>

<style lang="scss" scoped>
#login-images {
  display: none;
}
#login-form {
  width: 100%;
}
main {
  background-image: url(./../../public/images/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}

@media (min-width: 400px) {
  main {
    display: flex;
    flex-direction: row;
  }
  #login-images {
    display: block;
    width: 50%;
  }
  #login-form {
    width: 50%;
  }
}
@media (min-width: 1100px) {
  main {
    display: flex;
    flex-direction: row;
  }
  #login-images {
    display: block;
    width: 70%;
  }
  #login-form {
    width: 30%;
  }
}
</style>
