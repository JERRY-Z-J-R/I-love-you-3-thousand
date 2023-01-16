<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1
    }
  },
  /*
  beforeDestroy() {
    console.log('News组件即将被销毁了');
    // 销毁前要关闭开启了的定时器
    clearInterval(this.timer);
  },
  */
  /*
  mounted(){
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if(this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  */
  /*
    作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
    activated：路由组件被激活时触发（切入时）
    deactivated：路由组件失活时触发（切走时）
    与 mounted 和 beforeDestroy 的区别：如果我们的组件既有输入框又有定时器逻辑，当我们缓存了路由组件后，
       我们切走了组件虽然数据被缓存了，但是定时器也会一直再后台执行即便我们已经切走了页面，而 activated 和 deactivated 就可以解决这个问题。
   */
  activated() {
    console.log('News组件被激活了');
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log('News组件失活了');
    // 失活前要关闭开启了的定时器
    clearInterval(this.timer);
  },
  /*
  至此，之前学习的生命周期钩子图中的所有钩子与 $nextTick 与 activated、deactivated 就是 Vue2.x 的所有生命周期函数！！！
   */
}
</script>