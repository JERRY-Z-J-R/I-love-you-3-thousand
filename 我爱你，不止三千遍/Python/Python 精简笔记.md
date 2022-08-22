# Python 精简笔记

> 基于《Python编程从入门到实践》（第二版）
>
> 基于 Python 3.8
>
> 归纳总结 + 知识补充
>
> 原创内容，转载请注明出处！

> 本文档只是 Python3 的入门基础，更多详细内容请看：[3.8.13 Documentation (python.org)](https://docs.python.org/zh-cn/3.8/)

# 一、起步

> 全文基于 Windows 11 环境

**（1）安装 Python**

1. 进入 Python 官网：[https://www.python.org/](https://www.python.org/)
2. 点击导航栏的 Downloads
3. 找到需要的 Python 版本点击下载（推荐 3.8 及其以上）
4. 双击 .exe 文件进行安装
5. 勾选 Add Python 3.x to PATH（自动添加到环境变量）
6. 检查 pip【Python 包管理器】是否勾选（请勾选）
7. 依次默认下一步（安装路径建议放置在非 C 盘路径下）
8. 安装成功

**（2）使用 Python**

**【交互式 Python】**

1. 打开命令行窗口（cmd 或 Windows PowerShell）
2. 输入 `python` 命令
3. 进入 Python 终端会话（出现 >>> 提示符）
4. 交互式执行代码段
5. 输入 `exit()` 退出终端会话

**【Python 脚本】**

1. 使用文本编辑器创建并编辑 Python 脚本
2. 保存脚本为 `xxx.py` 文件
3. 打开命令行窗口（cmd 或 Windows PowerShell）
4. 使用 `cd` 命令切换到 `xxx.py` 文件所在路径下
5. 执行 `python xxx.py` 命令
6. 成功运行 Python 脚本

> 小提示：
>
> - 当计算机中已经安装过 Python 的 2.x 版本时，命令行中执行 `python` 默认调用的是 2.x 版本，若此时要指定调用 3.x 版本，请将 `python` 命令替换为 `python3` 命令。
>
>   > 注意：Python 3.x 代码与 Python 2.x 代码互不兼容！目前，推荐一律使用 3.x 版本。
> - 若安装时没有勾选 Add Python 3.x to PATH，则需要手动配置环境变量，请将 python.exe（位于 Python 安装根目录）以及 pip.exe（位于 Python 安装根目录下的 Scripts 目录）所在的全局路径分别添加到系统的 Path 环境变量中，保存环境变量后打开命令行分别键入 `python`、`pip` 成功识别即为配置成功。
> - `.py` 文件后缀表示这是一个 Python 文件，`xx_xx.py` 其名称可以由英文字母、数字、下划线构成，请全部使用小写字母，并以英文字母开头，词与词之间用 `_` 连接。
> - Python 语句推荐句末不要加 `;`。

# 二、变量和简单数据类型

```python
# 控制台输出函数 print()
print("hello")
print("Python!")

# 运行结果：
# hello
# Python!

# 小提示：
# Python 的 print() 执行后会自动换行
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
# 2、变量的命名规范：字母开头，词与词之间用 “_” 连接，全为小写字母（C语言命名风格）
# 3、变量命名应 “意简言赅”，name 优于 n，student_name 优于 s_n，student_name 优于 name_of_student 
# 4、尽量避免单独使用小写字母 l 和大写字母 O，因为极其容易被误以为是数字 1 和 0
```
> 小提示：变量名引用错误时会报错：`NameError: name '变量' is not defined`

```python
# 字符串 "" 或 ''
name_01 = "jerry"
name_02 = 'jerry'

# 小提示：
# 1、推荐使用 "" 定义长字符串，因为在字符串中也许会出现 "I'm a geek" 这种引号嵌套情况
# 2、对于短字符串（一个单词），业界比较习惯使用 ''
# 3、无论使用哪一种引号方式，关键在于要做到 “整体统一”
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
# 1、title()、upper()、lower() 属于 Python 字符串自带函数，通过 “打点” 调用
# 2、字符串大小写格式化是临时的，不会对原来的值产生改变，若要改变需进行自我赋值，比如：name = name.title()
```

```python
# 字符串拼接
boy_name = "Jerry"
girl_name = "Pingyang"
#【+ 加号连接符】
lovers_01 = boy_name + " loves " + girl_name + " forever!"
#【f 字符串】
lovers_02 = f"{boy_name} loves {girl_name} forever!"
#【format() 函数】
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
# 1、加号连接符的前提是 “+” 左右两边至少有一边必须是字符串，否则执行的是数学加法运算
# 2、f 字符串是 format() 函数的升级版，是 Python3.6 开始引入的，之前的版本无法使用
# 3、目前几乎是 3.6 以上版本，所以【+ 加号连接符】及【f 字符串】使用较多！
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
# 制表符默认一般为 4 个空格大小（有些是 2 个），作用是在 4 个空格的范围内进行每行头部的对齐
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
# 1、lstrip()、rstrip()、strip() 属于 Python 字符串自带函数，通过 “打点” 调用
# 2、字符串删除空白是临时的，不会对原来的值产生改变，若要改变需进行自我赋值，比如：test_str = test_str.strip()
```

> 小提示：字符串引号嵌套错误时会报错：`SyntaxError: invalid syntax`（中文翻译：`语法错误：无效语法`）

```python
# 数值（整数、浮点数）
# 整数（不带小数点的数）
num_01 = 24
# 浮点数（带小数点的数）
num_02 = 3.14
num_03 = 1.0

# 小提示：
# 长数值可以用下划线对数字分组，使其更清晰易读，例如：universe_age = 14_000_000_000
# 可以用 int(3.5) 将浮点数转为整数，只不过此种方法一律去掉小数位，并不做四舍五入！
```

```python
# 数值的基本计算（+、-、*、/、//、%、**）
# 加：+
# 减：-
# 乘：*
# 除：/
# 除（取整）：//
# 取余：%
# 幂：**（用 x**y 或 pow(x, y) 表示）

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
# Python 会尽量避免这种情况的出现，但在某些情况下还是难以避免，所以在进行浮点数运算时通常保留一定的小数位
# 故比较两个浮点数值是否相等，应该通过判断两个值相减后的绝对值是否在某一个阈值内判断是否相等
# 例如：abs(1 / 3 - (1 - 2 / 3)) < 0.000000001
```

```python
# 浮点数保留指定小数位数

# 导入 decimal 模块（Python 标准库提供的一个用于十进制数学计算的模块）
from decimal import Decimal, ROUND_HALF_UP, ROUND_DOWN

# 1、简单使用：保留三位小数
print(Decimal("1.41421356").quantize(Decimal("0.000")))
# 结果：1.414

# 2、保留两位小数
print(Decimal("0.125").quantize(Decimal("0.00")))
# 结果：0.12
print(Decimal("0.135").quantize(Decimal("0.00")))
# 结果：0.14
# 为什么 0.125 不是四舍五入？
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

# 注意：传递给 Decimal 的值必须是字符串，不能是浮点数，因为浮点数本身就是不准确的
test_float_num = 3.1415926
temp_num = Decimal(str(test_float_num))
answer_num = temp_num.quantize(Decimal("0.0000"), rounding=ROUND_DOWN)
print(answer_num)
# 结果：3.1415
```
> 小提示：当发生除 0 错误时会报错：`ZeroDivisionError: division by zero`

```python
# 常量
ZJR_SEX = "男"
ZJR_BIRTHDAY = "2000-05-04"

# 小提示：
# 1、常量表示不能被修改的量，用大写字母表示
# 2、在 Python 中常量本质上也是一个变量，只是人为约定不去修改它，但是即便修改了也不会报错，是否修改完全取决于程序员
```

```python
# 注释
# 单行注释：# 单行内容
# 多行注释："""多行内容""" 或 '''多行内容'''

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
# 一般情况下请尽量使用单行注释，原因如下：
# 1、"""""" 或 '''''' 准确的来说叫做：文档字符串注释，一般放在一个函数内部的开头、类内部的开头、文件内部的开头描述该函数、类、文件是做什么的，Python 使用他们来生成有关程序中的文档。
# 2、多行注释同时还兼任了 “格式化字符串” 功能
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

> 科学且统一的编码风格应该始终作为一种编程习惯，秉承 “Python 之禅” 的指导思想。

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
# 根据索引删除（默认删除末尾元素）并返回：pop([index])	注意：[] 表示函数参数的可选值
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
# remove(data) 不会返回删除值，如果你用一个变量来接收，那么这个变量为 None（空）
# 之所以 remove(data) 不返回值的原因是：在使用该函数之前，已经知道删除的具体值了
```

```python
# 列表排序
# 对列表永久排序：sort([reverse=True||False])	注意：|| 表示函数参数的 “或” 关系
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
# 排序的原则是按照 ASCII 码序：数字 > 大写字母 > 小写字母，字符串内逐字符比较，一但遇到字符大小不同时便停止比较
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
# reverse() 反转是永久性的
```

```python
# 确定列表长度 len()
cars = ["bmw", "audi", "toyota", "subaru"]
print(len(cars))

# 运行结果：
# 4
```

> 小提示：列表发生索引越界时会报错：`IndexError: list index out of range`

# 四、操作列表

```python
# for 循环
magicians = ["alice", "david", "carolina"]
for magician in magicians:
    print(magician)
    
# 运行结果：
# alice
# david
# carolina

# 小提示：
# 1、for 语句末尾必须有一个 “冒号”
# 2、for 循环内部代码块以缩进的形式（一个Tab）来限定
# 3、循环变量与循环列表的取名推荐满足单复数的形式
```

```python
# 创建数值序列
# range([a,] b [, c]) 函数创建范围 [a, b) 步长为 c 的一列顺序整数
# range([a,] b [, c]) 结合 for 循环
for value in range(3, 7):
	print(value)
    
# 运行结果：
# 3
# 4
# 5
# 6


# 如果 range([a,] b [, c]) 不指定 a 的值，那么 a 默认为 0
# range(b) 与 range(0, b) 同等
for num in range(5):
	print(num)
    
# 运行结果：
# 0
# 1
# 2
# 3
# 4


# 设置步长
for n in range(1, 9, 3):
    print(n)

# 运行结果：
# 1
# 4
# 7

# 小提示：
# 在指定步长时，不能省略第一个起始值，否则程序会误以为你所指定的是起始值与结束值
# 比如：range(0, 6, 2) 不能写为 range(6, 2)
```

```python
# 使用 range() 创建数字列表
# 创建普通数字列表
# range() 得到的是一个数值序列，需要通过 list() 转为列表，tuple() 转为元组
numbers_01 = list(range(1, 6))
print(number_01)
# 运行结果：
# [1, 2, 3, 4, 5]
numbers_02 = list(range(0, 6, 2))
print(number_02)
# 运行结果：
# [0, 2, 4]


# 创建特殊数字列表
squares = []
for value in range(1, 11):
    squares.append(value ** 2)
print(squares)
# 运行结果：
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


# 以 “列表解析” 的方式创建数字列表
squares_02 = [value**2 for value in range(1, 11)]
print(squares_02)
# 运行结果：
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

```python
# 数字列表简单统计函数
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
# 最大值
print(max(digits)) # 9 
# 最小值
print(min(digits)) # 0
# 求和
print(sum(digits)) # 45
```

```python
# 使用列表 “切片”
# 列表名 [[a]:[b][:c]] 取得 [a, b) 范围内，步长为 c 的子列表
player = ["charles", "martina", "michael", "florence", "eli"]
print(player)
# ['charles', 'martina', 'michael', 'florence', 'eli']
print(player[1:4])
# ['martina', 'michael', 'florence']
print(player[1:])
# ['martina', 'michael', 'florence', 'eli']
print(player[:4])
# ['charles', 'martina', 'michael', 'florence']
print(player[:])
# ['charles', 'martina', 'michael', 'florence', 'eli']
print(player[1:4:3])
# ['martina']
print(player[0:5:2])
# ['charles', 'michael', 'eli']
print(player[0::2])
# ['charles', 'michael', 'eli']
print(player[:5:2])
# ['charles', 'michael', 'eli']
print(player[::2])
# ['charles', 'michael', 'eli']


# 遍历切片
# 作用：用于遍历列表的部分元素
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print("前三名队友是：")
for player in players[:3]:
    print(player.title())
# 运行结果：
# 前三名队友是：
# Charles
# Martina
# Michael


# 复制列表
# 作用：根据既有列表创建新列表
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods
print(my_foods)
print(friend_foods)
my_foods.append('apple')
print(my_foods)
print(friend_foods)
# 运行结果：
# ['pizza', 'falafel', 'carrot cake']
# ['pizza', 'falafel', 'carrot cake']
# ['pizza', 'falafel', 'carrot cake', 'apple']
# ['pizza', 'falafel', 'carrot cake', 'apple']
# 可以发现，直接 “=” 赋值的方式是行不通的
# 因为，直接 “=” 赋值 friend_foods 只是 my_foods 引用名称的副本，而不是 my_foods 所指向内存中真实数据的副本
# 通俗理解：friend_foods 是 my_foods 取的一个 “别名”，两者内存中引用的数据是同一份
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods[:]
print(my_foods)
print(friend_foods)
my_foods.append('apple')
print(my_foods)
print(friend_foods)
# 运行结果：
# ['pizza', 'falafel', 'carrot cake']
# ['pizza', 'falafel', 'carrot cake']
# ['pizza', 'falafel', 'carrot cake', 'apple']
# ['pizza', 'falafel', 'carrot cake']
# 可以发现，利用切片的方式进行赋值可以实现真正意义上的 “复制”
# 注意：当列表中还嵌套了列表时，单纯的切片复制是行不通的，此时只是复制了“最外层”，所嵌套列表内的数据依旧只是复制了引用名称
# 对于嵌套引用类型的复制来说，需要利用递归算法进行深克隆
```

```python
# 元组
# 什么是元组：不可变（不可修改）的列表
# 元组与列表的区别：1、不可修改	2、用逗号标记元素（习惯性套一个圆括号）
dimensions = 200, 50
print(dimensions[0])
print(dimensions[1])
# 习惯将元组用 () 包裹
dimensions_style = (200, 50)
print(dimensions_style[0])
print(dimensions_style[1])
# 运行结果：
# 200
# 50
# 200
# 50

dimensions_care = (200,)
print(dimensions_care[0])
# 由于元组是由逗号标识的，圆括号只是一个风格规范，所以对于只有一个元素的元组，必须在这个元素后面加上逗号


# 遍历元组
for dimension in dimensions:
    print(dimension)
# 运行结果：
# 200
# 50

# 修改元组元素
dimensions[0] = 666
# 报错：TypeError: 'tuple' object does not support item assignment

# 修改元组变量
dimensions = (1, 2, 3)
print(dimensions)
# 运行结果：
# (1, 2, 3)
# 虽然不可以修改元组的元素，但可以给指向元组的变量重新赋值，此时 dimensions 指向的已经是一个新的内存地址了
```

# 五、if 语句

```python
# 条件测试
== 		    # 相等运算符
!= 		    # 不相等运算符
>  		    # 大于运算符
<  		    # 小于运算符
>= 		    # 大于等于运算符
<= 		    # 小于等于运算符
and   		# 与运算符
or 		    # 或运算符
in 		    # 包含运算符
not in 		# 不包含运算符

# 布尔表达式
True	    # 真
False	    # 假

# 布尔表达式既是条件测试的结果（为真、为假），同时也是一种独立的类型值
```

```python
# if 判断
age = 19
if age >= 18:
    print("19 >= 18")
# 19 >= 18

if 18 <= age:
    print("18 <= age")
    print("age >= 18")
# 18 <= age
# age >= 18
    
# if-else
age_02 = 24
if age_02 >= 18:
    print("成年人")
else:
    print("未成年人")
# 成年人
age_03 = 15
if age_03 >= 18:
    print("成年人")
else:
    print("未成年人")
# 未成年人

# if-elif-else
age_04 = 14
if age_04 < 10:
    print("10岁以下免费")
elif 10 <= age_04 and age_04 <= 15:
    print("15岁以下半价")
else:
    print("15岁及以上收费")
# 15岁以下半价
# if elif else 的条件是自上而下传递的，即：后一个条件的成立就已经包含了上一个条件的不成立
# 所以，上述例子可以改进为：
age_04 = 14
if age_04 < 10:
    print("10岁以下免费")
elif age_04 <= 15:
    print("15岁以下半价")
else:
    print("15岁及以上收费")
# 15岁以下半价

# 注意：
# 1、可以包含多个 elif，但是只能放在 if 及 else 之间
# 2、可以只有 if 或只有 if-elif，而没有 else
# 3、一但有一个判断条件成立，那么就不继续执行后续判断
```

# 六、字典

```python
# 字典是一系列键值对，每个键都与一个值相关联
# Python 中，字典用放在花括号（{}）中的一系列键值对表示
alien_0 = {'color': 'green', 'points': 5}
print(alien_0['color'])
print(alien_0['points'])
# green
# 5

# 添加键值对
alien_0['x_position'] = 0
alien_0['y_position'] = 25
print(alien_0)
# {'color': 'green', 'points': 5, 'x_position': 0, 'y_position': 25}
# 字典中元素的排列顺序与定义时相同

# 空字典
alien_1 = {}
alien_1['color'] = 'green'
alien_1['points'] = 5
print(alien_1)
# {'color': 'green', 'points': 5}

# 修改字典中的值
alien_0['color'] = 'yellow'
print(alien_0['color'])

# 删除键值对
del alien_0['points']
print(alien_0)
print(alien_0['points'])
# {'color': 'yellow', 'x_position': 0, 'y_position': 25}
# 报错：KeyError: 'points'
# 注意：del 是永久删除，被删除的键值对会永久删除
 
# 使用 get() 来访问值
# 之前，当我们用 [] 访问一个不存在的键时就会报错
# 现在，可以用 get() 来访问，当指定的键不存在时返回一个默认值，从而避免这样的错误
point_value = alien_0.get('points', 'No point value assigned.')
print(point_value)
# No point value assigned.
point_value = alien_0.get('points')
print(point_value)
# None
# 调用 get() 时，如果没有指定第二个参数且指定的键不存在，那么 get() 返回 None（这是一个表示不存在的特殊值）
```

```python
# 遍历字典
# 遍历所有键值对
user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi'
}
for key, value in user_0.items():
    print(f"\nKey: {key}")
    print(f"Value: {value}")
# 运行结果：
# Key: username
# Value: efermi

# Key: first
# Value: enrico

# Key: last
# Value: fermi

# for k, v in user_0.items() 这种书写较为简练
# for name, language in favorite_languages.items() 这种书写语义化更强

# 字典.items() 会返回一个键值对列表

# 遍历字典中的所有键
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python'
}
for name in favorite_languages.keys():
    print(name.title())
# 运行结果：
# Jen
# Sarah
# Edward
# Phil
# 遍历字典时，默认遍历的就是所有的键，因此：
# for name in favorite_languages.keys() 与 for name in favorite_languages 是相同的
# 当然，前者的语义化要更高，可读性更强

favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python'
}
languages = ['c++', 'java', 'python']
for name in favorite_languages.keys():
    if favorite_languages[name] not in languages:
        print(f"{name} 最爱的语言不在语言列表里")
# 运行结果：
# sarah 最爱的语言不在语言列表里
# edward 最爱的语言不在语言列表里

# 遍历字典中的所有值
for language in favorite_languages.values():
    print(language.title())
# 运行结果：
# Python
# C
# Ruby
# Python

for language in set(favorite_languages.values()):
    print(language.title())
# 运行结果：
# Ruby
# Python
# C
# set() 可以剔除列表中的重复项

for language in sorted(favorite_languages.values()):
    print(language.title())
# 运行结果：
# C
# Python
# Python
# Ruby
# sorted() 对可迭代对象排序并返回一个新的列表（默认按照字典序）
```

```python
# 字典列表
alien_0 = {'color': 'green', 'points': 5}
alien_1 = {'color': 'yellow', 'points': 10}
alien_2 = {'color': 'red', 'points': 15}
aliens = [alien_0, alien_1, alien_2]
for alien in aliens:
    print(alien)
# 运行结果：
# {'color': 'green', 'points': 5}
# {'color': 'yellow', 'points': 10}
# {'color': 'red', 'points': 15}


aliens = []
for alien_number in range(30):
    new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'}
    aliens.append(new_alien)
for alien in aliens[:5]:
    print(alien)
print("...")
print(f"Total number of aliens: {len(aliens)}")
# 运行结果：
# {'color': 'green', 'points': 5, 'speed': 'slow'}
# {'color': 'green', 'points': 5, 'speed': 'slow'}
# {'color': 'green', 'points': 5, 'speed': 'slow'}
# {'color': 'green', 'points': 5, 'speed': 'slow'}
# {'color': 'green', 'points': 5, 'speed': 'slow'}
# ...
# Total number of aliens: 30


# 在字典中存储列表
favorite_languages = {
    'jen': ['python', 'ruby'],
    'sarah': ['c'],
    'edward': ['ruby', 'go'],
    'phil': ['python', 'haskell']
}
for name, languages in favorite_languages.items():
    print(f"\n{name.title()}'s favorite languages are:")
    for language in languages:
        print(f"\t{language.title()}")
# 运行结果：
# Jen's favorite languages are:
# 	Python
# 	Ruby
# 
# Sarah's favorite languages are:
# 	C
# 
# Edward's favorite languages are:
# 	Ruby
# 	Go
# 
# Phil's favorite languages are:
# 	Python
# 	Haskell


# 在字典中存储字典
users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
        'location': 'princeton'
    },
    'mcurie': {
        'first': 'marie',
        'last': 'curie',
        'location': 'paris'
    }
}
for username, user_info in users.items():
    print(f"\nUsername: {username}")
    full_name = f"{user_info['first']} {user_info['last']}"
    location = user_info['location']

    print(f"\nFull name: {full_name.title()}")
    print(f"Location: {location.title()}")
# 运行结果：
# Username: aeinstein

# Full name: Albert Einstein
# Location: Princeton

# Username: mcurie

# Full name: Marie Curie
# Location: Paris
```

# 七、用户输入和while循环

```python
# input() 控制台输入函数
name = input("Please enter your name: ")
print(f"\nHello, {name}!")
# 执行结果
# Please enter your name: jerry
#
# Hello, jerry!


prompt = "IF you tell us who you are, we can personalize the messages you see."
prompt += "\nWhat is your first name? "
name = input(prompt)
print(f"\nHello, {name}!")
# 运行结果：
# IF you tell us who you are, we can personalize the messages you see.
# What is your first name? Eric
#
# Hello, Eric!


# 使用 int() float() 来获取数值输入
# input() 所接收到的输入一律是字符串格式的，当我们需要数字格式时，就必须借助 int() 及 float()
# int() 转为整数
>>> age = input("How old are you? ")
How old are you? 18
>>> age
'18'

>>> age = int(input("How old are you? "))
How old are you? 18
>>> age
18

>>> age = input("How old are you? ")
How old are you? 18
>>> age = int(age)
>>> age
18
# float() 同理，只不过 float() 的功能是转为浮点数
# 注意：还可以使用 bool() 来获取布尔值输入
```

```python
# 使用 while 循环
current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1
# 运行结果：
# 1
# 2
# 3
# 4
# 5


# 动态退出
prompt = "\nTell me something, and I will repeat it back to you: "
prompt += "\nEntter 'quit' to end the program."
message = ""
while message != 'quit':
    message = input(prompt)
    if message != 'quit':
        print(message)
# 运行结果：
# Tell me something, and I will repeat it back to you:
# Entter 'quit' to end the program.Hello everyone!
# Hello everyone!
#
# Tell me something, and I will repeat it back to you:
# Entter 'quit' to end the program.Hello again.
# Hello again.
#
# Tell me something, and I will repeat it back to you:
# Entter 'quit' to end the program.quit


# 使用标志
prompt = "\nTell me something, and I will repeat it back to you: "
prompt += "\nEntter 'quit' to end the program."
active = True
while active:
    message = input(prompt)
    if message == 'quit':
        active = False
    else:
        print(message)

        
# 使用 break 退出循环
prompt = "\nTell me something, and I will repeat it back to you: "
prompt += "\nEntter 'quit' to end the program."
while True:
    message = input(prompt)
    if message == 'quit':
        break
    else:
        print(message)
    
    
# 使用 continue 提前进入下一轮循环
current_number = 0
while current_number < 10:
    current_number += 1
    # 判读偶数
    if current_number % 2 == 0:
        continue
    print(current_number)
# 运行结果：
# 1
# 3
# 5
# 7
# 9

# 注意：break 和 continue 同样在 for 循环中适用！
```

```python
# 使用 while 循环列表和字典

unconfirmed_users = ['alice', 'brian', 'candace']
confitmed_users = []
while unconfirmed_users:
    current_user = unconfirmed_users.pop()
    confitmed_users.append(current_user)
for confitmed_user in confitmed_users:
    print(confitmed_user.title())
# 运行结果：
# Candace
# Brian
# Alice

pets = ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
print(pets)
while 'cat' in pets:
    pets.remove('cat')
print(pets)
# 运行结果：
# ['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']
# ['dog', 'dog', 'goldfish', 'rabbit']

responses = {}
polling_active = True
while polling_active:
    name = input("\nWhat is your name? ")
    response = input("Which mountain would you like to climb someday? ")
    responses[name] = response
    repeat = input("Would you like to let another person respond? (yes/no)")
    if repeat == 'no':
        polling_active = False
print("\n--- Poll Results ---")
for name, response in responses.items():
    print(f"{name} : {response}.")

# 运行结果：
# What is your name? Jerry
# Which mountain would you like to climb someday? Denali
# Would you like to let another person respond? (yes/no)yes
# 
# What is your name? Lynn
# Which mountain would you like to climb someday? Devil's Thumb
# Would you like to let another person respond? (yes/no)no
# 
# --- Poll Results ---
# Jerry : Denali.
# Lynn : Devil's Thumb.
```

# 八、函数

```python
# 定义函数
def greet_user():
    """显示简单的问候语"""
    print("Hello!")
greet_user()
# Hello!

# def 关键字定义函数
# 函数名后紧跟()，()中为函数的参数，即便没有参数，()也不可以省略
# """""" 是文档字符串注释，描述了函数的功能，Python 使用它们来生成有关程序中函数的文档

# 向函数传递参数
def greet_user(username):
    """显示简单的问候语"""
    print(f"Hello, {username.title()}!")
greet_user('jerry')
# Hello, Jerry!
# 注意：执行函数时传递的 'jerry' 叫实参，定义函数接收的 username 叫形参


# 位置实参（实参形参的关联顺序基于实参的顺序）
def describe_pet(animal_type, pet_name):
    """显示宠物信息"""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet('hamster', 'harry')
describe_pet('dog', 'willie')
# 运行结果：
# I have a hamster.
# My hamster's name is Harry.
#
# I have a dog.
# My dog's name is Willie.


# 关键字实参（实参形参的关联顺序基于关键字指定）
def describe_pet(animal_type, pet_name):
    """显示宠物信息"""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet(animal_type='hamster', pet_name='harry')
describe_pet(pet_name='harry', animal_type='hamster')
# 运行结果：
# I have a hamster.
# My hamster's name is Harry.
# 
# I have a hamster.
# My hamster's name is Harry.


# 形参默认值（当没有实参时使用默认值，否则使用实参值）
# 注意：有默认值的形参只能统一放到形参列表的末尾
def describe_pet(pet_name, animal_type="dog"):
    """显示宠物信息"""
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}.")
describe_pet(pet_name='harry')
describe_pet(pet_name='harry', animal_type='hamster')
# 运行结果：
# I have a dog.
# My dog's name is Harry.
# 
# I have a hamster.
# My hamster's name is Harry.


# 返回值
def get_formatted_name(first_name, last_name):
    """返回整洁的姓名"""
    full_name = f"{first_name} {last_name}"
    return full_name.title()
musician = get_formatted_name('jimi', 'hendrix')
print(musician)
# Jimi Hendrix


# 让实参变成可选的
def get_formatted_name(first_name, last_name, middle_name=''):
    """返回整洁的姓名"""
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()
musician = get_formatted_name('jimi', 'hendrix')
print(musician)
musician = get_formatted_name('john', 'hooker', 'lee')
print(musician)
# 运行结果：
# Jimi Hendrix
# John Lee Hooker


# 利用 None 作为占位值（在条件测试中，None 相当于 False）
def build_person(first_name, last_name, age=None):
    """返回一个字典，其中包含有关一个人的信息"""
    person = {'first': first_name, 'last': last_name}
    if age:
        person['age'] = age
    return person
musician_01 = build_person('jimi', 'hendrix', age=24)
musician_02 = build_person('jerry', 'hendrix')
print(musician_01)
print(musician_02)
# 运行结果：
# {'first': 'jimi', 'last': 'hendrix', 'age': 24}
# {'first': 'jerry', 'last': 'hendrix'}


# 传递列表
def greet_users(names):
    """向列表中的每位用户发出简单的问候"""
    for name in names:
        msg = f"Hello, {name.title()}!"
        print(msg)
usernames = ['hannah', 'ty', 'margot']
greet_users(usernames)
# 运行结果：
# Hello, Hannah!
# Hello, Ty!
# Hello, Margot!


# 函数中可以调用函数
def input_msg():
    return input("input msg: ")
def print_msg():
    print(input_msg())
print_msg()
# 运行结果：
# input msg: hello
# hello


# 禁止函数修改列表
# 此时接收到的是列表的副本
function_name(list_name[:])
# 注意：基本类型接收到的默认就是副本，只有引用类型接收到的是对内存数据的引用


# 接收任意数量的实参到元组
# 通常习惯用 *args 来收集任意数量的位置实参
def make_pizza(size, *toppings):
    """概述要制作的比萨"""
    print(f"\nMaking a {size}-inch pizza with the following toppings: ")
    print(topping)
make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
# 运行结果：
# Making a 16-inch pizza with the following toppings: 
# ('pepperoni',)
# 
# Making a 12-inch pizza with the following toppings: 
# ('mushrooms', 'green peppers', 'extra cheese')


# 接收任意数量的实参到字典
# 通常习惯用 **kwargs 来收集任意数量的位置实参
def build_profile(first, last, **user_info):
    """创建一个字典，其中包含我们知道的有关用户的一切"""
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info
user_profile = build_profile('albert', 'einstein', location='princeton', field='physics')
print(user_profile)
# {'location': 'princeton', 'field': 'physics', 'first_name': 'albert', 'last_name': 'einstein'}
```

```python
# 将函数存储到模块中
# 可以将函数存储在称为模块的独立文件中，再将模块导入到主程序中
# import 语句允许在当前运行的程序文件中使用模块中的代码
# 模块化的好处：封装细节、利于重用、良好的代码组织结构


# 导入整个模块
# 1、创建模块 hello.py
def hello_mk():
    print("hello!")
def haha_mk():
    print("haha!")

    
# 2、在 main.py 中导入并使用模块
import hello
hello.hello_mk()
hello.haha_mk()
# hello!
# haha!


# 导入特定函数
from hello import hello_mk, haha_mk
hello_mk()
haha_mk()
# hello!
# haha!


from hello import hello_mk
hello_mk()
haha_mk()
# hello!
# NameError: name 'haha_mk' is not defined


# 使用 as 给函数指定别名
from hello import haha_mk as ha
ha()
# haha!


# 使用 as 给模块指定别名
import hello as ho
ho.hello_mk()
ho.haha_mk()
# hello!
# haha!
```

# 九、类

```python
class Dog:
    """小狗类：名字、年龄、蹲下动作、打滚动作"""

    def __init__(self, name, age):
        """初始化属性 name 和 age"""
        self.name = name
        self.age = age

    def sit(self):
        """模拟小狗收到命令时蹲下"""
        print(f"{self.name} is now sitting.")

    def roll_over(self):
        """模拟小狗收到命令时打滚"""
        print(f"{self.name} rolled over!")

# class 创建类的关键字
# 类名使用大驼峰命名（XxxYxxZzz）
# 类名后不加()，直接加:
# 方法 __init__，类创建新的实例时会自动调用该方法
# 在方法定义中，self 参数必不可少，并且必须位于第一位
# self 参数指向类的实例本身的引用，让实例能够访问类中的属性和方法


# 根据类创建实例并访问属性和调用方法
my_dog = Dog('Willie', 6)
your_dog = Dog('Lucy', 3)
print(f"My dog's name is {my_dog.name}.")
print(f"My dog is {my_dog.age} years old.")
my_dog.sit()
print(f"\nYour dog's name is {your_dog.name}.")
print(f"Your dog is {your_dog.age} years old.")
your_dog.sit()

# 运行结果：
# My dog's name is Willie.
# My dog is 6 years old.
# Willie is now sitting.
# 
# Your dog's name is Lucy.
# Your dog is 3 years old.
# Lucy is now sitting.
```

```python
class Car:
    """模拟汽车"""

    def __init__(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year
        # 给属性指定默认值
        self.odometer_reading = 0

    def get_descropive_name(self):
        """返回整洁的描述性信息"""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

    def read_odometer(self):
        """输出一条指出汽车里程的消息"""
        print(f"This car has {self.odometer_reading} miles on it.")

    def update_odometer(self, mileage):
        """将里程表读数设置为指定的值，且禁止将里程数回调"""
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

my_new_car = Car('audi', 'a4', 2019)
print(my_new_car.get_descropive_name())
# 2019 Audi A4

my_new_car.read_odometer()
# This car has 0 miles on it.

# 直接修改属性的值
my_new_car.odometer_reading = 23
my_new_car.read_odometer()
# This car has 23 miles on it.

# 通过方法修改属性的值
my_new_car.update_odometer(54)
my_new_car.read_odometer()
# This car has 54 miles on it.
my_new_car.update_odometer(10)
my_new_car.read_odometer()
# You can't roll back an odometer!
# This car has 54 miles on it.

my_used_car = Car('subaru', 'outback', 2015)
print(my_used_car.get_descropive_name())
# 2015 Subaru Outback

my_used_car.update_odometer(23_500)
my_used_car.read_odometer()
# This car has 23500 miles on it.

my_used_car.increment_odometer(100)
my_used_car.read_odometer()
# This car has 23600 miles on it.

# 可见，我们既可以直接通过访问属性来修改任何值，也可以通过提供专用的方法来间接的处理值
# 为了确保安全，我们应该始终利用方法来处理值
```

```python
# 继承
# 一个类继承另一个类时，将自动获得另一个类的所有属性和方法
# 原有的类称为父类，而新的类称为子类
# 子类继承了父类的所有属性和方法，同时还可以定义自己的属性和方法

# 子类的方法 __init__()
# 在既有类的基础上编写新类时，通常要调用父类的方法 __init__()
# 这将初始化在父类 __init__() 方法中定义的所有属性，从而让子类包含这些属性
class Car:
    """模拟汽车"""

    def __init__(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year
        # 给属性指定默认值
        self.odometer_reading = 0

    def get_descropive_name(self):
        """返回整洁的描述性信息"""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

    def read_odometer(self):
        """输出一条指出汽车里程的消息"""
        print(f"This car has {self.odometer_reading} miles on it.")

    def update_odometer(self, mileage):
        """将里程表读数设置为指定的值，且禁止将里程数回调"""
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

    def fill_gas_tank(self):
        """模拟加油"""
        print("The tank is full!")


class ElectricCar(Car):
    """模拟电动车（继承自汽车类）"""

    def __init__(self, make, model, year):
        """
        初始化父类的属性
        再初始化电动车特有的属性
        """
        super().__init__(make, model, year)
        self.battery_size = 75

    def describe_battery(self):
        """打印一条描述电瓶容量的消息"""
        print(f"This car has a {self.battery_size}-kWh battery.")

    # 重新（覆盖）父类的方法
    def fill_gas_tank(self):
        """电动车没有油箱，不需要加油，而是充电"""
        print("The battery is fully charged!")


my_tesla = ElectricCar('tesla', 'model y', 2019)
print(my_tesla.get_descropive_name())
# 2019 Tesla Model Y

my_tesla.describe_battery()
# This car has a 75-kWh battery.

my_tesla.fill_gas_tank()
# The battery is fully charged!
```

```python
# 将实例用作属性
# 使用代码模拟实物时，可能会导致给类添加的细节越来越多（属性、方法）
# 最好的解决办法是：将类的一部分提取出来，作为一个独立的类，将大型类拆分成多个协同工作的小类

# 例如：不断给 ElectricCar 类添加细节时，我们可能发现其中包含了很多专门针对电池的属性和方法
# 这种情况下，可以将这些属性和方法提取出来，放到一个名为 Battery 的类中，并将一个 Battery 实例作为 ElectricCar 类的属性
class Car:
    """模拟汽车"""

    def __init__(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year
        # 给属性指定默认值
        self.odometer_reading = 0

    def get_descriptive_name(self):
        """返回整洁的描述性信息"""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

    def read_odometer(self):
        """输出一条指出汽车里程的消息"""
        print(f"This car has {self.odometer_reading} miles on it.")

    def update_odometer(self, mileage):
        """将里程表读数设置为指定的值，且禁止将里程数回调"""
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

    def fill_gas_tank(self):
        """模拟加油"""
        print("The tank is full!")


class Battery:
    """模拟电动车电池"""

    def __init__(self, battery_size=75):
        """初始化电池属性"""
        self.battery_size = battery_size

    def describe_battery(self):
        """打印一条描述电瓶容量的消息"""
        print(f"This car has a {self.battery_size}-kWh battery.")

    def get_range(self):
        """打印一条消息，指出电池的续航里程"""
        if self.battery_size == 75:
            range = 260
        elif self.battery_size == 100:
            range = 315
        print(f"This car can go about {range} miles on a full charge.")


class ElectricCar(Car):
    """模拟电动车（继承自汽车类）"""

    def __init__(self, make, model, year):
        """
        初始化父类的属性
        再初始化电动车特有的属性
        """
        super().__init__(make, model, year)
        self.battery = Battery()

    # 重新（覆盖）父类的方法
    def fill_gas_tank(self):
        """电动车没有油箱，不需要加油，而是充电"""
        print("The battery is fully charged!")


my_tesla = ElectricCar('tesla', 'model y', 2019)
print(my_tesla.get_descropive_name())
# 2019 Tesla Model Y

my_tesla.battery.describe_battery()
# This car has a 75-kWh battery.

my_tesla.battery.get_range()
# This car can go about 260 miles on a full charge.
```

```python
# 导入类
# Python 允许将类存储在模块中，然后在主程序中导入所需的模块

# Car.py
"""一个可用于表示汽车的类"""


class Car:
    """模拟汽车"""

    def __init__(self, make, model, year):
        """初始化描述汽车的属性"""
        self.make = make
        self.model = model
        self.year = year
        # 给属性指定默认值
        self.odometer_reading = 0

    def get_descriptive_name(self):
        """返回整洁的描述性信息"""
        long_name = f"{self.year} {self.make} {self.model}"
        return long_name.title()

    def read_odometer(self):
        """输出一条指出汽车里程的消息"""
        print(f"This car has {self.odometer_reading} miles on it.")

    def update_odometer(self, mileage):
        """将里程表读数设置为指定的值，且禁止将里程数回调"""
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        """将里程表读数增加指定的量"""
        self.odometer_reading += miles

    def fill_gas_tank(self):
        """模拟加油"""
        print("The tank is full!")


# -------------------------------------------------------------------


# electric_car.py
"""一组可用于表示电动汽车的类"""


from car import Car

class Battery:
    """模拟电动车电池"""

    def __init__(self, battery_size=75):
        """初始化电池属性"""
        self.battery_size = battery_size

    def describe_battery(self):
        """打印一条描述电瓶容量的消息"""
        print(f"This car has a {self.battery_size}-kWh battery.")

    def get_range(self):
        """打印一条消息，指出电池的续航里程"""
        if self.battery_size == 75:
            range = 260
        elif self.battery_size == 100:
            range = 315
        print(f"This car can go about {range} miles on a full charge.")


class ElectricCar(Car):
    """模拟电动车（继承自汽车类）"""

    def __init__(self, make, model, year):
        """
        初始化父类的属性
        再初始化电动车特有的属性
        """
        super().__init__(make, model, year)
        self.battery = Battery()

    # 重新（覆盖）父类的方法
    def fill_gas_tank(self):
        """电动车没有油箱，不需要加油，而是充电"""
        print("The battery is fully charged!")


# -------------------------------------------------------------------


# my_car.py
from car import Car
from electric_car import ElectricCar as EC

my_beetle = Car('volkswagen', 'beetle', 2019)
print(my_beetle.get_descropive_name())

my_tesla = EC('tesla', 'roadster', 2019)
print(my_tesla.get_descropive_name())

# my_car.py 运行结果：
# 2019 Volkswagen Beetle
# 2019 Tesla Roadster

# 从一个模块中导入多个类：from electric_car import Battery, ElectricCar
# 导入整个类：from electric_car
# 导入模块中的所有类：from electric_car import *
# 使用别名：as
# 这里再次强调：每一个以扩展名 .py 结尾的 Python 源代码文件都是一个 模块
```

```python
# Python 标准库
# Python 标准库是一组模块，安装 Python 都默认包含它。
# Python 标准库中拥有丰富且功能强大的各种函数和类
# 我们可以利用导入的方式运用它们

# 此处举两个例子，更多内容请查阅 Python 标准库文档
# randint() 函数：它将两个整数作为参数，并随机返回一个位于这两个整数之间（含）的整数
from random import randint
print(randint(1, 6))    # 5
print(randint(1, 6))    # 1
print(randint(1, 6))    # 2


# choice() 函数：它将一个列表或元组作为参数，并随机返回其中的一个元素：
from random import choice
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(choice(players))  # michael
print(choice(players))  # eli
print(choice(players))  # charles
```

# 十、文件和异常

```python
# 从文件中读取数据
# 读取整个文件

# pi_digits.txt
3.1415926535
  8979323846
  2643383279

# file_reader.py
with open('pi_digits.txt') as file_object:
    contents = file_object.read()
print(contents)
# 运行结果：
# 3.1415926535
#   8979323846
#   2643383279
# 

# open() 函数：无论以任何方式使用文件，哪怕仅仅是查看其内容，都应该利用 open() 先打开文件
# open() 函数接收一个字符串参数：文件的路径及文件名
# open() 函数返回一个表示文件的对象，可以用 as 关键字将该文件对象赋给另一个对象方便使用
# 关键字 with 在不再需要访问文件后将其关闭（所谓的关闭时机由 Python 根据用户行为自由控制）
# read() 方法用于读取该文件的全部内容，并返回一个长字符串
# read() 方法在读取到文件末尾时返回一个空字符串，而将这个空字符串显示出来就是一个空行，所以读取文件得到的字符串最后有一个空行

with open('pi_digits.txt') as file_object:
    contents = file_object.read()
# 利用 rstrip() 解决空行问题
print(contents.rstrip())
# 运行结果：
# 3.1415926535
#   8979323846
#   2643383279

# 逐行读取
filename = 'pi_digits.txt'
with open(filename) as file_object:
    for line in file_object:
        print(line)
# 运行结果：
# 3.1415926535
# 
#   8979323846
# 
#   2643383279
#

filename = 'pi_digits.txt'
with open(filename) as file_object:
    for line in file_object:
        print(line.rstrip())
# 运行结果：
# 3.1415926535
#   8979323846
#   2643383279


# 创建一个包含文件各行内容的列表
# readlines() 方法从文件中读取每一行，并将其存储在一个列表中
filename = 'pi_digits.txt'
with open(filename) as file_object:
    lines = file_object.readlines()
print(lines)
for line in lines:
    print(line.rstrip())
# 运行结果：
# ['3.1415926535\n', '  8979323846\n', '  2643383279']
# 3.1415926535
#   8979323846
#   2643383279
```

```python
# 写入文件
# open() 提供了两个参数，其中第一个是文件路径及名称字符串，第二个是文件打开时的模式
# ('r')：读取模式
# ('w')：写入模式
# ('a')：附加模式
# ('r+')：读写模式
# 如果省略了第二个参数，那么 Python 将以默认的只读模式打开文件
# 如果要写入的文件不存在，那么 open() 函数将自动创建它
# 以写入模式 w 打开文件时要特别小心，因为如果该文件已经存在，那么 Python 会先清空该文件
# 使用 write() 方法将一个字符串写入文件
# 注意：Python 只能将字符串写入文本文件，要将数值数据存储到文本文件中，必须先使用函数 str() 将其转换为字符串格式

# 写入空文件
filename = 'programming.txt'
with open(filename, 'w') as file_object:
    file_object.write("I love programming.")
# 运行结果：生成 programming.txt 文件，内容为：I love programming.


# 写入多行
# write() 方法不会在写入的文本末尾添加换行符，因此如果写入多行时需要指定换行符
filename = 'programming.txt'
with open(filename, 'w') as file_object:
    file_object.write("I love programming.\n")
    file_object.write("I love creating new games.\n")
# 除了 \n 之外，还可以使用空格、制表符和空行来设置这些输出的格式


# 附加到文件
# 附加模式：在原文件的基础上添加内容（追加到末尾）
# 注意：如果文件不存在，附加模式会自动创建一个文件，如果文件已经存在，那么不会清空文件，而是会在原基础上追加
filename = 'programming.txt'
with open(filename, 'a') as file_object:
    file_object.write("I also love finding meaning in large datasets.\n")
    file_object.write("I love creating apps that can run in a browser.\n")
```

```python
# json 模块
# Python 提供了 json 模块可以将 Python 数据结构以 json 格式存储到文件中，并在需要时加载该文件中的数据
# 并且 JSON 并非 Python 专用的数据格式，而是目前广泛通用的数据格式（最先来自于 JavaScript）
# json.dump() 用于存储数据，接收两个实参：要存储的数据、目标文件对象
# json.load() 用于读取数据，接收一个实参：目标文件对象
import json

numbers = [2, 3, 5, 7, 11, 13]
loves = {'food': 'hamburger', 'car': 'AMG G63'}
users = [
    {
        'username': 'Jerry',
        'age': 18
    },
    {
        'username': 'Tom',
        'age': 24
    }
]

filename_01 = 'numbers.json'
filename_02 = 'loves.json'
filename_03 = 'users.json'

with open(filename_01, 'w') as f_01:
    json.dump(numbers, f_01)
with open(filename_02, 'w') as f_02:
    json.dump(loves, f_02)
with open(filename_03, 'w') as f_03:
    json.dump(users, f_03)

with open(filename_01) as rf_01:
    print(json.load(rf_01))
with open(filename_02) as rf_02:
    print(json.load(rf_02))
with open(filename_03) as rf_03:
    print(json.load(rf_03))
# 运行结果：
# [2, 3, 5, 7, 11, 13]
# {'food': 'hamburger', 'car': 'AMG G63'}
# [{'username': 'Jerry', 'age': 18}, {'username': 'Tom', 'age': 24}]
```

```python
# 异常
# 当程序执行期间发生错误时，Python 会生成一个对应的特殊对象叫”异常“
# 我们可以编写专门用于处理异常对象的代码，来应对异常的出现，让程序继续执行，而不是直接终止程序并显示 traceback
# 异常是使用 try-except 代码块处理的，使用该代码块之后，程序执行即便出现了异常，程序也将继续运行，并显示我们编写的友好提示，而不是直接崩溃

# 例1：处理 ZeroDivisionError 异常
try:
    print(5/0)
except ZeroDivisionError:
    print("You can't divide by zero!")
print("...")
# 运行结果：
# You can't divide by zero!
# ...

# else 代码块
# 依赖 try 代码块成功执行的代码都应该放到 else 代码块中
try:
    answer = 5/0
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print(answer)
print("...")
# 运行结果：
# You can't divide by zero!
# ...

try:
    answer = 5/2
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print(answer)
print("...")
# 运行结果：
# 2.5
# ...


# 例2：处理 FileNotFoundError 异常
filename = 'alice.txt'
with open(filename, encoding='utf-8') as f:
    contents = f.read()
# FileNotFoundError: [Errno 2] No such file or directory: 'alice.txt'

filename = 'alice.txt'
try:
    with open(filename, encoding='utf-8') as f:
        contents = f.read()
except FileNotFoundError:
    print(f"Sorry, the file {filename} does not exist.")
else:
    # 计算该文件大致包含多少个单词
    words = contents.split()
    num_words = len(words)
    print(f"The file {filename} has about {num_words} words.")
# Sorry, the file alice.txt does not exist.


# 静默失败
try:
    print(5/0)
except ZeroDivisionError:
    pass
print("...")
# 运行结果：
# ...
```

# 十一、测试代码

```python
# Python 标准库中的模块 unittest 提供了代码测试工具
# 单元测试用于核实函数的某个方面没有问题
# 测试用例是一组单元测试，它们一道核实函数在各种情形下的行为都符合要求
# 良好的测试用例考虑到了函数可能收到的各种输入，包含针对所有这些情形的测试
# 全覆盖的测试用例包含一整套单元测试，涵盖了各种可能的函数使用方式
# 对于大型项目，要进行全覆盖测试可能很难，通常，最初只要针对代码的重要行为编写测试即可
```

```python
def get_formatted_name(first, last):
    """生成整洁的姓名"""
    full_name = f"{first} {last}"
    return full_name.title()

# 测试函数
# Python 标准库中的模块 unittest 提供了代码测试工具
# 单元测试用于核实函数的某个方面没有问题
# 测试用例是一组单元测试，它们一道核实函数在各种情形下的行为都符合要求
# 良好的测试用例考虑到了函数可能收到的各种输入，包含针对所有这些情形的测试
# 全覆盖的测试用例包含一整套单元测试，涵盖了各种可能的函数使用方式
# 对于大型项目，要进行全覆盖测试可能很难，通常，最初只要针对代码的重要行为编写测试即可

import unittest

# 1、可通过的测试
class NameTestCase(unittest.TestCase):
    """测试 name_function.py"""
    def test_first_last_name(self):
        """能够正确地处理像 Janis Joplin 这样的姓名吗？"""
        formatted_name = get_formatted_name('janis', 'joplin')
        self.assertEqual(formatted_name, 'Janis Joplin')

if __name__ == '__main__':
    unittest.main()

# 运行结果：
# .
# ----------------------------------------------------------------------
# Ran 1 test in 0.000s
#
# OK

# 解释：
# NameTestCase 类用于包含一系列针对 get_formatted_name() 的单元测试
# NameTestCase 可以随意命名，但最好让它看起来与要测试的函数相关并包含 Test 字样
# NameTestCase 类必须继承 unittest.TestCase 类，这样 NameTestCase 才具有测试能力
# 由于我们目前只需测试 get_formatted_name() 的一个方面，所以我们只需在 NameTestCase 中包含一个针对性的测试方法 test_first_last_name()
# 运行 .py 文件时，所有以 test_ 打头的方法都将自动运行
# assertXxx 方法是 unittest 类最有用的功能之一：断言
# 断言方法核实得到的结果是否与期望的结果一致
# 常用的 6 种断言方法：
# assertEqual(a, b)         核实 a == b
# assertNotEqual(a, b)      核实 a != b
# assertTrue(x)             核实 x 为 True
# assertFalse(x)            核实 x 为 False
# assertIn(item, list)      核实 item 在 list 中
# assertNotIn(item, list)   核实 item 不在 list 中
# 当 python 程序运行时（独立运行、导入运行）会自动设置一个 __name__ 变量
# 当 python 程序作为主程序运行时（独立运行）则 __name__ 将被设置为 '__main__'
# 由于测试函数只在该程序作为主程序运行时才执行（该程序导入其它程序中应忽略测试），所以这里用 if 判断执行环境是否是主程序
# 当执行环境是主程序时才 unittest.main 执行测试，否则忽略测试代码的执行
```

```python
import unittest


def get_formatted_name(first, middle, last):
    """生成整洁的姓名"""
    full_name = f"{first} {middle} {last}"
    return full_name.title()


# 2、未通过的测试
class NameTestCase(unittest.TestCase):
    """测试 name_function.py"""

    def test_first_last_name(self):
        """能够正确地处理像 Janis Joplin 这样的姓名吗？"""
        formatted_name = get_formatted_name('janis', 'joplin')
        self.assertEqual(formatted_name, 'Janis Joplin')


if __name__ == '__main__':
    unittest.main()

# 运行结果：
# E
# ======================================================================
# ERROR: test_first_last_name (__main__.NameTestCase)
# 能够正确地处理像 Janis Joplin 这样的姓名吗？
# ----------------------------------------------------------------------
# Traceback (most recent call last):
#   File "F:/work/pycharm-workspace/study/main.py", line 16, in test_first_last_name
#     formatted_name = get_formatted_name('janis', 'joplin')
# TypeError: get_formatted_name() missing 1 required positional argument: 'last'
#
# ----------------------------------------------------------------------
# Ran 1 test in 0.000s
#
# FAILED (errors=1)
```

```python
import unittest


# 3、测试未通过时，应该修复代码
def get_formatted_name(first, last, middle=''):
    """生成整洁的姓名"""
    if middle:
        full_name = f"{first} {middle} {last}"
    else:
        full_name = f"{first} {last}"
    return full_name.title()


class NameTestCase(unittest.TestCase):
    """测试 name_function.py"""

    def test_first_last_name(self):
        """能够正确地处理像 Janis Joplin 这样的姓名吗？"""
        formatted_name = get_formatted_name('janis', 'joplin')
        self.assertEqual(formatted_name, 'Janis Joplin')


if __name__ == '__main__':
    unittest.main()
    
# 运行结果：
# .
# ----------------------------------------------------------------------
# Ran 1 test in 0.000s
# 
# OK
```

```python
import unittest


def get_formatted_name(first, last, middle=''):
    """生成整洁的姓名"""
    if middle:
        full_name = f"{first} {middle} {last}"
    else:
        full_name = f"{first} {last}"
    return full_name.title()


# 4、添加新测试
class NameTestCase(unittest.TestCase):
    """测试 name_function.py"""

    def test_first_last_name(self):
        """能够正确地处理像 Janis Joplin 这样的姓名吗？"""
        formatted_name = get_formatted_name('janis', 'joplin')
        self.assertEqual(formatted_name, 'Janis Joplin')

    def test_first_last_middle_name(self):
        """能够正确的处理像 Wolfgang Amadeus Mozart 这样的姓名吗？"""
        formatter_name = get_formatted_name('wolfgang', 'mozart', 'amadeus')
        self.assertEqual(formatter_name, 'Wolfgang Amadeus Mozart')


if __name__ == '__main__':
    unittest.main()

# 运行结果：
# ..
# ----------------------------------------------------------------------
# Ran 2 tests in 0.000s
# 
# OK
```

```python
# setUp() 的使用
class AnonymousSurvey:
    """收集匿名调查问卷的答案"""

    def __init__(self, question):
        """存储一个问题，并为存储匿名答案做准备"""
        self.question = question
        self.responses = []

    def show_question(self):
        """显示调查问卷"""
        print(self.question)

    def store_response(self, new_response):
        """存储单份调查答卷"""
        self.responses.append(new_response)

    def show_results(self):
        """显示收集到的所有答卷"""
        print("Survey results:")
        for response in self.responses:
            print(f"- {response}")


import unittest


class TestAnonymousSurvey(unittest.TestCase):
    """针对 AnonymousSurvey 类的测试"""

    def setUp(self):
        """创建一个调查对象和一组答案，供使用的测试方法使用"""
        question = "What language did you first learn to speak?"
        self.my_survey = AnonymousSurvey(question)
        self.responses = ['English', 'Spanish', 'Mandarin']

    def test_store_single_response(self):
        """测试单个答案会被妥善地存储"""
        self.my_survey.store_response(self.responses[0])
        self.assertIn(self.responses[0], self.my_survey.responses)

    def test_store_three_response(self):
        """测试三个答案会被妥善地存储"""
        for response in self.responses:
            self.my_survey.store_response(response)
        for response in self.responses:
            self.assertIn(response, self.my_survey.responses)


if __name__ == '__main__':
    unittest.main()
    
# 运行结果：
# ..
# ----------------------------------------------------------------------
# Ran 2 tests in 0.000s
#
# OK

# unittest.TestCase 类提供了 setUp() 方法
# Python 将首先运行 setUp() 方法，再运行各个以 test_ 打头的方法
# 用途举例：当对类进行测试的时候，可以在 setUp() 中创建对象，之后的 test_ 测试方法中就不用重复创建

# 注意：通常情况下测试文件应该是单独的，不推荐与业务代码放在一块，往后应该单独创建测试代码文件并 import 导入业务函数或类再进行测试
# 同时，import 语句一般都应该统一放置在代码的最上方
```

