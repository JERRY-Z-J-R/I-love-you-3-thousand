<script>
// 引入 ref
import { ref } from 'vue';
export default {
    name: 'App',
    setup() {
        // 数据
        let name = ref('张三');
        let age = ref(18);
        // 对象类型数据
        let job = ref({
            tpye: '前端工程师',
            salary: '40K'
        });

        // 方法
        function changeInfo() {
            name.value = '李四';
            age.value = 81;
            console.log(job);
            console.log(job.value);
            // 对象类型数据的内层属性(元素)不用加 .value
            // job.value.tpye.value = 'UI设计师';
            // job.value.salary.value = '60K';
            job.value.tpye = 'UI设计师';
            job.value.salary = '60K';
        }

        // 返回对象（对象里的内容可以在模板中直接使用）
        return {
            name,
            age,
            job,
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
    <h2>工种：{{ job.tpye }}</h2>
    <h2>薪水：{{ job.salary }}</h2>
    <button @click="changeInfo">修改信息</button>
</template>

<style scoped></style>
