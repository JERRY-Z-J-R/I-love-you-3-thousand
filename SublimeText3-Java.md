---
title: Sublime Text3 & Java 环境搭建
date: 2020-12-19 09:36:24
categories: 
- [Java]
tags:
- Java
- Sublime Text3
- 环境搭建
cover: https://img-blog.csdnimg.cn/2021031322273363.jpg
---

# 【Sublime Text3 & Java 环境搭建】

> 原创内容，转载请注明出处！

# 一、打开用户配置文件夹

- 菜单栏 ——> 首选项 ——> 浏览插件目录
- 打开目录下的 `User` 文件夹

# 二、配置 Java 环境

编写一个 `JavaC.sublime-build` 文件放入 User 中
```sublime-build
{
"cmd": ["javac","-encoding","UTF-8","-d",".","$file"],
"file_regex": "^(...*?):([0-9]*):?([0-9]*)",
"selector": "source.java",
"encoding":"GBK",
// 执行完上面的命令就结束
// 下面的命令需要按Ctrl+Shift+b来运行
"variants":
    [
        {
            "name": "Run",
            "shell": true,
            "cmd" :  ["start","cmd","/c", "java ${file_base_name} &echo. & pause"],
            // /c是执行完命令后关闭cmd窗口,
            // /k是执行完命令后不关闭cmd窗口。
            // echo. 相当于输入一个回车
            // pause命令使cmd窗口按任意键后才关闭
            "working_dir": "${file_path}",
            "encoding":"GBK"
        }
    ]
}
```
# 三、编译 JavaC
- 快捷键 <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>B</kbd>
- 在弹窗中选择 `JavaC`

# 四、运行 JavaC - Run
- 快捷键 <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>B</kbd>
- 在弹窗中选择 `JavaC - Run`

# 五、说明

非个人喜好，不建议使用 Sublime Test3 进行 Java 的学习或开发。

如果是选择编辑器建议使用 Notepad++、EditPlus、VSCode。

如果是 IDE 建议选择 IDEA、Eclipse。