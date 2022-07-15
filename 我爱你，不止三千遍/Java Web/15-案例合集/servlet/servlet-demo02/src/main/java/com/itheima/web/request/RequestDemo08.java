package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

// Get 中文乱码
@WebServlet("/req8")
public class RequestDemo08 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 1、获取 username
        String username = req.getParameter("username");
        System.out.println("解决乱码前：" + username);

        // 2、GET 获取参数的方式：getQueryString
        // 乱码原因：tomcat进行URL解码，默认的字符集ISO-8859-1
        // (1) 先对乱码数据进行编码：转为字节数组
        // byte[] bytes = username.getBytes(StandardCharsets.ISO_8859_1);
        // (2) 字节数组解码
        // username = new String(bytes, StandardCharsets.UTF_8);*/

        username = new String(username.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);

        System.out.println("解决乱码后：" + username);
        // http://localhost:8080/servlet-demo02/req8?username=周吉瑞

        // GET 请求参数乱码解决方案同时也可也把 POST 请求参数乱码的问题也解决了
        // 只不过对于 POST 请求参数一般都会比较多，采用这种方式解决乱码起来比较麻烦，所以对于 POST 请求还是建议使用设置编码的方式进行
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
