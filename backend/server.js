import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.json("Witam")
})

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000")
})