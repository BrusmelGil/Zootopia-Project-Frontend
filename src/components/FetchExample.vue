<script setup>
let repository = new AnimalRepository()
let service = new AnimalService(repository)
let animals = []
let isLoaded = ref(false)

async function setAnimals() {
    animals = await service.index()
    isLoaded.value = true
    console.log(animals)
  }
</script>

<template>

</template>

<style lang="scss" scoped>

</style>