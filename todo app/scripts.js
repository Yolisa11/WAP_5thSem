const FormInput = document.getElementById('container_add_note') //retrive form
const NoteInput = document.getElementById('txt_add_note')
const notes= document.querySelector('.notes')



 //tackle cold start problem by setting counter to 0
 let counter = parseInt(localStorage.getItem('counter')) || 0 //the value in local storage is always string so it must be converted to int before processing

 //3.Retrive pending values from local storage and siplay in the UI
 for(j=1; j<=counter; j++) 
 {
    let key =  `user${j}` 
    let value= localStorage.getItem(key) // gets the value corresponding to the key and stores in the local variable named value
    if(value) //if value corresponding to key is not null then only it adds the key and value from local storage to UI
    //this prevents the display of the null in the UI if teh sequence is interrupted in the middle
    {   addNoteToDOM(key, value)
        const isChecked = localStorage.getItem(`user${j}_checked`) === 'true';
        const container = notes.querySelector(`[data-key="user${j}"]`);
        const checkbox = container.querySelector('.checkbox');
        checkbox.checked = isChecked;
    }
 }
 
 //1.wap to counter number of clicks on add button
 FormInput.addEventListener('submit',function(e) //on the even submit(pressing button) it executes the function
 {
    e.preventDefault(); //prevents the relead of the page on button click
    ++counter
    
    localStorage.setItem('counter',counter) //sets the value of key counter in local storage from counter variable
    //localStorage.setItem('KEY', 'Value')-->syntax of localstorage set item, both key and value are string
    

    console.log(counter)

//2.commit key,value of note to local storage (add notes to DOM)
    let key = `user${counter}`
    let value = NoteInput.value
    localStorage.setItem(key, value)
    //localStorage.setItem(`user${counter}`, NoteInput.value) //stores the note in local storage with key user1,user2,...
    //`` is used for string interpolation which means that the value of counter will be inserted in the string
    //`user${counter}`-->user1,user2,...

    addNoteToDOM(key, value)
    console.log(NoteInput.value)

 })

 //4.detect the seperate clicks of checkbox and delete
    //FOR DELETE BUTTON
 notes.addEventListener('click',function(e){ 
    if(e.target.classList.contains('btn_delete')) //e.target gives the tag of the element clicked
    {   console.log('Delete Clicked')

        //Delete the container on clicking delete and also delete data from local storage
        const container = e.target.parentElement //fetches the parent element of the selected element i.e button ,here
        let key = container.getAttribute('data-key')
        localStorage.removeItem(key)

        container.remove() //deletes the block of the removed container
    }

 })

     //FOR CHECKBOX 
 notes.addEventListener('change',function(e){//'change' as it is of type checkbox and it changes , click is only ffor button
    if(e.target.classList.contains('checkbox'))
    {   console.log('Checkbox clicked')
        const container = e.target.parentElement //fetches the parent element of the selected element i.e button ,here
        let key = container.getAttribute('data-key')

        localStorage.setItem(`${key}_checked`,e.target.checked) // `${key}_checked` here is the key for storing the checked status of the checkbox
        //`${key}` $ is used for string interpolation and {key} is the variable whose value is to be inserted in the string
        //e.target.checked returns true if checked else false
    }
 })



//Function to dynamically add to the HTML via JS
 function addNoteToDOM(key, noteName) { 
    notes.insertAdjacentHTML('beforeend', `
            <div class="container_new_note" data-key="${key}">
                <input class="checkbox" type="checkbox">  

                <div class="note_name_display">${noteName}</div>

                <button class="btn_delete">Delete</button>
            </div>
    `);
}