package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Request 获取请求行数据
@WebServlet("/req1")
public class RequestDemo01 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 我们在浏览器地址栏中输入 url/req1?username=jerry&password=123456 测试

        // String getMethod()：获取请求方式
        String method = req.getMethod();
        System.out.println(method);
        //      GET

        // String getContextPath()：获取虚拟目录（项目访问路径）
        String contextPath = req.getContextPath();
        System.out.println(contextPath);
        //      /servlet-demo02

        // StringBuffer getRequestURL(): 获取 URL（统一资源定位符）
        StringBuffer url = req.getRequestURL();
        System.out.println(url.toString());
        //      http://localhost:8080/servlet-demo02/req1

        // String getRequestURI()：获取 URI（统一资源标识符）
        String uri = req.getRequestURI();
        System.out.println(uri);
        //      /servlet-demo02/req1

        // String getQueryString()：获取请求参数（GET方式）
        String queryString = req.getQueryString();
        System.out.println(queryString);
        //      username=jerry&password=123456
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    }
}
