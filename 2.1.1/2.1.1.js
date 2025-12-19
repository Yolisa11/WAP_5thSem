/* Data types, variables, control structure, functions in javascript */

/*---------------------------------------Data types-----------------------------------*/
/*Primitive Data types*/
let number = 26 
let string = "This is a string"
let boolean = true
let city //undefined
city = "Kathmandu"
let value = 26.76

/*Non-primitive Data types*/
let object = // object variable
{ 
    data1: "name", //string, data member
    data2: 25, //integer, data member
    method(){ //method, member function
        console.log("This is an object")
    }
}

object.method() //call method

let arr = [1,2,3,4,5]
console.log("This is an array " + arr) //concatenate, array printed as a string
console.log("This is an array ",arr) //array printed as an array

let arr2 = [1, "string", true, 1.345, [1,2]]
console.log("Heterogenous datatype = ", arr2)

let matrix = [  //2D array
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]
console.log(matrix[1][1])

let arr3 = Array(5).fill(1)
console.log(arr3)

/**************************************Variables********************************************* */

let variable        //variable
const pi = 3.1415   //constant
var k = 3 //outdated

//difference between var and let

if(true)
{
    let a = 5
}
// console.log(a)  //denied, because "let" is function scoped 

if(true)
{
    var b = 6
}
console.log(b)  //6 is printed, because "let" is not function scoped


/**************************************functions********************************************* */

f1()
function f1(){  //function declaration
    console.log("hoisted function")
}

//f2() //denied because f2() cannot be hoisted
const f2 = function(){  //function expression
    console.log("unhoisted function")
}