package cn.jerry.web.servlet;

import cn.jerry.pojo.Love;
import cn.jerry.service.LoveService;
import cn.jerry.service.impl.LoveServiceImpl;
import cn.jerry.web.servlet.base.BaseServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/love/*")
public class LoveServlet extends BaseServlet {
    private LoveService loveService = new LoveServiceImpl();

    /**
     * /love/addLove
     * 加入收藏
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void addLove(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid goodsid
        String _userid = request.getParameter("userid");
        String _goodsid = request.getParameter("goodsid");
        int userid = Integer.parseInt(_userid);
        int goodsid = Integer.parseInt(_goodsid);

        // 判断该商品是否已经加入过
        Love love = loveService.selectByUGId(userid, goodsid);

        if (love == null) {
            // 没有收藏过
            // 调用 service 添加收藏
            loveService.addLove(userid, goodsid);
            // 响应成功的标识
            response.getWriter().write("success");
        } else {
            // 已经收藏过
            // 响应已经存在标识
            response.getWriter().write("exist");
        }
    }

    /**
     * /love/selectAll
     * 根据 userid 查询收藏商品列表
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);

        // 调用 service 根据 userid 查询收藏商品列表
        List<Love> loves = loveService.selectAll(userid);

        // 将收藏商品列表的 goodsid 放入数组
        // 获取 List 长度
        int length = loves.size();

        // 创建商品 id 数组
        int[] goodsids = new int[length];

        for (int i = 0; i < length; i++) {
            goodsids[i] = loves.get(i).getGoodsid();
        }

        // 存储数据
        request.setAttribute("goodsids", goodsids);
        // 请求转发
        request.getRequestDispatcher("/goods/selectByIds").forward(request, response);
        // 注意：处理存储数据转发处理的方式外，也可以直接把 selectByIds 实现在此处，这里只是为了演示存储转发的使用
    }

    /**
     * /love/deleteByUGid
     * 根据 userid goodsid 删除收藏商品
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteByUGid(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid goodsid
        String _userid = request.getParameter("userid");
        String _goodsid = request.getParameter("goodsid");
        int userid = Integer.parseInt(_userid);
        int goodsid = Integer.parseInt(_goodsid);

        // 调用 service 删除收藏商品
        loveService.deleteByUGid(userid, goodsid);

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /love/deleteById
     * 根据 loveid 删除收藏商品
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 loveid
        String _loveid = request.getParameter("loveid");
        int loveid = Integer.parseInt(_loveid);

        // 调用 service 删除收藏商品
        loveService.deleteById(loveid);

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /love/deleteAll
     * 根据 userid 删除商品列表（清空收藏夹）
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteAll(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);

        // 调用 service 清空收藏夹
        loveService.deleteAll(userid);

        // 响应成功的标识
        response.getWriter().write("success");
    }
}
