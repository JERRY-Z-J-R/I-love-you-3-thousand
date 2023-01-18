<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Vue Router Demo</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始 html 中我们使用 a 标签实现页面的跳转 -->
                    <!-- <a class="list-group-item active" href="./about.html">About</a> -->
                    <!-- <a class="list-group-item" href="./home.html">Home</a> -->

                    <!-- Vue 中借助 router-link 标签实现路由的切换 -->
                    <!-- <router-link active-class="该元素被激活时候的样式" to="路由路径"></router-link> -->
                    <!-- router-link 在解析后放入 dom 中的依旧是一个 a 标签 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件的呈现位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>
