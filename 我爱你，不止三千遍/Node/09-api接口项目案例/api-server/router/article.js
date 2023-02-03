const express = require('express');
const multer = require('multer');
const path = require('path');
const article_handler = require('../router_handler/article');
const expressJoi = require('@escook/express-joi');
const { add_article_schema, article_list_schema, get_article_schema, edit_article_schema, delete_article_schema } = require('../schema/article');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 图片存放路径
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        // 图片重命名：uuid值.png
        cb(null, uuidv4() + '.png');
    }
});

var upload = multer({ storage: storage });

// 发布新文章
// upload.single() 局部生效中间件，用来解析 FormData 格式的表单数据
// 将文本类型的数据，解析并挂载到 req.body 属性中
// 将文件类型的数据，解析并挂载到 req.file 属性中
// 注意：在当前的路由中，先后使用了两个中间件：
//      先使用 multer 解析表单数据
//      再使用 expressJoi 对解析的表单数据进行验证
router.post('/add', upload.single('cover_img'), expressJoi(add_article_schema), article_handler.addArticle);

// 获取文章的列表数据
router.get('/list', expressJoi(article_list_schema), article_handler.articleList);

// 获取文章详情
router.get('/:id', expressJoi(get_article_schema), article_handler.getArticle);

// 根据 id 更新文章信息
router.post('/edit', upload.single('cover_img'), expressJoi(edit_article_schema), article_handler.editArticle);

// 获取文章详情
router.get('/delete/:id', expressJoi(delete_article_schema), article_handler.deleteArticle);

module.exports = router;
