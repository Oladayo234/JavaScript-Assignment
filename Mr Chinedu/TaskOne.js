//odd -2
//even +1
let input = [3,4,5,6,7];
console.log(addAndSubtract(input));
function  addAndSubtract(input){
        for (let count = 0; count < input.length; count++){
            if(count % 2 != 0){        
                input[count] = input[count] + 1;
            }
            else      
                input[count] = input[count] - 2;
        }
    return input;
    }
