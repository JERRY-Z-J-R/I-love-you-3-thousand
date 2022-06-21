package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Post 中文乱码
@WebServlet("/req7")
public class RequestDemo07 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1、解决乱码: POST getReader()
        // 设置字符输入流的编码，设置的字符集要和页面保持一致
        req.setCharacterEncoding("UTF-8");
        // 2、获取 username
        String username = req.getParameter("username");
        System.out.println(username);
        // 此种方式只支持 Post 中文乱码，不支持 Get 中文乱码
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
