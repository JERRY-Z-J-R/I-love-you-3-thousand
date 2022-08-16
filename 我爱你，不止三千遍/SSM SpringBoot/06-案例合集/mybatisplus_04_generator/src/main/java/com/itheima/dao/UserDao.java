package com.itheima.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itheima.domain.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author 黑马程序员
 * @since 2022-08-16
 */
@Mapper
public interface UserDao extends BaseMapper<User> {

}
