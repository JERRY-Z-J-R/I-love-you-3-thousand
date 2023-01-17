<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <!--
        1. 作用：控制路由跳转时操作浏览器历史记录的模式
        2. 浏览器的历史记录有两种写入方式：分别为 push 和 replace，push 是追加历史记录，replace 是替换当前记录，路由跳转时候默认为 push
          （push 的原理就是将路径依次压栈，当点击浏览器返回上一级按钮时，依次出栈，是先入后出模型）
          （replace 的原理是压栈后直接替换上一次的路径）
        3. 如何开启 replace 模式：<router-link replace .......>News</router-link>
          （开启了 replace 模式的路由页面不能回到上一级，如果上一级路径是 push 的，那么 replace 可以回到上上级）
        4. 应用：用户一开始进入登录页面，当登录成功进入主页后是不能返回上一级登录界面的，所以给登录成功的路由跳转设置为 replace
        -->
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>