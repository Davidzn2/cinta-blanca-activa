// var txt = document.getElementById("texto");
// console.log(txt);
// function alerta(){
//     alert('Si ')
// }
// function cambiarTexto() {
//   var txt = document.getElementById("texto");
//   txt.innerHTML = "Esto viene de JS";
//     console.log(txt);
// }

// var contadorDeClicks = 300
// txt.innerHTML = contadorDeClicks;

// function countClicks(){
//     var txt = document.getElementById("texto");
//     contadorDeClicks += 1;
//     txt.innerHTML = contadorDeClicks;
// }

// function numberA(){
//     var txt = document.getElementById("texto");
//     var x = document.getElementById('input1').value;
//     if (x == 2){
//         txt.innerHTML = 'Eso es un 2'
//     }else{
//         txt.innerHTML = 'eso es otro numero'
//     }
// }

var contaClicks = 0;
var num1 = 0;
var num2 = 0;
var total = 0;
function addNum(x) {
    var dondeMeterTexto = document.getElementById("resultado");
  contaClicks += 1;
  if (contaClicks == 1) {
     num1 = x;
  } else if (contaClicks == 2) {
     num2 = x;
  } 
  total = num1 + num2;
  
  dondeMeterTexto.innerHTML = total
}


// var aquiVa = document.getElementById('id1');
// console.log(aquiVa)
// aquiVa.innerHTML = 'Adios'
