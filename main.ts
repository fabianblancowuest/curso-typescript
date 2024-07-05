// !Colocar -> any - IGNORA cualquier tipo de dato -> No es recomendable utilizar nunca
let primerNombre:any = "Junior"

// * Inferencia -> infiere que a y b son de tipo -> number
const a = 1
const b = 2
const c = a + b //* -> c también será number

let cadenaText = "Hola"

//* functions

// ? Colocar el tipo de dato en los parámetros
function saludar(name: string) {
    console.log(name)
}

function saludar2({name, age}) {
    
    console.log(`Hola ${name} tiene ${age} años`)
}