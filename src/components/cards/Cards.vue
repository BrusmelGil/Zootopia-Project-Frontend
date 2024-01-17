<script setup>



</script>

<template>

    <div class="container">
        <div class="image">
        <img src="../../../public/img/" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <label for="family">Family: </label>
            <input type="text" id="family" placeholder="Aves">
        </div>

        <div class="form-group">
            <label for="type">Type: </label>
            <input type="text" id="type" placeholder="Loro de Cacatua">
            </div>

            <div class="form-group">
            <label for="gender">Gender: </label>
            <input type="text" id="gender" placeholder="Macho">
            </div>

            <div class="form-group">
            <label for="admission-date">Date of admission: </label>
            <input type="date" id="admission-date">
            </div>

            <div class="buttons-container">
            <div class="btn"><button type="submit">Editar</button></div>
            <div class="btn"><button type="submit">Borrar</button></div>
        </div>
        </div>
    </div>


    <div class="container">
        <div class="image">
        <img src="" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <label for="family">Family: </label>
            <input type="text" id="family" placeholder="Caninos">
        </div>

        <div class="form-group">
            <label for="type">Type: </label>
            <input type="text" id="type" placeholder="Lobo">
            </div>

            <div class="form-group">
            <label for="gender">Gender: </label>
            <input type="text" id="gender" placeholder="Macho">
            </div>

            <div class="form-group">
            <label for="admission-date">Date of admission: </label>
            <input type="date" id="admission-date">
            </div>

            <div class="buttons-container">
            <div class="btn"><button type="submit">Editar</button></div>
            <div class="btn"><button type="submit">Borrar</button></div>
        </div>
        </div>
    </div>

    



</template>

<style lang="scss" scoped>

.container{
    display: flex;
    border: 1px solid black;
    width: 35%;
    height: 50%;
    border-radius: 15px ;


}

#miInput{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image img{
    width: 75%;
    margin-left: 5%;
    margin-top: 20px;

}

.input-global{
    margin: 5% 0;
}


    .btn {
    margin-right: 0px; 
    display: inline;
    justify-content:space-between ;
}

.btn:last-child {
    margin-right: 0;
}


</style>