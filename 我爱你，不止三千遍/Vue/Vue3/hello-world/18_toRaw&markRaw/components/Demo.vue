<template>
    <h4>当前求和为：{{ sum }}</h4>
    <button @click="sum++">点我++</button>
    <hr />
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <h3 v-show="person.car">座驾信息：{{ person.car }}</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一台车</button>
    <button @click="person.car.name += '!'">换车名</button>
    <button @click="changePrice">换价格</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue';
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

        function showRawPerson() {
            // person 被转为了一个普通对象赋值给 p
            const p = toRaw(person);
            // 普通对象不具备响应式！
            p.age++;
            console.log(p);
        }

        function addCar() {
            let car = { name: '奔驰', price: 40 };
            // markRaw 让其中的对象永远不会成为响应式的！
            person.car = markRaw(car);
        }

        function changePrice() {
            person.car.price++;
            // markRaw 标记的对象在内存中依旧是会被改的！只不过不再具备响应式！
            console.log(person.car.price);
        }

        return {
            sum,
            // 因为我们是事后向 person 里加 car 属性，如果只用 ...toRefs(person)，那么页面上用到 car 的地方是会报错的！因为根本没有 return 过 car！
            // 但是我们把 perons 整个对象交出去，person.car 没有那么就是 undefined，而不会造成报错！
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
            changePrice
        };
    }
};
</script>
