var express = require('express');
const { readFile } = require('fs');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//相应前端的post请求-增加用户
router.post("/user",UserController.addUser)
//动态路由, 获取id -更新用户
router.put("/user/:myid",UserController.updateUser)
//删除用户
router.delete("/user/:id",UserController.deleteUser)
//获取用户列表
router.get("/user",UserController.getUser)


//登录校验

router.post("/login",UserController.login)
router.get("/logout",UserController.logout)

module.exports = router;
