// 该文件用于创建Vuex中最为核心的store
// 注意：如果确定要用 vuex 来管理数据，那么请把对数据的操作逻辑也尽可能全部在 vuex 中实现，而不要 vuex 实现一部分，组件还要依赖某些具体的逻辑来调用 API，这样的代码复用性与可读性都不好！
import Vue from 'vue';
// 引入Vuex
// 安装：npm i vuex@3
// 注意：目前默认版本已经是 Vue3，而 Vuex 的默认版本是 Vuex4，而 Vuex4 只支持 Vue3，所以我们安装指定的 Vuex3 版本
import Vuex from 'vuex';
// 应用Vuex插件
// 之所以在 /store/index.js 中 Vue.use(Vuex) 插件，是因为 Store 实例创建之前必须先 Vue.use(Vuex)
// 如果我们把 Vue.use(Vuex) 写在 main.js 中，那么其实在执行 Vue.use(Vuex) 之前，main.js 已经把 import store from './store' 都执行完了，Store 实例已经创建了，所以肯定会报错！
// 提示：我们在 main.js 中把 Vue.use(Vuex) 写在 import store from './store' 也没有用，因为 import 语句是优先执行的！
Vue.use(Vuex);
// 应用 Vuex 插件之后，并在 main.js 中配置 store，那么 vm 与 vc 上就都有 $store 了！

// 准备actions——用于响应组件中的动作
const actions = {
    /*
    jia(context, value){
        console.log('actions中的jia被调用了');
        context.commit('JIA', value);
    },
    jian(context, value){
        console.log('actions中的jian被调用了');
        context.commit('JIAN', value);
    },
    */
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了');
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500);
    }
}
// 准备mutations———用于操作数据（state）
const mutations = {
    // mutations 中的函数名采用大写（约定风格）
    JIA(state, value) {
        console.log('mutations中的JIA被调用了');
        state.sum += value;
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了');
        state.sum -= value;
    }
}
// 准备state————用于存储数据
const state = {
    sum: 0 // 当前的和
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})