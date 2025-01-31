# Node.js 容器配置案例

官网文档：[Docker Documentation | Docker Documentation](https://docs.docker.com/)

> 此处以利用 Docker 配置一个 Node.js 容器并运行一个 Vue 及 Koa 项目为例。

### 一、制作 Dockerfile 文件

```shell
# 使用 vim 创建并写入 Dockerfile 文件
$ vim Dockerfile
```

```dockerfile
# 由于项目原先的运行环境为 node v16.13.0 所以这里也需保证环境版本相同
FROM node:16.13.0
```

> 此步仅仅是需要一个 node 环境，所以可以不使用 Dockerfile 来构建镜像，而直接使用 pull 命令拉取一个官方镜像。
>
> `docker pull node:16.13.0`

### 二、构建镜像

> 若刚才使用 pull 命令去拉取镜像的话，此步可以跳过。

```shell
# 在 Dockerfile 所在路径下
$ docker build -t node:vue
```

### 三、查看镜像列表

```shell
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED      	   SIZE
node         vue       5f26022d0c60   3 minutes ago    905MB
```

### 四、由镜像来启动一个容器

> 由于启动容器的同时应该将主机上的项目文件挂载进容器里，所以在启动容器的同时使用 `-v` 命令来将本机上的 vue 项目挂载进容器中。
>
> 同时，把主机的 99 端口映射到容器中的 80 端口上…… 
>
> 本机 vue 项目路径为：`/mnt/f/test-vue`

```shell
$ docker run -it -p 99:80 -v /mnt/f/test-vue
```

输入以上命令之后，便成功启动了容器并自动切入了容器终端……

```shell
root@f005399b6c73:/# ls
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
root@f005399b6c73:/# node -v
v16.13.0
root@f005399b6c73:/# cd usr
root@f005399b6c73:/usr# ls
bin  test-vue  games  include  lib  local  sbin  share  src
root@f005399b6c73:/usr# cd test-vue
root@f005399b6c73:/usr/test-vue# ls
public  src  babel.config.js  package.json  package-lock.json  vue.config.js  README.md
root@f005399b6c73:/usr/test-vue#
```

可以看到，容器中已经成功挂载了主机上的 vue 项目。

### 五、安装项目启动依赖

```shell
# 在 /usr/test-vue 路径下
$ npm install
```

若依赖安装成功，执行后目录下将成功生成一个 `node_modules` 文件。

### 六、启动 vue 项目

```shell
$ npm run serve
```

成功启动项目……

```
> test-vue@0.1.0 serve
> vue-cli-service serve

 INFO  Starting development server...
 98% after emitting CopyPlugin

 DONE  Compiled successfully in 28637ms       1:06:44 AM


  App running at:
  - Local:   http://localhost:80/

  It seems you are running Vue CLI inside a container.
  Access the dev server via http://localhost:<your container's external mapped port>/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

> 由于 `http://localhost:80/` 这里的ip和端口都是指容器里的，而我们刚才将容器里的 `80` 端口映射到了主机上的 `99` 端口，所以我们在主机上访问 `http://localhost:99/` 便可以成功打开 vue 项目了。

### 七、将容器打包为镜像

```shell
# 列出容器列表
$ docekr ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                NAMES
f005399b6c73   5f26022d0c60   "docker-entrypoint.s…"   20 minutes ago   Up 20 minutes   0.0.0.0:99->80/tcp   amazing_morse
```

```shell
# 将容器打包为 node:vue2 镜像
$ docker commit -m "node v16.13.0-vue container" -a "Jerry_Z" f005399b6c73 node:vue2
sha256:6ba5f379c62ef5f567a24469a03fe9b28bc774868c215df94850a50a77f7e75f
```

```shell
# 列出镜像列表
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
node         vue2      6ba5f379c62e   55 seconds ago   961MB
node         vue       5f26022d0c60   2 hours ago      905MB
```

> 注意：由于是将主机上的 `test-vue` 挂载到容器里（只有主机上唯一的一份源文件，容器只是单纯的做了一个映射），所以将容器打包为镜像后，这个镜像中是不包含项目代码及 vue 启动依赖的！（之所以不包含 vue 启动依赖是因为 vue 安装启动依赖的时候是在主机的真实路径上安装，并不在容器中）！

### 八、Docker 数据卷

> 数据卷：是一个可供一个或多个容器使用的特殊目录
>
> - 数据卷可以在容器之间共享和重用
> - 对数据卷的修改会立马生效
> - 对数据卷的更新，不会影响镜像
> - 数据卷默认会一直存在，即使容器被删除

```shell
# 创建数据卷
$ docker volume create 数据卷名称
# 创建数据卷之后，默认会存放到目录：/var/lib/docker/数据卷名称/_data目录下

# 查看数据卷
$ docker volume inspect 数据卷名
# 查看全部数据卷信息
$ docker volume ls

# 删除数据卷
$ docker volume rm 数据卷名称

# 应用数据卷
# 当你映射数据卷时，如果数据卷不存在，Docker 会帮你自动创建
$ docker run -v 数据卷名称:容器内路径 镜像ID
# 直接指定一个路径作为数据卷的存储位置
$ docker run -v 本机路径:容器内部路径 镜像ID
```

> **数据卷和挂载目录有什么区别？**
>
> 卷 (Docker Volume) 是受控存储，是由 Docker 引擎进行管理维护的。因此使用卷，你可以不必处理 uid、SELinux 等各种权限问题，Docker 引擎在建立卷时会自动添加安全规则，以及根据挂载点调整权限。并且可以统一列表、添加、删除。另外，除了本地卷外，还支持网络卷、分布式卷。
>
> 而挂载目录那就没人管了，属于用户自行维护。你就必须手动处理所有权限问题。特别是在 CentOS 上，很多人碰到 Permission Denied，就是因为没有使用卷，而是挂载目录，而且还对 SELinux 安全权限一无所知导致。

### 九、Dockerfile 文件

学会使用 image 文件以后，接下来的问题就是，如何可以生成 image 文件？如果你要推广自己的软件（运行环境），势必要自己制作 image 文件。

这就需要用到 Dockerfile 文件。它是一个文本文件，用来配置 image，Docker 根据 该文件生成二进制的 image 文件。

下面通过一个实例，演示如何编写 Dockerfile 文件。

【实例：制作自己的 Docker 容器】

下面以 [koa-demos](https://www.ruanyifeng.com/blog/2017/08/koa.html) 项目为例，介绍怎么写 Dockerfile 文件，实现让用户在 Docker 容器里面运行 Koa 框架。

作为准备工作，请先[下载源码](https://github.com/ruanyf/koa-demos/archive/master.zip)。

 ```bash
 $ git clone https://github.com/ruanyf/koa-demos.git
 $ cd koa-demos
 ```

【编写 Dockerfile 文件】

首先，在项目的根目录下，新建一个文本文件`.dockerignore`，写入下面的[内容](https://github.com/ruanyf/koa-demos/blob/master/.dockerignore)。

 ```bash
 .git
 node_modules
 npm-debug.log
 ```

上面代码表示，这三个路径要排除，不要打包进入 image 文件。如果你没有路径要排除，这个文件可以不新建。

然后，在项目的根目录下，新建一个文本文件 Dockerfile，写入下面的[内容](https://github.com/ruanyf/koa-demos/blob/master/Dockerfile)。

 ```bash
 FROM node:8.4
 COPY . /app
 WORKDIR /app
 RUN npm install --registry=https://registry.npm.taobao.org
 EXPOSE 3000
 ```

上面代码一共五行，含义如下。

 - `FROM node:8.4`：该 image 文件继承官方的 node image，冒号表示标签，这里标签是 `8.4`，即8.4版本的 node。
 - `COPY . /app`：将当前目录下的所有文件（除了 `.dockerignore` 排除的路径），都拷贝进入 image 文件的`/app`目录。
 - `WORKDIR /app`：指定接下来的工作路径为 `/app`。
 - `RUN npm install`：在 `/app` 目录下，运行 `npm install` 命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
 - `EXPOSE 3000`：将容器 3000 端口暴露出来， 允许外部连接这个端口。

【创建 image 文件】

有了 Dockerfile 文件以后，就可以使用 `docker image build` 命令创建 image 文件了。

 ```bash
 $ docker image build -t koa-demo .
 # 或者
 $ docker image build -t koa-demo:0.0.1 .
 ```

上面代码中，`-t` 参数用来指定 image 文件的名字，后面还可以用冒号指定标签。如果不指定，默认的标签就是 `latest` 。最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。

如果运行成功，就可以看到新生成的 image 文件 `koa-demo` 了。

 ```bash
 $ docker image ls
 ```

【生成容器】

`docker container run` 命令会从 image 文件生成容器。

 ```bash
 $ docker container run -p 8000:3000 -it koa-demo /bin/bash
 # 或者
 $ docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash
 ```

上面命令的各个参数含义如下：

 - `-p` 参数：容器的 3000 端口映射到本机的 8000 端口。
 - `-it` 参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
 - `koa-demo:0.0.1`：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
 - `/bin/bash`：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。

如果一切正常，运行上面的命令以后，就会返回一个命令行提示符。

 ```bash
 root@66d80f4aaf1e:/app#
 ```

这表示你已经在容器里面了，返回的提示符就是容器内部的 Shell 提示符。执行下面的命令。

 ```bash
 root@66d80f4aaf1e:/app# node demos/01.js
 ```

这时，Koa 框架已经运行起来了。打开本机的浏览器，访问 http://127.0.0.1:8000，网页显示"Not Found"，这是因为这个 [demo](https://github.com/ruanyf/koa-demos/blob/master/demos/01.js) 没有写路由。

这个例子中，Node 进程运行在 Docker 容器的虚拟环境里面，进程接触到的文件系统和网络接口都是虚拟的，与本机的文件系统和网络接口是隔离的，因此需要定义容器与物理机的端口映射（map）。

现在，在容器的命令行，按下 Ctrl + c 停止 Node 进程，然后按下 Ctrl + d （或者输入 exit）退出容器。此外，也可以用 `docker container kill` 终止容器运行。

 ```bash
 # 在本机的另一个终端窗口，查出容器的 ID
 $ docker container ls
 
 # 停止指定的容器运行
 $ docker container kill [containerID]
 ```

容器停止运行之后，并不会消失，用下面的命令删除容器文件。

 ```bash
 # 查出容器的 ID
 $ docker container ls --all
 
 # 删除指定的容器文件
 $ docker container rm [containerID]
 ```

也可以使用 `docker container run` 命令的 `--rm` 参数，在容器终止运行后自动删除容器文件。

 ```bash
 $ docker container run --rm -p 8000:3000 -it koa-demo /bin/bash
 ```

【CMD 命令】

上一节的例子里面，容器启动以后，需要手动输入命令 `node demos/01.js` 。我们可以把这个命令写在 Dockerfile 里面，这样容器启动以后，这个命令就已经执行了，不用再手动输入了。

 ```bash
 FROM node:8.4
 COPY . /app
 WORKDIR /app
 RUN npm install --registry=https://registry.npm.taobao.org
 EXPOSE 3000
 CMD node demos/01.js
 ```

上面的 Dockerfile 里面，多了最后一行 `CMD node demos/01.js`，它表示容器启动后自动执行 `node demos/01.js`。

你可能会问，`RUN` 命令与 `CMD` 命令的区别在哪里？简单说，`RUN` 命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；`CMD` 命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个`RUN`命令，但是只能有一个 `CMD` 命令。

注意，指定了 `CMD` 命令以后，`docker container run` 命令就不能附加命令了（比如前面的`/bin/bash`），否则它会覆盖 `CMD` 命令。现在，启动容器可以使用下面的命令。

 ```bash
 $ docker container run --rm -p 8000:3000 -it koa-demo:0.0.1
 ```

### 十、发布 image 文件

容器运行成功后，就确认了 image 文件的有效性。这时，我们就可以考虑把 image 文件分享到网上，让其他人使用。

首先，去 [hub.docker.com](https://hub.docker.com/) 或 [cloud.docker.com](https://cloud.docker.com/) 注册一个账户。然后，用下面的命令登录。

 ```bash
 $ docker login
 ```

接着，为本地的 image 标注用户名和版本。

 ```bash
 $ docker image tag [imageName] [username]/[repository]:[tag]
 # 实例
 $ docker image tag koa-demos:0.0.1 ruanyf/koa-demos:0.0.1
 ```

也可以不标注用户名，重新构建一下 image 文件。

```bash
 $ docker image build -t [username]/[repository]:[tag] .
```

最后，发布 image 文件。

 ```bash
 $ docker image push [username]/[repository]:[tag]
 ```

发布成功以后，登录 hub.docker.com，就可以看到已经发布的 image 文件。

### 十一、命令小结

```bash
# 查看 docker 版本
$ docker --version

# 查看 docker 帮助文档 
$ docker --help

# 查看 docker 本地镜像列表
$ docker images

# 查看 docker 本地运行中的容器
$ docker ps
# 查看 docker 本地运行中的容器的ID
$ docker ps -q

# 查看 docker 本地的所有容器（运行中的、停止的）
$ docker ps -a
# 查看 docker 本地的所有容器ID（运行中的、停止的）
$ docker ps -a -q

# 登录 Docker Hub
$ docker login

# 退出 Docker Hub
$ docker logout

# 搜索 Docker Hub 中的镜像
$ docker search 镜像名:版本号

# 从 Docker Hub 拉取镜像到本地
$ docker pull 镜像名:版本号

# 利用 Dockerfile 构建镜像（在 Dockerfile 所在路径下）
$ docker build -t 镜像名:镜像Tag .

# 由镜像来启动一个容器
$ docker run 镜像ID/镜像名:Tag
# 启动镜像可以添加的参数
-d（在后台运行容器，守护进程）
-it（容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器）
/bin/bash（容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell（这个命令放在最后，与 -it 搭配））
--name（为容器取自定义名称）
-p 99:80（容器的 80 端口映射到本机的 99 端口）
--rm（在容器终止运行后自动删除容器文件）
-v 本机地址:容器地址（将主机的文件或目录挂载到容器里（只有一份源文件））

# 终止容器
$ docker stop 容器ID
# 终止所有容器（先查询出所有的容器ID再进行遍历终止）
$ docker stop $(docker ps -a -p)

# 强行终止容器（杀死容器）
$ docker kill 容器ID

# 启动已经生成、已经停止运行的容器
$ docker start 容器ID

# 将一个运行态的容器终止，然后再重新启动它
$ docker restart 容器ID

# 删除一个已经终止的容器
$ docker rm 容器ID

# 进入一个正在运行的 docker 容器
$ docker exec -it 容器ID /bin/bash
# 如果 docker run 命令运行容器的时候，没有使用 -it 参数，就要用这个命令进入容器。一旦进入了容器，就可以在容器的 Shell 执行命令了

# 在主机与容器之间拷贝文件/目录
$ docker cp 主机路径 容器ID:容器路径
$ docker cp 容器ID:容器路径 主机路径

# 将容器打包为镜像
$ docker commit -m "说明" -a "作者" 容器ID 镜像名:Tag

# 删除本地镜像
$ docker rmi 镜像ID/镜像名:Tag

# 查看日志
$ docker logs 容器ID
# 查看实时日志（可以看到实时动态过程日志）
$ docker logs -f 容器ID
# 查看日志（最后10行）
$ docker logs -f --tail=10 容器ID
# 指定日期查看日志
$ docker logs -f -t --since="2021-11-24" 容器ID
```

