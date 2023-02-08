# 【Redis 精简笔记】

> 本文档仅为 Redis 基础实例，更多内容请参考：
>
> - [Documentation | Redis](https://redis.io/docs/)
>
> - [Redis中文网](https://www.redis.net.cn/)
> - [Redis开发与运维技术、Redis教程、使用手册](https://redis.com.cn/)
> - [Redis 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/redis/redis-tutorial.html)

# 一、概述

Redis 是一款高性能的 NoSQL 系列的非关系型数据库！

> NoSQL（NoSQL = Not Only SQL）：即“不仅仅是 SQL”，是一项全新的数据库理念，泛指非关系型的数据库。随着互联网 web2.0 网站的兴起，传统的关系数据库在应付 web2.0 网站，特别是超大规模和高并发的 SNS 类型的 web2.0 纯动态网站已经显得力不从心，暴露了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL 数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，尤其是大数据应用难题。
>
> 【NoSQL 和关系型数据库比较】
>
> 优点：
>
> - 成本：NoSQL 数据库简单易部署，基本都是开源软件，不需要像使用 Oracle 那样花费大量资金成本，相比关系型数据库价格便宜
> - 查询速度：NoSQL 数据库将数据存储于内存之中（也可以持久化存储于硬盘中），关系型数据库将数据存储在硬盘中，自然查询速度远不及 NoSQL 数据库
> - 存储数据的格式：NoSQL 的存储格式可以是：对象形式、key-value 形式、文档形式等，所以可以存储基础类型以及对象或者是集合等各种格式，而关系型数据库则只支持基础类型
> - 扩展性：关系型数据库有类似 join 这样的多表查询机制的限制导致扩展很艰难
>
> 缺点：
>
> - 维护的工具和资料有限，因为 NoSQL 是属于新的技术，不能和关系型数据库几十年的技术同日而语
> - 不提供对 SQL 的支持，如果不支持 SQL 这样的工业标准，将产生一定用户的学习和使用成本
> - 不提供关系型数据库对事务的处理（部分 NoSQL 数据库也逐渐在支持事务了）
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
> 关系型数据库与 NoSQL 数据库并非对立而是互补的关系，即通常情况下使用关系型数据库，在适合使用 NoSQL 的时候使用 NoSQL 数据库，让 NoSQL 数据库对关系型数据库的不足进行弥补，一般会将数据存储在关系型数据库中，在 NoSQL 数据库中缓存关系型数据库中的数据（如 Redis），当然诸如 MongoDB 这样的 NoSQL 数据库也越来越多地被某些项目使用来替代关系型数据库。

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
> - 典型应用：Web 应用（与 Key-Value 类似，Value 是结构化的）
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

REmote DIctionary Server(Redis) 是一个由 Salvatore Sanfilippo 写的 key-value 存储系统。

Redis 是一个开源的使用 ANSI C 语言编写、遵守 BSD 协议、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API。

Redis 是用 C 语言开发的一个开源的高性能键值对（key-value）非关系型数据库，官方提供测试数据，50 个并发执行 100000 个请求，读的速度是 110000 次/s，写的速度是 81000 次/s，且 Redis 通过提供多种键值数据类型来适应不同场景下的存储需求，目前为止 Redis 支持的键值数据类型如下：

- 字符串类型 string
- 哈希类型 hash
- 列表类型 list
- 集合类型 set
- 有序集合类型 sortedset

Redis 的应用场景：

- 缓存（数据查询、短连接、新闻内容、商品内容等）
- 聊天室的在线好友列表
- 任务队列（秒杀、抢购、12306等）
- 排行榜
- 网站访问统计
- 数据过期处理（可以精确到毫秒）
- 分布式集群架构中的 session 分离

> Redis 由于一般是用来作为缓存，数据都是在内存中，所以我们还经常称这种数据库为 “内存型数据库”。

# 二、下载安装

官网：https://redis.io
中文网：http://www.redis.net.cn/

> 注意：Redis 是没有提供官方的 Windows 版本，只有 Linux 和 Mac 版，我们需要 Windows 版本的话需要去 [microsoftarchive/redis (github.com)](https://github.com/microsoftarchive/redis) 下载，解压即可使用。
>
> * redis.windows.conf：配置文件
> * redis-cli.exe：Redis 客户端
> * redis-server.exe：Redis 服务器端
>
> 注意：微软提供的 Redis Windows 版本已经于 2016 年不在维护，如果你需要更新的版本可以看看 https://www.memurai.com/ 
>
> 如果你是 Win10 及以上版本的系统，那么还可以直接安装 Linux 的版本，但是有前提条件：
>
> 要在 Windows 上安装 Redis，首先需要启用 WSL2 (Windows Subsystem for Linux)。WSL2 允许您在 Windows 上本机运行 Linux 二进制文件。要使用此方法，您需要运行 Windows 10 2004 及更高版本或 Windows 11。

> 【Redis 配置文件的重要部分】
>
> ```
> daemonize：默认为no，修改为yes启用守护线程
> port：设定端口号，默认为6379
> bind：绑定IP地址
> databases：数据库数量，默认16个（DB0~DB15）
> # save <second> <changes>：指定多少时间、有多少次更新操作，就将数据同步到数据文件
> # redis 默认配置有三个条件，满足一个即进行持久化
> save 900 1 #900s有1个更改
> save 300 10 #300s有10个更改
> save 60 10000 #60s有10000更改
> dbfilename：指定本地持久化数据库的文件名，默认为dump.rdb
> dir：指定本地持久化数据库的存放目录，默认为./当前文件夹
> requirepass：密码
> ```

注意：对于 Redis on Windows 来说，打开 redis-server 后，一但把命令行窗口关闭了那么 Redis 也就停止服务了！我们为了方便可以将其注册成 Windows 服务：

1. 将 Redis 安装根目录配置到 Path 环境变量中

2. 打开终端输入：`redis-server --service-install redis.windows.conf`

之后 Redis 就会以服务的方式运行到 Windows 中（可以通过任务管理器查看），并且开机自启动。

- `redis-server --service-start`：启动服务
- `redis-server --service-stop`：停止服务
- `redis-cli`：打开客服端

【修改密码】
方法一：通过配置文件进行设置（永久生效）

- 打开 redis.windows.conf（非系统服务方式启动程序时使用的配置文件），redis.windows-service.conf（系统服务方式启动程序时使用的配置文件）
- 设置 requirepass：密码（该行默认为注释状态）
- 重启 Redis 生效

方法二：通过命令设置（本次运行生效）

- `config set requirepass 密码`：设置或重设密码（`''` 为空密码）
- `config get requirepass`：查看密码
- 无需重启

> 当设置了密码之后，连接 Redis 需要：`redis-cli -h ip -p 端口 -a 密码`，例如 `redis-cli -h 127.0.0.1 -p 6379 -a 密码`，本地连接可以使用默认的 ip 和 端口：`redis-cli -a 密码`，否则后续的任何命令操作都不会生效！

# 三、数据结构

Redis 的数据结构：
Redis 存储的是 key-value 格式的数据，其中 key 都是字符串，value 有 5 种主要的数据结构：

- 字符串类型 String
- 哈希类型 Hash：map 格式  
- 列表类型 List：LinkedList 格式（支持重复元素）
- 集合类型 Set：HashSet 格式（不允许重复元素）
- 有序集合类型 SortedSet（不允许重复元素，每个元素都与一个数值相关联，且元素按数值大小排序）
- ……

# 四、命令操作

【基本命令】

```
# quit 退出 Redis 客户端（Ctrl+C 也可以）
127.0.0.1:6379> QUIT
PS C:\Users\wwwzj>

##########################################################################################

# 验证 Redis 客户端与 Redis 服务器连接是否正常（PONG 表示正常）
127.0.0.1:6379> PING
PONG
127.0.0.1:6379> PING
Could not connect to Redis at 127.0.0.1:6379: 由于目标计算机积极拒绝，无法连接。
(2.05s)

##########################################################################################

# 查看 Redis 服务器、客户端、内存、CPU、状态等信息
127.0.0.1:6379> INFO
# Server
redis_version:3.0.504
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:a4f7a6e86f2d60b3
redis_mode:standalone
os:Windows
arch_bits:64
multiplexing_api:WinSock_IOCP
process_id:17112
run_id:7b08305d7bfa9e64753a54a52d44dda37b85cd82
tcp_port:6379
uptime_in_seconds:104
uptime_in_days:0
hz:10
lru_clock:14716168
config_file:

# Clients
connected_clients:1
client_longest_output_list:0
client_biggest_input_buf:0
blocked_clients:0

# Memory
used_memory:692968
used_memory_human:676.73K
used_memory_rss:655312
used_memory_peak:692968
used_memory_peak_human:676.73K
used_memory_lua:36864
mem_fragmentation_ratio:0.95
mem_allocator:jemalloc-3.6.0

# Persistence
loading:0
rdb_changes_since_last_save:0
rdb_bgsave_in_progress:0
rdb_last_save_time:1675660448
rdb_last_bgsave_status:ok
rdb_last_bgsave_time_sec:-1
rdb_current_bgsave_time_sec:-1
aof_enabled:0
aof_rewrite_in_progress:0
aof_rewrite_scheduled:0
aof_last_rewrite_time_sec:-1
aof_current_rewrite_time_sec:-1
aof_last_bgrewrite_status:ok
aof_last_write_status:ok

# Stats
total_connections_received:2
total_commands_processed:2
instantaneous_ops_per_sec:0
total_net_input_bytes:42
total_net_output_bytes:14
instantaneous_input_kbps:0.00
instantaneous_output_kbps:0.00
rejected_connections:0
sync_full:0
sync_partial_ok:0
sync_partial_err:0
expired_keys:0
evicted_keys:0
keyspace_hits:0
keyspace_misses:0
pubsub_channels:0
pubsub_patterns:0
latest_fork_usec:0
migrate_cached_sockets:0

# Replication
role:master
connected_slaves:0
master_repl_offset:0
repl_backlog_active:0
repl_backlog_size:1048576
repl_backlog_first_byte_offset:0
repl_backlog_histlen:0

# CPU
used_cpu_sys:0.05
used_cpu_user:0.03
used_cpu_sys_children:0.00
used_cpu_user_children:0.00

# Cluster
cluster_enabled:0

# Keyspace
db0:keys=1,expires=0,avg_ttl=0

##########################################################################################

# 查看 Redis 服务器信息
127.0.0.1:6379> INFO SERVER
# Server
redis_version:3.0.504
redis_git_sha1:00000000
redis_git_dirty:0
redis_build_id:a4f7a6e86f2d60b3
redis_mode:standalone
os:Windows
arch_bits:64
multiplexing_api:WinSock_IOCP
process_id:17112
run_id:7b08305d7bfa9e64753a54a52d44dda37b85cd82
tcp_port:6379
uptime_in_seconds:240
uptime_in_days:0
hz:10
lru_clock:14716304
config_file:

##########################################################################################

# Redis 默认具有 16 个数据库，名称是 DB0 ~ DB15，每一个数据库中的数据都是相互独立的！
# Redis 客户端连接上服务器后，默认就是处于 DB0 号数据库

127.0.0.1:6379> SET flag "this is DB0"
OK
127.0.0.1:6379> GET flag
"this is DB0"
# SELECT 命令用于切换数据库
127.0.0.1:6379> SELECT 9
OK
# 每一个数据库中的数据都是相互独立的！
127.0.0.1:6379[9]> GET flag
(nil)
127.0.0.1:6379[9]> SELECT 0
OK
127.0.0.1:6379> GET flag
"this is DB0"
# MOVE 命令用于把某个数据转移到其他数据库
127.0.0.1:6379> MOVE flag 9
(integer) 1
127.0.0.1:6379> GET flag
(nil)
127.0.0.1:6379> SELECT 9
OK
127.0.0.1:6379[9]> GET flag
"this is DB0"

# 注意：虽然 Redis 的数据库之间都是相互隔离的，但是 Redis 并不支持给数据库设密码！
# 一旦我们连接上 Redis 服务器，那么我们就可以使用里面全部的数据库！

# 注意：Redis 的数据库隔离也不是绝对的，某些命令可以对所有的数据库都生效！
# FLUSHALL 命令用于清空所有的数据库数据

# 注意：准确的说 Redis 的数据库应该理解为：“文件夹”、“命名空间”，它主要的用途是防止命名冲突！
#	   不应该掉入一种思维陷阱，就是：两个不同的应用 A 和 B，把 A 应用的数据存在 DB0，把 B 应用的数据存在 DB1，这是严重错误的！
#	   我们应该单独创建两个 Redis 实例，A 应用的数据放在其中一个 Redis 实例里，B 应用的数据放在另一个 Redis 实例里！
```

## 4.1 通用命令

- `KEYS`：查询键
    - `KEYS *`：查询所有键
    - `KEYS key`：查询指定名的键
    - `KEYS 正则表达式`：通过正则表达式查询键
- `TYPE key`：获取键对应的 value 的类型
- `DEL key`：删除指定的 key value

## 4.2 字符串类型 String

- 存储：SET key value（重复存储会覆盖）

```
127.0.0.1:6379> SET username zhangsan
OK
```

- 获取：GET key（返回 (nil) 表示没有找到）

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
    127.0.0.1:6379[9]> LPUSH myList d e f
    (integer) 6
    ```

- 获取：LRANGE key start end（通过索引区间返回列表成指定区间内的成员）

    ```
    127.0.0.1:6379> LRANGE myList 0 -1
    1) "f"
    2) "e"
    3) "d"
    4) "b"
    5) "a"
    6) "c"
    127.0.0.1:6379> LRANGE myList 2 4
    1) "d"
    2) "b"
    ```

- 删除

    - LPOP key：删除列表最左边的元素，并将元素返回

    ```
    127.0.0.1:6379> LPOP myList
    "f"
    ```

    - RPOP key： 删除列表最右边的元素，并将元素返回

    ```
    127.0.0.1:6379> RPOP myList
    "c"
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

- 获取：ZRANGE key start end [WITHSCORES]（通过索引区间返回有序集合成指定区间内的成员）

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

127.0.0.1:6379> ZCARD mysort
(integer) 3
```

- 删除：ZREM key value

```
127.0.0.1:6379> ZREM mysort lisi
(integer) 1
```

> 注意：以上操作只是 Redis 实际操作命令的一小部分，更多的内容请查看文档！

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
