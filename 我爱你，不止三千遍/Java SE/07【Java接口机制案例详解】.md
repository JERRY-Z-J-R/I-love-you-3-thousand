# 【Java接口机制案例详解】

> 原创内容，转载请注明出处！

# 一、接口概述

## 1、接口概述

猫狗案例中，如果有狗看门，猫钻火圈等额外的动作，并不是所有猫或者狗一开始就具备的，这应该属于经过特殊的培训训练出来的，这些额外的动作定义到动物类中就不合适，也不适合直接定义到猫或者狗中，因为只有部分猫狗具备这些功能。所以，为了体现事物功能的扩展性，Java中就提供了接口来定义这些额外功能，并不给出具体实现，将来哪些猫狗需要被培训，只需要这部分猫狗把这些额外功能实现即可。

# 二、接口特点

## 1、接口特点

- 接口用关键字interface表示
  
  - 格式：interface 接口名 {}
- 类实现接口用implements表示
  
  - 格式：class 类名 implements 接口名 {}
- 接口不能实例化

  - 那么，接口如何实例化呢?

  - 按照多态的方式，由具体的子类实例化。其实这也是多态的一种，接口多态。

- 接口的子类
  - 要么是抽象类
  
  - 要么重写接口中的所有抽象方法

# 三、接口成员特点

## 1、成员变量
- 只能是常量
- 默认修饰符 public static final（注意：可以省略，但推荐还是写上！）

## 2、构造方法
- 没有，因为接口主要是扩展功能的，而没有具体存在

## 3、成员方法
- 只能是抽象方法
- 默认修饰符 public abstract（注意：可以省略，但推荐还是写上！）

# 四、类与类,类与接口以及接口与接口的关系

## 1、类与类

- 继承关系，只能单继承，但是可以多层继承
  
## 2、类与接口
- 实现关系，可以单实现，也可以多实现。还可以在继承一个类的同时实现多个接口
  
## 3、接口与接口
- 继承关系，可以单继承，也可以多继承

# 五、抽象类和接口的区别

## 1、成员区别
- 抽象类 变量,常量;有抽象方法;抽象方法,非抽象方法
- 接口 常量;抽象方法

## 2、关系区别
- 类与类 继承，单继承
- 类与接口 实现，单实现，多实现
- 接口与接口 继承，单继承，多继承

## 3、设计理念区别
- 抽象类 被继承体现的是：”is a”的关系。共性功能
- 接口 被实现体现的是：”like a”的关系(能不能，具不具有)。扩展功能

# 六、接口练习

## 1、猫狗案例,加入跳高的额外功能

## 2、老师和学生案例,加入抽烟的额外功能

## 3、教练和运动员案例
- 乒乓球运动员和篮球运动员。
- 乒乓球教练和篮球教练。
- 为了出国交流，跟乒乓球相关的人员都需要学习英语。
- 请用所学知识：
- 分析，这个案例中有哪些抽象类，哪些接口，哪些具体类。

# 七、接口思想

## 1、实现软件模块间的连接方面有着巨大优势。

## 2、调用者和被调用者只需要各自遵循接口标准，而无需各自了解对方具体的实现过程，更好的实现扩展性和低耦合性。

## 3、USB接口案例
- 主板，各类USB设备（U盘，手机，移动硬盘）

低配版本：**UsbTest.java**

```java
package com.jerry.java;

/*
	USB接口案例(版本1)
*/

// 定义一个USB接口
interface USB {
    public static final double voltage = 5.0; // 电压
    public static final double current = 0.5; // 电流

    public abstract void start(); 	// 启动
    public abstract void run(); 	// 运行
    public abstract void stop();    // 关闭
}

// 鼠标实现USB接口
class Mouse implements USB {
    public void start() {
        System.out.println("鼠标启动");
    }
    public void run() {
        System.out.println("鼠标运行");
    }
    public void stop() {
        System.out.println("鼠标关闭");
    }
}

// 键盘实现USB接口
class Keyboard implements USB {
    public void start() {
        System.out.println("键盘启动");
    }
    public void run() {
        System.out.println("键盘运行");
    }
    public void stop() {
        System.out.println("键盘关闭");
    }
}

// 摄像头实现USB接口
class Camera implements USB {
    public void start() {
        System.out.println("摄像头启动");
    }
    public void run() {
        System.out.println("摄像头运行");
    }
    public void stop() {
        System.out.println("摄像头关闭");
    }
}

// 手机实现USB接口
class Phone implements USB {
    public void start() {
        System.out.println("手机启动");
    }
    public void run() {
        System.out.println("手机运行");
    }
    public void stop() {
        System.out.println("手机关闭");
    }
}

// 主板类
class Mainboard {
    public void useUSB(USB u) {    // 接口多态
        u.start();
        u.run();
        u.stop();
    }
}

class UsbTest {
    public static void main(String[] args) {
        Mainboard mb = new Mainboard();
        Mouse m = new Mouse();
        Keyboard kb = new Keyboard();
        Camera c = new Camera();
        Phone p = new Phone();

        mb.useUSB(m);  	// 接口多态
        mb.useUSB(kb);  // 接口多态
        mb.useUSB(c);  	// 接口多态
        mb.useUSB(p);  	// 接口多态
        System.out.println("USB设备的电压是：" + USB.voltage);
        System.out.println("USB设备的电流是：" + USB.current);
    }
}
```

**编译运行结果：**

```txt
鼠标启动
鼠标运行
鼠标关闭
键盘启动
键盘运行
键盘关闭
摄像头启动
摄像头运行
摄像头关闭
手机启动
手机运行
手机关闭
USB设备的电压是：5.0
USB设备的电流是：0.5

Process finished with exit code 0
```



高配版本：**UsbTestPro.java**

```java
package com.jerry.java;

/*
	USB接口案例(版本2)
*/

// 定义一个USB接口
interface USB {
    public static final double voltage = 5.0; // 电压
    public static final double current = 0.5; // 电流

    public abstract void start(); // 启动
    public abstract void run();   // 运行
    public abstract void stop();  // 关闭
}

// 鼠标实现USB接口
class Mouse implements USB {
    public void start() {
        System.out.println("鼠标启动");
    }
    public void run() {
        System.out.println("鼠标运行");
    }
    public void stop() {
        System.out.println("鼠标关闭");
    }
}

// 键盘实现USB接口
class Keyboard implements USB {
    public void start() {
        System.out.println("键盘启动");
    }
    public void run() {
        System.out.println("键盘运行");
    }
    public void stop() {
        System.out.println("键盘关闭");
    }
}

// 摄像头实现USB接口
class Camera implements USB {
    public void start() {
        System.out.println("摄像头启动");
    }
    public void run() {
        System.out.println("摄像头运行");
    }
    public void stop() {
        System.out.println("摄像头关闭");
    }
}

// 手机实现USB接口
class Phone implements USB {
    public void start() {
        System.out.println("手机启动");
    }
    public void run() {
        System.out.println("手机运行");
    }
    public void stop() {
        System.out.println("手机关闭");
    }
}

// 主板类
class Mainboard {
    USB[] usb = new USB[4]; // 主板上创建4个USB接口

    // 添加设备
    public void addUSB(USB u) {
        for (int i = 0; i < usb.length; i++){
            if (usb[i] == null){
                usb[i] = u;
                break;   // 如果已经挂上一个接口，则退出循环，不再检测其他接口
            }
        }
    }

    // 主板启动
    public void start() {
        System.out.println("主板启动了");
        for (int i = 0; i < usb.length; i++){
            if (usb[i] != null){
                usb[i].start();
                usb[i].run();
            }
        }
    }

    // 主板关闭
    public void stop() {
        for (int i = 0; i < usb.length; i++){
            if (usb[i] != null){
                usb[i].stop();
            }
        }

        System.out.println("主板关闭了");
    }
}

class UsbTestPro {
    public static void main(String[] args) {
        Mainboard mb = new Mainboard();
        Mouse m = new Mouse();
        Keyboard kb = new Keyboard();
        Camera c = new Camera();
        Phone p = new Phone();

        mb.addUSB(m);
        mb.addUSB(kb);
        mb.addUSB(c);
        mb.addUSB(p);

        mb.start();
        mb.stop();
    }
}
```

**编译运行结果：**

```txt
主板启动了
鼠标启动
鼠标运行
键盘启动
键盘运行
摄像头启动
摄像头运行
手机启动
手机运行
鼠标关闭
键盘关闭
摄像头关闭
手机关闭
主板关闭了

Process finished with exit code 0
```

# 八、案例

InterfaceDemo1.java

```java
/*
	接口的特点：
		A:接口用关键字interface表示	
			interface 接口名 {}
		B:类实现接口用implements表示
			class 类名 implements 接口名 {}
		C:接口本身不能实例化，但可以按照多态的方式实例化
		D:接口的子类
			a:抽象类
			b:具体类，重写接口中的所有抽象方法	
*/

// 定义动物培训接口
interface AnimalTrain {
	public abstract void jump();
}

// 抽象类实现接口
abstract class Dog implements AnimalTrain {
}

// 具体类实现接口
class Cat implements AnimalTrain {
	public void jump() {
		System.out.println("猫可以跳高了");
	}
}

class InterfaceDemo1 {
	public static void main(String[] args) {
		// AnimalTrain无法实例化
		// AnimalTrain at = new AnimalTrain();
		// at.jump();
		
		AnimalTrain at = new Cat();
		at.jump();
	}
}
```



InterfaceDemo2.java

```java
/*
	接口成员特点
		成员变量；只能是常量，并且是静态的。
				默认修饰符：public static final
				建议：手动给出。
		构造方法：接口没有构造方法。
		成员方法：只能是抽象方法。
				默认修饰符：public abstract
				建议：手动给出。	
*/

interface Inter {
	public int num = 10;
	public final int num2 = 20;
	public static final int num3 = 30;
	
	// 错误: 接口没有构造方法
	// public Inter() {}
	
	// 接口的方法没有方法体
	// public void show() {}

	// abstract void show(); //默认public
	public void show(); //默认abstract
}

class InterImpl extends Object implements Inter {
	public InterImpl() {
		super();
	}
	
	public void show() {}
}

// 测试类
class InterfaceDemo2 {
	public static void main(String[] args) {
		// 接口多态
		Inter i = new InterImpl();
		System.out.println(i.num);
		System.out.println(i.num2);
		//i.num = 100;
		//i.num2 = 200;
		//System.out.println(i.num); //无法为最终变量num分配值
		//System.out.println(i.num2);//无法为最终变量num2分配值
		System.out.println(Inter.num);
		System.out.println(Inter.num2);
		System.out.println("--------------");
	}
}

/*结果：
10
20
10
20
*/
```



InterfaceDemo3.java

```java
/*
	类与类：
		继承关系,只能单继承,可以多层继承。
	类与接口：
		实现关系,可以单实现,也可以多实现。
		还可以在继承一个类的同时实现多个接口。
	接口与接口：
		继承关系,可以单继承,也可以多继承。
*/

interface Father {
	public abstract void show();
}

interface Mother {
	public abstract void show2();
}

// 接口多继承
interface Sister extends Father, Mother {

}

// class Son implements Father,Mother // 多实现
class Son extends Object implements Father, Mother {
	public void show() {
		System.out.println("show son");
	}
	
	public void show2() {
		System.out.println("show2 son");
	}
}

class InterfaceDemo3 {
	public static void main(String[] args) {
		// 接口多态
		Father f = new Son();
		f.show();
		// f.show2(); // 报错
	
		Mother m = new Son();
		// m.show(); // 报错
		m.show2();
	}
}

/*结果：
show son
show2 son
*/
```



InterfaceTest1.java

```java
/*
	猫狗案例,加入跳高的额外功能
*/

// 跳高接口
interface Jumpping {
	public abstract void jump();
}

// 动物类（抽象类）
abstract class Animal {
	private String name;
	private int age;
	
	public Animal() {}
	
	public Animal(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	// 抽象方法;
	public abstract void eat();
	
	// 非抽象方法
	public void sleep() {
		System.out.println("动物都要休息");
	}
}

// 猫类（具体类）
class Cat extends Animal {
	public Cat() {}
	
	public Cat(String name, int age) {
		super(name, age);
	}
	
	public void eat() {
		System.out.println("猫吃鱼");
	}
}

// 狗类（具体类）
class Dog extends Animal {
	public Dog() {}
	
	public Dog(String name, int age) {
		super(name, age);
	}
	
	public void eat() {
		System.out.println("狗吃肉");
	}
}

// 跳高猫类（具体类）
class JumpCat extends Cat implements Jumpping {
	public JumpCat() {}
	
	public JumpCat(String name, int age) {
		super(name, age);
	}

	public void jump() {
		System.out.println("跳高猫");
	}
}

// 跳高狗类（具体类）
class JumpDog extends Dog implements Jumpping {
	public JumpDog() {}
	
	public JumpDog(String name, int age) {
		super(name, age);
	}

	public void jump() {
		System.out.println("跳高狗");
	}
}

class InterfaceTest {
	public static void main(String[] args) {
		// 跳高猫测试		
		JumpCat jc = new JumpCat("abc", 2);
		System.out.println(jc.getName() + "---" + jc.getAge());
		jc.eat();
		jc.sleep();
		jc.jump();

		// 普通多态
		Cat c1 = new JumpCat();
		c1.eat();
		c1.sleep();
		// c1.jump(); // 报错

		// 抽象类多态
		Animal a1 = new JumpCat();
		a1.eat();
		a1.sleep();
		// a1.jump(); // 报错

		// 接口多态
		Jumpping j1 = new JumpCat();
		// j1.eat(); // 报错
		// j1.sleep(); // 报错
		j1.jump(); 

		
		// 跳高狗测试
	}
}
```



InterfaceTest2.java

```java
/*
	老师和学生案例,加入抽烟的额外功能	
*/

// 抽烟接口
interface Smoking {
	public abstract void smoke();
}

// 人类（抽象类）
abstract class Person {
	private String name;
	private int age;
	
	public Person() {}
	
	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	// 抽象方法
	public abstract void eat();
	
	// 非抽象方法
	public void sleep() {
		System.out.println("人都要休息");
	}
}

// 教师类（具体类）
class Teacher extends Person {
	public Teacher() {}
	
	public Teacher(String name, int age) {
		super(name, age);
	}
	
	public void eat() {
		System.out.println("吃白菜");
	}
}

// 学生类（具体类）
class Student extends Person {
	public Student() {}
	
	public Student(String name, int age) {
		super(name, age);
	}
	
	public void eat() {
		System.out.println("吃红烧肉");
	}
}

// 抽烟教师类（具体类）
class SmokingTeacher extends Teacher implements Smoking {
	public SmokingTeacher() {}
	
	public SmokingTeacher(String name, int age) {
		super(name, age);
	}

	public void smoke() {
		System.out.println("抽烟的老师");
	}
}

// 抽烟学生类（具体类）
class SmokingStudent extends Student implements Smoking {
	public SmokingStudent() {}
	
	public SmokingStudent(String name, int age) {
		super(name, age);
	}

	public void smoke() {
		System.out.println("抽烟的学生");
	}
}

class InterfaceTest2 {
	public static void main(String[] args) {
		// 正常调用
		SmokingStudent s1 =  new SmokingStudent();
		s1.eat();
		s1.sleep();
		s1.smoke();
		System.out.println("-------------------");

		// 普通多态
		Student s2 = new SmokingStudent();
		s1.eat(); 
		s1.sleep();
		// s1.smoke(); // 报错
		System.out.println("-------------------");

		// 抽象类多态
		Person p1 = new SmokingStudent();
		p1.eat(); 
		p1.sleep();
		// p1.smoke(); // 报错
		System.out.println("-------------------");

		// 接口多态
		Smoking s3 = new SmokingStudent();
		// p1.eat();  // 报错
		// p1.sleep(); // 报错
		s3.smoke(); 
		System.out.println("-------------------");
		
		
		// 教师测试
	}
}


/*结果：
吃红烧肉
人都要休息
抽烟的学生
-------------------
吃红烧肉
人都要休息
-------------------
吃红烧肉
人都要休息
-------------------
抽烟的学生
-------------------
*/
```



InterfaceTest3.java

```java
/*
	教练和运动员案例
		乒乓球运动员和篮球运动员。
		乒乓球教练和篮球教练。
		为了出国交流，跟乒乓球相关的人员都需要学习英语。
		请用所学知识：
		分析，这个案例中有哪些抽象类，哪些接口，哪些具体类。	
*/

// 讲英语接口
interface SpeakEnglish {	
	public abstract void speak();
}

// 人类（抽象类）
abstract class Person {
	private String name;
	private int age;
	
	public Person() {}
	
	public Person(String name,int age) {
		this.name = name;
		this.age = age;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	// 非抽象方法
	public void sleep() {
		System.out.println("人都是要睡觉的");
	}
	
	// 抽象方法
	public abstract void eat();
}

//运动员类（抽象类）
abstract class Player extends Person {
	public Player() {}
	
	public Player(String name, int age) {
		super(name, age);
	}
	
	// 抽象方法
	public abstract void study();
}

// 教练员类（抽象类）
abstract class Coach extends Person {
	public Coach() {}
	
	public Coach(String name,int age) {
		super(name,age);
	}
	
	// 抽象方法
	public abstract void teach();
}

// 乒乓球运动员类（具体类）
class PingPangPlayer extends Player implements SpeakEnglish {
	public PingPangPlayer() {}
	
	public PingPangPlayer(String name, int age) {
		super(name, age);
	}	
	
	public void eat() {
		System.out.println("乒乓球运动员三菜一汤");
	}	
	
	public void study() {
		System.out.println("乒乓球运动员学习如何发球和接球");
	}	

	public void speak() {
		System.out.println("乒乓球运动员讲英语");
	}
}

// 篮球运动员类（具体类）
class BasketballPlayer extends Player {
	public BasketballPlayer() {}
	
	public BasketballPlayer(String name, int age) {
		super(name, age);
	}	

	public void eat() {
		System.out.println("篮球运动员四菜两汤");
	}
	
	public void study() {
		System.out.println("篮球运动员学习如何运球和投篮");
	}
}

// 乒乓球教练类（具体类）
class PingPangCoach extends Coach implements SpeakEnglish {
	public PingPangCoach() {}
	
	public PingPangCoach(String name,int age) {
		super(name,age);
	}	

	public void eat() {
		System.out.println("乒乓球教练三菜一汤");
	}	

	public void teach() {
		System.out.println("乒乓球教练教如何发球和接球");
	}	

	public void speak() {
		System.out.println("乒乓球教练讲英语");
	}
}

// 篮球教练类（具体类）
class BasketballCoach extends Coach {
	public BasketballCoach() {}
	
	public BasketballCoach(String name, int age) {
		super(name, age);
	}	

	public void eat() {
		System.out.println("篮球教练四菜两汤");
	}	

	public void teach() {
		System.out.println("篮球教练教如何运球和投篮");
	}
}

class InterfaceTest3 {
	public static void main(String[] args) {		
		// 乒乓球运动员测试自己完成
		
		// 篮球运动员测试自己完成		
	}
}
```

# 九、接口的意义

