package com.itheima.web.cookie;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;

@WebServlet("/aServlet")
public class AServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 发送 Cookie
        // 创建 Cookie 对象，并设置数据
        // Cookie cookie = new Cookie("key","value");
        // 发送 Cookie 到客户端：使用  response 对象
        // response.addCookie(cookie);

        // 发送 Cookie
        // 创建 Cookie 对象
        // Cookie cookie = new Cookie("username", "zhangsan");
        // Cookie 不能直接存储中文
        // Cookie cookie = new Cookie("username", "周吉瑞");
        String value = "周吉瑞";
        // 对中文进行 URL 编码
        value = URLEncoder.encode(value, "UTF-8");
        // 将编码后的值存入 Cookie 中
        Cookie cookie = new Cookie("username", value);
        // 设置存活时间（一周、7天）
        cookie.setMaxAge(60 * 60 * 24 * 7);
        // 发送 Cookie
        resp.addCookie(cookie);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
