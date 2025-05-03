//  BIND() — LOCKING `this` AND RETURNING A NEW FUNCTION

// ========== BASICS ==========
const person = {
    name: "Khayal",
    greet: function () {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
  
  const greetFunc = person.greet.bind(person); // Locks 'this' to person
  greetFunc(); //  "Hi, I'm Khayal"

  
  //  WHY BIND? When FUNCTION LOSES CONTEXT ==========
const personOne = {
    name: "Khayal",
    greet() {
      console.log(`Hi from ${this.name}`);
    }
  };
  
  const greetLater = personOne.greet; //  Context lost!
  greetLater(); //  'this.name' is undefined
  
  const fixedGreet = personOne.greet.bind(personOne); //  Fix it with bind!
  fixedGreet(); // "Hi from Khayal"
  

  /* we can bind an argument to funciotn too les see how  */

const addGst = function(rate , ammount){
    return ammount + ammount * rate ;
}

console.log(addGst(0.2 , 300))

/* here i can bind an argument to the fucntion so when ever we use this gst calculator again and again we 
should not be giving the rate again and again  */
const calGstOne = addGst.bind(null , 0.2);

console.log(calGstOne(200));


/* lets create a function that can actually reurna fucntion  */

const func = function(rate){
    return function(value){
        return value + value * rate ; 
    }
}

const newFunc = func(0.2);

console.log(newFunc(400))
console.log(newFunc(200))
console.log(newFunc(150))