const input = require('prompt-sync')();
let userInputOne = input('Enter number: ');
let userInputTwo = input('Enter number: ');
let lowestcommon;
let count;

for(count = 1; count <= userInputOne && count <= userInputTwo; count++){
    if(userInputOne % count === 0 && userInputTwo % count === 0){
        
                highestcommon = count;

        }
      } 

    lowestCommon = Math.floor((userInputOne * userInputTwo)/highestcommon);
        console.log(lowestCommon);
   


