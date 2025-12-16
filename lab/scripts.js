/* Document Object Model 
Implementation of Ch2 topic 2.1.1, 2.1.2 and 2.1.3*/

/* Hints 

//Selecting Elements through DOM
const Name = document.getElementById("name")    //id selection
const btn_output = document.querySelector(".btn_output") //class selection

let i = parseInt(localStorage.getItem("counter")) || 0  //counter variable
Explanation:
    if counter exists then i = counter value
    else counter doesn't exist then i = 0

localStorage.setItem("counter", i)
Explanation:
    counter = value of i //in localstorage

localStorage.setItem(`user${i}`,JSON.stringify(user_object))
Explanation:
    `user${variable}`  
    if variable = 1 to 3 then,
    `user${variable}` =  user1, user2, user3

const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`))
Explanation:
    user_retrive is an object which stores the retrieved data/object from
    localstorage
    "j" is a variable,

const user_object = 
{
    data_name: Name.value,
    data_roll: Number(roll.value),
    data_address: address.value,
}
Explanation:
    used for storing the DOM selected values into object
*/

/*Note u can make ur own functions as well. consider this as hints */

//function implementations
function UpdateTranscript(obj){ //function to dynamically render UI in transcript section
    transcript.innerHTML = `
        <h2> Transcript </h2>
        ${description_list(obj)}
    `
}

function ShowOutput(obj, j){    //function to dynamically render UI in section_output section
     show_data.innerHTML += `
        <div class = "border">
            <h2> User${j}</h2>
            ${description_list(obj)}
        </div>
    `
}

//redundant code
function description_list(obj){
    return `
        <dl class = "details">
            <dt> Name: </dt>
            <dd> ${obj.data_name} </dd>

            <dt> Roll: </dt>
            <dd> ${obj.data_roll} </dd>

            <dt> Address: </dt>
            <dd> ${obj.data_address} </dd>
        </dl>
    `
}

