package cn.jerry.service;

import cn.jerry.pojo.Order;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrderService {
    /**
     * 生成订单
     *
     * @param order
     */
    void add(Order order);

    /**
     * 根据 userid 查询所有
     *
     * @param userid
     * @return
     */
    List<Order> selectAll(int userid);

    /**
     * 更新订单状态
     *
     * @param orderid
     * @param orderstate
     */
    void updateState(int orderid, int orderstate);
}
