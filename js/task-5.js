const inputNameRef = document.querySelector('#name-input');
// console.log(inputNameRef);
const textNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputChange);

function onInputChange(event) {
     textNameRef.textContent = 'незнакомец';

    // console.log(event.currentTarget.value);
    if (event.currentTarget.value !=="") {
         textNameRef.textContent = event.currentTarget.value;
    }
};


// inputNameRef.addEventListener('input', (event) => {
//     textNameRef.textContent = 'незнакомец';

//     // console.log(event.currentTarget.value);
//     if (event.currentTarget.value !=="") {
//          textNameRef.textContent = event.currentTarget.value;
//     }
// });

