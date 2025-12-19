/*2.1.1 includes selecting elements, updating UI, event listeners and form validation*/
//DOM selection
const Name = document.getElementById("name")
const roll = document.getElementById("roll")
const address = document.getElementById("address")

const form = document.getElementById("entryform")
const submit = document.getElementById("btn_submit")
const transcript = document.querySelector("aside")

//DOM events
form.addEventListener("submit", function(event){   //"submit" is a keyword i.e event name
    event.preventDefault()  //prevent reload
    //event is a user defined parameter, e can also be used
    
    if(Number(roll.value) < 0)  //explicit type casting in javascript, convert string to number
    {   // Roll no cannot be negative, part of form validation
        alert("Please enter valid roll no")
        return;
    }

    UpdateTranscript();
})


function UpdateTranscript(){    //Updating UI dynamically i.e in runtime
    transcript.innerHTML = `
        <h2> Transcript </h2>
        <dl class = "details">
            <dt>Name: </dt>
            <dd>${Name.value}</dd>  

            <dt>Roll: </dt>
            <dd>${roll.value}</dd>

            <dt>Address: </dt>
            <dd>${address.value}</dd>
        </dl>
    `
}