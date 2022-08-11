<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  // 用 props 接收参数
  props: ['id', 'title'],
  computed: {
    // 路由的props配置，作用：让路由组件更方便地收到参数
    // 其实，用计算属性来封装也可以让路由组件更方便地收到参数，但其实这是本末倒置的，因为计算属性写起来也冗余
    // id(){
    // 	return this.$route.query.id;
    // },
    // title(){
    // 	return this.$route.query.title;
    // },
  },
  mounted() {
    console.log(this.$route);
  },
}
</script>