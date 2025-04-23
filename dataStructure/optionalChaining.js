/* what is optional chaining and where do we use them ??? 
 */

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

/* lets say we dont have any property that we want in the web api that we fetching so what will you do then  */

// console.log(restaurant.openingHours.mon); // in this case its giving undegined because the mon day doesnt exist in the openingHours object 
// if (restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon)
// }
/* but this option dont solve problem i mean how many if statemtn will pyou put in here we have alot of stuff in object many resturnat have 
different opening days or they have variance  in closing and opeing hours  */

/* here comes the optional chaining but how to write optional chaining  */

console.log(restaurant.openingHours.tues?.open);
/* what is actually happeing here we are sayng to js then if resturent.openingHours.tues exist then obnly call open 
if lets say open property doesnt exist this will through undefined if i dont use this optional chaing thing here then we will accidently may
calll the property on undegined and that will throw and eror on us and that wont be acceptab on run time   */



/* challenge on this lets say we are given an array  */


const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of weekday) {
    // const opeingHour = restaurant.openingHours[day]?.open || "Closed now !!!"; 
    // here its giving saturday closed you know why because the shortcircuiting encoounter zero 
    const opeinghours = restaurant.openingHours[day]?.open ?? "closed now !!"
    console.log(`Resturant open at ${opeinghours}`)
}

/* we can use optional chaining on functions or arrays too lets try on function  */

console.log(restaurant.order?.(1, 2) ?? "method doesnt exist ") 

/* lets tru on arry  */

const user = [
    {
        name : "Sufyan",
        email:"tycoon.sufyan@gmail.com"
    }
];
const userOne = [];
console.log(user[0]?.name ?? "Array is empty ");
console.log(userOne[0]?.name ?? "Array is empty dude the userOne array ")