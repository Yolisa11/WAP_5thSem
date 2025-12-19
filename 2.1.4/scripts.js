const btn = document.getElementById("btn_click_me")
const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
const modal_container = document.querySelector(".modal_container")
const modal_overlay = document.querySelector(".modal_overlay")
const btn_modal = document.getElementById("modal")

btn.addEventListener("mouseover", function(){
    btn.style.backgroundColor =  "rgb(191, 138, 240)"
    btn.style.cursor = "pointer"
})

btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor = ""
    btn.style.cursor = ""
})

btn.addEventListener("click", function(){
    modal_container.style.display = "flex"
    modal_overlay.style.display = "block"
})

btn_modal.addEventListener("click", function(){
    modal_container.style.display = "none"
    modal_overlay.style.display = "none"
})

menu.addEventListener("click",function(){
        if(nav.style.display === "flex")
        {
            nav.style.display = "none"
        }
        else
        {
            nav.style.display = "flex"
        }
})
