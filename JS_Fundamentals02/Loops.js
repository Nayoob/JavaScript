// 🔁 JavaScript Loops – Complete Guide

// ---------------------------
// 1. `for` Loop
// ---------------------------
// Best for when you know **how many times** you want to loop.

for (let i = 1; i <= 5; i++) {
    // Loop from 1 to 5 and print the value of i
    console.log(i);
  }
  
  // ---------------------------
  // Example: Print elements of an array
  const fruits = ['apple', 'banana', 'mango'];
  
  for (let i = 0; i < fruits.length; i++) {
    // Loop through array and print each fruit
    console.log(fruits[i]);
  }

  const data =[
    'sufyan',
    'khan',
     23,
     'Quetta',
     ['jabbar', 'khayal' , 'gunahgar']

  ]

  for (let index = 0; index < array.length; index++) {
    console.log(data[i] , typeof index)
    
  }
  
  // ---------------------------
  // 2. `while` Loop
  // ---------------------------
  // Used when the number of iterations is **not known beforehand**.
  
  let i = 0;
  while (i < 3) {
    // Loop runs while i is less than 3
    console.log('Hello!');
    i++; // Don't forget to increment i to avoid infinite loop!
  }
  
  // ---------------------------
  // 3. `do...while` Loop
  // ---------------------------
  // Same as `while`, but **runs at least once** before checking the condition.
  
  let j = 0;
  do {
    // This will always run at least once, regardless of the condition
    console.log('This runs at least once');
    j++;
  } while (j < 1); // Condition will be checked after the first execution
  
  // ---------------------------
  // 4. `for...of` Loop
  // ---------------------------
  // Best for **arrays** and **iterables** (like strings). Gives values directly.
  
  const colors = ['red', 'blue', 'green'];
  
  for (const color of colors) {
    // Loop through array and print each color
    console.log(color);
  }
  
  // ---------------------------
  // Example: Loop through string
  const name = "Khayal";
  
  for (const char of name) {
    // Loop through string and print each character
    console.log(char);
  }
  
  // ---------------------------
  // 5. `for...in` Loop
  // ---------------------------
  // Best for **objects**. Gives you **keys (property names)**.
  
  const user = {
    name: "Khayal",
    age: 22,
    city: "Quetta"
  };
  
  for (const key in user) {
    // Loop through object properties (keys) and print key-value pairs
    console.log(key, user[key]);
  }
  
  // ---------------------------
  // 💡 Bonus: Looping Methods (Advanced, cleaner)
  // ---------------------------
  
  // 🔸 `forEach()` – Loops through an array and executes a function for each item
  const nums = [1, 2, 3];
  nums.forEach(num => console.log(num)); // Prints each number in the array
  
  // 🔸 `map()` – Creates a **new array** with results of calling function on each element
  const doubled = nums.map(num => num * 2);
  console.log(doubled); // [2, 4, 6]
  
  // 🔸 `filter()` – Creates a **new array** with elements that pass the condition
  const evens = nums.filter(num => num % 2 === 0);
  console.log(evens); // [2]
  
  // ---------------------------
  // 🚨 When to use what?
  // ---------------------------
  // Situation                            | Use        
  // -------------------------------------|------------
  // Loop with index needed              | `for` loop 
  // Loop through arrays                 | `for`, `for...of`, `forEach`
  // Loop through object properties      | `for...in`
  // Loop until condition is false       | `while`, `do...while`
  
  // ---------------------------
  // 🧠 Summary:
  // ---------------------------
  // - ✅ `for` → Classic loop (use index)
  // - ✅ `while`, `do...while` → Condition-based loops
  // - ✅ `for...of` → Best for **values** in arrays/strings
  // - ✅ `for...in` → Best for **keys** in objects
  // - ✅ `.forEach()`, `.map()`, `.filter()` → Array methods for clean and modern code
  
  