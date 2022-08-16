package com.itheima.domain;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.Version;
import lombok.Data;

@Data
// 设置表名映射关系
// @TableName("tbl_user")
public class User {
    // 设置主键生成策略
    // @TableId(type = IdType.ASSIGN_ID)
    private Long id;
    private String name;
    @TableField(value = "pwd", select = false)
    private String password;
    private Integer age;
    private String tel;
    @TableField(exist = false)
    private Integer online;
    // 逻辑删除字段，标记当前记录是否被删除
    // @TableLogic(value = "0", delval = "1")
    private Integer deleted;
    @Version
    private Integer version;
}















