"use strict";

let mujer = document.getElementById("mujer");
let hombre = document.getElementById("hombre");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let edad = document.getElementById("edad");
let btnCalcularMetabolismo = document.getElementById("btnCalcularMetabolismo");
let divResultadoMetabolismo = document.getElementById("divResultadoMetabolismo");
let metabolismo;
let sexo;
let expRegNumeros = /0-9/;

function calcularMetabolismo(sexo,peso,altura,edad){
    if (sexo=== "varon"){
        metabolismo=(10*peso)+(6.25*altura)-(5*edad)+5;
        return metabolismo;
    }
    else if(sexo=== "dama"){
        metabolismo= (10*peso)+(6.25*altura)-(5*edad)-161;
        return metabolismo;
    }
    else{alert("debe seleccionar su sexo")}
}

btnCalcularMetabolismo.addEventListener("click",()=>{
    if(mujer.checked===true){
        sexo= "dama"
    } 
    else if(hombre.checked===true){
        sexo="varon"
    }
    else{
        sexo="" 
    }
    if((expRegNumeros.test(peso)===true)||(expRegNumeros.test(altura)===true)||(expRegNumeros.test(edad)===true)){
        divResultadoMetabolismo.innerHTML=String("solo se admiten valores numericos");
    }
    else if(edad.value===""){
        divResultadoMetabolismo.innerHTML=String("el campo edad debe estar completo");
    }
    else if(altura.value===""){
        divResultadoMetabolismo.innerHTML=String("el campo altura debe estar completo");
    }
    else if(peso.value===""){
        divResultadoMetabolismo.innerHTML=String("el campo peso debe estar completo");
    }
    else if((edad.value<5)||(edad.value>89)){
        divResultadoMetabolismo.innerHTML=String("no podemos garantizar el calculo correcto con edades menores a 5 años o mayores a 90 años") 
    }
    else if((altura.value<100)||(altura.value>210)){
        divResultadoMetabolismo.innerHTML=String("no podemos garantizar el calculo correcto con alturas menores a 100 cms o mayores a 215 cms") 
    }
    else {calcularMetabolismo(sexo,Number(peso.value),Number(altura.value),Number(edad.value));
        divResultadoMetabolismo.innerHTML=String(`sus calorias de mantenimiento son ${Number(metabolismo)} kcal`);
    }
});

