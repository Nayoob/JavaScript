

/* lets discuss about the this keyword properly  
this keyword behave very differently in JavaScript than in java in java the context of this keyword
is pretty clear that is refereing the current object or instance of a class but the this
keyword in js is very dynamic depending on where it is declared if its is declared inside of the function ]
it will point to undefined if declared inside of the object fucntion it will refrece the object 
if this keyword is declared in the global scope in floppy mode it will polint to the globla window object 
if declaration is in strick mode and this keyword is declaration  is in global scope then it will be
assigned undefined */

"use strict";

// 1️⃣ GLOBAL CONTEXT (non-method call)
console.log(this); 
// ✅ In browser, this refers to the window object (global object).
// ❌ In strict mode, it refers to `undefined`.

// 2️⃣ FUNCTION DECLARATION
function normalFunc() {
  console.log("Normal Function:", this);
}
normalFunc(); 
// ✅ In non-strict mode → `this` = window
// ❌ In strict mode → `this` = undefined

// 3️⃣ ARROW FUNCTION in global scope
const arrowFunc = () => {
  console.log("Arrow Function:", this);
};
arrowFunc(); 
// ✅ Arrow functions do NOT have their own `this`
// So it inherits from the enclosing context (here, global)

// 4️⃣ OBJECT METHOD using regular function
const obj1 = {
  name: "Sufyan",
  greet: function () {
    console.log("obj1.greet:", this.name); // ✅ this = obj1
  }
};
obj1.greet();

// 5️⃣ OBJECT METHOD using arrow function
const obj2 = {
  name: "Khayal",
  greet: () => {
    console.log("obj2.greet:", this.name);
  }
};
obj2.greet(); 
// ❌ Arrow functions don’t bind `this` → inherits from global scope
// `this.name` is `undefined`

// 6️⃣ NESTED FUNCTION inside a method
const obj3 = {
  name: "Ali",
  greet: function () {
    console.log("Outer function:", this.name); // ✅ this = obj3

    function inner() {
      console.log("Inner function:", this.name);
    }

    inner(); 
    // ❌ Regular nested function → `this` = undefined in strict mode
  }
};
obj3.greet();

// 7️⃣ NESTED ARROW FUNCTION inside a method
const obj4 = {
  name: "Hina",
  greet: function () {
    const inner = () => {
      console.log("Arrow inner function:", this.name);
    };
    inner(); // ✅ this = obj4, because arrow inherits from outer function
  }
};
obj4.greet();
// 8️⃣ EVENT HANDLER with regular function (in browser)
document.body.addEventListener("click", function () {
  console.log("Clicked (regular function):", this); 
  // ✅ `this` refers to the element that received the event
});

// 9️⃣ EVENT HANDLER with arrow function
document.body.addEventListener("click", () => {
  console.log("Clicked (arrow function):", this);
  // ❌ `this` inherits from the enclosing scope (likely window or undefined)
});

// 🔟 CONSTRUCTOR FUNCTION
function Person(name) {
  this.name = name;
  console.log("Constructor:", this.name);
}
const person1 = new Person("Sufyan");
// ✅ `this` = new object created by `new`

