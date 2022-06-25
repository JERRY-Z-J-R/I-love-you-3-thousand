package cn.jerry.service.impl;

import cn.jerry.mapper.OrdersMapper;
import cn.jerry.mapper.UserMapper;
import cn.jerry.pojo.User;
import cn.jerry.service.UserService;
import cn.jerry.util.SqlSessionFactoryUtils;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class UserServiceImpl implements UserService {
    // 创建 SqlSessionFactory 工厂对象
    SqlSessionFactory factory = SqlSessionFactoryUtils.getSqlSessionFactory();

    /**
     * 新增用户
     *
     * @param username
     * @param password
     */
    @Override
    public void addUser(String username, String password) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        // 调用方法
        mapper.addUser(username, password);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }

    /**
     * 根据 username 查询用户
     *
     * @param username
     * @return
     */
    @Override
    public User selectUserByName(String username) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        // 调用方法
        User user = mapper.selectUserByName(username);
        // 释放资源
        sqlSession.close();

        return user;
    }

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

    /**
     * 根据 username password 查询用户 id
     *
     * @param username
     * @param password
     * @return
     */
    @Override
    public Integer selectUsId(String username, String password) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        // 调用方法
        Integer userid = mapper.selectUsId(username, password);
        // 释放资源
        sqlSession.close();

        return userid;
    }

    /**
     * 更新密码
     *
     * @param userid
     * @param password
     */
    @Override
    public void updateUser(int userid, String password) {
        // 获取 SqlSession 对象
        SqlSession sqlSession = factory.openSession();
        // 获取 UserMapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);

        // 调用方法
        mapper.updateUser(userid, password);
        // 提交事务
        sqlSession.commit();
        // 释放资源
        sqlSession.close();
    }
}
