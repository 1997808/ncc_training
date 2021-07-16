const express = require('express')
const app = express()
// var fs = require('fs');
// var path = require('path');
require('dotenv').config()
const itemRouter = require('./routes/item')
// var { db } = require("./configs/db")
const morgan = require('morgan')

app.use(morgan('dev'))
app.use('/', express.static(__dirname))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', itemRouter)

app.listen(5000, function () {
  console.log('listening on 5000')
})
