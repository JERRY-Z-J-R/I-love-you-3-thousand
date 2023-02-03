const joi = require('joi');

// 标题、分类id、内容、发布状态 验证规则
const title = joi.string().required();
const cate_id = joi.number().integer().min(1).required();
const content = joi.string().required().allow('');
const state = joi.string().valid('已发布', '草稿').required();

// 发布文章验证规则对象
exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state
    }
};

// 每页显示条数、页码值 验证规则
const pagesize = joi.number().integer().min(1).required();
const pagenum = joi.number().integer().min(1).required();

// 获取文章列表数据验证规则对象
exports.article_list_schema = {
    query: {
        pagesize,
        pagenum,
        cate_id: joi.number().integer().min(1),
        state: joi.string().valid('已发布', '草稿')
    }
};

// 文章分类 id 校验规则
const id = joi.number().integer().min(1).required();

// 根据 id 获取文章详情校验规则对象
exports.get_article_schema = {
    params: {
        id
    }
};

// 根据 id 更新文章信息验证规则对象
exports.edit_article_schema = {
    body: {
        id,
        title,
        cate_id,
        content,
        state
    }
};

// 根据 id 删除文章校验规则对象
exports.delete_article_schema = {
    params: {
        id
    }
};
