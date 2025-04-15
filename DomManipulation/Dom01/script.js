'use-strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1) ;

const checkbutton = document.querySelector('.check');

checkbutton.addEventListener('click' , function(){

    const inputNumber  = document.querySelector('.number') ; 
    
    if (inputNumber === randomNumber) {
        document.querySelector('body').style.backgroundColor = green ;
    }
    else if(inputNumber > randomNumber){
        document.querySelector('.message').textContent = 'too high';
    }
    else if(inputNumber < randomNumber){
        document.querySelector('.message').textContent = 'too low'
    }
})