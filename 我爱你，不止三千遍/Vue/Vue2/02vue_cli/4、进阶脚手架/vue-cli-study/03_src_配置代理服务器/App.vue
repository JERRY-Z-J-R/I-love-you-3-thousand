<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
// 安装：npm i axios
import axios from 'axios';

export default {
  name: 'App',
  methods: {
    getStudents() {
      // 不加前缀表示不走代理
      axios.get('http://localhost:8080/students').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.log('请求失败了', error.message);
          }
      )
    },
    getCars() {
      // 加了前缀表示一定走代理
      axios.get('http://localhost:8080/demo/cars').then(
          response => {
            console.log('请求成功了', response.data);
          },
          error => {
            console.log('请求失败了', error.message);
          }
      )
    }
  },
}
</script>
