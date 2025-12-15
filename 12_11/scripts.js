const Name=document.getElementById("name")
const roll=document.getElementById("roll")
const address=document.getElementById("address")
const submit_button=document.getElementById("btn_submit")
const form=document.getElementById("entryform")
const transcript=document.querySelector(".transcript")


//DOM events
form.addEventListener("submit",function(event){
    event.preventDefault()

if(Number(roll.value)<=0){
    alert("Roll number must be positive")
    return
}



    updateUI()
})
function updateUI(){
    transcript.innerHTML=
    `<h1>Student Transcript</h1>
    <dl class="details">
    <dt>Name:</dt>
    <dd>${Name.value}</dd>
    <dt>Roll:</dt>
    <dd>${roll.value}</dd>
    <dt>Address:</dt>
    <dd>${address.value}</dd>
    </dl>
    `
}
    localStorage.setItem("name",Name.value)
    localStorage.setItem("roll",roll.value)
    localStorage.setItem("address",address.value)

   /*
submit_button.addEventListener("click",function(event){

 
    const object={
        name:Name.value,
        roll:roll.value,
        address:address.value,
    }
    console.log(object)
     
})
      */
     //local storage is non volatile storage
     // session storage is volatile storage
     //data stored in local storage remains even after the browser is closed
     //data stored in session storage is cleared when the browser is closed                                     


 
