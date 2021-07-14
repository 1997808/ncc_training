const express = require('express');
const app = express();
// var fs = require('fs');
// var path = require('path');
require('dotenv').config()
var itemRouter = require('./routes/item');
var { db } = require("./configs/db")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', itemRouter);

app.listen(5000, function () {
  console.log('listening on 5000')
})