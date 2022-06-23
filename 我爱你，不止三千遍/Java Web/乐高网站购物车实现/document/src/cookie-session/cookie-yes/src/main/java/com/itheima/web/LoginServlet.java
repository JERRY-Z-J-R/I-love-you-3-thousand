package com.itheima.web;

import com.itheima.pojo.User;
import com.itheima.service.UserService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.net.URLDecoder;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private UserService service = new UserService();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 获取用户名和密码
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // 获取复选框数据
        String remember = request.getParameter("remember");

        // 调用 service 查询
        User user = service.login(username, password);

        // 自动填入值
        // 获取 Cookie
        // 获取 Cookie 数组
        Cookie[] cookies = request.getCookies();
        // 遍历数组
        int flag = 0;
        for (Cookie cookie : cookies) {
            // 获取数据
            String name = cookie.getName();
            if ("username".equals(name)) {
                // 获取的是 URL 编码后的值
                String value = cookie.getValue();
                // URL 解码
                value = URLDecoder.decode(value, "UTF-8");
                request.setAttribute("c_username", value);
                flag++;
            }
            if ("password".equals(name)) {
                // 获取的是 URL 编码后的值
                String value = cookie.getValue();
                // URL 解码
                value = URLDecoder.decode(value, "UTF-8");
                request.setAttribute("c_password", value);
                flag++;
            }
            if (flag == 2) {
                break;
            }
        }

        // 判断
        if (user != null) {
            // 判断用户是否勾选记住我
            if ("1".equals(remember)) {
                // 勾选了，发送 Cookie
                // 创建 Cookie 对象
                Cookie c_username = new Cookie("username", username);
                Cookie c_password = new Cookie("password", password);
                // 设置 Cookie 的存活时间
                c_username.setMaxAge(60 * 60 * 24 * 7);
                c_password.setMaxAge(60 * 60 * 24 * 7);
                // 发送
                response.addCookie(c_username);
                response.addCookie(c_password);
            }

            // 将登陆成功后的 user 对象，存储到 session
            HttpSession session = request.getSession();
            session.setAttribute("user", user);
            // 获取路径
            String contextPath = request.getContextPath();
            // 重定向
            response.sendRedirect(contextPath + "/ok");
        } else {
            // 登录失败
            // 利用 if 解决页面打开时被判断为用户名及密码错误的情况
            if (username != null && password != null) {
                // 存储错误信息到 request
                request.setAttribute("login_msg", "用户名或密码错误");
            }
            // 跳转到 login.jsp
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }
}