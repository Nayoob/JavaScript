/* sets is a data structure that we use in JavaScript it came with es6 n JavaScript 
basically it is used to store unique values they are iterables mean you can iterate through them 
but they are not arrays they obnlu store unique values thugh you provide different values 
in to the set it will discart the duplicate values  */


const set = new Set([
    "sufyan",
    'jabbar',
    'sufyan',
    'bamboolal',
    1 , 
    2,
    1
]);
console.log(set)

/* there are some methods for set like has size delete add and more  */

console.log(set.has(1));
console.log(set.has('sufyan'));

console.log(set.size)

/* practical example lets say you are given an array of people with different designations 
and asked to filter out all the desginations the aray might contain the duplicate of each 
designation  */

const arr = ['seniorEnginner' , 'QA' , 'intern' , 'QA' , 'juniorEnginner' , 'Intern'];


const UniqueVlaes = [...new Set(arr)]
console.log(UniqueVlaes)

/* as i used iterable here so let me clary that sets are not object though they show on the console 
in the form of object set are specail type of iterable that only store unique values and we can 
use spread with any iterable in JavaScript */

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);
  
  const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
  ]);

/* some unique methods for set which has been added to new version of javascript 
the below one is intersection method that is so freaking new evern current browser didnt know it so far 
so created my own intersection function  */

const intersection = function(set1 , set2){
    const arrayOne = [...set1 ];
    const araryTwo = [...set2]
    
    const commonFood = [];
    for (let i = 0; i < arrayOne.length; i++) {
    
        for (let j = 0; j < araryTwo.length; j++) {
            if (arrayOne[i] === araryTwo[j]) {
                commonFood.push(arrayOne[i])
            }   
        }
    }
    console.log(commonFood)
}

intersection(italianFoods , mexicanFoods);

/* union funciton lets try that if it is working  */

const union = function(setOne , setTwo){ // so these arguments will receive sets actually 
    const allFood = [...setOne , ...setTwo]
    const food = [...new Set(allFood)]
    console.log(food)
    
}

union(italianFoods , mexicanFoods)