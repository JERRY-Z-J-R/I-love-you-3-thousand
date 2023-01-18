<template>
    <div>
        <!-- 在模板中可以直接访问 vm vc 的值所以不用在前面加上 this -->
        <h1>当前求和为：{{ $store.state.sum }}</h1>
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
export default {
    name: 'Count',
    data() {
        return {
            n: 1 // 用户选择的数字
        };
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
    },
    mounted() {
        // this 上会出现 $store
        console.log('Count', this);
    }
};
</script>

<style lang="css">
button {
    margin-left: 5px;
}
</style>
