<script>
import { ref } from 'vue';
export default {
    name: 'Child',
    // 异步组件中，setup 前可以使用 async
    async setup() {
        let sum = ref(0);
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ sum });
            }, 3000);
        });
        return await p;
    }
};
</script>

<template>
    <div class="child">
        <h3>我是Child组件</h3>
        {{ sum }}
    </div>
</template>

<style>
.child {
    background-color: skyblue;
    padding: 10px;
}
</style>
