<template>
  <ul class="todo-main">
    <MyItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
    />
  </ul>
</template>

<script>
import MyItem from './MyItem'

export default {
  name: 'MyList',
  components: {MyItem},
  // 声明接收App传递过来的数据
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>