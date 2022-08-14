package com.itheima.controller;

import com.itheima.domain.User;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

// 请求参数
@Controller
public class UserController {

    // 普通参数：请求参数与形参名称对应即可完成参数传递
    @RequestMapping("/commonParam")
    @ResponseBody
    public String commonParam(String name, int age) {
        System.out.println("普通参数传递 name ==> " + name);
        System.out.println("普通参数传递 age ==> " + age);
        return "{'module':'common param'}";
    }

    // 普通参数：请求参数名与形参名不同时，使用 @RequestParam 注解关联请求参数名称与形参名称之间的关系
    @RequestMapping("/commonParamDifferentName")
    @ResponseBody
    public String commonParamDifferentName(@RequestParam("name") String userName, int age) {
        System.out.println("普通参数传递 userName ==> " + userName);
        System.out.println("普通参数传递 age ==> " + age);
        return "{'module':'common param different name'}";
    }

    // POJO参数：请求参数与形参对象中的属性对应即可完成参数传递
    @RequestMapping("/pojoParam")
    @ResponseBody
    public String pojoParam(User user) {
        System.out.println("pojo参数传递 user ==> " + user);
        return "{'module':'pojo param'}";
    }

    // 嵌套POJO参数：嵌套属性按照层次结构设定名称即可完成参数传递
    @RequestMapping("/pojoContainPojoParam")
    @ResponseBody
    public String pojoContainPojoParam(User user) {
        System.out.println("pojo嵌套pojo参数传递 user ==> " + user);
        return "{'module':'pojo contain pojo param'}";
    }

    // 数组参数：同名请求参数可以直接映射到对应名称的形参数组对象中
    @RequestMapping("/arrayParam")
    @ResponseBody
    public String arrayParam(String[] likes) {
        System.out.println("数组参数传递 likes ==> " + Arrays.toString(likes));
        return "{'module':'array param'}";
    }

    // 集合参数：同名请求参数可以使用 @RequestParam 注解映射到对应名称的集合对象中作为数据
    @RequestMapping("/listParam")
    @ResponseBody
    public String listParam(@RequestParam List<String> likes) {
        System.out.println("集合参数传递 likes ==> " + likes);
        return "{'module':'list param'}";
    }


    // 集合参数：json格式
    // 1.开启 json 数据格式的自动转换，在配置类中开启 @EnableWebMvc
    // 2.使用 @RequestBody 注解将外部传递的 json 数组数据映射到形参的集合对象中作为数据
    @RequestMapping("/listParamForJson")
    @ResponseBody
    public String listParamForJson(@RequestBody List<String> likes) {
        System.out.println("list common(json)参数传递 list ==> " + likes);
        return "{'module':'list common for json param'}";
    }

    // POJO参数：json格式
    // 1.开启 json 数据格式的自动转换，在配置类中开启 @EnableWebMvc
    // 2.使用 @RequestBody 注解将外部传递的 json 数据映射到形参的实体类对象中，要求属性名称一一对应
    @RequestMapping("/pojoParamForJson")
    @ResponseBody
    public String pojoParamForJson(@RequestBody User user) {
        System.out.println("pojo(json)参数传递 user ==> " + user);
        return "{'module':'pojo for json param'}";
    }

    // 集合参数：json格式
    // 1.开启 json 数据格式的自动转换，在配置类中开启 @EnableWebMvc
    // 2.使用 @RequestBody 注解将外部传递的 json 数组数据映射到形参的保存实体类对象的集合对象中，要求属性名称一一对应
    @RequestMapping("/listPojoParamForJson")
    @ResponseBody
    public String listPojoParamForJson(@RequestBody List<User> list) {
        System.out.println("list pojo(json)参数传递 list ==> " + list);
        return "{'module':'list pojo for json param'}";
    }

    // 日期参数
    // 使用 @DateTimeFormat 注解设置日期类型数据格式，默认格式 yyyy/MM/dd
    @RequestMapping("/dataParam")
    @ResponseBody
    public String dataParam(Date date,
                            @DateTimeFormat(pattern = "yyyy-MM-dd") Date date1,
                            @DateTimeFormat(pattern = "yyyy/MM/dd HH:mm:ss") Date date2) {
        System.out.println("参数传递 date ==> " + date);
        System.out.println("参数传递 date1(yyyy-MM-dd) ==> " + date1);
        System.out.println("参数传递 date2(yyyy/MM/dd HH:mm:ss) ==> " + date2);
        return "{'module':'data param'}";
    }

}











