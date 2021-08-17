const express = require('express')
const router = express.Router()

const { register } = require('../contorller/user')

router.post('/register', register)

module.exports = router
