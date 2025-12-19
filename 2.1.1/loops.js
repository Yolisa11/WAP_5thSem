let i = 0
let arr = [2,5,1,3,4]

//fixed value such as 0, [2,5,1,3,4], mango, banana are called literals in javascript 
//identifiers identify a variable, function or object. For eg: in this code i, arr, fruits, students are all identifiers

let student =   //here student is a variable referencing to an object 
{
    name: "Ram",
    id: 5,
    address: "Lalitpur",
}
//here name, id, address are called keys/properties and Ram,5, Lalitpur are called values

for(i = 0; i < arr.length; i++) //for loop
{
    console.log(arr[i])
}

i = 0
console.log('\n')

while(i < arr.length)   //while loop
{
    console.log(arr[i])
    ++i;
}

i = 0
console.log('\n')

do  //do while loop
{
    console.log(arr[i])
    ++i
}while(i != arr.length)

i = 0
console.log('\n')

let fruits = ['mango', 'banana', 'orange', 'apple']
for(let item of fruits) //for of loop
{
    console.log(item)
}

console.log('\n')

for(let key in student) //for in loop
{
    console.log(key," = ",student[key])
}

console.log('\n')
