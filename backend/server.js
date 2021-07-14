const express = require('express');
const app = express();
require('dotenv').config()
var itemRouter = require('./routes/item');
var { db } = require("./configs/db")

app.use('/', itemRouter);

app.listen(5000, function () {
  console.log('listening on 5000')
})