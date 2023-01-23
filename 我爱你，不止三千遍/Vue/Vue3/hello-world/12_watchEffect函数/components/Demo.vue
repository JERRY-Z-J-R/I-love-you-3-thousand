<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <hr />
    <h2>当前信息为：{{ msg }}</h2>
    <button @click="msg += '~'">点我修改</button>
    <br />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}K</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">年龄+1</button>
    <button @click="person.job.j1.salary++">薪资+1</button>
    <button
        @click="
            person.job = {
                j1: {
                    salary: 24
                }
            }
        "
    >
        直接替换person.job对象
    </button>
</template>

<script>
// 引入 ref reactive watchEffect
import { ref, reactive, watchEffect } from 'vue';
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0);
        let msg = ref('你好！');
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        });

        // 执行时间：初始化时自动执行一次，所用到的数据变化时自动执行一次
        watchEffect(
            () => {
                let s = sum.value;

                // 特别注意：watchEffect 不具备深度监视能力！
                // person 内的属性变化是监测不到的！（除非直接替换了 person 对象，即发生引用内存改变）
                // let p = person;

                // 只能监测单层数据
                let pn = person.name;

                // person.job 内的属性变化是监测不到的！（除非直接替换了 person.job 对象，即发生引用内存改变）
                let pj = person.job;

                // person.job.j1 内的属性变化是监测不到的！（除非直接替换了 person.job.j1 对象，即发生引用内存改变）
                // let pjj = person.job.j1;

                // 只能监测单层数据
                // let pjjs = person.job.j1.salary;

                console.log('watchEffect监视到了！', s, pn, pj);
            },
            { deep: true }
        );

        return {
            sum,
            msg,
            person
        };
    }
};
</script>
