// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 安装：https://element.eleme.cn/#/zh-CN/component/installation
// 引入：https://element.eleme.cn/#/zh-CN/component/quickstart

// 完整引入
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
// 首先：需要在 .babelrc 中配置：
/*
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
 */
// 新版的 vue-cli 已经没有了 .babelrc 文件，应该在 babel.config.js 中配置：
/*
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        ["@babel/preset-env", {"modules": false}]
    ],
    plugins: [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}
 */
// 单独引入需要的组件
import {Button, Row, DatePicker} from 'element-ui';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 应用ElementUI
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})
