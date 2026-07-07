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