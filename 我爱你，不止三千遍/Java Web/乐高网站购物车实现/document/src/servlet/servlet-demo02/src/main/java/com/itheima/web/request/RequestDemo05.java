package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

// 获取请求参数的通用方式：解决方案一（不推荐！）
@WebServlet("/req5")
public class RequestDemo05 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取请求方式
        String method = req.getMethod();
        // 获取请求参数
        String params = "";
        if ("GET".equals(method)) {
            params = req.getQueryString();
        } else if ("POST".equals(method)) {
            BufferedReader reader = req.getReader();
            params = reader.readLine();
        }
        // 将请求参数进行打印控制台
        System.out.println(params);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
