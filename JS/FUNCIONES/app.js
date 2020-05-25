// function funcionDePrueba(){
//     console.log('Hola')
// }
// funcionDePrueba()

// function saludarPersona(nombre='David'){
//     console.log(`Hola ${nombre}`)
// }
// saludarPersona()
// saludarPersona('Paco')

// function minian(genero, edad){
//     if(genero=="h" && edad >= 13){
//         console.log("Puede")
//     }else{
//         console.log('No puede')
//     }
// }
// function degreesFar(degreesCelcius){
//    var degreesFarenheit = (degreesCelcius * 9/5) + 32 
//    console.log (degreesFarenheit)
// }
// var convertido = degreesFar(1)
// console.log(convertido ) 
// console.log(convertido * 5) 

function suma(a, b){
    console.log('antes de la suma')
    x = (a + b) 
    console.log('desupes de la suma')
    return x

}

var x = suma(8,9)
console.log(x)

// 2.- Hacer una función que muestre la tabla de multiplicar de un número

function tablaDeMultiplicar(x){
    for (i = 1; i <= 10; i++){
        console.log (` ${x} x ${i} = ${ i * x}`)
    }
}

tablaDeMultiplicar(8);

// 13.- Escribe una función para verificar si un número es divisible entre 5 y 11 o no lo es
function fiveOrEleven(number){
    if (number % 5 == 0 && number % 11 == 0){
        return (`${number} es divisibe entre 5 y 11`)
    } else if(number % 5 == 0){
        return (`${number} es divisibe entre 5 `)
    }else if(number % 11 == 0){
        return (`${number} es divisibe entre 11 `)
    } else {
        return `${number} no es divisible entre 11 o 5`
    }
}
// 12.- Escribe una función que devuelva si un número es negativo, positivo o cero
function positivoNegativoOCero(numero){
    var x
    if(numero < 0){
        x = 'Numero negativo';
    }else if ( numero >0){
        x = 'Numero Positivo';
    } else if ( numero == 0){
        x = 'Numero 0';
    } else {
        x = 'No es un numero';
    }
    return x
}
console.log(positivoNegativoOCero(0))

// 17.- Escribe una función que imprima todos los números pares entre 1 y 100
function pairsBetween1and100(){
    for (var i = 1; i <= 100; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

// 18.- Escribe una función que imprima todos los números nones entre 1 y 100
function unPairsBetween1and100(){
    for (var i = 1; i <= 100; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}

// Mayor de edad
function mayorDeEdad(edad){
    if(edad >= 18){
        return true
    }
    else{
        return false    
    }
}
var jose = mayorDeEdad(14)
