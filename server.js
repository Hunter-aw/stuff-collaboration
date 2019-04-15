const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const request = require('request')
const mongoose = require('mongoose')
const Expense = require("./Server/models/City")
const api = require('./Server/routes/api')

const app = express()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mongoose-stuff', { useNewUrlParser: true }, (err) => {
    console.log(`DB connected`);
})

app.use(express.static(path.join(__dirname, '/dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', api)


const PORT = 9090
app.listen(process.env.PORT || PORT, function () {
    console.log(`Running on port ${PORT}`)
})