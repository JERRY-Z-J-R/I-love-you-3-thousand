import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    /*
    // 3 秒后销毁 vm 及子组件 vc 及其自定义事件（原生 DOM 事件不受影响）
    mounted() {
      setTimeout(()=>{
        this.$destroy()
		}, 3000)
	}
	*/
})