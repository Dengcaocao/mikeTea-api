const mongoose = require('mongoose')
const baseModel = require('./m-default')

const user = mongoose.Schema({
  telephone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: null
  },
  // TODO 集合关联
  member: {
    type: String,
    default: 4
  },
  // 描述
  bio: {
    type: String,
    default: ''
  },
  ...baseModel
})

module.exports = user
