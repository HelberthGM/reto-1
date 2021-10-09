$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
    });   
});

$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Apellido");
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido; 
    });   
});

function calc(){
var valor1 = document.getElementById('valor1').value; 
var valor2 = document.getElementById('valor2').value;
var operador =  document.getElementById('operador').value;
var resultado = eval(valor1 + operador + valor2); 
switch(operador){
    case '+':
    operacion = ' sumado por ';
    break;
    case '-':
    operacion = ' restado por ';
    break;
    case '*':
    operacion = ' multiplicado por ';
    break;
    case '/':
    operacion = ' dividido por ';
    break;
}
document.getElementById('resultado').innerHTML = valor1 + operacion + valor2 + ' es igual a ' + resultado;
}

function mostrarFecha() {
document.getElementById("fecha").innerHTML = Date();
}
function alertas(){
alert('Hola JuvenTic')
}
function consola(){
console.log('Estamos unsando el evento onclick para enviar datos a la consola. Esto es muy usado para pruebas y desarrollo.');
console.log(20 + 5);
}
function cambiar() {
var x = document.getElementById("lenguaje").value;
document.getElementById("opcion").innerHTML = "Usted selecciono: " + x;
}
function preguntapromt() {
var nombre = prompt("Por favor escribe tu nombre", "Pedro Perez");
if (nombre != null) {
document.getElementById("promt").innerHTML =
"Hola " + nombre + "! Como estas hoy?";
}
}