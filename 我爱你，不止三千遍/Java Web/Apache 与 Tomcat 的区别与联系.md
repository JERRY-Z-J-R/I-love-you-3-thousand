# 【Apache 与 Tomcat 的区别与联系】

Apache 和 Tomcat 的区别有：Apache 是用 C 语言实现，而 Tomcat 是用 Java 实现的；Apache 可以单向与 Tomcat 连通，即通过 Apache 可以访问 Tomcat 资源，反之不然。

1. Apache 只是一个普通服务器，只能用来解析静态页面 (html)，不支持解析动态页面 (jsp)，它可以通过插件支持 php。如果想解析动态页面 (jsp) 就要用到 Tomcat，Tomcat 同时也支持 HTML、JSP、ASP、PHP、CGI等。

2. Apache 是用 C 语言实现的，支持各种特性和模块从而来扩展核心功能，而 Tomcat 是用 Java 实现的，所以它更好的支持 jsp。

3. 一般使用 Apache+Tomcat 的话，Apache 直接处理静态请求而不经过 Tomcat，对于动态请求，Apache 只是作为一个转发，对 jsp 的处理是由 Tomcat 来处理的，Apache 回传解析好的静态代码，这样整合就可以减少 Tomcat 的服务开销。

4. Apache 可以单向与 Tomcat 连通，就是说通过 Apache 可以访问 Tomcat 资源，而反过来 Tomcat 就不能访问 Apache 资源。

5. Apache 是很最开始的页面解析服务，Tomcat 是后研发出来的，从本质上来说 Tomcat 的功能完全可以替代Apache，但 Apache 毕竟是 Tomcat 的前辈级人物，并且市场上也有不少人还在用 Apache，Apache 虽然不能解析 Java 的东西，但解析 html 速度快，所以 Apache 还会继续存在，不会轻易被取代。

6. Apache 可以运行一年不重启，稳定性非常好，而 Tomcat 则并没有这么好的稳定性。

7. 首选 web 服务器是 Apache，但 Apache 解析不了的 jsp、servlet 才用 Tomcat。

8. 只使用 Apache 服务器不需要安装 jdk，使用 Tomcat 服务器必须安装 jdk 并配置好环境变量。