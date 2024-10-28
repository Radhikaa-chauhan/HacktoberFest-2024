let displayValue = '';
let currentOperator = '';
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(operator) {
    if (displayValue !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(displayValue);
        } else if (currentOperator) {
            calculate();
        }
        currentOperator = operator;
        displayValue = '';
    }
}

function calculate() {
    if (currentOperator && displayValue !== '') {
        const secondOperand = parseFloat(displayValue);
        switch (currentOperator) {
            case '+':
                firstOperand += secondOperand;
                break;
            case '-':
                firstOperand -= secondOperand;
                break;
            case '*':
                firstOperand *= secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert("Cannot divide by zero");
                    clearDisplay();
                    return;
                }
                firstOperand /= secondOperand;
                break;
        }
        displayValue = firstOperand.toString();
        currentOperator = '';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
