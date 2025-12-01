let count;
let divisor = 1;
let number = 1;

for(number = 1; number <= 1000; number++){

    let sum = 0;

   for(divisor = 1; divisor <= number/2; divisor++){
      if(number % divisor === 0){
            sum= sum + divisor;

    }
    }   
          if(sum == number && number !== 0){
             console.log(number + " is a perfect number");
    }
    }
