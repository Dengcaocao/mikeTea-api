const mongoose = require('mongoose')
const { dbUrl } = require('../config/config.default')

const user = require('./m-user')

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

// 监听数据库连接
db.on('open', () => {
  console.log('数据库连接成功')
})

// 监听数据库连接失败
db.on('error', () => {
  console.log('数据库连接失败!!!')
})

// 监听数据库关闭
db.on('close', () => {
  console.log('数据库已关闭')
})

// 监听数据库断开连接
db.on('disconnected', () =>{
  console.log('数据库已断开连接!!!')
})

module.exports = {
  userModel: mongoose.model('user', user)
}
