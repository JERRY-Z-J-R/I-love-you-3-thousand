package cn.lzj.web.servlet;

import cn.lzj.pojo.User;
import cn.lzj.service.UserService;
import cn.lzj.service.impl.UserServiceImpl;
import cn.lzj.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.rmi.ServerException;

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
            // 转为 JSON
            String jsonString = JSON.toJSONString(user);
            // 写数据
            response.setContentType("text/json;charset=utf-8");
            response.getWriter().write(jsonString);
        } else {
            // 响应失败的标识
            response.getWriter().write("error");
        }
    }
}
