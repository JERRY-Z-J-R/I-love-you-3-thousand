# 【Java修饰符总结归纳】

> 原创内容，转载请注明出处！

**Java 提供了很多的修饰符，主要分为两类**

- 访问控制修饰符

- 非访问修饰符

# 一、访问控制修饰符

Java 中，可以使用访问控制修饰符来保护对 `类`、`变量`、`方法` 和 `构造方法` 的访问。

Java 支持 4 种不同的访问权限：

- `public`：对所有类可见
  - 可使用于：类、接口、变量、方法

- `protected`： 对同一包内的类和所有子类可见
  - 可使用于：变量、方法

  - 注意：不能修饰外部类（内部类可以，所谓内部类就是定义在类里的类）
  
- `default` 缺省 (默认空）：不使用任何修饰符，在同一包内可见
  - 可使用于：类、接口、变量、方法
- `private`：在同一类内可见
  - 可使用于：变量、方法 
  - 注意：不能修饰外部类（内部类可以，所谓内部类就是定义在类里的类）

## 1.1 访问权限表格

|   修饰符    | 当前类 | 子孙类（同一包） | 其他类（同一包） | 子孙类（不同包） | 其他类（不同包） |
| :---------: | :----: | :------------: | :------------: | :------------: | :------------: |
|  `public`   |   Y   |       Y       |       Y       |       Y       |       Y       |
| `protected` |   Y   |       Y       |       Y       |       Y       |                |
|  `default`  |   Y   |       Y       |       Y       |                |                |
|  `private`  |   Y   |                |                |                |                |

## 1.2 访问控制和继承

**请注意以下方法继承的规则：**

- 父类中声明为 public 的方法在子类中也必须为 public
- 父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private
- 父类中声明为 private 的方法，在子类中不可见！（但本质上是能够被子类继承的）

## 1.3 代码示例

**项目结构：**

- `com.jerry.java.demo01`
- `A.java`（当前类）
  - `B.java`（子孙类（同一包））
  - `C.java`（其他类（同一包））
- `com.jerry.java.demo02`
  - `D.java`（子孙类（不同包））
  - `E.java`（其他类（不同包））

```java
package com.jerry.java.demo01;

// 当前类
public class A {
    // 四种访问控制修饰符对应的成员变量
    int def = 0;
    public int pub = 0;
    protected int pro = 0;
    private int pri = 0;

    // 为类外获得 pri 所提前提供的 Getter 方法
    public int getPri() {
        return pri;
    }

    // 四种访问控制修饰符对应的方法
    void funDef() {};
    public void funPub() {};
    protected void funPro() {};
    private void funPri() {};

    // 当前类中四种访问控制修饰符都可见！
    public void TestAuthority() {
        System.out.println(def);
        System.out.println(pub);
        System.out.println(pro);
        System.out.println(pri);
        funDef();
        funPub();
        funPro();
        funPri();
    }
}
```

```java
package com.jerry.java.demo01;

// 子孙类（同一包）
public class B extends A {
    // Error:语句只能写在方法内或者语句块中，不能直接单独出现在类里！
    // System.out.println(def);    
    
    // 子孙类（同一包）中除了 private 都可见！（注意：继承是都可以继承的，只是可见性不一样）
    public void TestAuthority() {
        // 分别测试子孙类（同一包）中四种访问控制修饰符对应的成员变量的可见性（继承性、权限性）
        System.out.println(def);		// True:default
        System.out.println(pub);		// True:public
        System.out.println(pro);		// True:protected
        System.out.println(pri);		// Error:pri 为 private 修饰为私有成员变量，只有父类里可以直接访问！
        System.out.println(getPri());   // True:访问 private 私有成员变量只能间接通过 Getter 方法！
        
        // 分别测试子孙类（同一包）中四种访问控制修饰符对应的方法的可见性（继承性、权限性）
        funDef();
        funPub();
        funPro();
        funPri();		// Error:funPri 为 private 修饰为私有方法，只有父类里可以直接访问！
    }
}
```

```java
package com.jerry.java.demo01;

// 其他类（同一包）
public class C {
    // 其他类（同一包）中除了 private 都可见！
    public void TestAuthority() {
        A a = new A();
       
        // 分别测试其他类（同一包）中四种访问控制修饰符对应的成员变量的可见性（继承性\权限性）
        System.out.println(a.def);        // True:default
        System.out.println(a.pub);        // True:public
        System.out.println(a.pro);        // True:protected
        System.out.println(a.pri);        // Error:pri 为 private 修饰为私有成员变量，只有父类里可以直接访问！
        System.out.println(a.getPri());   // True:访问 private 私有成员变量只能间接通过 Getter 方法！
        
        // 分别测试其他类（同一包）中四种访问控制修饰符对应的方法的可见性（继承性\权限性）
        a.funDef();
        a.funPub();
        a.funPro();
        a.funPri();		// Error:funPri 为 private 修饰为私有方法，只有父类里可以直接访问！
    }
}
```

```java
package com.jerry.java.demo02;
import com.jerry.java.demo01.A;

// 子孙类（不同包）
public class D extends A {
    // 子孙类（不同包）中 public、protected 可见！
    public void TestAuthority() {
        // 分别测试子孙类（不同包）中四种访问控制修饰符对应的成员变量的可见性（继承性、权限性）
        System.out.println(def);        // Error:def 为 default 修饰成员变量，只在同一包中才可见！
        System.out.println(pub);        // True:public
        System.out.println(pro);        // True:protected
        System.out.println(pri);        // Error:pri 为 private 修饰为私有成员变量，只有父类里可以直接访问！
        System.out.println(getPri());   // True:访问 private 私有成员变量只能间接通过 Getter 方法！
       
        // 分别测试子孙类（不同包）中四种访问控制修饰符对应的方法的可见性（继承性、权限性）
        funDef();       // Error:funDef 为 default 修饰方法，只在同一包中才可见！
        funPub();
        funPro();
        funPri();		// Error:funPri 为 private 修饰为私有方法，只有父类里可以直接访问！
    }
}
```

```java
package com.jerry.java.demo02;
import com.jerry.java.demo01.A;

// 其他类（不同包）
public class E {
    // 其他类（不同包）中只有 public 可见！
    public void TestAuthority() {
        A a = new A();
        
        // 分别测试其他类（不同包）中四种访问控制修饰符对应的成员变量的可见性（继承性、权限性）
        System.out.println(a.def);        // Error:def 为 default 修饰成员变量，只在同一包中才可见！
        System.out.println(a.pub);        // True:public
        System.out.println(a.pro);        // Error:protect
        System.out.println(a.pri);        // Error:pri 为 private 修饰为私有成员变量，只有父类里可以直接访问！
        System.out.println(a.getPri());   // True:访问 private 私有成员变量只能间接通过 Getter 方法！
       
        // 分别测试其他类（不同包）中四种访问控制修饰符对应的方法的可见性（继承性、权限性）
        a.funDef();		// Error:funDef 为 default 修饰方法，只在同一包中才可见！
        a.funPub();
        a.funPro();		// Error:protect
        a.funPri();		// Error:funPri 为 private 修饰为私有方法，只有父类里可以直接访问！
    }
}
```

## 1.4 class 修饰符实例

- 四种访问控制修饰符中，对于外部类只可以使用：`public` 或 `默认`
- `public class`：所有地方都可以使用该类
- `class`：只有同一包中才能使用该类

![](https://img-blog.csdnimg.cn/20210314212733238.png)

![](https://img-blog.csdnimg.cn/20210314212732979.png)

# 二、非访问修饰符

为了实现一些其他的功能，Java 也提供了许多非访问修饰符。

- **`static` 修饰符：**用来修饰类方法和类变量

- **`final` 修饰符：**用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的

- **`abstract` 修饰符：**用来创建抽象类和抽象方法

- **`synchronized` 和 `volatile` 修饰符：**主要用于线程的编程

## 2.1 static 修饰符

- **静态变量：**

  `static` 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为 `类变量`。局部变量不能被声明为 static 变量。

- **静态方法：**

  `static` 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量！静态方法从参数列表得到数据，然后计算这些数据。
  
  
  

**static 关键字特点：**

- 随着类的加载而加载
- 优先于对象存在
- 被类的所有对象共享
  - 这也是我们判断是否使用静态关键字的条件
- 可以通过类名调用



**static 关键字注意事项：**

- 在静态方法中是没有 `this` 关键字的
- 静态方法只能访问静态的成员变量和静态的成员方法



对 类变量 和 方法 的访问可以直接使用 `classname.variablename` 和 `classname.methodname` 的方式访问。

如下例所示，static 修饰符用来创建 类方法 和 类变量。

```java
public class InstanceCounter {
   private static int numInstances = 0;
   protected static int getCount() {
      return numInstances;
   }
 
   private static void addInstance() {
      numInstances++;
   }
 
   InstanceCounter() {
      InstanceCounter.addInstance();
   }
 
   public static void main(String[] arguments) {
      System.out.println("Starting with " + InstanceCounter.getCount() + " instances");
      
      for (int i = 0; i < 500; ++i) {
         new InstanceCounter();
      }
       
      System.out.println("Created " + InstanceCounter.getCount() + " instances");
   }
}
```

以上实例运行编辑结果如下:

```text
Starting with 0 instances
Created 500 instances
```

## 2.2 final 修饰符

**final 变量：**

`final` 表示 "最后的、最终的" 含义，变量一旦赋值后，不能被重新赋值。被 final 修饰的实例变量必须 **显式指定初始值**。

final 修饰符通常和 static 修饰符一起使用来创建 类常量。

```java
public class Test {
	final int value = 10;
    
	// 下面是声明常量的实例
    public static final int BOX_WIDTH = 6;
  	static final String TITLE = "Manager";
 
  	public void changeValue() {
    	value = 12;		 // 修改 final 值，将输出一个错误
  	}
}
```

**final 方法：**

父类中的 final 方法可以被子类继承，但是不能被子类重写。

声明 final 方法的主要目的是防止该方法的内容被修改。

如下所示，使用 final 修饰符声明方法。

```java
public class Test {
    public final void changeName() {
    	// 方法体
    }
}
```

**final 类：**

final 类不能被继承，没有类能够继承 final 类的任何特性。

```java
public final class Test {
	// 类体
}
```

## 2.3 abstract 修饰符

**抽象类：**

抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。

一个类不能同时被 abstract 和 final 修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。

抽象类可以包含 抽象方法 和 非抽象方法。

```java
abstract class Caravan {
   private double price;
   private String model;
   private String year;
   public abstract void goFast(); 		// 抽象方法
   public abstract void changeColor();
}
```

**抽象方法：**

抽象方法是一种没有任何实现的方法，该方法的的具体实现由子类提供。

抽象方法不能被声明成 final 和 static。

任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。

如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。

抽象方法的声明以分号结尾，例如：`public abstract sample();`。

```java
public abstract class SuperClass {
    abstract void m(); 	// 抽象方法
}
 
class SubClass extends SuperClass {
     // 实现抽象方法
      void m() {
          .........
      }
}

// 或者，在不实现抽象方法的前提下，必须把子类也设为抽象类
abstract class SubClass extends SuperClass {
   
}
```

## 2.4 synchronized 修饰符

synchronized 关键字声明的方法同一时间只能被一个线程访问。synchronized 修饰符可以应用于四个访问修饰符。

```java
public synchronized void showDetails() {
.......
}
```

## 2.5 transient 修饰符

序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机（JVM）跳过该特定的变量。

该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。

```java
public transient int limit = 55;   // 不会持久化
public int b; 	// 持久化
```

## 2.6 volatile 修饰符

volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。

一个 volatile 对象引用可能是 null。

```java
public class MyRunnable implements Runnable
{
    private volatile boolean active;
    public void run() {
        active = true;
        while (active) // 第一行
        {
            // 代码
        }
    }
    public void stop()
    {
        active = false; // 第二行
    }
}
```

通常情况下，在一个线程调用 `run()` 方法（在 Runnable 开启的线程），在另一个线程调用 `stop()` 方法。 如果 第一行 中缓冲区的 active 值被使用，那么在 第二行 的 active 值为 false 时循环不会停止。

但是以上代码中我们使用了 volatile 修饰 active，所以该循环会停止。

# 补充：修饰符的可用范围

- **类 (外部类)：**
  - 默认，public，final，abstract
  - 我们自己定义：默认、public 居多
  
- **成员变量：**
  - 四种访问控制修饰符均可，final，static
  - 我们自己定义：private 居多

- **构造方法：**
  - 四种访问控制修饰符均可，其他不可
  - 我们自己定义：public 居多
  - private：类外不可以 new 对象，类内可以
  
- **成员方法：**
  - 四种访问控制修饰符均可，final，static，abstract
  - 我们自己定义：public 居多
