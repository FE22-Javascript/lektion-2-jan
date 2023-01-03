const img1 = document.querySelector('img').getAttribute('src');
const img2 = "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const img3 = "https://images.unsplash.com/photo-1508013861974-9f6347163ebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

// målet:
// vid knapptryck skall bilden bytas ut

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let imgEl = document.querySelector('img');
    let currentImgSrc = imgEl.getAttribute('src');

    if (currentImgSrc === img1) {
        // om nuvarande bild är första bilden
        // vill vi byta till den andra istället
        imgEl.setAttribute('src', img2);
    } else if (currentImgSrc === img2) {
        imgEl.setAttribute('src', img3);
    } else {
        imgEl.setAttribute('src', img1);
    }
});

let sendButton = document.getElementById('btn');
sendButton.addEventListener('click', function() {
    let inputEl = document.getElementById('text-input');
    console.log(inputEl.value);
});

// vid 'enter'-klick i input skall värdet loggas
let inputEl = document.getElementById('text-input');
//lägg på en eventlyssnare på inputen
inputEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        console.log(inputEl.value);
    }
});

console.log(addStuff(1, 1));
//console.log(addStuff2(1, 1));

function addStuff(num1, num2) {
    let sum = num1 + num2;
    return sum;
};

const addStuff2 = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
};
