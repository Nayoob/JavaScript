// ----------- Understanding Map and Set in JavaScript ------------

// Creating a Map (expects an array of arrays [key, value])
const myMap = new Map([
    ['name', 'Sufyan'],
    ['age', 23],
    ['profession', 'Software Engineer'],
    ['married', false]
]);

console.log(myMap); 
// Map is a special OBJECT, so console shows {} brackets
// But internally it stores key-value pairs separately
// Map is iterable (you can loop through it)

// Iterating over Map
for (let [key, value] of myMap) {
    console.log(key, value);
}

// Output:
// name Sufyan
// age 23
// profession Software Engineer
// married false



// ----------------- Now Understanding Set ------------------

// Creating a Set (expects a single array of values)
const mySet = new Set([1, 2, 3, 4, 5, 2, 3]);

console.log(mySet); 
// Set also shows {} in console because it's a special object
// Internally Set stores only UNIQUE values (no duplicates)
// Set is also iterable

// Iterating over Set
for (let value of mySet) {
    console.log(value);
}

// Output:
// 1
// 2
// 3
// 4
// 5



// ---------------- Why do Map and Set show {} like objects? ----------------
// - In JavaScript, Map and Set are OBJECTS internally.
// - But they are SPECIAL objects called "iterable objects".
// - They behave differently compared to plain objects.
// - That's why you can loop through them directly with 'for...of'.
// - Plain objects {} cannot be directly looped with 'for...of'.



// -------------------- Important Differences ----------------------

/*
Map:
- Expects array of arrays [ [key, value], [key, value] ]
- Stores key-value pairs
- Removes duplicate keys (keys must be unique)
- Iterable with for...of
- Shows {} in console

Set:
- Expects array of values [ value1, value2, value3 ]
- Stores only unique values
- Removes duplicate values
- Iterable with for...of
- Shows {} in console
*/


// -------------- Pure Objects --------------

// Normal object example
const myObj = {
    name: 'Sufyan',
    age: 23
};

// Normal objects are NOT directly iterable with 'for...of'
// If you try this, it will throw an error:

// ❌ Error:
// for (let item of myObj) {
//     console.log(item);
// }

// To iterate normal objects, you must first convert it to array:
for (let [key, value] of Object.entries(myObj)) {
    console.log(key, value);
}

// Output:
// name Sufyan
// age 23

// ----------- FINAL SUMMARY ------------

/*
- Map => Special object, key-value pairs, iterable
- Set => Special object, unique values, iterable
- Plain Object => Regular object, NOT iterable directly (needs Object.entries())
*/

