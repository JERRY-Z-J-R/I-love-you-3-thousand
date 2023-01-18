<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- mapActions 与 mapMutations 使用时，若需要传递参数，那么需要：在模板中绑定事件时传递好参数，否则参数是事件对象！！！-->
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Count',
    data() {
        return {
            n: 1
        };
    },
    computed: {
        ...mapState(['sum', 'school', 'subject']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        // 程序员亲自写方法
        /*
        increment() {
            this.$store.commit('JIA', this.n);
        },
        decrement() {
            this.$store.commit('JIAN', this.n);
        },
         */

        // mapActions 与 mapMutations 使用时，若需要传递参数，那么需要：在模板中绑定事件时传递好参数，否则参数是事件对象！！！

        // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 Mutations（对象写法）
        // ...mapMutations({JIA: 'JIA', JIAN: 'JIAN'}),
        // 可以指定名称
        ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

        // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 Mutations（数组写法）
        // 数组写法前提是名称相同
        // ...mapMutations(['JIA', 'JIAN']),

        /* ************************************************* */

        // 程序员亲自写方法
        /*
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n);
        },
         */

        // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 Actions（对象写法）
        // ...mapActions({jiaOdd: 'jiaOdd', jiaWait: 'jiaWait'})
        // 可以指定名称
        ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' })

        // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 Actions（数组写法）
        // 数组写法前提是名称相同
        // ...mapActions(['jiaOdd','jiaWait'])
    }
};
</script>

<style lang="css">
button {
    margin-left: 5px;
}
</style>
