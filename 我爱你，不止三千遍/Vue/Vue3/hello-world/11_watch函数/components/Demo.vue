<script>
// 引入 ref reactive watch
import { ref, reactive, watch } from 'vue';
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

        // watch 监视（情况1：监视 ref 定义的一个响应式数据）
        // 参数1：被监视的数据
        // 参数2：回调函数（监视逻辑）
        // 参数3：配置对象（没有配置可以不写该参数）
        watch(
            sum,
            (newValue, oldValue) => {
                console.log('--------------1--------------');
                console.log('sum变了！', newValue, oldValue);
            },
            { immediate: true }
        );

        // watch 监视（情况2：监视 ref 定义的多个响应式数据）
        // 参数1：被监视的数据数组
        // 参数2：回调函数（监视逻辑）
        // 参数3：配置对象
        // 当然，我们也可以写多个 watch，分别对 sum msg 进行监视，不过某些情况下将其组合起来更合理
        watch([sum, msg], (newValue, oldValue) => {
            // newValue 及 oldValue 也是数组！
            console.log('--------------2--------------');
            console.log('sum或msg变了！', newValue, oldValue);
            console.log('sum变了！', newValue[0], oldValue[0]);
            console.log('msg变了！', newValue[1], oldValue[1]);
        });

        // watch 监视（情况3：监视 reactive 定义的一个响应式对象）
        // 参数1：被监视的对象
        // 参数2：回调函数（监视逻辑）
        // 参数3：配置对象
        // 注意1：此处 oldValue 无法获取到正确的值！（底层语法实现的锅！暂时无法解决！）
        // 注意2：对于 reactive 对象，watch 默认就是深度监视的！并且 deep 设置在这里也不生效！比如我们配置 {deep: false} 是不会关闭深度监视的！
        watch(person, (newValue, oldValue) => {
            // newValue 和 oldValue 都是一个 Proxy 对象！
            // oldValue 的值是不正确的（oldValue 的值与 newValue 的值一模一样）！
            console.log('--------------3--------------');
            console.log('person变了！', newValue, oldValue);
        });
        // }, { deep: false }); // 对于 reactive 对象，watch 默认就是深度监视的！并且也关闭不了！
        // 注意：即便将对象用 ref 定义也不行！因为 ref 处理对象依旧是调用 reactive 来实现的！

        // watch 监视（情况5：监视 reactive 定义的一个响应式对象中的某个属性）
        // 参数1：被监视的对象某个属性（回调函数包裹）
        // 参数2：回调函数（监视逻辑）
        // 参数3：配置对象
        // watch 第一个参数只能接受 getter/effect 函数；ref 值；reactive 对象；或者是以上类型构成的数组！
        // 所以，如果我们监视的是一个对象里的属性，那么我们必须要用回调函数进行包装，例如：() => person.name
        watch(
            () => person.name,
            (newValue, oldValue) => {
                console.log('--------------5--------------');
                console.log('name变了！', newValue, oldValue);
            }
        );

        // watch 监视（情况6：监视 reactive 定义的一个响应式对象的某些属性）
        // 参数1：被监视的对象的某些属性（数组，元素为回调函数包裹的对象属性）
        // 参数2：回调函数（监视逻辑）
        // 参数3：配置对象
        watch([() => person.name, () => person.age], (newValue, oldValue) => {
            console.log('--------------6--------------');
            console.log('person的name或age变了！', newValue, oldValue);
            console.log('name变了！', newValue[0], oldValue[0]);
            console.log('age变了！', newValue[1], oldValue[1]);
        });

        // watch 监视（情况7：监视 reactive 定义的一个响应式对象中的某个属性，且该属性是一个对象或数组）
        // 参数1：被监视的对象某个属性（回调函数包裹）
        // 参数2：回调函数（监视逻辑）
        // 参数3：配置对象
        // 注意：当我们监视的是 reactive 对象中的某个对象(数组)属性时，如果我们修改了该对象(数组)属性的内部属性(元素)时，监视是不起作用的！因为此时没有深度监视！
        // 解决办法：手动配置上 deep: true
        watch(
            () => person.job,
            (newValue, oldValue) => {
                console.log('--------------7--------------');
                console.log('job.j1.salary的变了！', newValue, oldValue);
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
</template>
