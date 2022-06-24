package cn.jerry.service;

import cn.jerry.pojo.User;
import org.apache.ibatis.annotations.Param;

public interface UserService {
    /**
     * 新增用户
     *
     * @param username
     * @param password
     */
    void addUser(String username, String password);

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
    User selectUser(String username, String password);

    /**
     * 更新密码
     *
     * @param userid
     * @param password
     */
    void updateUser(int userid, String password);
}
