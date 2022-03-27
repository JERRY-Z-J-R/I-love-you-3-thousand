# 【Java类与对象及封装继承机制案例详解】

> 原创内容，转载请注明出处！

# 一、类与对象案例

## 1、大象装冰箱

```java
/* 
	大象装冰箱
	面向过程：（函数或方法）
	1. 冰箱打开
	2. 大象进入
	3. 冰箱关闭

	面向对象：（分类）
	1. 几个类（主体）？ 2个，大象和冰箱
	2. 方法分类
		2.1 冰箱打开、冰箱关闭归入冰箱类
		2.2 大象进入归入大象类
	3. 类创建对象，对象调用方法
*/

// 冰箱类
class Fridge {
	public void open() {
		System.out.println("冰箱打开");
	}

	public void close() {
		System.out.println("冰箱关闭");
	}
}

// 大象类
class Elephant {
	public void goin() {
		System.out.println("大象进入");
	}
}


class Test {
	public static void main(String[] args) {	
		
		/*
		面向过程方法调用
		open();
		goin();
		close();
		*/

		// 先用类创建对象，然后用对象调用方法
		Fridge f1 = new Fridge();	
		Elephant e1 = new Elephant();		

		f1.open();
		e1.goin();
		f1.close();		
	}	

	public static void open() {
		System.out.println("冰箱打开");
	}

	public static void goin() {
		System.out.println("大象进入");
	}

	public static void close() {
		System.out.println("冰箱关闭");
	}
}    	
```



## 2、张三与李四

```java
class Person {
	// 静态的属性，变量表示
	String name;
	int age;
	String gender;

	// 动态的行为，方法表示
	public void eat(String name) {
		System.out.println(name + "要吃饭");
	}

	public void sleep(String name) {
		System.out.println(name + "要睡觉");
	}	
}

public class Test {
	public static void main(String[] args) {
		Person p1 = new Person(); // 人类创建对象p1
		Person p2 = p1; // 对象p1增加新的引用p2(一个对象，两个名字)
		Person p3 = new Person(); // 人类创建对象p3

		p1.name = "张三"; // 设置对象p1的姓名属性
		p1.age = 18; // 设置对象p1的年龄属性
		p1.gender = "女"; // 设置对象p1的性别属性

		p3.name = "李四"; // 设置对象p3的姓名属性
		p3.age = 19; // 设置对象p3的年龄属性
		p3.gender = "男"; // 设置对象p3的性别属性

		Person p4 = new Person(); // 人类创建对象p4


		System.out.println(p1.name); // 输出对象p1的姓名
		System.out.println(p1.age); // 输出对象p1的年龄
		System.out.println(p1.gender); // 输出对象p1的性别

		p1.eat(p1.name); // 调用对象p1的eat()方法
		p1.sleep(p1.name); // 调用对象p1的sleep()方法

		System.out.println(p3.name);
		System.out.println(p3.age);
		System.out.println(p3.gender);

		p3.eat(p3.name); // 调用对象p3的eat()方法
		p3.sleep(p3.name); // 调用对象p3的sleep()方法
	
	}
}
```

**编译运行结果：**

```txt
张三
18
女
张三要吃饭
张三要睡觉
李四
19
男
李四要吃饭
李四要睡觉
```

## 3、内存图解

![](https://img-blog.csdnimg.cn/20201224015043698.jpg)

## 4、手机类

```java
/*
	手机类
*/
public class PhoneTest {
	public static void main(String[] args) {	
		Phone p1 = new Phone();		// 创建对象p1
		p1.color = "白色";	// 设置p1属性color
		p1.price = 4999;	// 设置p1属性price
		p1.brand = "苹果";  // 设置p1属性brand

		Phone p2 = new Phone();	// 创建对象p2
		p2.color = "黑色";
		p2.price = 5999;
		p2.brand = "华为";
		
		p1.showAll();
		p1.call();
		p1.sendMessage();
		p1.playGame();
		p2.showAll();
		p2.call();
		p2.sendMessage();
		p2.playGame();
	}		
}    
class Phone {
	// 成员变量
	String color;
	double price;
	String brand;

	// 成员方法
	public void showAll() {
		// String brand = "小米"; // 局部变量brand
		System.out.println("color = " + color + ", price = " + price + ", brand = " + brand);
	}
	public void call() {

		System.out.println(brand + "手机打电话");
	}
	public void sendMessage() {
		System.out.println(brand + "手机发短信");
	}
	public void playGame() {
		System.out.println(brand + "手机玩游戏");
	}
}
```

**编译运行结果：**

```txt
color = 白色, price = 4999.0, brand = 苹果
苹果手机打电话
苹果手机发短信
苹果手机玩游戏
color = 黑色, price = 5999.0, brand = 华为
华为手机打电话
华为手机发短信
华为手机玩游戏
```

## 5、内存图解

![](https://img-blog.csdnimg.cn/20201224015043429.jpg)

---

## 6、内存图补充

![](https://img-blog.csdnimg.cn/20201224135900109.jpg)

![](https://img-blog.csdnimg.cn/2020122413590096.jpg)

# 二、成员变量与局部变量的区别

## 1、四个不同

- 1、在类中的位置不同
  - 成员变量 类中方法外
  - 局部变量 方法内或者方法声明上（包括参数）
- 2、在内存中的位置不同
  - 成员变量 堆内存
  - 局部变量 栈内存
- 3、生命周期不同
  - 成员变量 随着对象的存在而存在，随着对象的消失而消失
  - 局部变量 随着方法的调用而存在，随着方法的调用完毕而消失
- 4、初始化值不同
  - 成员变量 有默认的初始化值（除final修饰的局部变量）
  - 局部变量 没有默认的初始化值，必须先定义，赋值，才能使用

## 2、内存图解

![](https://img-blog.csdnimg.cn/20201224015042735.jpg)

# 三、形式参数问题

java中的方法可以传递参数，参数的传递方法就是**值传递**

参数有形参和实参，定义方法时写的参数叫形参，真正调用方法时，传递的参数叫实参

调用方法时，会把实参传递给形参，方法内部其实是在使用形参（可以理解为实参的副本）

所谓值传递就是**当参数是基本类型时，传递参数的值，比如传递i=10，真实传参时，是把10这个数值赋值给了形参**

**当参数是对象时，传递的是对象的值，也就是对象的首地址。就是把对象的地址赋值给形参**

## 1、基本类型作为形式参数

```java
public class Test {
    /*
    此方法是错误的！原因：在没有实例Test类对象时，要调用该方法必须将其声明为static静态方法（类方法）
    public void fun(int a, int b) {
        a++;
        b++;
    }
    */

    public static String fun(int a, int b) {
        a++;
        b++;
        return "fun";
    }

    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        String sr = fun(a, b);
        System.out.println("a = " + a + ", " + "b = " + b + ", " + sr);
    }
}
```

**编译运行结果：**

```txt
a = 1, b = 2, fun
```

### (1)、方法的传参过程

- 1、main()方法是程序的入口，先分配实参变量的内存空间并初始化在栈中
- 2、调用fun()方法，为fun()方法的形参变量分配内存空间在栈中
- 3、将实参变量的数值赋值一份给对应的形参变量
- 4、执行fun()方法的方法体，执行完毕后释放形参变量的内存空间
- 5、main()方法得到fun()方法的返回值并继续向下执行
- 6、当main()执行完毕后，释放实参变量的内存空间

### (2)、内存图解

![](https://img-blog.csdnimg.cn/20201224015040975.jpg)

## 2、引用类型作为形式参数

### (1)、案例一

```java
public class Test {
    void show(int i) {
        i = 200;
        System.out.println("show方法中：i = " + i);
    }

    void show(int[] arr) {
        arr[0] = 200;
        System.out.println("show方法中：arr[0] = " + arr[0]);
    }

    public static void main(String[] args) {
        Test te = new Test();
        int[] arr = new int[2];
        System.out.println("main方法中：arr[0] = " + arr[0]);
        te.show(arr);
        System.out.println("main方法中：arr[0] = " + arr[0]);
    }
}
```

**编译运行结果：**

```txt
main方法中：arr[0] = 0
show方法中：arr[0] = 200
main方法中：arr[0] = 200
```

### (2)、内存图解

![](https://img-blog.csdnimg.cn/20201224015043377.jpg)

### (3)、案例二

```java
public class Test {
    public static void main(String[] args) {
        Jerry zjr = new Jerry();
        zjr.name = "zjr";
        System.out.println("main: " + zjr.name);
        pj(zjr);
        System.out.println("main: " + zjr.name);
    }

    public static void pj(Jerry zjr) {
        zjr.name = "Jerry";
        System.out.println("pj: " + zjr.name);
    }
}

class Jerry {
    public String name;
}
```

**编译运行结果：**

```txt
main: zjr
pj: Jerry
main: Jerry
```

## 3、基本数据类型和引用数据类型作为参数的区别

基本数据类型的变量中直接存放数据值本身，所以改的时候改的是数据值本身，而不是实参
但是引用类型不同的地方在于真正的数据并没有在**栈区**的变量中保存，而是在**堆区**里面保存着，虽然也有拷贝一份的过程，也有副本，但是二者指向的是同一块堆区

引用数据类型就好比如说，两位同学使用的是同一份复习资料，其中一人把资料撕毁了，另一人当然也会受到影响。
而基本数据类型就好比复印了一份，其中一人将自己的资料撕了，并不影响别人

## 4、总结

- 当使用**基本数据类型**作为方法的形参时，在方法体中对形参的修改**不会**影响到实参的数值
- 当使用**引用数据类型**作为方法的形参时，若在方法体中**修改形参指向的数据内容**，则会对实参变量的数值产生影响，因为形参变量和实参变量共享同一块堆区
- 当使用**引用数据类型**作为方法的形参时，若在方法体中**修改形参变量的指向**，此时不会对实参变量的数值产生影响，因为形参变量和实参变量分别指向不同的堆区

# 四、匿名对象

## 1、概念

- 匿名对象：就是没有名字的对象
  - 是对象的一种简化表示形式
- 匿名对象的两种使用情况
  - 对象调用方法仅仅一次的时候
  - 作为实际参数传递

## 2、示例

```java
public class Test {
    public static void main(String[] args) {
        Car c1 = new Car();            //创建有名字的对象
        c1.run();
        c1.run();

        new Car().run();            //匿名对象调用方法
        new Car().run();            //匿名对象只适合对方法的一次调用,因为调用多次就会产生多个对象,不如用有名字的对象    
    
        //匿名对象是否可以调用属性并赋值?有什么意义?
        /*
        匿名对象可以调用属性,但是没有意义,因为调用后就变成垃圾
        如果需要赋值还是用有名字对象
        */
        new Car().color = "red";
        new Car().num = 8;
        new Car().run();
    }
}

class Car {
    String color;            //颜色
    int num;                //轮胎数

    public void run() {
        System.out.println(color + "..." + num);
    }
}
```

## 3、使用方法

### (1)、 当对象对方法仅进行一次调用的时候，就可以简化成匿名对象

如一个对象需要进行调用方法2次，用匿名对象的

new Car().run()

new Car().run()

这是2个对象分别调用了run()，不是一个对象调用了多方法

### (2)、 匿名对象可以作为实际参数进行传递

```java
public static void show(Car c)

{

//......

}

show(new Car());
```

### (3)、内存图解

```java
new Car().num = 5;
new Car().color = "green"；
new Car().run();
```

![](https://img-blog.csdnimg.cn/2020122401504030.jpg)

**匿名对象执行完毕后，由于再无引用引用之，Java的自动回收机制会视作垃圾处理**

# 五、封装的概念

## 1、privated关键字

- private关键字：
  - 是一个权限修饰符
  - 可以修饰成员(成员变量和成员方法)
  - 被private修饰的成员只在本类中才能访问
- private最常见的应用：
  - 把成员变量用private修饰
  - 提供对应的getXxx()/setXxx()方法

## 2、封装概述

- 封装概述
  - 是指隐藏对象的属性和实现细节，仅对外提供公共访问方式
- 好处：
  - 隐藏实现细节，提供公共的访问方式
  - 提高了代码的复用性
  - 提高安全性
- 封装原则
  - 将不需要对外提供的内容都隐藏起来
  - 把属性隐藏，提供公共方法对其访问


## 3、this关键字

- this:代表所在类的对象引用
- 记住：
  - 方法被哪个对象调用，this就代表那个对象
- 什么时候使用this呢?
  - 局部变量隐藏成员变量


## 4、构造方法

- 构造方法作用概述
  - 给对象的数据进行初始化
- 构造方法格式
  - 方法名与类名相同
  - 没有返回值类型，连void都没有
  - 没有具体的返回值
- 构造方法注意事项
  - 如果你不提供构造方法，系统会给出默认构造方法
  - 如果你提供了构造方法，系统将不再提供默认构造方法（一般写带参构造方法的同时也要手动写一个无参构造方法）
  - 构造方法也是可以重载的


## 5、类的成员方法

- 成员方法其实就是我们前面讲过的方法
- 方法具体划分：
  - 根据返回值
    - 有明确返回值方法
    - 返回void类型的方法
  - 根据形式参数
    - 无参方法
    - 带参方法


## 6、一个基本类的标准代码写法

- 类
  - 成员变量
  - 构造方法
    - 无参构造方法
    - 带参构造方法
  - 成员方法
    - getXxx()
    - setXxx()
- 给成员变量赋值的方式
  - 无参构造方法+setXxx()
  - 带参构造方法

## 7、类的加载及初始化过程

### (1)、Student s = new Student(); 在内存中做了哪些事情?

- 加载Student.class文件进内存
- 如果有的话，执行静态代码块
- 在栈内存为s开辟空间
- 在堆内存为学生对象开辟空间
- 对学生对象的成员变量进行默认初始化
- 对学生对象的成员变量进行显示初始化
- 有过有的话按顺序执行构造代码块
- 通过构造方法对学生对象的成员变量赋值
- 学生对象初始化完毕，把对象地址赋值给s变量

### (2)、对象创建内存图解

![](https://img-blog.csdnimg.cn/20201226000817194.png)

### (3)、Java中类什么时候被加载？

假设，有一个公共类A。另外两个B、C类的内部都使用了A类，并且都new出了对象。现在有另外一个D类，其内部new出了B、C两类的实例。试分析他们分别在什么时候被JVM加载？

**第1步：公共类A**

```java
public class ClassA {

    /**
     * 定义Class A 
     */
    //静态初始化块
    static {
        System.out.println("ClassA----我被加载了");
    }

    private  static int age = 20;
    private  String name = "xiaowang";

    public static int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }
}
```

**第2步：B类（内部使用了A类）**

```java
public class ClassB {

    /**
     * 定义Class B 
     */
    static {
        System.out.println("ClassB----我被加载了");
    }
    private ClassA classA;

    public void myName() {
        System.out.println("B方法---开始");
        classA = new ClassA();
        System.out.println("B方法---打印A的成员变量值：" + classA.getName());
        System.out.println("B方法---结束");
    }
}
```

**第3步：C类（内部也使用了A类）**

```java
public class ClassC {

    /**
     * 定义Class B 
     */

    static {
        System.out.println("ClassC----我被加载了");
    }

    private ClassA classA = new ClassA();

    public void myName() {
        System.out.println("C方法---开始");
        System.out.println("C方法---打印A的成员变量值：" + classA.getName());
        System.out.println("C方法---结束");
    }
}
```

到这里，问一下大家：B、C两个类有什么不一样的地方？BinGo，成员变量classA实例化的地方不一样，B是在方法中new出对象，C是定义成员变量引用的时候就new对象了。（咋一看，感觉没什么不一样，都是实例化，但是这里面蕴含了JVM的一个思想，那就是–JVM运行程序时，是用到该类的对象，才会去加载该类到方法区。如果方法区已经加载过该类了，不会再去加载该类）

注意一下：A、B、C 三个类都有一个静态初始化块，当一个类被加载的时候，块内的代码会得到执行。方便我们知道那个类被加载了。

**第4步：D类（D类使用了B、C两个类）**

```java
public class DTest {
        /**
         * 定义Class D 
         */
        static {
            System.out.println("ClassD----我被加载了");
        }
        //程序入口：
        public static void main(String[] args) {
            // TODO Auto-generated method stub
            ClassB classB = new ClassB();
            ClassC classC = new ClassC();
            classB.myName();
            classC.myName();
        }
    }
```

**我们先来运行一下程序，打印一下结果：看看是怎么样的**

```txt
ClassD----我被加载了
ClassB----我被加载了
ClassC----我被加载了
ClassA----我被加载了
B方法---开始
B方法---打印A的成员变量值：xiaowang
B方法---结束
C方法---开始
C方法---打印A的成员变量值：xiaowang
C方法---结束
```

下面我们一步步把D的程序来肢解。

**1、如下代码，我们在程序入口里面，只实例化B类，并不执行B类实例的myName()方法。那么请问，ClassA会被加载吗？**

```java
public class DTest {
        /**
         * 定义Class D 
         */
        static {
            System.out.println("ClassD----我被加载了");
        }
        //程序入口：
        public static void main(String[] args) {

            ClassB classB = new ClassB();
            //注意：我们注释掉了，下面这个语句。
            //classB.myName();
        }
}
```

答案是：ClassA不会被加载。运行一下看看结果：

```txt
ClassD----我被加载了
ClassB----我被加载了
```

**2、同样的情况，我们在程序入口里面，只实例化C类，那么请问，ClassA会不会被加载呢？**

```java
public class DTest {
        /**
         * 定义Class D 
         */
        static {
            System.out.println("ClassD----我被加载了");
        }
        //程序入口：
        public static void main(String[] args) {


            ClassC classC = new ClassC();

        }
}
```

**我们运行一下看看结果：**

```txt
ClassD----我被加载了
ClassC----我被加载了
ClassA----我被加载了
```

咦，为什么这次ClassA 会被加载了呢？对比一下，发现B、C两个类，在声明成员变量 classA的时候，B类中只是声明了一个引用变量–classA，并没给它赋值。只在方法被使用的时候，才new对象，而C类是声明后，直接new出对象赋值。所以A类会被加载。这也正好符合了java的特点，使用时，再加载。

**3、那么如果D类只使用了B类，什么情况下，A类会被JVM 加载到方法区呢？我们来做下面这个实验**

```java
public class DTest {
        /**
         * 定义Class D 
         */
        static {
            System.out.println("ClassD----我被加载了");
        }
        //程序入口：
        public static void main(String[] args) {

            ClassB classB = new ClassB();

            classB.myName();

        }
    }
```

**运行一下，结果如下：**

```txt
ClassD—-我被加载了 
ClassB—-我被加载了 
B方法—开始 
ClassA—-我被加载了 
B方法—打印A的成员变量值：xiaowang 
B方法—结束
```

从结果中，可以看出，ClassA的加载，是在B的实例方法，被调用的时候，才去加载。 
总结一下，本文的中心思想是讲了，一个类什么时候会被JVM加载。

![](https://img-blog.csdnimg.cn/20201226000816349.png)




## 8、static关键字

**可以修饰成员变量和成员方法**

- static关键字特点
  - 随着类的加载而加载
  - 优先于对象存在
  - 被类的所有对象共享
    - 这也是我们判断是否使用静态关键字的条件
  - 可以通过类名调用
- static关键字注意事项
  - 在静态方法中是没有this关键字的
  - 静态方法只能访问静态的成员变量和静态的成员方法


## 9、静态变量和成员变量的区别

- 所属不同
  - 静态变量属于类，所以也称为为类变量
  - 成员变量属于对象，所以也称为实例变量(对象变量)
- 内存中位置不同
  - 静态变量存储于方法区的静态区
  - 成员变量存储于堆内存
- 内存出现时间不同
  - 静态变量随着类的加载而加载，随着类的消失而消失
  - 成员变量随着对象的创建而存在，随着对象的消失而消失
- 调用不同
  - 静态变量可以通过类名调用，也可以通过对象调用
  - 成员变量只能通过对象名调用


## 10、main方法是静态的

- public static void main(String[] args) {}
  - public 被jvm调用，访问权限足够大
  - static 被jvm调用，不用创建对象，直接类名访问
  - void被jvm调用，不需要给jvm返回值
  - main 一个通用的名称，虽然不是关键字，但是被jvm识别
  - String[] args 以前用于接收键盘录入的


## 11、代码块

- 代码块
  - 在Java中，使用{}括起来的代码被称为代码块，根据其位置和声明的不同，可以分为局部代码块，构造代码块，静态代码块
  - 局部代码块 
    - 在方法中出现；限定变量生命周期，及早释放，提高内存利用率
  - 构造代码块 
    - 在类中方法外出现；多个构造方法方法中相同的代码存放到一起，每次调用构造都执行，并且在构造方法前执行
  - 静态代码块 在类中方法外出现，加了static修饰
    - 在类中方法外出现，并加上static修饰；用于给类进行初始化，在加载的时候就执行，**并且值执行一次**

### (1)、区别分析

- 静态代码块
  - 对类的数据进行初始化（最先执行，且只执行一次！）
- 构造代码块
  - 为对象的数据进行初始化，降低构造方法的冗余度（优先于构造方法执行，构造代码块的位置不受构造方法的影响，多个构造代码块按先后顺序执行）
- 构造方法
  - 为对象的数据进行初始化

### (2)、继承中的代码块和构造方法的执行顺序探索

本文讲述有关一个类的静态代码块，构造代码块，构造方法的执行流程问题。首先来看一个例子

```java
class Person {
    static {
        System.out.println("执行Person静态代码块");
    }

    {
        System.out.println("执行Person构造代码块");
    }
    
    public Person() {
        System.out.println("执行Person构造方法");
    }
}

class Student extends Person {
    static {
        System.out.println("执行Student静态代码块");
    }

    {
        System.out.println("执行Student构造代码块");
    }
    
    public Student() {
        System.out.println("执行Student构造方法");
    }
}

public class ExtendsStaticConstruct {
    public static void main(String args[]) {
        Student student = new Student();
    }
}
```

**编译运行的结果：**

```txt
执行Person静态代码块
执行Student静态代码块
执行Person构造代码块
执行Person构造方法
执行Student构造代码块
执行Student构造方法

Process finished with exit code 0
```

**说明程序的执行顺序是：**

静态代码块 －－－》   构造代码块 －－－－》  构造方法

**执行流程解释：**
　　new的是Student类，但是Student是继承子Person类，所以在加载Student类时先要加载Person类，而静态的内容是随着类的加载而加载的，所以先打印“执行Person静态代码块”，后执行Student的静态代码块。

　　加载完类后，开始走main方法，执行Student构造方法上，即初始化Student，但是Student是继承自Person，必须先初始化Person，所以先调用Person类的空参构造方法进行初始化，但是Person类的构造代码块优先于构造方法执行，所以Person类的构造代码块先执行，构造方法后执行。然后再执行Student类的构造代码块和构造方法。

　　**这里的执行顺序同子类构造中有一个默认的父类构造super()无关，不是执行到隐藏的super()才开始初始化父类的，类的初始化是分层初始化，即先初始化父类，再初始化子类，初始化每个类的过程中，进行类的初始化工作，先进性成员变量的初始化，成员变量的初始化顺序是：默认初始化，即int为0这种－－》显示初始化，例如给int型显示初始化了值－－》构造方法初始化，所以是这里执行到了构造方法。**

   **但是一定要注意，父类初始化选择的构造方法却和子类中super 选择的构造相关，下面代码很好的解释了这点。**

```java
class Person {
    static {
        System.out.println("执行Person静态代码块");
    }

    {
        System.out.println("执行Person构造代码块");
    }

    public Person() {
        System.out.println("执行Person无参构造方法");
    }

    public Person(String name) {
        System.out.println("执行Person构造方法" + name);
    }
}

class Student extends Person {
    static {
        System.out.println("执行Student静态代码块");
    }
    
    {
        System.out.println("执行Student构造代码块");
    }
    
    public Student(String name) {
        super(name);
        System.out.println("执行Student构造方法" + name);
    }
    public Student() {
        super();
        System.out.println("执行Student无参构造方法");
    }
}

public class ExtendsStaticConstruct {
    public static void main(String args[]) {
        Student student1 = new Student("lili");

        System.out.println("--------------------");
        Student student2 = new Student();
    }
}
```

**编译运行结果：**

```txt
执行Person静态代码块
执行Student静态代码块
执行Person构造代码块
执行Person构造方法lili
执行Student构造代码块
执行Student构造方法lili
--------------------
执行Person构造代码块
执行Person无参构造方法
执行Student构造代码块
执行Student无参构造方法
 
Process finished with exit code 0
```

# 六、继承的概念

## 1、继承概述

- 多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要继承那个类即可
- 通过extends关键字可以实现类与类的继承
  - class 子类名 extends 父类名 {} 
- 单独的这个类称为父类，基类或者超类；这多个类可以称为子类或者派生类
- 有了继承以后，我们定义一个类的时候，可以在一个已经存在的类的基础上，还可以定义自己的新成员

## 2、继承的好处

- 案例演示
  - 案例1：学生类和老师。定义两个功能(吃饭，睡觉)
  - 案例2：加入人类后改进

- 继承的好处
  - 提高了代码的复用性
    - 多个类相同的成员可以放到同一个类中
  - 提高了代码的维护性
    - 如果功能的代码需要修改，修改一处即可
  - 让类与类之间产生了关系，是多态的前提
    - 其实这是继承的一个弊端：类的耦合性很强

## 3、Java中继承的特点

- Java只支持单继承，不支持多继承
  - 一个类只能有一个父类，不可以有多个父类
  - class SubDemo extends Demo{} //ok
  - class SubDemo extends Demo1,Demo2...//error

- Java支持多层继承(继承体系)
  - class A{}
  - class B extends A{}
  - class C extends B{}

## 4、Java中继承的注意事项

- 子类只能继承父类所有非私有的成员(成员方法和成员变量)
  - 这体现了继承的另一个弊端：打破了封装性
- 子类不能继承父类的构造方法，但是可以通过super关键字去访问父类构造方法
- 不要为了部分功能而去继承
- 什么时候使用继承?
  - 继承中类之间体现的是：”is a”的关系

## 5、继承中成员变量的关系
- 案例演示
  - 子父类中同名和不同名的成员变量
- 结论：
  - 在子类方法中访问一个变量
    - 首先在子类局部范围找
    - 然后在子类成员范围找
    - 最后在父类成员范围找(不能访问到父类局部范围)
    - 如果还是没有就报错(不考虑父亲的父亲…)

## 6、super关键字

- super的用法和this很像
  - this代表本类对象的引用
  - super代表父类对象存储空间的标识(可以简单理解为父类对象的引用)
- 用法(this和super均可如下使用)
  - 访问成员变量
    - this.成员变量		super.成员变量
  - 访问构造方法
    - this(…)		super(…)
  - 访问成员方法
    - this.成员方法()		super.成员方法()

## 7、继承中构造方法的关系

- 子类中所有的构造方法默认都会访问父类中空参数的构造方法
- 为什么呢?
  - 因为子类会继承父类中的数据，可能还会使用父类的数据。所以，子类初始化之前，一定要先完成父类数据的初始化。
  - 每一个构造方法的第一条语句默认都是：super()

- 如果父类中没有空参的构造方法，该怎么办呢?
  - 子类通过super去显示调用父类其他的带参的构造方法
  - 子类通过this去调用本类的其他构造方法
    - 本类其他构造也必须首先访问了父类构造
  - 一定要注意：super(…)或者this(….)必须出现在第一条语句中,而且不能同时出现，否则就会出现父类数据的多次初始化问题。



## 8、继承中成员方法的关系

- 案例演示
  - 子父类中同名和不同名的成员方法
- 结论：
  - 通过子类对象去访问一个方法
    - 首先在子类中找
    - 然后在父类中找
    - 如果还是没有就报错。(不考虑父亲的父亲…)

- 方法重写概述
  - 子类中出现了和父类方法声明一致的方法，也被称为方法覆盖，方法复写
  - 使用特点：
    - 如果方法名不同，就调用对应的方法
    - 如果方法名相同，最终使用的是子类自己的
- 方法重写的应用：
  - 当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法，这样，即沿袭了父类的功能，又定义了子类特有的内容

- 方法重写的注意事项
  - 父类中私有方法不能被重写
  - 子类重写父类方法时，访问权限不能更低
  - 父类静态方法，子类也必须通过静态方法进行重写。(其实这样不算方法重写)

- 方法重写和方法重载的区别?方法重载能改变返回值类型吗? 
  - Overload
  - Override
- this关键字和super关键字分别代表什么? 以及他们各自的使用场景和作用



## 9、案例

**ExtendsDemo1.java**

```java
/*
	继承概述：
		把多个类中相同的内容给提取出来定义到一个类中。
		
	如何实现继承呢?	
		Java提供了关键字：extends
		
	格式：
		class 子类名 extends 父类名 {}
		
	好处：
		A:提高了代码的复用性
		B:提高了代码的维护性
		C:让类与类之间产生了关系，是多态的前提	
*/

//使用继承前
/*
class Student {
	public void eat() {
		System.out.println("吃饭");
	}
	
	public void sleep() {
		System.out.println("睡觉");
	}
}

class Teacher {
	public void eat() {
		System.out.println("吃饭");
	}
	
	public void sleep() {
		System.out.println("睡觉");
	}
}
*/

//使用继承后
class Person {
	public void eat() {
		System.out.println("吃饭");
	}
	
	public void sleep() {
		System.out.println("睡觉");
	}
}

class Student extends Person {}

class Teacher extends Person {}

class ExtendsDemo {
	public static void main(String[] args) {
		Student s = new Student();
		s.eat();
		s.sleep();
		System.out.println("----------------------------------");
		
		Teacher t = new Teacher();
		t.eat();
		t.sleep();
	}
}
```

ExtendsDemo2.java

```java
/*
	Java中继承的特点：
		A:Java只支持单继承，不支持多继承。
			有些语言是支持多继承，格式：extends 类1,类2,...
		B:Java支持多层继承(继承体系)
*/

/*
class Father {}
class Mother {}
class Son exnteds Father {} //正确
class Son extends Father, Mother {} // 错误
*/

class GrandFather {
	public void show() {
		System.out.println("爷爷");
	}
}

class Father extends GrandFather {
	public void method() {
		System.out.println("父亲");
	}
}

class Son extends Father {}

class ExtendsDemo2 {
	public static void main(String[] args) {
		Son s = new Son();
		s.method(); //使用父亲的方法
		s.show(); //使用爷爷的方法
	}
}
```

ExtendsDemo3.java

```java
/*
	继承的注意事项：
		A:子类只能继承父类所有非私有的成员(成员方法和成员变量)
		B:子类不能继承父类的构造方法，但是可以通过super关键字去访问父类的构造方法。
		C:不要为了部分功能而去继承
			class A {
				public void show1() {}
				public void show2() {}
			}
			
			class B {
				public void show2() {}
				public void show3() {}
			}			
			
			class B extends A {
				public void show3() {}
			}
			这样定义不好，因为类B不但有了show2()方法,还多了show1()方法，可能show1()方法不是类B所需的。			
	
		继承其实体现的是一种关系："is a"。
			Person
				Student
				Teacher
			水果
				苹果
				香蕉		
				
		包含关系可以考虑使用继承。
*/
class Father {
	private int num = 10; 
	public int num2 = 20;
	
	//私有方法，子类不能继承
	private void method() {
		System.out.println(num);
		System.out.println(num2);
	}
	
	public void show() {
		System.out.println(num);
		System.out.println(num2);
	}
}

class Son extends Father {
	public void function() {	
		//System.out.println(num); //子类不能继承父类的私有成员变量
		System.out.println(num2);
	}
}

class ExtendsDemo3 {
	public static void main(String[] args) {	
		Son s = new Son();
		//s.method(); //子类不能继承父类的私有成员方法
		s.show();
		s.function();
	}
}
```

ExtendsDemo4.java

```java
/*	
		子类中的成员变量和父类中的成员变量名称不一样，直接使用该变量。
		子类中的成员变量和父类中的成员变量名称一样，如何使用？			
			a:在子类方法的局部范围找，有就使用
			b:在子类的成员范围找，有就使用
			c:在父类的成员范围找，有就使用
			d:如果还找不到，就报错。
*/
class Father {
	public int num = 10;
	
	public void method() {
		int num = 50;
	}
}

class Son extends Father {
	public int num2 = 20;
	public int num = 30;
	
	public void show() {
		int num = 40;
		System.out.println(num);  // 40
		System.out.println(num2); // 20
		// 找不到符号
		// System.out.println(num3);
	}
}

class ExtendsDemo4 {
	public static void main(String[] args) {
		Son s = new Son();
		s.show();
	}
}
```

ExtendsDemo5.java

```java
/*				
	this和super的区别?		
			this代表本类对应的引用。
			super代表父类存储空间的标识(可以理解为父类对象的引用)

	如何使用this和super?
			A:调用成员变量
				this.成员变量   调用本类的成员变量
				super.成员变量  调用父类的成员变量
			B:调用构造方法
				this(...)	    调用本类的构造方法
				super(...)	    调用父类的构造方法
			C:调用成员方法
				this.成员方法   调用本类的成员方法
				super.成员方法  调用父类的成员方法
*/
class Father {
	public int num = 10;
}

class Son extends Father {
	public int num = 20;
	
	public void show() {
		int num = 30;
		System.out.println(num); //  调用局部变量num
		System.out.println(this.num);  // 调用Son类的成员变量num
		System.out.println(super.num); // 调用Father类的成员变量num
	}
}

class ExtendsDemo5 {
	public static void main(String[] args) {
		Son s = new Son();
		s.show();
	}
}
```

ExtendsDemo6.java

```java
/*	
		为什么子类中所有的构造方法默认都会访问父类中空参数的构造方法？		
		因为子类会继承父类中的数据，可能还会使用父类的数据。
		所以，子类初始化之前，一定要先完成父类数据的初始化。			
		注意：子类所有构造方法的第一条语句默认都是：super();
*/
class Father {
	int age;

	public Father() {
		System.out.println("Father的无参构造方法");
	}
	
	public Father(String name) {
		System.out.println("Father的带参构造方法");
	}
}

class Son extends Father {
	public Son() {
		//super();
		System.out.println("Son的无参构造方法");
	}
	
	public Son(String name) {
		//super();
		System.out.println("Son的带参构造方法");
	}
}	

class ExtendsDemo6 {
	public static void main(String[] args) {
		Son s = new Son();
		System.out.println("---------------------------------");
		Son s2 = new Son("张三");
	}
}
```

ExtendsDemo7.java

```java
/*
	如果父类没有无参构造方法，那么子类的构造方法会出现什么现象呢? 报错。
	如何解决?	
		A:在父类中加一个无参构造方法
		B:通过使用super关键字去显示的调用父类的带参构造方法
		C:子类通过this去调用本类的其他构造方法
			子类中一定要有一个构造方法去访问父类的构造方法，否则父类数据就没有初始化。
			
	注意事项：
		this(...)或者super(...)必须出现在第一条语句上。
		如果不是放在第一条语句上，就可能对父类的数据进行了多次初始化，所以必须放在第一条语句上。
*/

class Father {
	/*
	public Father() {
		System.out.println("Father的无参构造方法");
	}
	*/
	
	public Father(String name) {
		System.out.println("Father的带参构造方法");
	}
}

class Son extends Father {
	public Son() {
		super("随便给");
		System.out.println("Son的无参构造方法");
		//super("随便给");
	}
	
	public Son(String name) {
		//super("随便给");
		this();
		System.out.println("Son的带参构造方法");
	}
}

class ExtendsDemo7 {
	public static void main(String[] args) {
		Son s1 = new Son();
		System.out.println("----------------");
		Son s2 = new Son("李四");
	}
}
```

ExtendsDemo8.java

```java
/*	
	子类中的方法和父类中的方法声明不一样，直接调用。
	子类中的方法和父类中的方法声明一样，如何调用?		
		a:先看子类中是否有该方法，有就使用。
		b:再看父类中是否有该方法，有就使用。
		c:如果没有就报错。
*/
class Father {
	public void show() {
		System.out.println("show Father");
	}
}

class Son extends Father {
	public void method() {
		System.out.println("method Son");
	}
	
	public void show() {
		System.out.println("show Son");
	}
}

class ExtendsDemo8 {
	public static void main(String[] args) {		
		Son s = new Son();
		s.show();
		s.method();
		//s.fucntion(); //找不到符号
	}
}
```

ExtendsDemo9.java

```java
/*
	方法重写：子类中出现了和父类中方法声明一模一样的方法。	
	方法重载：
		本类中出现的方法名一样，参数列表不同的方法。与返回值无关。

	子类对象调用方法的时，先找子类本身，再找父类(就近原则)。		
	方法重写的应用：
		当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法。
		这样，即沿袭了父类的功能，又定义了子类特有的内容。	
*/

class Phone {
	public void call(String name) {
		System.out.println("给"+name+"打电话");
	}
}

class NewPhone extends Phone {
	public void call(String name) {
		//System.out.println("给"+name+"打电话");
		super.call(name);
		System.out.println("可以听天气预报了");
	}
}

class ExtendsDemo9 {
	public static void main(String[] args) {
		NewPhone np = new NewPhone();
		np.call("王五");
	}
}
```

ExtendsDemo10.java

```java
/*
	看程序写结果：
		A:成员变量	就近原则
		B:this和super的问题
			this访问本类的成员
			super访问父类的成员
		C:子类构造方法执行前默认先执行父类的无参构造方法
		D:一个类的初始化过程
			成员变量进行初始化
				默认初始化
				显示初始化
				构造方法初始化
				
	结果：
		fu
		zi
		30
		20
		10
*/

class Fu {
	public int num = 10;
	public Fu() {
		System.out.println("fu");
	}
}
class Zi extends Fu {
	public int num = 20;
	public Zi() {
		System.out.println("zi");
	}
	public void show() {
		int num = 30;
		System.out.println(num); //30
		System.out.println(this.num); //20
		System.out.println(super.num); //10
	}
}
class ExtendsTest1 {
	public static void main(String[] args) {
		Zi z = new Zi();
		z.show();
	}
}
```

ExtendsDemo11.java

```java
/*
		A:一个类的静态代码块,构造代码块,构造方法的执行流程
			静态代码块 > 构造代码块 > 构造方法
		B:静态的内容是随着类的加载而加载
			静态代码块的内容会优先执行
		C:子类初始化之前先会进行父类的初始化
		
	结果是：
		静态代码块Fu
		静态代码块Zi
		构造代码块Fu
		构造方法Fu
		构造代码块Zi
		构造方法Zi
*/

class Fu {
	static {
		System.out.println("静态代码块Fu");
	}

	{
		System.out.println("构造代码块Fu");
	}

	public Fu() {
		System.out.println("构造方法Fu");
	}
}

class Zi extends Fu {
	static {
		System.out.println("静态代码块Zi");
	}

	{
		System.out.println("构造代码块Zi");
	}

	public Zi() {
		System.out.println("构造方法Zi");
	}
}

class ExtendsTest2 {
	public static void main(String[] args) {
		Zi z = new Zi();
	}
}

```

ExtendsDemo12.java

```java
/*
	new Z(); 创建一个Z类对象;
	由于Z类继承自X类，因此，先初始化父类数据(super());
	先对成员变量初始化，即：Y b = new Y();
	初始化Y类对象，执行Y类的构造方法，输出"Y";
	执行X类的构造方法，输出"X";
	接下来，初始化Z类对象，先对成员变量初始化，即：Y y = new Y();
	初始化Y类对象，执行Y类的构造方法，输出"Y";
	执行Z类的构造方法，输出"Z"

	执行流程：
	1. super(), 初始化父类数据
		1.1 成员变量默认初始化   b = null
		1.2 成员变量显示初始化	 b = new Y(),    显示"Y"
		1.3 调用构造方法X()		 X(),			 显示"X"
	2. new Z(), 初始化子类数据
		2.1 成员变量默认初始化   b = null
		2.2 成员变量显示初始化	 b = new Y(),    显示"Y"
		2.3 调用构造方法Z()		 Z(),			 显示"Z" 
*/
class X {
	Y b = new Y(); // 2. 执行完毕后，输出一个"Y"
    
	X() { 	// 3. 执行完毕后，输出一个"X"
		System.out.print("X");
	}
}

class Y {
	Y() {
		System.out.print("Y");
	}
}

class Z extends X {
	Y y = new Y();  // 4. 执行完毕后，输出一个"Y"

	Z() {	
		super(); // 跳过该行代码，因为父类数据已初始化，该行代码不按照顺序执行
		System.out.print("Z"); // 5. 输出一个"Z"
	}
	public static void main(String[] args) {
		new Z(); // 1.
	}
}
// 42行代码说明： 一个子类对象出现以前，必须保证父类数据已存在并被初始化
```

# 七、this super 详解

## 1、this

this 是自身的一个对象，代表对象本身，可以理解为：**指向对象本身的一个指针**

this 的用法在 Java 中大体可以分为3种：

**1.普通的直接引用**

这种就不用讲了，this 相当于是指向当前对象本身

**2.形参与成员名字重名，用 this 来区分：**

```java
class Person {
    private int age = 10;
    public Person() {
    System.out.println("初始化年龄："+age);
}
    public int GetAge(int age) {
        this.age = age;
        return this.age;
    }
}
 
public class test1 {
    public static void main(String[] args) {
        Person Harry = new Person();
        System.out.println("Harry's age is " + Harry.GetAge(12));
    }
}
```

**运行结果：**

```txt
初始化年龄：10
Harry's age is 12
```

可以看到，这里 age 是 GetAge 成员方法的形参，this.age 是 Person 类的成员变量

**3.引用构造函数**

这个和 super 放在一起讲，见下面

## 2、super

super 可以理解为是指向自己超（父）类对象的一个指针，而这个超类指的是离自己最近的一个父类

super 也有三种用法：

**1.普通的直接引用**

与 this 类似，super 相当于是指向当前对象的父类，这样就可以用 **super.xxx** 来引用父类的成员

**2.子类中的成员变量或方法与父类中的成员变量或方法同名**

```java
class Country {
    String name;
    void value() {
       name = "China";
    }
}
  
class City extends Country {
    String name;
    void value() {
    name = "Shanghai";
    super.value();      //调用父类的方法
    System.out.println(name);
    System.out.println(super.name);
    }
  
    public static void main(String[] args) {
       City c = new City();
       c.value();
       }
}
```

**运行结果：**

```txt
Shanghai
China
```

可以看到，这里既调用了父类的方法，也调用了父类的变量。若不调用父类方法 value()，只调用父类变量 name 的话，则父类 name 值为默认值 null

**3.引用构造函数**

- **super(参数)**：调用父类中的某一个构造函数（应该为构造函数中的第一条语句）
- **this(参数)**：调用本类中另一种形式的构造函数（应该为构造函数中的第一条语句）

```java
class Person { 
    public static void prt(String s) { 
       System.out.println(s); 
    } 
   
    Person() { 
       prt("父类·无参数构造方法： " + "A Person."); 
    }//构造方法(1) 
    
    Person(String name) { 
       prt("父类·含一个参数的构造方法： " + "A person's name is " + name); 
    }//构造方法(2) 
} 
    
public class Chinese extends Person { 
    Chinese() { 
       super(); // 调用父类构造方法（1） 
       prt("子类·调用父类"无参数构造方法"： " + "A chinese coder."); 
    } 
    
    Chinese(String name) { 
       super(name);// 调用父类具有相同形参的构造方法（2） 
       prt("子类·调用父类"含一个参数的构造方法"： " + "his name is " + name); 
    } 
    
    Chinese(String name, int age) { 
       this(name);// 调用具有相同形参的构造方法（3） 
       prt("子类：调用子类具有相同形参的构造方法：his age is " + age); 
    } 
    
    public static void main(String[] args) { 
       Chinese cn = new Chinese(); 
       cn = new Chinese("codersai"); 
       cn = new Chinese("codersai", 18); 
    } 
}
```

**运行结果：**

```txt
父类·无参数构造方法： A Person.
子类·调用父类”无参数构造方法“： A chinese coder.
父类·含一个参数的构造方法： A person's name is codersai
子类·调用父类”含一个参数的构造方法“： his name is codersai
父类·含一个参数的构造方法： A person's name is codersai
子类·调用父类”含一个参数的构造方法“： his name is codersai
子类：调用子类具有相同形参的构造方法：his age is 18
```

从本例可以看到，可以用 super 和 this 分别调用父类的构造方法和本类中其他形式的构造方法

例子中 Chinese 类第三种构造方法调用的是本类中第二种构造方法，而第二种构造方法是调用父类的，因此也要先调用父类的构造方法，再调用本类中第二种，最后是重写第三种构造方法

## 3、super 和 this 的异同

- super(参数)：调用基类中的某一个构造函数（应该为构造函数中的第一条语句）
- this(参数)：调用本类中另一种形成的构造函数（应该为构造函数中的第一条语句）
- super:　它引用当前对象的直接父类中的成员（用来访问直接父类中被隐藏的父类中成员数据或函数，基类与派生类中有相同成员定义时如：super.变量名 super.成员函数据名（实参） this：它代表当前对象名（在程序中易产生二义性之处，应使用 this 来指明当前对象；如果函数的形参与类中的成员数据同名，这时需用 this 来指明成员变量名）
- 调用super()必须写在子类构造方法的第一行，否则编译不通过。每个子类构造方法的第一条语句，都是隐含地调用 super()，如果父类没有这种形式的构造函数，那么在编译的时候就会报错
- super() 和 this() 类似,区别是，super() 从子类中调用父类的构造方法，this() 在同一类内调用其它方法
- super() 和 this() 均需放在构造方法内第一行
- 尽管可以用this调用一个构造器，但却不能调用两个
- this 和 super 不能同时出现在一个构造函数里面，因为this必然会调用其它的构造函数，其它的构造函数必然也会有 super 语句的存在，所以在同一个构造函数里面有相同的语句，就失去了语句的意义，编译器也不会通过
- this() 和 super() 都指的是对象，所以，均不可以在 static 环境中使用。包括：static 变量,static 方法，static 语句块
- 从本质上讲，this 是一个指向本对象的指针, 然而 super 是一个 Java 关键字

