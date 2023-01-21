<template>
    <div>
        <h1>
            {{ $attrs.name }}
        </h1>
        <h1>
            {{ age }}
        </h1>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Teacher',
    data() {
        return {
            // 通过 data 数据来接收
            // $attrs 内的属性不会出现在 this 上，所以可以同名（age）
            age: this.$attrs.age
        };
    },
    methods: {
        updateAge() {
            // 直接修改 $attrs 的属性是不会有响应式的！
            // this.$attrs.age++;
            // 这样也没用！
            // this.$set(this.$attrs, 'age', this.$attrs.age + 1);
            this.age++;
        }
    }
};
</script>

<style scoped></style>
