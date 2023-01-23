<script>
// import Child from './components/Child.vue';	// 静态引入
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(() => import('./components/Child.vue')); // 异步引入
export default {
    name: 'App',
    components: { Child }
};
</script>

<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
            <!-- default 插槽：最终页面 -->
            <template v-slot:default>
                <Child />
            </template>
            <!-- fallback 插槽：异步完成前的页面 -->
            <template v-slot:fallback>
                <h3>稍等，加载中...</h3>
            </template>
        </Suspense>
    </div>
</template>

<style>
.app {
    background-color: gray;
    padding: 10px;
}
</style>
