function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const text = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = body.style.backgroundColor;
}