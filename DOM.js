const check = document.getElementById("button")
localStorage.setItem("checkDark = false")

function myFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
}

localStorage.getItem("checkDark")