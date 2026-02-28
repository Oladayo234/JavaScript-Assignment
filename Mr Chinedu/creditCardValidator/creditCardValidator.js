
const input = require('prompt-sync')();

    function convertToArray(userInput) {
        if( userInput.trim().length === 0 || userInput.trim() === null) {
            return "Invalid Card";
        }

        if (userInput.length <= 11 || userInput.length >= 20) {
            return "Invalid Card";
        }
        
        let creditCardArray = [];
        for (let index = 0; index < userInput.length; index++) {
            creditCardArray.push(parseInt(userInput.charAt(index)));
        }
        return creditCardArray;
    }

    function typeOfCard(userInput) {
        if (userInput.length <= 11 || userInput.length >= 20) {
            return "Invalid Card";
        }

        let cardType = "Invalid Card";
        
        if (userInput[0] === 4) {
            cardType = "Visa Card";
        } else if (userInput[0] === 5) {
            cardType = "MasterCard";
        } else if (userInput[0] === 3 && userInput[1] === 7) {
            cardType = "American Express Cards";
        } else if (userInput[0] === 6) {
            cardType = "Discover Cards";
        }
        
        return cardType;
    }

    function sumOfEvenPosition(userInput) {
        let sumOfMultiplyDigit = 0;
        for (let count = userInput.length - 2; count >= 0; count -= 2) {
            let newNumber = userInput[count] * 2;
            sumOfMultiplyDigit += singleDigit(newNumber);
        }
        return sumOfMultiplyDigit;
    }

    function singleDigit(userInput) {
        let digit = 0;
        if (userInput < 10) {
            digit = userInput;
        } else {
            digit = Math.floor(userInput / 10) + (userInput % 10);
        }
        return digit;
    }

    function sumOfOddPosition(userInput) {
        let sum = 0;
        for (let count = userInput.length - 1; count >= 0; count -= 2) {
            sum += userInput[count];
        }
        return sum;
    }

    function sumOfOddandEvenPosition(userInput) {
        let oddNumber = sumOfOddPosition(userInput);
        let  evenNumber = sumOfEvenPosition(userInput);
        return oddNumber + evenNumber;
    }

    function checkValidity(userInput) {
        if (userInput.length < 13 || userInput.length > 19) {
            return "Invalid Card! Invalid length";
        }
        
        if (sumOfOddandEvenPosition(userInput) % 10 === 0) {
            return "Valid";
        } else {
            return "Invalid";
        }
    }

    let creditCard = input("Hello, kindly enter card details to verify: ").replace(/\s+/g, '');

    let arrayList = convertToArray(creditCard);
    let cardBrand = typeOfCard(arrayList);
    let validity = checkValidity(arrayList);
    
    console.log(`***Credit Card Type: ${cardBrand}`);
    console.log(`***Credit Card Number: ${creditCard}`);
    console.log(`***Credit Card Digit Length: ${creditCard.length}`);
    console.log(`***Credit Card Validity Status: ${validity}`);


module.exports = {convertToArray, typeOfCard, sumOfEvenPosition, sumOfOddPosition, sumOfOddandEvenPosition, checkValidity};