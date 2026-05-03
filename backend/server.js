import express from 'express'
import dotenv from 'dotenv'

import connectDB from './db.js'
import messageRouter from './routes/message.route.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use("/api", messageRouter)

connectDB()

app.get("/", (req, res) => {
    res.json("Witam")
})

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000")
})