package com.itheima.web.request;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

// 获取请求参数的通用方式
@WebServlet("/req4")
public class RequestDemo04 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取 Get 请求参数的方式
        String result = req.getQueryString();
        System.out.println(result);
        // 后续的逻辑处理……
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 获取 Post 请求参数的方式
        BufferedReader br = req.getReader();
        String result = br.readLine();
        System.out.println(result);
        // 后续的逻辑处理……
    }

    // 大部分情况，Get、Post 的业务处理部分的需求都是相同的，换句话说业务处理部分的代码一般是一样的
    // 可是，Get、Post 的请求参数获取方式却不同，这样会导致分开写后业务代码大量重复的问题
    // 解决办法有两种：
    //      1、RequestDemo05（不推荐）
    //      2、RequestDemo06（吐血推荐）
}
