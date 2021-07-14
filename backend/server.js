const express = require('express');
const app = express();
const bodyParser = required('body-parser')
var fs = require('fs');
var path = require('path');
require('dotenv').config()
var itemRouter = require('./routes/item');
var { db } = require("./configs/db")
var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', itemRouter);

app.listen(5000, function () {
  console.log('listening on 5000')
})