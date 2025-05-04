
/* so lets talk a bit about type conversion and type coercion in javascript and how actually it
   works here 
 */ 
   // type coercion is when js explicitly convert the type as in below line the 23 is explicitly converted 
   // to string for concatenation 
   let number = 23 + '23';
   let numberOne = 23 - "23";
   // here in the above line the 23 string will be converted to number and we will get the output 0 


   /* type conversion so we have generally some 3 ways to convert type of variable 
    Explicit Conversion (Type Casting) 
    Done manually using functions like Number(), String(), Boolean(), etc. */ 

    console.log("5" + true); // "53" (Number is converted to string)
    console.log("5" - 3); // 2 (String is converted to number)
    console.log(5 + true); // 6 (true is converted to 1)
    console.log("10" * "2"); // 20 (Both strings are converted to numbers)
    console.log(null + 5); // 5 (null is converted to 0)
    console.log("5" == 5); // true (String "5" is converted to number 5)
    


    /* string conversion */

    console.log(String(123)); // "123"
    console.log(String(true)); // "true"  
    console.log((456).toString()); // "456" 
    
    /* Number conversion  */

    console.log(Number("123")); // 123
    console.log(Number("3.14")); // 3.14
    console.log(Number("Hello")); // NaN (Not a Number)
    console.log(parseInt("42px")); // 42
    console.log(parseFloat("3.14px")); // 3.14

    /* boolean conversion */ 
    
    console.log(Boolean(1)); // true
    console.log(Boolean(0)); // false
    console.log(Boolean("Hello")); // true
    console.log(Boolean("")); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
    