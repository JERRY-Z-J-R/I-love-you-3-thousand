package com.itheima.config;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.support.AbstractDispatcherServletInitializer;

// 使用配置类替换 web.xml
// 定义一个 Servlet 容器启动的配置类，在里面加载 Spring 的配置
public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {
    // 加载 SpringMVC 容器配置
    @Override
    protected WebApplicationContext createServletApplicationContext() {
        // 初始化 WebApplicationContext 对象
        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        // 加载指定配置类
        ctx.register(SpringMvcConfig.class);
        return ctx;
    }

    // 设置哪些请求归属 SpringMVC 处理
    @Override
    protected String[] getServletMappings() {
        // 设置所有请求归 SpringMVC 处理
        return new String[]{"/"};
    }

    // 加载 Spring 容器配置
    @Override
    protected WebApplicationContext createRootApplicationContext() {
        return null;
    }
}
