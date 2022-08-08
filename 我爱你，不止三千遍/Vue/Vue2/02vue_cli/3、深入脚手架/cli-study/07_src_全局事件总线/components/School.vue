<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data);
    })
  },
  beforeDestroy() {
    /**
     * 由于我们是在 Vue.prototype 上注册事件，所以就算某个组件销毁了，其当时注册的事件还会在
     *    所以，推荐在 beforeDestroy 生命周期钩子中加上 $off
     * 注意：组件自定义事件之所以不用 beforeDestroy 是因为组件自定义事件中的事件是注册到 vc 上，每个组件的 vc 都是独立的
     *    一但某个组件销毁了，其 vc 也就不存在了，不用还去 beforeDestroy 中销毁
     */
    this.$bus.$off('hello');
  },
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>