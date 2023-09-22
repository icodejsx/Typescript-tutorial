// const anchor = document.querySelector('a')!;

// console.log(anchor.href)

// const form = document.querySelector('form')!;


// class
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}


const invOne = new Invoice('merio', 'working on Mario job', 250)
const invTwo = new Invoice('ken', 'working on kens job', 300)

let Invoices: Invoice[] = []
Invoices.push(invOne)
Invoices.push(invTwo)
console.log(Invoices)


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

