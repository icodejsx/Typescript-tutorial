// interface

interface Isperson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a:number):number
}

const me: Isperson = {
    name: "shung",
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount
    }
}

const greetPerson = (person: Isperson) => {
    console.log('hello', person.name)
}

greetPerson(me)


import { Invoice } from './classes/invoice.js'
// const anchor = document.querySelector('a')!;

// console.log(anchor.href)

// const form = document.querySelector('form')!;


// class



const invOne = new Invoice('merio', 'working on Mario job', 250)
const invTwo = new Invoice('ken', 'working on kens job', 300)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})


console.log(invOne, invTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const car = document.querySelector('#car') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        car.value,
        details.value,
        amount.valueAsNumber
    );
})


//  console.log(
//         type.value,
//         // toform.value,
//         details.value,
//         amount.value
//     );

