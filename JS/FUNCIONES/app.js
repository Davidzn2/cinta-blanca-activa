function funcionDePrueba(){
    console.log('Hola')
}
funcionDePrueba()

function saludarPersona(nombre='David'){
    console.log(`Hola ${nombre}`)
}
saludarPersona()
saludarPersona('Paco')

function minian(genero, edad){
    if(genero=="h" && edad >= 13){
        console.log("Puede")
    }else{
        console.log('No puede')
    }
}

minian('h', 15)