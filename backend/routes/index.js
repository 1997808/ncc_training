const express = require('express')
const router = express.Router()
const typeRoute = require('./type')
const categoryRoute = require('./category')
const itemRoute = require('./item')
const roleRoute = require('./role')
const userRoute = require('./user')

router.use(typeRoute, categoryRoute, itemRoute, roleRoute, userRoute)

module.exports = router
