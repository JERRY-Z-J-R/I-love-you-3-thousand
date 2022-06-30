package cn.lzj.mapper;

import cn.lzj.pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    /**
     * 根据 username password 查询用户
     *
     * @param username
     * @param password
     * @return
     */
    User selectUser(@Param("username") String username, @Param("password") String password);
}
