package com.itheima.web.cookie;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLDecoder;

@WebServlet("/bServlet")
public class BServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取 Cookie
        // 获取客户端携带的所有 Cookie，使用 request 对象
        // Cookie[] cookies = request.getCookies();
        // 遍历数组，获取每一个 Cookie 对象：for
        // 使用 Cookie 对象方法获取数据
        // cookie.getName();
        // cookie.getValue();

        // 获取 Cookie
        // 获取 Cookie 数组
        Cookie[] cookies = req.getCookies();
        // 遍历数组
        for (Cookie cookie : cookies) {
            // 获取数据
            String name = cookie.getName();
            if ("username".equals(name)) {
                // 获取的是 URL 编码后的值：%E5%91%A8%E5%90%89%E7%91%9E
                String value = cookie.getValue();
                // URL 解码
                value = URLDecoder.decode(value, "UTF-8");
                System.out.println(name + ":" + value);
                break;
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
