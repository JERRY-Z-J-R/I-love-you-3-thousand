<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input type="text" v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo, $event)" ref="inputTitle" />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
    name: 'MyItem',
    props: ['todo'],
    methods: {
        handleCheck(id) {
            this.$bus.$emit('checkTodo', id);
        },
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                pubsub.publish('deleteTodo', id);
            }
        },
        // 编辑
        handleEdit(todo) {
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true;
            } else {
                // 这里不能 todo.isEdit = true，必须要使用 $set，这样添加的属性才会有 get set（响应式）
                // 这里利用 $set 直接在 todo 上添加 isEdit 属性（这里修改了 props，只是一个演示，实际情况会用更合理的处理方法）
                this.$set(todo, 'isEdit', true);
            }
            // this.$nextTick(回调函数)
            // 作用：在下一次 DOM 更新结束后执行其指定的回调（也就是先让 Vue 重新解析一次模板，然后再执行该回调函数）
            // 什么时候用：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行。
            // 此处的需求是：当点击修改按钮后，自动选中输入框
            // 可是，在 handleEdit() 执行完之后，Vue 才会重新解析模板，在这之前输入框都还没有放入页面
            // 所以，如果我们这里不利用 $nextTick，那么就是让隐藏的输入框获取焦点，一但 handleEdit 执行完，DOM 更新了！新的输入框是没有焦点的！
            this.$nextTick(function () {
                this.$refs.inputTitle.focus();
            });
        },
        // 失去焦点执行修改逻辑
        handleBlur(todo, e) {
            todo.isEdit = false;
            if (!e.target.value.trim()) return alert('输入不能为空！');
            this.$bus.$emit('updateTodo', todo.id, e.target.value);
        }
    }
};
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
