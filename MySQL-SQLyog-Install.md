---
title: MySQL & SQLyog 安装配置
date: 2021-03-16 00:15:06
categories:
- [数据库]
- [MySQL]
tags:
- 数据库
- SQL
- MySQL
- 安装配置
cover: https://img-blog.csdnimg.cn/20210316001814464.jpg
---

# 【MySQL & SQLyog 安装配置】

> 原创内容，转载请注明出处！

> 以 MySQL 5.7 版本为例。

# 一、MySQL 安装配置

### 方式一、绿色安装（推荐）

**绿色版，即压缩打包版本。**

相比较 `.exe` 的安装方式，具有：解压即用、卸载便捷、无需考虑注册表残留……优点。

- 下载安装包

链接：https://pan.baidu.com/s/1wiLm2DpewB76SediyEOrXw 
提取码：2454 

- 解压安装包

- 将安装包中的 `bin` 目录全局路径添加到系统环境变量 `Path` 里

- 在安装包根目录下新建 `my.ini` MySQL 配置文件

- 编辑 `my.ini` 文件，注意根据安装包位置替换路径

```ini
[mysqld]
basedir=D:\Application\MySQL\mysql-5.7.24\
datadir=D:\Application\MySQL\mysql-5.7.24\data\	
port=3306
skip-grant-tables
```

- 启动管理员模式下的 cmd，并将路径切换到 bin 目录，然后输入 `mysqld -install` （安装 MySQL）
- 再输入 `mysqld --initialize-insecure --user=mysql` 初始化数据文件
- 输入 `net start mysql` 启动 MySQL 服务
- 然后再次启动 MySQL，并输入命令 `mysql -u root -p` 进入 MySQL 管理界面（密码为空）
- 进入界面后更改 root 密码（此处为 123456）

```mysql
update mysql.user set authentication_string=password('123456') where user='root' and Host='localhost';
```

- 最后输入 `flush privileges;` 刷新权限

- 删除 `my.ini` 文件最后一句 `skip-grant-tables` 

- 重启 MySQL 即可正常使用

```bash
net stop mysql
net start mysql
```

### 方式二、.exe 安装

**.exe 安装方式，存在卸载残留问题。**

- 下载安装程序

链接：https://pan.baidu.com/s/1n4E_nUmeOCSSvGhMimmlkQ 
提取码：2454

- 双击安装 `vcredist_x64.exe`
- 双击安装 `mysql-installer-community-5.7.19.0.msi`
- 除了设置 `MySQL Root Password` 和 `Windows Service Name` 外，其他一律下一步
- 将 MySQL 安装包内的 `bin` 目录添加到 `Path` 系统环境变量
- 启动管理员模式下的 cmd
- 输入 `net start mysql` 启动 MySQL 服务
- 输入命令 `mysql -u root -p` ，验证密码后进入 MySQL 管理界面
- 安装配置成功

# 二、SQLyog 安装连接 MySQL

- 下载安装包

链接：https://pan.baidu.com/s/1mpXh04DAHzx5yCZmrZc1vw 
提取码：2454 

- 双击安装 SQLyog-v.13.1.1.x64.exe
- 一律默认下一步，直到安装成功
- 输入 名称（自定义） 及 证书密钥：`60c1b896-7c22-4405-9f46-a6bce776ab36`

- 打开  SQLyog
- 开始配置连接 MySQL
  - 保/存的连接：`localhost`
  - 我的SQL主机地址：`localhost`
  - 用户名：`root`
  - 密码：`123456`
  - 端口：`3306`
  - 勾选 `使用压缩协议`
  - 会话空闲超时选择 `默认`
  - 点击 `连接`
  - 配置连接成功