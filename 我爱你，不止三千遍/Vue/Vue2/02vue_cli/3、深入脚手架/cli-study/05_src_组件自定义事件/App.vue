<template>
  <div className="app">
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>

    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据（之前的方式） -->
    <School :getSchoolName="getSchoolName"/>

    <!--（第一种写法，使用 @ 或 v-on）-->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- 给 Student 组件的实例对象 vc 上绑定 atguigu 事件 -->
    <!-- 组件自定义事件触发方式：到该组件的实例对象中进行触发，触发时就会调用父组件中定义的回调函数 -->
    <!-- 绑定自定义事件（一次性）：@atguigu.once="getStudentName" -->
    <!-- <Student @atguigu="getStudentName"/> -->

    <!--（第二种写法，使用 ref）-->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- this.$refs.student 可以获取 Student 组件的实例对象 vc -->
    <Student ref="student" @click.native="show"/>
    <!-- 父组件也可以给子组件绑定一个原生事件，不过要加 .native，否则还是以自定义事件来处理！！！-->
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: '你好啊！',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校名：', name);
    },
    // 第一个参数作为 name 接收，其它所有的参数接收到 params 数组中
    getStudentName(name, ...params) {
      console.log('App收到了学生名：', name, params);
      this.studentName = name;
    },
    show() {
      alert(123);
    }
  },
  mounted() {
    // 定义格式：this.$refs.xxx.$on('atguigu', 回调)
    this.$refs.student.$on('atguigu', this.getStudentName); // 绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName);   // 绑定自定义事件（一次性）
    // 除此之外，这种 ref 的写法还可以在这里实现另外非常多的逻辑，如延时器等
    // 注意：在使用该方式时，绑定自定义事件时，回调要么配置在 methods 中，要么用箭头函数，否则 this 指向会出问题！
    // 箭头函数可以！！！
    // this.$refs.student.$on('atguigu', (name, ...params) => {
    //   console.log('App收到了学生名：', name, params);
    //   this.studentName = name;
    // });
    // 这样不可以！！！
    // this.$refs.student.$on('atguigu', function (name, ...params) {
    //   console.log('App收到了学生名：', name, params);
    //   this.studentName = name;  // 这里的 this 是 vc 而不是 vm !!!!!!!!
    // });
  },
}
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
