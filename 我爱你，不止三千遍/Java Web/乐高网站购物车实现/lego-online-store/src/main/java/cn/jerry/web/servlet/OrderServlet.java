package cn.jerry.web.servlet;

import cn.jerry.pojo.Goods;
import cn.jerry.pojo.Order;
import cn.jerry.pojo.ShoppingCart;
import cn.jerry.service.ShoppingCartService;
import cn.jerry.service.impl.GoodsServiceImpl;
import cn.jerry.service.impl.OrderServiceImpl;
import cn.jerry.service.impl.ShoppingCartServiceImpl;
import cn.jerry.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.rmi.ServerError;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@WebServlet("/order/*")
public class OrderServlet extends BaseServlet {
    private OrderServiceImpl orderService = new OrderServiceImpl();
    private GoodsServiceImpl goodsService = new GoodsServiceImpl();
    private ShoppingCartService shoppingCartService = new ShoppingCartServiceImpl();

    /**
     * /order/addG
     * 生成订单（单个商品）
     *
     * @param request
     * @param response
     * @throws SecurityException
     * @throws IOException
     */
    public void addG(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid goodsid
        String _userid = request.getParameter("userid");
        String _goodsid = request.getParameter("goodsid");
        String _orderstate = request.getParameter("orderstate");
        int userid = Integer.parseInt(_userid);
        int goodsid = Integer.parseInt(_goodsid);
        int orderstate = Integer.parseInt(_orderstate);

        // 构建 Order 对象
        Order order = new Order();

        // 存入 userid
        order.setUserid(userid);

        // 获取当前日期时间
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = df.format(date);

        // 存入 ordertime
        order.setOrdertime(time);

        // 调用 service 得到 goodsprice
        Goods goods = goodsService.selectById(goodsid);

        // 存入 orderpay
        order.setOrderpay(goods.getGoodsprice());

        // 存入 orderstate
        order.setOrderstate(orderstate);

        // 调用 service 生成订单（单个商品）
        orderService.add(order);

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /order/addC
     * 生成订单（购物车）
     *
     * @param request
     * @param response
     * @throws SecurityException
     * @throws IOException
     */
    public void addC(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        String _orderstate = request.getParameter("orderstate");
        int userid = Integer.parseInt(_userid);
        int orderstate = Integer.parseInt(_orderstate);

        // 构建 Order 对象
        Order order = new Order();

        // 存入 userid
        order.setUserid(userid);

        // 获取当前日期时间
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = df.format(date);

        // 存入 ordertime
        order.setOrdertime(time);

        // 调用 service 得到 购物车列表
        List<ShoppingCart> shoppingCarts = shoppingCartService.selectByUserid(userid);

        // 总金额
        double count = 0.0;

        // 计算总金额
        for (ShoppingCart s : shoppingCarts) {
            // 每次都利用 goodsid 到 Goods 中查询单个商品价格 × 数量，再不断累加
            count += goodsService.selectById(s.getGoodsid()).getGoodsprice() * s.getCgcount();
        }

        // 存入 orderpay
        order.setOrderpay(count);

        // 存入 orderstate
        order.setOrderstate(orderstate);

        // 调用 service 生成订单
        orderService.add(order);

        // 调用 service 清空购物车
        shoppingCartService.deleteByUserid(userid);

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /order/selectAll
     * 查询所有
     *
     * @param request
     * @param response
     * @throws SecurityException
     * @throws IOException
     */
    public void selectAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 调用 service 查询所有
        List<Order> orders = orderService.selectAll();

        // 转为 JSON
        String jsonString = JSON.toJSONString(orders);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    /**
     * /order/updateState
     * 更新订单状态
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void updateState(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 orderid orderstate
        String _orderid = request.getParameter("orderid");
        String _orderstate = request.getParameter("orderstate");
        int orderid = Integer.parseInt(_orderid);
        int orderstate = Integer.parseInt(_orderstate);

        // 调用 service 更新订单状态
        orderService.updateState(orderid, orderstate);

        // 响应成功的标识
        response.getWriter().write("success");
    }
}
