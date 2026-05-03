import express from 'express'
import dotenv from 'dotenv'

import connectDB from './db.js'

dotenv.config()

const app = express()

connectDB()

app.get("/", (req, res) => {
    res.json("Witam")
})

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000")
})