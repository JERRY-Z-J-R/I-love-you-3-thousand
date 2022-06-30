package com.itheima;

import com.itheima.pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MyBatisDemo {
    public static void main(String[] args) throws IOException {
        // 1. 加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2. 获取 SqlSession 对象，用它来执行 sql
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 3. 执行 sql
        List<User> users = sqlSession.selectList("test.selectAll"); // 参数是一个字符串，该字符串必须是映射配置文件的 namespace.id
        System.out.println("-------------------");
        System.out.println("-------------------");
        System.out.println(users);
        System.out.println("-------------------");
        System.out.println("-------------------");
        // 4. 释放资源
        sqlSession.close();
    }
}
