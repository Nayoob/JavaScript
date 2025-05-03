// ===============================================
// ✅ IIFE (Immediately Invoked Function Expression)
// ===============================================

// 🔹 WHAT IS IIFE?
// A function that runs immediately after it's defined.
// Syntax:
// (function(){ /* code */ })();
// (() => { /* code */ })();  // arrow version

// ----------------------------
// ✅ EXAMPLE 1: Basic IIFE
// ----------------------------
(function () {
    console.log("Hello from IIFE!");
  })();
  
  // ----------------------------
  // ✅ EXAMPLE 2: IIFE with Parameters
  // ----------------------------
  (function (name) {
    console.log("Hello, " + name + "!");
  })("Khayal");
  
  // ----------------------------
  // ✅ EXAMPLE 3: Variable Scoping
  // ----------------------------
  var count = 10;
  
  (function () {
    var count = 5;
    console.log("Inside IIFE:", count);
  })();
  
  console.log("Outside IIFE:", count);
  
  // ----------------------------
  // ✅ EXAMPLE 4: Private Counter using IIFE
  // ----------------------------
  const counter = (function () {
    let count = 0;
  
    return {
      increment: function () {
        count++;
        console.log("Count:", count);
      },
      decrement: function () {
        count--;
        console.log("Count:", count);
      }
    };
  })();
  
  counter.increment(); // 1
  counter.increment(); // 2
  counter.decrement(); // 1
  
  // ----------------------------
  // ✅ EXAMPLE 5: Arrow Function IIFE
  // ----------------------------
  (() => {
    const msg = "This is an arrow IIFE";
    console.log(msg);
  })();
  
  // ----------------------------
  // ✅ EXAMPLE 6: Module Pattern with IIFE
  // ----------------------------
  const MathModule = (function () {
    function add(a, b) {
      return a + b;
    }
    function subtract(a, b) {
      return a - b;
    }
    function multiply(a, b) {
      return a * b;
    }
    function divide(a, b) {
      return b !== 0 ? a / b : "Cannot divide by 0";
    }
  
    return {
      add,
      subtract,
      multiply,
      divide
    };
  })();
  
  console.log("Add:", MathModule.add(5, 3));
  console.log("Subtract:", MathModule.subtract(5, 3));
  console.log("Multiply:", MathModule.multiply(5, 3));
  console.log("Divide:", MathModule.divide(5, 0));
  
  // ----------------------------
  // ✅ EXAMPLE 7: IIFE in Loop to Fix Closure
  // ----------------------------
  for (var i = 0; i < 3; i++) {
    (function (index) {
      setTimeout(() => {
        console.log("Delayed Index:", index);
      }, 1000);
    })(i);
  }
  
  // ----------------------------
  // ✅ TASKS FOR YOU 🔥
  // ----------------------------
  
  // 🧪 1. Write an IIFE that logs your full name and country
  
  (function () {
    const fullName = "Khayal Naseeb";
    const country = "Pakistan";
    console.log("Name:", fullName, "| Country:", country);
  })();
  
  // 🧪 2. Make your own mini counter with reset() option
  
  const myCounter = (function () {
    let val = 0;
    return {
      inc: () => console.log(++val),
      dec: () => console.log(--val),
      reset: () => {
        val = 0;
        console.log("Reset to:", val);
      }
    };
  })();
  
  myCounter.inc();   // 1
  myCounter.inc();   // 2
  myCounter.reset(); // 0
  
  // 🧪 3. Create a math module with square() and cube()
  
  const AdvancedMath = (function () {
    function square(n) {
      return n * n;
    }
    function cube(n) {
      return n * n * n;
    }
    return {
      square,
      cube
    };
  })();
  
  console.log("Square of 4:", AdvancedMath.square(4));
  console.log("Cube of 2:", AdvancedMath.cube(2));
  
  // 🧪 4. Rewrite a normal function into an IIFE
  
  // Normal:
  function greet() {
    console.log("Normal Greet");
  }
  greet();
  
  // IIFE:
  (function () {
    console.log("IIFE Greet");
  })();
  
  // ===============================
  // 🧠 WHY USE IIFE?
  // ===============================
  // ✔ Immediately executes code
  // ✔ Avoids polluting global scope
  // ✔ Creates private variables (encapsulation)
  // ✔ Fixes closure issues in loops
  // ✔ Old-school modular design
  
  // ===============================
  // Done! You're now an IIFE Ninja 🥷
  // ===============================
  
  