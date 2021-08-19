---
title: Windows10优化右键菜单栏选项
date: 2020-12-29 19:56:01
categories:
- [Windows]
tags:
- Windows
- 菜单栏
- 优化
cover: https://img-blog.csdnimg.cn/20210318002423818.png
---
# 【Windows10优化右键菜单栏选项】

> 原创内容，转载请注明出处！

# 一、说明

许多软件在安装之后会自动修改 Windows10 注册表的内容，从而在右键菜单栏中添加一些该软件的快捷功能。但实际上大部分情况却是：我们需要的软件快捷功能没有，我们不需要的软件快捷功能却有一大堆……。看着密密麻麻却没有任何用的 Windows10 右键菜单栏选项，该怎么办呢？凉拌是不可能的，当然要去 Windows10 注册表修改相关内容啊！（注：下面以添加 CMD 和 VSCode 的快捷入口举例）

# 二、打开注册表

- <kbd>Win</kbd> + <kbd>R</kbd> 打开 运行
- 输入 `regedit` 
- 点击确定

# 三、进入 shell


在注册表中进入到 `HKEY_CLASSES_ROOT\Directory\Background\shell` 路径下。

# 四、修改 shell

当我们需要清除右键菜单栏的相关快捷功能时就直接删除 shell 中的相关项即可……
当我们需要添加右键菜单栏的相关快捷功能时就在 shell 下新建项，并在该项的下面在新建 command 项……，再在项内新建相关类型的量并编辑相关值……

# 五、新建项

- 选择 shell 目录
- 右键选择 `新建`
- 选择 `项`
- 填写 `项名`

## 5.1 Open CMD Here

- 新建 `Open CMD Here` 项
- 选择 `Open CMD Here` 目录
- 右键选择 `新建`
- 选择 `项`
- 填写 `command` 项名
- 选择 `command` 目录
- 在右侧内容框中为 REG_SZ 类型的默认字符串值添加数据： `"C:\Windows\System32\cmd.exe" "--working-dir" "%v."`

## 5.2 Open VSCode Here

- 新建 `Open VSCode Here` 项
- 选择 `Open VSCode Here` 目录
- 右键选择 `新建`
- 选择 `项`
- 填写 `command` 项名
- 选择 `command` 目录
- 在右侧内容框中为 REG_SZ 类型的默认字符串值添加数据： `"D:\Application\VSCode\InsPackage\Microsoft VS Code\Code.exe" "%V"`（注意选择具体路径）
- 再次选择 `Open VSCode Here` 目录
- 在右侧内容框中为 REG_SZ 类型的默认字符串值添加数据：`Open VSCode Here`
- 在右侧内容框中 右键 `新建` `字符串值`
- 填写名称为：`lcon`
- 填写数据为：`D:\Application\VSCode\InsPackage\Microsoft VS Code\Code.exe`（注意选择具体路径）