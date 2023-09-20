// const anchor = document.querySelector('a')!;

// console.log(anchor.href)

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#detials') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber
    )
})

let car: any;
car = "text" 
car = 45

console.log(car)