/**
 * vue.config.js：Vue-CLI 可选的配置文件，该文件的配置最终会合并到 webpack 的配置中
 * vue-cli 默认已经配置好了 webpack，但是出于安全考虑并不暴露其配置（我们看不见 webpack.config.js），只能借助 vue.config.js 进行配置并合并到 webpack 配置中
 * 附：使用 vue inspect > output.js 可以生成一个 output.js 文件，就可以查看到 vue-cli 的默认配置（webpack.config.js 中的配置），但是修改不会生效！
 * 参考文档：https://cli.vuejs.org/zh/config/
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖
    transpileDependencies: true,
    lintOnSave: false // 是否开启语法检测（这是使用 ESLint 推荐规范来规范代码编写，一般情况下我们是关闭的！虽然开启后能让我们的代码质量大大提高，但是对于学习阶段不太熟悉 ESLint 规则的人来说，开启之后警告和报错太多了！）
    // 在实际团队开发中，语法检测更多的是使用所在团队制定的 ESLint 规范，而不是直接采用默认推荐规范！
    /*
    配置举例：
    pages: {
        index: {
            // 这里可以写一条到多条配置，但是不能为空，为空时就认为全部配置项都为空！会直接报错！
            // 入口文件
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 打包项目时，在 dist 中 html 文件的文件名
            filename: 'index.html',
            // 浏览器页签标题，当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'hello-world'
        }
    }
    */
});
