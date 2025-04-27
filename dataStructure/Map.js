/* now what the heck is map and how do we use this datastructure in javascript */
/* map is used to store data in key value pair then we are right to ask a question what is the 
difference between object and map the map key type will always be string but the map 
can have diffent types of keys lets check it with example  */

const map = new Map();
map.set('name' , 'jabbar');
map.set('martial status' , false);
console.log(map.set(1, 'he is open to get married'))

/* one thing that most of people might not know about map is when it gets updated with set method
the current set metjhod has all the map properties as i have displayed here in the last one  */

console.log(map.get('name'))

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

/* lets check if the resturant is closed or open with lill vlever technique */
const time = 18 ; 
console.log(rest.get((rest.get('open') < time && rest.get('close') > time) ? true : false));



/* more about Maps in javascript  */
const newMap = new Map([
    ['Name' ,'Sufyan'],
    ['Age' , 23],
    ['profession' , 'SoftwareEnginner'],
    ['married' , false]
]);
console.log(newMap)

