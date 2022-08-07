<template>
  <div>
    <h1 class="title">你好啊</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
// 如果样式不加 scoped，那么同名的样式选择器，后引入的会覆盖前引入的
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: {School, Student}
}
</script>

<!-- 在 APP 组件中，一般不需要加 scoped，因为一般 APP 中的样式都是全局的，其它组件一般也应该接受 -->
<!-- 当 APP 组件样式与其它组件样式冲突时，其它组件样式优先级更高！ -->
<style>
.title {
  color: red;
}
</style>
