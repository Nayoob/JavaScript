/* what are difference types of loops in js the for of loop and for in loop 
what are these why are they differnee the for of loop is used to iterate over an arrya 
and the for in loop is used to iterate over object lets see */

const fruit = ['jabbar' , 'sufyan' , 'hamayoon' , 'jabbar'];
for (const element of fruit) {
    console.log(element)
}
/* the for of loop is used when we are iterating over each element of array  */

const user = {
    name : 'sufyan',
    email :"tycoon.sufyan@gmail.com",
    profession : "software dev.",
    Experience : {
       yearOne : "intern",
       yearTwo :"associate dev",
       yearThree :"Software dev",
       yearFour : "senior Enginner"
    },
    showExperience : function(){
       console.log(` Year One ${this.name} worked as ${this.Experience.yearOne}`)
       console.log(` Year two ${this.name} worked as ${this.Experience.yearTwo}`)
       console.log(` Year Three ${this.name} worked as ${this.Experience.yearThree}`)
       console.log(` Year four ${this.name} worked as ${this.Experience.yearFour}`)
    }
}

// user.showExperience();

for (const key in user) {
   if( key === "showExperience"){
    user[key]();
   }
   else if(key === 'Experience'){
      for (const keyin in user[key]) {
         console.log(`${keyin} : ${user[key][keyin]}`)
      }
   }else{
    console.log(`${key} : ${user[key]}`)
   }
   
}
/* lets say  i want to iterate over this object then i will use the for in loop instead of for
of loop  */


/* there is anpther method that is used to iterate over object  */

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[0]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  const restaurant = {
      name: 'Classico Italiano',
      location: 'Via Angelo Tavanti 23, Firenze, Italy',
      categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
      starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
      mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
      // ES6 enhanced object literals
      openingHours,
    
      order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },
    
      orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
          `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
      },
      orderPasta(ing1, ing2, ing3) {
          console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
          );
        },
      
        orderPizza(mainIngredient, ...otherIngredients) {
          console.log(mainIngredient);
          console.log(otherIngredients);
        },
      };  
  
console.log("__________________________________")
const opnhour = Object.keys(openingHours)
console.log(opnhour)
for (const key of Object.keys(openingHours)) {
   console.log(key)
}

/* we can iterate over values too  */

const openhourValues = Object.values(openingHours)
console.log(openhourValues)

for (const element of Object.values(openingHours)) {
    console.log(`Open at :${element.open}Am`)
    console.log(`Closed at :${element.close}Pm`)
}

console.log("________________________________")
const allstuf = Object.entries(openingHours)
console.log(allstuf)

for (const eachIndex of Object.entries(openingHours)) {
    console.log(eachIndex[1].open)
}