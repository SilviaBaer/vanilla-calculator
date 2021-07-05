const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const calcDescription = `${currentResult} + ${userInput.value}`//using ${} .toString is implicit
    currentResult = currentResult + +userInput.value;//or parseInt(userInput.value) for interger or parseFloat(userInput.value) for decimals too
    outputResult(currentResult, calcDescription);
} 

addBtn.addEventListener("click", add); //no(), just keep in mind there is this function for now!



//let calcDescription = `(${defaultResult} + 10)`




//var= data container where the value can change
//const = data container where the value must not change

//Global Scope = can use Globally and Locally 
//Local Scope = can use Locally only. The only way to export it is to return it
