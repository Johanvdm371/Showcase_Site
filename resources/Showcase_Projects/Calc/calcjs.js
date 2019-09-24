//The Obligatory long list of variables. Probably much simpler ways to do this, but this works for my brain!
const output = document.querySelector(".readback-text");
const clear = document.querySelector(".clear");
const clearEntry = document.querySelector(".clear-entry");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const equals = document.querySelector(".equals");
const glowButton = document.querySelector(".glow");
const calculator = document.querySelector(".calculator");

let currentSum = 0;
let currentNum = 0;
let previousNum = 0;
let pressedNum = '';
let currentOperator = 'none';
let previousOperator = 'none';
let glowState = 1

//Toggle glowing animation on calculator background
function toggleGlow() {
    if (glowState === 1) {
        calculator.classList.remove('glowing');
        glowState = 0;
    } else {
        calculator.classList.add('glowing');
        glowState = 1;
    }
}

function clearScreen() {
    currentSum = 0;
    currentNum = 0;
    previousNum = 0;
    pressedNum = '';
    currentOperator = 'none';
    previousOperator = 'none';
    eq = true;
    output.innerHTML = currentNum;
}

function clearE() {
    currentNum = 0;
    previousNum = 0;
    output.innerHTML = currentNum;
}

//This function is called whenever a number is pressed. It updates both the current number and the display
function pressNumber(number) {
    if (currentNum.toString().length < 10) {
        if (pressedNum === '') {
            currentNum = number;
        } else {
            currentNum = (currentNum*10) + number;
        }
    }
    output.innerHTML = currentNum;
    pressedNum = number;
}

//when an operator is pressed, the current sum is calculated and the running total is displayed. Simulates a physical calculator
function pressOperator() {
    if (currentSum === 0) {
        currentSum = currentNum;
        output.innerHTML = currentSum;
        currentNum = 0;
    } else {
        let testSum = currentSum;
        if (currentOperator === 'plus') {
            testSum = currentSum + currentNum;
            previousOperator = 'plus';
            previousNum = currentNum;
        }
        if (currentOperator === 'minus') {
            testSum = currentSum - currentNum;
            previousOperator = 'minus';
            previousNum = currentNum;
        }
        if (currentOperator === 'multiply') {
            testSum = currentSum * currentNum;
            previousOperator = 'multiply';
            previousNum = currentNum;
        }
        if (currentOperator === 'divide') {
            testSum = currentSum / currentNum;
            previousOperator = 'divide';
            previousNum = currentNum;
        }
        if (currentOperator === 'none') {
            currentNum = previousNum;
            currentOperator = previousOperator;
            if (currentOperator === 'plus') {
                testSum = currentSum + currentNum;
                previousOperator = 'plus';
                previousNum = currentNum;
            }
            if (currentOperator === 'minus') {
                testSum = currentSum - currentNum;
                previousOperator = 'minus';
                previousNum = currentNum;
            }
            if (currentOperator === 'multiply') {
                testSum = currentSum * currentNum;
                previousOperator = 'multiply';
                previousNum = currentNum;
            }
            if (currentOperator === 'divide') {
                testSum = currentSum / currentNum;
                previousOperator = 'divide';
                previousNum = currentNum;
            }
            currentOperator = 'none';
        }
        if (testSum <= 9999999999) {
            currentSum = testSum;
            currentNum = 0;
            pressedNum = '';
            output.innerHTML = currentSum;
        } else {
            output.innerHTML = currentSum;
            alert(`The answer: ${testSum} is too large for the display.\nThe current operation will not be completed.`);
        }
    }
}


function addition() {
    if (!(pressedNum === '')) {
        pressOperator();
    };
    currentOperator = "plus";
    pressedNum = '';
}
function subtraction() {
    if (!(pressedNum === '')) {
        pressOperator();
    }
    currentOperator = "minus";
    pressedNum = '';
}
function multiplication() {
    if (!(pressedNum === '')) {
        pressOperator();
    }
    currentOperator = "multiply";
    pressedNum = '';
}
function division() {
    if (!(pressedNum === '')) {
        pressOperator();
    }
    currentOperator = "divide";
    pressedNum = '';
}

//function for the equals button
function finalize() {
    pressOperator();
    currentOperator = 'none';
    pressedNum = '';
}

//Event listeners

glowButton.addEventListener('click', toggleGlow);

clear.addEventListener('click', clearScreen);
clearEntry.addEventListener('click', clearE);

add.addEventListener('click', addition);
subtract.addEventListener('click', subtraction);
multiply.addEventListener('click', multiplication);
divide.addEventListener('click', division);
equals.addEventListener('click', finalize);

zero.addEventListener('click', event => {
    pressNumber(0);
})
one.addEventListener('click', event => {
    pressNumber(1);
})
two.addEventListener('click', event => {
    pressNumber(2);
})
three.addEventListener('click', event => {
    pressNumber(3);
})
four.addEventListener('click', event => {
    pressNumber(4);
})
five.addEventListener('click', event => {
    pressNumber(5);
})
six.addEventListener('click', event => {
    pressNumber(6);
})
seven.addEventListener('click', event => {
    pressNumber(7);
})
eight.addEventListener('click', event => {
    pressNumber(8);
})
nine.addEventListener('click', event => {
    pressNumber(9);
})