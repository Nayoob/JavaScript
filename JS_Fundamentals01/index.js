'Use-strict'
//  javascript ?  = > javascript is a high level object oreinted programming language ;
//  {you might be wondering why specifically javascript ?}
//  so let me ask you a Question what you want to build ?
//   1.Do you want to make beautifull user freindly Dynamic websites ? 
//   2.Do you want to make Cross platform Apps ? 
//   3.DO you want to dig in to Destop Apps ?  
//   4.Do you want to get your hand dirty in  games like candy box 2 , tower building ? 

// SO the good news is you can do all these under one tree and guess what ? this tree is {javascript} !!!
//  i think your wondering how to write this freakin thing names javascript dont worry i am here hehehehe !

console.log("Hey everyone this is our first line of js how is it ?")

// what to do with this line what the hell is going on here ? hahahahah ! 
// just run this code ! but how ?? 
// step 1. open command prompt 
// chnage the direcotry to your current folder 
// step 2 . run the command {node filename.js} 

// what the hell what are you talking about ? what is command prompt what is change directory
// Are you making fun of me  ??? from me >>> ohhh sorry mate its your first day poor you ! 
// do you see that arrow kinda thing in the right top yes i know you find that 
// what are you waiting for just click that !  {magic happend}

// so you told your vs code that i have written that line of code  print that on my console 
  
// what is variable and valve ?  
 let _name = "Sufyan"  
 
  // The name here is the variable of type string in which i am storing the valve " sufyan ";
  // the smallest piece of information stored known as valve in javascript ;

 // lets disscuss some of the rules we use while declaring varibales in javascript are you interested in knowing this ? 
 // rule 1 : when ever we declare the varaible the variable name should start from small letter {good practioce but not illegal}
 // rule 2 : while declaring the variable name no special character and number should be the part of the name except { _ , $},
 // rule 3: we cant declare the variable name using the special keyword 

//  like this  

let _function = " jhonas";  // this is not allowed to write 
let $new = 2002 ;

// but when we add  the dollor sign and the the _ ; its okay then ;
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height) ;
        return this.bmi ;
    }
}

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height) ;
        return this.bmi ;
    }
}

// mark.calcBMI();
// john.calcBMI();

if(john.calcBMI() > mark.calcBMI() ){
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
}else if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
}else{
     console.log(`Both have the same BMI (${mark.calcBMI()})`);
}

console.log(mark)
console.log(john)