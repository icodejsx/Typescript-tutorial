"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href)
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const detials = document.querySelector('#detials');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, detials.value, amount.valueAsNumber);
});
