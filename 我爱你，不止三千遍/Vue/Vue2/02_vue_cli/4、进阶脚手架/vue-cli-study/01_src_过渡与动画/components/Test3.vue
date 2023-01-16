<!-- 多个元素过度 -->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__flipInX"
        leave-active-class="animate__zoomOutUp"
    >
      <h1 v-show="isShow" key="1">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
// 一个非常棒的 css 动画库 animate.css
// 安装：npm install animate.css --save
// 引入 animate.css
import 'animate.css'
// 配置：在需要 animate.css 的 transition 标签上加上 name="animate__animated animate__bounce"
// 配置：到文档中复制相应的进入离开动画粘贴到：enter-active-class 及 leave-active-class 中
// 使用：官方文档 https://animate.style/

export default {
  name: 'Test',
  data() {
    return {
      isShow: true
    }
  },
}
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>