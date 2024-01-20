/* prueba de javascript */

//modificar en HTML
let txt = document.querySelector('p')
txt.innerHTML = "texto?";

//Funciones
function funcion1(){
    alert("botonazo");
}

function escribir(etiqueta, texto){
    let titulo = document.querySelector(etiqueta)
    titulo.innerHTML = texto;
}
escribir('h1', 'Titulo?');

function numeroRandom(){
    let numRandom = Math.floor(Math.random()*10)+1; //generar un numero del 1 al 10
    return numRandom;
}

let regresarlol = numeroRandom2();
function numeroRandom2(){
    return Math.floor(Math.random()*10); //generar un numero del 0 al 10
}

function cajasTexto(){
    let  recibirDato = document.getElementById('valores').value;
    console.log(recibirDato);
    return; 
}

//alert sirve para mandar mensaje
alert("¡Bienvenida y bievenido a nuestro sitio web!");

//declarar variables
let nombre = "Luna";
let edad = 25;

//mostrar datos en la consola
console.log("edad" + edad);
console.log(nombre);

let numeroDeVentas = 50;
let mensajeDeError = "Error! Completa todos los campos";
alert(mensajeDeError);


//arreglos
let listanums = [];
listanums.push(5);
listanums.push(10);
//istanums.includes(10) ? algo : algo

//alerta para recivir datos
nombre = prompt("cual es tu nombre");
//recivir int
edad = parseInt(prompt("cual es tu edad"));

//if y else
if (edad >= 18){
alert(`si, eres mas ${edad}`); //template string. `${intentos == 1 ? "vez" : "veces"}` 
}
else{
    alert("no" + edad + "fallaste");
}


//Operador Ternario
//let palabraPersona = cantidadPersonas == 1 ? 'persona' : 'personas';


//ejemplos: https://github.com/alura-es-cursos/desafios-logica-programacion/blob/main/desafio-4
