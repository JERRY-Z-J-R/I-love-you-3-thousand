const db = require('../db/connect');

// 获取文章分类列表数据处理函数
exports.getArticleCates = (req, res) => {
    // 根据分类的状态，获取所有未被删除的分类列表数据
    // is_delete 为 0 表示没有被标记为删除的数据
    const sql = 'SELECT * FROM ev_article_cate WHERE is_delete=0 ORDER BY id ASC';
    db.query(sql, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }

        res.send({
            status: 'ok',
            message: '获取文章分类列表成功！',
            data: results
        });
    });
};

// 新增文章分类处理函数
exports.addArticleCates = (req, res) => {
    // 查询 分类名称 与 分类别名 是否被占用
    const sql = 'SELECT * FROM ev_article_cate WHERE name=? OR alias=?';
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) {
            return res.fastSend(err);
        }

        if (results.length === 2) {
            return res.fastSend('分类名称与别名均被占用，请更换后重试！');
        }
        if (results.length === 1 && results[0].name === req.body.name) {
            return res.fastSend('分类名称被占用，请更换后重试！');
        }
        if (results.length === 1 && results[0].alias === req.body.alias) {
            return res.fastSend('分类别名被占用，请更换后重试！');
        }

        // 新增文章分类
        const sql = 'INSERT INTO ev_article_cate SET ?';
        db.query(sql, req.body, (err, results) => {
            if (err) {
                return res.fastSend(err);
            }
            if (results.affectedRows !== 1) {
                return res.fastSend('新增文章分类异常，请稍后再试！');
            }

            res.fastSend('新增文章分类成功！', 'ok');
        });
    });
};

// 根据 id 删除文章分类处理函数
exports.deleteCateById = (req, res) => {
    // 更新文章分类 is_delete 字段
    const sql = 'UPDATE ev_article_cate SET is_delete=1 WHERE id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.affectedRows === 0) {
            return res.fastSend('文章分类不存在！');
        } else if (results.affectedRows !== 1) {
            return res.fastSend('删除文章分类异常，请稍后再试！');
        }

        res.fastSend('删除文章分类成功！', 'ok');
    });
};

// 根据 id 获取文章分类处理函数
exports.getArticleById = (req, res) => {
    // 查询文章分类数据
    const sql = 'SELECT * FROM ev_article_cate WHERE id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.length === 0) {
            return res.fastSend('文章分类不存在！');
        } else if (results.length !== 1) {
            return res.fastSend('获取文章分类数据异常，请稍后再试！');
        }

        res.send({
            status: 'ok',
            message: '获取文章分类数据成功！',
            data: results[0]
        });
    });
};

// 根据 id 更新文章分类处理函数
exports.updateCateById = (req, res) => {
    // 查询 分类名称 与 分类别名 是否被占用
    const sql = 'SELECT * FROM ev_article_cate WHERE id<>? AND (name=? OR alias=?)';
    db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) {
            return res.fastSend(err);
        }
        if (results.length === 2) {
            return res.fastSend('分类名称与别名被占用，请更换后重试！');
        }
        if (results.length === 1 && results[0].name === req.body.name) {
            return res.fastSend('分类名称被占用，请更换后重试！');
        }
        if (results.length === 1 && results[0].alias === req.body.alias) {
            return res.fastSend('分类别名被占用，请更换后重试！');
        }

        // 更新文章分类
        const sql = 'UPDATE ev_article_cate SET ? WHERE id=?';
        db.query(sql, [req.body, req.body.id], (err, results) => {
            if (err) {
                return res.fastSend(err);
            }
            if (results.affectedRows !== 1) {
                return res.fastSend('更新文章分类异常，请稍后再试！');
            }

            res.fastSend('更新文章分类成功！', 'ok');
        });
    });
};
