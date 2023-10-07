// interface
const me = {
    name: "shung",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/invoice.js';
// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// const form = document.querySelector('form')!;
// class
const invOne = new Invoice('merio', 'working on Mario job', 250);
const invTwo = new Invoice('ken', 'working on kens job', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invOne, invTwo);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const car = document.querySelector('#car');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, car.value, details.value, amount.valueAsNumber);
});
//  console.log(
//         type.value,
//         // toform.value,
//         details.value,
//         amount.value
//     );
