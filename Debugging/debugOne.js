
/* debugging is the crucial part of the dev journey to understand this one properly lets 
solve one challange later we will introduce bug in that and will try to solve that with debugger */


// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
//  "Given an array of temperatures of one day, 
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.


const arrOftemp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const Min = function(array){
   let min = array[0];
   for (let index = 0; index < array.length; index++) {
    if (typeof array[index] !== 'number') continue ;
    if (array[index] < min ) {
        min = array[index];
    }
   }
   return min ;
}
const Max = function(array){
   let max = array[0];
   for (let index = 0; index < array.length; index++) {
     if(typeof array[index] !== 'number') continue ;
     if (array[index] > max) {
        max = array[index];
     }
    
   }
   return max ;
}
const calcAmplitude = function(arrOftemp){
    return Max(arrOftemp) - Min(arrOftemp);
}

console.log(calcAmplitude(arrOftemp))



// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers.
 At some point in building this app,
  you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const arrayOne = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const calcHoursWorked = function(arrayOne){
   

}


calcHoursWorked(arrayOne)