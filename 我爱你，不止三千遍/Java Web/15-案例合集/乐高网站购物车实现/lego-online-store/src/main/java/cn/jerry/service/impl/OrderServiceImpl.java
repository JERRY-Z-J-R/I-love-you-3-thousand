package cn.jerry.service.impl;

import cn.jerry.mapper.OrdersMapper;
import cn.jerry.pojo.Order;
import cn.jerry.service.OrderService;
import cn.jerry.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class OrderServiceImpl implements OrderService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 生成订单
     *
     * @param order
     */
    @Override
    public void add(Order order) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 OrderMapper
        OrdersMapper mapper = sqlSession.getMapper(OrdersMapper.class);

        // 调用方法
        mapper.add(order);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 userid 查询所有
     *
     * @param userid
     * @return
     */
    @Override
    public List<Order> selectAll(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 OrderMapper
        OrdersMapper mapper = sqlSession.getMapper(OrdersMapper.class);

        // 调用方法
        List<Order> orders = mapper.selectAll(userid);

        // 释放资源
        sqlSession.close();

        return orders;
    }

    /**
     * 更新订单状态
     *
     * @param orderid
     * @param orderstate
     */
    @Override
    public void updateState(int orderid, int orderstate) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 OrderMapper
        OrdersMapper mapper = sqlSession.getMapper(OrdersMapper.class);

        // 调用方法
        mapper.updateState(orderid, orderstate);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
