# 《Python编程从入门到实践》

> 基于《Python编程从入门到实践》（第二版）
>
> 基于 Python 3.8
>
> 归纳总结 + 知识补充
>
> 原创内容，转载请注明出处！

# 一、起步

> 以 Windows 为例

**（1）安装 Python**

1. 进入 Python 官网：[https://www.python.org/](https://www.python.org/)
2. 点击导航栏的 Downloads
3. 找到需要的 Python 版本点击下载（推荐 3.8 及其以上）
4. 双击 .exe 文件进行安装
5. 勾选 Add Python 3.x to PATH（自动添加到环境变量）
6. 检查 pip（Python 包管理工具）是否勾选，若没请勾选
7. 默认下一步（安装路径建议自选在非C盘路径下）
8. 安装成功

**（2）交互式 Python**

1. 打开命令行窗口
2. 输出 `python` 命令
3. 进入 Python 终端会话（出现 >>> 提示符）
4. 交互式执行代码段
5. 输入 `exit()` 退出终端会话

**（3）编写 Python 脚本**

1. 使用文本编辑器编辑 Python 脚本代码
2. 保存脚本代码为 `xxx.py` 文件
3. 打开命令行窗口
4. 使用 `cd` 命令切换到 `xxx.py` 文件所在路径下
5. 执行 `python xxx.py` 命令
6. 成功运行 Python 脚本

> 小提示：
>
> - 当计算机中已经安装过 Python 的 2.x 版本时，命令行中执行 `python` 默认调用的是 2.x 版本，若此时要指定调用 3.x 版本，请将 `python` 命令替换为 `python3` 命令。
> - 若安装时没有勾选 Add Python 3.x to PATH，则需要手动配置环境变量，请将 python.exe（位于 Python 安装根目录）以及 pip.exe（位于 Python 安装根目录里的 Scripts 目录）所在的全局路径分别添加到系统的 Path 环境变量中，保存后打开命令行分别键入 `python`、`pip` 成功识别即为配置成功。
> - `.py` 后缀表示一个 Python 文件，`xx_xx.py` 其名称可以由英文字母、数字、下划线构成，请全部使用小写字母，并以英文字母开头，词与词之间用 `_` 连接。

# 二、变量和简单数据类型

```python
# 输出函数 print()
print("hello")
print("Python!")

# 运行结果：
# hello
# Python!

# 小提示：
# Python的print()后会自动换行
```

```python
# 添加变量（赋值符号：=）
student_name = "zhoujirui"
student_age = 22
# 使用变量
print(student_name)
print(student_age)
# 修改变量（重新赋值）
student_name = "jerry"
student_age = 18
# 使用变量
print(student_name)
print(student_age)

# 运行结果：
# zhoujirui
# 22
# jerry
# 18

# 小提示：
# 1、变量名的组成：字母、数字、下划线_
# 2、变量的命名规范：字母开头，词与词之间用_连接，全为小写字母（C语言命名风格）
# 3、变量命名要“意简言赅”，name优于n，student_name优于s_n，student_name优于name_of_student 
# 4、尽量避免单独使用小写字母l和大写字母O，因为极其容易被误以为是数字1和0
```
> 小提示：变量名引用错误时会报错【NameError: name '变量名' is not defined】

```python
# 字符串""或''
name_01 = "jerry"
name_02 = 'jerry'

# 小提示：
# 1、推荐使用""定义字符串，因为在字符串中也许会出现"I'm a geek"这种引号嵌套情况
# 2、无论使用哪一种引号方式，关键在于要做到“整体统一”
```

```python
# 字符串大小写格式化
# 首字母大写：title()
# 全字母大写：upper()
# 全字母小写：lower()
name = "aBc"
print(name)
print(name.title())
print(name.upper())
print(name.lower())
print(name)

# 运行结果：
# aBc
# Abc
# ABC
# abc
# aBc

# 小提示：
# 1、title()、upper()、lower()属于Python字符串自带函数，通过“打点”调用
# 2、字符串大小写格式化是临时的，不会对原来的值产生改变，若要改变需进行自我赋值，比如：name = name.title()
```

```python
# 字符串拼接
boy_name = "Jerry"
girl_name = "Pingyang"
# +：加号连接符
lovers_01 = boy_name + " loves " + girl_name + " forever!"
# f字符串
lovers_02 = f"{boy_name} loves {girl_name} forever!"
# format()函数
lovers_03 = "{} loves {} forever!".format(boy_name, girl_name)
# 输出
print(lovers_01)
print(lovers_02)
print(lovers_03)

# 运行结果：
# Jerry loves Ping yang forever!
# Jerry loves Ping yang forever!
# Jerry loves Ping yang forever!

# 小提示：
# 1、加号连接符的前提是“+”左右两边至少有一边必须是字符串，否则执行的是数学加分运算
# 2、f字符串是format()函数的升级版，是Python3.6开始引入的，之前的版本无法使用
```

```python
# 字符串添加空白
# \n：换行符
# \t：制表符（Tab）
print("I love languages:\n\tC++\n\tJava\n\tPython\n\tGolang\n\tJavaScript")

# 运行结果：
# I love languages:
# 	C++
# 	Java
# 	Python
# 	Golang
# 	JavaScript

# 小提示：
# 制表符默认一般为4个空格大小（有些是2个），作用是在4个空格的范围内进行每行头部的对齐
```

```python
# 字符串删除空白
# 删除左边空白：lstrip()
# 删除右边空白：rstrip()
# 删除左右空白：strip()
test_str = "   python   "
print(f"---{test_str}---")
print(f"---{test_str.lstrip()}---")
print(f"---{test_str.rstrip()}---")
print(f"---{test_str.strip()}---")
print(f"---{test_str}---")

# 运行结果：
# ---   python   ---
# ---python   ---
# ---   python---
# ---python---
# ---   python   ---

# 小提示：
# 1、lstrip()、rstrip()、strip()属于Python字符串自带函数，通过“打点”调用
# 2、字符串删除空白是临时的，不会对原来的值产生改变，若要改变需进行自我赋值，比如：test_str = test_str.strip()
```

> 小提示：字符串引号嵌套错误时会报错【SyntaxError: invalid syntax】

```python
# 数值（整数、浮点数）
# 整数（不带小数点的数）
num_01 = 24
# 浮点数（带小数点的数）
num_02 = 3.14
num_03 = 1.0

# 小提示：
# 数值可以用下划线对数字分组，使其更清晰易读，例如：universe_age = 14_000_000_000
```

```python
# 数值的基本计算（+、-、*、/、//、%、**）
# 加：+
# 减：-
# 乘：*
# 除：/
# 除（取整）：//
# 取余：%
# 幂：**

# 小提示：
# 1、只要有浮点数参与的运算一定得到浮点数结果
# 2、除（/）得到的都是浮点数结果
# 3、除（取整：//）得到的都是整数结果（只舍不入）
# 4、多重运算请多使用圆括号来规定优先级！
```

```python
# 浮点数小数位的不确定性
>>> 0.2 + 0.1
0.30000000000000004
>>> 3 * 0.1
0.30000000000000004

# 小提示：
# 以上情况出现的原因是由于计算机底层的运算机制导致的，无论是什么语言都有这个问题
# Python会尽量避免这种情况的出现，但在某些情况下还是难以避免，所以在进行浮点数运算时通常保留一定的小数位
# 故比较两个浮点数值是否相等，应该通过判断两个值相减后的绝对值是否在某一个阈值内判断是否相等
# abs(1 / 3 - (1 - 2 / 3)) < 0.000000001
```

```python
# 浮点数保留指定小数位数
from decimal import Decimal, ROUND_HALF_UP, ROUND_DOWN

# 1、简单使用：保留三位小数
print(Decimal("1.41421356").quantize(Decimal("0.000")))
# 结果：1.414

# 2、保留两位小数
print(Decimal("0.125").quantize(Decimal("0.00")))
# 结果：0.12
print(Decimal("0.135").quantize(Decimal("0.00")))
# 结果：0.14
# 为什么0.125不是四舍五入？
# 原因是该方法的默认进位方式是：ROUND_HALF_EVEN（奇进偶舍）

# 3、设置进位方式：四舍五入
print(Decimal("0.125").quantize(Decimal("0.00"), rounding=ROUND_HALF_UP))
# 结果：0.13
print(Decimal("0.135").quantize(Decimal("0.00"), rounding=ROUND_HALF_UP))
# 结果：0.14

# 3、设置进位方式：只舍不入
print(Decimal("0.125").quantize(Decimal("0.00"), rounding=ROUND_DOWN))
# 结果：0.12
print(Decimal("0.135").quantize(Decimal("0.00"), rounding=ROUND_DOWN))
# 结果：0.13

# 注意：传递给Decimal的值必须是字符串，不能是浮点数，因为浮点数本身就是不准确的
test_float_num = 3.1415926
temp_num = Decimal(str(test_float_num))
answer_num = temp_num.quantize(Decimal("0.0000"), rounding=ROUND_DOWN)
print(answer_num)
# 结果：3.1415
```
> 小提示：当发生除0错误时会报错【ZeroDivisionError: division by zero】

```python
# 常量
ZJR_SEX = "男"
ZJR_BIRTHDAY = "2000-05-04"

# 小提示：
# 1、常量表示不能被修改的量，用大写字母表示
# 2、在Python中常量本质上也是一个变量，只是人为约定不去修改它，但是即便修改了也不会报错，是否修改完全取决于程序员
```

```python
# 注释
# 单行注释：# 单行内容
# 多行注释："""多行内容"""或'''多行内容'''

# 这是
# 一个
# 单行注释
"""
这是
一个
多行注释
"""
'''
这也是
一个
多行注释
'''

# 小提示：
# 多行注释同时还兼任了“格式化字符串”功能，所以尽量使用单行注释
# 例如：
test_str = """
I
	love
		you
			!
"""
print(test_str.strip())
# 运行结果：
# I
# 	love
# 		you
# 			!
```

```
# “Python之禅”
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!

# 中英对照
The Zen of Python, by Tim Peters
# "Python之禅" by Tim Peters
 
Beautiful is better than ugly.
# 优美胜于丑陋（Python以编写优美的代码为目标）
 
Explicit is better than implicit.
# 明了胜于晦涩（优美的代码应当是明了的，命名规范、风格相似）
 
Simple is better than complex.
# 简洁胜于复杂（优美的代码应当是简洁的，不应有复杂的内部实现）
 
Complex is better than complicated.
# 复杂胜于凌乱（如果复杂不可避免，那代码间也不应有难懂的关系，应保持关系简洁）
 
Flat is better than nested.
# 扁平胜于嵌套（优美的代码应当是扁平的，不应有太多的嵌套）
 
Sparse is better than dense.
# 间隔胜于紧凑（优美的代码应有适当的间隔，不应奢望一行代码解决问题）
 
Readability counts.
# 可读性很重要（优美的代码是可读的，清晰的逻辑、良好的注释）
 
Special cases aren't special enough to break the rules.
Although practicality beats purity.
# 即便是“特例”也往往没有特殊到必须违背上述规则的程度（这些规则至高无上）
# 尽管“实用性”可能比代码的纯洁性更具有吸引力

Errors should never pass silently.
Unless explicitly silenced.
# 永远不应该包容错误
# 除非必要，否则不要无故忽视异常（精准地捕获异常，不写 except:pass 风格的代码）

In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
# 当存在多种可能，不要尝试去猜测（如果遇到模棱两可的逻辑，请不要自作聪明地瞎猜）
# 而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法）
# 虽然这并不容易，因为你不是 Python 之父（这里的 Dutch 是指 Guido ）

Now is better than never.
Although never is often better than *right* now.
# 做也许好过不做
# 但不假思索就动手还不如不做（动手之前要仔细思量）
 
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
# 倘若你的实现很难向他人解释，那它一定不是个好方案
# 反之亦然（方案测评标准）

Namespaces are one honking great idea -- let's do more of those!
# 命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召）
```

# 三、列表简介

```python
# 添加列表
bicycles = ["trek", "cannondale", "redline", "specialized"]
cars = []
# 使用列表
print(bicycles)
print(cars)
# 运行结果：
# ['trek', 'cannondale', 'redline', 'specialized']
# []

# 列表的元素是任意的，甚至可以是一个列表
test_list = ["Jerry's a boy", 18, 3.14, True, ["a", 3, 'c']]
print(test_list)
# 运行结果：
# ["Jerry's a boy", 18, 3.14, True, ['a', 3, 'c']]
```

```python
# 访问列表元素
# list_name[index]（index ∈ [0, length-1] and [-1, -length]）
bicycles = ["trek", "cannondale", "redline", "specialized"]
print(bicycles[0])
print(bicycles[3].title())
print(bicycles[-1].upper())
print(bicycles[-4])

# 运行结果：
# trek
# Specialized
# SPECIALIZED
# trek
```

```python
# 修改列表元素（再赋值）
motorcycles = ["honda", "yamaha", "suzuki"]
print(motorcycles)

motorcycles[0] = "ducati"
motorcycles[2] = "harley"
print(motorcycles)

# 运行结果：
# ['honda', 'yamaha', 'suzuki']
# ['ducati', 'yamaha', 'harley']
```

```python
# 添加列表元素
# 在列表末尾添加元素：append(data)
# 在列表中插入元素：insert(index, data)
motorcycles = ["honda", "yamaha", "suzuki"]
motorcycles.append("harley")
print(motorcycles)
motorcycles.insert(-1, "yadi")
print(motorcycles)
motorcycles.insert(0, "aima")
print(motorcycles)

# 运行结果：
# ['honda', 'yamaha', 'suzuki', 'harley']
# ['honda', 'yamaha', 'suzuki', 'yadi', 'harley']
# ['aima', 'honda', 'yamaha', 'suzuki', 'yadi', 'harley']
```

```python
# 删除列表元素
# 根据索引直接删除（不返回）：del
# 根据索引删除（默认删除末尾元素）并返回：pop([index])
# 根据值直接删除（不返回）：remove(data)
test = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(test)
del test[1]
print(test)
num_01 = test.pop()	# 若不提供索引，默认删除（弹出）最后一个元素
print(num_01)
print(test)
num_02 = test.pop(2)
print(num_02)
print(test)
num_03 = test.remove('e')
print(num_03)
print(test)
test.remove('c')
print(test)

# 运行结果：
# ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# ['a', 'c', 'd', 'e', 'f', 'g']
# g
# ['a', 'c', 'd', 'e', 'f']
# d
# ['a', 'c', 'e', 'f']
# None
# ['a', 'c', 'f']
# ['a', 'f']

# 小提示：
# remove(data)不会返回删除值，如果你用一个变量来接收，那么这个变量为None（空），请不要这样做
# 之所以remove(data)不返回值的原因是：在使用该函数之前，已经知道删除的具体值了
```

```python
# 列表排序
# 对列表永久排序：sort([reverse=True||False])
# 对列表临时排序：sorted(list[, reverse=True||False])
test_01 = ["a", "6a", "bbbb", "ba", "caa", "A", "6A", "9B", "C"]
test_01.sort()  # 默认 reverse=True
print(test_01)
test_02 = ["a", "6a", "bbbb", "ba", "caa", "A", "6A", "9B", "C"]
test_02.sort(reverse=True)  # 逆序
print(test_02)

# 运行结果：
# ['6A', '6a', '9B', 'A', 'C', 'a', 'ba', 'bbbb', 'caa']
# ['caa', 'bbbb', 'ba', 'a', 'C', 'A', '9B', '6a', '6A']

test_03 = ["a", "6a", "bbbb", "ba", "caa", "A", "6A", "9B", "C"]
print(sorted(test_03))  # 默认 reverse=True
print(sorted(test_03, reverse=True))    # 逆序
print(test_03)  # 原列表并没有改变
test_03 = sorted(test_03)
print(test_03)

# 运行结果：
# ['6A', '6a', '9B', 'A', 'C', 'a', 'ba', 'bbbb', 'caa']
# ['caa', 'bbbb', 'ba', 'a', 'C', 'A', '9B', '6a', '6A']
# ['a', '6a', 'bbbb', 'ba', 'caa', 'A', '6A', '9B', 'C']
# ['6A', '6a', '9B', 'A', 'C', 'a', 'ba', 'bbbb', 'caa']

# 小提示：
# 排序的原则是按照ASCII码序：数字 > 大写字母 > 小写字母，字符串内逐字符比较，一但遇到字符大小不同时便停止比较
```

```python
# 列表反转 reverse()
cars = ["bmw", "audi", "toyota", "subaru"]
print(cars)
cars.reverse()
print(cars)

# 运行结果：
# ['bmw', 'audi', 'toyota', 'subaru']
# ['subaru', 'toyota', 'audi', 'bmw']

# 小提示：
# reverse()反转是永久性的
```

```python
# 确定列表长度 len()
cars = ["bmw", "audi", "toyota", "subaru"]
print(len(cars))

# 运行结果：
# 4
```

> 小提示：列表发生索引越界时会报错【IndexError: list index out of range】

# 四、操作列表

# 五、if 语句

# 六、字典

# 七、用户输入和while循环

# 八、函数

# 九、类

# 十、文件和异常

# 十一、测试代码

