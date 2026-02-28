

function getEvenNumbers(numbers) {
  let evenNumbersArray = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbersArray.push(number);
        }
    }
    return evenNumbersArray;
}

function getOddNumbers(numbers) {
  let oddNumbersArray = [];
    for (let number of numbers) {
        if (number % 2 !== 0) {
            oddNumbersArray.push(number);
        }
    }
    return oddNumbersArray;
}   

module.exports = { getEvenNumbers, getOddNumbers };