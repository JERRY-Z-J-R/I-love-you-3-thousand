# 【Cisco思科模拟器 交换机IP地址的配置】

> 原创内容，转载请注明出处！

# 一、IP地址基本概念
IP 地址通俗的解释：唯一识别一台主机的标记
（IP地址是一个32位的标记符，如：192.168.1.1）
（lpv4标准：32位，lpv6标准：128位）

# 二、十进制与二进制的快速转换（凑权法）
2<sup>0</sup> = 1
2<sup>1</sup> = 2
2<sup>2</sup> = 4
2<sup>3</sup> = 8
2<sup>4</sup> = 16
2<sup>5</sup> = 32
2<sup>6</sup> = 68
2<sup>7</sup> = 128
2<sup>8</sup> = 256
2<sup>9</sup> = 512
2<sup>10</sup> = 1024
2<sup>11</sup> = 2048

转换方法举例：

2049 = 2048 + 1：
1000 0000 0000 + 1 = 1000 0000 0001

259 = 256 + 3 = 256 + 2 + 1:
100000000 + 10 + 1 = 1 0000 0011 (0001 0000 0011)

1023 = 1024 - 1:
1000 0000 0000 - 1 = 011 1111 1111 (0011 1111 1111)

# 三、选择交换机与主机并连接
![](https://img-blog.csdnimg.cn/20201011183340875.png)
![](https://img-blog.csdnimg.cn/2020101118401779.png)
![](https://img-blog.csdnimg.cn/2020101118515180.png)
![](https://img-blog.csdnimg.cn/20201011185212817.png)
![](https://img-blog.csdnimg.cn/20201011185231832.png)

# 四、配置主机
![](https://img-blog.csdnimg.cn/2020101118532092.png)
![](https://img-blog.csdnimg.cn/20201011185342130.png)

# 五、命令配置交换机
![](https://img-blog.csdnimg.cn/20201011185443770.png)
![](https://img-blog.csdnimg.cn/20201011185501559.png)
![](https://img-blog.csdnimg.cn/20201011185522946.png)
![](https://img-blog.csdnimg.cn/2020101118560726.png)
![](https://img-blog.csdnimg.cn/20201011185623431.png)
![](https://img-blog.csdnimg.cn/20201011185656569.png)
![](https://img-blog.csdnimg.cn/20201011185717235.png)
![](https://img-blog.csdnimg.cn/20201011185735914.png)
![](https://img-blog.csdnimg.cn/20201011185758286.png)

# 六、检测
![](https://img-blog.csdnimg.cn/20201011185822810.png)
![](https://img-blog.csdnimg.cn/20201011185903652.png)
![](https://img-blog.csdnimg.cn/20201011185943554.png)
![](https://img-blog.csdnimg.cn/20201011185959693.png)

