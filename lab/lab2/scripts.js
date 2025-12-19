const noteform = document.getElementById('container_add_note')
let counter=parseInt(localStorage.getItem('counter'))
noteform.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(counter)
    ++ counter;
    localStorage.setItem('counter',counter)
})
notes.addEventListener('click',function(e){
    if(e.target.classList.contains('btn_delete')){
        let container=e.target.parentElement
        let key=container.getAttribute('data-key')

        localStorage.removeItem(key)
        container.remove()
        console.log(key)

    }

    })
    notes.addEventListener('change',function(e){
    if(e.target.classList.contains('checkbox')){
        let container=e.target.parentElement
        let key=container.getAttribute('data-key')
        localStorage.setItem(`${key}_checked`,e.target.checked)
        console.log(key)

    }
        console.log("checkbox button clicked")
    })
    function addNoteToDOM(key, noteName) {
    notes.insertAdjacentHTML('beforeend', `
            <div class="container_new_note" data-key="${key}">
            <input class="checkbox" type="checkbox">  

            <div class="note_name_display">${noteName}</div>

            <button class="btn_delete">Delete</button>
            </div>

            <input type="text" class="note_description" placeholder="Description of note">
    `);
    }
