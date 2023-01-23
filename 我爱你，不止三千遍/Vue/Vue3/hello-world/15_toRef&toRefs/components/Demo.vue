<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
    name: 'Demo',
    setup() {
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        });

        // person.name 得到的是一个普通 “值”（不具备响应式）
        // 原因：拷贝对象内的某个属性，拷贝的是 “值” 副本！
        // const name1 = person.name;
        // console.log(name1);	// '张三'

        // toRef 可以把一个对象里的 “值” 转为 ref 对象（具备响应式）
        // const name2 = toRef(person, 'name');
        // console.log(name2);	// RefImpl 对象

        // toRefs 可以可以批量创建多个 ref 对象
        // const p = toRefs(person);
        // console.log(p);  // 一个对象，里面的每个属性都是一个 RefImpl 对象（深层次响应式）

        return {
            person,
            // name: toRef(person, 'name'),
            // age: toRef(person, 'age'),
            // job: toRef(person, 'job'),
            // salary: toRef(person.job.j1, 'salary'),
            // 注意：这么写是错误的！salary: toRef(person, 'job.j1.salary'),
            ...toRefs(person)
        };

        // 注意：千万不要陷入以下误区！
        // return {
        //     name: ref(person.name),
        //     age: ref(person.age),
        //     job: ref(person.job),
        //     job: ref(person.job.j1.salary)
        // };
        // 这样是不对！因为 person.xxx 得到的是一个 “普通值”！再 ref() 后得到的是一个全新的 ref 对象
        // 这个全新的 ref 对象与原本的 person 已经完全 “分家了”！
        // 而 toRef 和 toRefs 却不同，它们是直接把 person 对象里属性的[引用]转为 ref 对象！
    }
};
</script>

<template>
    <h4>{{ person }}</h4>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
