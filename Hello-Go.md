---
title: Hello Go
date: 2020-12-01 14:00:01
categories:
- [Go]
tags:
- Go
- VSCode
cover: https://img-blog.csdnimg.cn/2021031717535497.jpg
---

# 【Hello Go】

> 原创内容，转载请注明出处！

# 一、Go 语言开发基本结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317175437338.png)

# 二、VSCode & Go

**请先在 VSCode 中安装 Golang 插件**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210317175437486.jpg)
```go
/*
** JERRY_Z 2020/10/29
*/

package main		// 表示该.go文件在main这个包中，go文件都必须归属于一个包中
import "fmt"		// 表示导入fmt这个包，导入这个包后就可以使用该包内的函数

func main() {		// func是一个关键字，表示这是一个函数，main为函数名，main为主函数，即程序的入口
	fmt.Println("Hello,World! Hello,Go!")		// 调用fmt包中的Println函数，用于输出
}
```

```bash
$ go bulid x.go   	# 编译.go文件（编译成功后生成同名.exe文件）
$ x.exe				# 运行.exe文件

$ go run x.go		# 编译.go文件并运行.exe文件（不推荐）
```
