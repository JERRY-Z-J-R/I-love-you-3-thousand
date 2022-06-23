package cn.jerry.service.impl;

import cn.jerry.mapper.ShoppingCartMapper;
import cn.jerry.pojo.ShoppingCart;
import cn.jerry.service.ShoppingCartService;
import cn.jerry.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class ShoppingCartServiceImpl implements ShoppingCartService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 加入购物车
     *
     * @param shoppingCart
     */
    @Override
    public void add(ShoppingCart shoppingCart) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        mapper.add(shoppingCart);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 更新玩具商品数量
     *
     * @param shoppingCart
     */
    @Override
    public void updateCgcount(ShoppingCart shoppingCart) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        mapper.updateCgcount(shoppingCart);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 userid goodsid 获取购物车商品 cgcount
     *
     * @param userid
     * @param goodsid
     * @return
     */
    @Override
    public Integer getCgcount(int userid, int goodsid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        Integer cgcount = mapper.getCgcount(userid, goodsid);
        // 释放资源
        sqlSession.close();
        return cgcount;
    }

    /**
     * 根据 userid 查询购物车商品列表
     *
     * @param userid
     * @return
     */
    @Override
    public List<ShoppingCart> selectByUserid(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        List<ShoppingCart> goodsids = mapper.selectByUserid(userid);
        // 释放资源
        sqlSession.close();
        return goodsids;
    }

    /**
     * 根据 cartid 删除购物车商品
     *
     * @param cartid
     */
    @Override
    public void deleteCart(int cartid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        mapper.deleteCart(cartid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 userid 删除购物车商品（清空购物车）
     *
     * @param userid
     */
    @Override
    public void deleteByUserid(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        mapper.deleteByUserid(userid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
