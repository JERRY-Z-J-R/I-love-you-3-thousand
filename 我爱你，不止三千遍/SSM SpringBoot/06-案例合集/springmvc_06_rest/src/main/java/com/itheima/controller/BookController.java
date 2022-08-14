package com.itheima.controller;

import com.itheima.domain.Book;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

// @Controller
// @ResponseBody配置在类上可以简化配置，表示设置当前每个方法的返回值都作为响应体
// @ResponseBody
@RestController     // 使用@RestController注解替换@Controller与@ResponseBody注解，简化书写
@RequestMapping("/books")
public class BookController {

    // @RequestMapping( method = RequestMethod.POST)
    @PostMapping        // 使用@PostMapping简化Post请求方法对应的映射配置
    public String save(@RequestBody Book book) {
        System.out.println("book save..." + book);
        return "{'module':'book save'}";
    }

    // @RequestMapping(value = "/{id}" ,method = RequestMethod.DELETE)
    @DeleteMapping("/{id}")     // 使用@DeleteMapping简化DELETE请求方法对应的映射配置
    public String delete(@PathVariable Integer id) {
        System.out.println("book delete..." + id);
        return "{'module':'book delete'}";
    }

    // @RequestMapping(method = RequestMethod.PUT)
    @PutMapping         // 使用@PutMapping简化Put请求方法对应的映射配置
    public String update(@RequestBody Book book) {
        System.out.println("book update..." + book);
        return "{'module':'book update'}";
    }

    // @RequestMapping(value = "/{id}" ,method = RequestMethod.GET)
    @GetMapping("/{id}")    // 使用@GetMapping简化GET请求方法对应的映射配置
    public String getById(@PathVariable Integer id) {
        System.out.println("book getById..." + id);
        return "{'module':'book getById'}";
    }

    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping             // 使用@GetMapping简化GET请求方法对应的映射配置
    public String getAll() {
        System.out.println("book getAll...");
        return "{'module':'book getAll'}";
    }
}
