package cn.jerry.mapper;

import cn.jerry.pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    /**
     * 新增用户
     *
     * @param username
     * @param password
     */
    void addUser(@Param("username") String username, @Param("password") String password);

    /**
     * 根据 username 查询用户
     *
     * @param username
     * @return
     */
    User selectUserByName(String username);

    /**
     * 根据 username password 查询用户
     *
     * @param username
     * @param password
     * @return
     */
    User selectUser(@Param("username") String username, @Param("password") String password);

    /**
     * 更新密码
     *
     * @param userid
     * @param password
     */
    void updateUser(@Param("userid") int userid, @Param("password") String password);
}
