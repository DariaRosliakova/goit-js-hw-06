function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  let array = [];
  let startSize = 30;
  for (let i = 0; i < amount; i += 1) {    
    let div = document.createElement("div");
    let size = startSize + i * 10;
    let color = getRandomHexColor();
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}`;    
    array.push(div);
  }
  boxes.append(...array);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}
