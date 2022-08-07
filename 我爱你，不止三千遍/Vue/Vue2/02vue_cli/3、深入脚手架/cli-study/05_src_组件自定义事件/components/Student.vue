<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentlName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例(vc)</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
      number: 0
    }
  },
  methods: {
    add() {
      console.log('add回调被调用了');
      this.number++;
    },
    sendStudentlName() {
      // 触发 Student 组件实例身上的 atguigu 事件，同时传递参数
      this.$emit('atguigu', this.name, 666, 888, 999);

      // 当父组件没有加 .native 后缀时，click 默认为自定义事件！！！
      // this.$emit('click');
    },
    // 哪个组件上的自定义事件就在哪个组件上解绑
    unbind() {
      this.$off('atguigu');       // 解绑一个自定义事件
      // this.$off(['atguigu','demo']); // 解绑多个自定义事件
      // this.$off();                   // 解绑所有的自定义事件
    },
    death() {
      // 销毁了当前 Student 组件的实例，销毁后 Student 实例的自定义事件也全都不奏效。
      // 注意：原生的 DOM 事件依旧可以调用（因为 Vue 是代替我们把原生事件直接注册到 DOM 上了）
      this.$destroy();
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
