// 该文件用于创建 Vuex 中最为核心的 Store
// 注意：如果确定要用 Vuex 来管理数据，那么请把对数据的操作逻辑也尽可能全部在 Vuex 中实现，而不要 Vuex 实现一部分，组件还要依赖某些具体的逻辑来调用 API，这样的代码复用性与可读性都不好！
// 引入 Vue
import Vue from 'vue';
// 引入 Vuex
// 安装：npm i vuex@3
// 注意：目前 Vue 默认版本已经是 Vue3，Vuex 的默认版本是 Vuex4，而 Vuex4 只支持 Vue3，所以我们安装指定的 Vuex3 版本，才能在 Vue2 中使用
import Vuex from 'vuex';
// 应用 Vuex 插件
// 之所以在 /store/index.js 中 Vue.use(Vuex) 插件，是因为 Store 实例创建之前必须先 Vue.use(Vuex)
// 如果我们把 Vue.use(Vuex) 写在 main.js 中，那么其实在执行 Vue.use(Vuex) 之前，main.js 已经把 import store from './store' 都执行完了，Store 实例已经创建了，所以肯定会报错！
// 提示：我们在 main.js 中把 Vue.use(Vuex) 写在 import store from './store' 之前也没有用，因为 import 语句是优先执行的！
Vue.use(Vuex);
// 应用 Vuex 插件之后，并在 main.js 中配置 store，那么 vm 与 vc 上就都有 $store 了！

// 准备 Actions ———— 用于响应组件中的动作
const actions = {
    // 普通的 + 和 - 由于 “原始动作数据” === “最终动作数据”，所以可以直接跳过 Actions
    /*
    jia(context, value) {
        console.log('Actions 中的 jia 被调用了');
        context.commit('JIA', value);
    },
    jian(context, value) {
        console.log('Actions 中的 jian 被调用了');
        context.commit('JIAN', value);
    },
    */
    jiaOdd(context, value) {
        // context：【翻译：上下文】，这个参数是一个对象，里面包含了 state getters commit() dispathc() 等属性和方法
        // value：这个参数就是我们 $store.dispatch('jiaOdd', 数据) 中的 “数据”
        console.log('Actions 中的 jiaOdd 被调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        console.log('Actions 中的 jiaWait 被调用了');
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500);
    }
    // context 中除了常用的 commit() 外，还有 dispathc() 方法
    // dispathc() 不是 this.$store.dispatch() 上调用的吗？这里咋又有呢？
    // 提供 dispathc() 方法的原因在于，当需要多个 Actions 进行处理时，我们可以在一个 Action 处理完后转发给下一个 Action 继续处理！牛啊！
    // 比如某个 Action 中的逻辑太复杂，那么我们可以将其拆分为多个 Action，逐一处理！^^
};

// 准备 Mutations ————— 用于操作数据（State）
const mutations = {
    // Mutations 中的函数名采用大写（约定风格）
    JIA(state, value) {
        console.log('Mutations 中的 JIA 被调用了');
        state.sum += value;
    },
    JIAN(state, value) {
        console.log('Mutations 中的 JIAN 被调用了');
        state.sum -= value;
    }
};

// 准备 State ———— 用于存储数据
const state = {
    sum: 0 // 当前的和
};

// 创建并暴露 Store
export default new Vuex.Store({
    actions,
    mutations,
    state
});
