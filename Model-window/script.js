'use-strict';

const Button = document.querySelectorAll('.button');
const modal = document.querySelector('.modal');
const closeModalWindow = document.querySelector('.closeButton');
const overlay = document.querySelector('.overlay');


for (let index = 0; index < Button.length; index++) {
    
    Button[index].addEventListener('click' , function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
       
    })    
}
closeModalWindow.addEventListener('click' , function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
})

document.addEventListener('keydown' , function(event){
    
    if(event.key === 'Escape'  && !modal.classList.contains('hidden')){
       modal.classList.add('hidden');
       overlay.classList.add('hidden')
    }
})

