<script setup>

</script>

<template>

    <div class="searchbar">

        <label for="search-input">

            <input id="search-input" type="text" v-model="query" placeholder="Search..."/>
            <img src="/magnifying-glass-svgrepo-com.svg" alt="" />

        </label>

    </div>

</template>

<style lang="scss" scoped>

.searchbar {
  display: flex;
  align-items: center;

  label {
    position: relative;
    display: flex;
    align-items: center;

    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 1rem;

    input {
      padding: 8px;
      margin-right: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    img {
      width: 10%; 
      position: absolute;
      right: 20px; 
      cursor: pointer;
    }
  }
}


@media only screen and (min-width: 768px){

    label {

        margin-top: 1rem;
        margin-bottom: 1rem;

    }
}

</style>