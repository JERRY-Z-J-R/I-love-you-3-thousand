<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo" />
                <MyList :todos="todos" />
                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
            </div>
        </div>
    </div>
</template>

<script>
// 引入消息订阅库
import pubsub from 'pubsub-js';
import MyHeader from './components/MyHeader';
import MyList from './components/MyList';
import MyFooter from './components/MyFooter';

export default {
    name: 'App',
    components: { MyHeader, MyList, MyFooter },
    data() {
        return {
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
        updateTodo(id, title) {
            this.todos.forEach(todo => {
                if (todo.id === id) todo.title = title;
            });
        },
        // 此处由于第一位必须接收消息名，但是我们又用不到该消息名，所以用一个 _ 来指代（占位）
        deleteTodo(_, id) {
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
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value));
            }
        }
    },
    mounted() {
        this.$bus.$on('checkTodo', this.checkTodo);
        this.$bus.$on('updateTodo', this.updateTodo);
        // 订阅消息
        this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo);
    },
    beforeDestroy() {
        this.$bus.$off('checkTodo');
        this.$bus.$off('updateTodo');
        // 取消订阅
        pubsub.unsubscribe(this.pubId);
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

.btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(103, 159, 180);
    margin-right: 5px;
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
