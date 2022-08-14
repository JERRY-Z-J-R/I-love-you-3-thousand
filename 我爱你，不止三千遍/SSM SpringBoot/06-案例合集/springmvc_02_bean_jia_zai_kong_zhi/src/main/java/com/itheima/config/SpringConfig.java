package com.itheima.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;
import org.springframework.stereotype.Controller;

@Configuration
// 方式一：修改 Spring 配置类，设定扫描范围为精准范围
// @ComponentScan({"com.itheima.service", "com.itheima.dao"})

// 方式二：修改 Spring 配置类，设定扫描范围为 com.itheima，排除掉 controller 包中的 bean
// 设置 spring 配置类加载 bean 时的过滤规则，当前要求排除掉表现层对应的 bean
// excludeFilters 属性：设置扫描加载 bean 时，排除的过滤规则
// type 属性：设置排除规则，当前使用按照 bean 定义时的注解类型进行排除
// classes 属性：设置排除的具体注解类，当前设置排除 @Controller 定义的 bean
@ComponentScan(value = "com.itheima",
        excludeFilters = @ComponentScan.Filter(
                type = FilterType.ANNOTATION,
                classes = Controller.class
        )
)
public class SpringConfig {
}
