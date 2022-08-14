package com.itheima.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/book")
public class BookController {
    // 请求路径映射
    // @RequestMapping("/book/save")
    @RequestMapping("/save")
    @ResponseBody
    public String save() {
        System.out.println("book save ...");
        return "{'module':'book save'}";
    }
}
