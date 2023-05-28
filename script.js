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

let previousValue = "";
let currentValue = "";
let operator = "";

function operate(operator, num1, num2) {
  return operator(num1, num2);
}

// calculator display
let calculatorDisplay = document.querySelector(".display-value");

// to get number
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    currentValue += numberBtn.textContent;
    calculatorDisplay.textContent = currentValue;
  });
});

//to get operator
const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    operator = operatorBtn.textContent;
    previousValue = currentValue;
    currentValue = "";
    calculatorDisplay.textContent = previousValue + " " + operator;
  });
});

// calculation
const equalToButton = document.querySelector(".equal-to");
equalToButton.addEventListener("click", () => {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  switch (operator) {
    case "+":
      calculatorDisplay.textContent = operate(add, previousValue, currentValue);
      currentValue = calculatorDisplay.textContent;
      break;
    case "-":
      calculatorDisplay.textContent = operate(
        subtract,
        previousValue,
        currentValue
      );
      currentValue = calculatorDisplay.textContent;
      break;
    case "×":
      calculatorDisplay.textContent = operate(
        multiply,
        previousValue,
        currentValue
      );
      currentValue = calculatorDisplay.textContent;
      break;
    case "÷":
      calculatorDisplay.textContent = operate(
        divide,
        previousValue,
        currentValue
      );
      currentValue = calculatorDisplay.textContent;
      break;
    default:
      console.log("Error");
      break;
  }
});

// modulus operator
const modulusBtn = document.querySelector(".modulus");
modulusBtn.addEventListener("click", () => {
  calculatorDisplay.textContent = calculatorDisplay.textContent / 100;
  currentValue = calculatorDisplay.textContent;
});

// adding functionality to clear button
const clearAllButton = document.querySelector(".clear");
clearAllButton.addEventListener("click", () => {
  calculatorDisplay.textContent = "";
  previousValue = "";
  currentValue = "";
  operator = "";
});
