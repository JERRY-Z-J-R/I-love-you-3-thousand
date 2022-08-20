# Python 精简笔记

> 基于《Python编程从入门到实践》（第二版）
>
> 基于 Python 3.8
>
> 归纳总结 + 知识补充
>
> 原创内容，转载请注明出处！

> 本文档只是 Python3 的入门基础，更多内容请看：[3.8.13 Documentation (python.org)](https://docs.python.org/zh-cn/3.8/)

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

**（2）交互式 Python**

1. 打开命令行窗口（cmd 或 Windows PowerShell）
2. 输入 `python` 命令
3. 进入 Python 终端会话（出现 >>> 提示符）
4. 交互式执行代码段
5. 输入 `exit()` 退出终端会话

**（3）编写 Python 脚本**

1. 使用文本编辑器编辑 Python 脚本代码
2. 保存脚本代码为 `xxx.py` 文件
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
# 1、推荐使用 "" 定义字符串，因为在字符串中也许会出现 "I'm a geek" 这种引号嵌套情况
# 2、无论使用哪一种引号方式，关键在于要做到 “整体统一”
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
# 1、"""""" 或 '''''' 准确的来说叫做：文档字符串注释，一般放在一个函数内部的开头描述一个函数是做什么的，Python 使用他们来生成有关程序中的函数文档。
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
# range() 得到的是一个数值序列，需要通过 list() 转为列表
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
# 因为，直接 “=” 赋值 friend_foods 只是 my_foods 引用名称的副本，而不是 my_foods 指向内存真实数据的副本
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
# 虽然不可以修改元组的元素，但可以给指向元组的变量重新赋值
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

```zhoujr

```

# 八、函数

```python

```

# 九、类

```python

```

# 十、文件和异常

```python

```

# 十一、测试代码

```python
```

