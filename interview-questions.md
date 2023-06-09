# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: a conditional statement takes an argument and does something based on the value or return of that argument.  Typically in the form of an `if-else` statement, though `switch` or `case` statements are also forms of conditional statements.  and `if-else` example would be:
```js
if(a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}
```
Researched answer: A ternary operator, which is a type of conditional statement, can also be chained so that depending on the condition, you can have multiple returns. This would be similar to `if..else if..else if..else`.  Not sure if this is best practice, but seems like it could be really clean if done well.

1. What is git? What is the difference between git and Github?

Your answer: git is a file versioning tool that allows us to keep track of file changes over time.  It is based in the local storage of the computer. Github is an online cloud service that tracks and stores changes made through git, so they are accessible in multiple locations, and for multiple people.

Researched answer: Git can be used peer-to-peer, and does not need to only sit on one local machine.  This can help intranet users who do not have access to the internet on their machines.

2. Which JavaScript operators will return a Boolean value?

Your answer: `>`, `>=`, `<`, `<=`, `==`, `===`, `!=`, `!==`

Researched answer: In addition to the above, the logical `AND` (`&&`), `OR` (`||`), and `NOT` (`!`) operators also return return boolean values.

3. What is the difference between an array's index and its value?

Your answer: An array's index is the numbered location of the element inside the array.  The array's value is the combination of all its elements.  Each individual element also has a value.

Researched answer: Decreasing the length of an array wil delete all the elements beyond the index number of the new length. This is a mutating action, and the new value will show only the remaining elements. Interestingly, calling `.slice()` on an array will allow you to make a quick copy of the array so you can modify it without mutating the original.  for example:
```js
let arr = ["a", 2, "x", 6]
arr.slice().reverse() //returns [ 6, 'x', 2, 'a' ]
console.log(arr) // ["a", 2, "x", 6] , and returns undefined
```
This allows us to work briefly with an array we don't want to mutate, while not having to create extra variables.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Strings are sequences of characters bound on either side by single or double quotes. They have various methods that can be called on them, like `.length`, and can also have portions of them accessed through indexing.
Arrays are an ordered list, or collection, of other elements (including other arrays!). Arrays can be composed of any number or combination of valid data types. Similarly to strings, arrays can also call the `.length` method, and be accessed through indexing.

Researched answer: While individual characters of a string can be accessed by indexing (`str = "thanks"; str[1]`), those values cannot be reassigned through indexing like can be done on arrays.  Finally, and I may be misunderstanding this, string and array index calls are actually coerced into a string, instead of an integer.  So `str[1] === str['1']`.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming sets 2 programmers to work on the same coding problem, together. Typically one programmer writes the code while the other programmer leads the direction and logic of the code. They may both work on specific syntaxes together, and also decide which approach they will use to solve the problem.

Researched answer: There are 3 variants of pair programming - 
1. novice/novice - where two programmers can pool their knowledge to solve simpler problems
2. expert/novice - where the expert provides mentorship and knowledge to help the novice learn
3. expert/expert - where both use their expertise to efficiently work through challenging coding problems

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Functions that can be passed as an argument to other functions like variables. They can also be assigned to variables as a value.

2. Jest: A javascript testing framework that helps identify errors in code. Like an advanced debugger.

3. Objects: A building block of OOP. Stores properties in the form of keyed collections that can be accessed by inherited and custom methods.

4. Method: Predefined code, simplified, that objects can call to perform actions.

5. Classes: Classes act as a 'factory' for objects. Objects are created from classes with the `new` operator. Classes impart properties on the created objects. They must be defined before they can be called.
