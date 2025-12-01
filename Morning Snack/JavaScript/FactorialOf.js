const input = require('prompt-sync')();
let userInput = input('Enter number: ');

let result;
let factorial = 1;
let number;

    for(number = 1; number <= userInput; number++){
        result = number;
        factorial *= result;        
    }

    console.log(factorial);  

