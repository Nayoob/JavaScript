// =======================
// JavaScript Functions
// =======================

// =======================
// 1. Function Declaration
// =======================

/* A function declaration is the most basic way to create a function. 
   It starts with the 'function' keyword, followed by the function name,
   the parameters inside parentheses, and the function body inside curly braces. */

// Example: Simple function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Calling the function
  greet("Khayal"); // Output: Hello, Khayal!
  
  // =======================
  // 2. Function Expression
  // =======================
  
  /* A function expression is created when a function is assigned to a variable. 
     It can be anonymous (without a name) or named. */
  
  // Example: Function expression
  const add = function(a, b) {
    return a + b;
  };
  
  // Calling the function expression
  console.log(add(5, 3)); // Output: 8
  /* what is the technical difference between function declaration and fucntion expression 
  we can actually call the fucntion fucntion whcih is not even declared but we cant do that to the 
  fucntion expression will throuh and error if we have used fuction expression to write a fucntion 
  we cant actually call it before declaring but we can do that to fucntion declarartion  */
  // =======================
  // 3. Arrow Functions
  // =======================
  
  /* Arrow functions are a more concise way to write functions. They use '=>'. 
     They don't have their own 'this' context, making them ideal for certain use cases. */
  
  // Example: Arrow function
  const multiply = (x, y) => x * y;
  
  // Calling the arrow function
  console.log(multiply(4, 5)); // Output: 20
  
  // =======================
  // 4. Function Parameters & Arguments
  // =======================
  
  /* Functions can accept parameters (placeholders for values) and arguments (actual values passed when calling the function). */
  
  // Example: Function with multiple parameters
  function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4)); // Output: 7
  
  /* JavaScript allows **default parameters** in case an argument is missing. 
     The default value is used if the argument is undefined. */
  
  // Example: Function with a default parameter
  function greetUser(name = "Guest") {
    console.log("Welcome, " + name);
  }
  
  greetUser();           // Output: Welcome, Guest
  greetUser("John");     // Output: Welcome, John


  function checkValue(value = 10) {
    console.log(value);
  }
  
  checkValue();        // Output: 10  (because no argument is passed)
  checkValue(undefined); // Output: 10  (because 'undefined' is treated as missing argument)
  checkValue(null);     // Output: null (since 'null' is not considered undefined, the default is not used)
  checkValue(0);        // Output: 0    (0 is a valid number, so default is not used)
  checkValue("");       // Output: ""   (empty string is a valid argument, default is not used)
  
  // =======================
  // 5. Return Statement
  // =======================
  
  /* The 'return' statement is used to return a value from a function. 
     Without a return, the function returns undefined by default. */
  
  // Example: Function with return
  function square(number) {
    return number * number;
  }
  
  console.log(square(6)); // Output: 36
  
  // =======================
  // 6. Anonymous Functions
  // =======================
  
  /* Anonymous functions do not have a name and are often used as arguments to other functions. */
  
  // Example: Anonymous function as a parameter (callback)
  setTimeout(function() {
    console.log("This is an anonymous function!");
  }, 1000);
  