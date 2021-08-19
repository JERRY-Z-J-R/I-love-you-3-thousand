---
title: VMware Player & Ubuntu 环境搭建
date: 2021-03-16 01:09:09
categories:
- [虚拟机]
- [Linux]
tags:
- 虚拟机
- VMware
- Linux
- Ubuntu
- 环境搭建
cover: https://img-blog.csdnimg.cn/20210316015540114.jpg
---

# 【VMware Player & Ubuntu 环境搭建】

> 原创内容，转载请注明出处！

# README

以下内容以 `VMware Workstation 16 Player` 虚拟机安装 `Ubuntu 20.04.2.0 STL` 系统为例。

注意：本教程主要面向 Linux 初学者，初衷是提供一个 稳定、简单、美观 的环境，这也是选择以上两种平台来搭建 Linux 虚拟环境的原因。

- `VMware Workstation 16 Player` 比较稳定的免费版本虚拟机
- `Ubuntu 20.04.2.0 STL` 2020 年发布的长期支持版 Ubuntu

# 安装搭建步骤

### （1）下载 虚拟机 及 乌班图 ISO 镜像文件

**官网下载方式**

- [VMware Workstation 16 Player 官方下载链接](https://www.vmware.com/cn/products/workstation-player/workstation-player-evaluation.html)

- [Ubuntu 20.04.2.0 STL 官方下载链接](https://cn.ubuntu.com/download)

**百度网盘下载方式**

- VMware Workstation 16 Player

链接：https://pan.baidu.com/s/1zQqm-liXlio1iLaYhPt8dA 
提取码：2454 

- Ubuntu 20.04.2.0 STL

链接：https://pan.baidu.com/s/1h8y99rOpMgfT527tpFXEbw 
提取码：2454 

### （2）安装 VMware Player

原则：一律下一步直到安装成功。

### （3）搭建 Ubuntu 虚拟机

- 打开 VMware Workstation 16 Player
- 选择 创建新虚拟机
- 选择 稍后安装操作系统，下一步
- 选择 Linux，版本：Ubuntu 64 位，下一步
- 选择虚拟机位置（建议不要放在 C 盘），下一步
- 默认，下一步
- 默认，完成
- 编辑虚拟机设置
- 选择 “硬件”，“CD/DVD（SATA)”
- 连接选择 “使用 ISO 映象文件”
- 将 Ubuntu 20.04.2.0 STL 的 ISO 文件导入
- 点击确定
- 开启虚拟机
- 等待初始化，进入系统页面
- 跟随 Ubuntu 新手导航设置并安装系统（此过程可能耗时较久）
- 环境搭建成功

### （4）VMware Ubuntu 虚拟机文件共享设置

如果要将母机上的文件复制或拖拽到 VMware Ubuntu 虚拟机 中，那么需要安装 VMware 虚拟机的 Linux Tool 工具。

推荐的安装方式，打开 Ubuntu 终端分别键入以下命令：

```bash
$ sudo apt-get autoremove open-vm-tools

$ sudo apt-get install open-vm-tools-desktop 
```

### （5）VMware Ubuntu 更新镜像源

假如遇到命令行中安装软件找不到安装源的情况下，可以尝试更新镜像源：

```bash
$ sudo apt-get update
```

或者可以在 Ubuntu 的设置面板找到：`About` ——> `Software Updates` ——> `Download from`，此处切换软件源即可，例如：`http://mirrors.aliyun.com/ubuntu`。

### （6）Ubuntu 安装、卸载软件

```bash
# 安装软件
sudo apt-get install 软件名

# 卸载软件
sudo apt-get remove 软件名
```

说明：`sudo` 是权限模式。

### （7）VMware 打包

- 找到 VMware 虚拟机对应的系统安装文件夹
- 拷贝该文件夹到其他存储位置
- 打开 VMware，菜单栏选择 `打开`
- 找到刚才的文件夹打开里面的 `.vmx` 文件
- 即可成功启动虚拟机

