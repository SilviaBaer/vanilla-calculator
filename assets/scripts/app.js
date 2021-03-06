const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInput() {
    return parseInt(usrInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
  }

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if (//all conditions need to be true in order to proceed
        calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ||
        !enteredNumber //enteredNumber !== 0
    ) {
        return;
    }
    
 /*    if (//if only ONE of the following is true than the rest is true
        calculationType === "ADD" ||
        calculationType === "SUBTRACT" ||
        calculationType === "MULTIPLY" ||
        calculationType === "DIVIDE" 
    ) { */
    const initialResult = currentResult;
    let mathOperator
    if (calculationType === "ADD") {
        currentResult += enteredNumber; 
        mathOperator = "+"; 
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber; 
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber; 
        mathOperator = "*";
    } else {
        currentResult /= enteredNumber; 
        mathOperator = "/";
    } 

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult("ADD")
} 

function subtract() {
    calculateResult("SUBTRACT")
}

function multiply() {
    calculateResult("MULTIPLY")
}

function divide() {
    calculateResult("DIVIDE")
}

addBtn.addEventListener("click", add); //no(), just keep in mind there is this function for now!
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


//let calcDescription = `(${defaultResult} + 10)`




