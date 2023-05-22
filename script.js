// addition
function add(num1, num2) {
  return num1 + num2;
}
// subtraction
function subtract(num1, num2) {
  return num1 - num2;
}
// multiplication
function multiply(num1, num2) {
  return num1 * num2;
}
// division
function divide(num1, num2) {
  return num1 / num2;
}

function modulus(num1) {
  return num1 / 100;
}

let firstNumber;
let secondNumber;
let operator;

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

//

let displayValue = document.querySelector(".display-value");
let displayNumbers = "";

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    if (!displayNumbers) {
      displayNumbers += numberButton.textContent;
      displayValue.textContent = displayNumbers;
    }
    // else {
    //   displayValue.textContent += `${firstNumber} ${operator} ${numberButton.textContent}`;
    // }

    // operate(operator, displayNumbers, num2);
  });
});

const operations = document.querySelectorAll(".operator");

operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    // storing first number
    firstNumber = displayNumbers;
    console.log(firstNumber);
    displayNumbers = `${displayNumbers} ${operation.textContent}`;
    // storing operator
    operator = operation.textContent;
    console.log(operator);
    displayValue.textContent = displayNumbers;
    // resetting displayNumber to zero to store second number
    displayNumbers = "";
  });
});
