<script>
import { ref } from 'vue';
export default {
    name: 'App',
    setup() {
        // 数据
        let name = ref('张三');
        let age = ref(18);

        // 方法
        function changeInfo() {
            name.value = '李四';
            age.value = 81;
        }

        // 返回对象（对象里的内容可以在模板中直接使用）
        return {
            name,
            age,
            changeInfo
        };
    }
};
</script>

<template>
    <h1>个人信息</h1>
    <!-- 模板中不需要 .value，Vue3 会帮我们自动检测并加工 -->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeInfo">修改信息</button>
</template>

<style scoped></style>
