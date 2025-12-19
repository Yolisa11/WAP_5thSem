/* Condtionals */
   
if('5' === 5)   //strict equality
    console.log(true)
else
    console.log(false)
/* '5' is a string, 5 is an integer, so string != integer, hence false */

if('5' == 5)    //loose equality
    console.log(true)  
else 
    console.log(false) 
/* type coercion occurs here i.e
   '5' is a string which is converted to integer implicitly, so 5 == 5 which is true */

/* similarly 
    !== strict inequality
    != loose inequality
*/



