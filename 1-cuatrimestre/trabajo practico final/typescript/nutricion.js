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
    calcularMetabolismo(sexo,Number(peso.value),Number(altura.value),Number(edad.value));
    divResultadoMetabolismo.innerHTML=String(`sus calorias de mantenimiento son ${Number(metabolismo)} kcal`);
})

