// Search container
const container = document.querySelector('#containerDigits');

// Listener
container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const clickedDigit = event.target.textContent;
        console.log("Pressed", clickedDigit);
    }
});

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, a, b) {
    const actions = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide
    };
    if (actions[operator]) {
        return actions[operator](a, b);
    } else {
        return "Invalid operation";
    }
}

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};