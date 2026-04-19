let theme = document.getElementById("theme-style")

function changeColor68148() {
    const href = theme.getAttribute("href")

    href === "./red.css" ? theme.setAttribute("href", "./green.css") : theme.setAttribute("href", "./red.css")
}