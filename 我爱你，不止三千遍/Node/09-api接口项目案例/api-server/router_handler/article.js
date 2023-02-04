const db = require('../db/connect');
const path = require('path');
const fs = require('fs');

// 发布新文章处理函数
exports.addArticle = (req, res) => {
    // console.log(req.body); // 文本类型的数据
    // console.log('-----------------------');
    // console.log(req.file); // 文件类型的数据

    // 判断是否上传了文章封面
    if (!req.file || req.file.fieldname !== 'cover_img') {
        return res.fastSend('文章封面是必选参数！');
    }

    const articleInfo = {
        // 标题、内容、状态、分类id
        ...req.body,
        // 文章封面在服务器端的存放路径
        cover_img: req.file.filename,
        // 文章发布时间
        pub_date: new Date(),
        // 文章作者的 id
        author_id: req.user.id
    };

    // 增加文章
    const sql = 'INSERT INTO ev_articles SET ?';
    db.query(sql, articleInfo, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.affectedRows !== 1) {
            return res.fastSend('发布文章异常，请稍后再试！');
        }

        res.fastSend('发布文章成功！', 'ok');
    });
};

// 获取文章的列表数据处理函数
exports.articleList = (req, res) => {
    // 判断是否指定了文章分类
    if (req.query.cate_id) {
        // 指定了文章分类
        let artcate = {};
        let flag = true;
        // 查询文章分类是否可用
        const sql = 'SELECT * FROM ev_article_cate WHERE id=?';
        db.query(sql, req.query.cate_id, (err, results) => {
            if (err) {
                flag = false;
                return res.fastSend(err);
            }
            if (results.length === 0) {
                flag = false;
                return res.fastSend('文章分类不存在！');
            }
            if (results.length === 1) {
                if (results[0].is_delete === 1) {
                    flag = false;
                    return res.fastSend('文章分类不可用！');
                }
                artcate = results[0];
            } else {
                flag = false;
                return res.fastSend('处理异常，请稍后再试！');
            }
        });

        if (!flag) {
            return;
        }

        // 判断是否指定了文章发布状态
        if (req.query.state) {
            // 指定了文章发布状态
            if (req.query.state === '已发布') {
                // 分页查询目标类别已发布文章
                const sql1 = 'SELECT * FROM ev_articles WHERE cate_id=? AND state="已发布" ORDER BY pub_date ASC LIMIT ?,?';
                // 查询目标类别已发布文章总数
                const sql2 = 'SELECT COUNT(*) AS total FROM ev_articles WHERE cate_id=? AND state="已发布"';
                db.query(sql1, [req.query.cate_id, (req.query.pagenum - 1) * req.query.pagesize, req.query.pagesize], (err, results) => {
                    if (err) {
                        return res.fastSend(err);
                    }
                    const __results = results;
                    db.query(sql2, req.query.cate_id, (err, results) => {
                        if (err) {
                            return res.fastSend(err);
                        }
                        const data = [];
                        for (let i = 0; i < __results.length; i++) {
                            data.push({
                                id: __results[i].id,
                                title: __results[i].title,
                                pub_date: __results[i].pub_date,
                                state: __results[i].state,
                                cate_name: artcate.name,
                                cate_alias: artcate.alias
                            });
                        }
                        return res.send({
                            status: 'ok',
                            message: '获取文章列表成功！',
                            total: results[0].total,
                            data
                        });
                    });
                });
            } else if (req.query.state === '草稿') {
                // 分页查询目标类别草稿文章
                const sql1 = 'SELECT * FROM ev_articles WHERE cate_id=? AND state="草稿" ORDER BY pub_date ASC LIMIT ?,?';
                // 查询目标类别已发布文章总数
                const sql2 = 'SELECT COUNT(*) AS total FROM ev_articles WHERE cate_id=? AND state="草稿"';
                db.query(sql1, [req.query.cate_id, (req.query.pagenum - 1) * req.query.pagesize, req.query.pagesize], (err, results) => {
                    if (err) {
                        return res.fastSend(err);
                    }
                    const __results = results;
                    db.query(sql2, req.query.cate_id, (err, results) => {
                        if (err) {
                            return res.fastSend(err);
                        }
                        const data = [];
                        for (let i = 0; i < __results.length; i++) {
                            data.push({
                                id: __results[i].id,
                                title: __results[i].title,
                                pub_date: __results[i].pub_date,
                                state: __results[i].state,
                                cate_name: artcate.name,
                                cate_alias: artcate.alias
                            });
                        }
                        return res.send({
                            status: 'ok',
                            message: '获取文章列表成功！',
                            total: results[0].total,
                            data
                        });
                    });
                });
            } else {
                return res.fastSend('文章发布状态错误，请修改后重试！');
            }
        } else {
            // 未指定文章发布状态
            // 分页查询目标类别文章
            const sql1 = 'SELECT * FROM ev_articles WHERE cate_id=? ORDER BY pub_date ASC LIMIT ?,?';
            const sql2 = 'SELECT COUNT(*) AS total FROM ev_articles WHERE cate_id=?';
            db.query(sql1, [req.query.cate_id, (req.query.pagenum - 1) * req.query.pagesize, req.query.pagesize], (err, results) => {
                if (err) {
                    return res.fastSend(err);
                }
                const __results = results;
                db.query(sql2, req.query.cate_id, (err, results) => {
                    if (err) {
                        return res.fastSend(err);
                    }
                    const data = [];
                    for (let i = 0; i < __results.length; i++) {
                        data.push({
                            id: __results[i].id,
                            title: __results[i].title,
                            pub_date: __results[i].pub_date,
                            state: __results[i].state,
                            cate_name: artcate.name,
                            cate_alias: artcate.alias
                        });
                    }
                    return res.send({
                        status: 'ok',
                        message: '获取文章列表成功！',
                        total: results[0].total,
                        data
                    });
                });
            });
        }
    } else {
        // 未指定文章分类
        // 判断是否指定了文章发布状态
        if (req.query.state) {
            // 指定了文章发布状态
            if (req.query.state === '已发布') {
                const sql1 = 'SELECT * FROM ev_articles WHERE state="已发布" ORDER BY pub_date ASC LIMIT ?,?';
                const sql2 = 'SELECT COUNT(*) AS total FROM ev_articles WHERE state="已发布"';
                db.query(sql1, [(req.query.pagenum - 1) * req.query.pagesize, req.query.pagesize], (err, results) => {
                    if (err) {
                        return res.fastSend(err);
                    }
                    const __results = results;
                    db.query(sql2, req.query.cate_id, (err, results) => {
                        if (err) {
                            return res.fastSend(err);
                        }
                        const data = [];
                        for (let i = 0; i < __results.length; i++) {
                            data.push({
                                id: __results[i].id,
                                title: __results[i].title,
                                pub_date: __results[i].pub_date,
                                state: __results[i].state
                            });
                        }
                        return res.send({
                            status: 'ok',
                            message: '获取文章列表成功！',
                            total: results[0].total,
                            data
                        });
                    });
                });
            } else if (req.query.state === '草稿') {
                const sql1 = 'SELECT * FROM ev_articles WHERE state="草稿" ORDER BY pub_date ASC LIMIT ?,?';
                const sql2 = 'SELECT COUNT(*) AS total FROM ev_articles WHERE state="草稿"';
                db.query(sql1, [(req.query.pagenum - 1) * req.query.pagesize, req.query.pagesize], (err, results) => {
                    if (err) {
                        return res.fastSend(err);
                    }
                    const __results = results;
                    db.query(sql2, req.query.cate_id, (err, results) => {
                        if (err) {
                            return res.fastSend(err);
                        }
                        const data = [];
                        for (let i = 0; i < __results.length; i++) {
                            data.push({
                                id: __results[i].id,
                                title: __results[i].title,
                                pub_date: __results[i].pub_date,
                                state: __results[i].state
                            });
                        }
                        return res.send({
                            status: 'ok',
                            message: '获取文章列表成功！',
                            total: results[0].total,
                            data
                        });
                    });
                });
            } else {
                return res.fastSend('文章发布状态错误，请修改后重试！');
            }
        } else {
            // 未指定文章发布状态
            const sql1 = 'SELECT * FROM ev_articles ORDER BY pub_date ASC LIMIT ?,?';
            const sql2 = 'SELECT COUNT(*) AS total FROM ev_articles';
            db.query(sql1, [(req.query.pagenum - 1) * req.query.pagesize, req.query.pagesize], (err, results) => {
                if (err) {
                    return res.fastSend(err);
                }
                const __results = results;
                db.query(sql2, req.query.cate_id, (err, results) => {
                    if (err) {
                        return res.fastSend(err);
                    }
                    const data = [];
                    for (let i = 0; i < __results.length; i++) {
                        data.push({
                            id: __results[i].id,
                            title: __results[i].title,
                            pub_date: __results[i].pub_date,
                            state: __results[i].state
                        });
                    }
                    return res.send({
                        status: 'ok',
                        message: '获取文章列表成功！',
                        total: results[0].total,
                        data
                    });
                });
            });
        }
    }
};

// 根据 id 获取文章详情处理函数
exports.getArticle = (req, res) => {
    const sql = 'SELECT * FROM ev_articles WHERE id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.length === 0) {
            return res.fastSend('文章不存在！');
        }
        if (results.length !== 1) {
            return res.fastSend('处理异常，请稍后再试！');
        }

        return res.send({
            status: 'ok',
            message: '获取文章详情成功！',
            data: {
                id: results[0].id,
                title: results[0].title,
                content: results[0].content,
                cover_img: '/uploads/' + results[0].cover_img,
                pub_date: results[0].pub_date,
                state: results[0].state,
                is_delete: results[0].is_delete,
                cate_id: results[0].cate_id,
                author_id: results[0].author_id
            }
        });
    });
};

// 根据 id 更新文章信息处理函数
exports.editArticle = (req, res) => {
    // 根据 id 获取原图片数据
    const sql = 'SELECT cover_img FROM ev_articles WHERE id=?';
    db.query(sql, req.body.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.length === 0) {
            return res.fastSend('文章不存在！');
        }
        if (results.length !== 1) {
            return res.fastSend('处理异常，请稍后再试！');
        }

        // 是否处理图片
        let flag = false;
        let oldImg = '';
        // 判断是否上传了文章封面
        if (req.file && req.file.fieldname === 'cover_img') {
            flag = true;
            // 保存原图片文件名
            oldImg = results[0].cover_img;
        }

        // 更新文章信息
        const sql = 'UPDATE ev_articles SET ? WHERE id=?';
        if (flag === true) {
            const articleInfo = {
                // 标题、内容、状态、分类id
                ...req.body,
                // 文章封面在服务器端的存放路径
                cover_img: req.file.filename,
                // 文章发布时间
                pub_date: new Date()
            };
            db.query(sql, [articleInfo, req.body.id], (err, results) => {
                if (err) {
                    // 原则上，此处应该把新存入的图片删除……
                    return res.fastSend(err);
                }
                if (results.affectedRows !== 1) {
                    return res.fastSend('处理异常，请稍后再试！----');
                }
                // 删除原图片
                const filepath = path.join(__dirname, '../uploads', oldImg);
                fs.unlink(filepath, err => {
                    if (err) {
                        return res.fastSend('处理异常，请稍后再试！');
                    }
                    return res.fastSend('文章更新成功！', 'ok');
                });
            });
        } else {
            const articleInfo = {
                // 标题、内容、状态、分类id
                ...req.body,
                // 文章发布时间
                pub_date: new Date()
            };
            db.query(sql, [articleInfo, req.body.id], (err, results) => {
                if (err) {
                    return res.fastSend(err);
                }
                if (results.affectedRows !== 1) {
                    return res.fastSend('文章已更新，但图片清理失败！');
                }
                return res.fastSend('文章更新成功！', 'ok');
            });
        }
    });
};

// 根据 id 删除文章数据处理函数
exports.deleteArticle = (req, res) => {
    // 更新文章分类 is_delete 字段
    const sql = 'UPDATE ev_articles SET is_delete=1 WHERE id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.affectedRows === 0) {
            return res.fastSend('文章不存在！');
        } else if (results.affectedRows !== 1) {
            return res.fastSend('删除文章异常，请稍后再试！');
        }

        res.fastSend('删除文章成功！', 'ok');
    });
};
