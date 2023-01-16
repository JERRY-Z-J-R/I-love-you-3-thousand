<template>
  <!-- 作用域插槽：数据放在在组件的自身上，但根据数据生成的结构需要组件的使用者来决定，这种情况下需要使用作用域插槽 -->
  <!--（games 数据在 Category 组件中，但使用数据所遍历出来的结构由 App 组件决定）-->
  <div class="container">

    <Category title="游戏">
      <!-- 指定了 v-slot 的 template 就能使用作用域插槽 -->
      <!-- 必须给 v-slot 指定一个变量，该变量能够接收作用域插槽中传递过来的值 -->
      <!--（说明：之前作用域插槽使用 slot-scope，但是 Vue2.6.0 之后就改为 v-slot 了）-->
      <template v-slot="games01">
        <ul>
          <li v-for="(g,index) in games01.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template v-slot="games02">
        <ol>
          <li v-for="(g,index) in games02.games" :key="index">{{ g }}</li>
        </ol>
        <h4>{{ games02.msg }}</h4>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 可以使用解构赋值的形式接收 -->
      <template v-slot="{games, msg}">
        <h4 v-for="(g,index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>

    <!--
    一些例子：
    v-slot:demo="slotProps"：既是名为 demo 的具名插槽，还是作用域插槽
    v-slot:default="slotProps"：既是默认插槽（默认插槽，隐含的名字“default”），还是作用域插槽
    -->

  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: 'App',
  components: {Category}
}
</script>

<style scoped>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
