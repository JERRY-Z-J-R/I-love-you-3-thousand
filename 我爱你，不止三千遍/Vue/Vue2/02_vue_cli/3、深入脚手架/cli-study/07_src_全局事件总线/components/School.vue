<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京'
        };
    },
    mounted() {
        // 回调要么在 methods 中，要么使用箭头函数！
        this.$bus.$on('hello', data => {
            console.log('我是School组件，收到了数据', data);
        });
    },
    beforeDestroy() {
        /**
         * 由于我们是在 Vue.prototype.$bus 上注册事件，所以就算某个组件销毁了，其当时注册的事件还会在留在 Vue.prototype.$bus 上
         *    所以，推荐在 beforeDestroy 生命周期钩子中加上 $off
         * 注意：之前我们学习组件自定义事件之所以不用在 beforeDestroy 中销毁，是因为组件自定义事件中的事件是注册到当前的 vc 上，每个组件的 vc 都是独立的
         *    一但某个组件销毁了，其 vc 也就不存在了，其身上绑定的自定义事件也自然销毁了，不用还去 beforeDestroy 中销毁
         * 而我们这里缺不同，vc 销毁了, Vue.prototype 也会在！
         */
        this.$bus.$off('hello');
    }
};
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
