for(count=1; count <= 1000; count++){
let newNumber = count
let lengthOfNumber = newNumber.toString().length;
let exponential;
let sum = 0;
let digit ;
    while(newNumber != 0){
           digit = newNumber % 10;
           exponential = Math.pow(digit, lengthOfNumber);
           sum += exponential;
           newNumber = Math.floor(newNumber/10);  
    }
    if(sum == count){
             console.log(count + " is an armstrong number");
    }
    }
      
