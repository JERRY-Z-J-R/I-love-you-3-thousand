/**
 * vue.config.js：Vue-CLI 可选的配置文件，该文件的配置最终会合并到 webpack 的配置中
 * vue-cli 默认已经配置好了 webpack，但是出于安全考虑并不暴露其配置，只能借助 vue.config.js 进行配置并合并到 webpack 配置中
 * 附：使用 vue inspect > output.js 可以查看到 vue-cli 的默认配置，但是修改不会生效！
 * 参考文档：https://cli.vuejs.org/zh/config/
 */
const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖
    transpileDependencies: true,
    lintOnSave: false,     // 是否开启语法检测
    /*
    pages: {
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: 'src/subpage/main.js'
    }
    */
})
