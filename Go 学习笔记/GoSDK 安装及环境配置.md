# 【GoSDK 安装及环境配置】

> 原创内容，转载请注明出处！

# 一、进入 Go 官网

[Go 官网](https://golang.google.cn/)

# 二、点击 Download Go

![](https://img-blog.csdnimg.cn/2021031718060739.jpg)

# 三、选择系统版本下载

![](https://img-blog.csdnimg.cn/2021031718060799.jpg)

# 四、安装 GoSDK

原则：一律下一步直到安装成功。


# 五、打开安装包进入 bin 目录

![](https://img-blog.csdnimg.cn/2021031718132267.png)

当我们进入到 sdk 的 bin 目录中，可以发现有两个 .exe 文件（`go.exe`，`gofmt.exe`），其中 `go.exe` 就是 go 的编译器，我们在稍后要将他配置到环境变量中，以方便全局调用。

# 六、配置环境变量

1. 进入系统属性，环境变量，系统变量
2. 新建 `GOROOT`，变量值：`sdk 目录全局路径`
3. 编辑 `Path`，变量值：`%GOROOT%\bin`
4. 新建 `GOPATH`，变量值：`E:code\go\goproject`
5. 逐步确定退出
6. 打开命令行键入 `go`，成功识别即为成功