var platillos = [
    "Enchiladas",   //0
    "Taco",         //1
    "Tamal",        //2 
    "Pozole",       //3
    "Barbacoa",     //4
    "Picada"        //5
];
// Mediante un ciclo FOR, muestra todos los platillos (recuerda la propiedad length)
for (var i = 0; i < platillos.length; i++){
    console.log(platillos[i]);
}
// Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.
for(var i = 0; i < platillos.length; i+=1){
    if(platillos[i] == "Pozole" || platillos[i] == "Barbacoa"){
        console.log(platillos[i])
    }
}
// Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.
for (i = 0; i<platillos.length; i++){
    if(i % 2 != 0){
        console.log(platillos[i])
    }
}
// Mediante únicamente un ciclo FOR, muestra los elementos que sean pares.
for(var i = 0; i < platillos.length; i+=2){
    console.log(platillos[i])
}