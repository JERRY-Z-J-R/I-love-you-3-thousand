package cn.lzj.service.impl;

import cn.lzj.mapper.UserMapper;
import cn.lzj.pojo.User;
import cn.lzj.service.UserService;
import cn.lzj.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class UserServiceImpl implements UserService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 根据 username password 查询用户
     *
     * @param username
     * @param password
     * @return
     */
    @Override
    public User selectUser(String username, String password) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        // 调用方法
        User user = mapper.selectUser(username, password);
        // 释放资源
        sqlSession.close();

        return user;
    }
}
