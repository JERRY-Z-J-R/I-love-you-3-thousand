// 求和相关的配置
export default {
    namespaced: true, // 开启命名空间
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            console.log('Mutations 中的 JIA 被调用了');
            state.sum += value;
        },
        JIAN(state, value) {
            console.log('Mutations 中的 JIAN 被调用了');
            state.sum -= value;
        }
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    }
};
