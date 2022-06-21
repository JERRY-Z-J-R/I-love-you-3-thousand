package com.itheima.web.response;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/resp4")
public class ResponseDemo04 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置响应的数据格式及数据的编码，防止中文乱码
        resp.setContentType("text/html;charset=utf-8");
        // 获取字符输出流
        PrintWriter writer = resp.getWriter();
        // content-type，告诉浏览器返回的数据类型是 HTML 类型数据，这样浏览器才会解析 HTML 标签
        resp.setHeader("content-type", "text/html");
        writer.write("<h1>Hello World!</h1>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
