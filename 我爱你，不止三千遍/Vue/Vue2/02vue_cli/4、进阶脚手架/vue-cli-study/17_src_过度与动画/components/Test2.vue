<!-- 过度实现 -->
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 过度也是用 <transition></transition> 包裹 -->
    <!-- 但是如果需要对其多个元素应用效果，那么需要用 <transition-group></transition-group> -->
    <!-- 多个元素时，需要为每一个元素匹配一个 key -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！</h1>
      <!--
      此时，有部分同学可能会想，我直接用一个 div 把两个 h1 包裹起来，给 div 配置 v-show 不就可以实现多个元素过度了吗？
      这种方式确实可以，但是有缺陷：
        缺陷1：破坏了页面结构
        缺陷2：当两个 h1 的过度效果是互斥的时候，用这种方法就不能实现了，但原先的方法可以，比如：
            <transition-group name="hello" appear>
              <h1 v-show="isShow" key="1">你好啊！</h1>
              <h1 v-show="!isShow" key="2">尚硅谷！</h1>
            </transition-group>
      -->
    </transition-group>
  </div>
</template>

<script>
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

/* 进入的起点、离开的终点 */
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}

/* 进入的过程、离开的过程 */
.hello-enter-active, .hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点、离开的起点 */
.hello-enter-to, .hello-leave {
  transform: translateX(0);
}

</style>