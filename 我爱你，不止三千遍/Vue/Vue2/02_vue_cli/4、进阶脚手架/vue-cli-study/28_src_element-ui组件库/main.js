// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 安装文档：https://element.eleme.cn/#/zh-CN/component/installation
// 引入文档：https://element.eleme.cn/#/zh-CN/component/quickstart

// 完整引入 ElementUI 组件库
// import ElementUI from 'element-ui';
// 完整引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// ----------------------------------------------------------------

// 按需引入
// 第一步：需要在 .babelrc 中配置：
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
// 注意：新版的 vue-cli 已经没有了 .babelrc 文件，应该在 babel.config.js 中配置：
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

// 第二步：单独引入需要的组件
import { Button, Row, DatePicker } from 'element-ui';

Vue.config.productionTip = false;

// 应用完整的 ElementUI
// Vue.use(ElementUI);

// 第三步：注册全局组件（按需应用 ElementUI）
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
// 说明：Vue.component() 的第一个参数是可以自定义的，这里 Button.name 就是 ElementUI 提供的组件名 <el-button>
//      我们可以自定义名称，比如 Vue.component(yyds-btn, Button)，那么组件就变成了 <yyds-btn>

new Vue({
    el: '#app',
    render: h => h(App)
});
