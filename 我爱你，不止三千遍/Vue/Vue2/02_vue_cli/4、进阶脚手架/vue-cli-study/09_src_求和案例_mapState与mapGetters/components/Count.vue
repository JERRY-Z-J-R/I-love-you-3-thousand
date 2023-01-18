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
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
// 引入 mapState, mapGetters
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'Count',
    data() {
        return {
            n: 1
        };
    },
    computed: {
        // 我们通常不在组件中直接利用 this.$store.state 或 this.$store.getters 的方式去读写数据，而是进行封装后再用！
        // 这样的好处有：1、可读性更强 2、减少硬编码成本 3、开发者工具可以监测到”计算属性“中的配置是来自 Vuex 的！！！

        // 方式一：靠程序员自己亲自去写计算属性
        /*
        sum() {
          return this.$store.state.sum;
        },
        school() {
          return this.$store.state.school;
        },
        subject() {
          return this.$store.state.subject;
        },
         */

        // 方式二：借助 mapState 生成计算属性，从 State 中读取数据
        // 原理：Vuex 提供了 mapState API，可以把 State 中的数据提取成一个一个的计算属性函数返回（用一个对象包裹）
        // 而 ES6 的 ... 表达式可以将一个对象的所有内容都放到另一个对象中
        // 所以，...mapState 相当于 Vuex 帮我们自动写了计算属性
        /* ...实例：
            let obj2 = {x:100, y:200};
            let obj1 = {
                a:1,
                ...obj2,
                b:2
            };
            console.log(obj1);  // {a:1,x:100,y:200,b:2}
        */

        // 【对象写法】
        // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
        // 计算属性名可以另外取
        // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),

        // 【数组写法】
        // 注意：数组写法的前提是：计算属性名与 State 中的数据名相同
        ...mapState(['sum', 'school', 'subject']),

        /* ******************************************************************** */

        // Getters 也是同理：
        /*
        // 方式一：靠程序员自己亲自去写计算属性
        bigSum() {
          return this.$store.getters.bigSum;
        },
         */

        // 方式二：借助 mapGetters 生成计算属性，从 Getters 中读取数据（对象写法）
        // ...mapGetters({bigSum: 'bigSum'}),

        // 数组写法
        ...mapGetters(['bigSum'])
    },
    methods: {
        increment() {
            this.$store.commit('JIA', this.n);
        },
        decrement() {
            this.$store.commit('JIAN', this.n);
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n);
        }
    }
};
</script>

<style lang="css">
button {
    margin-left: 5px;
}
</style>
