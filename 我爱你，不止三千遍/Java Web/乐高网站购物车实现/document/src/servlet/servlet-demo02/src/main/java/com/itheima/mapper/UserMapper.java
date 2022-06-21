package com.itheima.mapper;

import com.itheima.pojo.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {


    /**
     * 根据用户名和密码查询用户对象
     *
     * @param username
     * @param password
     * @return
     */
    @Select("SELECT * FROM tb_user WHERE username = #{username} AND password = #{password}")
    User select(@Param("username") String username, @Param("password") String password);

    /**
     * 根据用户名查询用户对象
     *
     * @param username
     * @return
     */
    @Select("SELECT* FROM tb_user WHERE username = #{username}")
    User selectByUsername(String username);

    /**
     * 添加用户
     *
     * @param user
     */
    @Insert("INSERT INTO tb_user VALUES(null, #{username}, #{password})")
    void add(User user);
}
