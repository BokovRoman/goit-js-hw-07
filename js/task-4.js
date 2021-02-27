const counterValueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
// console.log(incrementBtnRef);
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

decrementBtnRef.addEventListener('click', () => {
    counterValue -= 1;
    counterValueRef.textContent=counterValue;
});

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    counterValueRef.textContent=counterValue; 
});