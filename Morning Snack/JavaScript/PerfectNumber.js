const input = require('prompt-sync')();
let userInput = input('Enter number: ');

let sum = 0;
let count;


    for(count = 1; count <= userInput/2; count++){
            if(userInput % count === 0)
                    sum= sum + count;
    }
                console.log(sum)
          if(sum == userInput)
             console.log(userInput + " is a perfect number");s
        else
            console.log(userInput + " is not a perfect number");    

