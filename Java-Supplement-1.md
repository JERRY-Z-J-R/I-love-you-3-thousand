---
title: 【Java标识符命名规则】Java小抄(1)
date: 2020-12-21 15:48:55
categories:
- [Java]
tags:
- Java
- 命名规范
cover: https://img-blog.csdnimg.cn/20210316084735322.jpg
---

# 【Java标识符命名规则】Java小抄(1)

> 原创内容，转载请注明出处！

# 一、文件夹（项目的组织与模块的分类）

**原则：非特殊情况，全部小写，单词之间用 `-` 连接（非必要情况，尽量控制在一个单词的文件名长度）。**

# 二、包（更好地组织类并解决类名冲突问题）

**原则：全部小写，域名反写。**

# 三、类、接口（大驼峰表示法）
**原则：第一个单词首字母大写，其余单词首字母大写。**

# 四、对象、方法、变量（小驼峰表示法）
**原则：第一个单词首字母小写，其余单词首字母大写。**

# 五、常量
**原则：全部大写，多个单词间使用 `_` 符号连接。**

# 六、命名规则要求：见名知意

**原则：通俗易懂第一，长度第二。**

# 七、示例

**NamingTheDemo.java**

```java
package com.jerry.java.demo;	// 所在包

public class NamingTheDemo {
    public static void main(String[] args) {
        // 实例化计算机专业学生对象：jerryZhou
        ComputerMajorsStudents jerryZhou = new ComputerMajorsStudents("jerryZhou", 201940, 20);
        jerryZhou.personalInformation();
        jerryZhou.programming();
        jerryZhou.playGames();
    }
}

// 接口：程序员技能
interface ProgrammerSkill {
    public void programming();      // 编程
    public void playGames();        // 玩游戏
}

// 类：计算机专业学生
class ComputerMajorsStudents implements ProgrammerSkill {
    private String name;
    private int id;
    private int age;
    // 字符串常量：大学专业
    public static final String UNIVERSITY_MAJOR = "Computer Science And Technology";

    // 空参构造函数
    public ComputerMajorsStudents() {
    }

    // 带参构造函数
    public ComputerMajorsStudents(String name, int id, int age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // 个人信息
    public void personalInformation() {
        System.out.println("Name:" + name + "\nId:" + id + "\nAge:" + age + "\nUniversity major:" + UNIVERSITY_MAJOR);

    }

    // 重写接口方法
    public void programming() {
        System.out.println("Coding...");
    }

    // 重写接口方法
    public void playGames() {
        System.out.println("Play...");
    }
}
```

