let operator = "";
let firstNumber = "";
let secondNumber = "";


function append(Number) {
    if (operator === "") {
        firstNumber += Number;
        document.getElementById('result').value = firstNumber;
    } else {
        secondNumber += Number;
        document.getElementById('result').value = secondNumber;
    }
}


function setoperator(op) {
    if (firstNumber !== "") {
        operator = op;
    }
}

function showresult() {
    let res = 0;
    switch (operator) {
        case '+':
            res = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            res = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            res = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            res = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }
    document.getElementById('result').value = res;
    resetNumbers();
}

function reset() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    document.getElementById('result').value = "";
}

function resetNumbers() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key)) append(key);
    else if (['+', '-', '*', '/'].includes(key)) setoperator(key);
    else if (key === 'Enter') showresult();
    else if (key === 'Backspace') reset();
});
