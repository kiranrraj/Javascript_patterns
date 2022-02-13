import valueSingleton from './singleton.js';

let plus2 = document.querySelector('.plus2');
let minus2 = document.querySelector('.minus2');
let val2 = document.querySelector('.value2');

val2.textContent = valueSingleton.getValue();

plus2.addEventListener('click', () => {
    valueSingleton.incrementValue();
    val2.textContent = valueSingleton.getValue();
});

minus2.addEventListener('click', () => {
    valueSingleton.decrementValue();
    val2.textContent = valueSingleton.getValue();
});