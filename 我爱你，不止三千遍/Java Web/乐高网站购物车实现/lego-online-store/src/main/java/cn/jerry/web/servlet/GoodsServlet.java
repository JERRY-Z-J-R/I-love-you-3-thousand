package cn.jerry.web.servlet;

import cn.jerry.pojo.Goods;
import cn.jerry.service.GoodsService;
import cn.jerry.service.impl.GoodsServiceImpl;
import cn.jerry.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Array;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
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

    /**
     * /goods/selectVague
     * 根据 goodssname 模糊查询
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectVague(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 获取 goodsname 数据
        String goodsname = request.getParameter("goodsname");
        // Get 中文乱码
        goodsname = new String(goodsname.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);
        // LIKE 模糊查询包装字符串
        goodsname = "%" + goodsname + "%";

        // 调用 service 查询
        List<Goods> goodses = brandService.selectVague(goodsname);

        // 转为 JSON
        String jsonString = JSON.toJSONString(goodses);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    /**
     * /goods/selectById
     * 根据 goodsid 查询
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid 数据
        String _goodsid = request.getParameter("goodsid");
        int goodsid = Integer.parseInt(_goodsid);

        // 调用 service 查询
        Goods goods = brandService.selectById(goodsid);

        // 转为 JSON
        String jsonString = JSON.toJSONString(goods);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    /**
     * /goods/selectByIds
     * 根据 int[] goodsids 批量查询
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectByIds(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 从 request 域获取数据
        int[] goodsids = (int[]) request.getAttribute("goodsids");

        // 注意：数组不能为空，否则 MySQL 会报错
        // 设置一个为空时的代替数组，值为 {-1}，该值一定查询不到
        int[] goodsidstemp = {-1};
        List<Goods> goodses;
        if (goodsids.length == 0) {
            goodses = brandService.selectByIds(goodsidstemp);
        } else {
            goodses = brandService.selectByIds(goodsids);
        }

        // 转为 JSON
        String jsonString = JSON.toJSONString(goodses);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    /**
     * goods/getGoodsImg
     * 根据 goodsid 返回图片
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void getGoodsImg(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid 数据
        String _goodsid = request.getParameter("goodsid");
        int goodsid = Integer.parseInt(_goodsid);

        // 调用 service 查询
        Goods goods = brandService.selectById(goodsid);

        String imagePath = goods.getGoodsimg();

        FileInputStream fis = new FileInputStream(imagePath);
        int size = fis.available(); // 得到文件大小
        byte data[] = new byte[size];
        fis.read(data);  // 读数据
        fis.close();
        response.setContentType("image/gif"); // 设置返回的文件类型
        OutputStream os = response.getOutputStream();
        os.write(data);
        os.flush();
        os.close();
    }
}
