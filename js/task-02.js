const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const containerEl = document.querySelector('#ingredients');
const elements = ingredients.map(element => {
    const listEl = document.createElement('li');
    listEl.classList = 'item';
    listEl.textContent = element;
    return listEl;
});
console.log(elements);
containerEl.append(...elements);


