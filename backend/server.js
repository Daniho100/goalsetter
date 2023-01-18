const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const {errorhandler} = require('./middlewares/errorMid')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorhandler)

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))
