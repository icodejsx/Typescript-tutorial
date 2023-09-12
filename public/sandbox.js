"use strict";
const miro = "nweke";
console.log(miro);
const input = document.querySelectorAll("input");
console.log(input);
input.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(8));
// arrary
let names = ['ken', 'kenny', 'youh'];
names.push('kenn');
// objects in Typescript
let objects = {
    age: 34,
    space: "awka",
    name: "dad"
};
objects = {
    name: "Dd",
    age: 34,
    space: 'oo'
};
//  Explicit types
let character;
let age;
let isLoggedIn;
let ninijas;
ninijas = [];
ninijas.push("i am");
console.log(ninijas);
// function type
let great = () => {
    console.log("man");
};
let man;
man = () => {
    console.log("man");
};
const add = function (a, b, c) {
    console.log(a + b + c);
};
add(3, "sdf", false);
const loginDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello `);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello `);
};
// function signature
let graat;
graat = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
