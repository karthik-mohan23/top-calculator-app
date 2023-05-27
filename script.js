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
// modulus
function modulus(num1) {
  return num1 / 100;
}

let previousValue = "";
let currentValue = "";
let operator = "";

function operate(operator, num1, num2) {
  console.log(operator(num1, num2));
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
    console.log(previousValue + operator);
  });
});

// calculation
const equalToButton = document.querySelector(".equal-to");
equalToButton.addEventListener("click", () => {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  switch (operator) {
    case "+":
      console.log(operator, previousValue, currentValue);
      calculatorDisplay.textContent = operate(add, previousValue, currentValue);
      break;
    case "-":
      console.log(operator, previousValue, currentValue);

      calculatorDisplay.textContent = operate(
        subtract,
        previousValue,
        currentValue
      );
      break;
    case "×":
      console.log(operator, previousValue, currentValue);
      calculatorDisplay.textContent = operate(
        multiply,
        previousValue,
        currentValue
      );
      break;
    case "÷":
      console.log(operator, previousValue, currentValue);
      calculatorDisplay.textContent = operate(
        divide,
        previousValue,
        currentValue
      );
      break;
    case "%":
      console.log(operator, previousValue);
      calculatorDisplay.textContent = operate(modulus, previousValue);
      break;
    default:
      console.log("Error");
      break;
  }
});
