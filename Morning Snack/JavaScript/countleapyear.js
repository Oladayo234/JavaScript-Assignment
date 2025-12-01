let divisorOne = 4;
let divisorTwo = 100;
let divisorThree = 400;
let year;
let count = 0;
for (year = 1900; year <= 2025; year++){
    if(year % divisorOne === 0 && year % divisorTwo != 0 || year % divisorThree === 0){
            count +=1
                 console.log(count);
        }
    }
