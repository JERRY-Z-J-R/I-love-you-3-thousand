package cn.lzj.service;

import cn.lzj.pojo.User;

public interface UserService {
    /**
     * 根据 username password 查询用户
     *
     * @param username
     * @param password
     * @return
     */
    User selectUser(String username, String password);
}
