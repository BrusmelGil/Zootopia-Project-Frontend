<script setup>



</script>

<template>

    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/loro.png" alt="Imagen de ave">
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


   <!--  <div class="container">
        <div class="image">
        <img src="../../../public/img/lobo.png" alt="Imagen de ave">
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
    </div> -->

    <!-- <div class="container">
        <div class="image">
        <img src="../../../public/img/aguila.png" alt="Imagen de ave">
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

    <div class="container">
        <div class="image">
        <img src="../../../public/img/conejo.png" alt="Imagen de ave">
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

    <div class="container">
        <div class="image">
        <img src="../../../public/img/serpiente.png" alt="Imagen de ave">
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

    <div class="container">
        <div class="image">
        <img src="../../../public/img/tigre.png" alt="Imagen de ave">
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
    </div> -->

    



</template>

<style lang="scss" scoped>

.card-container{
    display: flex;
    border: 1px solid black;
    width: 33%;
    height: 40%;
    border-radius: 15px;
    $salad: #8ED17E;
    
}

#miInput{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image img{
    width: 50%;
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