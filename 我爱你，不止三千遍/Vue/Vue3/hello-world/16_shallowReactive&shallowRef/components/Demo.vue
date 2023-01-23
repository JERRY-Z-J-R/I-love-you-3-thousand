<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue';
export default {
    name: 'Demo',
    setup() {
        // shallowReactive：只考虑第一层数据的响应式
        // let person = shallowReactive({
        // 	name: '张三',
        //     age: 18,
        //     job: {
        //         j1: {
        //             salary: 20
        //         }
        //     }
        // });

        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        });

        // 传入的是基本数据类型时，ref 和 shallowRef 功能一模一样！
        // 传入的是对象时，shallowRef 不进行对象的响应式处理！
        let x = shallowRef({
            y: 0
        });

        console.log(x);

        return {
            x,
            person,
            ...toRefs(person)
        };
    }
};
</script>

<template>
    <h4>当前的x.y值是：{{ x.y }}</h4>
    <button @click="x = { y: 888 }">点我替换x</button>
    <button @click="x.y++">点我x.y++</button>
    <hr />
    <h4>{{ person }}</h4>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
