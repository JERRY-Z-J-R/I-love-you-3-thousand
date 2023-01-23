<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default {
    name: 'Demo',

    setup() {
        console.log('---setup---');

        // 数据
        let sum = ref(0);

        // 通过组合式 API 的形式去使用生命周期钩子
        onBeforeMount(() => {
            console.log('---onBeforeMount---');
        });
        onMounted(() => {
            console.log('---onMounted---');
        });
        onBeforeUpdate(() => {
            console.log('---onBeforeUpdate---');
        });
        onUpdated(() => {
            console.log('---onUpdated---');
        });
        onBeforeUnmount(() => {
            console.log('---onBeforeUnmount---');
        });
        onUnmounted(() => {
            console.log('---onUnmounted---');
        });

        return { sum };
    }
};
</script>
