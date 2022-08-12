<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 缓存路由组件：让不展示的路由组件保持挂载，不被销毁 -->
      <!-- 应用：比如组件存在输入框，当用户输入了一些数据还没提交，然后切换了组件，再切回来发现数据全丢了 -->
      <!-- 所以，需要缓存路由组件，即：当路由组件切走之后不要直接销毁 -->

      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News', 'Message']"> -->

      <!-- 缓存一个路由组件 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>