package cn.jerry.web.servlet;

import cn.jerry.pojo.Address;
import cn.jerry.service.AddressService;
import cn.jerry.service.impl.AddressServiceImpl;
import cn.jerry.web.servlet.base.BaseServlet;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@WebServlet("/address/*")
public class AddressServlet extends BaseServlet {
    private AddressService addressService = new AddressServiceImpl();

    /**
     * /address/addAddress
     * 添加地址
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void addAddress(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid address
        String _userid = request.getParameter("userid");
        String address = request.getParameter("address");
        int userid = Integer.parseInt(_userid);
        // Get 中文乱码
        address = new String(address.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);

        // 调用 service 添加地址
        addressService.addAddress(userid, address);

        // 响应成功的标识
        response.getWriter().write("success");
    }

    /**
     * /address/selectByUsId
     * 根据 userid 查询地址列表
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void selectByUsId(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 userid
        String _userid = request.getParameter("userid");
        int userid = Integer.parseInt(_userid);

        // 调用 service 添加地址
        List<Address> addresses = addressService.selectByUsId(userid);

        // 转为 JSON
        String jsonString = JSON.toJSONString(addresses);

        // 写数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonString);
    }

    /**
     * /address/deleteById
     * 根据 addressid 删除地址
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    public void deleteById(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // 接收 addressid
        String _addressid = request.getParameter("addressid");
        int addressid = Integer.parseInt(_addressid);

        // 调用 service 根据 addressid 删除地址
        addressService.deleteById(addressid);

        // 响应成功的标识
        response.getWriter().write("success");
    }
}
