package cn.jerry.web.servlet;

import cn.jerry.pojo.CartGoods;
import cn.jerry.pojo.ShoppingCart;
import cn.jerry.service.GoodsService;
import cn.jerry.service.ShoppingCartService;
import cn.jerry.service.impl.GoodsServiceImpl;
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
        // 注意：处理存储数据转发处理的方式外，也可以直接把 selectByIds 实现在此处，这里只是为了演示存储转发的使用
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
     * /shoppingCart/reduceCart
     * 根据 userid goodsid 减少购物车商品数量
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void reduceCart(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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

        // 判断是移除还是减少
        if (cgcount > 1) {
            // 数量 - 1
            shoppingCart.setCgcount(--cgcount);
            // 调用 service 更新购物车
            shoppingCartService.updateCgcount(shoppingCart);
        } else {
            // 调用 service 删除购物车
            shoppingCartService.deleteByUGid(userid, goodsid);
        }

        // 响应成功的标识
        response.getWriter().write("success");
    }

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
        List<ShoppingCart> shoppingCarts = shoppingCartService.selectByUserid(userid);

        // 总金额
        double count = 0.0;

        // 计算总金额
        for (ShoppingCart s : shoppingCarts) {
            // 每次都利用 goodsid 到 Goods 中查询单个商品价格 × 数量，再不断累加
            count += goodsService.selectById(s.getGoodsid()).getGoodsprice() * s.getCgcount();
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
