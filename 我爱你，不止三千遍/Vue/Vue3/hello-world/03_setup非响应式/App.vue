<script>
export default {
    name: 'App',
    setup() {
        // 数据
        let name = '张三';
        let age = 18;

        // 方法
        function changeInfo() {
            name = '李四';
            age = 81;
            console.log(`${name}：${age}`);
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
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeInfo">修改信息</button>
</template>

<style scoped></style>
