
const form = document.getElementById('entryform')
const namee = document.getElementById('name')
const roll = document.getElementById('roll')
const address = document.getElementById('address')
const transcript = document.querySelector('.transcript')
const output = document.querySelector('.section_output')
const showdata = document.querySelector('.show_data')
const btn_out = document.querySelector('.btn_output')
let counter = parseInt(localStorage.getItem('counter')) || 0

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(Number(roll.value) < 0){
        alert('Enter a valid roll number')
        reset()
        return
    }
    counter++
    localStorage.setItem('counter', counter)
    localStorage.setItem(`user${counter}`,JSON.stringify(val(namee.value, roll.value, address.value)))
    UpdateUI()

    reset()
})

btn_out.addEventListener('click', function () {
    showdata.innerHTML = ''  

    const count = parseInt(localStorage.getItem('counter')) || 0

    for (let j = 1; j <= count; j++) {
        let value = localStorage.getItem(`user${j}`)

        if (value) {
            let obj = JSON.parse(value)
            ShowOutput(obj, j)
        }
    }
})


function ShowOutput(obj, j){    
     showdata.innerHTML += `
        <div class = "border">
            <h2> User${j}</h2>
            ${description_list(obj)}
        </div>
    `
}

function description_list(obj){
    return`
    <dl class = 'details'>
        <dt> Name: </dt>
        <dd> ${obj.name_value}</dd>
        <dt> roll: </dt>
        <dd> ${obj.roll_value}</dd>
        <dt> address: </dt>
        <dd> ${obj.address_value}</dd>
    </dl>
    `
}
function UpdateUI(){
    transcript.innerHTML = `
    <h2>Transcript</h2>
    <dl class = 'details'>
        <dt> Name: </dt>
        <dd> ${namee.value}</dd>
        <dt> roll: </dt>
        <dd> ${roll.value}</dd>
        <dt> address: </dt>
        <dd> ${address.value}</dd>
    </dl>
    `
}
function reset(){
    namee.value = ''
    roll.value= ''
    address.value=''
}

function val(namee, roll, address){
    const object_user ={
    name_value : namee,
    roll_value : roll,
    address_value : address
    }
    return object_user
}



