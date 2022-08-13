const Joi = require('@hapi/joi')

const expressJoi = function (schemas) {
  // TODO: 用户指定了什么 schema，就应该校验什么样的数据
  return function (req, res, next) {
    ['body', 'query', 'params'].forEach(key => {
      // 如果当前循环的这一项 schema 没有提供，则不执行对应的校验
      if (!schemas[key]) return
      // 执行校验
      const schema = Joi.object(schemas[key])
      const { error } = schema.validate(req[key])
      if (error) {
        throw error
      }
    })

    next()
  }
}

module.exports = expressJoi