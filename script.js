const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#displayInput");
const clearBtn = document.querySelector("#clearButton");
const equalBtn = document.querySelector('.operatorEquals');
const dotBtn = document.querySelector('.operatorDot');
const backspaceButton = document.querySelector('.bckspcButton');


//Error message
let errorCannotDivideByNull = "Cannot divide by 0";

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
        if (isWaitingForNewInput) {
            operator = e.target.textContent;
            return;
        }

            if (operator !== undefined) {
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
    if (isWaitingForNewInput) {
        return;
    } 
    
    if (operator === undefined) {
        return;
    }
    
    
    secondNumber = display.textContent;
    const result = operate(firstNumber, operator, secondNumber);

    //Check if it's number or a string

    if (typeof result === "number") {
        display.textContent = Number(result.toFixed(3));
    } else {
        display.textContent = result;
    }

    firstNumber = result;
    operator = undefined;
    isWaitingForNewInput = true;
});

dotBtn.addEventListener("click", (e) => {

    if (isWaitingForNewInput) {
        display.textContent = "0.";
        isWaitingForNewInput = false;
        return;
    }


    if (display.textContent.includes('.')) {
        return;
    } 
    
    display.textContent = display.textContent + '.';

    
});


backspaceButton.addEventListener("click", (e) => {
    if (isWaitingForNewInput) {
        return;
    }

    display.textContent = display.textContent.slice(0, -1);

    if (display.textContent === "") {
        display.textContent = "0";
    }

});



function operate (firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return +firstNumber + +secondNumber;
    } else if (operator === "-") {
        return +firstNumber - +secondNumber;
    } else if (operator === "x") {
        return +firstNumber * +secondNumber;
    } else if (operator === "/") {
        if (+secondNumber === 0) {
            return errorCannotDivideByNull;
        } 
            
        return +firstNumber / +secondNumber;
        
        
    }
}

