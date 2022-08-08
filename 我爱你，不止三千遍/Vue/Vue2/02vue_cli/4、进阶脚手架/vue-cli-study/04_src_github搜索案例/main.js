import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})

/*
补充：由于本案例用到了 bootstrap.css，所以我们必须进行引入
如果我们把 bootstrap.css 放在 assets/css 中，然后用 import 引入，那么会报错，因为 import 的引入方式会去检查 bootstrap.css 中的依赖
而 bootstrap.css 中用到了许多的字体文件，我们并没有，所以就会报错。
更好的方法是，将 bootstrap.css 放在 public/css 中，然后在 index.html 中用 <link> 标签引入
 */