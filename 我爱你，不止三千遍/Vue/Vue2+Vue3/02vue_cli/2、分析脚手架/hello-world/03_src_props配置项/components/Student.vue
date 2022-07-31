<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <!-- 这里 myAge 一定得是数值类型，否则 + 1 处理就会出错 -->
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      msg: '我是一个尚硅谷的学生',
      // props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会报错！！！
      // 若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据
      // data 中得数据不要与 props 中得数据重名（因为 vue 优先使用 props）
      myAge: this.age
    }
  },
  methods: {
    updateAge() {
      // 修改 data 而不是修改 props
      this.myAge++;
    }
  },

  // 简单声明接收
  // props:['name', 'age', 'sex']

  // 接收的同时对数据进行类型限制
  // 类型不对时还是会接收，但是会在控制台报错！（所以对于有类型限制的，要用 : 绑定）
  /*
  props:{
    name: String,
    age: Number,
    sex: String
  }
  */

  // 接收的同时对数据进行：类型限制 + 默认值的指定 + 必要性的限制
  // 类型不对时还是会接收，但是会在控制台报错！（所以对于有类型限制的，要用 : 绑定）
  props: {
    name: {
      type: String,   // name 的类型是字符串
      required: true  // name 是必要的
    },
    age: {
      type: Number,
      default: 99     // 默认值
    },
    sex: {
      type: String,
      required: true
    }
  }
}
</script>