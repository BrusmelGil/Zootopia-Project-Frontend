<script setup>


/* document.getElementById('editarFormulario').addEventListener('click', function() {
    var boton = document.getElementById('editarFormulario');
    var campos = document.querySelectorAll('#formularioAjax input, #formularioAjax textarea');

    if (boton.innerText === 'Habilitar formulario') {
        // Habilitar los campos
        campos.forEach(function(campo) {  
            campo.disabled = false;
        });

    // Cambia el texto y color del botón
        boton.innerText = 'Deshabilitar formulario'; 
        boton.style.backgroundColor = '#dc3545'; // Rojo
    } else {
        // Deshabilita los campos
        campos.forEach(function(campo) {
            campo.disabled = true;
        });

        // Restaura el texto y color del botón
        boton.innerText = 'Habilitar formulario';
        boton.style.backgroundColor = '#28a745'; // Verde
    }
});
 */

</script>

<template>
<div id="card-global">

    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/loro.png" alt="Imagen de ave">
        </div>

        <div class="input-global">
            <h3 class="name-title">Mark</h3>
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
            <div class="btn"><button type="submit"><img src="../../../public/img/lapiz3.png" alt=""></button></div>
            <div class="btn"><button type="submit"><img src="../../../public/img/papelera.png" alt=""></button></div>
        </div>
        </div>

        
    </div>
    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/lobo.png" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <h3 class="name-title">Mark</h3>
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
            <div class="btn"><button type="submit"><img src="../../../public/img/lapiz3.png" alt=""></button></div>
            <div class="btn"><button type="submit"><img src="../../../public/img/papelera.png" alt=""></button></div>
        </div>
        </div>
        
    </div> 

    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/aguila.png" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <h3 class="name-title">Mark</h3>
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
            <div class="btn"><button type="submit"><img src="../../../public/img/lapiz3.png" alt=""></button></div>
            <div class="btn"><button type="submit"><img src="../../../public/img/papelera.png" alt=""></button></div>
        </div>
        </div>
        
    </div>

    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/conejo.png" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <h3 class="name-title">Mark</h3>
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
            <div class="btn"><button type="submit"><img src="../../../public/img/lapiz3.png" alt=""></button></div>
            <div class="btn"><button type="submit"><img src="../../../public/img/papelera.png" alt=""></button></div>
        </div>
        </div>
        
    </div>

    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/serpiente.png" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <h3 class="name-title">Mark</h3>
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
            <div class="btn"><button type="submit"><img src="../../../public/img/lapiz3.png" alt=""></button></div>
            <div class="btn"><button type="submit"><img src="../../../public/img/papelera.png" alt=""></button></div>
        </div>
        </div>
        
    </div>

    <div class="card-container">
        <div class="image">
        <img src="../../../public/img/tigre.png" alt="Imagen de ave">
        </div>

        <div class="input-global">
        <div class="form-group">
            <h3 class="name-title">Mark</h3>
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
            <label for="admission-date" id="date">Date of admission: </label >
            <input type="date" id="admission-date">
            </div>
            <div class="buttons-container">
            <div class="btn"><button type="submit"><img src="../../../public/img/lapiz3.png" alt=""></button></div>
            <div class="btn"><button type="submit"><img src="../../../public/img/papelera.png" alt=""></button></div>
        </div>

        </div>
        
    </div>

</div>


</template>

<style lang="scss" scoped>

#card-global {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 2fr));
    gap: 20px;
    margin: 50px 30px;
    
}

.card-container{
    display: flex;
    gap: 20px;
    border-radius: 10px;
    background: linear-gradient(0deg, rgba(35, 216, 183, 0.751) 47%, rgb(68, 158, 46) 98%);
    width: 100%;
    

}

.name-title{
    font-size: xx-large;
    text-align: center;
    margin-top: 10%;
}
/* 
.image img{
    max-width: 100%;
    margin-left: 5%;
    margin-top: 40px;

} */

.image{
    width: 80% ;
    margin-top: 40px;
    margin-left: 5%;
}

.input-global{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;

}

.form-group {
display: flex;
flex-direction: column;
align-self: center;
border-radius: 10px;
}

.buttons-container {
display: flex;
gap: 10px;
margin-top: 10px;
justify-content: center;
width: 50%;
}

.btn button {
padding: 8px 16px;
background-color: #ff9513f0;
border-radius: 10px;
cursor: pointer;

}

.btn img {
max-width: 100%;
}

#date{
    margin-left: 20%;
}

</style>