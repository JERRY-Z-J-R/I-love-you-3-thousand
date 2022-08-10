// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入模块
import countOptions from './count'
import personOptions from './person'
// 应用Vuex插件
Vue.use(Vuex);
// Vuex 模块化的意义在于：封装不同的业务数据及操作（提高可读性、提高可维护性、防止命名冲突……）

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})