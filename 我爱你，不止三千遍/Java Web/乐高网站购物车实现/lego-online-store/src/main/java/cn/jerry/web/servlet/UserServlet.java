package cn.jerry.web.servlet;

import cn.jerry.pojo.User;
import cn.jerry.service.GoodsService;
import cn.jerry.service.UserService;
import cn.jerry.service.impl.GoodsServiceImpl;
import cn.jerry.service.impl.UserServiceImpl;
import cn.jerry.util.CheckCodeUtil;
import cn.jerry.web.servlet.base.BaseServlet;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.rmi.ServerError;
import java.rmi.ServerException;
import java.rmi.server.ServerCloneException;

@WebServlet("/user/*")
public class UserServlet extends BaseServlet {
    private UserService userService = new UserServiceImpl();

    /**
     * /user/login
     * 登录
     *
     * @param request
     * @param response
     * @throws ServerException
     * @throws IOException
     */
    public void login(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {
        // 获取用户名和密码
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        // Get 中文乱码
        username = new String(username.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);

        // 调用 service 查询用户
        User user = userService.selectUser(username, password);

        // 判断是否用户名密码是否存在
        if (user != null) {
            // 将登陆成功后的 user 对象，存储到 session
            HttpSession session = request.getSession();
            session.setAttribute("user", user);
            // 响应成功的标识
            response.getWriter().write("success");
        } else {
            // 响应失败的标识
            response.getWriter().write("error");
        }
    }

    /**
     * /user/register
     * 注册
     *
     * @param request
     * @param response
     * @throws ServerException
     * @throws IOException
     */
    public void register(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {
        // 获取用户名和密码
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        // Get 中文乱码
        username = new String(username.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);

        // 获取用户输入的验证码
        String checkCode = request.getParameter("checkCode");

        // 程序生成的验证码，从 Session 获取
        HttpSession session = request.getSession();
        String checkCodeGen = (String) session.getAttribute("checkCodeGen");

        // 比对验证码
        if (!checkCodeGen.equalsIgnoreCase(checkCode)) {
            // 响应失败的标识
            response.getWriter().write("checkError");
            // 不允许注册
            return;
        }

        // 如果验证码正确，那么开始注册
        // 检查用户名是否存在
        User user = userService.selectUserByName(username);

        if (user == null) {
            // 用户名未存在，可以注册
            userService.addUser(username, password);
            // 响应成功的标识
            response.getWriter().write("success");
        } else {
            // 响应成功的标识
            response.getWriter().write("error");
        }
    }

    /**
     * /user/checkCode
     * 生成验证码
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void checkCode(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 存入 Session
        HttpSession session = request.getSession();

        // 生成验证码图片
        // 获取字节输出流
        ServletOutputStream os = response.getOutputStream();
        String checkCode = CheckCodeUtil.outputVerifyImage(100, 50, os, 4);

        // 把 HttpSession session = request.getSession(); 放在返回字节流之前，否则会报错
        session.setAttribute("checkCodeGen", checkCode);
    }
}
