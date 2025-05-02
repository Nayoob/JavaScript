/*lets work with strings lill more to find out how the build in function of the string work  */

const fullName = 'sUfYaN'.toLowerCase() ;
const fullNameOne = fullName[0].toUpperCase() + fullName.slice(1);
console.log(fullName)
console.log(fullNameOne)

/*lets discuass about replace method in string so replace bascillay replaces the string or letter with '
in string with your desired character or string lets take an example here  */

const email = 'tycoon.sufyan@gmail.com';
const correctedEmail = email.replace('t' , email[0].toUpperCase());
console.log(correctedEmail)
/* there is one thing that need to be disscued here and that is if i replace something with some other char or 
string only the first digits will be replaced lets say i have string jabbar if i replace b with 
B the string will look some thing like this jaBbar only the first b that it encounterd is replace 
to sole this problem we have replaceall() funciton  */

const hamza = 'jabbar'.replace('b', 'B');
console.log(hamza) // jaBbar

const hamzaOne = 'jabbar'.replaceAll('b' , 'B');
console.log(hamzaOne)

// there is one more method called trim that is used to remove the empty spaces 


// ====================
// String Methods (Part 2)
// (excluding slice, trim, replace, toLowerCase, toUpperCase)
// ====================

// 1. startsWith()
// ----------------
// Checks if a string starts with a specific substring.
// Returns true or false.

const str1 = "Hello World";

console.log(str1.startsWith("Hello")); // true
console.log(str1.startsWith("World")); // false

// Optionally, you can give a position to start checking from
console.log(str1.startsWith("World", 6)); // true (starts checking from index 6)


// 2. endsWith()
// --------------
// Checks if a string ends with a specific substring.
// Returns true or false.

const str2 = "Coding is fun";

console.log(str2.endsWith("fun")); // true
console.log(str2.endsWith("is")); // false

// You can also limit how much of the string to consider
console.log(str2.endsWith("Coding", 6)); // true (only looks at first 6 chars)


// 3. includes()
// ---------------
// Checks if a string contains a specific substring.
// Returns true or false.

const str3 = "Javascript is powerful";

console.log(str3.includes("powerful")); // true
console.log(str3.includes("Python"));   // false

// Optionally, you can specify from which index to start searching
console.log(str3.includes("Javascript", 5)); // false
console.log(str3.includes("is", 11));        // true


// 4. indexOf()
// --------------
// Returns the index of the first occurrence of a substring.
// Returns -1 if the substring is not found.

const str4 = "Learning JavaScript is cool";

console.log(str4.indexOf("JavaScript")); // 9
console.log(str4.indexOf("Python"));     // -1

// You can also specify a starting index
console.log(str4.indexOf("cool", 10));   // 22


// 5. lastIndexOf()
// ------------------
// Returns the index of the last occurrence of a substring.
// Returns -1 if not found.

const str5 = "Test string Test string";

console.log(str5.lastIndexOf("Test")); // 13 (last occurrence)
console.log(str5.lastIndexOf("Hello")); // -1


// 6. repeat()
// ------------
// Repeats the original string a number of times.

const str6 = "Hi! ";

console.log(str6.repeat(3)); // Hi! Hi! Hi! 

// If you give 0, it returns an empty string
console.log(str6.repeat(0)); // ""

// Cannot repeat with a negative number (will throw an error)


// 7. charAt()
// -------------
// Returns the character at a specified index.

const str7 = "abcdef";

console.log(str7.charAt(2)); // 'c' (indexing starts at 0)
console.log(str7.charAt(5)); // 'f'
console.log(str7.charAt(10)); // '' (empty string if index out of bounds)


// 8. charCodeAt()
// -----------------
// Returns the UTF-16 code of the character at a specified index.

const str8 = "ABC";

console.log(str8.charCodeAt(0)); // 65 ('A')
console.log(str8.charCodeAt(1)); // 66 ('B')


// 9. concat()
// ------------
// Joins two or more strings and returns a new string.

const str9 = "Hello";
const str10 = "World";

console.log(str9.concat(" ", str10, "!")); // "Hello World!"

// Modern way: Just use + or template literals `${}`
// Example: console.log(`${str9} ${str10}!`);


// 10. padStart()
// ----------------
// Pads the current string with another string until it reaches the given length.
// Padding is added at the start.

const str11 = "5";

console.log(str11.padStart(3, "0")); 
console.log(str11.padStart(5, "*")); 


// 11. padEnd()
// --------------
// Pads the current string with another string until it reaches the given length.
// Padding is added at the end.

const str12 = "5";

console.log(str12.padEnd(3, "0")); // "500"
console.log(str12.padEnd(5, "-")); // "5----"

/* how do we actually use the padd function in dev */

const coverDigits = function(number){
    const changeToString = String(number);
    const str = changeToString.slice(-3);
    return str.padStart(number.length , '*');
}
console.log(coverDigits(453755343));
console.log(coverDigits('23453222344'));

// 12. split()
// -------------
// Splits a string into an array of substrings based on a delimiter.

const str13 = "red,green,blue";

console.log(str13.split(",")); // ['red', 'green', 'blue']

// If you split by character
console.log(str13.split("")); // ['r', 'e', 'd', ',', 'g', 'r', 'e', 'e', 'n', ',', 'b', 'l', 'u', 'e']

// =======================
// 🔥 String join() method (actually works on arrays to create strings)
// =======================

// ✅ join() - Joins all elements of an array into a single string using a separator

const words = ["Hello", "world", "JavaScript"];
const sentence = words.join(" "); 
console.log(sentence); 
// Output: "Hello world JavaScript"

// 🔹 If you use different separator:
const withDash = words.join("-");
console.log(withDash);
// Output: "Hello-world-JavaScript"

// 🔹 If you don't pass anything (default separator is comma ',')
const defaultJoin = words.join();
console.log(defaultJoin);
// Output: "Hello,world,JavaScript"

// 13. match()
// -------------
// Searches for a match between a regular expression and the string.
// Returns an array of matches or null.

const str14 = "The rain in Spain";

console.log(str14.match(/ain/g)); // ['ain', 'ain']

// If no match, returns null


// 14. search()
// -------------
// Searches for a match between a regular expression and the string.
// Returns the index of the match, or -1 if not found.

const str15 = "The rain in Spain";

console.log(str15.search(/ain/)); // 5
console.log(str15.search(/python/)); // -1


// 15. localeCompare()
// ----------------------
// Compares two strings in the current locale.
// Returns:
//   0 if equal
//   Negative if reference string < compared string
//   Positive if reference string > compared string

const str16 = "apple";

console.log(str16.localeCompare("banana")); // -1 (apple < banana)
console.log(str16.localeCompare("apple"));  // 0
console.log(str16.localeCompare("App"));    // 1 (depends on locale and case sensitivity)
