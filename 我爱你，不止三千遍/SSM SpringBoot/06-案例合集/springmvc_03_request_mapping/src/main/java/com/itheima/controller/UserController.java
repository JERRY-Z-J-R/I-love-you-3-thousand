package com.itheima.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
// 类上方配置的请求映射与方法上面配置的请求映射连接在一起，形成完整的请求映射路径
@RequestMapping("/user")
public class UserController {
    // 请求路径映射
    @RequestMapping("/save")
    @ResponseBody
    public String save() {
        System.out.println("user save ...");
        return "{'module':'user save'}";
    }

    // 请求路径映射
    @RequestMapping("/delete")
    @ResponseBody
    public String delete() {
        System.out.println("user delete ...");
        return "{'module':'user delete'}";
    }

}
