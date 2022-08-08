<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 作用域插槽：在组件中给 <slot></slot> 绑定值（双向绑定、直接指定），该值就能传输到调用该组件的使用者处 -->
    <slot :games="games" msg="hello">我是默认的一些内容</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  },
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}

video {
  width: 100%;
}

img {
  width: 100%;
}
</style>