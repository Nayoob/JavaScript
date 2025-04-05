

// Operators
// lets discuss the science of operators in javascript 

// lets start form the Arithmatic oeprators first then we will do other types in short while// 

const clientBirthYear = 2002 ;
const CurrentYear = 2024 ;
const age =  CurrentYear - clientBirthYear  ; 

console.log("Age:" , age);

const address = "Quetta"
console.log(address , age )

// lets do concatination => concatination is the process of joining two strings // string with a number 

const firstName = "Muhammad Sufyan"
const lastName = 'yousufzai'

console.log( 2 ** 3 )  // what does this mean this syntax is used to get the power of the integer 
console.log(firstName + " " + lastName)

 // there is another way to concatinate strings called template concatination usually called template literals 
 // or string interpolation => we use this method to avoid using that annoying plus + operator every where 

 const price = 3000; 
 const inPercent = "20%";
 const discount_percentage = 0.20 ;
 let discount = price * discount_percentage;  

 const finalPrice = 3000 - discount ;
   // this is string interpolation ${price } cool ! 
 console.log(`Product original price is $${price} Discount Applied ${inPercent}`) 
 console.log(`total after discount applied is ${finalPrice}`)


 // assignment operator  '=' // 

 let number = 289 ;
 number += 20 ; // number = number + 20 ;
 number -= 10 ; 
 number *= 10 ;

 // comparison operator "< , >  , <= , >= , != "
 const numberTwo = 37 ;
 console.log(numberTwo > 17 ) // true 

console.log(numberTwo != 37) // flase 

let sufyan = 19 ;
let isPubertyHit = sufyan >= 18 ;
console.log(isPubertyHit)  // true 

 


