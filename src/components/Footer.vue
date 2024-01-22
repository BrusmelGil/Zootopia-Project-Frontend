<script setup>

</script>

<template>

<div id="rrss">

    <img src="/facebook-color-svgrepo-com.svg" alt="">
    <img src="/instagram-1-svgrepo-com.svg" alt="">
    <img src="/twitter-svgrepo-com.svg" alt="">

</div>

</template>

<style lang="scss" scoped>

#rrss {
    display: flex;
    justify-content: flex-end;

    background-color: $dark-green;

    img {
        width: 2.5%;
        padding: 10px;
    }
}

@media only screen and (max-width: 575px){

    #rrss {
        display: none;
    }

}

</style>