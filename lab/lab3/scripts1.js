const countryList = document.getElementById('countryList')
const btn_select_country = document.getElementById('select_country')
const display_country = document.getElementById('display_country')

const user_name = document.getElementById('name')
const user_email = document.getElementById('email')
const user_password = document.getElementById('password')
const form = document.getElementById('login_form')
const upload = document.getElementById('upload')

let country_name

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
  .then(res => res.json())
  .then(data => {
   
    data.forEach(country => {
    const li = document.createElement('li')
      li.innerHTML = `<img src="${country.flags.png}"> ${country.name.common}`
      li.addEventListener('click', () => {
        country_name = country.name.common
        display_country.value = country_name
        countryList.style.display = 'none'
      });
      countryList.appendChild(li)
    });
})
  .catch(err => console.error(err))

btn_select_country.addEventListener('click',function(){
  if(countryList.style.display == 'none')
    countryList.style.display = 'flex'
  else
    countryList.style.display = 'none'
})

form.addEventListener('submit', function(e){
  e.preventDefault() //page reload prevented

  if(!user_name.value)
  {
    alert("User name is required")
    return
  }
  if(!user_email.value)
  {
    alert("User email is required")
    return
  }
  if(!user_password.value)
  {
    alert("User password is required")
    return
  }
  
  if(upload.files.length === 0)
  {
    alert("plz upload document")
    return
  }

  const file = upload.files[0];

  if (file.size > 2 * 1024 * 1024) {
    alert("File size must be less than or equal to 2 MB");
    upload.value = ""; // optional: reset file input
    return;
  }

  if(!display_country.value)
  {
    alert("country not selected")
    return
  }

  alert("form submitted")
})