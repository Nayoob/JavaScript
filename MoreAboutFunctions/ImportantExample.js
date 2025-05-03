/* lets say i am working on flight booking soft. */
const changeName = function(CustomerfirstAndLastName){
    const convertToArray = CustomerfirstAndLastName.split(' ');
    let changedName = [];
    for (const index of convertToArray) {
        if(index.length > 0){
            changedName.push(index[0].toUpperCase() + index.slice(1))           
        }  
    }
    return `Mr ${changedName.join(' ')}`;
}

const flight = {
    airline : 'Pakistan international Airlines',
    itaCode : '0943',
    reserveTicket : [],
    booking : function(passengerName , flightNum){
        console.log(`${passengerName} has booked flight at ${flightNum}${this.itaCode} 
        On ${this.airline} `)
        this.reserveTicket.push({flightNumber : `${flightNum}${this.itaCode}` , Name : passengerName})
    }
}

flight.booking(changeName('sufyan khan') , 'PIA')
flight.booking(changeName('jabbar khan') , 'PIA')
flight.booking(changeName('narrray khan') , 'PIA')

console.log(flight.reserveTicket)


/* now lets say we have another ariline with same booking systems  */

const flightOne = {
    airline : 'Serene international Airlines',
    itaCode : '0943',
    reserveTicket : [] 

    /* let say i want the abov bookng fucniton here but copign this will be nonsese 
    because its voilating the principle of dont repeat yorself  */
}

const bookingFunction = flight.booking;

// flightOne.bookingFunction('zia ullha' , 'SRN'); 

/* so when we do this kinda stuff at lines 43 44 we detach function from objects thats why it loosed the refrence of the object now 
itspinting to nothing and will thourgh undegined when called in strick mode so instead of doing this lets do some thing usefull and use 
call() method  */

bookingFunction.call(flightOne , changeName('ziaullah khan') , 'SRN')
bookingFunction.call(flightOne , changeName('habib khan') , 'SRN')

/* what we have done here is we used the call method perfectly the flight one is the refernce of this Keyword and other two are arguments 
to the function  */
console.log(flight)
console.log(flightOne)