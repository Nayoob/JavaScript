/* what are difference types of loops in js the for of loop and for in loop 
what are these why are they differnee the for of loop is used to iterate over an arrya 
and the for in loop is used to iterate over object lets see */

const fruit = ['jabbar' , 'sufyan' , 'hamayoon' , 'jabbar'];
for (const element of fruit) {
    console.log(element)
}
/* the for of loop is used when we are iterating over each element of array  */

const user = {
    name : 'sufyan',
    email :"tycoon.sufyan@gmail.com",
    profession : "software dev.",
    Experience : {
       yearOne : "intern",
       yearTwo :"associate dev",
       yearThree :"Software dev",
       yearFour : "senior Enginner"
    },
    showExperience : function(){
       console.log(` Year One ${this.name} worked as ${this.Experience.yearOne}`)
       console.log(` Year two ${this.name} worked as ${this.Experience.yearTwo}`)
       console.log(` Year Three ${this.name} worked as ${this.Experience.yearThree}`)
       console.log(` Year four ${this.name} worked as ${this.Experience.yearFour}`)
    }
}

// user.showExperience();

for (const key in user) {
   if( key === "showExperience"){
    user[key]();
   }
   else if(key === 'Experience'){
      for (const keyin in user[key]) {
         console.log(`${keyin} : ${user[key][keyin]}`)
      }
   }else{
    console.log(`${key} : ${user[key]}`)
   }
   
}
/* lets say  i want to iterate over this object then i will use the for in loop instead of for
of loop  */