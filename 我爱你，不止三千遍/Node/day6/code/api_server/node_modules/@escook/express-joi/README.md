## 安装
```bash
npm install @escook/express-joi
```

## 依赖
```bash
npm install @hapi/joi@17.1.0
```

## 导入
```js
const expressJoi = require('@escook/express-joi')
```

## 使用
```js
const express = require('express')
const app = express()
// 导入 Joi 来定义验证规则
const Joi = require('@hapi/joi')
// 1. 导入 @escook/express-joi
const expressJoi = require('@escook/express-joi')

// 解析 x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 2. 定义验证规则
const userSchema = {
  // 2.1 校验 req.body 中的数据
  body: {
    username: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string().pattern(/^[\S]{6,15}$/),
    repassword: Joi.ref('password')
  },
  // 2.2 校验 req.query 中的数据
  query: {
    name: Joi.string().alphanum().min(3).required(),
    age: Joi.number().integer().min(1).max(100).required()
  },
  // 2.3 校验 req.params 中的数据
  params: {
    id: Joi.number().integer().min(0).required()
  }
}

// 3. 在路由中通过 expressJoi(userSchema) 的方式
//    调用中间件进行参数验证
app.post('/adduser/:id', expressJoi(userSchema), function (req, res) {
  const body = req.body
  res.send(body)
})

// 4.1 错误级别中间件
app.use(function (err, req, res, next) {
  // 4.1 Joi 参数校验失败
  if (err instanceof Joi.ValidationError) {
    return res.send({
      status: 1,
      message: err.message
    })
  }
  // 4.2 未知错误
  res.send({
    status: 1,
    message: err.message
  })
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function () {
  console.log('Express server running at http://127.0.0.1:3001')
})
```

## 验证规则
更多的验证规则，请参考 [Joi](https://hapi.dev/family/joi/) 的官方文档。


## 开源协议
![ISC](https://img.shields.io/badge/License-ISC-blue)