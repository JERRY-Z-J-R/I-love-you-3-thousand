<script>
// 引入 ref reactive
import { ref, reactive } from 'vue';
export default {
    name: 'App',
    setup() {
        // 数据
        let name = ref('张三');
        let age = ref(18);
        // 对象类型数据
        // ref 方法
        // let job = ref({
        //     tpye: '前端工程师',
        //     salary: '40K'
        // });
        // reactive 方法
        let job = reactive({
            tpye: '前端工程师',
            salary: '40K',
            address: ['北京', '上海'],
            family: {
                mom: {
                    name: '妈妈',
                    age: 50
                }
            }
        });
        let hobby = ['抽烟', '喝酒', '烫头'];

        // 方法
        function changeInfo() {
            name.value = '李四';
            age.value = 81;
            // job.value.tpye = 'UI设计师';
            // job.value.salary = '60K';
            job.tpye = 'UI设计师';
            job.salary = '60K';
            // reactive 定义的响应式数据是 “深层次的”！
            job.address[0] = '深圳';
            job.address[1] = '杭州';
            // reactive 定义的响应式数据是 “深层次的”！
            job.family.mom.name = '母亲';
            job.family.mom.age = 60;
            hobby[0] = '学习';
            hobby[1] = '运动';
            hobby[2] = '做饭';
        }

        // 返回对象（对象里的内容可以在模板中直接使用）
        return {
            name,
            age,
            job,
            hobby,
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
    <h2>地点：{{ job.address }}</h2>
    <h2>家人：{{ job.family }}</h2>
    <h2>爱好：</h2>
    <li v-for="(data, index) in hobby" :key="index">{{ data }}</li>
    <br />
    <button @click="changeInfo">修改信息</button>
</template>

<style scoped></style>
