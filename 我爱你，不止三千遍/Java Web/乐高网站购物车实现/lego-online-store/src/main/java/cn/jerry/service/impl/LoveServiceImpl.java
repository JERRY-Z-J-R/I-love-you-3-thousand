package cn.jerry.service.impl;

import cn.jerry.mapper.AddressMapper;
import cn.jerry.mapper.LoveMapper;
import cn.jerry.pojo.Love;
import cn.jerry.service.LoveService;
import cn.jerry.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class LoveServiceImpl implements LoveService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 加入收藏
     *
     * @param userid
     * @param goodsid
     */
    @Override
    public void addLove(int userid, int goodsid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        LoveMapper mapper = sqlSession.getMapper(LoveMapper.class);

        // 调用方法
        mapper.addLove(userid, goodsid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 userid goodsid 查询收藏商品
     *
     * @param userid
     * @param goodsid
     * @return
     */
    @Override
    public Love selectByUGId(int userid, int goodsid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        LoveMapper mapper = sqlSession.getMapper(LoveMapper.class);

        // 调用方法
        Love love = mapper.selectByUGId(userid, goodsid);

        // 释放资源
        sqlSession.close();
        return love;
    }

    /**
     * 根据 userid 查询收藏商品列表
     *
     * @param userid
     * @return
     */
    @Override
    public List<Love> selectAll(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        LoveMapper mapper = sqlSession.getMapper(LoveMapper.class);

        // 调用方法
        List<Love> loves = mapper.selectAll(userid);

        // 释放资源
        sqlSession.close();
        return loves;
    }

    /**
     * 根据 userid goodsid 删除收藏商品
     *
     * @param userid
     * @param goodsid
     */
    @Override
    public void deleteByUGid(int userid, int goodsid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        LoveMapper mapper = sqlSession.getMapper(LoveMapper.class);

        // 调用方法
        mapper.deleteByUGid(userid, goodsid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 loveid 删除收藏商品
     *
     * @param loveid
     */
    @Override
    public void deleteById(int loveid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        LoveMapper mapper = sqlSession.getMapper(LoveMapper.class);

        // 调用方法
        mapper.deleteById(loveid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 userid 删除商品列表（清空收藏夹）
     *
     * @param userid
     */
    @Override
    public void deleteAll(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        LoveMapper mapper = sqlSession.getMapper(LoveMapper.class);

        // 调用方法
        mapper.deleteAll(userid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
