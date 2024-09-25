const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./Routes/user.route.js')

app.use(cors())

mongoose.connect('mongodb://localhost:27017/smartCart')
mongoose.connection.on('connected', () => {
    console.log("database is connected successfully")
})


const PORT = 3000

app.use(express.json())
app.listen(PORT, () => {
    console.log(`backend server is listening on port ${process.env.PORT}`)
})


app.use('/api', userRoutes);