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

// *Never, nunca devuelve nada, porque no accede al return
function throwError(message: string): never {
    throw new Error(message)
}

const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Inferencia funciones anónimas según el contexto
const avengers = ["Spidey", "Hulk", "Avengers"]

avengers.forEach((avenger) => {
    console.log(avenger.toUpperCase)
})

//* Objetos
// En este caso toma como tipos de datos del objeto con lo que hemos inicializado, por lo que no podremos cambiar el tipo de dato de name ni de age
let hero = {
    name: "Thor",
    age: 1500
}

// *Type Alias

type Hero = {
    name: string
    age: number
}

function createHero(hero: Hero) : Hero {
    const {name, age} = hero
    return { name, age }
}

const thor = createHero({name: "Thor", age: 1500})

// *Optional properties

type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal"

type Heroe = {
    readonly id?: HeroId //Propiedad de solo lectura
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale
}

let heroe : Heroe = {
    name: "Iron Man",
    age: 2000,
    isActive: false
}

function createHeroe(heroe: Heroe) : Heroe {
    const { name, age } = heroe
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

type HexadecimalColor = `#${string}`

// const color : HexadecimalColor = "0033ff"
const color2: HexadecimalColor = "#0033ff"

heroe.powerScale = "galactic"

// Intersection Types

// Arrays

// Array of strings
const languages: string [] = []

// Array of strings and number
const languagesNumbers : (string | number) [] = []

// Array of Hero
const heroesArray : Hero[] = []

/* 
[
    ["X", "O", "X"], <- string[]
    ["O", "X", "O"],
    ["X", "", "X"],
]
*/

type CellValue = "X" | "O" | ""

// Una tupla es un array que tiene un límite fijado de longitud
type gameBoard = [
    [CellValue, CellValue, CellValue ],
    [CellValue, CellValue, CellValue ],
    [CellValue, CellValue, CellValue ],
] 
