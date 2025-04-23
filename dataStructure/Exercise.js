/* lets say you want ot pass an argument to paramenters but you have array and you want first 
and 4rth argument to array  */
const checkPorduct = function(productName , productSize){

    const InverntoryPrducts = [
        {name : "T-shirt" , size : "small"},
        {name : "T-shirt" , size : "medium"},
        {name : "T-shirt" , size : "Large"},
        {name : "Jeans" , size : "small"},
        {name : "Jeans" , size : "medium"},
        {name : "Jeans" , size : "Large"},
        {name : "shoes" , size : "small"},
        {name : "shoes" , size : "medium"},
        {name : "shoes" , size : "Large"},

    ] ;
    for (let index = 0; index < InverntoryPrducts.length; index++) {
        if (InverntoryPrducts[index].name === productName && InverntoryPrducts[index].size === productSize) {
            return InverntoryPrducts[index];
        }  
    }
    return null ;
}
const result = checkPorduct("Jeans" , "Large");

if (result) {
    const {name , size} = checkPorduct("Jeans" , "Large");
    console.log(`${name} of ${size} size is availible in our inverntroy`);
}else{
    console.log('OOPS ! product doesnt exist in Shop ')
}

// console.log(checkPorduct("T-shirt" , "Large"));  this will return an object 

const student = {
    name: 'Ali',
    marks: {
      math: 90,
      science: 88
    }
};

const {name :StudnetName , marks : { math : Maths_Marks, science : Sceince_Marks }} = student;
if (Maths_Marks >= 50 && Sceince_Marks >= 50) {
    console.log(`Congrates 🎉 !  ${StudnetName} has been promoted to next Grade .\nHe scored ${Maths_Marks} in Maths. and ${Sceince_Marks} in science`)
}

/* lets mak this fun little project console based  */

const products = [
    { id: 1, name: 'Sneakers', price: 79.99, inStock: true, rating: 4.5 },
    { id: 2, name: 'T-Shirt', price: 25.50, inStock: false, rating: 4.2 },
    { id: 3, name: 'Backpack', price: 45.00, inStock: true, rating: 4.7 }
  ];


/* just filter those product which is availibe in inventory which has rating > 4.5
and its inStock is true else dont print  */

const filterFunc = function(products){
      for (const {  name , price , rating , inStock} of products) {
         if (rating >= 4.5 && inStock === true) {
            console.log(`${name} will cost you ${price}. \n 
            And its ${(inStock === true) ? "available" : "Not available"} in inventory`);                      
        }
      }
}

filterFunc(products);

for(const { name , price ,inStock} of products){
    console.log(`${name} will cost you ${price} 
    and its ${(inStock === true) ? "available" : "Not available"} in inventory`);  
}   

/* lets practive a bit about spread operator how excactly it work and why  */

const arrOne = [ 1 , 2, 3];
const arrCopy = [...arrOne];

arrCopy.push(4);
arr.shift(0);

console.log(arrOne)
console.log(arrCopy);

const ObjOne = {
    Name : " Jabbar ",
    profession :"Dev"
}

const ObjectCopy = {
    ...ObjOne ,
    address : 'pishin',
    operate:function(){
    console.log(`${this.Name} , currenlty working at ${this.address} as ${this.profession}`);
    
}};
ObjectCopy.operate();


/* we can do multplie things with spread operator like  */

const string = 'sufyan';
const arr = [...string]; /* it will make an array of char holding each char of string at each index  of array  */

console.log(arr)


/* the spread operator can also destructure array  */
const NewArray = [...string , 'jabbar' , 'sufyan'];
console.log(newArray)

/* difference between destructuring and spread spreading out values
 🚀 Difference in 1 line:
Spread: used to expand or copy elements.

Destructuring: used to pull out values and assign to variables. */


const sumOfNumbers = function(numOne , numtwo , numThree){
    return numOne + numtwo + numThree ;
}

const numberArray = [2 , 4, 5];
console.log(sumOfNumbers(...numberArray)); 