<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle"
      >
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  name: 'MyItem',
  // 声明接收todo
  props: ['todo'],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo', id);
    },
    // 删除
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        // 通知App组件将对应的todo对象删除
        pubsub.publish('deleteTodo', id);
      }
    },
    // 编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true;
      } else {
        // 这里利用$set直接在todo上添加isEdit数据（这里修改了props，只是一个演示，实际情况下请最好用其它办法）
        this.$set(todo, 'isEdit', true);
      }
      // this.$nextTick(回调函数)
      // 作用：在下一次 DOM 更新结束后执行其指定的回调（也就是先让 Vue 重新解析一次模板，然后再执行该回调函数）
      // 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
      // 此处的需求是：当点击修改按钮后，自动选中输入框，但是如果不借助$nextTick，那么在 handleEdit() 执行完之后，Vue 才会重新解析模板，在这之前 this.$refs.inputTitle.focus() 是没有作用的，因为那时输入框都还没有放入页面
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      })
    },
    // 失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert('输入不能为空！');
      this.$bus.$emit('updateTodo', todo.id, e.target.value);
    }
  },
}
</script>

<style scoped>
/*item*/
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