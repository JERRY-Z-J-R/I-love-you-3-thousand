<template>
    <div>
        <h1 class="title">你好啊</h1>
        <School />
        <Student />
    </div>
</template>

<script>
// 子组件中的样式最终都是合并到一块的！
// 如果样式不加 scoped，那么同名的样式选择器，后引入的会覆盖前引入的！
// 比如此处，School 就会覆盖 Student 的！
// 注意：和配置项中 components 的顺序无关，和 import 的顺序有关！
import Student from './components/Student';
import School from './components/School';

export default {
    name: 'App',
    components: { School, Student }
};
</script>

<!-- 在 APP 组件中，一般不需要加 scoped，因为一般 APP 中的样式都是全局的，其它组件一般也应该接受 -->
<!-- 当 APP 组件样式与其它组件样式冲突时，其它组件样式优先级更高！ -->
<style>
.title {
    color: red;
}
</style>
