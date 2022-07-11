package com.itheima.web.user;

import com.itheima.mapper.UserMapper;
import com.itheima.pojo.User;
import com.itheima.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 用户注册
@WebServlet("/register")
public class Register extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 接收用户数据
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        // 封装用户对象
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        // 调用 MyBatis 完成查询
        // 获取 SqlSessionFactory
        // String resource = "mybatis-config.xml";
        // InputStream inputStream = Resources.getResourceAsStream(resource);
        // SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        // 利用抽取的工具类
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtils.getSqlSessionFactory();

        // 获取 SqlSession 对象
        SqlSession sqlSession = sqlSessionFactory.openSession();
        // 获取 Mapper
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        // 调用方法
        User u = userMapper.selectByUsername(username);

        // 判断用户对象是否为 null
        if (u == null) {
            // 用户名不存在，可以添加用户
            userMapper.add(user);
            // 提交事务
            sqlSession.commit();
            // 释放资源
            sqlSession.close();
            // 提示信息
            resp.setContentType("text/html;charset=utf-8");
            resp.getWriter().write(username + "，注册成功！");
        } else {
            // 用户名存在，给出提示信息
            resp.setContentType("text/html;charset=utf-8");
            resp.getWriter().write("用户名已存在！");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
