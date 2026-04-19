let theme = document.getElementById("theme-style")
const slider = document.getElementById("slider")

function changeColor68148() {
    const href = theme.getAttribute("href")
    if (href === "./red.css") {
        theme.setAttribute("href", "./green.css")
        slider.style.transform = "translateX(30px)"
    }
    else {
        theme.setAttribute("href", "./red.css")
        slider.style.transform = "translateX(0)"
    }  
}