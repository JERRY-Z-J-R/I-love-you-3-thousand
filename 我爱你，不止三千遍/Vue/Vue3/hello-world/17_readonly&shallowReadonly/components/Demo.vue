<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue';
export default {
    name: 'Demo',
    setup() {
        let sum = ref(0);
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        });

        // 对于对象来说：readonly（深只读，所有内容都读不了），shallowReadonly（浅只读，只有第一层内容读不了）
        // person = readonly(person);
        person = shallowReadonly(person);

        // 对于普通数据来说：readonly 和 shallowReadonly 作用是一模一样的！
        sum = readonly(sum);
        // sum = shallowReadonly(sum);

        return {
            sum,
            ...toRefs(person)
        };
    }
};
</script>

<template>
    <h4>当前求和为：{{ sum }}</h4>
    <button @click="sum++">点我++</button>
    <hr />
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
