package cn.lzj.web.servlet.base;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class BaseServlet extends HttpServlet {
    // 根据请求的最后一段路径来进行方法分发
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取请求路径
        String uri = req.getRequestURI();
        // 获取最后一段路径（从后到前检索 / 出现的索引值）
        int index = uri.lastIndexOf('/');
        // index + 1 舍去路径前的 /（左闭右开）
        String methodName = uri.substring(index + 1);

        // 执行方法
        // 获取 Servlet 字节码对象 Class
        Class<? extends BaseServlet> cls = this.getClass();

        // 获取方法 Method 对象
        try {
            Method method = cls.getMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
            // 执行方法
            method.invoke(this, req, resp);
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
    }
}
