import Vue from 'vue';
import App from './App.vue';
import { hunhe, hunhe2 } from './mixin';

Vue.config.productionTip = false;

// 全局混入（Root、App、School、Student）
// 写在 new Vue 前
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

new Vue({
    render: h => h(App)
}).$mount('#app');
