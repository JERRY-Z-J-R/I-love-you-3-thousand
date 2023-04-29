<template>
    <div>
        <!-- 父组件可以在调用子组件时传递值给子组件，在子组件内用 props 配置项接收 -->
        <!--
        不加冒号，那么默认传递的都是字符串格式，
        加了冒号那么就是绑定值（其类型及值便是引号内部表达式的计算值）
        -->
        <Student name="李四" :sex="female" :age="18" />
        <Student name="老王" :sex="male" :age="24" />
        <Teacher name="语文老师" :age="50" />
        <Teacher name="数学老师" :age="40" />
    </div>
</template>

<script>
import Student from './components/Student';
import Teacher from './components/Teacher.vue';

export default {
    name: 'App',
    data() {
        return {
            female: '女',
            male: '男'
        };
    },
    components: {
        Student,
        Teacher
    }
};
</script>
