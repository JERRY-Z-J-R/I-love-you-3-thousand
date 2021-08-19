---

title: 【Java常量与变量总结】Java小抄(4)
date: 2020-12-23 08:22:17
categories:
- [Java]
tags:
- Java
- 常量
- 变量
cover: https://img-blog.csdnimg.cn/20210316084735322.jpg
---

# 【Java常量与变量总结】Java小抄(4)

> 原创内容，转载请注明出处！

# 一、Java 常量

## 1.1 常量概述
**在程序执行的过程中其值不可以发生改变！**

## 1.2 常量的类型
- **字符串常量**
  - 用双引号括起来的内容
  - `"Hello"`
- **整型常量**
  - 所有整数
  - `54`，`24`
- **小数常量**
  - 所有小数
  - `12.34`， `56.78`
- **字符常量**
  - 用单引号括起来的单字符
  - `'a'`，`'A'`，`'0'`
- **布尔常量**
  - ``true` 和 `false`
- **空常量**
  - `null`

**补充：**

Java 针对整数常量提供了 4 种表现形式

- 二进制
  
- 八进制
  
- 十进制

- 十六进制
  

**进制概述**
进制：就是进位制，是人们规定的一种进位方法。 对于任何一种进制，表示某一位置上的数运算时是逢X进一位。二进制就是逢二进一，八进制是逢八进一，十进制是逢十进一，十六进制是逢十六进一。

**不同进制的数据组成**

- 二进制	
  由 0，1 组成。以 `0b` 开头
- 八进制	
  由 0，1，……，7 组成。以 `0` 开头
- 十进制	
  由 0，1，……，9 组成。整数默认是十进制的
- 十六进制 
  由 0，1，……，9，a，b，c，d，e，f（大小写均可）。以 `0x` 开头

byte、int、long、和 short 都可以用十进制、16 进制以及 8 进制的方式来表示。

当使用字面量的时候，前缀 `0` 表示 8 进制，而前缀 `0x` 代表 16 进制，例如：

```java
int decimal = 100;
int octal = 0144;
int hexa =  0x64;
```

**常量在程序运行时是不能被修改的**

在 Java 中使用 final 关键字来修饰常量，声明方式和变量类似：

```java
final double PI = 3.1415927;
```

虽然常量名也可以用小写，但为了便于识别，通常使用大写字母表示常量。

字面量可以赋给任何内置类型的变量。例如：

```java
byte a = 68;
char a = 'A';
```

和其他语言一样，Java 的字符串常量也是包含在两个引号之间的字符序列。下面是字符串型字面量的例子：

```java
"Hello World"
"two\nlines"
"\"This is in quotes\""
```

字符串常量和字符常量都可以包含任何 Unicode 字符。例如：

```java
char a = '\u0001';
String a = "\u0001";
```

**Java语言支持一些特殊的转义字符序列**

|  符号  |         字符含义         |
| :----: | :----------------------: |
|   \n   |       换行 (0x0a)        |
|   \r   |       回车 (0x0d)        |
|   \f   |       换页符(0x0c)       |
|   \b   |       退格 (0x08)        |
|   \0   |       空字符 (0x0)       |
|   \s   |       空格 (0x20)        |
|   \t   |          制表符          |
|   \"   |          双引号          |
|   \'   |          单引号          |
|   \\   |          反斜杠          |
|  \ddd  |     八进制字符 (ddd)     |
| \uxxxx | 16进制Unicode字符 (xxxx) |

# 二、Java 变量

## 2.1 Java 变量类型

在 Java 语言中，所有的变量在使用前必须声明。声明变量的基本格式如下：

```java
type identifier [ = value][, identifier [= value] ...];
```

格式说明：type 为 Java 数据类型。identifier 是变量名。可以使用逗号隔开来声明多个同类型变量。

以下列出了一些变量的声明实例。注意有些包含了初始化过程（注意：局部变量、final 修饰的实例变量，必须初始化后才能使用，否则报错！）

```java
int a, b, c;       		  // 声明三个int型整数：a、 b、c
int d = 3, e = 4, f = 5;  // 声明三个整数并赋予初值
byte z = 22;         	  // 声明并初始化 z
String s = "runoob";  	  // 声明并初始化字符串 s
double pi = 3.14159; 	  // 声明了双精度浮点型变量 pi
char x = 'x';        	  // 声明变量 x 的值是字符 'x'
```

Java 语言支持的变量类型有：

- **类变量：**独立于方法之外的变量，用 static 修饰
- **实例变量：**独立于方法之外的变量，不过没有 static 修饰
- **局部变量：**类的方法中的变量

### 实例

```java
public class Variable {
    static int allClicks = 0;    // 类变量
 
    String str = "hello world";  // 实例变量
 
    public void method() {
 
        int i = 0;  // 局部变量
 
    }
}
```

## 2.2 Java 局部变量

- 局部变量声明在方法、构造方法或者语句块中
- 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁
- 访问修饰符不能用于局部变量
- 局部变量只在声明它的方法、构造方法或者语句块中可见
- 局部变量是在栈上分配的
- 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用

### 实例 

在以下实例中 `age` 是一个局部变量。定义在 `pupAge()` 方法中，它的作用域就限制在这个方法中。

```java
package com.runoob.test;
 
public class Test { 
   public void pupAge() {
      int age = 0;
      age = age + 7;
      System.out.println("小狗的年龄是: " + age);
   }
   
   public static void main(String[] args) {
      Test test = new Test();
      test.pupAge();
   }
}
```

以上实例编译运行结果如下:

```text
小狗的年龄是: 7
```

在下面的例子中 age 变量没有初始化，所以在编译时会出错：

```java
package com.runoob.test;
 
public class Test { 
   public void pupAge() {
      int age;
      age = age + 7;
      System.out.println("小狗的年龄是 : " + age);
   }
   
   public static void main(String[] args) {
      Test test = new Test();
      test.pupAge();
   }
}
```

以上实例编译运行结果如下:

```text
Test.java:4:variable number might not have been initialized
age = age + 7;
         ^
1 error
```

## 2.3 Java 实例变量

- 实例变量声明在一个类中，但在方法、构造方法和语句块之外
- 当一个对象被实例化之后，每个实例变量的值就跟着确定
- 实例变量在对象创建的时候创建，在对象被销毁的时候销毁
- 实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息
- 实例变量可以声明在使用前或者使用后
- 访问修饰符可以修饰实例变量
- 实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见
- 实例变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定
- 实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：``ObejectReference.VariableName`。

### 实例

Employee.java 文件代码：

```java
import java.io.*;

public class Employee {
   // 这个实例变量对子类可见
   public String name;
   // 私有变量，仅在该类可见
   private double salary;
   // 在构造器中对name赋值
   public Employee (String empName) {
      name = empName;
   }
   // 设定salary的值
   public void setSalary(double empSal) {
      salary = empSal;
   }  
   // 打印信息
   public void printEmp() {
      System.out.println("名字 : " + name);
      System.out.println("薪水 : " + salary);
   }
 
   public static void main(String[] args) {
      Employee empOne = new Employee("RUNOOB");
      empOne.setSalary(1000.0);
      empOne.printEmp();
   }
}
```

以上实例编译运行结果如下:

```text
$ javac Employee.java 
$ java Employee
名字 : RUNOOB
薪水 : 1000.0
```

## 2.4 Java 类变量（静态变量）

- 类变量也称为静态变量，在类中以 `static` 关键字声明，但必须在方法之外

- 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝

- 静态变量除了被声明为常量外很少使用，静态变量是指声明为 `public/private`，`final` 和 `static` 类型的变量。静态变量初始化后不可改变

- 静态变量储存在静态存储区。经常被声明为常量，很少单独使用 static 声明变量

- 静态变量在第一次被访问时创建，在程序结束时销毁

- 与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型

- 默认值和实例变量相似。数值型变量默认值是 0，布尔型默认值是 false，引用类型默认值是 null。变量的值可以在声明的时候指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化

- 静态变量可以通过：`ClassName.VariableName` 的方式访问

- 类变量被声明为 `public static final` 类型时，类变量名称一般建议使用大写字母。如果静态变量不是 public 和 final 类型，其命名方式与实例变量以及局部变量的命名方式一致

- static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量

- final 变量

  - `final` 表示 "最后的、最终的" 含义，变量一旦赋值后，不能被重新赋值。**被 final 修饰的实例变量必须显式指定初始值。**

  - final 修饰局部变量
  - 在方法内部，该变量不可以被改变
    - 在方法声明上，分为基本类型和引用类型作为参数的情况
      - 基本类型，是值不能被改变
      - 引用类型，是地址值不能被改变
  - final 修饰变量的初始化时机
    - 在对象构造完毕前即可
  

**final 修饰符通常和 static 修饰符一起使用来创建类常量。**

例如：

```java
  public class Test {
    final int value = 10;
    // 下面是声明常量的实例
    public static final int BOXWIDTH = 6;
    static final String TITLE = "Manager";
   
    public void changeValue() {
       value = 12; // 将输出一个错误
    }
  }
```

### 实例

Employee.java 文件代码：

```java
import java.io.*;
 
public class Employee {
    // salary是静态的私有变量
    private static double salary;
    // DEPARTMENT是一个常量
    public static final String DEPARTMENT = "开发人员";
    public static void main(String[] args) {
    salary = 10000;
        System.out.println(DEPARTMENT+"平均工资:" + salary);
    }
}
```

以上实例编译运行结果如下:

```text
开发人员平均工资:10000.0
```

注意：如果其他类想要访问该变量，可以这样访问：`Employee.DEPARTMENT`。
