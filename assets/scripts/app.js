const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(usrInput.value)
}

function add() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`//using ${} .toString is implicit
    currentResult = currentResult + enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
} 

function subtract() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`//using ${} .toString is implicit
    currentResult = currentResult - enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`//using ${} .toString is implicit
    currentResult = currentResult * enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`//using ${} .toString is implicit
    currentResult = currentResult / enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add); //no(), just keep in mind there is this function for now!
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


//let calcDescription = `(${defaultResult} + 10)`




//var= data container where the value can change
//const = data container where the value must not change

//Global Scope = can use Globally and Locally 
//Local Scope = can use Locally only. The only way to export it is to return it
