<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>当前求和为：{{ number }}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentlName">把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男',
            number: 0
        };
    },
    methods: {
        add() {
            this.number++;
        },
        sendStudentlName() {
            // 触发 Student 组件实例身上的 atguigu 事件，同时传递参数
            this.$emit('atguigu', this.name, 666, 888, 999);
        },
        // 哪个组件上的自定义事件就在哪个组件上解绑
        unbind() {
            this.$off('atguigu'); // 解绑一个自定义事件
            // this.$off(['atguigu', 'demo', 'demo2']); // 解绑多个自定义事件
            // this.$off(); // 解绑所有的自定义事件
        },
        death() {
            // 销毁了当前 Student 组件的实例，销毁后 Student 实例的自定义事件便会全都不奏效。
            // 注意：Vue 原生事件依旧可以调用（例如 @click）（因为 Vue 原生事件其实也是用 DOM 事件封装的，DOM 事件注册了是不会被销毁的）
            this.$destroy();
        }
    }
};
</script>

<style lang="scss" scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>
