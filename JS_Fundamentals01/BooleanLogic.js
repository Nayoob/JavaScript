/* this portion is just and or basic programming stuff  */

// =======================
// 🚦 Logical Operators in JavaScript
// =======================

// ✅ AND Operator (&&)
// Returns true if BOTH sides are true
const age = 25;
if (age > 18 && age < 30) {
  console.log("✅ Young adult (AND passed)");
} else {
  console.log("❌ Condition failed (AND)");
}

// ✅ OR Operator (||)
// Returns true if AT LEAST ONE side is true
const day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("✅ It's the weekend! (OR passed)");
} else {
  console.log("❌ It's a weekday (OR failed)");
}

// ✅ NOT Operator (!)
// Negates a boolean value (true → false, false → true)
const isLoggedIn = false;
if (!isLoggedIn) {
  console.log("⚠️ Please log in (NOT used)");
}

// =======================
// 🧠 Short-Circuiting
// =======================

// AND (&&) stops at the first falsy value
console.log(0 && "Hello"); // Output: 0 (because 0 is falsy)
console.log("Hi" && "Hello"); // Output: Hello (both truthy)

// OR (||) stops at the first truthy value
console.log("Hi" || 0); // Output: "Hi"
console.log(0 || false); // Output: false
console.log(null || "JS"); // Output: "JS"

// =======================
// 🤯 Falsy Values in JS
// =======================
// These are all considered "false" when used in logical conditions:
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// Everything else is truthy!
console.log(Boolean("Khayal"));   // true
console.log(Boolean(123));        // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
