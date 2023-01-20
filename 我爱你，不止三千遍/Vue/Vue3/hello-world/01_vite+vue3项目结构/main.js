// 引入的不再是 Vue 构造函数了，而是一个名为 createApp 的工厂函数
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 支持引入 CSS 文件（全局生效）
import './assets/main.css';

// 创建应用实例对象（类似 Vue2 中的 vm，但比 vm 更“轻”）
// “轻”：更少、更精简、更合理、更高效的属性和方法（见图）
const app = createApp(App);

app.use(router);

// 挂载到 index.html 中的 #app 上
app.mount('#app');
// 对应的还有一个 unmount 卸载方法
