<template>
    <div class="container">
        <Category title="美食">
            <!-- 具名插槽：在组件使用者身上用 slot 指定插槽名称 -->
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
            <a slot="footer" href="http://www.atguigu.com">更多美食</a>
        </Category>

        <Category title="游戏">
            <!-- 具名插槽：在组件使用者身上用 slot 指定插槽名称 -->
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.atguigu.com">单机游戏</a>
                <a href="http://www.atguigu.com">网络游戏</a>
            </div>
            <!--
            注意：这里是可以将多个标签指定为同一个插槽名称的，并不会覆盖，而是会把具有同一个插槽名称的结构都放入目标插槽中
            但是，还是建议将需要放入同一个插槽中的结构部分用一个根标签包裹，统一设置插槽名称
                1、使用 div 包裹
                    （不推荐：破坏了结构）
                    指定插槽名称：slot="插槽名"
                2、使用 template 包裹
                    （优先推荐）
                    指定插槽名称：slot="插槽名" 或 v-slot:插槽名

            注意！！！！在 Vue 2.6.0 之后，已经废弃了 slot 写法，请一律使用 template 的 v-slot 写法！！！！
             -->
        </Category>

        <Category title="电影">
            <!-- 具名插槽：在组件使用者身上用 slot 指定插槽名称 -->
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.atguigu.com">经典</a>
                    <a href="http://www.atguigu.com">热门</a>
                    <a href="http://www.atguigu.com">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category';

export default {
    name: 'App',
    components: { Category },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
        };
    }
};
</script>

<style scoped>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

h4 {
    text-align: center;
}
</style>
