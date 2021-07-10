const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(usrInput.value)
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} + ${enteredNumber}`//using ${} .toString is implicit
    currentResult += enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: "ADD",
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    }
    //logEntries.push(enteredNumber);//store values in an array
    logEntries.push(logEntry);//store object in an array
    console.log(logEntry.operation)//isolate specific property out of an object
    console.log(logEntries);
} 

function subtract() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} - ${enteredNumber}`//using ${} .toString is implicit
    currentResult -= enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: "SUBTRACT",
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    }
    //logEntries.push(enteredNumber);//store values in an array
    logEntries.push(logEntry);//store object in an array
    console.log(logEntries);
}

function multiply() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} * ${enteredNumber}`//using ${} .toString is implicit
    currentResult *= enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: "MULTIPLY",
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    }
    //logEntries.push(enteredNumber);//store values in an array
    logEntries.push(logEntry);//store object in an array
    console.log(logEntries);
}

function divide() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    const calcDescription = `${currentResult} / ${enteredNumber}`//using ${} .toString is implicit
    currentResult /= enteredNumber;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
    const logEntry = {
        operation: "DIVIDE",
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    }
    //logEntries.push(enteredNumber);//store values in an array
    logEntries.push(logEntry);//store object in an array
    console.log(logEntries);
}

addBtn.addEventListener("click", add); //no(), just keep in mind there is this function for now!
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


//let calcDescription = `(${defaultResult} + 10)`




