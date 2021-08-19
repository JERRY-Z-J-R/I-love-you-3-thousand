# 【Python 安装与环境配置】

> 原创内容，转载请注明出处！

# 一、下载 Python
- [Python 官网链接](http://www.python.org)
- 点击 Downloads
- 选择版本下载

![](https://img-blog.csdnimg.cn/20210317185408339.jpg)
![](https://img-blog.csdnimg.cn/20210317185408362.jpg)

# 二、安装 Python

- 双击安装包
- 勾选
  -  `Install launcher for all users (recommended)`
  -  `Add Python 3.8 to PATH`
- 点击 `Customize installation`
- 勾选
  -  `Documentation`
  - `pip` 
  - `tcl/tk and IDLE`
  - ``Python test suite`
  - `py launcher`
  - `for all users (requires elevation)`
- 点击 Next
- 勾选
  - `Install for all users`
  - `Associate files with Python (requires the py launcher)`
  - `Create shortcuts for installed applications`
  - `Add Python to environment variables`
  - `Precompile standard library`
- 修改安装路径
- 点击 Install
- 安装完成

# 三、配置 Python 与 pip

`python.exe` 位于 python 安装根目录。

`pip.exe` 位于 python 安装根目录里的 Scripts 目录内。

将以上路径的全局路径分别添加到系统的 Path 环境变量中。

打开 命令行 分别键入 `python`，`pip` 成功识别即为配置成功。

# 四、配置 IDLE

`idle.bat/idle.py` 位于 python 安装根目录里的 Lib\idlelib 目录内。

将以上路径的全局路径添加到系统的 Path 环境变量中。

打开 命令行 键入 `IDLE` 成功识别即为配置成功。



