package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

// Request 获取请求体数据
@WebServlet("/req3")
public class RequestDemo03 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 浏览器在发送 GET 请求的时候是没有请求体的，所以需要把请求方式变更为 POST，请求体中的数据格式如下：
        // username=jerry&password=123456
        // 我们通过 req3.html 提交表单进行测试

        // Request 对象提供了如下两种方式来获取其中的数据，分别是：
        // 1、ServletInputStream getInputStream()   该方法可以获取字节流（例如：图片、视频）
        // 2、BufferedReader getReader()    该方法可以获取字符流（例如：纯文本）

        // 由于用户名和密码是文本内容，所以我们用字符流的方式
        // 1、获取字符输入流
        BufferedReader br = req.getReader();
        // 2、读取数据（此处只有一行数据）
        String line = br.readLine();
        System.out.println(line);
        // BufferedReader 流是通过 request 对象来获取的，当请求完成后 request 对象就会被销毁，request 对象被销毁后，BufferedReader 流就会自动关闭，所以此处就不需要手动关闭流了。
    }
}
