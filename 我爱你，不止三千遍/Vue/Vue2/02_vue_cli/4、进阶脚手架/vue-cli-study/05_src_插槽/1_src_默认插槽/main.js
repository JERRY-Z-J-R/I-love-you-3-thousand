import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
});

/*
插槽：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于 父组件 ===> 子组件
*/
