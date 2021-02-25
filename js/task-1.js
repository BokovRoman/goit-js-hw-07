const categoriesListRef = document.querySelector('#categories');
const categoriesItemRef = categoriesListRef.querySelectorAll('.item');

console.log(`В списке ${categoriesItemRef.length} категории.`);
console.log(categoriesItemRef);

categoriesItemRef.forEach(item => {
    console.log('Категория: ', item.firstElementChild.textContent);
    console.log('Количество элементов:' , item.lastElementChild.children.length)
});

