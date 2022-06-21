package com.itheima.service;

import com.itheima.mapper.BrandMapper;
import com.itheima.pojo.Brand;
import com.itheima.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class BrandService {
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 查询所有
     */
    public List<Brand> selectAll() {
        // 获取 SqlSession
        SqlSession sqlSession = factory.openSession();
        // 获取 BrandMapper
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        // 调用方法
        List<Brand> brands = mapper.selectAll();
        // 释放资源
        sqlSession.close();
        return brands;
    }

    /**
     * 添加
     */
    public void add(Brand brand) {
        // 获取 SqlSession
        SqlSession sqlSession = factory.openSession();
        // 获取 BrandMapper
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        // 调用方法
        mapper.add(brand);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 id 查询
     */
    public Brand selectById(int id) {
        // 获取 SqlSession
        SqlSession sqlSession = factory.openSession();
        // 获取 BrandMapper
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        // 调用方法
        Brand brand = mapper.selectById(id);
        sqlSession.close();
        return brand;
    }

    /**
     * 修改
     */
    public void update(Brand brand) {
        // 获取 SqlSession
        SqlSession sqlSession = factory.openSession();
        // 获取 BrandMapper
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        // 调用方法
        mapper.update(brand);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    public void delete(int id) {
        // 获取 SqlSession
        SqlSession sqlSession = factory.openSession();
        // 获取 BrandMapper
        BrandMapper mapper = sqlSession.getMapper(BrandMapper.class);
        // 调用方法
        mapper.delete(id);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
