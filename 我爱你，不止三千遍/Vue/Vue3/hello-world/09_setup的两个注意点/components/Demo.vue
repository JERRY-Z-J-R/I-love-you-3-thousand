<script>
import { ref, reactive } from 'vue';
export default {
    name: 'Demo',
    // 组件内部也要配置相应的 props:[] 进行接受，如果不配置会发出警告！
    props: ['msg', 'school'],
    // 组件内部也要配置相应的 emit:[] 进行声明自定义事件，如果不配置会发出警告！
    emits: ['hello'],
    setup(props, context) {
        console.log('this', this); // undefined（在 setup 中我们使用不到 this）
        console.log('props', props); // Proxy 对象
        console.log('props.msg', props.msg); // '你好啊'
        console.log('props.school', props.school); // '尚硅谷'
        console.log('context', context); // 普通对象
        console.log('context.attrs', context.attrs); // Proxy 对象，相当与 Vue2 中的 this.$attrs
        console.log('context.slots', context.slots); // Proxy 对象，插槽，相当与 Vue2 中的 this.$slots
        console.log('context.emit', context.emit); // 触发自定义事件的，相当与 Vue2 中的 this.$emit

        // 数据
        let person = reactive({
            name: '张三',
            age: 18
        });

        // props 中的值是只读的！需要修改的话要将其用变量来重新接收
        let msg = ref(props.msg);
        // 注意：下面这种写法是错误的！因为 props 不是一个普通对象！
        // let pps = reactive(props);
        // 可以先把 props（Proxy）对象转为一个普通对象再使用 reactive()
        // let pps = reactive(toRaw(props));    // toRaw() 后面会讲
        // 或者
        // let pps = reactive(JSON.parse(JSON.stringify(props)));

        // 方法
        function test() {
            context.emit('hello', 666);
        }

        function test2() {
            // props 中的属性是只读的，不能直接修改！
            // props.msg = '尚硅谷';
            msg.value = '尚硅谷';
        }

        // 返回一个对象
        return {
            person,
            msg,
            test,
            test2
        };
    }
};
</script>

<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>{{ msg }}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
    <button @click="test2">修改msg</button>
</template>
