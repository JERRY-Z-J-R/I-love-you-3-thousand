<script>
export default {
    name: 'App',
    setup() {
        // 数据
        let name = '张三';
        let age = 18;

        // 方法
        function sayHello() {
            alert(`我叫 ${name}，我 ${age} 岁了……`);
        }

        // 返回对象（对象里的内容可以在模板中直接使用）
        return {
            name,
            age,
            sayHello
        };

        // 返回渲染函数（了解即可）
        // 前提：import {h} from 'vue'
        // 渲染内容会替换模板中的全部内容
        // return h('h1', '尚硅谷');
    }
};
</script>

<template>
    <h1>个人信息</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sayHello">说话</button>
</template>

<style scoped></style>
