<template>
  <ul>
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  mounted() {
    // this.$route 中存在 query 对象
    console.log(this.$route);
  },
}
</script>