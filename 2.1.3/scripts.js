const object_1 = 
{
    Name:"Sajag",
    Roll: 17,
    Post: "Assistant Lecturer",
    Address: "Bhaisepati",
}

const object_2 =
{
    Name:"Roxane",
    Roll: 15,
    Post: "Bideshi",
    Address: "Bidesh",
}


/*  localStorage.setItem("String datatype", "String datatype")

    the parameters to be passed must be converted to string

    here, object_1, object_2 are not string datatype, they are objects
    so, JSON.stringify(object) -> This converts the object to its string 
    counter part which is called JSON (Javascript Object Notation)

    For eg: 

    const object_1 = 
    {
        Name:"Sajag",
        Roll: 17,
        Post: "Assistant Lecturer",
        Address: "Bhaisepati",
    }

    in JSON would look like

    {
        "Name": "Sajag",
        "Roll": 17,
        "Post": "Assistant Lecturer",
        "Address": "Bhaisepati",
    }

    notice the keys/properties and values of object are converted to string, 
    numbers, boolean, null are not converted as they are implicitly converted
    when passing the JSON as parameter

    Note: Javascript doesn't automatically convert keys/properties to string 
    because it is expensive and not always what the developer wants
*/

//Local Storage is persistant and non volatile
localStorage.setItem("user1",JSON.stringify(object_1))  
localStorage.setItem("user2",JSON.stringify(object_2))

//sessionStorage is volatile 
sessionStorage.setItem("user1",JSON.stringify(object_1))
sessionStorage.setItem("user2",JSON.stringify(object_2))

let user_retrieve;
user_retrieve = JSON.parse(localStorage.getItem("user2")) //convert back to object

/*  since JSON i.e string representation of object is stored in localstorage
    we need to convert it back to object in order to perform operations given 
    below
*/

for(let key in user_retrieve)
{
    console.log(key," = ",user_retrieve[key])
    //here i retrieved the object and printed in console
    //this can be printed dynamically in html as well
}


/* Plz check outputs as well in console of the dev tools in your browser */




