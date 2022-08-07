<template>
  <div>
    <!-- assets：静态资源文件夹 -->
    <img src="./assets/logo.png" alt="logo">
    <TheSchool></TheSchool>
    <TheStudent></TheStudent>
  </div>
</template>

<script>
// 引入组件
// 如果没有在 vue.config.js 中关闭语法检查，那么 vue 默认强制组件的命名必须是多个单词，比如 School 及 Student 会报错！所以此处加了 The 前缀。
// 组件名应该始终是多个单词的，根组件 App 以及 <transition>、<component> 之类的 Vue 内置组件除外。
// 这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
// 具体约束及风格指南请查看：https://cn.vuejs.org/v2/style-guide/
// 推荐：如果找不到合适的多单词，可以在单词前面加上 项目名/业务名 前缀
import TheSchool from './components/TheSchool';
import TheStudent from './components/TheStudent';

export default {
  name: 'App',
  components: {
    TheSchool,
    TheStudent
  }
}
</script>
