var txt = document.getElementById("texto");
console.log(txt);
function alerta(){
    alert('Si ')
}
function cambiarTexto() {
  var txt = document.getElementById("texto");
  txt.innerHTML = "Esto viene de JS";
    console.log(txt);
}

var contadorDeClicks = 300
txt.innerHTML = contadorDeClicks;

function countClicks(){
    var txt = document.getElementById("texto");
    contadorDeClicks += 1;
    txt.innerHTML = contadorDeClicks;
}

function numberA(){
    var txt = document.getElementById("texto");
    var x = document.getElementById('input1').value;
    if (x == 2){
        txt.innerHTML = 'Eso es un 2'
    }else{
        txt.innerHTML = 'eso es otro numero'
    }
}

