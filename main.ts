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

function saludar2({name, age} : {name: string, age:number}) {
    console.log(`Hola ${name} tiene ${age} años.`)
}

function saludar3({name, age} : {name: string, age:number}):number {
    console.log(`Hola ${name} tiene ${age} años.`)
    return age
}

// *Indicamos que el argumento es de tipo función que no devuelve nada, pero si quisiera puede hacerlo
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn("Miguel")
}

const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)