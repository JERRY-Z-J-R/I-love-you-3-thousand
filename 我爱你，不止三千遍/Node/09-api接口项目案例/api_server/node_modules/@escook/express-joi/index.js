const Joi = require('joi')

const expressJoi = function (schemas, options = { strict: false }) {
  // 自定义校验选项
  // strict 自定义属性，默认不开启严格模式，会过滤掉那些未定义的参数项
  //        如果用户指定了 strict 的值为 true，则开启严格模式，此时不会过滤掉那些未定义的参数项
  if (!options.strict) {
    // allowUnknown 允许提交未定义的参数项
    // stripUnknown 过滤掉那些未定义的参数项
    options = { allowUnknown: true, stripUnknown: true, ...options }
  }

  // 从 options 配置对象中，删除自定义的 strict 属性
  delete options.strict

  // TODO: 用户指定了什么 schema，就应该校验什么样的数据
  return function (req, res, next) {
    ;['body', 'query', 'params'].forEach(key => {
      // 如果当前循环的这一项 schema 没有提供，则不执行对应的校验
      if (!schemas[key]) return

      // 执行校验
      const schema = Joi.object(schemas[key])
      const { error, value } = schema.validate(req[key], options)

      if (error) {
        // 校验失败
        throw error
      } else {
        // 校验成功，把校验的结果重新赋值到 req 对应的 key 上
        req[key] = value
      }
    })

    // 校验通过
    next()
  }
}

module.exports = expressJoi
