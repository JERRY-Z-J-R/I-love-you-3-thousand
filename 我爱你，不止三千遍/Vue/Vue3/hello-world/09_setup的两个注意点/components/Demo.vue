<script>
import { reactive } from 'vue';
export default {
    name: 'Demo',
    // 组件内部也要配置相应的 props:[] 进行接受，如果不配置会发出警告！
    props: ['msg', 'school'],
    // 组件内部也要配置相应的 emit:[] 进行声明自定义事件，如果不配置会发出警告！
    emits: ['hello'],
    setup(props, context) {
        console.log(this); // undefined（在 setup 中我们使用不到 this）
        console.log(props);
        console.log(context);
        console.log(context.attrs); // 相当与 Vue2 中的 this.$attrs
        console.log(context.slots); // 插槽，相当与 Vue2 中的 this.$slots
        console.log(context.emit); // 触发自定义事件的，相当与 Vue2 中的 this.$emit

        // 数据
        let person = reactive({
            name: '张三',
            age: 18
        });

        // 方法
        function test() {
            context.emit('hello', 666);
        }

        // 返回一个对象
        return {
            person,
            test
        };
    }
};
</script>

<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>
