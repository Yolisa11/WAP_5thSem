
/* jQuery style
 1. reduces and simplify DOM syntax
 2. direct access to css


*/

/* code 

const btn_click_me= document.getElementById('btn_click_me');
const nav= document.getElementById('nav')
const burger= document.getElementById('menu')
const modal_btn=document.querySelector('.modal_container')
const modal_close= document.getElementById('modal')
const inactive=document.querySelector('.modal_overlay') 
*/

    btn_click_me.addEventListener('mouseover',function(){
    btn_click_me.style.backgroundColor='blue';
})
 btn_click_me.addEventListener('mouseout',function(){
    btn_click_me.style.backgroundColor='';
 })
 // dynamis menus
 burger.addEventListener('click', function(){
    if(nav.style.display ==='flex') 
        nav.style.display='none'
    else
        nav.style.display='flex'
})
//  modal
btn_click_me.addEventListener('click', function(){
    modal_btn.style.display='flex'
    inactive.style.display='flex'
})
 modal_close.addEventListener('click', function(){
    modal_btn.style.display=''
    inactive.style.display=''
 })
    

// jQuery style
const $btn_click_me= $('#btn_click_me');
const $nav= $('nav')
const $burger= $('#menu')
const $modal_btn=document.querySelector('.modal_container')
const $modal_close= $('#modal')
const $inactive=document.querySelector('.modal_overlay')




let square = function(number) {
    
                return number**2
            }
            console.log(square(5))
let square = number =>number**2
                        console.log(square(5))

            
 
