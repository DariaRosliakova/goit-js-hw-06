const categoriesAll = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesAll.length);

for (let i = 0; i < categoriesAll.length; i += 1) {
    const categoriesEl = categoriesAll[i];  
    const categoriesList = categoriesEl.lastElementChild.children;
    console.log('Category:', categoriesEl.firstElementChild.textContent);
    console.log('Elements:', categoriesList.length);
}