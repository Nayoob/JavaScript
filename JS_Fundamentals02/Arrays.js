
// if your dont know array you should quite programming asap 

// Arrays in JavaScript

// An array is a collection of items (elements) that can be of any type, such as numbers, strings, or even other arrays.
// Arrays are indexed starting from 0, meaning the first item in the array has index 0, the second has index 1, and so on.

// Basic Array Example
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);  // Output: [1, 2, 3, 4, 5]

// Arrays can store mixed data types
const mixedArray = [1, 'hello', true, [1, 2, 3]];
console.log(mixedArray);  // Output: [1, 'hello', true, [1, 2, 3]]

// You can access elements of an array by their index
console.log(numbers[0]);  // Output: 1
console.log(mixedArray[1]);  // Output: 'hello'

// Arrays in JavaScript are **zero-indexed**, meaning the first element is at index 0.
console.log(numbers.length);  // Output: 5, because there are 5 elements in the numbers array

// --------------------

// **Modifying Elements in Arrays Declared with const**

const numbersArray = [1, 2, 3, 4, 5];

// Modifying an element at a specific index
numbersArray[0] = 10;  // Changing the element at index 0
console.log(numbersArray);  // Output: [10, 2, 3, 4, 5]

// You can modify the elements, but you can't reassign the array itself to a new one.
numbersArray[1] = 20;  // Changing the element at index 1
console.log(numbersArray);  // Output: [10, 20, 3, 4, 5]

// **Adding or Removing Elements**

numbersArray.push(6);  // Adds an element at the end of the array
console.log(numbersArray);  // Output: [10, 20, 3, 4, 5, 6]

numbersArray.pop();  // Removes the last element from the array
console.log(numbersArray);  // Output: [10, 20, 3, 4, 5]

numbersArray.unshift(0);  // Adds an element at the beginning of the array
console.log(numbersArray);  // Output: [0, 10, 20, 3, 4, 5]

numbersArray.shift();  // Removes the first element from the array
console.log(numbersArray);  // Output: [10, 20, 3, 4, 5]

// **Reassigning Arrays is Not Allowed with const**
const fruits = ['apple', 'banana', 'cherry'];

// This will throw an error, because we're trying to reassign the array.
// fruits = ['orange', 'mango', 'pear'];  // ERROR: Assignment to constant variable.


// **You CANNOT reassign the entire array to a new array**
// This will throw an error because reassigning a const variable is not allowed
// numbersArray = [6, 7, 8];  // ERROR: Assignment to constant variable.

// **You CANNOT redeclare the array with const**
// This will throw an error because you cannot redeclare the same constant variable in the same scope
// const numbersArray = [10, 20, 30];  // ERROR: Identifier 'numbersArray' has already been declared.


/* arrays work super weird in java script since javascrip is dynamically typed language
it basically decide what will be the type of current variable at run time its very flexible to work with 
different data types while writing code    */
let currentyear = 2025;
const calAge = function(datOfBirth){
    return currentyear - datOfBirth ;
}
const year = [1990 , 1870 , 1999 , 2002, 1342];

calAge(year); // ==> the out put will be NaN not a number  but if we do + in the above calAge func it will then add the last index didt that number 

const ageOne = calAge(year[0]);
const ageTwo = calAge(year[3]);
const ageThree = calAge(year[year.length - 1]);

console.log(ageOne , ageTwo , ageThree);


// we can these ages in array too 

const age = [calAge(year[0]) , calAge(year[3]) , calAge(year[year.length - 1])];

console.log(age);




/* one challange solution  */

const calcTip = function(bill){
    if(bill >= 50 && bill <=300 ){
        return bill * (15 / 100);
    }else{
        return bill * 0.20 ;
    }
}

console.log(calcTip(100));

const bills = [125 , 555 , 44];

const tips = [calcTip(bills[0]) , calcTip(bills[1]) , calcTip(bills[bills.length - 1])];

const totals = [bills[0] + tips[0] , bills[1] + tips[1] , bills[2] + tips[2] ];

console.log(totals)


c