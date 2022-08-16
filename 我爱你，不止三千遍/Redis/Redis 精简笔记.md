# Redis 精简笔记

> 本文档仅为 Redis 基础教程，更多内容请参考：[Redis中文网](https://www.redis.net.cn/)

# 一、概述

Redis 是一款高性能的 NoSQL 系列的非关系型数据库！

> NoSQL（NoSQL = Not Only SQL）：即“不仅仅是 SQL”，是一项全新的数据库理念，泛指非关系型的数据库。随着互联网 web2.0 网站的兴起，传统的关系数据库在应付 web2.0 网站，特别是超大规模和高并发的 SNS 类型的 web2.0 纯动态网站已经显得力不从心，暴露了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL 数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，尤其是大数据应用难题。
>
> 【NoSQL 和关系型数据库比较】
>
> 优点：
>
> - 成本：NoSQL 数据库简单易部署，基本都是开源软件，不需要像使用 oracle 那样花费大量成本购买使用，相比关系型数据库价格便宜
> - 查询速度：NoSQL 数据库将数据存储于缓存之中，关系型数据库将数据存储在硬盘中，自然查询速度远不及 NoSQL 数据库
> - 存储数据的格式：NoSQL 的存储格式是 key-value 形式、文档形式、图片形式等等，所以可以存储基础类型以及对象或者是集合等各种格式，而关系型数据库则只支持基础类型
> - 扩展性：关系型数据库有类似 join 这样的多表查询机制的限制导致扩展很艰难
>
> 缺点：
>
> - 维护的工具和资料有限，因为 NoSQL 是属于新的技术，不能和关系型数据库10几年的技术同日而语
> - 不提供对 SQL 的支持，如果不支持 SQL 这样的工业标准，将产生一定用户的学习和使用成本
> - 不提供关系型数据库对事务的处理
>
> 【非关系型数据库的优势】
>
> - 性能 NoSQL 是基于键值对的，可以想象成表中的主键和值的对应关系，而且不需要经过 SQL 层的解析，所以性能非常高
> - 可扩展性同样也是因为基于键值对，数据之间没有耦合性，所以非常容易水平扩展
>
> 【关系型数据库的优势】
>
> - 复杂查询可以用 SQL 语句方便的在一个表以及多个表之间做非常复杂的数据查询
> - 事务支持使得对于安全性能很高的数据访问要求得以实现
>
> 【总结】
>
> 关系型数据库与 NoSQL 数据库并非对立而是互补的关系，即通常情况下使用关系型数据库，在适合使用 NoSQL 的时候使用 NoSQL 数据库，让 NoSQL 数据库对关系型数据库的不足进行弥补，一般会将数据存储在关系型数据库中，在 NoSQL 数据库中备份存储关系型数据库的数据。

> 主流的 NoSQL 产品：
>
> 【键值（Key-Value）存储数据库】
>
> - 相关产品：Tokyo Cabinet/Tyrant、Redis、Voldemort、Berkeley DB
> - 典型应用：内容缓存，主要用于处理大量数据的高访问负载
> - 数据模型：一系列键值对
> - 优势：快速查询
> - 劣势：存储的数据缺少结构化
>
> 【列存储数据库】
>
> - 相关产品：Cassandra、HBase、Riak
> - 典型应用：分布式的文件系统
> - 数据模型：以列簇式存储，将同一列数据存在一起
> - 优势：查找速度快，可扩展性强，更容易进行分布式扩展
> - 劣势：功能相对局限
>
> 【文档型数据库】
>
> - 相关产品：CouchDB、MongoDB
> - 典型应用：Web应用（与 Key-Value 类似，Value 是结构化的）
> - 数据模型： 一系列键值对
> - 优势：数据结构要求不严格
> - 劣势： 查询性能不高，而且缺乏统一的查询语法
>
> 【图形（Graph）数据库】
>
> - 相关数据库：Neo4J、InfoGrid、Infinite Graph
> - 典型应用：社交网络
> - 数据模型：图结构
> - 优势：利用图结构相关算法
> - 劣势：需要对整个图做计算才能得出结果，不容易做分布式的集群方案

什么是 Redis：

Redis 是用 C 语言开发的一个开源的高性能键值对（key-value）数据库，官方提供测试数据，50 个并发执行 100000 个请求,读的速度是 110000 次/s,写的速度是 81000 次/s ，且 Redis 通过提供多种键值数据类型来适应不同场景下的存储需求，目前为止 Redis 支持的键值数据类型如下：

- 字符串类型 string
- 哈希类型 hash
- 列表类型 list
- 集合类型 set
- 有序集合类型 sortedset

Redis 的应用场景：

- 缓存（数据查询、短连接、新闻内容、商品内容等等）
- 聊天室的在线好友列表
- 任务队列（秒杀、抢购、12306等）
- 应用排行榜
- 网站访问统计
- 数据过期处理（可以精确到毫秒）
- 分布式集群架构中的 session 分离

# 二、下载安装

官网：https://redis.io
中文网：http://www.redis.net.cn/

> 注意：Redis 是没有提供官方的 Windows 版本，只有 Linux 和 Mac 版，我们需要 Windows 版本的话需要去 [microsoftarchive/redis (github.com)](https://github.com/microsoftarchive/redis) 下载，解压即可使用。
>
> * redis.windows.conf：配置文件
> * redis-cli.exe：Redis 客户端
> * redis-server.exe：Redis 服务器端

> 【Redis 配置文件的重要部分】
>
> ```
> daemonize：默认为no，修改为yes启用守护线程
> port：设定端口号，默认为6379
> bind：绑定IP地址
> databases：数据库数量，默认16
> save <second> <changes>：指定多少时间、有多少次更新操作，就将数据同步到数据文件
> #redis默认配置有三个条件，满足一个即进行持久化
> save 900 1 #900s有1个更改
> save 300 10 #300s有10个更改
> save 60 10000 #60s有10000更改
> dbfilename：指定本地持久化数据库的文件名，默认为dump.rdb
> dir：指定本地持久化数据库的存放目录，默认为./当前文件夹
> requirepass：密码
> ```

注意：对于 Redis on Windows 来说，打开 redis-server 后，一但把命令行窗口关闭了那么 Redis 也就停止服务了！我们为了方便可以将其注册成 Windows 服务：

1. 将 Redis 安装根目录配置到 Path 环境变量中

2. 打开终端输入：`redis-server --service-install redis.windows.conf --loglevel verbose`

之后 Redis 就会以服务的方式运行到 Windows 中（可以通过任务管理器查看），并且开机自启动。

- `redis-server --service-start`：启动服务
- `redis-server --service-stop`：停止服务
- `redis-cli`：打开客服端

【修改密码】
方法一：通过配置文件进行设置（永久生效）

- 打开 redis.windows.conf
- 设置 requirepass：密码（该行默认为注释状态）
- 重启 Redis 生效

方法二：通过命令设置（本次运行生效）

- `config set requirepass 密码`：设置或重设密码（`''` 为空密码）
- `config get requirepass`：查看密码
- 无需重启

> 当设置了密码之后，连接 Redis 需要：`redis-cli -h ip -p 端口 -a 密码`，例如 `redis-cli -h 127.0.0.1 -p 6379 -a 密码`，本地连接可以使用默认的 ip 和 端口：`redis-cli -a 密码`，否则后续的任何命令操作都不会生效！

# 三、数据结构

Redis 的数据结构：
Redis存储的是 key-value 格式的数据，其中 key 都是字符串，value 有 5 种不同的数据结构：

- 字符串类型 String
- 哈希类型 Hash：map 格式  
- 列表类型 List：LinkedList 格式（支持重复元素）
- 集合类型 Set：HashSet 格式（不允许重复元素）
- 有序集合类型 SortedSet：不允许重复元素，且元素有顺序

# 四、命令操作

## 4.1 通用命令

- KEYS：查询键
  - `KEYS *`：查询所有键
  - `KEYS key`：查询指定名的键
  - `KEYS 正则表达式`：通过正则表达式查询键
- TYPE key：获取键对应的 value 的类型
- DEL key：删除指定的 key value

## 4.2 字符串类型 String

- 存储：SET key value（重复存储会覆盖）

```
127.0.0.1:6379> SET username zhangsan
OK
```

- 获取：GET key

```
127.0.0.1:6379> GET username
"zhangsan"
```

- 删除：DEL key（返回 (nil) 表示没有找到）

```
127.0.0.1:6379> DEL age
(integer) 1
```

## 4.3 哈希类型 Hash

- 存储：HSET key field value

```
127.0.0.1:6379> HSET myhash username lisi
(integer) 1
127.0.0.1:6379> HSET myhash password 123
(integer) 1
```

- 获取

  - HGET key field：获取指定的 field 对应的值

  ```
  127.0.0.1:6379> HGET myhash username
  "lisi"
  ```

  - HGETALL key：获取所有的 field 和 value

  ```
  127.0.0.1:6379> HGETALL myhash
  1) "username"
  2) "lisi"
  3) "password"
  4) "123"
  ```

- 删除：HDEL key field

```
127.0.0.1:6379> HDEL myhash username
(integer) 1
```

## 4.4 列表类型 List

> 可以添加一个元素到列表的头部（左边）或者尾部（右边），可以模拟队列！

- 添加

  - LPUSH key value：将元素加入列表左边
  - RPUSH key value：将元素加入列表右边

  ```
  127.0.0.1:6379> LPUSH myList a
  (integer) 1
  127.0.0.1:6379> LPUSH myList b
  (integer) 2
  127.0.0.1:6379> RPUSH myList c
  (integer) 3
  ```

- 获取：LRANGE key start end

```
127.0.0.1:6379> LRANGE myList 0 -1
1) "b"
2) "a"
3) "c"
```

- 删除

  - LPOP key：删除列表最左边的元素，并将元素返回

  ```
  127.0.0.1:6379> LPOP myList
  "b"
  ```

  - RPOP key： 删除列表最右边的元素，并将元素返回

  ```
  127.0.0.1:6379> LPOP myList
  "a"
  ```

## 4.5 集合类型 Set

> 不允许重复元素！且存入，取出的顺序不保证一致性！

- 存储：SADD key value

```
127.0.0.1:6379> SADD myset a
(integer) 1
127.0.0.1:6379> SADD myset a
(integer) 0
127.0.0.1:6379> SADD myset b c b d
(integer) 3
```

- 获取：SMEMBERS key（获取 Set 集合中所有元素）

```
127.0.0.1:6379> SMEMBERS myset
1) "d"
2) "c"
3) "b"
4) "a"
```

- 删除：SREM key value（删除 Set 集合中的某个元素）

```
127.0.0.1:6379> SREM myset a
(integer) 1
```

## 4.6 有序集合类型 SortedSet

> 不允许重复元素，且元素有顺序，每个元素都会关联一个 double 类型的分数。Redis 正是通过分数来为集合中的成员进行从小到大的排序（可以用来做热搜排名）。

- 存储：ZADD key score value（可以利用再次覆盖的方式修改分数）

```
127.0.0.1:6379> ZADD mysort 60 zhangsan
(integer) 1
127.0.0.1:6379> ZADD mysort 50 lisi
(integer) 1
127.0.0.1:6379> ZADD mysort 80 wangwu
(integer) 1
```

- 获取：ZRANGE key start end [WITHSCORES]

```
127.0.0.1:6379> ZRANGE mysort 0 -1
1) "lisi"
2) "zhangsan"
3) "wangwu"

127.0.0.1:6379> ZRANGE mysort 0 -1 WITHSCORES
1) "zhangsan"
2) "60"
3) "wangwu"
4) "80"
5) "lisi"
6) "500"
```

- 删除：ZREM key value

```
127.0.0.1:6379> ZREM mysort lisi
(integer) 1
```

# 五、持久化

Redis 是一个内存数据库，当 Redis 服务器重启，或者计算机重启，数据会丢失，我们可以将 Redis 内存中的数据持久化保存到硬盘的文件中。

Redis 持久化机制：

- 【RDB】：默认方式，不需要进行配置，默认就使用这种机制

在一定的间隔时间中，检测 key 的变化情况，然后持久化数据，同时默认在 Redis 根目录生成一个 dump.rdb 持久化文件。

1. 编辑 redis.windwos.conf 文件

```
#   after 900 sec (15 min) if at least 1 key changed
#	在 15 分钟之后，只要有 1 个 key 发生改变，就持久化一次
save 900 1
#   after 300 sec (5 min) if at least 10 keys changed
#	在 5 分钟之后，只要有 10 个 key 发生改变，就持久化一次
save 300 10
#   after 60 sec if at least 10000 keys changed
#	在 60 秒之后，只要有 10000 个 key 发生改变，就持久化一次
save 60 10000
```

2. 重新启动 Redis 服务，并指定配置文件名称

```
redis-server redis.windows.conf	
```

- 【AOF】：日志记录的方式，可以记录每一条命令的操作，可以每一次命令操作后，持久化数据（对性能消耗较大，一般不推荐！），同时默认在 Redis 根目录生成一个 appendonly.aof 持久化文件。

1. 编辑 redis.windwos.conf 文件

```
appendonly no（关闭） --> appendonly yes （开启）
				
# appendfsync always ： 每一次操作都进行持久化
appendfsync everysec ： 每隔一秒进行一次持久化
# appendfsync no	 ： 不进行持久化
```

2. 重新启动 Redis 服务，并指定配置文件名称

```
redis-server redis.windows.conf	
```

> 注意：虽然 Redis 有持久化机制，但是其持久化是存在一定风险的，还要根据具体业务具体分析！

# 六、Jedis

Jedis： 一款 Java 操作 Redis 数据库的工具。

> Jedis 直连，本质是定义一个 tcp 连接，然后使用 socket 技术进行通信。

【使用步骤】

- 下载 Jedis 的 [jar 包](https://mvnrepository.com/artifact/redis.clients/jedis)，或使用 Maven 引入

```xml
<dependency>
	<groupId>redis.clients</groupId>
	<artifactId>jedis</artifactId>
	<version>2.9.0</version>
</dependency>
```

- 使用

```java
package cn.test;

import redis.clients.jedis.Jedis;

public class redis {
    public static void main(String[] args) {
        // 1. 获取连接
        // Jedis jedis = new Jedis("localhost");	默认 6379
        // Jedis jedis = new Jedis();	默认 localhost:6379
        Jedis jedis = new Jedis("localhost", 6379);
        // 设置 Redis 密码（如果密码为空，则不需要）
        // jedis.auth("123456");
        // 2. 操作
        jedis.set("username", "zhangsan");
        // 3. 关闭连接
        jedis.close();
    }
}
```

【Jedis 操作各种 Redis 中的数据结构】

- 【字符串类型 String】
  - set()
  - get()
  - del()

```java
// 1. 获取连接
Jedis jedis = new Jedis();

// 2. 操作
// 存储
jedis.set("username", "zhangsan");
// 获取
String username = jedis.get("username");
// jedis.del("username");
System.out.println(username);

// 可以使用 setex() 方法存储可以指定过期时间的 key value
// 将 activecode：hehe 键值对存入 redis，并且 20 秒后自动删除该键值对（一些特殊场景有用，例如：限时激活码）
jedis.setex("activecode", 20, "hehe");

// 3. 关闭连接
jedis.close();
```

- 【哈希类型 Hash：Map 格式】
  - hset()
  - hget()
  - hgetAll()
  - hdel()

```java
// 1. 获取连接
Jedis jedis = new Jedis();

// 2. 操作
// 存储 Hash
jedis.hset("user", "name", "lisi");
jedis.hset("user", "age", "23");
jedis.hset("user", "gender", "female");
	
// 获取 Hash
String name = jedis.hget("user", "name");
System.out.println(name);

// 获取 Hash 的所有 Map 中的数据
Map<String, String> user = jedis.hgetAll("user");
Set<String> keySet = user.keySet();
for (String key : keySet) {
	// 获取 value
	String value = user.get(key);
	System.out.println(key + ":" + value);
}

// 删除
jedis.hdel("user", "age");
	
// 3. 关闭连接
jedis.close();
```

- 【列表类型 List：LinkedList 格式（支持重复元素）】
  - lpush() / rpush()
  - lpop() / rpop()
  - lrange(key, start, end)

```java
 // 1. 获取连接
Jedis jedis = new Jedis();

// 2. 操作
// list 存储
jedis.lpush("mylist", "a", "b", "c");	// 从左边存
jedis.rpush("mylist", "a", "b", "c");	// 从右边存

// list 范围获取
List<String> mylist = jedis.lrange("mylist", 0, -1);
System.out.println(mylist);

// list 弹出
String element1 = jedis.lpop("mylist");	// c
System.out.println(element1);

String element2 = jedis.rpop("mylist");	// c
System.out.println(element2);
	
// list 范围获取
List<String> mylist2 = jedis.lrange("mylist", 0, -1);
System.out.println(mylist2);
	
// 3. 关闭连接
jedis.close();
```

- 【集合类型 Set：HashSet 格式（不允许重复元素）】
  - sadd()
  - smembers()
  - srem()

```java
// 1. 获取连接
Jedis jedis = new Jedis();

// 2. 操作
// set 存储
jedis.sadd("myset", "java", "php", "c++", "c++");

 // set 获取
Set<String> myset = jedis.smembers("myset");
System.out.println(myset);

// 删除
jedis.srem("myset", "java");

 // 3. 关闭连接
jedis.close();
```

- 【有序集合类型 SortedSet：不允许重复元素，且元素有顺序】
  - zadd()
  - zrange()
  - zrem()

```java
// 1. 获取连接
Jedis jedis = new Jedis();

// 2. 操作
// sortedset 存储
jedis.zadd("mysortedset", 3, "亚瑟");
jedis.zadd("mysortedset", 30, "后裔");
jedis.zadd("mysortedset", 24, "孙悟空");
jedis.zadd("mysortedset", 18, "小乔");
	
// sortedset 获取
Set<String> mysortedset = jedis.zrange("mysortedset", 0, -1);
System.out.println(mysortedset);

// 删除
jedis.zrem("mysortedset", "亚瑟");

// 3. 关闭连接
jedis.close();
```

# 七、连接池

Jedis 连接池：JedisPool（Jedis 自带）

【使用方法】

- 导入 [commons-pool jar](https://mvnrepository.com/artifact/org.apache.commons/commons-pool2) 包，或通过 Maven 引入

  ```xml
  <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-pool2</artifactId>
      <version>2.8.0</version>
  </dependency>
  ```

- 创建 JedisPool 连接池对象
- 调用方法 getResource() 方法获取 Jedis 连接

```java
// 创建一个配置对象
JedisPoolConfig config = new JedisPoolConfig();
config.setMaxTotal(50);		// 最大连接数
config.setMaxIdle(10);		// 最大空闲连接

// 1.创建 Jedis 连接池对象（配置对象不是必须的，ip 和 端口 也可以省略采用默认）
JedisPool jedisPool = new JedisPool(config, "localhost", 6379);	
// 2.获取连接
Jedis jedis = jedisPool.getResource();
// 设置 Redis 密码（如果密码为空，则不需要）
// jedis.auth("123456");
// 3. 使用
jedis.set("hehe", "heihei");
// 4. 关闭（归还到连接池中）
jedis.close();
```

> 【Jedis 详细配置】
>
> ```properties
> #最大活动对象数     
> redis.pool.maxTotal=1000    
> #最大能够保持idel状态的对象数      
> redis.pool.maxIdle=100  
> #最小能够保持idel状态的对象数   
> redis.pool.minIdle=50    
> #当池内没有返回对象时，最大等待时间    
> redis.pool.maxWaitMillis=10000    
> #当调用borrow Object方法时，是否进行有效性检查    
> redis.pool.testOnBorrow=true    
> #当调用return Object方法时，是否进行有效性检查    
> redis.pool.testOnReturn=true  
> #“空闲链接”检测线程，检测的周期，毫秒数。如果为负值，表示不运行“检测线程”。默认为-1.  
> redis.pool.timeBetweenEvictionRunsMillis=30000  
> #向调用者输出“链接”对象时，是否检测它的空闲超时；  
> redis.pool.testWhileIdle=true  
> # 对于“空闲链接”检测线程而言，每次检测的链接资源的个数。默认为3.  
> redis.pool.numTestsPerEvictionRun=50  
> #redis服务器的IP    
> redis.ip=xxxxxx  
> #redis服务器的Port    
> redis1.port=6379   
> ```

【连接池工具类】

- `util/JedisPoolUtils.java`

```java
package cn.jerry.jedis.util;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * JedisPoll 工具类：加载配置文件，配置连接池参数，提供获取连接的方法
 */
public class JedisPoolUtils {
    private static JedisPool jedisPool;

    // 当类加载读取配置文件
    static {
        InputStream is = JedisPoolUtils.class.getClassLoader().getResourceAsStream("resources/jedis.properties");
        // 创建 Properties 对象
        Properties pro = new Properties();
        // 关联文件
        try {
            pro.load(is);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 获取数据，设置到 JedisPoolConfig 中
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(Integer.parseInt(pro.getProperty("maxTotal")));
        config.setMaxIdle(Integer.parseInt(pro.getProperty("maxIdle")));
        // 初始化 JedisPool
        // jedisPool = new JedisPool(config, pro.getProperty("host"), Integer.parseInt(pro.getProperty("port")));
        // 如果要设置密码的话，可以这样做，只不过这种做法必须在 password，之前把 timeout 也设置上
        // timeout：在 timeout 时间内如果没有数据交互，redis 将关闭连接，0 代表永不断开（推荐设为 0，这也是默认值）
        jedisPool = new JedisPool(config, pro.getProperty("host"), Integer.parseInt(pro.getProperty("port")), Integer.parseInt(pro.getProperty("timeout")), pro.getProperty("password"));
    }

    // 获取连接的方法
    public static Jedis getJedis() {
        return jedisPool.getResource();
    }
}
```

- `resources/jedis.properties`

```properties
host=127.0.0.1
port=6379
maxTotal=50
maxIdle=10
timeout=0
#如果密码为空，则不需要加 password，会自动活得空值
#password=123456
```

- `cn/Test.java`

```java
package cn;

import redis.clients.jedis.Jedis;
import util.JedisPoolUtils;

public class Test {
    public static void main(String[] args) {
        // 1. 通过连接池工具类获取连接
        Jedis jedis = JedisPoolUtils.getJedis();
        // 2. 操作
        jedis.set("hehe", "heihei");
        // 3. 关闭（归还到连接池）
        jedis.close();
}
```

# 八、案例整合

> 需求：前端通过 Ajax 请求后端 API 获取一个班级成员列表，这个班级成员列表存储在 MySQL 数据库中，后端通过请求 MySQL 数据库获得班级成员列表数据并将其包装为 JSON 格式进行返回，由于班级成员列表数据很少会发生改变，每次请求都去访问 MySQL 数据库消耗太多性能资源，所以现需要利用 Redis 进行缓存……
>
> > 小技巧：对于 JSON 型的返回数据，直接把 JSON 字符串存到 Redis 中更方便！

![image-20220715225639397](mark-img/image-20220715225639397.png)

后端逻辑：

- 查询班级成员列表

```java
// 1.先从 Redis 中查询数据
// 1.1 获取 Redis 客户端连接
Jedis jedis = JedisPoolUtils.getJedis();
String classMembers_json = jedis.get("classMembers");

// 2. 判断 classMembers_json 数据是否为 null 或 长度为 0
if (classMembers_json == null || classMembers_json.length() == 0) {
	// Redis 中没有数据
    // 2.1 从 MySQL 数据库中查询
    List<Member> members = classMembersService.selectAll();
    // 2.2 将 List 序列化为 json
    classMembers_json = JSON.toJSONString(members);
     // 2.3 将 json 数据存入 Redis
    jedis.set("classMembers", classMembers_json);
    // 归还连接
    jedis.close();
}

// 返回数据
response.setContentType("text/json;charset=utf-8");
response.getWriter().write(classMembers_json);
```

- 更新班级成员列表

> 数据库的班级成员数据一但改变就需要更新 Redis 缓存！
>
> 发生改变的时机：对班级成员数据的 “增、删、改”。
>
> 更新方法：在班级成员数据的 “增、删、改” 操作之后执行 `jedis.del("classMembers");`，因为删除之后，在获取数据时就会去查 MySQL 数据库，并将新数据同步到 Redis 中。

