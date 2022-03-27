# 【Java基础注意事项归纳】

> 原创内容，转载请注明出处！

# 1

Java 中继承了 C 系语言的格式化输出函数，`printf` 使用方式与 C 系语言一样，但不建议在 Java 中使用这种输出方式！

# 2

javac 编译器可以指定用何种方式编译 java 程序，指定方式为：`javac -encoding UTF-8 Test.java`

# 3

牢记 A 的 ASCII 为：65，a 的 ASCII 为：97

# 4

两数求余数，注意符号（符号与前者相同）例如：`-5 % -2	//-1`

# 5

Java 中可在数字之间使用下划线，以提高可读性

例如：

`int x1 = 1_969;`

`double d1 = 1_969.09_19;`

注意：下划线只能在两个数字之间

- 不能在开头与结尾
- 不能在前缀或者后缀的内部或前后：`0x_7B1`、`1969_L`，八进制除外
- 不能在小数点前后

# 6

Java 中是可以连续赋值的

`num1 = num2 = num3 = 24;`

注意：此时的赋值顺序是：从右到左

# 7

对赋值号的深入理解：

`a = 10;`

- 1、将 10 赋值给 a 变量
- 2、 `a = 10;` 是一个表达式，该式会产生一个结果 = 左值（即：a = 10; 的结果就是 10)

```java
System.out.println(a = 10);					//10
System.out.println(10 + (a = 30));			//40
System.out.println(a = b = 10);				//10
System.out.println((a = 10) + (b = 20));	//30
```

# 8

在 Java 中：

`整数 / 0` ：报错

`浮点数 / 0` ：无穷大（Infinity）

# 9

浮点型数据比较规则：

- 0.0 与 -0.0 是相等的
- 浮点型与整数型只要值相等时，则也是相等的
- 正无穷与正无穷相等
- NaN 与任何数都不相等，包括 NaN（NaN 不是一个数字，例如：一个正整数除以 0 的结果为：正无穷大；浮点数 / 0 、负数的平方根 结果为：NaN）

# 10

`&&` 和 `||` 是短路运算符，即：一个表达式得结果，后一个表达式就不用运算了

`&` 和 `|` 是非短路运算符，即：一个表达式得结果，后一个表达式也要运算

# 11

三元运算符：

`boolean表达式? 表达式1: 表达式2;`

若 boolean 为真，结果为表达式1，否则为表达式2

注意：

- 必须为表达式！例如：System.out.println(); 这些就不可以！
- 三元运算符都可以转化为 if-else，但反之则不一定

# 12

特别注意：

if-else 语句中是：`else if () {}`，千万不要误以为是：`if else () {}`

# 13

### 一、`label` 的使用

`label` 是一个标签，可以使用 `break` 或 `continue` 使程序跳转到这个标签处执行（执行：`break` 或 `continue`），从而改变程序的执行流程

例如：

```java
package jerry.eclipse.java;

public class Test {

	public static void main(String[] args) {
		a: for (int i = 0; i < 10; i++) {
			for (int j = 0; j < 10; j++) {
				if (i + j == 6) {
					System.out.print("j=");
					System.out.print(j);
					break a;
				}
			}
			System.out.print("i=");
			System.out.println(i);
		}
	}

}
```

运行结果：

```txt
j=6
```

### 二、`label` 的另类用法：

（用在循环外）

案例：

```java
package jerry.eclipse.java;

public class Test {

	public static void main(String[] args) {
		b: {
			System.out.println("b");
			if (1 > 0) {
				System.out.println("break");
				break b;
			}
			System.out.println("b2");
		}
	}

}
```

运行结果：

```txt
b
break
```

注意：

- b label 标签内的变量是局部变量，只在 b {} 中有效
- 且 break b; 只能出现在 b{} 中，否则会报错

### 三、`continue` 与 `label` 的使用只能在循环中！

案例：

```java
package jerry.eclipse.java;

public class Test {

	public static void main(String[] args) {
		a: for (int i = 0; i < 10; i++) {
			for (int j = 0; j < 10; j++) {
				if (i + j == 6) {
					System.out.print("j=");
					System.out.println(j);
					continue a;
				}
			}
			System.out.print("i=");
			System.out.println(i);
		}
	}

}
```

运行结果：

```txt
j=6
j=5
j=4
j=3
j=2
j=1
j=0
i=7
i=8
i=9
```

注意：在实际开发中，不推荐使用标记跳转！因为其破坏了程序的结构！

# 14

Java 数组

### 一、定义

- 数组是一个变量，存储相同数据类型的一组数据
- 声明一个变量就是在内存空间划出一块合适的空间
- 声明一个数组就是在内存空间划出一串连续的空间

### 二、特点

- 存放相同数据类型
- 内存中连续分配相同大小的空间
- 大小一但确定将不可扩容或缩容
- 检索元素速度快，而添加和删除元素慢
- 使用下标访问元素，下标从0开始

### 三、数组的使用

四步走：

- 1、声明数组：`int[] a;`（常用）,`int a[];`
  - 注意：声明数组时不规定数组长度，规定会报错！
- 2、分配空间：`a = new int[5];`
  - 注意：此步骤与上一步可以合并：`int [] a = new int[5];`
- 3、赋值：`a[0] = 24;`
- 4、处理数据：`a[0] = a[0] * 10;`

关于赋值：

- 普通赋值：`a[0] = 5;`，`a[1] = 9;`

- 边声明边赋值：

  - `int[] a = {66, 54, 24};`

  - ``int[] a = new int[]{66, 54, 24};`

    注意：此方式`[]`内不能指定长度！

  - `int[] a;`

    `a = new int[]{66, 54, 24};`

    注意：不可以直接 `a = {66, 54, 24};`

- 动态地从键盘录入赋值：

```java
package jerry.eclipse.java;
import java.util.Scanner;

public class Test {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] a = new int[10];
        for (int i = 0; i < a.length; i++) {
            a[i] = scanner.nextInt();
        }
    }
    
}
```

### 四、数组的默认值

在数组中：

- 基本数据类型默认值为：`0`、`0.0`、`a`、`false` 等
- 引用数据类型默认值为：`null`

注意：数组之所以会有默认值，是因为系统会自动为堆里的任何东西自动先赋一个处值！

### 五、使用循环遍历数组

使用数组的属性 `length` 控制循环的次数

方法：

1、使用 for 循环

```java
for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}
```

2、使用 foreach 循环

```java
for (int score: scores) {
    System.out.println(score);
}
// score 为一个临时变量，保存每一个 scores 遍历时的值
// 对于单纯的遍历数组而言推荐使用 foreach 循环
```

### 六、二维数组

```java
int[][] nums1 = new int[2][3];
int nums2[][] = new int[2][3];
int[][] nums3 = new int[2][];
int[][] nums4 = {{1, 2}, {3, 4}, {5, 6}};
int[][] nums5 = new int[][]{{1, 2}, {3, 4, 5}};
int nums6[][];
int[] nums7[];
```

注意：在 Java 中二维数组可以不写列数，但是一定要指明行数！但是在 C 系语言中则相反，这是因为两种语言的数组结构在底层的存储方式不同导致的！

# 15

Java 中数组内存管理的说明

数组既可以存储基本数据类型，也可以存储引用数据类型

### 一、数组的定义格式

- 格式1：`数据类型[] 数组名;` （推荐）
- 格式2：`数据类型 数组名[];`
- 注意：定义做完后，数组中是没有元素值的

### 二、数组的初始化

- 数组初始化概述：

Java 中的数组必须先初始化，然后才能使用！

例如：`int[] a = new int[];		//报错`

所谓初始化：就是为数组中的数组元素分配内存空间，并为每个数组元素赋值

- 数组的初始化方式：

1、动态初始化：初始化时只指定数组长度，由系统为数组分配初始值

- 格式：

`数据类型[] 数组名 = new 数据类型[数组长度];`

数组长度其实就是数组中元素的个数

- 举例：

`int[] arr = new int[3];`

解释：定义了一个 int 类型的数组，这个数组中可以存放3个 int 类型的值

2、静态初始化：初始化时指定每个数组元素的初始值，由系统决定数组长度

- 格式：

`数据类型[] 数组名 = new 数据类型[]{元素1, 元素2, ...};`

- 举例：

`int[] arr = new int[]{1, 2, 3};`

解释：定义了一个 int  类型的数组，这个数组中可以存放3个 int 类型的值，值分别是：1, 2, 3

简化写法：`int[] arr = {1, 2, 3};`

### 三、数组操作常见的两个问题

- 数组索引越界
  - `ArrayIndexOutOfBoundsException`
  - 访问到了数组中的不存在的索引时发生
  
- 空指针异常
  - `NallPointerException`
  - 数组引用没有指向实体，却在操作实体中的元素时

### 四、一位数组的内存分配

由于数组属于引用类型，所以其主体是放在堆中（存放 new 出来的东西）而在栈中（局部变量）对其引用

`int arr[] = new int[3];`

![](https://img-blog.csdnimg.cn/20210127160639755.png)

### 五、二维数组

其实二维数组就是一个元素为一位数组的数组

（因为：数组既可以存储基本数据类型，也可以存储引用数据类型）

### 六、二维数组的定义格式

- 格式1
  
  - `数据类型[][] 变量名 = new 数据类型[m][n];`
  
  - m 表示这个二维数组有多少个一维数组
  
  - n 表示每一个一维数组的元素个数
  
  - 举例：
  
    `int[][] arr = new int[3][2];`
  
    定义了一个二维数组 arr
  
    这个二维数组有 3 个一维数组，名称是 `arr[0]`，`arr[1]`，`arr[2]`；
  
    每个一维数组有2个元素，可以通过 `arr[m][n]` 来获取，表示获取第 m+1 个一维数组的第 n+1 个元素
  
- 格式2

   - `数据类型[][] 变量名 = new 数据类型[m][n];`
   
   - m 表示这个二维数组有多少个一维数组
   
   - 这一次没有直接给出一维数组的元素个数，可以动态的给出
   
     ```java
     int[][] arr = new int[3][];
     arr[0] = new int[2];
     arr[1] = new int[3];
     arr[2] = new int[1];
     ```

- 格式3
  
  - `数据类型[][] 变量名 = new 数据类型[][]{{元素...}, {元素...}, {元素...}};`
  
  - 简化版格式：`数据类型[][] 变量名 = {{元素...}, {元素...}, {元素...}};`
  
  - 举例：
  
    `int[][] arr = {{1, 2, 3}, {4, 6}, {6}};`

### 七、二维数组的内存分配

`int[][] arr = new int[3][];`

![](https://img-blog.csdnimg.cn/20210127164103595.png)

`arr[0] = new int[3];`

`arr[1] = new int[5];`

`arr[2] = new int[1];`

![](https://img-blog.csdnimg.cn/20210127164103587.png)

说明：这里 Java 与 C / C++ 语言在二维数组内存分配上最大的区别，在 C / C++ 中二维数组是一个合并成的一维数组，并在逻辑上为其划分为二维，而 Java 截然不同，在内存上更加清晰

由以上说明引出的三个注意点：

1、

在 C / C++ 中：`a[][n]` 是合法的，但 Java 不合法

在 Java 中：`a[m][]` 是合法的，但 C / C++ 不合法

2、

```java
int[][] arr = new int[3][];
arr[1] = new int[3];
System.out.println(arr);		// [[I@1b6d3586
System.out.println(arr[0]);		// null
System.out.println(arr[1]);		// [I@4554617c
System.out.println(arr[2]);		// null
```

C / C++ 中：a 与 a[0] 都是表示二维数组的首地址

Java 中：a 与 a[0] 则不是一个概念

3、

```java
int[][] arr = {{10, 20, 30},
               {50, 10},
               {1, 4, 9, 100, 2000}};
System.out.println(a.length);		// 3
System.out.println(a[1].length);	// 2

// 二维数组名.length 表示二维数组中有多少个一维数组
// 二维数组名[n].length 表示二维数组中的第 n+1 个一维数组有多少个元素
```

# 16

`System.out.println();` 的风格优化

例如：

```java
int a = 10;
int b = 5;
System.out.printf("a = " + a + ", " + "b = " + b);	// a=10, b=5
```

# 17

```java
int x = 4;
int y = (x++) + (++x) + (x * 10);
// 运算顺序从左到右，所以：y = 70
// 当然 ++、-- 一般只应该单独独立，这样的风格很差
```

# 18

```java
x += 4 + 3 + 1;
// x = x + (4 + 3 + 1)
//即：+= -= *= ... 都是：左 = 左 + (右全部)
```

# 19

```java
short s = 1;
s = s + 1;	// 报错！不兼容的类型：从 int 转换到 short 可能会有损（原因：出现了具体变量）
s += 1;		// 正常！s += 1; 的本质是：s = (s的数据类型)(s + 1);
```

# 20

```java
int x = 3;
while (x == 3) {
    
} // 死循环！

int y = 3;
while (y = 3) {
    
} // 报错！

// 原因：x = 3 本质上就是一个 3，而 Java 中 3 并不是 true.（与 C 语言的区别）
// 即：Java 中布尔值只能用 true false 表示！
// Java 不是 C！
```

# 21

switch 语句说明：

- `case x:` x 只能是常量！（注意：`int b = 1; ... case b:` 报错！）
- `switch` 中只有遇到 `break;` 或 `}` 才会退出！
- `default:` 语句可以放在 `switch` 中的任何位置（但：优先推荐放在末尾）

# 22

`\n` 换行符 与 `\r` 回车符的解释

- `\n` 换行符的本质是去到当前光标的正下放
- `\r` 回车符的本质是去到当前光标所在行的第一个位置
- 在 C Java 中，`\n == \n\r == \r\n` 即：`\n` 便去到了下一行的第一个位置

# 23

`\t` 制表符的解释

```java
package jerry.eclipse.java;

public class Test {

	public static void main(String[] args) {
		System.out.println("xxxxxxxxxxx");
		System.out.println("1\tend");
		System.out.println("12\tend");
		System.out.println("123\tend");
		System.out.println("1234\tend");
		System.out.println("12345\tend");
	}

}
```

运行结果：

```txt
xxxxxxxxxxx
1		end
12		end
123		end
1234	end
12345	end
```

`\t` 制表符原本是 8 个空格，当然在开发中经常将其改为 4 个空格，并且 `\t` 的实际空格数与 `\t` 前的字符数且相关，故可利用该特性来对齐文本！

# 24

```java
System.out.println("'");
System.out.println("\'");
// '可以带转义字符，也不可以带
```

# 25

`.nextLine()` 与 `.next()` 的说明

`.nextLine()` 与 `.next()` 都是用于接收字符串的函数，但是，`.next()` 会自动丢弃字符串前的空格、回车，所以有下面几种特殊情况

```java
package jerry.eclipse.java;
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("PLEASE INPUT INT NUM:");
		int test1 = scanner.nextInt();
		System.out.println(test1);
		
		System.out.print("PLEASE INPUT STRING:");
		String test2 = scanner.nextLine();
		System.out.println(test2);
	}

}
```

运行效果：

```txt
PLEASE INPUT INT NUM:24
24
PLEASE INPUT STRING:
```

解释：

在第一次输入 `24+回车` 后， test1 只是接收了 `24`，而 `回车符` 被留在了缓存区中，当 `.nextLine()` 开始执行时，`回车符` 会默认被当做字符接收

解决方法：

- 1、最优方案

在第二次输入前加入一条输入语句：

`scanner.nextLine();		// 用于清空缓冲区的字符（回车符）`

- 2、用 `.next()` 代替 `.nextLine()`

该方案会忽略字符串前的空格（包括：回车符）

（一般用于不要空格的字符串输入，如：密码）

```java
package jerry.eclipse.java;
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("PLEASE INPUT INT NUM:");
		String test1 = scanner.nextLine();
		System.out.println(test1);
		
		System.out.print("PLEASE INPUT STRING:");
		String test2 = scanner.nextLine();
		System.out.println(test2);
	}

}
```

运行结果：

```txt
PLEASE INPUT INT NUM:zjr
zjr
PLEASE INPUT STRING:lxy
lxy
```

解释：这次之所以可行，是因为前一个为字符串，在输入 `zjr+回车` 后 `回车符` 也会被 test1 接受！并不会导致下一个 `.nextLine` 异常

对 `.next()` 的解释

1、对象：接受字符串

2、特点：从第一个非空字符开始到空字符结束

```java
package jerry.eclipse.java;
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Please input String:");
		String test = scanner.next();
		System.out.println(test);
		
		System.out.println("Please input String:");
		String test2 = scanner.next();
		System.out.println(test2);
	}

}
```

运行结果：

```txt
Please input String:zjr lxy
zjr
Please input String:
lxy
```
