let arr=[1,2,3,4]
/* instead of assigning
let a=arr[0]
let b=arr[1]
let c=arr[2]
let d=arr[3]
*/
const[a,b,c,d]=arr  //array destructing
console.log(a,b,c,d)

let user_object={
    Name:"abcd",
    id:5
}
const {Name, id}=user_object //object destructing
/* const{x,y}=user_object // this is not allowed*/
console.log(Name)
console.log(id)
