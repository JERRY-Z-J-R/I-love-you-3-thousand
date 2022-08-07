<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!--:checked="isAll" 用于获取数据，@change="checkAll" 用于修改数据，所以可以统一合并为 v-model="isAll"-->
      <!-- isAll 为计算属性，不存在直接修改 props -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
			<span>已完成{{ doneTotal }}</span> / 全部{{ total }}
		</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    // 总数
    total() {
      return this.todos.length
    },
    // 已完成数
    doneTotal() {
      // 此处使用 reduce 方法做条件统计
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    // 控制全选框
    isAll: {
      // 全选框是否勾选（当有数据并且已完成=总数时勾选）
      get() {
        return this.doneTotal === this.total && this.total > 0
      },
      // isAll 被修改时 set 被调用
      set(value) {
        this.checkAllTodo(value)
      }
    }
  },
  methods: {
    // 清空所有已完成
    /*
    // 与 <input type="checkbox" :checked="isAll" @change="checkAll"/> 搭配
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    }
    */

    // 清空所有已完成
    clearAll() {
      this.clearAllTodo()
    }
  },
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>