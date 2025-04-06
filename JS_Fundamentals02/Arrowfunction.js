// Arrow Functions in JavaScript

// 1. Basic Arrow Function with Return:

// Traditional Function Expression
const add = function(a, b) {
    return a + b;
  };
  
  // Arrow Function
  const addArrow = (a, b) => {
    return a + b;
  };
  
  // Calling both functions
  console.log(add(3, 5));        // Output: 8
  console.log(addArrow(3, 5));   // Output: 8
  
  
  // 2. Concise Syntax (Implicit Return):
  const multiply = (x, y) => x * y;
  
  console.log(multiply(4, 5));   // Output: 20
  
  
  // 3. No Parameters:
  const greet = () => console.log("Hello, World!");
  
  greet();   // Output: Hello, World!
  
  
  // 4. Single Parameter:
  const square = num => num * num;
  
  console.log(square(6));   // Output: 36
