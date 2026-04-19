let theme = document.getElementById("theme-style")
const slider = document.getElementById("slider")
const hideOrShowBtn = document.getElementById("hideOrShowSection")

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

function hideOrShowSection() {
    if (hideOrShowBtn.nextElementSibling.style.display === "none") {
        hideOrShowBtn.nextElementSibling.style.display = "initial"
        hideOrShowBtn.textContent = "-"
    }
    else {
        hideOrShowBtn.nextElementSibling.style.display = "none"
        hideOrShowBtn.textContent = "+"
    }
}