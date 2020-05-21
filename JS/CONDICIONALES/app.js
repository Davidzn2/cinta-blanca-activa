// Crea una aplicación web empleando JavaScript que permita a dos usuarios
//  jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. 
// Compara los valores ingresados y muestra en pantalla, mediante un alert, 
// quién fue el jugador ganador.
// Piedra = 1
// Papel = 2
// Tijera = 3
// var usuario1 = prompt("usuario1: Ingresa tu eleccion, Piedra es 1,  papel es 2 y tijeras 3")
// var usuario2 = prompt("usuario2: Ingresa tu eleccion, Piedra es 1,  papel es 2 y tijeras 3")

// if(usuario1 == 1 && usuario2 == 2){
//     alert("Gano Usuario2")
// }else if(usuario1 == 1 && usuario2 == 3){
//     alert("Gano Usuario1")
// }else if(usuario1 == 2 && usuario2 == 3){
//     alert("Gano Usuario2")
// }else if(usuario1 == 2 && usuario2 == 1){
//     alert("Gano Usuario1")
// } else if(usuario1 == usuario2){
//     alert(empate)
// }

// var a = prompt("pon un numero")
// var b = prompt("pon un numero")
// var c =  prompt("pon un numero")

// if (  a > b  && b > c ){
//     alert(a + " es el mas grande")
// } else if(b > a && b > c){
//     alert(b + " es el mas grande")
// } else if(c >a && c > b){
//     alert(c + " es el mas grande")
// }

var x = parseInt(prompt("pon un numero"))
var y = parseInt(prompt("pon un numero"))
var z = parseInt(prompt("pon un numero"))
var w = parseInt(x) + parseInt(y) + parseInt(z)  
alert("Las suma es:  " + w)
alert(`La suma de ${x}, ${y} y ${z} = ${x+y+z}`)
