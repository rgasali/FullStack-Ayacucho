"use strict";

let formNombre = document.getElementById("formNombre");
let formApellido = document.getElementById("formApellido");
let formEdad = document.getElementById("formEdad");
let formCorreo = document.getElementById("formCorreo");
let interesNutricion = document.getElementById("interesNutricion");
let interesEntrenamiento = document.getElementById("interesEntrenamiento");
let interesSuplementos = document.getElementById("interesSuplementos");
let interesOtros = document.getElementById("interesOtros");
let btnEnviarFormContacto = document.getElementById("btnEnviarFormContacto");
let expRegNombreApellido = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
let expRegNumeros = /0-9/;
let expRegCorreo = /^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;



btnEnviarFormContacto.addEventListener("click",()=>{
    if(formNombre.value===""){
        alert("el campo Nombre debe estar completo");
    }
    else if(expRegNombreApellido.test(formNombre.value)===false){
        alert("el campo nombre solo admite letras");
    }
    else if(formApellido.value===""){
        alert("el campo Apellido debe estar completo"); 
    }
    else if(expRegNombreApellido.test(formApellido.value)===false){
        alert("el campo apellido solo admite letras");
    }
    else if(formEdad.value===""){
        alert("el campo Edad debe estar completo"); 
    }
    else if(formEdad.value<13){
        alert("usted debe ser mayor de 13 años para que podamos contactarnos")
    }
    else if(expRegNumeros.test(formEdad.value)===true){
        alert("el campo edad solo admite numeros")
    }
    else if(formCorreo.value===""){
        alert("el campo E-mail debe estar completo");
    }
    else if(expRegCorreo.test(formCorreo.value)===false){
        alert("el correo ingresado no es un formato valido");
    }
    else{
        alert("Gracias por contactarnos. a la brevedad nos estaremos comunicando contigo")
    }
});