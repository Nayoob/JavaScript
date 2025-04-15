'use-strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1 ; 
let score = 20 ;
let highScore = 0 ;

const printfunction = function(stringtoprint){
    document.querySelector('.message').textContent = stringtoprint;
}

console.log(secretNumber)

document.querySelector('.check').addEventListener('click' , function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess) // it will always be string so make sure to do the type conversion 

    if (!guess) {
        printfunction('😢 No input Enter valid number !!!')
    }
    else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347' ;
        document.querySelector('.number').textContent = secretNumber;
        printfunction('🎉 Hurrah you won !!! ');
        if (score > highScore ) {
            highScore = score ;
            document.querySelector('.highscore').textContent = highScore ; 
        }
 
    }
    else if(guess > secretNumber){
        printfunction('📈 too high !!! ');
        if (score > 1) {
            score = score  - 1 ; 
            document.querySelector('.score').textContent = score;
        }else{
            printfunction('😢 you lost the game');
        }

    }
    else if(guess < secretNumber){
        printfunction('📉 too low !!! ');
        if (score > 1) {
            score = score  - 1 ; 
            document.querySelector('.score').textContent = score;
           
        }else{

            document.querySelector('body').style.backgroundColor = 'red';
            printfunction('😢 you lost the game');

        }
    }
})
// play again event handler 

document.querySelector('.again').addEventListener('click' , function(){
    secretNumber = Math.trunc(Math.random() * 20 ) +  1;
    score = 20 ;

    printfunction('Start guessing ...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?'

})