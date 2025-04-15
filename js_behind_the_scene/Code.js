
/* When JavaScript starts running, it first enters the compilation phase, 
where the code is parsed and turned into an Abstract Syntax Tree (AST). 
During this phase, memory is allocated: variables declared with var are hoisted as undefined, 
and functions are fully hoisted, while let and const go into a Temporal Dead Zone (TDZ). 
After this setup, the Global Execution Context (GEC) is created and pushed onto the Call Stack,
which is responsible for handling all top-level code (code outside any function).
Once the execution phase begins, the interpreter starts reading and executing code line-by-line, 
converting it into bytecode on the fly. 
As the code runs, the JIT (Just-In-Time) compiler watches for frequently executed ("hot")
code and compiles it into highly optimized machine code for better performance. All top-level
code runs inside the GEC, and when a function is called, a new execution context is created 
and managed within the Call Stack. This whole process allows JavaScript to be fast, efficient, 
and responsive while running in modern engines like Chrome’s V8. */



 /*  🧠 Hoisting & TDZ (With Functions) — Easy Revision
In JavaScript, hoisting means that all variable and function declarations are moved 
to the top of their scope during the compilation phase, even before the code is executed.
 var variables are hoisted and initialized with undefined, so you can access them early 
 (but they'll be undefined). let and const are hoisted too, but not initialized, so trying
  to access them before the declaration line throws a ReferenceError — 
this phase is called the Temporal Dead Zone (TDZ). Function declarations are
fully hoisted — you can call them even before they appear in the code. But function
expressions and arrow functions (if stored in var, let, or const) behave like variables
 — they’re hoisted but not initialized, so calling them early causes errors. */




 // ✅ var is hoisted (undefined)
console.log(a); // undefined
var a = 10;

// ❌ let is hoisted but not initialized (TDZ)
console.log(b); // ReferenceError
let b = 20;

// ✅ Function declaration is hoisted completely
greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}

// ❌ Function expression with var (hoisted as undefined)
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};

// ❌ Arrow function with const (in TDZ)
arrow(); // ReferenceError
const arrow = () => {
  console.log("Arrow!");
};


if(items !== undefined) {
    addItem();
}
else{
    console.log('cant add more product ');
}
var items = 8 ;
function addItem(){
    console.log("product is added to the cart ");
    
}
