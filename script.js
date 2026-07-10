const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#displayInput");
const clearBtn = document.querySelector("#clearButton");
const equalBtn = document.querySelector('.operatorEquals');




// Calculator status
let firstNumber;
let secondNumber;
let operator;
let isWaitingForNewInput = false;




// Clear button apply
clearBtn.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    isWaitingForNewInput = false;
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
        if (operator) {
            secondNumber = display.textContent;
            const result = operate(firstNumber, operator, secondNumber);
            display.textContent = result;
            firstNumber = result;
            operator = e.target.textContent;
            isWaitingForNewInput = true;
        } else {
            firstNumber = display.textContent;
            operator = e.target.textContent;
            isWaitingForNewInput = true;
        }
        }); 
});




// Set up equal button
equalBtn.addEventListener("click", () => {
    secondNumber = display.textContent;
    const result = operate(firstNumber, operator, secondNumber);
    display.textContent = result;
});



function operate (firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return +firstNumber + +secondNumber;
    } else if (operator === "-") {
        return +firstNumber - +secondNumber;
    } else if (operator === "x") {
        return +firstNumber * +secondNumber;
    } else if (operator === "/") {
        return +firstNumber / +secondNumber;
    }
}

