<script>
// 注意：Vite 默认不会自动补全 .vue 后缀，我们需要手动加上
import Demo from './components/Demo.vue';
export default {
    name: 'App',
    components: { Demo },
    setup() {
        function showHelloMsg(value) {
            alert(`你好啊，你触发了自定义事件，我收到的参数是: ${value}！`);
        }
        return {
            showHelloMsg
        };
    }
};
</script>

<template>
    <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷">
        <template v-slot:qwe>
            <span>尚硅谷</span>
            <span>尚硅谷</span>
        </template>
        <template v-slot:asd>
            <span>谢谢你</span>
            <span>谢谢你</span>
        </template>
    </Demo>
</template>
