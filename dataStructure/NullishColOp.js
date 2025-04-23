/* what is nullish col operatorn in js and why do we need this  */

const numberofGuests = 0 ;

const checkGuest = numberofGuests || 20 ;
console.log(checkGuest) 
/* so the output here will be 10 ? but wait what is this correct No this should be zero but due to 
logical or shortciruiting the numberofGuests is considered as falsy value and 20 is assign to the checkGuest
this is not what we want we want to assign zero to the checkGuest because its zero  */

const usenullishhCol = numberofGuests ?? 10 ; 
/* the nullish col doesnt consider the falsy values it only  consider the null or undefined which in this case its not 
nll nor undefined its zero so zero will be assined  */


/* now lets discuss the logical assignnment operator  */

/* OR assignnment operator  */

const restOne = {
    name : "Pizza Experts",
    speciality : "All kinda Pizza's",
    Address : "Kuclak",
    noOfGuest : 0 

}
const restTwo = { 
    name : "Pasta Experts",
    speciality : "All kinda pasta's"
}

// restOne.Address = restOne.Address || "Quetta";
// restTwo.Address = restTwo.Address || "pishin";


/* working fine but let me introduce you to the logical Assignment operator */

restOne.Address ||=  "Quetta";
restTwo.Address ||= "pishin";

restOne.noOfGuest ??= 12 ; 
restTwo.noOfGuest ??= 15 ; 

console.log(restOne);
console.log(restTwo);

/* same we can do this for nllish col too like we can do the nullish col assignment operator */
