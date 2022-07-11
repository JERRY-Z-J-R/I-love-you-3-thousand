package com.itheima.web.response;

import org.apache.commons.io.IOUtils;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;

// Response 响应字节数据
@WebServlet("/resp5")
public class ResponseDemo05 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 要想将字节数据写回到浏览器，我们需要两个步骤：
        // 1、通过 Response 对象获取字节输出流：ServletOutputStream outputStream = resp.getOutputStream();
        // 2、通过字节输出流写数据：outputStream.write(字节数据);

        // --------------------------------------------------------------------

        // 返回一张图片
        // 1、读取文件
        // FileInputStream fis = new FileInputStream("./img/jerry.jpg");
        // 2、获取 response 字节输出流
        // ServletOutputStream os = resp.getOutputStream();
        // 3、完成流的 copy
        // byte[] buff = new byte[1024];
        // int len = 0;
        // while ((len = fis.read(buff)) != -1) {
        //     os.write(buff, 0, len);
        // }
        // fis.close();

        // --------------------------------------------------------------------

        // 上述代码中，对于流的 copy 的代码还是比较复杂的，所以我们可以使用别人提供好的方法来简化代码的开发
        // 前提是：在 pom.xml 添加 commons-io 依赖
        // fis:输入流
        // os:输出流
        // IOUtils.copy(fis, os);
        // 1、读取文件
        FileInputStream fis = new FileInputStream("./img/jerry.jpg");
        // 2、获取 response 字节输出流
        ServletOutputStream os = resp.getOutputStream();
        // 3、完成流的 copy
        IOUtils.copy(fis, os);
        fis.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
