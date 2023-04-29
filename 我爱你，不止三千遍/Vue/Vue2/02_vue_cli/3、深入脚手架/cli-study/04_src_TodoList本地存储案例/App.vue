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
import MyHeader from './components/MyHeader';
import MyList from './components/MyList';
import MyFooter from './components/MyFooter';

export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
            // 从 localStorage 中获取数据，如果 localStorage 中 todos 没有数据，那么就获取为[]，保证 todos 一定是一个数组而不是 null，否则 todos.length 会报错
            todos: JSON.parse(localStorage.getItem('todos')) || []
        };
    },
    methods: {
        addTodo(todoObj) {
            this.todos.unshift(todoObj);
        },
        checkTodo(id) {
            this.todos.forEach(todo => {
                if (todo.id === id) todo.done = !todo.done;
            });
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        checkAllTodo(done) {
            this.todos.forEach(todo => {
                todo.done = done;
            });
        },
        clearAllTodo() {
            this.todos = this.todos.filter(todo => {
                return !todo.done;
            });
        }
    },
    watch: {
        // 每次监听到 todos 的变化就将其存储到 localStorage 中
        // 此处必须要使用深度监视，因为当 todos.done 改变时也要更新 localStorage
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value));
            }
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
