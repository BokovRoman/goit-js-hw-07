
const inputControlRef = document.querySelector('#font-size-control');
// console.log(inputControlRef);
const textRef = document.querySelector('#text');

inputControlRef.addEventListener('input', onRangeChange);

function onRangeChange(event) {
    let startPointValueRange = Number(event.currentTarget.value);
    // console.log(startPointValueRange);
    textRef.style.fontSize = `${startPointValueRange + 50}%`;
    // console.log(textRef);
};



// 2st method
// textRef.style.fontSize = '18px';
// console.log(textRef);

// function onRangeChange(event) {
//     textRef.style.fontSize = event.currentTarget.value+'px';
// };