window.localStorage;

const check = document.getElementById("button")
localStorage.setItem("checkDark", false)

function myFunction() 
{
    var element = document.body;
    element.classList.toggle("darkMode");
    if("darkMode", true)
    {
        localStorage.setItem.toggle("checkDark");
    }
}

addEventListener("DOMContentLoaded", (myFunction))

localStorage.getItem("checkDark")