package cn.lzj.web.servlet;

import cn.lzj.pojo.Goods;
import cn.lzj.service.GoodsService;
import cn.lzj.service.impl.GoodsServiceImpl;
import cn.lzj.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

@WebServlet("/goods/*")
public class GoodsServlet extends BaseServlet {
    private GoodsService brandService = new GoodsServiceImpl();

    /**
     * /goods/selectAll
     * 查询所有
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 调用 service 查询
        List<Goods> goodses = brandService.selectAll();

        // 转为 JSON
        String jsonString = JSON.toJSONString(goodses);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }
}
