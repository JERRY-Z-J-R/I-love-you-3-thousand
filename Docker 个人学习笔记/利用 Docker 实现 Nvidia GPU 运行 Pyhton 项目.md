## 利用 Docker 实现 Nvidia GPU 运行 Python 项目

### 一、获取 tensorflow 镜像

> TensorFlow™是一个基于[数据流编程](https://baike.baidu.com/item/数据流编程/22735640)（dataflow programming）的符号数学系统，被广泛应用于各类[机器学习](https://baike.baidu.com/item/机器学习/217599)（machine learning）算法的编程实现，其前身是[谷歌](https://baike.baidu.com/item/谷歌/117920)的神经网络算法库DistBelief [1] 。
>
> Tensorflow拥有多层级结构，可部署于各类[服务器](https://baike.baidu.com/item/服务器/100571)、PC终端和[网页](https://baike.baidu.com/item/网页/99347)并支持[GPU](https://baike.baidu.com/item/GPU/105524)和[TPU](https://baike.baidu.com/item/TPU/20473545)高性能[数值计算](https://baike.baidu.com/item/数值计算/3729797)，被广泛应用于谷歌内部的产品开发和各领域的科学研究 [1-2] 。
>
> TensorFlow由谷歌[人工智能](https://baike.baidu.com/item/人工智能/9180)团队[谷歌大脑](https://baike.baidu.com/item/谷歌大脑/4649855)（Google Brain）开发和维护，拥有包括TensorFlow Hub、TensorFlow Lite、TensorFlow Research Cloud在内的多个项目以及各类[应用程序接口](https://baike.baidu.com/item/应用程序接口/10418844)（Application Programming Interface, API） [2] 。自2015年11月9日起，TensorFlow依据[阿帕奇授权协议](https://baike.baidu.com/item/阿帕奇授权协议/1642155)（Apache 2.0 open source license）[开放源代码](https://baike.baidu.com/item/开放源代码/114160) [2] 。

```shell
$ docker pull tensorflow/tensorflow
```

### 二、运行并进入 tensorflow/tensorflow 容器

```shell
$ docker run -it --name gpuPython --gpus all tensorflow/tensorflow:latest-gpu /bin/bash
```

### 三、配置 Python 代码所需的环境

```shell
$ pip install 镜像源地址 库名
```

### 四、运行 Python 程序

```shell
$ python demo.py
```

### 五、在 Linux 主机上查看 GPU 使用情况

```shell
$ nvidia-gmi
```

