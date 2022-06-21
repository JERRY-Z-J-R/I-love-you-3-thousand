package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 请求转发（demo9 ——> demo10）
@WebServlet("/req9")
public class RequestDemo09 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // http://localhost:8080/servlet-demo02/req9
        System.out.println("req9");
        // 存储数据
        // void setAttribute(String name, Object o);
        req.setAttribute("msg", "hello");
        // 请求转发
        req.getRequestDispatcher("/req10").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
