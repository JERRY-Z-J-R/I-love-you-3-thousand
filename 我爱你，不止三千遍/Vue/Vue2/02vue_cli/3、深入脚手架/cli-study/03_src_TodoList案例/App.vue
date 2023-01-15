<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo" />
                <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
            </div>
        </div>
    </div>
</template>

<script>
// 因为 header footer 这种标签在 html5 中已经有了，会冲突！所以组件命名最好就是用多个单词！！！
// 当开启语法检查，那么单个单词的组件命名是不合法的！！！，所以这里我们用 My 开头
// 如果实在不方便用双词汇，那么可以在每个组件名之前加一个项目或业务缩写作为前缀！！！
import MyHeader from './components/MyHeader';
import MyList from './components/MyList';
import MyFooter from './components/MyFooter.vue';

export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            // 由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App（父组件）中（状态提升）
            todos: [
                { id: '001', title: '抽烟', done: true },
                { id: '002', title: '喝酒', done: false },
                { id: '003', title: '开车', done: true }
            ]
        };
    },
    // 数据在哪里，操作数据的方法就在哪里！！！
    // 子组件 ==> 父组件 通信（要求父先给子一个函数）
    // 原理：父组件向子组件传递一个函数，当在子组件中调用该函数时，由于该函数是定义在父组件中所以自然就在父组件中执行！！！，并且执行函数时还可以传参数给父组件
    methods: {
        // 添加一个todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj);
        },
        // 勾选or取消勾选一个todo
        checkTodo(id) {
            this.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
            });
        },
        // 删除一个todo
        deleteTodo(id) {
            // filter() 把传入的函数依次作用于每个元素，然后根据返回值是 true 还是 false 决定保留还是丢弃该元素
            // 返回 true 表示该元素通过测试，保留该元素，false 则不保留
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        // 全选or取消全选
        checkAllTodo(done) {
            this.todos.forEach(todo => {
                todo.done = done;
            });
        },
        // 清除所有已经完成的todo
        clearAllTodo() {
            this.todos = this.todos.filter(todo => !todo.done);
        }
    }
};
</script>

<style>
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
