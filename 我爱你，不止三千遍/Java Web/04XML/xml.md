# XML

# 一、概念

> 目前了解即可。

XML：Extensible Markup Language 可扩展标记语言。

> 可扩展：标签都是自定义的。 
>
> 不可扩展：标签固定，如 HTML。

# 二、功能

> XML 发展历史：W3C（万维网联盟）为了解决 HTML 的诸多问题，提出了 XML 来代替 HTML，但是无奈 HTML 的地位已经根深蒂固，XML 始终未能替代 HTML，且 HTML 还发展得越来越好。后来，由于 XML 具有可扩展的性质，发现其作为配置文件的用途更方便更强大，所以便发展为了 XML 配置文件这一重要用途。同时，由于 XML 的标签+可扩展的形式使得其用于网络中的数据传输载体也很合适，所以 XML 也作为主要的网络中传输数据的载体之一。

- 功能：

  - 配置文件

  - 在网络中传输数据

* xml 与 html 的区别
	* xml 标签都是自定义的，html 标签是预定义的
	* xml 的语法严格，html 语法松散
	* xml 是存储数据的，html 是展示数据

# 三、语法

1. xml 文档的后缀名 `.xml`
2. xml 第一行必须定义为文档声明
3. xml 文档中有且仅有一个根标签
4. 属性值必须使用引号（单双都可）引起来
5. 标签必须正确关闭
6. xml 标签名称区分大小写

【快速入门】

user.xml

```xml
<?xml version='1.0' ?>

<users>
	<user id='1'>
		<name>zhangsan</name>
		<age>23</age>
		<gender>male</gender>
		<br/>
	</user>
			
	<user id='2'>
		<name>lisi</name>
		<age>24</age>
		<gender>female</gender>
	</user>
</users>
```

> 由此可见：作为配置文件 xml 比 properties 的键值对方式更优越！作为数据载体也结构非常清晰！

# 四、组成部分

1. 文档声明
    1. 格式：`<?xml 属性列表 ?>`
    2. 属性列表：
        - version：版本号，必须的属性
          - encoding：编码方式，告知解析引擎当前文档使用的字符集，默认值：ISO-8859-1
          -  standalone：是否独立
        - 取值：
          - yes：不依赖其他文件
          - no：依赖其他文件
2. 指令（了解）：结合 CSS
     - `<?xml-stylesheet type="text/css" href="a.css" ?>`
3. 标签：标签名称自定义的
    - 规则：
      - 名称可以包含字母、数字以及其他的字符 
      - 名称不能以数字或者标点符号开始 
      - 名称不能以字母 xml（或者 XML、Xml 等等）开始 
      - 名称不能包含空格 

4. 属性：

   - id 属性值唯一（要配合约束）

5. 文本：

   - CDATA 区：在该区域中的数据会被原样展示（解决特殊字符的转义麻烦问题）

     - 格式：`<![CDATA[ 数据 ]]>`

       ```xml
       <test>
           <![CDATA[
       		a < b && a > c
       	]]>
       </test>
       ```

# 五、约束

约束：规定 xml 文档的书写规则。

分类：

- DTD：一种简单的约束技术
- Schema：一种复杂的约束技术

【DTD】

引入 dtd 文档到 xml 文档中：

- 内部 dtd：将约束规则定义在 xml 文档中
- 外部 dtd：将约束的规则定义在外部的 dtd 文件中
  - 本地：`<!DOCTYPE 根标签名 SYSTEM "dtd文件的位置">`
  - 网络：`<!DOCTYPE 根标签名 PUBLIC "dtd文件名字" "dtd文件的位置URL">`

[DTD 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/dtd/dtd-tutorial.html)

【Schema】

引入：

1. 填写 xml 文档的根元素
2. 引入 xsi 前缀：`xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`
3. 引入 xsd 文件命名空间：`xsi:schemaLocation="http://www.itcast.cn/xml  student.xsd"`
4. 为每一个 xsd 约束声明一个前缀，作为标识：`xmlns="http://www.itcast.cn/xml" `

[XML Schema 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/schema/schema-tutorial.html)

# 六、解析

解析：操作 xml 文档，将文档中的数据读取到内存中。

操作 xml 文档：

1. 解析（读取）：将文档中的数据读取到内存中
2. 写入：将内存中的数据保存到 xml 文档中，持久化的存储

解析 xml 的方式：

1. DOM：将标记语言文档一次性加载进内存，在内存中形成一颗 dom 树
   - 优点：操作方便，可以对文档进行 CRUD 的所有操作
   - 缺点：占内存
2. SAX：逐行读取，基于事件驱动的
   - 优点：不占内存
   - 缺点：只能读取，不能增删改

xml 常见的解析器：

- JAXP：sun 公司提供的解析器，支持 dom 和 sax 两种思想
- DOM4J：一款非常优秀的解析器（在服务器端经常使用）
- ：jsoup 是一款 Java 的 HTML 解析器，可直接解析某个 URL 地址、HTML 文本内容。它提供了一套非常省力的 API，可通过 DOM，CSS 以及类似于 jQuery 的操作方法来取出和操作数据
- PULL：Android 操作系统内置的解析器，sax 方式的

> 我们目前学习 Jsoup。

Jsoup：jsoup 是一款 Java 的 HTML 解析器，可直接解析某个 URL 地址、HTML 文本内容。它提供了一套非常省力的 API，可通过 DOM，CSS 以及类似于 jQuery 的操作方法来取出和操作数据。

快速入门：

- 步骤：
  1. 导入 jar 包
  2. 获取 Document 对象
  3. 获取对应的标签 Element 对象
  4.  获取数据
- 代码：

```java
// 获取 student.xml 的 path
String path = JsoupDemo1.class.getClassLoader().getResource("student.xml").getPath();
// 解析 xml 文档，加载文档进内存，获取 dom 树
Document document = Jsoup.parse(new File(path), "utf-8");
// 获取元素对象 Element
Elements elements = document.getElementsByTag("name");	
System.out.println(elements.size());
// 获取第一个 name 的 Element 对象
Element element = elements.get(0);
// 获取数据
String name = element.text();
System.out.println(name);
```

【对象的使用】

1. Jsoup：工具类，可以解析 html 或 xml 文档，返回 Document

   - parse：解析 html 或 xml 文档，返回 Document

     - parse(File in, String charsetName)：解析 xml 或 html 文件的
     - parse(String html)：解析 xml 或 html 字符串
     - parse(URL url, int timeoutMillis)：通过网络路径获取指定的 html 或 xml 的文档对象

2. Document：文档对象，代表内存中的 dom 树
   - 获取 Element 对象
     - getElementById(String id)：根据 id 属性值获取唯一的 element 对象
     - getElementsByTag(String tagName)：根据标签名称获取元素对象集合
     - getElementsByAttribute(String key)：根据属性名称获取元素对象集合
     - getElementsByAttributeValue(String key, String value)：根据对应的属性名和属性值获取元素对象集合
3. Elements：元素 Element 对象的集合。可以当做 `ArrayList<Element>` 来使用
4. Element：元素对象
   1. 获取子元素对象
      - getElementById(String id)：根据 id 属性值获取唯一的 element 对象
      - getElementsByTag(String tagName)：根据标签名称获取元素对象集合
      - getElementsByAttribute(String key)：根据属性名称获取元素对象集合
      - getElementsByAttributeValue(String key, String value)：根据对应的属性名和属性值获取元素对象集合
   2. 获取属性值
      - String attr(String key)：根据属性名称获取属性值
   3. 获取文本内容
      - String text()：获取文本内容
      - String html()：获取标签体的所有内容(包括字标签的字符串内容)
5. Node：节点对象
   - 是 Document 和 Element 的父类

【快捷查询方式】

1. selector：选择器

   - 使用的方法：Elements select(String cssQuery)
     - 语法：参考 Selector 类中定义的语法

2. XPath：XPath 即为 XML 路径语言，它是一种用来确定 XML（标准通用标记语言的子集）文档中某部分位置的语言

   - 使用 Jsoup 的 Xpath 需要额外导入 jar 包

   - 查询 w3cshool 参考手册 [XPath 教程_w3cschool](https://www.w3cschool.cn/xpath/)，使用 xpath 的语法完成查询

   - 代码：

     ```java
     // 获取 student.xml 的 path
     String path = JsoupDemo6.class.getClassLoader().getResource("student.xml").getPath();
     // 获取 Document 对象
     Document document = Jsoup.parse(new File(path), "utf-8");
     // 根据 document 对象，创建 JXDocument 对象
     JXDocument jxDocument = new JXDocument(document);
     // 结合 xpath 语法查询
     // 查询所有 student 标签
     List<JXNode> jxNodes = jxDocument.selN("//student");
     for (JXNode jxNode : jxNodes) {
     	 System.out.println(jxNode);
     }
     		
      System.out.println("--------------------");
     		
     // 查询所有 student 标签下的 name 标签
     List<JXNode> jxNodes2 = jxDocument.selN("//student/name");
     for (JXNode jxNode : jxNodes2) {
     	System.out.println(jxNode);
     }
     		
     System.out.println("--------------------");
     		
     // 查询 student 标签下带有 id 属性的 name 标签
     List<JXNode> jxNodes3 = jxDocument.selN("//student/name[@id]");
     for (JXNode jxNode : jxNodes3) {
     	System.out.println(jxNode);
     }
     
     System.out.println("--------------------");
     
     // 查询 student 标签下带有 id 属性的 name 标签 并且 id 属性值为 itcast
     		
     List<JXNode> jxNodes4 = jxDocument.selN("//student/name[@id='itcast']");
     for (JXNode jxNode : jxNodes4) {
     	System.out.println(jxNode);
     }
     ```

     