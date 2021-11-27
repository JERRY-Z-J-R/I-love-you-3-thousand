# Docker 使用小结

> 此处以利用 Docker 配置一个 Node.Js 容器并运行一个 Vue 项目为例。

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

> 若刚才使用 pull 命令去拉去镜像的话，此步可以跳过。

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

> 由于启动容器的同时应该将主机上的项目文件挂载进容器里，所以在启动容器的同时使用 `-v` 命令来将本机上的 vue 项目挂载进容器中。本机 vue 项目路径为：`/mnt/f/front-end-of-online-classroom`

```shell
$ docker run -it -p 99:80 -v /mnt/f/front-end-of-online-classroom:/usr/front-end-of-online-classroom 5f26022d0c60 bash 
```

输入以上命令之后，便成功启动了容器并进入了容器的终端……

```shell
root@f005399b6c73:/# ls
bin   dev  home  lib64  mnt  proc  run   srv  tmp  var
boot  etc  lib   media  opt  root  sbin  sys  usr
root@f005399b6c73:/# node -v
v16.13.0
root@f005399b6c73:/# cd usr
root@f005399b6c73:/usr# ls
bin  front-end-of-online-classroom  games  include  lib  local  sbin  share  src
root@f005399b6c73:/usr# cd front-end-of-online-classroom
root@f005399b6c73:/usr/front-end-of-online-classroom# ls
README.md        favicon.ico  package.json  src  babel.config.js  
index.html   package-lock.json  public        vue.config.js
root@f005399b6c73:/usr/front-end-of-online-classroom#
```

可以看到，容器中已经成功挂载了主机上的 vue 项目。

### 五、配置 vue 启动环境

```shell
# 在 /usr/front-end-of-online-classroom 路径下
$ npm install
$ npm i node-sass -D --verbose
$ npm rebuild node-sass
```

若成功配置，执行后目录下将成功生成一个 `node_modules` 文件。

### 六、启动 vue 项目

```shell
$ npm run serve
```

成功启动项目……

```
> dj_works@0.1.0 serve
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

> 由于 `http://localhost:80/` 这里的端口是容器里的，而我们改才将容器里的 `80` 端口映射到了主机上的 `99` 端口，所以我们在主机上访问 `http://localhost:99/` 便可以成功打开 vue 项目了。

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

> 注意由于是将主机上的 `front-end-of-online-classroom` 挂载到容器里（只有主机上唯一的一份源文件，容器只是单纯的做了一个映射），所以将容器打包为镜像后，这个镜像中是不包含项目代码及 vue 启动环境的！（之所以不包含 vue 启动环境是因为配置 vue 启动环境的时候是在 `front-end-of-online-classroom` 路径下配置的，是配置在了主机的真实文件上，并不在容器中）。

### 八、命令小结

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
```

