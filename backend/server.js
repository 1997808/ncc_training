const express = require('express');
const app = express();
require('dotenv').config()
var bookRouter = require('./routes/book');
var { db } = require("./configs/db")

app.use('/', bookRouter);

app.listen(5000, function () {
  console.log('listening on 5000')
})