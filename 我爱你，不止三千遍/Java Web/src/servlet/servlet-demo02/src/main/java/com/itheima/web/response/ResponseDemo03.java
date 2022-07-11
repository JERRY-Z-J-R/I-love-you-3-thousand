package com.itheima.web.response;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

// Response 响应字符数据
@WebServlet("/resp3")
public class ResponseDemo03 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 要想将字符数据写回到浏览器，我们需要两个步骤：
        // 1、通过 Response 对象获取字符输出流：PrintWriter writer = resp.getWriter();
        // 2、通过字符输出流写数据：writer.write("");

        resp.setContentType("text/html;charset=utf-8");
        // 获取字符输出流
        PrintWriter writer = resp.getWriter();
        // 返回一个字符串 Hello World!
        writer.write("Hello World!");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
