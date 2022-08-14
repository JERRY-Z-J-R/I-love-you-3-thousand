package com.itheima.controller;

import com.itheima.domain.User;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class UserController {

    // 响应页面/跳转页面
    // 返回值为 String 类型，设置返回值为页面名称，即可实现页面跳转
    @RequestMapping("/toJumpPage")
    public String toJumpPage() {
        System.out.println("跳转页面");
        return "page.jsp";
    }

    // 响应文本数据
    // 返回值为 String 类型，设置返回值为任意字符串信息，即可实现返回指定字符串信息，需要依赖@ResponseBody注解
    @RequestMapping("/toText")
    @ResponseBody
    public String toText() {
        System.out.println("返回纯文本数据");
        return "response text";
    }

    // 响应 POJO 对象
    // 返回值为实体类对象，设置返回值为实体类类型，即可实现返回对应对象的 json 数据，需要依赖 @ResponseBody 注解和 @EnableWebMvc 注解
    @RequestMapping("/toJsonPOJO")
    @ResponseBody
    public User toJsonPOJO() {
        System.out.println("返回json对象数据");
        User user = new User();
        user.setName("itcast");
        user.setAge(15);
        return user;
    }

    // 响应 POJO 集合对象
    // 返回值为集合对象，设置返回值为集合类型，即可实现返回对应集合的 json 数组数据，需要依赖 @ResponseBody 注解和 @EnableWebMvc 注解
    @RequestMapping("/toJsonList")
    @ResponseBody
    public List<User> toJsonList() {
        System.out.println("返回json集合数据");
        User user1 = new User();
        user1.setName("传智播客");
        user1.setAge(15);

        User user2 = new User();
        user2.setName("黑马程序员");
        user2.setAge(12);

        List<User> userList = new ArrayList<User>();
        userList.add(user1);
        userList.add(user2);

        return userList;
    }
}
