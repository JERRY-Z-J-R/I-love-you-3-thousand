package cn.jerry.service.impl;

import cn.jerry.mapper.GoodsMapper;
import cn.jerry.pojo.Goods;
import cn.jerry.service.GoodsService;
import cn.jerry.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class GoodsServiceImpl implements GoodsService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 查询所有
     *
     * @return
     */
    @Override
    public List<Goods> selectAll() {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 GoodsMapper
        GoodsMapper mapper = sqlSession.getMapper(GoodsMapper.class);

        // 调用方法
        List<Goods> goodses = mapper.selectAll();

        // 释放资源
        sqlSession.close();

        return goodses;
    }

    /**
     * 根据 goodssname 模糊查询
     *
     * @param goodsname
     * @return
     */
    @Override
    public List<Goods> selectVague(String goodsname) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 GoodsMapper
        GoodsMapper mapper = sqlSession.getMapper(GoodsMapper.class);

        // 调用方法
        List<Goods> goodses = mapper.selectVague(goodsname);

        // 释放资源
        sqlSession.close();

        return goodses;
    }

    /**
     * 根据 goodsid 查询
     *
     * @param goodsid
     * @return
     */
    @Override
    public Goods selectById(int goodsid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 GoodsMapper
        GoodsMapper mapper = sqlSession.getMapper(GoodsMapper.class);

        // 调用方法
        Goods goods = mapper.selectById(goodsid);

        // 释放资源
        sqlSession.close();

        return goods;
    }

    /**
     * 根据 int[] goodsids 批量查询
     *
     * @param goodsids
     * @return
     */
    @Override
    public List<Goods> selectByIds(int[] goodsids) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 GoodsMapper
        GoodsMapper mapper = sqlSession.getMapper(GoodsMapper.class);

        // 调用方法
        List<Goods> goodses = mapper.selectByIds(goodsids);

        // 释放资源
        sqlSession.close();

        return goodses;
    }
}
