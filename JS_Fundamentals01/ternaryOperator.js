
/* this one make life super easy 
its basically the if else the conditional but more clean and easy to understand way */

const age = 18 ;

const drink = (age >= 18 )? 'Drink wine' : 'Drink soda you bastard';

console.log(drink);

/* we can use the expressions in template litereal too  */

console.log(`i like to drink ${(age >= 18) ? 'wine' : 'water'}`)