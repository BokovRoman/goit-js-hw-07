// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount
//     - число.Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего
// на 10px Создай функцию destroyBoxes(), которая очищает div#boxes.


// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const controlsRef = document.querySelector('#controls');
const inputValueRef = controlsRef.firstElementChild;
// console.log(inputValueRef);
const btnCLearRef = document.querySelector('[data-action="destroy"]');
const btnCreateRef = document.querySelector('[data-action="render"]');
const boxesRef = document.querySelector('#boxes');

inputValueRef.addEventListener('input', onValueInput);


inputValueRef.addEventListener('input', () => {
    btnCreateRef.addEventListener('click', createBoxes);
});
btnCLearRef.addEventListener('click', destroyBoxes);
    
    btnCLearRef.addEventListener('click', () => {
    btnCreateRef.removeEventListener('click', createBoxes);
});

let amountBoxes = 0;
function onValueInput(event) {
    return amountBoxes = Number(event.currentTarget.value);
    // return amount;
};
// console.log(amount);

function createBoxes(amount) {
    let pixels = 30;
    let boxes = [];
    amount = amountBoxes;
    for (let i = 0; i < amount; i += 1) {
        const newPixels = pixels + i * 10;
        const newBox = document.createElement('div');
        newBox.style.width = `${newPixels}px`;
        newBox.style.height = `${newPixels}px`;
        newBox.style.border = '1px solid black';
        
        newBox.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        boxes.push(newBox);
    }
    boxesRef.append(...boxes); 
};

function destroyBoxes() {
    boxesRef.innerHTML = '';
    inputValueRef.value = 0;
};