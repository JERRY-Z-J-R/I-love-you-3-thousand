package cn.lzj.web.servlet;

import cn.lzj.pojo.CartGoods;
import cn.lzj.pojo.ShoppingCart;
import cn.lzj.service.GoodsService;
import cn.lzj.service.ShoppingCartService;
import cn.lzj.service.impl.GoodsServiceImpl;
import cn.lzj.service.impl.ShoppingCartServiceImpl;
import cn.lzj.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/shoppingCart/*")
public class ShoppingCartServlet extends BaseServlet {
    private ShoppingCartService shoppingCartService = new ShoppingCartServiceImpl();
    private GoodsService goodsService = new GoodsServiceImpl();

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
     * /shoppingCart/selectCGByUsId
     * 根据 userid 查询购物车商品列表（包含商品数量）
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectCGByUsId(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);
        // 调用 service 得到 商品列表
        List<CartGoods> cartGoodses = shoppingCartService.selectCGByUsId(userid);

        // 转为 JSON
        String jsonString = JSON.toJSONString(cartGoodses);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    /**
     * /shoppingCart/deleteCart
     * 删除购物车商品
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteCart(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid goodsid
        String _userid = request.getParameter("userid");
        String _goodsid = request.getParameter("goodsid");
        int userid = Integer.parseInt(_userid);
        int goodsid = Integer.parseInt(_goodsid);

        // 调用 service 删除购物车
        shoppingCartService.deleteByUGid(userid, goodsid);
        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /shoppingCart/getTotal
     * 根据 userid 查询购物车合计金额
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void getTotal(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);

        // 调用 service 得到 购物车列表
        List<CartGoods> cartGoodses = shoppingCartService.selectCGByUsId(userid);

        // 总金额
        double count = 0.0;

        // 计算总金额
        for (CartGoods s : cartGoodses) {
            // 每次都利用 goodsid 到 Goods 中查询单个商品价格 × 数量，再不断累加
            count += s.getGoodsprice() * s.getCgcount();
        }

        // 返回总金额数据
        response.getWriter().write(count + "");
    }

    /**
     * /shoppingCart/updateCart
     * 更新购物车
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void updateCart(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid goodsid cgcount
        String _userid = request.getParameter("userid");
        String _goodsid = request.getParameter("goodsid");
        String _cgcount = request.getParameter("cgcount");
        int userid = Integer.parseInt(_userid);
        int goodsid = Integer.parseInt(_goodsid);
        int cgcount = Integer.parseInt(_cgcount);

        if (cgcount == 0) {
            // 删除购物车商品
            // 调用 service 删除购物车
            shoppingCartService.deleteByUGid(userid, goodsid);
        } else {
            // 更新购物车商品
            // 新建 ShoppingCart 对象
            ShoppingCart shoppingCart = new ShoppingCart();
            // 存入 userid、goodsid
            shoppingCart.setUserid(userid);
            shoppingCart.setGoodsid(goodsid);
            shoppingCart.setCgcount(cgcount);
            // 调用 service 更新购物车
            shoppingCartService.updateCgcount(shoppingCart);
        }

        // 响应成功的标识
        response.getWriter().write("success");
    }
}
