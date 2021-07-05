const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2; 
    return result
} 

currentResult = add(1, 2); 

let calcDescription = `(${defaultResult} + 10)`

outputResult(currentResult, calcDescription);



//var= data container where the value can change
//const = data container where the value must not change

//Global Scope = can use Globally and Locally 
//Local Scope = can use Locally only. The only way to export it is to return it
