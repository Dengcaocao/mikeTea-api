const mongoose = require('mongoose')
const { dbUrl } = require('../config/config.default')

mongoose.connect(dbUrl)
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
