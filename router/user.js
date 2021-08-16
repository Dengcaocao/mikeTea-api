const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  next(123)
  // res.send('ok')
})

module.exports = router
