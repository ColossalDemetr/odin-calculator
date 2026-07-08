// Find ALL the number buttons
const numbers = document.querySelectorAll(".number");
// Find ALL the operator buttons
const operators = document.querySelectorAll(".operator")
// Find the display div
const display = document.querySelector("#displayInput");
// Find the clear button
const clearBtn = document.querySelector("#clearButton");
// Calculator status
let firstNumber;
let secondNumber;
let operator;
let isWaitingForNewInput = false;

// Clear button apply
clearBtn.addEventListener("click", () => {
    display.textContent = "0";
});


// Add numbers you pressing on a display
numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (isWaitingForNewInput) {
            display.textContent = e.target.textContent;
            isWaitingForNewInput = false;
            return;
        }
        //Check if it's 0?
        if (display.textContent === "0") {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    
    });
});

// Add operators you pressing on a display
operators.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        firstNumber = display.textContent;
        operator = e.target.textContent;
        isWaitingForNewInput = true;
    });
});