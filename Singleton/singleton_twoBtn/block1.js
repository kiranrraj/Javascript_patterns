import valueSingleton from './singleton.js';

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let val = document.querySelector('.value')

val.textContent = valueSingleton.getValue();

plus.addEventListener('click', () => {
    valueSingleton.incrementValue();
    val.textContent = valueSingleton.getValue();
});

minus.addEventListener('click', () => {
    valueSingleton.decrementValue();
    val.textContent = valueSingleton.getValue();
});