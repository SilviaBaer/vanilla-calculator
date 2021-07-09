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




//var= data container where the value can change
//const = data container where the value must not change

//Global Scope = can use Globally and Locally 
//Local Scope = can use Locally only. The only way to export it is to return it


/* CORE DATA TYPES

- numbers 1 23 
- strings "", '', ``,
- booleans if ...
- objects {} -> grouped/related data, organize data, key value pair
- Arrays [] -> list data, mix of data types possible
*/

/* SPECIAL VALUES

- undefined: default value of uninitialized vars -> data type
let userName;  
console.log(userName) -> undefined

let userName = "Max";  
console.log(userName) -> "Max"

- null: never assumed by default, used to reset or clear a value -> data type
let userName = null;  
console.log(userName) -> null //resetted!!

- NaN: not a number!! -> not a type, it is a type number and therefore can be used in calcs
3 * "hello" -> NaN 

typeof (checks type of data)//array is just a special type of object
*/