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
    },
    ADD_PERSON(state, value) {
        console.log('Mutations 中的 ADD_PERSON 被调用了');
        state.personList.unshift(value);
    }
};

const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
    personList: [{ id: '001', name: '张三' }]
};

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
