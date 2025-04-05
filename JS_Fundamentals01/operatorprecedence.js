

// have you ever heared about the precedence of operator in javascript no its ok i had too 
// but here we will learn this today 

// Example 1: Arithmetic Operators with Precedence and Associativity
let result = 10 + 2 * 5 - 3;
console.log(result); // 17

let resultWithParentheses = (10 + 2) * (5 - 3);
console.log(resultWithParentheses); // 24

// Example 2: Assignment Operators (Right-Associative)
let a = b = 5 + 3;
console.log(a); // 8
console.log(b); // 8

// Example 3: Comparison and Logical Operators
let x = 5, y = 10, z = 15;
let resultLogical = x < y && y < z || z > x;
console.log(resultLogical); // true

let clearerResult = (x < y && y < z) || (z > x);
console.log(clearerResult); // true

// Example 4: Increment and Decrement (Prefix vs Postfix)
let num = 5;
console.log(num++); // 5
console.log(num);   // 6
console.log(++num); // 7

// Example 5: Ternary Operator with Nested Conditions
let age = 20;
let message = age >= 18 ? (age > 21 ? "Adult" : "Young Adult") : "Minor";
console.log(message); // "Young Adult"

// Example 6: Logical NOT and Comparison
let isOpen = false;
let canEnter = !isOpen || age >= 18;
console.log(canEnter); // true

// Example 7: Complex Expression with Mixed Operators
a = 2, b = 3, c = 4;
let complexResult = a + b * c > 10 && b - c < 2 || c == a + 2;
console.log(complexResult); // true
