



const userProfile = {
    firstName: "Chinedu",
    lastName: "Okafor",
    gender: "Male",
    age: 30,
    hobbies: ["Coding", "Traveling", "Cooking", {}],
    occupation: "Software Developer",
    location: "Lagos, Nigeria"
};




// destructuring
const { firstName, lastName, age, hobbies } = userProfile;
// console.log(`My name is ${firstName} ${lastName}, I am ${age} years old and my hobbies include ${hobbies.join(", ")}.`);




// spread operator
const updatedProfile = {
    ...userProfile.hobbies,
    occupation: "Senior Software Developer",
    location: "Abuja, Nigeria",
    hobby: [...userProfile.hobbies, "Gaming"]
};

// console.log(updatedProfile);


// const ["reading", "dancing", "swimming"] = userProfile.hobbies;
// console.log(reading)


// const arr = new Array(2)
// arr[0] = "Hello";
// arr[5] = "World";

const arr = [false, "Hello", 42, null, undefined]

// console.log(arr); // Output: [ 'Hello', <4 empty items>, 'World' ]
// console.log(arr.length); // Output: 6


// push and pop method
// arr.push(2)
// arr.push("two")
// console.log(arr);

// let poppedValue = arr.pop()
// console.log(poppedValue);
// console.log(arr);

// shift and unshift method
// arr.unshift(7)
// arr.unshift(9)
// console.log(arr);

// let unshiftedValue = arr.unshift(10)
// console.log(unshiftedValue);
// console.log(arr);

// let shiftedValue = arr.shift()
// console.log(shiftedValue);
// console.log(arr);


// slice and splice method
// let newArr =arr.slice(3)
// console.log(newArr);

// let splicedValue = arr.splice(2)
// console.log(splicedValue);
// console.log(arr);

// let splicedValue2 = arr.splice(2, 1)
// console.log(splicedValue2);
// console.log(arr);

// let splicedValue3 = arr.splice(1, 2, 6)
// console.log(splicedValue3);
// console.log(arr);


// Function in javaScript
// 1. function declaration
// 2. function expression
// 3. arrow function


// in javascript functions can stand alone but the keywords are function
// when you create a function and you call it to manipulate fields then it becomes a method.
// A function in another function is called a callback function.
// A function behaving like an object is called a first class function.

// console.log(add(5, 3));
// function add(a, b) {
//     return a + b;
// }


// const subtract = function (a, b) {
//     return a - b;
// }

// console.log(subtract(5, 3));
// console.log(subtract)

// arrow function
// nested function
// function as an argument also called callback function
// function as a return object
// 


// function expression with arrow function
// const subtract = (a, b) => {
//     return a - b;
// }

// console.log(subtract(5, 3))

// nested function
// having a function inside another function is called a nested function. 
// The inner function can access the variables of the outer function, 
// but the outer function cannot access the variables of the inner function.

// function nestFunctions(input){
//     let number = 10;

    // function addition(numberOne){
    //     let sum = number + numberOne;
    //     return sum;
    // }

    // function subtraction(numberTwo){
    //     let difference = number - numberTwo;
    //     return difference;
    // }

    // function multiplication(numberThree){
    //     let product = number * numberThree;
    //     return product;
    // }

    // function division(numberFour){
    //     let quotient = number / numberFour;
    //     return quotient;
    // }

    // return{
    //     sum: addition(input),
    //     difference: subtraction(input),
    //     product: multiplication(input),
    //     quotient: division(input)
    // }

    // return{
    //     sum: ()=> number + numberOne,
    //     difference: ()=> number - numberTwo,
    //     product: ()=> number * numberThree,
    //     quotient: ()=> number / numberFour
    // }
// }

// function nestFunctions(input){
//     let number = 10;
//     return{
//         sum: ()=> number + input,
//         difference: ()=> number - input,
//         product: ()=> number * input,
//         quotient: ()=> number / input
//     }
// }

// let result = nestFunctions(6);
// console.log(result);
// console.log(result.sum(6));


//     return a - b;
// }

// console.log(subtract(5, 3))


// callback function
// let numbers = [2,3,4,5,6,8,10]

// function manipulateArray(array, callbackFunction){
//     return callbackFunction(array);
//     }

// function filterEvenNumbers(numbers){
//     let evenNumbers = [];
//     for(let number of numbers){
//         if(number % 2 === 0){
//             evenNumbers.push(number);
//         }
//     }    
//     return evenNumbers;
// }

// function filterOddNumbers(numbers){
//     let oddNumbers = [];
//     for(let number of numbers){
//         if(number % 2 !== 0){
//             oddNumbers.push(number);
//         }
//     }    
//     return oddNumbers;
// }

// let evenNumbers = manipulateArray(numbers, filterEvenNumbers);
// console.log(evenNumbers);

// let oddNumbers = manipulateArray(numbers, filterOddNumbers);
// console.log(oddNumbers);


// Testing in JavaScript
// A -Arrange: set up the testing environment and prepare the necessary data.
// A - Act: execute the code or function being tested.
// A - Assert: verify that the results of the test match the expected outcomes.