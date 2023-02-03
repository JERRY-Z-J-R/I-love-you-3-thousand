const joi = require('joi');

// 分类名称、分类别名 校验规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();

// 添加分类校验规则对象
exports.add_cate_schema = {
    body: {
        name,
        alias
    }
};

// 分类 id 校验规则
const id = joi.number().integer().min(1).required();

// 根据 id 删除分类校验规则对象
exports.delete_cate_schema = {
    params: {
        id
    }
};

// 根据 id 获取分类校验规则对象
exports.get_cate_schema = {
    params: {
        id
    }
};

// 更新分类校验规则对象
exports.update_cate_schema = {
    body: {
        id,
        name,
        alias
    }
};


