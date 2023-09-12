const miro = "nweke"
console.log(miro)

const input = document.querySelectorAll("input");
console.log(input)

input.forEach(input => {
    console.log(input)
})   



const circ = (diameter: number) => {
    return diameter *Math.PI
}

console.log(circ(8))


// arrary

let names = ['ken', 'kenny', 'youh']

names.push('kenn')

// objects in Typescript

let objects = {
    age: 34,
    space: "awka",
    name: "dad"
}

objects = {
    name: "Dd",
    age: 34,
    space: 'oo'
 }


//  Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

let ninijas: string[]

ninijas = [];

ninijas.push("i am")

console.log(ninijas)

// function type

let great = () => {
    console.log("man");
}


let man: Function;

man = () => { 
    console.log("man");
}

const add = function (a: number, b: string, c: any) {
    console.log(a + b + c)
    
}

add(3, "sdf", false)

// Type Aliases

type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum }

const loginDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet = (user:objWithName) => {
    console.log(`${user.name} says hello `)
}

const greetAgain = (user:objWithName) => {
    console.log(`${user.name} says hello `)
}

// function signature

let graat: (a: string, b: string) => void;

graat = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
 }
