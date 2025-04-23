/* what is spread operator why do we use them in java script 
It’s written as ... and it basically “spreads out” 
the elements of an array or object into individual item */

const string = 'sufyan';
const array = [ 1 , 2, 3, 5, ,56 ];


const newArray = [...array , ...string]

console.log(newArray);

// console.log(...array);

// console.log(...string);



// 1️⃣ Copying Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log("Copied Array:", arr2); // [1, 2, 3]

// 2️⃣ Merging Arrays

const a = [1, 2];
const b = [3, 4];
const mergedArray = [...a, ...b];
console.log("Merged Array:", mergedArray); // [1, 2, 3, 4]

// 3️⃣ Passing Arguments to Functions
const nums = [1, 2, 3];
function sum(x, y, z) {
  return x + y + z;
}
console.log("Sum using spread:", sum(...nums)); // 6

// 4️⃣ Copying Objects
const obj1 = { name: "Khayal" };
const obj2 = { age: 22 };
const copiedObj = { ...obj1 };
console.log("Copied Object:", copiedObj); // { name: "Khayal" }

// 5️⃣ Merging Objects
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObj); // { name: "Khayal", age: 22 }

// 6️⃣ Adding Items While Copying Array
const fruits = ["apple", "banana"];
const newFruits = [...fruits, "mango"];
console.log("New Fruits:", newFruits); // ["apple", "banana", "mango"]

// 7️⃣ REST Operator in Function (Looks same but it's REST)
function total(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log("Total using rest:", total(1, 2, 3, 4)); // 10

// 8️⃣ Spread in Nested Arrays
const nested1 = [[1, 2], [3, 4]];
const nested2 = [...nested1]; // Shallow copy
nested1[0][0] = 99;
console.log("Shallow Copy Check:", nested2); // [[99, 2], [3, 4]]

// 9️⃣ Spread with Strings
const word = "hello";
const letters = [...word];
console.log("Spread String to Array:", letters); // ["h", "e", "l", "l", "o"]

// 🔟 Spread in React-like state updates (Just a simulation)
const prevState = { count: 10, name: "Ali" };
const newState = { ...prevState, count: 11 };
console.log("Updated State:", newState); // { count: 11, name: "Ali" }
