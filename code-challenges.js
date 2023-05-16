// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// write arrow function that takes 2 arguments
// create if-statement and compare the lengths of both of the strings
// if 1 > 2 return 1
// if 2 > 1 return 2
// if 1 === 2 return 'tie'

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
const fruitSize = (fruitA, fruitB) => {
  if(fruitA.length > fruitB.length) {
    return fruitA;
  } else if(fruitB.length > fruitA.length) {
    return fruitB;
  } else {
    return "They are the same size"
  }
}
console.log(fruitSize(fruit1, fruit2)); // banana
console.log(fruitSize(fruit3, fruit4)); // cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// set variable to boiling point
// define arrow function that takes 1 number argument
// ternary operator for higher or lower
// write if condition for equal numbers (do this before ternary)

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
let boiling = 212
const boilingPoint = (temp) => {
  if(temp === boiling) {
    return `${temp} is at boiling point`;
  }
  return (temp > boiling ? `${temp} is above boiling point` : `${temp} is below boiling point`);
}
console.log(boilingPoint(temperature1)); // 42 is below boiling point
console.log(boilingPoint(temperature2)); // 350 is above boiling point
console.log(boilingPoint(temperature3)); // 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// combine the arrays with concat
// use .length to get the answer

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const runs = (arr1, arr2) => {
  return (arr1.concat(arr2)).length;
}
console.log(runs(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)); // 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// create arrow function that takes 1 argument
// split the string into an array
// use reverse command on array 
// join the reversed array

const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"
const reverseMe = (arg) => {
  return arg.split('').reverse().join('');
}
console.log(reverseMe(currentCohort)); // 3202 atleD

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// create arrow function with 1 parameter
// use lastIndexOf to find the last index of the given argument and return that value

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8
const lastNumIndex = (num) => {
  return numberOfConnections.lastIndexOf(num);
}
console.log(lastNumIndex(givenValue1)); // 7
console.log(lastNumIndex(givenValue2)); // 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// create arrow function that takes an array argument
// call sort on the array and then reverse
// return that output

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
const sortedTemps = (arr) => {
  return arr.sort().reverse();
}
console.log(sortedTemps(sanDiegoSummerTemperatures)); // [82, 80, 79, 77, 76, 73, 72]
console.log(sortedTemps(sanDiegoWinterTemperatures)); // [68, 67, 66, 66, 62, 59, 59]