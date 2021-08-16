const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const handleError = require('./middleware/handle-error')

const app = express()

// 获取表单请求体
app.use(express.json())
app.use(express.urlencoded())

// 日志打印
app.use(morgan('dev'))

// 解决跨域
app.use(cors())

// 路由
app.use('/api', router)

// 错误处理
app.use(handleError())

app.listen(4180, () => {
  console.log('server running at localhost:4180')
})
