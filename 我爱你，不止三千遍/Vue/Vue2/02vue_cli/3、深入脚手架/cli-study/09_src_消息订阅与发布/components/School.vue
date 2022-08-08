<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  mounted() {
    // 订阅消息（每个订阅都会生成一个 ID）
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log(this);  // 只有写成箭头函数或者函数在 methods 中，那么 this 才是 vc！！！
      console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);   // msgName：消息名称，data：消息数据
    })
  },
  beforeDestroy() {
    // 组件销毁前取消订阅（用 ID）
    pubsub.unsubscribe(this.pubId);
  },
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>