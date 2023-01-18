import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const actions = {
    jiaOdd(context, value) {
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
};

const mutations = {
    JIA(state, value) {
        console.log('Mutations 中的 JIA 被调用了');
        state.sum += value;
    },
    JIAN(state, value) {
        console.log('Mutations 中的 JIAN 被调用了');
        state.sum -= value;
    }
};

const state = {
    sum: 0 // 当前的和
};
// 准备 Getters ———— 用于将 state 中的数据进行加工
// getters 也是一个配置项，但是它不是必须的
// 用途：可以把 Getters 理解为”计算属性“，把 State 的数据进行再加工
// 优点：相比于组件的计算属性来说 Getters 是所有组件都可以用的（不用每个组件都单独实现一遍），提高了复用性和封装性
// 理解：State 类似于 Data，Getters 类似于 Computed
// 推荐：对于 Vuex 管理的数据，如果需要再加工并且加工逻辑比较复杂，并且还需要复用，那么推荐使用 Getters 而不是 Computed
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
};

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
