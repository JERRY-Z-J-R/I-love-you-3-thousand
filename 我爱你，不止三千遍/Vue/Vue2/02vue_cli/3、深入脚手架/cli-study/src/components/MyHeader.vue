<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
// 用于生成全球唯一id的一个js库
import { nanoid } from 'nanoid';

export default {
    name: 'MyHeader',
    // 接收从 App（父组件）传递过来的 addTodo（回调函数）
    props: ['addTodo'],
    data() {
        return {
            title: ''
        };
    },
    methods: {
        add() {
            // 校验数据
            if (!this.title.trim()) {
                return alert('输入不能为空');
            }
            // 将用户的输入包装成一个 todo 对象
            const todoObj = { id: nanoid(), title: this.title, done: false };
            // 通知 App 组件去添加一个 todo 对象（执行回调函数）
            this.addTodo(todoObj);
            // 清空输入
            this.title = '';
        }
    }
};
</script>

<style scoped>
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
