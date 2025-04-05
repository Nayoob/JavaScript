
/* so here we have basically two types of the operators 
1. strick equality operator 
2. loose equality operator 
how these both work with code lets try to understand these two 
loose one => 

It converts (coerces) the values to the same type before comparing
Think of it as  "Are these kinda the same if I try hard enough?"

 */
'5' == 5        // true → string '5' is converted to number 5
false == 0      // true → false becomes 0
null == undefined  // true → special JS case


/* === → Strict Equality
No type conversion, both value and type must match.

Think of it as: “Are these exactly the same, no funny business?” */
'5' === 5       // false → different types (string vs number)
false === 0     // false → boolean vs number
null === undefined  // false

/*  Always use === and forget == unless you really know what you’re doing. */

if ('0' == false) { // so here the implicit type coercion occured here the 'O' just converted to boolean here 
    console.log("what the fuck just happened here !!!! ")
}
/* but if we do  */
if ( '0' === false ) {
    console.log("the condition was true ")
}else{
    console.log("condition was not true ")
}

/* some general cases to remember  */

0 == false    // ✅ true → false becomes 0
'0' == false  // ✅ true → false becomes 0, '0' becomes 0
0 == 'false'  // ❌ false → 'false' turns into NaN
1 == true     // ✅ true → true becomes 1
'1' == true   // ✅ true → true becomes 1, '1' becomes 1
null == undefined  // ✅ true → special case in JS
null == 0      // ❌ false → null does NOT turn into 0


0 == 'false'  /* this one is behaving lil wierd  
lets understand how it works so in weak equality operator js convert the string to a number here its not 
a numeric string so js return NaN not a number and so 0 is not equal to NaN hence it return false */

/* lets try one more thing here which is promt when we take promt and get the value from the use 
it will always be of type string lets see  */
const favrtNumber = prompt("Enter your favt number");
console.log(typeof favrtNumber); // the output here is string how weird it is but it is what it is 

const password = Number(prompt("Enter your 5 digts password Only digits"));

if (isNaN(password)) {
    console.log("Not a number , Enter proper password ");
    
}else{
    console.log("Prcessing ... ");
    
}