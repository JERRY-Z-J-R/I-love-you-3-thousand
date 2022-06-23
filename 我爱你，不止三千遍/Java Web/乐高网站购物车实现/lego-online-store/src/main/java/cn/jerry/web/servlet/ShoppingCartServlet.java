package cn.jerry.web.servlet;

import cn.jerry.pojo.ShoppingCart;
import cn.jerry.service.ShoppingCartService;
import cn.jerry.service.impl.ShoppingCartServiceImpl;
import cn.jerry.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

@WebServlet("/shoppingCart/*")
public class ShoppingCartServlet extends BaseServlet {
    private ShoppingCartService shoppingCartService = new ShoppingCartServiceImpl();

    /**
     * /shoppingCart/add
     * 加入购物车
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void add(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid goodsid
        String _userid = request.getParameter("userid");
        String _goodsid = request.getParameter("goodsid");
        int userid = Integer.parseInt(_userid);
        int goodsid = Integer.parseInt(_goodsid);

        // 新建 ShoppingCart 对象
        ShoppingCart shoppingCart = new ShoppingCart();
        // 存入 userid、goodsid
        shoppingCart.setUserid(userid);
        shoppingCart.setGoodsid(goodsid);

        // 调用 service 得到 cgcount
        Integer cgcount = shoppingCartService.getCgcount(userid, goodsid);

        // 判断是否是同一商品加入购物车
        if (cgcount == null) {
            // 首次加入数量为 1
            shoppingCart.setCgcount(1);
            // 调用 service 加入购物车
            shoppingCartService.add(shoppingCart);
        } else {
            // 数量 + 1
            shoppingCart.setCgcount(++cgcount);
            // 调用 service 更新购物车的 cgcount
            shoppingCartService.updateCgcount(shoppingCart);
        }

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /shoppingCart/selectByUserid
     * 根据 userid 查询购物车商品列表
     * 将商品 id 列表转发到 /goods/selectByIds 进行批量查询商品
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectByUserid(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);
        // 调用 service 得到 商品列表
        List<ShoppingCart> _goodsids = shoppingCartService.selectByUserid(userid);

        // 转为 JSON
        String jsonString = JSON.toJSONString(_goodsids);

        // 获取 List 长度
        int length = _goodsids.size();

        // 创建商品 id 数组
        int[] goodsids = new int[length];
        for (int i = 0; i < length; i++) {
            goodsids[i] = _goodsids.get(i).getGoodsid();
        }

        // 存储数据
        request.setAttribute("goodsids", goodsids);
        // 请求转发
        request.getRequestDispatcher("/goods/selectByIds").forward(request, response);
    }

    /**
     * /shoppingCart/deleteCart
     * 根据 cartid 删除购物车商品
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteCart(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 cartid
        String _cartid = request.getParameter("cartid");
        int cartid = Integer.parseInt(_cartid);

        // 调用 service 删除购物车商品
        shoppingCartService.deleteCart(cartid);

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /shoppingCart/deleteByUserid
     * 根据 userid 删除购物车商品（清空购物车）
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteByUserid(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);

        // 调用 service 删除购物车商品（清空购物车）
        shoppingCartService.deleteByUserid(userid);

        // 响应成功的标识
        response.getWriter().write("success");
    }
}
