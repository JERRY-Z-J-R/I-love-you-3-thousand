package cn.lzj.service.impl;

import cn.lzj.mapper.ShoppingCartMapper;
import cn.lzj.pojo.CartGoods;
import cn.lzj.pojo.ShoppingCart;
import cn.lzj.service.ShoppingCartService;
import cn.lzj.util.SqlSessionFactoryUtils;
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
     * 根据 userid 查询购物车商品列表（包含商品数量）
     *
     * @param userid
     * @return
     */
    @Override
    public List<CartGoods> selectCGByUsId(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        List<CartGoods> cartGoodses = mapper.selectCGByUsId(userid);
        // 释放资源
        sqlSession.close();
        return cartGoodses;
    }

    /**
     * 根据 userid goodsid 删除购物车商品
     *
     * @param userid
     * @param goodsid
     */
    @Override
    public void deleteByUGid(int userid, int goodsid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 ShoppingCartMapper
        ShoppingCartMapper mapper = sqlSession.getMapper(ShoppingCartMapper.class);

        // 调用方法
        mapper.deleteByUGid(userid, goodsid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
