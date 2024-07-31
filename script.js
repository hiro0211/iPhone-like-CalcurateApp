let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = String(number);
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? String(number) : displayValue + number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function toggleSign() {
    displayValue = String(-parseFloat(displayValue));
    updateDisplay();
}

function percentage() {
    displayValue = String(parseFloat(displayValue) / 100);
    updateDisplay();
}

function setOperator(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculate();
        displayValue = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function calculate() {
    const inputValue = parseFloat(displayValue);

    if (operator === '+') {
        displayValue = String(firstOperand + inputValue);
    } else if (operator === '-') {
        displayValue = String(firstOperand - inputValue);
    } else if (operator === '×') {
        displayValue = String(firstOperand * inputValue);
    } else if (operator === '÷') {
        displayValue = String(firstOperand / inputValue);
    }

    firstOperand = parseFloat(displayValue);
    waitingForSecondOperand = false;
    operator = null;
    updateDisplay();
    return firstOperand;
}

updateDisplay();