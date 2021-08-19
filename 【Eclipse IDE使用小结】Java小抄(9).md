# 【Eclipse IDE使用小结】Java小抄(9)

> 原创内容，转载请注明出处！

# 一、Java 开发常见工具介绍

- A：操作系统自带的记事本软件

- B：高级记事本软件（VSCode、Sublime Test3、Notepad++、Editplus……）

- C：集成开发环境 IDE（Integrated Development Environment）
  - 这种软件是用于程序开发环境的应用程序，一般包括代码编辑器，编译器，调试器和图形界面工具
  - 集成了代码编写功能，分析功能，编译功能，调试功能，集成等一体化的开发软件

# 二、Eclipse概述

- Eclipse是一种可扩展的开放源代码的IDE。

- Eclipse的特点描述
  - 免费
  - 纯Java语言编写
  - 免安装
  - 扩展性强

- MyEclipse
  - 在Eclipse基础上追加的功能性插件，对插件收费
  - 在Web开发中提供强大的系统架构平台

# 三、Eclipse的下载，安装及卸载

- 下载 http://eclipse.org/

- 安装
  - 压缩版	解压就可以使用(eclipse.exe)
  - 安装版   双击运行,一路next即可(JDK)

- 卸载
  - 压缩版 直接删除文件夹即可
  - 安装版 专业卸载软件或者控制面板添加删除程序

# 四、Eclipse的基本使用

- 选择工作空间
  - 工作空间  其实就是我们写的源代码所在的目录（不选择会默认指定为eclipse-workspace）

- 用Eclipse来完成一个HelloWorld案例
  - 代码以项目为基本单位
  - 创建项目
  - 创建包
  - 创建类
  - 编写代码

- 如何配置编译和运行环境
  - Window->preferences->java->compiler编译环境设置
  - Window->preferences->java->Installed JREs编译环境设置
  - JDK与JRE版本最好一致（优选1.8）

- 编译
  - 自动编译，在保存的那一刻帮你做好了（自动语法检查的前提）

- 运行
  - 点击虫子后面的绿色内在三角形按钮
  - 点击Run菜单下的run，也可以使用快捷键Ctrl+F11
  - 选择要运行的文件或者在要运行的文件内容中
    - 右键 -- Run as - Java Application即可
  - 看到Console即可，它就是Eclipse自带的控制台

- 源代码语法检查
  - 红色波浪线（报错，必须解决）
  - 黄色波浪线（警告，隐患提示）

# 五、Eclipse主题设置

- 自带主题
  - Windows——>Preferences——>General——>Appearance——>Theme
- 导入主题
  - File——>Import——>General——>Preferences——>导入.epf——>Finish

# 六、Eclipse组成之视窗与视图

- 视窗  每一个基本的窗体被称为视窗
  - PackageExplorer  显示项目结构，包，类，及资源
  - Outline   显示类的结构，方便查找，识别，修改
  - Console  程序运行的结果在该窗口显示
  - Problems 显示所有语法及错误所在的位置
  - Hierarchy 显示Java继承层次结构，选中类后F4

- 视图  是由某些视窗的组合而成的。举例
  - Java视图
  - Debug视图
  - Eclipse右上角可以点击按钮切换

# 七、代码风格设置

- 花括号偏好设置
  - Windows—preference—java—codestyle—formatter
    - 新建一个Active profile
    - Braces选项卡中选择next line

# 八、Eclipse中工作空间的基本配置

- 程序的编译和运行的环境配置
- 如何去掉默认注释
- 行号的显示和隐藏
- 字体大小及颜色
- 窗体布局重置
- 控制台显示
- 均位于Window——>Preferences内设置

# 九、程序的编译和运行的环境配置

- window -- Preferences -- Java
  - 编译环境：Compiler默认
  - 认选中的就是最高版本
  - 运行环境：Installed JREs默认会找你安装的那个JDK，建议配置了Java的环境变量
    - 低编译，高运行，可以
    - 高编译，低运行，不可以
  - 建议，编译和运行的版本一致

# 十、字体大小及颜色

- Java代码区域的字体大小和颜色：
  - window -- Preferences -- General -- Appearance -- Colors And Fonts -- Java修改 -- Java Edit Text Font

- 控制台
  - window -- Preferences -- General -- Appearance -- Colors And Fonts -- Debug -- Console font

- 其他文件
  - window -- Preferences -- General -- Appearance -- Colors And Fonts -- Basic -- Text Font

# 十一、窗体设置

- 行号的显示和隐藏
  - 显示：在代码区域的最左边的空白区域，右键 -- Show Line Numbers即可
  - 隐藏：把上面的动作再做一次

- 窗体布局重置
  - Window -- Reset Perspective	

- 控制台显示
  - Window--Show View—Console

# 十二、Eclipse中快捷键的使用

- 内容辅助键
  - Alt+/ 起提示作用
  - main+alt+/,syso+alt+/,给出其他提示

- 常用快捷键
  - 删除行 ctrl+d
  - 格式化  ctrl+shift+f
  - 导入包  ctrl+shift+o 
  - 注释  ctrl+/,ctrl+shift+/,ctrl+shift+\
  - 代码上下移动 选中代码alt+上/下箭头
  - 查看源码  选中类名(F3或者Ctrl+鼠标点击)

# 十三、注释

- 单行注释：
  - 选中需要被注释的内容：ctrl+/
  - 想取消注释，再次选中，然后ctrl+/

- 多行注释：
  - 选中需要被注释的内容：ctrl+shift+/	
  - 想取消注释，再次选中，然后ctrl+shift+\

# 十四、导包

- 导入方式：
  - 手动写完代码，需要导入包：ctrl+shift+o
  - 通过alt+/提示的类，会自动把包导入

- 有些类在多个包下都有
  - 按了提示后，会把所有的包给出显示，让用户选择

# 十五、自动生成方法

- 自动生成构造方法
  - 无参构造方法 在代码区域右键--source--Generate Constructors from Superclass. (Alt + Shift + S + C)
  - 带参构造方法 在代码区域右键--source--Generate Constructors using fields. (Alt + Shift + S + O)

- 自动生成get/set方法
  - 在代码区域右键--source--Generate Getters and Setters. (Alt + Shift + S + R)

# 十六、继承抽象类和实现接口

- 以前先写类，然后在类中在去继承类或者实现接口

- 现在在创建类的时候，选择要继承的类或者实现的接口

- Object是所有类的父类，所有类都直接或者间接的继承自Object

# 十七、Eclipse中打jar包并使用jar包

- jar是什么?
  - jar是多个class文件的压缩包

- jar有什么用?
  - 用别人写好的东西，直接拿过来使用
  - 代码封装实现代码匿藏（只提供.class文件，无.java文件）

- 打jar包
  - 选中项目--右键--Export--Java--Jar--自己指定一个路径和一个名称.jar--Finish

- 使用jar包
  - 复制jar包，粘贴到要使用的项目路径下（先点击项目名——>然后右键：选择paste粘贴）
  - 选中jar包，右键Build path -- add to build path

# 十八、Eclipse中如何删除项目和导入项目

- 删除项目
  - 选中项目 – 右键 – 删除
    - 从项目区域中删除
    - 从硬盘上删除

- 导入项目
  - 在项目区域右键找到import
  - 找到General，展开，并找到
    - Existing Projects into Workspace
  - 点击next,然后选择你要导入的项目
    - 注意：这里选择的是项目名称

# 十九、Eclipse中几个常见小问题

- 如何查看项目所在路径
  
- 选中 -- 右键 -- Properties -- Resource -- Location
  
- 导入项目要注意的问题
  - 项目区域中不可能出现同名的项目(新建或者导入)
  - 自己随意建立的文件夹是不能作为项目导入的

- 修改项目问题
  - 不要随意修改项目名称
  - 如果真要修改，不要忘记了配置文件.project中的
    - \<name>把这里改为你改后的名称\</name>
  

# 二十、Eclipse中代码的高级(Debug)调试

- Debug的作用
  - 调试程序
  - 查看程序执行流程

- 如何查看程序执行流程
  - 什么是断点（就是一个标记，表示从哪里开始看程序）
  - 如何设置断点（在语句的最左边，双击即可）
  - 在哪里设置断点（哪里不会加哪里）
  - 能设置几个断点（没有限制，但建议5个以内）
  - 如何运行设置断点后的程序（在代码区域--右键--Debug as--Java Appliaction）
  - 看哪些地方
    - 看源代码：对照看程序的执行步骤
      - step into, step over, step return的区别
        - step into就是单步执行，遇到子函数就进入并且继续单步执行（F5）
        - step over是在单步执行时，在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完再停止，也就是把子函数整个作为一步（F6）
        - step return就是单步执行到子函数内时，用step return就可以执行完子函数余下部分，并返回到上一层函数（F7）
        - step into：进入子函数
        - step over：越过子函数，但子函数会执行
        - step return：跳出子函数 
    - 看Debug界面：对照看程序的执行步骤，特别关注其中的线程！
    - 看Variables界面：看变量的产生、赋值、变化、及消失
  
- 如何去除断点（a:把添加的动作再做一遍   b:Breakpoints界面点击双叉一键清除）
