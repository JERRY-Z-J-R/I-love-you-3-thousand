package com.itheima.web.response;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// 请求重定向（demo01 ——> demo02）
@WebServlet("/resp1")
public class ResponseDemo01 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("resp1....");
        // 重定向
        // 1、设置响应状态码 302
        // resp.setStatus(302);
        // 2、设置响应头 Location
        // resp.setHeader("Location", "/servlet-demo02/resp2");

        // --------------------------------------------------------------------

        // 由于设置状态响应码都是一样的，所以重定向可以这样简写
        // resp.sendRedirect("/servlet-demo02/resp2");

        // --------------------------------------------------------------------

        // 在重定向的代码中，/request-demo 是固定编码的，如果后期通过Tomcat插件配置了项目的访问路径，那么所有需要重定向的地方都需要重新修改
        // 我们可以在代码中动态去获取项目访问的虚拟目录，具体如何获取，我们可以借助前面咱们所学习的 request 对象中的 getContextPath() 方法
        // 动态获取虚拟目录
        String contextPath = req.getContextPath();
        resp.sendRedirect(contextPath + "/resp2");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
