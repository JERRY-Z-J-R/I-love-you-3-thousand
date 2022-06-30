package cn.lzj.service.impl;

import cn.lzj.mapper.GoodsMapper;
import cn.lzj.pojo.Goods;
import cn.lzj.service.GoodsService;
import cn.lzj.util.SqlSessionFactoryUtils;
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
}
