import Vue from 'vue'
import App from './App.vue'
// 引入store
import store from './store'

Vue.config.productionTip = false;

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    store
})
