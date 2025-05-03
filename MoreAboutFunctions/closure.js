// ===============================================
// 🔍 CLOSURE DEEP DIVE (How It REALLY Works)
// ===============================================

// -----------------------------------------------
// 📦 Step 1: What happens when you define a function?
// -----------------------------------------------

// Functions in JS remember the scope in which they were defined.
// That scope = LEXICAL ENVIRONMENT (also called "scope chain").

function outerFunction() {
    let outerVar = "🔥 I'm from the outer scope!";
  
    function innerFunction() {
      console.log(outerVar); // innerFunction has access to outerVar
    }
  
    return innerFunction;
  }
  
  const myFunc = outerFunction(); // outerFunction runs & returns innerFunction
  
  myFunc(); // Output: 🔥 I'm from the outer scope!
  
  // 💡 At this point, outerFunction is DONE. So how is outerVar still alive?
  
  // -------------------------------
  // 🧠 How closures work internally?
  // -------------------------------
  
  // ✅ When a function is declared, JavaScript attaches a "scope reference" to it.
  // ✅ This reference is to the LEXICAL ENVIRONMENT it was created in.
  // ✅ Even if the outer function is gone, the inner function STILL HAS A LINK to the scope where it was born.
  
  // Think of it like:
  // function innerFunction = {
  //   code: "console.log(outerVar)",
  //   [[Environment]]: Reference to outerFunction’s Lexical Environment
  // }
  
  // So `outerVar` lives on the **heap**, even after outerFunction has returned.
  // Because `innerFunction` is still using it, it's not garbage-collected.
  
  
  // ===========================================
  // 🧪 Example 1: Closure preserves state
  // ===========================================
  function createCounter() {
    let count = 0; // 👈 Lives in memory
  
    return function () {
      count++;
      console.log("Count:", count);
    };
  }
  
  const counter = createCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3
  
  // 🔎 EVEN THOUGH createCounter() has finished,
  // count is still accessible because it's captured in the closure.
  
  
  // ===========================================
  // 🛠 Example 2: Multiple independent closures
  // ===========================================
  function createGreeting(greeting) {
    return function (name) {
      console.log(greeting + ", " + name);
    };
  }
  
  const sayHello = createGreeting("Hello");
  const sayHi = createGreeting("Hi");
  
  sayHello("Khayal"); // Hello, Khayal
  sayHi("Naseeb");    // Hi, Naseeb
  
  // ✅ sayHello and sayHi each remember their own `greeting` value
  // ✅ Two different closures are created, each with its own environment
  
  
  // ===========================================
  // 🧪 Example 3: Closure inside loops (classic trap)
  // ===========================================
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("var i:", i); // Outputs 3, 3, 3
    }, 1000);
  }
  
  // ❌ Because `var` is function-scoped, and all closures share the same i
  
  for (let j = 0; j < 3; j++) {
    setTimeout(function () {
      console.log("let j:", j); // Outputs 0, 1, 2 ✅
    }, 1000);
  }
  
  // ✅ `let` is block scoped, so each iteration has its own closure
  
  
  // ===========================================
  // 🧪 Example 4: Emulating private variables
  // ===========================================
  const user = (function () {
    let password = "secret123"; // private
  
    return {
      checkPass: function (input) {
        return input === password;
      },
      changePass: function (newPass) {
        password = newPass;
      }
    };
  })();
  
  console.log(user.checkPass("wrong")); // false
  console.log(user.checkPass("secret123")); // true
  user.changePass("newpass");
  console.log(user.checkPass("newpass")); // true
  
  // ✅ `password` is only accessible inside closure — private data
  
  
  // ===========================================
  // 🧪 Example 5: Closure & Memory (Heap vs Call Stack)
  // ===========================================
  
  function memoryDemo() {
    let bigData = new Array(1000000).fill("🤯");
  
    return function () {
      console.log("Still holding on to bigData with length:", bigData.length);
    };
  }
  
  const hold = memoryDemo(); // bigData goes to HEAP because it's referenced
  // memoryDemo() finishes, but bigData is not collected
  hold(); // Output: Still holding on to bigData with length: 1000000
  
  // ⚠️ Be careful — closures can cause memory leaks if not managed properly
  
  
  // ===========================================
  // 🔍 TECHNICAL FLOW (Step-by-Step)
  // ===========================================
  
  // 1️⃣ JS parses code and creates functions with lexical environment references
  // 2️⃣ When outerFunction runs:
  //     - A new execution context is pushed to the call stack
  //     - A lexical environment (LE) is created with variables like outerVar
  //     - That LE is stored in HEAP (for closures)
  // 3️⃣ innerFunction is returned with a hidden [[Environment]] link to outerFunction's LE
  // 4️⃣ When innerFunction runs later, it looks up outerVar using the scope chain from [[Environment]]
  // 5️⃣ Even if outerFunction is off the stack, its LE stays alive in heap as long as it's used
  
  // ===========================================
  // 🧠 Summary: Closures = Function + Environment
  // ===========================================
  
  // - Closures allow functions to remember the environment where they were created
  // - This is possible because of lexical scoping
  // - The outer function’s scope is kept in memory (heap) because the inner function still refers to it
  // - Used for encapsulation, state, callbacks, currying, and more
  
  // ===========================================
  // 🎯 CLOSURE TASKS FOR YOU 🔥
  // ===========================================
  
  // 1. Create a function that returns a personalized greeter
  function createGreeter(name) {
    return function (greeting) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  const greetKhayal = createGreeter("Khayal");
  greetKhayal("Hello");
  greetKhayal("Good Morning");
  
  // 2. Make a bank account module with deposit/withdraw (closure-based)
  function createAccount() {
    let balance = 0;
  
    return {
      deposit: function (amount) {
        balance += amount;
        console.log(`Deposited: ${amount}, New balance: ${balance}`);
      },
      withdraw: function (amount) {
        if (amount > balance) {
          console.log("Insufficient funds");
        } else {
          balance -= amount;
          console.log(`Withdrew: ${amount}, New balance: ${balance}`);
        }
      },
      getBalance: function () {
        console.log(`Balance: ${balance}`);
      }
    };
  }
  
  const myAccount = createAccount();
  myAccount.deposit(500);
  myAccount.withdraw(200);
  myAccount.getBalance();
  
  // 3. Make a password checker module with set/check/reset options
  
  const passwordManager = (function () {
    let password = "khayal123";
  
    return {
      check: (input) => console.log(input === password ? "Correct!" : "Wrong password"),
      set: (newPass) => {
        password = newPass;
        console.log("Password updated!");
      },
      reset: () => {
        password = "default";
        console.log("Password reset to default");
      }
    };
  })();
  
  passwordManager.check("khayal123");
  passwordManager.set("newpass123");
  passwordManager.check("newpass123");
  passwordManager.reset();
  passwordManager.check("default");
  
  
  // ===========================================
  // 🧠 Now you REALLY understand how closures work!
  // ===========================================
  
  