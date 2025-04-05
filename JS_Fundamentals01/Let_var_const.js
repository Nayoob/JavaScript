

// let can be reinitialized  but cant be redeclared 
// let variable = " Sufyan khan "
// console.log(variable)    
// variable = "habib "
// console.log(variable)

// const roll_number = 3345;
// console.log(roll_number)
// roll_number = 445;   // error reassign is not possible here 
 
// console.log(roll_number)



// var name = "Muhammad sufyan"

// var name = "ishaq"  

// console.log(name) // output ishaq mean the var can be redeclared and re initialized too .


// lets dicuss the concept of block scope in let var and const  

const output = function(Random){
    console.log(Random)
    if (Random > 20 ){
        var another_Integer = 20
        var result = another_Integer * Random ;

    }
    
    console.log(result) // this one is working because its inside of the fucntion scope 
}
//console.log(result) // this line cause an error why ? becasue the var data type is fucntion scoped 
// its cant be acceseed outside of the fucntion 
output(30)



const output2 = function(Random){
    console.log(Random)
    if (Random > 20 ){
        let another_Integer = 20
        let result = another_Integer * Random ;
        console.log(result)  // this is working because its inside the scope of a function 

    }
    console.log(result) // this will cause an error 
    
}
 
output2(30)


