// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The integer 10
// b) Verify and explain: answer correct. `.length` counts all characters and spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: the string 'o'
// b) Verify and explain: answer correct. Indexing of strings starts at 0, so index 4 would be the 5th character in the string, which inthis case is 'o'.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: the string "Ruby"
// b) Verify and explain: answer correct. Indexing of arrays starts at 0, so index 1 would be the string "Ruby" as it's the second element of the array. the variable `index` was assigned the value of `1`, which is why `languages[index]` is the same as writing `languages[1]`.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: An error, because you can't uppercase an array and we're not iterating through the array to access each element.
// b) Verify and explain: answer correct. "TypeError: weekendDays.toUpperCase is not a function" means that the toUpperCase method is not available to arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: An error, likely saying `typeof` isn't a function/method or that it needs an argument.
// b) Verify and explain: returns 'number'. It seems `typof` is an operand, and not a method, so it does not need parenthesis to hold an argument. The return is `number` because calling `.length` on `dataTypes` returns a number (4), which is what `typeof` is evaluating.
