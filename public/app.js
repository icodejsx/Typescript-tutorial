"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// const form = document.querySelector('form')!;
// class
class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
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
