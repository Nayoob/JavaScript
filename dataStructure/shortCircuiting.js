/* short circuiting in javascirpt */

/* how short circiting work java script basically stop evaluating the further logical expression
as soon as it get the true or mayh be the truthy value lets check what does this mean  */


let resultOne = 12 || 0 ;
console.log(resultOne)
console.log(null || undefined);
console.log("" || "sufyan") /* js will stop evaluating as soon as it get the first truthy value or first ture */

console.log( null || undefined || 0 || false || 'jabbar' || 23);
/* so this was the concept of shortciruiting now hwo to use this in practical example lets see */

const resturant = {
    Name : "kashiiiz dine in",
    Location : "karachi",
    NumberOfCustomersSitiing :0 
}
const {NumberOfCustomersSitiing} = resturant;
const Guests = (NumberOfCustomersSitiing) ? NumberOfCustomersSitiing : 10 ;
console.log(Guests)
/* lets do the above exact stuff but with cleaner code */
const guest  = NumberOfCustomersSitiing || 14 ; 
console.log(guest)


/* short circuiting with AND logical operator  */
/* so the and shortciruiting work opposite to how or works it will break the evaluation process 
if it encounter false or falsy value it will stop evaluating the further operation lets give it a 
try  */

console.log( 0 && "sufyan");
console.log( 'jabbar khan ' && false);

console.log( 23 && "ashir" && undefined && 'c');




