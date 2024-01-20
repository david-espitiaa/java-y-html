let titulo = document.querySelector('h1');
titulo.innerHTML = "Desafio";

function Consola(){
    console.log("El botón fue clicado");
}

function escribe(){
    let ciudad = prompt("Escribe una ciudad");
    alert(`fuiste a ${ciudad}`)
}

function alerta(){
    alert("Alerta");
}

function suma(){
    let num1 = parseInt(prompt("escribe un numero: "));
    let num2 = parseInt(prompt("escribe un numero: "));
    res = num1 + num2;
    alert("el resultado de: "+num1+" + "+ num2+" es: "+res);
}
