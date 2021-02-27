const inputTextRef = document.querySelector('#validation-input');
// console.log(inputTextRef);

inputTextRef.addEventListener('blur', onFocusChange);

function onFocusChange(event) {
    if (Number(inputTextRef.dataset.length) === event.currentTarget.value.length) {
        inputTextRef.classList.add('valid');
        inputTextRef.classList.remove('invalid');
    }
    else {
        inputTextRef.classList.add('invalid');
    }
};
// console.log(inputTextRef.dataset.length);