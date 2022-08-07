<template>
  <li>
    <label>
      <!-- 当 checkbox 状态发生改变时触发 change 事件 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/>-->
      <span>{{ todo.title }}</span>
    </label>
    <!-- 注意：delete 是 js 关键字，不要作为方法名 -->
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  // 声明接收todo、checkTodo、deleteTodo
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.checkTodo(id);
    },
    // 删除
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        // 通知App组件将对应的todo对象删除
        this.deleteTodo(id);
      }
    }
  },
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>