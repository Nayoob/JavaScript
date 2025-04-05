
// what is data type ?  
// in previouse lesson we studied about the variable and valves ; 
// lets move with the valves when ever we are trying to store any valve in the variable this valve should have 
// a type in simple analogy what type of valve do you actually wants to store in this variable is it a number 
// a string {collection of words } or a decimal number or we are saving a boolean valve in that variable ;

// to get good understanding of this first we need to study the 7 types of primitive data types 

// 1.Number > store decimal point numbers and integers {let number = 23}

 let id = 334;
 let roll_number = 1032;
 let height = 6.2 ;  // even this Number is in decimal form still we are able to store in it 
 console.log("id :" , id)
 console.log("roll_number:" , roll_number)
// 2.String > store sequence of character which represent string {let name = " Sufyan "}
let Name = "Jhonas smith"
console.log(Name) // output : jhonas smith

// 3.boolean > used for taking decision store only true false or 0 or 1 {let bool = true}
let event_Occured = true ;
let event_Occured2 = false ;
let fight = 0 ;
let dont_Fight = 1 ;


// 4.undefined > when a variable is declared but not initialized {represent empty valve}
 let myNName ;
 console.log(typeof myNName)  // type : umdefines make sense 

// 5.Null > also mean empty but it is an intentional absence of the valve {let age = null }
  // one interesting thing about null in java script 
    
   let myName = null ;
   console.log(typeof myName)  // out put : object ;
   console.log(typeof null == "object") // true 

    // have you ever wonder why the type of the null is object  Howwwww !!! 
    // {this is when the first version of the javascript were released the valves were represented by type tag
    // The type tag for objects was 0, and for some reason, the value null was given the same type tag (0) as objects.
    // for that reason when ever we now check the type of the null it shows us object ! 
    // }

// 6.Symbol > Symbols are unique and can't be duplicated.Symbols can be used as keys for object properties, 
// which are hidden from regular loops. => line 46 
  let mysymbol = Symbol('hey its unique')
  let mysymbol1 = Symbol("hey its unique too")
  console.log(mysymbol == mysymbol1) // false  its giving output false becasue these two symbols are unique 

   const hiddenSymbol = Symbol("id")

   let obj = {
     Name:"Muhammad Sufyan ",
     
     [hiddenSymbol]: "you can see this in loops the symbol thing "

   }
   console.log(obj[hiddenSymbol])

   for(let key in obj){
    console.log(key)   // as i itereated over the loops it did show the symbol which is the part of the object // 
   }

//    7.BigInt > 
   