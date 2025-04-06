/* arrays and objects are two most important data structure that we use in javascript 
objects are basically used for storing multiple related data at one place but what is the difference
between array and objects array can hold that data too  */

const arrr = ['Sufyan' , 'khan' , 'developer' , 'currentyear - birthyear' , ['hamayoon' , 'jabbar' ,' zia']];

/* i have stored all the related data about me in array but the issye here is i cant access this data 
any other way except indexing  */

console.log(arrr);


/* but ther is one way we can actually store these values with names and literally access each of the attribute 
about some one or me by that name  */

const obj = {
    FirstName : 'Sufan',
    LastName : 'Khan',
    age : 'currrentYear - birthYear',
    Contact : '03337132996',
    friends : ['jabbar' , 'Narrray' , 'waqar']
}

console.log(obj.Contact)

/* there are two ways to access info from an object (.) notation and bracket notation  */

console.log(obj['FirstName']);

// but which one to use to access the data from the object Question : lets understand the differece first 
// when we use . notation we haveto use the exact same attribute name no expression 

const key = 'Name';
console.log(obj['First' +  key]) // here in bracket notation i have just evalutated the expression to get the 
// output and this is not possibel with . notation 
console.log(`His name is ${obj['First' + key]} ${obj['Last' + key]}`); // this thing is not possible with 
// .notation 

const check = prompt("what do you want to know about me ? choose One FirstName , LastName , age , Contact , freinds");

console.log(obj.check); // this wont work the .notation will thoufh undefined 

console.log(obj[check]); 

obj.Addrss = "Quetta";

console.log(obj)

console.log(`${obj.FirstName} has ${obj.friends.length} friends, One of them is ${obj.friends[0]}`)

const objOne = {
    FirstName : 'Sufan',
    LastName : 'Khan',
    birthyear : 2002 ,
    Address : 'Quetta',
    ismarried : false ,
    Contact : '03337132996',
    friends : ['jabbar' , 'Narrray' , 'waqar'],
    calAge : function(CurrenYear){
        this.age = CurrenYear - this.birthyear
        return this.age;
    },
    getObjSummary : function(){
       return `${objOne.FirstName} is ${objOne.age} old dev , He lives in ${objOne.Address}, His best freind is ${objOne.friends[0]} , and he is ${this.ismarried ? 'Married' : 'Single'}`;
    }
}
console.log(objOne.calAge(2025));
console.log(objOne.getObjSummary());


console.log(objOne.age);



/* Write your code below. Good luck! 🙂 the challange  */

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

mark.calcBMI();
john.calcBMI();

if(john.bmi > mark.bmi ){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
}else if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
}else{
     console.log(`Both have the same BMI (${mark.bmi})`);
}





/* this one work fine too but here if we look closely we are voilating one rule dry dont repeat your
self i ma calling that calcBMI again and again which is computing BMI with each call not optimized so 
we will calculate BMI once and use in all of the program  */

const markOne = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height) ;
        return this.bmi ;
    }
}

const johnOne = {
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

if(johnOne.calcBMI() > markOne.calcBMI() ){
    console.log(`${johnOne.fullName}'s BMI (${johnOne.calcBMI()}) is higher than ${markOne.fullName}'s (${markOne.calcBMI()})`)
}else if(markOne.calcBMI() > johnOne.calcBMI()){
    console.log(`${markOne.fullName}'s BMI (${markOne.calcBMI()}) is higher than ${johnOne.fullName}'s (${johnOne.calcBMI()})`)
}else{
     console.log(`Both have the same BMI (${mamarkOnerk.calcBMI()})`);
}

console.log(markOne)
console.log(johnOne)