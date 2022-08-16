package com.itheima;

import com.itheima.dao.UserDao;
import com.itheima.domain.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class Mybatisplus04GeneratorApplicationTests {

    @Autowired
    private UserDao userDao;

    @Test
    void setlctAll() {
        List<User> userList = userDao.selectList(null);
        System.out.println(userList);
    }

}
