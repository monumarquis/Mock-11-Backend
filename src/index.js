require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connect  = require('./config/db')
const app = express()
const User = require("./features/user/user.route")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/user",User)

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("This is Mock 11 Backend")
})

app.listen(PORT, async ()=>{
    await connect()
    console.log(`running port on http://localhost:${PORT}`)
})
