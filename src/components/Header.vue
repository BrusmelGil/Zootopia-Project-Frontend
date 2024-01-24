<script setup>
import AuthRepository from "@/repositories/AuthRepository";

let repository = new AuthRepository();
</script>

<template>
  <div id="headerContainer">
    <div class="logoContainer">
      <img src="/logo.png" alt="" />
      <h2>zootopia</h2>
    </div>

    <RouterLink class="routerLink" to="/" @click="repository.logout()"
      >LOG OUT</RouterLink
    >
  </div>
</template>

<style lang="scss" scoped>
#headerContainer {
  display: flex;
  justify-content: space-between;
  padding: 10px;

  background-color: $dark-green;

  .logoContainer {
    display: flex;
    justify-content: center;

    h2 {
      color: white;
      font-family: "Yanone Kaffeesatz", sans-serif;
      font-size: 20px;
    }

    img {
      width: 25%;
    }
  }

  .routerLink {
    font-family: "Shojumaru", system-ui;
    font-size: 15px;
    padding: 10px;

    border-radius: 10px;
    background: rgba(255, 255, 255, 0.77);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    &:visited {
      color: black;
    }
  }
}
</style>
