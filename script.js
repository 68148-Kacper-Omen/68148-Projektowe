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

// Walidacja formularza
const form = document.getElementById("messageForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("name")
    const surname = document.getElementById("surname")
    const email = document.getElementById("email")
    const message = document.getElementById("message")

    const nameError = document.getElementById("nameError")
    const surnameError = document.getElementById("surnameError")
    const emailError = document.getElementById("emailError")
    const messageError = document.getElementById("messageError")

    let isValid = true

    // Imię
    if (name.value.trim() === "") {
        nameError.textContent = "Imię jest wymagane"
        isValid = false
    }
    else if (/\d/.test(name.value)) {
        nameError.textContent = "Imię nie może zawierać cyfr"
        isValid = false
    }
    else {
        nameError.textContent = ""
    }  

    // Nazwisko
    if (surname.value.trim() === "") {
        surnameError.textContent = "Nazwisko jest wymagane"
        isValid = false
    }
    else if (/\d/.test(surname.value)) {
        surnameError.textContent = "Nazwisko nie może zawierać cyfr"
        isValid = false
    }
    else {
        surnameError.textContent = ""
    }

    // Email
    if (email.value.trim() === "") {
        emailError.textContent = "Email jest wymagany"
        isValid = false
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = "Podaj poprawny adres email"
        isValid = false
    }
    else {
        emailError.textContent = ""
    }

    // Wiadomość
    if (message.value.trim() === "") {
        messageError.textContent = "Wiadomość jest wymagana"
        isValid = false
    }
    else {
        messageError.textContent = ""
    }

    console.log(isValid)
    if (isValid) {
        alert("Wiadomość wysłana!")
        form.submit()
    }
})

// Pobieranie danych z data.json
const fetchData = async () => {
    try {
        const response = await fetch("./data.json")
        const data = await response.json()
        
        const skills = data.skills
        const projects = data.projects

        const skillsList = document.getElementById('skills-list')
        const projectsList = document.getElementById('projects-list')

        skills.forEach(skill => {
            const li = document.createElement("li")
            li.innerHTML = 
            `
            <h3>${skill.name}</h3>
            <img class="skill-image" src="${skill.imageSrc}" alt="${skill.name} logo">
            `

            skillsList.appendChild(li)
        })

        projects.forEach(project => {
            const li = document.createElement("li")
            li.innerHTML = 
            `
            <p>${project.description}</p>
            <p>Link do strony: <a href="${project.websiteUrl} target="_blank" rel="noopener noreferrer">${project.websiteUrl}</a></p>
            <p>Link do repozytorium na githubie: <a href="${project.githubUrl} target="_blank" rel="noopener noreferrer">${project.githubUrl}</a></p>
            `

            projectsList.appendChild(li)
        })
    } catch (error) {
        console.error("Błąd pobierania danych", error)
    }
}

fetchData()

// ZAD 7 localStorage
const addNoteBtn = document.getElementById("add-note")
const noteContent = document.getElementById("note-content")
const notesList = document.getElementById("notes-list")

const notes = JSON.parse(localStorage.getItem("notes")) || []

const renderNotes = () => {
    notesList.innerHTML = ""

    notes.forEach((note, index) => {
        const li = document.createElement("li")
        li.innerHTML = `<p>${note}</p>`

        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Usuń notatkę"
        deleteBtn.addEventListener("click", () => {
            deleteNote(index)
        })

        notesList.appendChild(li)
        li.appendChild(deleteBtn)
    })
}

addNoteBtn.addEventListener("click", () => {
    notes.push(noteContent.value.trim())
    localStorage.setItem("notes", JSON.stringify(notes))
    renderNotes()
})

const deleteNote = (index) => {
    notes.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notes))
    alert("Notatka usunięta")
    renderNotes()
}

renderNotes()