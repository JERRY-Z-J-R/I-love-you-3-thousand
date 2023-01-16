import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
})

/*
浏览器存在同源策略
即：如果 前端地址 与 请求接口地址 不在同一个域下，那么浏览器就会拒收服务端响应来的信息
（不同域：协议、域名/ip、端口，只要有一个不同就算是不同域）

解决办法：
1、后端的解决办法：【CORS 跨域资源共享】让后端在响应头信息中加上：Access-Control-Allow-Origin: *
2、前端的解决办法：【配置代理服务器】
    原理：在前端与后端之间配置一个代理服务器，让这个代理服务器接收前端的请求并转发给后端，接收后端的响应又转发给前端
         由于，服务器与服务器之间并不存在同源策略，所以代理服务器可以尽情地接收后端的响应数据，
         并且，这个代理服务器与前端是同一个域下的，所以又可以尽情地把收到的响应数据转发给前端。
    方法：我们可以利用 Nginx 来配置代理服务器，但是配置过程较为复杂，而 Vue-cli 已经为我们提供了代理服务器的实现，在 vue.config.js 中配置即可！
 */