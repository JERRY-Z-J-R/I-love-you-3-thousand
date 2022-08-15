package com.itheima.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
public class BookController {
    @Value("${lesson}")
    private String lesson;
    @Value("${server.port}")
    private Integer port;
    @Value("${enterprise.subject[0]}")
    private String subject_00;

    @GetMapping("/{id}")
    public String getById(@PathVariable Integer id) {
        System.out.println(lesson);
        System.out.println(port);
        System.out.println(subject_00);
        return "hello , spring boot!";
    }

    // SpringBoot 还可以使用 @Autowired 注解注入 Environment 对象的方式读取数据
    // @Autowired
    // private Environment env;
    //
    // @GetMapping("/{id}")
    // public String getById(@PathVariable Integer id){
    //     System.out.println(env.getProperty("lesson"));
    //     System.out.println(env.getProperty("enterprise.name"));
    //     System.out.println(env.getProperty("enterprise.subject[0]"));
    //     return "hello , spring boot!";
    // }
}
