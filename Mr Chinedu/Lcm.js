// find the least common multiple of a set of numbers
let input = [4, 6, 8];
let input2 =[18,12,6];


function smallest(input2){
    let smallest = input2[0];
    for(let count = 1; count < input2.length; count++){
        if(input2[count] < smallest){
            smallest = input2[count];
        }
    }
    return smallest;
}



function Lcm(input2){
    let smallestValue = smallest(input2);
    let output = []
    for(let count = 2; count < smallestValue; count++){
        let isLcm = true;
        for(let index = 0; index < input2.length; index++){
            if(input2[index] % count !== 0){
                isLcm = false;
                break;
            }
        }
        if(isLcm){
            output.push(count);
        }
    }
    return output;
}

Lcm = Lcm(input2);
console.log(Lcm);

