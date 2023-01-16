<template>
    <ul class="todo-main">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    </ul>
</template>

<script>
import MyItem from './MyItem';

export default {
    name: 'MyList',
    components: { MyItem },
    props: ['todos', 'checkTodo', 'deleteTodo']
};
</script>

<style scoped>
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
