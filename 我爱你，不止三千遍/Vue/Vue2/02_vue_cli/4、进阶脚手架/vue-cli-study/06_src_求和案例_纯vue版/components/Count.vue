<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <!-- 默认获取到的 value 是字符串值，后面运算中会出错，解决办法： -->
        <!-- 1、:value="1"（双向绑定的内容作为表达式解析，但是犯不上这样写！） -->
        <!-- 2、v-model.number="n"（利用 number 修饰符，推荐！）-->
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
            n: 1, // 用户选择的数字
            sum: 0 // 当前的和
        };
    },
    methods: {
        increment() {
            this.sum += this.n;
        },
        decrement() {
            this.sum -= this.n;
        },
        incrementOdd() {
            if (this.sum % 2) {
                this.sum += this.n;
            }
        },
        incrementWait() {
            setTimeout(() => {
                this.sum += this.n;
            }, 500);
        }
    }
};
</script>

<style lang="css">
button {
    margin-left: 5px;
}
</style>
