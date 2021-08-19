# 【Java多态机制案例详解】Java小抄(6)

> 原创内容，转载请注明出处！


# 一、多态概述

## 1、多态概述

- 某一个事物，在不同时刻表现出来的不同状态

- 举例：

  - 猫可以是猫的类型，猫 m = new 猫();
  - 同时猫也是动物的一种，也可以把猫称为动物，动物 d = new 猫();


## 2、多态前提和体现

  - 有继承关系	
  - 有方法重写
  - 有父类引用指向子类对象

# 二、多态案例及成员访问特点

## 1、多态案例

- 按照前提写一个多态的案例

## 2、成员访问特点

- 成员变量
  - 编译看左边，运行看左边
- 成员方法（多态的体现）
  - 编译看左边，运行看右边
- 静态方法
  - 编译看左边，运行看左边
  - 所以静态方法不能算方法的重写

## 3、成员方法访问顺序

- 先看父类有没有该方法？
  - 如果父类有，则看子类有没有该方法
    - 子类也有，则执行子类的方法
    - 子类没有，则执行父类的方法
  - 如果父类没有，无论子类有没有都报错！（因为：违背了多态的原则）


# 三、多态的好处和弊端

## 1、多态的好处(案例演示)

- 提高了程序的维护性(由继承保证)
- 提高了程序的扩展性(由多态保证)

## 2、多态的弊端

- 不能访问子类特有功能
- 那么我们如何才能访问子类的特有功能呢?
  - 多态中的转型


# 四、多态中的转型问题

## 1、向上转型

- 从子到父
- 父类引用指向子类对象


## 2、向下转型

- 从父到子
- 父类引用转为子类对象

# 五、抽象类概述

## 1、抽象类概述
- 猫狗案例中，提取出了一个动物类。并且我们在前面也创建过了动物对象，其实这是不对的。动物本身并不是一个具体的事物，而是一个抽象的事物。只有真正的猫，狗才是具体的动物。同理，我们也可以推想，不同的动物吃的东西应该是不一样的，所以，我们不应该在动物类中给出具体体现，而是应该给出一个声明即可

# 六、抽象类特点

## 1、抽象类特点
- 抽象类和抽象方法必须用abstract关键字修饰
   - 格式
   - abstract class 类名 {}
   - public abstract void eat();    //注意：没有{}
- 抽象类不一定有抽象方法，有抽象方法的类一定是抽象类
- 抽象类不能实例化
   - 那么，抽象类如何实例化呢?
   - 按照多态的方式，由具体的子类实例化。其实这也是多态的一种，抽象类多态
- 抽象类的子类
   - 要么是抽象类
   - 要么为普通类，但必须重写抽象类中的所有抽象方法

# 七、抽象类的成员特点

## 1、成员变量
- 可以是变量
- 也可以是常量


## 2、构造方法
- 有构造方法，但是不能实例化
- 那么，构造方法的作用是什么呢?
   - 用于子类访问父类数据的初始化


## 3、成员方法
- 可以有抽象方法 限定子类必须完成某些动作
- 也可以有非抽象方法 提高代码复用性

# 八、抽象类练习

## 1、猫狗案例
- 具体事物：猫，狗
- 共性：姓名，年龄，吃饭

## 2、学生案例
- 具体事务：基础班学员，高级班学员
- 共性：姓名，年龄，班级，学习，吃饭

# 九、抽象类的几个问题

## 1、一个类如果没有抽象方法，可不可以定义为抽象类?如果可以，有什么意义?
## 2、abstract不能和哪些关键字共存
- private	冲突
- final	冲突	
- static	冲突无意义

# 十、案例

DuoTaiTest1.java

```java
/*
	看程序写结果:先判断有没有问题，如果没有，写出结果
*/
class Fu {
	public void show() {
		System.out.println("fu show");
	}
}

class Zi extends Fu {
	public void show() {
		System.out.println("zi show");
	}

	public void method() {
		System.out.println("zi method");
	}
}

class DuoTaiTest1 {
	public static void main(String[] args) {
		Fu f = new Zi();		
		f.method(); // 报错，找不到符号
		f.show();
	}
}
```



DuoTaiTest2.java

```java
/*
	看程序写结果:先判断有没有问题，如果没有，写出结果	
*/

class A {
	public void show() {
		show2();
	}
    
	public void show2() {
		System.out.println("楚雄");
	}
    //如果把A中的show2()注释了，便会报错，因为a.show()会调用show2()，此时已然是多态的执行原则，会先看A里是否有show2()
}

class B extends A {
	/*
	public void show() {
		show2();
	}
	*/
    //注意：B是有show()方法的！因为B继承了A

	public void show2() {
		System.out.println("师范");
	}
}

class C extends B {
	public void show() {
		super.show();
	}
    
	public void show2() {
		System.out.println("学院");
	}
}

public class DuoTaiTest2 {
	public static void main(String[] args) {
		A a = new B();
		a.show();
		
		B b = new C();
		b.show();
	}
}

/*结果：
师范
学院
*/
```



DuoTaiDemo.java

```java
/*			
	多态的前提：
		A:有继承关系。
		B:有方法重写。			
		C:有父类引用指向子类对象。
			父 f =  new 子();	
	
	多态中的成员访问特点：
		A:成员变量
			编译看左边，运行看左边。		
		B:成员方法
			编译看左边，运行看右边。
		C:静态方法
			编译看左边，运行看左边。
			(静态和类相关，不能算重写，因此，运行还是看左边)		
*/
class Fu {
	public int num = 100;

	public void show() {
		System.out.println("show Fu");
	}
	
	public static void function() {
		System.out.println("function Fu");
	}
}

class Zi extends Fu {
	public int num = 1000;
	public int num2 = 200;

	public void show() {
		System.out.println("show Zi");
	}
	
	public void method() {
		System.out.println("method zi");
	}
	
	public static void function() {
		System.out.println("function Zi");
	}
}

class DuoTaiDemo {
	public static void main(String[] args) {
		//有父类引用指向子类对象。
		//父 f =  new 子();
		Fu f = new Zi();
		System.out.println(f.num);
		//找不到符号
		//System.out.println(f.num2);
		
		f.show();
		//找不到符号
		//f.method();
		f.function();
	}
}

/*结果：
100
show Zi
function Fu
*/
```



DuoTaiDemo2.java

```java
/*
	多态的好处：提高了代码的扩展性
*/
class Animal {
	public void eat() {
		System.out.println("eat");
	}
	
	public void sleep() {
		System.out.println("sleep");
	}
}

class Dog extends Animal {
	public void eat(){
		System.out.println("狗吃肉");
	}
	
	public void sleep() {
		System.out.println("狗站着睡觉");
	}
}

class Cat extends Animal {
	public void eat() {
		System.out.println("猫吃鱼");
	}
	
	public void sleep() {
		System.out.println("猫趴着睡觉");
	}
}

class Pig extends Animal {
	public void eat() {
		System.out.println("猪吃白菜");
	}
	
	public void sleep() {
		System.out.println("猪侧着睡");
	}
}

//针对动物操作的工具类，无论增加多少种动物，useAnimal方法的代码均不用修改，可以自适应（扩展性）
class AnimalTool {
	private AnimalTool() {}
	
	public static void useAnimal(Animal a) {
		a.eat();
		a.sleep();
	}	
}

class DuoTaiDemo2 {
	public static void main(String[] args) {		
		Cat c = new Cat();
		Cat c2 = new Cat();
		Cat c3 = new Cat();		
		AnimalTool.useAnimal(c);
		AnimalTool.useAnimal(c2);
		AnimalTool.useAnimal(c3);
		System.out.println("--------------");
		
	
		Dog d = new Dog();
		Dog d2 = new Dog();
		Dog d3 = new Dog();		
		AnimalTool.useAnimal(d);
		AnimalTool.useAnimal(d2);
		AnimalTool.useAnimal(d3);
		System.out.println("--------------");
		
		
		Pig p = new Pig();
		Pig p2 = new Pig();
		Pig p3 = new Pig();		
		AnimalTool.useAnimal(p);
		AnimalTool.useAnimal(p2);
		AnimalTool.useAnimal(p3);
		System.out.println("--------------");		
	}
}

/*结果：
猫吃鱼
猫趴着睡觉
猫吃鱼
猫趴着睡觉
猫吃鱼
猫趴着睡觉
--------------
狗吃肉
狗站着睡觉
狗吃肉
狗站着睡觉
狗吃肉
狗站着睡觉
--------------
猪吃白菜
猪侧着睡
猪吃白菜
猪侧着睡
猪吃白菜
猪侧着睡
--------------
*/
```



DuoTaiDemo3.java

```java
/*
	多态的弊端：不能使用子类的特有功能。
*/
class Fu {
	public void show() {
		System.out.println("show fu");
	}
}

class Zi extends Fu {
	public void show() {
		System.out.println("show zi");
	}
	
	public void method() {
		System.out.println("method zi");
	}
}

class DuoTaiDemo3 {
	public static void main(String[] args) {	
		Fu f = new Zi();
		f.show();
		f.method(); // 报错，不能使用子类特有的功能
	}
}
```



DuoTaiDemo4.java

```java
/*
	多态中想使用子类的特有功能怎么办？
		A:创建子类对象调用方法即可。(可以，但是不恰当，而且创建对象会浪费内存空间)
		B:把父类的引用强制转换为子类的引用。(向下转型)
		
	对象间的转型问题：
		向上转型：
			Fu f = new Zi();
		向下转型：
			Zi z = (Zi)f; //要求该f必须是能够转换为Zi的。
*/
class Fu {
	public void show() {
		System.out.println("show fu");
	}
}

class Zi extends Fu {
	public void show() {
		System.out.println("show zi");
	}
	
	public void method() {
		System.out.println("method zi");
	}

}

class DuoTaiDemo4 {
	public static void main(String[] args) {	
		Fu f = new Zi();
		f.show();
		//f.method();
		
		//创建子类对象
		//Zi z = new Zi();
		//z.show();
		//z.method();		
		
		Zi z = (Zi)f; // 向下转型
		z.show();
		z.method();
	}
}

/*结果：
show zi
show zi
method zi
*/
```



DuoTaiDemo5.java

```java
/*
	ClassCastException:类型转换异常	
*/
class Animal {
	public void eat() {}
}

class Dog extends Animal {
	public void eat() {}
	
	public void lookDoor() {	
	}
}

class Cat extends Animal {
	public void eat() {	
	}
	
	public void playGame() {		
	}
}

class DuoTaiDemo5 {
	public static void main(String[] args) {
		
		Animal a = new Dog();
		Dog d = (Dog)a;  // 正确转型		
		
		a = new Cat();
		Cat c = (Cat)a; // 正确转型
		
		//a的本质是猫类对象，不能转为狗类的引用
		Dog dd = (Dog)a; //ClassCastException
	}
}
```



PolymorphicDemo1.java

```java
/*
	   A
	   |
	   B
	  / \
	 C   D

	1. a1.show(b), A类中有两个show方法，但是都不能完全匹配，寻找父类引用为参数的方法，因此，只能调用public String show(A obj)，输出"AA"
	2. a1.show(c), A类中有两个show方法，但是都不能完全匹配，寻找父类引用为参数的方法，因此，只能调用public String show(A obj)，输出"AA"
	3. a1.show(d), A类中有两个show方法，public String show(D obj)可以完全匹配，因此，输出"AD"
	4. a2.show(b), 共有A类的public String show(D obj)、public String show(A obj)和B类的public String show(A obj)三个方法可供调用，
	   根据多态原则，优先考虑B类中的public String show(A obj)方法，但该方法不能完全匹配。接下来，在父类中寻找是否有完全匹配的方法，但父类中的两个方法也不能完全匹配。
	   最后，再次到B类中寻找是否有次优匹配的方法，B类中的public String show(A obj)方法可以实现次优匹配，因此，输出"BA"
	   (调用顺序：先看本类中有无完全匹配的方法；如果没有，再到父类中看有无完全匹配的方法；如果没有，再次回到本类中看有无次优匹配的方法；如果没有，最后再到父类中看有无次优匹配的方法。)
	5. 和4保持一致
	6. a2.show(d), 共有A类的public String show(D obj)、public String show(A obj)和B类的public String show(A obj)三个方法可供使用，
		根据多态原则，优先考虑B类中的public String show(A obj)方法，但该方法不能完全匹配。接下来，在父类中寻找是否有完全匹配的方法，父类中的public String show(D obj)方法可以完全匹配，输出"AD"
	 
	8. 注意次优匹配中的优先级，最近原则
 */

class A {
    public String show(D obj) {
        return ("A and D");
    }
    public String show(A obj) {
        return ("A and A");
    } 
}
class B extends A {
    public String show(B obj) {    // 该方法在A类中找不到相同的声明，因此不算重写，是一个新的方法
        return ("B and B");
    }    
    public String show(A obj) {    // 该方法重写了A类的public String show(A obj)
        return ("B and A");
    } 
}
class C extends B {
}
class D extends B {
}
class PolymorphicDemo1 {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new B();
        B b = new B();
        C c = new C();
        D d = new D();        
        System.out.println("1--" + a1.show(b)); // A and A
        System.out.println("2--" + a1.show(c)); // A and A
        System.out.println("3--" + a1.show(d)); // A and D
        System.out.println("4--" + a2.show(b)); // B and A 
        System.out.println("5--" + a2.show(c)); // B and A
        System.out.println("6--" + a2.show(d)); // A and D
        System.out.println("7--" + b.show(b));  // B and B
        System.out.println("8--" + b.show(c));  // B and B
        System.out.println("9--" + b.show(d));  // A and D    
    }
}

/*
结果：
1--A and A
2--A and A
3--A and D
4--B and A
5--B and A
6--A and D
7--B and B
8--B and B
9--A and D
*/
```



PolymorphicDemo2.java

```java
/*
	1. 	
	A a = new B(); 
	a.show(); 
	直接调用A类中的show()方法，首先输出"2019"，然后调用show2()方法
	由于B类重写show2()方法，根据多态原则，执行B类中的show2()方法，输出"网络"	

	2. 
	B b = new C();
	b.show();  
	B类中有一个show()方法（从A中继承），C类重写了show()方法，根据多态原则，先执行C类中的show()方法，输出"计科",
	然后执行super.show()，查找父类B中没有show()方法，再到父类中的父类A中查找show()方法，输出"2019",
	最后调用show2()方法，共有三个show2方法，根据多态原则，调用C类中的show2()方法，输出"数媒"
*/

class A {
	public void show() {
		System.out.println("2019");      
		show2();					
	}	
	public void show2() {
		System.out.println("2018");
	}
}
class B extends A {
	public void show2() {
		System.out.println("网络");  
	}	
}
class C extends B {
	public void show() {
		System.out.println("计科");		
		super.show();
	}	
	public void show2() {
		System.out.println("数媒"); 
	}
}
public class PolymorphicDemo2 {
	public static void main(String[] args) {
		A a = new B(); 
		a.show(); 

		B b = new C(); 
		b.show();  
	}
}

/*结果：
2019
网络
计科
2019
数媒
*/
```
