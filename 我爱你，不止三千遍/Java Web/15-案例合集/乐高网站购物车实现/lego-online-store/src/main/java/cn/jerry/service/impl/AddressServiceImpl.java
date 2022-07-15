package cn.jerry.service.impl;

import cn.jerry.mapper.AddressMapper;
import cn.jerry.mapper.UserMapper;
import cn.jerry.pojo.Address;
import cn.jerry.service.AddressService;
import cn.jerry.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class AddressServiceImpl implements AddressService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 添加地址
     *
     * @param userid
     * @param address
     */
    @Override
    public void addAddress(int userid, String address) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        AddressMapper mapper = sqlSession.getMapper(AddressMapper.class);

        // 调用方法
        mapper.addAddress(userid, address);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 userid 查询地址列表
     *
     * @param userid
     * @return
     */
    @Override
    public List<Address> selectByUsId(int userid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        AddressMapper mapper = sqlSession.getMapper(AddressMapper.class);

        // 调用方法
        List<Address> addresses = mapper.selectByUsId(userid);
        // 释放资源
        sqlSession.close();
        return addresses;
    }

    /**
     * 根据 addressid 删除地址
     *
     * @param addressid
     */
    @Override
    public void deleteById(int addressid) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        AddressMapper mapper = sqlSession.getMapper(AddressMapper.class);

        // 调用方法
        mapper.deleteById(addressid);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
