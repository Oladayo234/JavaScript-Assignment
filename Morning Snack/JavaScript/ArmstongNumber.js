const input = require('prompt-sync')();
let userInput = input('Enter number: ');

let sum = 0;
let newUserInput = userInput;
let lengthOfNumber = newUserInput.length;
let exponential = 1;
let count;
let digit = 1

    while(newUserInput != 0){
           digit = newUserInput % 10;
           exponential = Math.pow(digit, lengthOfNumber);
           sum += exponential;
           newUserInput = Math.floor(newUserInput/10);
            console.log(newUserInput)
    }

        if(sum == userInput)
             console.log(userInput + " is an armstrong number");
        else
            console.log(userInput + " is not an armstrong number");    
