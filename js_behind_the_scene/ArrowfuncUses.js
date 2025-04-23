
// const sufyan = {
//     Name : "yousufzai",
//     greet : function(){

//         console.log(this.Name);
//         const that = this;
//         const foo =  function(){

//         console.log(that.Name);

//         }    
//         foo();
//     }

// }

// sufyan.greet();



// "use strict";


const foo = function(){
    console.log(this);
    
}

foo();