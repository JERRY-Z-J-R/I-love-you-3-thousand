# 【Java JDK 环境搭建】

> 原创内容，转载请注明出处！

# 一、为什么 Java JDK 要配置环境变量

**配置环境变量，可以使 `jdk 工具` 全局生效！**

当我们没有配置 jdk 的环境变量时，在 jdk/bin 目录外是运行不了 `javac.exe` (java 编译器) 和 `java.exe` (java 解释器) 的。

当然我们也可以去 jdk/bin 目录下运行 java 程序，但问题是在 bin 目录下通过启动 javac.exe 把一个 `.java` 文件编译成 `.class` 文件后，这个 `.class` 文件就直接生成在 jdk/bin 目录里了，这样的文件组织方式显然是不好的。

所以我们需要把 jdk 配置到 path 里面，这样在任何目录下（全局）都能运行 javac.exe 和 java.exe 来编译解释 java 程序了，同时也就防止了 jdk/bin 目录里存在许多的 .java 文件和 .class 文件。

# 二、环境变量全局识别的原理

当在命令行中执行的程序不存在时，Windows 系统会在本地已有的一个名为 `path` 的环境变量中查找路径列表中是否存在目标程序。

# 三、环境变量配置步骤

## 3.1 情况1

对于单纯的 Java SE 开发来说：

- 找到 jdk 安装目录，复制 `\jdk\bin` 路径
- 控制面板 ——> 系统 ——> 高级系统设置 ——> 高级 ——> 环境变量 ——>系统变量
- 找到 `path` 变量 点击编辑
- 添加 `\jdk\bin` 路径
- 逐个确定退出

## 3.2 情况2

对于 Java SE & Java EE 开发来说：

- 找到 jdk 安装目录，复制 `\jdk\bin` 路径

- 控制面板 ——> 系统 ——> 高级系统设置 ——> 高级 ——> 环境变量 ——>系统变量
- 点击 新建变量
- 变量名：`JAVA_HOME`
- 变量值：`\jdk` 路径
- 点击确定
- 找到 `path` 变量 点击编辑
- 添加 `%JAVA_HOME%\bin`
- 添加 `%JAVA_HOME%\jre\bin`
- 逐个确定退出

# 四、配置测试

- 打开 命令行
- 输入 `javac`
- 输入 `java`
- 输入 `java -version`

若以上命令成功识别，则配置成功。

# 五、解释

1. **为啥要配置 JAVA_HOME，一定要用 JAVA_HOME 命名吗？**

电脑如果装了多个版本的 jdk，我们只需要在 `JAVA_HOME` 中把需要的 jdk 目录添加进去，而不用在 path 里面加 bin 目录的路径，这样可以防止多个版本调用时的版本不确定性。

同时有些 Java 开发工具，如（Eclipse、IDEA、Tomcat）都会去扫描 JAVA_HOME 变量，看看电脑装了几个版本的 jdk，确定使用哪一个。

若不用 JAVA_HOME 这个名字当参数名，那么当这些软件需要检索 JAVA_HOME 时，就需要先去手动修改相应的配置文件，才能使用这些软件，并且即便修改后也有发生故障的可能性，何必呢？

2. **关于 CLASSPATH 变量**

path 的作用：path 是系统用来指定可执行文件的完整路径，即使不在 path 中设置 JDK 的路径也可执行 Java 文件，但必须把完整的路径写出来，如 C:\Program Files\Java\jdk1.6.0_10\bin\javac TheClass.java。path 是用来搜索所执行的可执行文件路径的，如果执行的可执行文件不在当前目录下，那就会依次搜索 path 中设置的路径；而 java 的各种操作命令是在其安装路径中的 bin 目录下，所以在 path 中设置了 JDK 的安装目录后就不用再把 java 文件的完整路径写出来了，它会自动去 path 中设置的路径中去找；

CLASSPATH 的作用：classpath 是指定你在程序中所使用的类（.class）（.jar）文件所在的位置，就如在引入一个类时：import javax.swing.JTable 这句话是告诉编译器要引入 javax.swing 这个包下的 JTable 类，而 classpath 就是告诉编译器该到哪里去找到这个类（前提是你在 classpath 中设置了这个类的路径）；如果你想要编译在当前目录下找，就加上“.”，如：`.;C:\Program Files\Java\jdk`，这样编译器就会到当前目录 `.` 和 `C:\Program Files\Java\jdk\lib` 去找 javax.swing.JTable 这个类。注意：jdk1.5 之后系统可以自动找到自带的类路径（dt.jar 和 tools.jar），而大多数人都是用 Eclipse 写程序，Eclipse 会自动配置开发者所编写的类路径，不设 classpath 也没关系，只有需要引入额外的第三方类时才需要单独配置 classpath（其实不配置 classpath，将其 .class 或者 .jar 复制到 Eclipse 项目的相应目录里也可以，因为 Eclipse 会自动配置）

path 与 CLASSPATH 的区别：path 是用来搜索所执行的可执行文件路径的，如果执行的可执行文件不在当前目录下，那就会依次搜索 path 中设置的路径。而 CLASSPATH 是用来告诉编辑器在那里寻找 Java 编译过程中所需的包和类所以其路径中配置的是 lib 目录下的 dt.jar 和 tools.jar;

3. **为什么没有配置 CLASSPATH 变量？**

jdk1.5 之后就不用再配置 `CLASSPATH` 了。当然某时为了保证向下兼容，也可以配置上为好。

**在 JDK1.5 之后的版本，配置 Java 环境变量的时候我们不再需要配置 classpath，只需要配置 JAVA_HOME 以及 path 即可！**

在 JDK1.5 以后，CLASSPATH 并不是必须配置了，在 JDK1.5 之前，是没有办法在当前目录下加载类的（找不到 JDK 目录下 lib 文件夹中的 .jar 文件），所以我们需要通过配置 CLASSPATH，但 JDK1.5 之后，JRE 能自动搜索目录下类文件，并且加载 dt.jar 和 tool.jar 的类。

rt.jar 和 tool.jar 这两种属于 java 平台自身的包就不需要添加到 CLASSPATH 中，只有一些第三方类或者自定义类需要。

# 六、无脑配置

 "系统变量" 中设置 3 项属性，JAVA_HOME、PATH、CLASSPATH（大小写无所谓），若已存在则点击 "编辑"，不存在则点击 "新建"。

> **注意：**如果使用 1.5 以上版本的 JDK，不用设置 CLASSPATH 环境变量，也可以正常编译和运行 Java 程序。

变量设置参数如下：

- 变量名：**JAVA_HOME**
  - 变量值：`C:\Program Files (x86)\Java\jdk1.8.0_91`     // 要根据自己的实际路径配置

- 变量名：**CLASSPATH**
  - 变量值：`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`     // 记得前面有个 "."（当前路径）

- 变量名：**Path**
  - 变量值：`%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`

> **注意：**在 Windows10 中，Path 变量里是分条显示的，我们需要分开添加，否则无法识别！
>
> - `%JAVA_HOME%\bin`
> - `%JAVA_HOME%\jre\bin`
