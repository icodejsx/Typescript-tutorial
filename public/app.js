"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// const form = document.querySelector('form')!;
// class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('merio', 'working on Mario job', 250);
const invTwo = new Invoice('ken', 'working on kens job', 300);
let Invoices = [];
Invoices.push(invOne);
Invoices.push(invTwo);
console.log(Invoices);
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
