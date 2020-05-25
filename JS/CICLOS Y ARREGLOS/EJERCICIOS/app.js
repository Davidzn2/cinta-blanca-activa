// 1. Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:
// Para los múltiplos de 3 muestra la palabra "Fizz" en lugar del número.

// Para los múltiplos de 5 muestra la palabra "Buzz" en lugar del número.

// Para los múltiplos de 3 y 5 muestra la palabra "FizzBuzz" en lugar del número.

// for(var i = 1; i <= 50; i++){
//     if(i % 15 == 0){
//     // if(i % 5 == 0 && i % 3 == 0){
//         console.log('Fizzbuzz')
//     } else if( i % 5== 0){
//         console.log('Buzz')
//     } else if (i % 3 == 0){
//         console.log('Fizz')

//     } else{
//         console.log(i)
//     }
// }

// // 2. Imprime por consola la lista de números del 1 al 30, incrementándose de 3 en 3.
// for(i=1; i<=30; i+=3 ){
//     console.log(i)
// }
// 3. Escribe un programa que indique si un número es par o impar. 
for (var i = 0; i<50; i++){
    if(i % 2 == 0){
        console.log(`${i} es par`)
    } else if(i%2 !=0){
        console.log(`${i} es impar`)
    }
}
