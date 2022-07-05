# JUnit

> JUnit 是一个 Java 编程语言的单元测试框架。JUnit 在测试驱动的开发方面有很重要的发展，是起源于 JUnit 的一个统称为 xUnit 的单元测试框架之一。 
>
> JUnit 促进了“先测试后编码”的理念，强调建立测试数据的一段代码，可以先测试，然后再应用。这个方法就好比“测试一点，编码一点，测试一点，编码一点……”，增加了程序员的产量和程序的稳定性，可以减少程序员的压力和花费在排错上的时间。

## 测试分类

1. 黑盒测试：不需要写代码，输入值后看程序是否能够输出期望的值。
2. 白盒测试：需要写代码测试，关注程序具体的执行流程。

<img src="mark-img/61.jpg" alt="61" style="zoom:50%;" />

> 单元测试属于白盒测试，JUnit 就是一个单元测试的 Java 框架。

## JUnit的基本使用

### 一、使用步骤

1. 导入 JUnit 依赖环境

   [Download and Install · junit-team/junit4 Wiki (github.com)](https://github.com/junit-team/junit4/wiki/Download-and-Install)

2. 定义一个测试类（测试用例）

   ```
   建议：
   1、测试包名：xxx.xxx.xxx.test
   	例如：cn.itcast.test
   2、测试类名：被测试的类名Test
   	例如：CalculatorTest
   ```

3. 定义测试的方法（可以独立运行）

   ```
   建议：
   1、方法名：test测试的方法名
   	例如：testAdd()
   2、返回值：void
   3、参数列表：空参
   ```

4. 给测试方法加上 `@Test` 注解

【举例】

导入 JUnit 依赖环境。

- `junit-4.13.2.jar`
- `hamcrest-core-1.3.jar`

> 注意：由于 JUnit 是基于 Hamcrest 这个测试框架，所以引入 `junit-4.13.2.jar` 的同时也要引入 `hamcrest-core-1.3.jar`。

在项目中创建 `lib` 目录，同时将 `junit-4.13.2.jar`、`hamcrest-core-1.3.jar` 放入其中，并将 `lib` 目录添加为库。

> 对于 IDEA 来说，可以直接在 `@Test` 注解上直接点击下载引入。

![Snipaste_2022-07-05_15-46-10](mark-img/Snipaste_2022-07-05_15-46-10.png)

![image-20220705154656676](mark-img/image-20220705154656676.png)

JUnit 引入后，便可编写单元测试代码进行测试。

![image-20220705155227113](mark-img/image-20220705155227113.png)

### 二、判定结果

- 红色：失败
- 绿色：成功

> 一般我们会使用断言操作来处理结果：
>
> `Assert.assertEquals(期望的结果, 运算的结果);`
>
> - 成功举例：
>
> `Assert.assertEquals(4, result);`
>
> ![image-20220705160123799](mark-img/image-20220705160123799.png)
>
> - 失败举例：
>
> `Assert.assertEquals(2, result);`
>
> ![image-20220705160310705](mark-img/image-20220705160310705.png)

### 三、补充

- `@Before`：修饰的方法会在测试方法执行之前被自动执行。
  - 可以解决测试代码开始前的重复性操作，比如：申请某资源
- `@After`：修饰的方法会在测试方法执行之后自动被执行。
  - 可以解决测试代码结束后的重复性操作，比如：释放某资源

```java
package cn.jerry.test;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    /**
     * 初始化方法
     */
    @Before
    public void init() {
        System.out.println("init...");
    }

    /**
     * 结束后方法
     */
    @After
    public void close() {
        System.out.println("close...");
    }

    /**
     * 测试方法
     */
    @Test
    public void test() {
        System.out.println("test...");
    }
}
```

`test()` 测试方法执行结果：

```
init...
test...
close...
```

