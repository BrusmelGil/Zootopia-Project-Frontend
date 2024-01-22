<script setup></script>

<template>
  <div id="images-section">
    <div>
      <div id="col-1">
        <img src="/images/tiger.png" alt="" />
        <img src="/images/rhinoceros.png" alt="" />
        <img src="/images/red-parrot.png" alt="" />
        <img src="/images/snake-2.png" alt="" />
        <img src="/images/tiger-2.png" alt="" />
      </div>
      <div id="col-2">
        <img src="/images/white-rabbit.png" alt="" />
        <img src="/images/gray-rabbit.png" alt="" />
        <img src="/images/kangaroo.png" alt="" />
        <img src="/images/lagarto.png" alt="" />
        <img src="/images/halcon.png" alt="" />
      </div>
      <div id="col-3">
        <img src="/images/blue-parrot.png" alt="" />
        <img src="/images/wolf.png" alt="" />
        <img src="/images/snake.png" alt="" />
        <img src="/images/lagarto-3.png" alt="" />
        <img src="/images/leon.png" alt="" />
      </div>
      <div id="col-4">
        <img src="/images/hawk.png" alt="" />
        <img src="/images/elefant.png" alt="" />
        <img src="/images/yellow-parrot.png" alt="" />
        <img src="/images/lion.png" alt="" />
        <img src="/images/elefante-2.png" alt="" />
        <img src="/images/hawk.png" alt="" />
        <img src="/images/elefant.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#col-4,
#col-3 {
  display: none;
  > img {
    display: none;
  }
}
#images-section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 90%;
    height: 95%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      overflow: hidden;
      gap: 20px;
      > img {
        width: 100%;
      }
    }
  }
}
@media (min-width: 850px) {
  #col-3 {
    display: block;
    > img {
      display: block;
    }
  }
  #images-section {
    > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media (min-width: 1100px) {
  #col-3,
  #col-4 {
    display: block;
    > img {
      display: block;
    }
  }
  #images-section {
    > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
