<template>
    <!-- vue2 必须有一个根标签包裹，通常我们用 div -->
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
import School from './School.vue';
import Student from './Student.vue';

// App 组件是汇总组件，一定要有！！！
export default {
    name: 'App',
    components: {
        School,
        Student
    }
};
</script>
