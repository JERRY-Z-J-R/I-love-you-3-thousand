package com.itheima.web;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Servlet 体系结构：Servlet <—— GenericServlet <—— HttpServlet
@WebServlet("/demo03")
public class ServletDemo03 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // GET 请求方式处理逻辑
        // 通过浏览器地址栏访问进行验证
        System.out.println("get...");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // POST 请求方式处理逻辑
        // 通过访问 demo03.html 提交表单进行验证
        System.out.println("post...");
    }
}
