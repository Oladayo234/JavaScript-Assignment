const {getEvenNumbers,getOddNumbers}  = require("./learning_Testing");

// test("addition of two numbers", () => {
//   expect(2 + 3).toBe(5);
// });

// test("multiplication of two numbers", () => {
//   expect(4 * 5).toBe(20);
// });

// test("division of two numbers", () => {
//   expect(10 / 2).toBe(5);
// });

// test("subtraction of two numbers", () => {
//   expect(7 - 3).toBe(4);
// }); 

test("for even numbers", () => {
  let numbers = [1,2,3,4,5,6,8,10]; // Arrange
  let evenNumbers = getEvenNumbers(numbers); // Act
  expect(evenNumbers).toEqual([2,4,6,8,10]); // Assert
})



test("for odd numbers", () => {
  let numbers = [9,4,6,3,7,7]; // Arrange
  let oddNumbers = getOddNumbers(numbers); // Act
  expect(oddNumbers).toEqual([9,3,7,7]); // Assert
})
