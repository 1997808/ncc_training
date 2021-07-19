const express = require('express')
const router = express.Router()
const typeRoute = require('./type')
const categoryRoute = require('./category')
const itemRoute = require('./item')

router.use(typeRoute, categoryRoute, itemRoute)

module.exports = router
