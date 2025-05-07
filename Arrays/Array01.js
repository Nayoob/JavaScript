/* lets start from arrays how can we use them in real world projects 
starting from foreach method in javascript this method doesnt create new array nor it 
mutate the orginal array its just loop thorugh and call that function on each 
element of the array  */

const array = [122 , -222 , -432 , 345 , -342 , 500 ];

for (const index of array) {
    if (index > 0) {
        console.log(` this ammount:${index} has been deposited!`)
    }else{
        console.log(` this ammount:${Math.abs(index)} has been withdrawed`)
    }
}
/* lets say if we wan to ad indexed too ! to the numbe r */
for (const [index , value] of array.entries()) {
    if (index > 0) {
        console.log(` ${index + 1} ammount:${value} has been deposited!`)
    }else{
        console.log(` ${index + 1} ammount:${Math.abs(value)} has been withdrawed`)
    }
}

array.forEach(function(num){
    if(num > 0 ){
        console.log()
    }
})
