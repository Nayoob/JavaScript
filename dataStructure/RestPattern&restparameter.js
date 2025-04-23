/* what is rest pattern and rest parameter  
rest pattern is the opposite of spread operator the spread parameter just spread out the elements into '
single variables while the rest parameter just form one single array out of all the single elements 
*/


/* lets say we have an array and we want to destruct that array  */
const array = [1 , 2 , 3, 4, 5, 6];
const [a , b , c , ...rest] = array ; 

console.log(a , b , rest);


/* lets write a function where we have to order a pizza with main ingredient and optionals */
const orderPizza = function(mainIngerdient , ...optionals){
    console.log(`Your order has been placed with ${mainIngerdient} as Main ingredient `);
    console.log(`Plus with these sides ` , ...optionals)
}

orderPizza("Beef bacon" , 'tamato sauce' , 'Garlic sauce' , 'Kuchlak sauce')