const value = document.querySelector('#value');
const removeValue = document.querySelector('button[data-action=decrement]');
const addValue = document.querySelector('button[data-action=increment]');
let counterValue = 0;

addValue.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

removeValue.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});
