<template>
    <div class="app">
        <h1>我是APP组件</h1>
        <Category>
            <span>1</span>
            <span>2</span>
        </Category>
        <Category>
            <template v-slot:test1>
                <span>1</span>
                <span>1</span>
            </template>
            <template v-slot:test2>
                <span>2</span>
                <span>2</span>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category';

export default {
    name: 'App',
    components: { Category }
};
</script>

<style scoped>
.app {
    height: 400px;
    background-color: rgb(168, 168, 168);
}
</style>
