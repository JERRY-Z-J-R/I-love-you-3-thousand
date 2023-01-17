const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // 注意：配置了代理服务器后，前端中的请求地址就要同步改变（比如之前请求 127.0.0.1:5001，现在要请求 127.0.0.1:8080（前端地址及端口，因为代理服务器也在这个地址及端口上）！
    // 注意：代理服务器只会转发本地没有的资源，要是 public 目录内有的资源就会直接返回（public 目录相当于代理服务器的根目录）
    // 注意：例如 127.0.0.1:8080/test，如果刚好 public 内有 test 文件，那么请求不会走代理服务器，而是会直接返回本地文件！所以我们最好为代理服务器配置前缀！（后面讲）

    // 开启代理服务器（方式一）
    // 优点：配置简单
    // 缺点：不能配置多个代理，不能灵活地控制请求是否走代理（即：当本地已有时，不能控制其直接去访问外部）
    // 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端已有资源）
    /*
    devServer: {
        proxy: 'http://localhost:5001'
    },
    */

    // 开启代理服务器（方式二）
    // 优点：可以配置多个代理（每个代理具有前缀），且可以灵活地控制请求是否走代理
    // 缺点：配置略微繁琐，请求资源时必须加前缀
    devServer: {
        proxy: {
            // /atguigu：请求前缀
            '/atguigu': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/atguigu': '' } // 在正式发送请求时去掉前缀（正则表达式匹配替换为空字符串）
                // ws: true,                     // 用于支持 websocket
                // changeOrigin: true            // 用于控制请求头中的 host 值（当为 true 时，代理服务器会将自己的 host 设置为与请求服务器相同的 host，以确保不会被请求服务器怀疑为跨域代理的身份）
                // 这里对 changeOrigin 解释一下：
                // 当代理服务器去请求后端服务器时，如果 changeOrigin 为 false，那么代理服务器会如实设置 host 值为【前端ip:前端端口】（代理服务器就是在【前端ip:前端端口】上）
                // 如果 changeOrigin 为 true，那么代理服务器会“欺骗”的设置 host 值为【后端服务器ip:后端服务器端口】
                // 之所以要这样做，是因为有些后端服务器会验证 host 值，如果不是同源的，即便你是服务器也不给你响应数据
            },
            // /demo：请求前缀
            '/demo': {
                target: 'http://localhost:5002',
                pathRewrite: { '^/demo': '' } // 一定要设置，否则实际请求路径就错误了！
                // ws: true,                  // 默认就是 true，可以不设置
                // changeOrigin: true         // 默认就是 true，可以不设置
            }
        }
    }
});
