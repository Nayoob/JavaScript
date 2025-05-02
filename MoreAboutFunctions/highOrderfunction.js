// First-Class Functions in JavaScript

// JavaScript treats functions as first-class citizens, meaning:
    // - Functions can be assigned to variables
    // - Functions can be passed as arguments to other functions
    // - Functions can be returned from other functions
    // can be stored in array 
    // can be part of object tooo 

// Example: Functions as variables
const greet = function(name) {
    return "Hello, " + name;
};
console.log(greet("Alice")); // Output: "Hello, Alice"

// Functions as arguments
function processUser(name, callback) {
    const message = callback(name);  // Passing function as argument
    console.log(message);
}
processUser("Bob", greet);  // Output: "Hello, Bob"

// Functions as return values
function multiplier(factor) {
    return function(number) {
        return number * factor;  // Inner function uses variable from outer scope (closure)
    };
}

const doublee = multiplier(2);  // Returns a new function that multiplies by 2
console.log(doublee(5));  // Output: 10

// ---------------------------------------------

// Higher-Order Functions

// A higher-order function is a function that either:
    // - Takes one or more functions as arguments, or
    // - Returns a function as a result

// Example 1: `map()` method as a higher-order function
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {
    return num * 2;  // Inner function uses `num` from the outer array
});
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// Example 2: Custom higher-order function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;  // Closure remembers the `factor`
    };
}

const triple = createMultiplier(3);  // Returns a function that multiplies by 3
console.log(triple(4));  // Output: 12

// ---------------------------------------------

// Closures: The Magic Behind Higher-Order Functions

// A closure is a function that "remembers" its lexical scope, even after the outer function has finished executing.

// In the examples above:
    // - When `multiplier(2)` is called, it returns an inner function.
    // - This inner function "closes over" the `factor` variable, so it keeps a reference to it.
    // - Even when the `multiplier` function has finished execution and is no longer on the stack, the inner function still has access to `factor`.

function multiplier(factor) {
    return function(number) {
        return number * factor;  // Accesses `factor` from outer scope (closure)
    };
}

const double = multiplier(2);  // Returns a function
console.log(double(5));  // Output: 10 (remembers `factor` is 2)


// Example of Closure in Action with Higher-Order Functions:
const createGreeter = function(greeting) {
    return function(name) {
        return greeting + ", " + name;
    };
};

const greetMorning = createGreeter("Good Morning");
console.log(greetMorning("Alice"));  // Output: "Good Morning, Alice"

// Even though `createGreeter` is no longer on the stack, `greetMorning` still remembers the `greeting` ("Good Morning").
// This is closure in action.

// ---------------------------------------------

// Key Takeaways:
    // - First-class functions allow functions to be assigned to variables, passed around, and returned from other functions.
    // - Higher-order functions are functions that either accept or return other functions. This is possible due to closures.
    // - Closures "remember" variables from their outer function's scope, even after the outer function finishes execution, making them crucial in JavaScript's functional programming capabilities.

