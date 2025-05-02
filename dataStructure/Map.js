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
for (const [key , value] of newMap) {
    if(typeof key == "Number"){
        console.log(key , value)
    }
}

const coffeeShop = {
    name: "Brew & Beans",
    location: "Downtown, New York",
    established: 2015,
    owner: "Sophia Carter",
    isOpen: true,
    branches: 5,
    specialties: ["Espresso", "Cappuccino", "Cold Brew", "Latte"],
    ratings: {
        google: 4.7,
        yelp: 4.5
    }
};

/* the above one is just a random object just lets use them and play around a lill */

const randomMap = new Map(Object.entries(coffeeShop))
console.log(coffeeShop)
console.log(randomMap)

// Map(8) {
//     'name' => 'Brew & Beans',
//     'location' => 'Downtown, New York',
//     'established' => 2015,
//     'owner' => 'Sophia Carter',
//     'isOpen' => true,
//     'branches' => 5,
//     'specialties' => [ 'Espresso', 'Cappuccino', 'Cold Brew', 'Latte' ],
//     'ratings' => { google: 4.7, yelp: 4.5 }
//   }
/* let me explain very important thing when i do console.log(randomMap) though its a map 
and we know that the basic differnce between map and object  in js is map key will alwasy be in 
string type though if we decalre 123 as a key behind the scene the js engin will convert that to 
string type but the map is different when ever  you declare  key data type 
js wont touch it it remain that but if map work this way they why the fuck when console.log(map )
it give me every key & value pair both are inside the string this isbecause js want to be 
eye soothing js potray the map key and value both in string but behind the scene its in its origonal 
data type i hope it make sense if no then the best you can do is give up ! hahahahah 😂 */