const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListRef = document.querySelector('#ingredients');
// console.log(ingredientListRef);

// const elementsList = ingredients.map(value => {
//   const listEl = document.createElement('li');
//   listEl.textContent = value;

//   return listEl;
// });
// ingredientListRef.append(...elementsList);


const makeElementList = values => {
  return values.map(value => {
    const listEl = document.createElement('li');
    listEl.textContent = value;

    return listEl;
  });
};

ingredientListRef.append(...makeElementList(ingredients));