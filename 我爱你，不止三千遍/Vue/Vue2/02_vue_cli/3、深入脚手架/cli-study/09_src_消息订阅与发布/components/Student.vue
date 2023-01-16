<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
// 消息订阅与发布：一种借助第三方库的任意组件间的通信方式（能用全局事件总线还是推荐用全局事件总线！！！）
// 引入消息订阅库（这里选用 pubsub-js）
// 安装：npm i pubsub-js
// 原理：需要数据的组件订阅消息(subscribe)，提供数据的组件发布消息(publish)
import pubsub from 'pubsub-js';

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  methods: {
    sendStudentName() {
      // 发布消息
      pubsub.publish('hello', 666);
    }
  },
}
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
