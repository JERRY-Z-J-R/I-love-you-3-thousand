<template>
  <!-- vue2.0 必须有一个根标签包裹 -->
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      age: 18
    }
  }
}
</script>
