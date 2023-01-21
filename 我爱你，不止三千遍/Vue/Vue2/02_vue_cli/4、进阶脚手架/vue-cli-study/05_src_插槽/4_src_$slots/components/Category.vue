<template>
    <div class="category">
        <h1>我是Category组件</h1>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Category',
    mounted() {
        console.log(this);
    }
};
</script>

<style scoped>
.category {
    height: 100px;
    background-color: #993366;
}
</style>
