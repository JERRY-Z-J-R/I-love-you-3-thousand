package cn.jerry.mapper;

import cn.jerry.pojo.Order;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface OrdersMapper {
    /**
     * 生成订单
     *
     * @param order
     */
    void add(Order order);

    /**
     * 查询所有
     *
     * @return
     */
    List<Order> selectAll();

    /**
     * 更新订单状态
     *
     * @param orderid
     * @param orderstate
     */
    void updateState(@Param("orderid") int orderid, @Param("orderstate") int orderstate);
}
