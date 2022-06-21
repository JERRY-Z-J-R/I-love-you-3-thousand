package com.itheima.web;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

// Servlet 生命周期
@WebServlet("/demo02")
public class ServletDemo02 implements Servlet {
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        // init 方法在 Servlet 对象被创建的时候执行，只执行 1 次
        System.out.println("init");
    }

    @Override
    public ServletConfig getServletConfig() {
        return null;
    }

    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        // service 方法在 Servlet 被访问的时候调用，每访问 1 次就调用 1 次
        System.out.println("service");
    }

    @Override
    public String getServletInfo() {
        return null;
    }

    @Override
    public void destroy() {
        // destroy 方法在 Servlet 对象被销毁的时候调用，只执行 1 次
        System.out.println("destroy");
    }
}
