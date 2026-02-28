const {convertToArray, typeOfCard, sumOfEvenPosition, sumOfOddPosition, sumOfOddandEvenPosition, checkValidity}  = require("./creditCardValidator");

test("convert to array", () => {
  let numbers = "4388576018402626"; // Arrange
  let myArray = convertToArray(numbers); // Act
  expect(myArray).toEqual([4,3,8,8,5,7,6,0,1,8,4,0,2,6,2,6]); // Assert
})

test("convert to array for empty input", () => {
  let numbers = ""; // Arrange
  let myArray = convertToArray(numbers); // Act
  expect(myArray).toEqual("Invalid Card"); // Assert
})

test("card type is valid", () => {
  let numbers = "4388576018402626"; // Arrange
  let  cardType = typeOfCard(convertToArray(numbers)); // Act
  expect(cardType).toBe("Visa Card"); // Assert
})

test("invalid card length", () => {
  let numbers = "43"; // Arrange
  let  cardType = typeOfCard(convertToArray(numbers)); // Act
  expect(cardType).toBe("Invalid Card"); // Assert
})

test("invalid card length less than 11", () => {
  let numbers = "43908756436"; // Arrange
  let  cardType = typeOfCard(convertToArray(numbers)); // Act
  expect(cardType).toBe("Invalid Card"); // Assert
})

test("sum of odd and even position", () => {
  let numbers = "4388576018402626"; // Arrange
  let  sumOfPositions = sumOfOddandEvenPosition(convertToArray(numbers)); // Act
  expect(sumOfPositions).toBe(75); // Assert
})

test("sum of even position", () => {
  let numbers = "4388576018402626"; // Arrange
  let  sumOfPositions = sumOfEvenPosition(convertToArray(numbers)); // Act
  expect(sumOfPositions).toBe(37); // Assert
})

test("sum of odd position", () => {
  let numbers = "4388576018402626"; // Arrange
  let  sumOfPositions = sumOfOddPosition(convertToArray(numbers)); // Act
  expect(sumOfPositions).toBe(38); // Assert
})

test("check validity of card", () => {
  let numbers = "4388576018410707"; // Arrange
  let  validity = checkValidity(convertToArray(numbers)); // Act
  expect(validity).toBe("Valid"); // Assert
})

test("check invalidity of card", () => {
  let numbers = "4388576018402626";         // Arrange
  let  validity = checkValidity(convertToArray(numbers)); // Act
  expect(validity).toBe("Invalid"); // Assert
})

test("check invalidity of card with incorrect length", () => {
  let numbers = "438857601840";         // Arrange
  let  validity = checkValidity(convertToArray(numbers)); // Act
  expect(validity).toBe("Invalid Card! Invalid length"); // Assert
})      