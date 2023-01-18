import Vue from 'vue';
import Vuex from 'vuex';
// 引入模块
// Vuex 模块化的意义在于：封装不同的业务数据及操作（提高可读性、提高可维护性、防止命名冲突……）
import countOptions from './count';
import personOptions from './person';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
});
