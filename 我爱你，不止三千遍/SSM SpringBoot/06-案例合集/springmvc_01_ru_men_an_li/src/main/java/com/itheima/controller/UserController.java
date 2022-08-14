package com.itheima.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

// 定义 controller
// 使用 @Controller 定义 Bean
@Controller
public class UserController {

    @RequestMapping("/save")      // 设置当前的操作路径
    @ResponseBody                   // 设置当前操作的返回值类型（将返回值转为特定格式（JSON）后写入到 response 对象的 body 区）
    public String save() {
        System.out.println("User save ...");
        // 返回一个 JSON 数据
        return "{'module': 'springmvc'}";
    }

    @RequestMapping("/delete")
    @ResponseBody
    public String delete() {
        System.out.println("User delete");
        return "{'module': 'springmvc delete'}";
    }
}
