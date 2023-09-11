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

age = 30;

//Array
let ninijas: string[]

ninijas = [];

ninijas.push("i am")

console.log(ninijas)
