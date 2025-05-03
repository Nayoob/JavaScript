// =======================================================
// 🔗 SCOPE CHAIN DEEP DIVE + HOW IT WORKS WITH CLOSURES
// =======================================================

// ---------------------------------------
// 🔍 What is Scope Chain?
// ---------------------------------------
// - It's the chain of **lexical environments** JavaScript traverses to find a variable.
// - Lexical = Based on where code is physically written (not runtime).
// - If a variable is not found in the current function scope,
//   JavaScript looks in the outer scope, and then continues up the chain until global scope.

// ======================================
// 🧠 MEMORY MODEL + TERMS
// ======================================
// Execution Context = { VariableEnvironment + Scope Chain + This + Code }
// Lexical Environment = Object that maps identifiers (var names) to values
// Scope Chain = Chain of lexical environments used for variable lookup

// ⚙️ EXAMPLE 1: Simple nested scopes
function grandParent() {
    let a = "grandpa";
  
    function parent() {
      let b = "papa";
  
      function child() {
        let c = "me";
        console.log(a, b, c); // Looks up the chain: a → b → c
      }
  
      child();
    }
  
    parent();
  }
  
  grandParent();
  // Output: grandpa papa me
  
  // 💡 If child() can't find a variable, it walks UP the chain
  // child → parent → grandParent → global
  
  
  // ======================================
  // 🔍 How Scope Chain Works With Closures
  // ======================================
  
  function outer() {
    let outerVar = "🌍 I'm from outer";
  
    return function inner() {
      let innerVar = "💡 I'm from inner";
      console.log(outerVar); // ✅ inner still knows outerVar due to scope chain
    };
  }
  
  const myInner = outer(); // outer() returns inner function
  myInner(); // Output: 🌍 I'm from outer
  
  // 💥 inner's scope chain still includes outerVar even after outer is off the stack
  // Why? Because inner's [[Environment]] links to outer's lexical environment
  
  
  // ======================================
  // 🔥 SCOPE CHAIN WALKTHROUGH (VISUALIZED)
  // ======================================
  
  function top() {
    let topVar = "top";
  
    function mid() {
      let midVar = "mid";
  
      function low() {
        let lowVar = "low";
  
        console.log(topVar); // Found in top scope
        console.log(midVar); // Found in mid scope
        console.log(lowVar); // Found in local
      }
  
      return low;
    }
  
    return mid();
  }
  
  const result = top(); // mid() returned low()
  result(); // Outputs: top, mid, low
  
  // 🔍 Even though top() and mid() are done, their scopes are kept alive
  // because `low` needs access to topVar and midVar.
  // The scope chain looks like this:
  // low → mid → top → global
  
  
  // ======================================
  // ❌ SCOPE CHAIN ERROR EXAMPLE
  // ======================================
  
  function first() {
    let a = 10;
  
    function second() {
      let b = 20;
  
      function third() {
        console.log(a); // ✅ Found in first()
        console.log(b); // ✅ Found in second()
        // console.log(c); // ❌ ReferenceError: c is not defined
      }
  
      return third;
    }
  
    return second();
  }
  
  const f = first();
  f(); // Output: 10, 20
  
  
  // ======================================
  // ⚠️ SCOPE CHAIN IS NOT DYNAMIC
  // ======================================
  
  let x = 1;
  
  function show() {
    console.log(x); // 👈 picks x from the scope in which function is DEFINED
  }
  
  function wrapper() {
    let x = 99;
    show(); // Still logs 1, not 99
  }
  
  wrapper(); // Output: 1
  
  // 💡 JavaScript uses **LEXICAL SCOPING**, not dynamic scoping.
  // The function "remembers" the scope where it was created, NOT where it was called.
  
  
  // ======================================
  // 🧪 TASKS: PRACTICE SCOPE CHAIN + CLOSURES
  // ======================================
  
  // Task 1: Create a function that creates another function with a captured variable
  function makePower(power) {
    return function (num) {
      return num ** power;
    };
  }
  
  const square = makePower(2);
  const cube = makePower(3);
  
  console.log(square(5)); // 25
  console.log(cube(2));   // 8
  
  // Task 2: Write a nested scope chain of 3 levels that logs variables from all 3 levels
  function levelOne() {
    let a = "Level 1";
  
    function levelTwo() {
      let b = "Level 2";
  
      function levelThree() {
        let c = "Level 3";
        console.log(a, b, c);
      }
  
      return levelThree;
    }
  
    return levelTwo();
  }
  
  const lvl = levelOne();
  lvl(); // Output: Level 1 Level 2 Level 3
  
  // Task 3: Create a function that returns another that remembers a value after original has finished
  function rememberName(name) {
    return function () {
      console.log("Hello, " + name);
    };
  }
  
  const greetKhayal = rememberName("Khayal");
  greetKhayal(); // Output: Hello, Khayal
  
  
  // ======================================
  // ✅ SUMMARY: SCOPE CHAIN
  // ======================================
  
  // 🔹 Every function has a reference to its outer scope (lexical environment)
  // 🔹 Scope chain is formed at function creation time, not call time
  // 🔹 Closures use the scope chain to access variables from the outer function
  // 🔹 Even after the outer function finishes, its environment stays in memory
  // 🔹 That’s why closures “remember” variables and work as private state
  
  // 📘 Scope Chain Visual:
  // child() scope
  //  → parent() scope
  //    → grandParent() scope
  //      → global scope
  
  // ======================================
  // 🧠 Want to go deeper? Ask for:
  // - Execution Context Flow
  // - Hoisting + Scope Chain
  // - Temporal Dead Zone + let/const
  // - Block Scope vs Function Scope
  // - Var vs Let vs Const in closures
  // - Memory leaks in closures
  // ======================================
  