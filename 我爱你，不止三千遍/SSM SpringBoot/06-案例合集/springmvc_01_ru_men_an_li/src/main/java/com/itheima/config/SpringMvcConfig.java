package com.itheima.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

// 创建 SpringMVC 配置文件，加载 controller 对应的 Bean
@Configuration
@ComponentScan("com.itheima.controller")
public class SpringMvcConfig {
}
