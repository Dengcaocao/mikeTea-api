const express = require('express')
const router = express.Router()

const { register } = require('../contorller/user')

router.get('/', register)

module.exports = router
