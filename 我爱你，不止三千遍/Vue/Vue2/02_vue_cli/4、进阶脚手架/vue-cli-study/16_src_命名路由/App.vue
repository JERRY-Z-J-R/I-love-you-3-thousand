<template>
    <div>
        <div class="row">
            <Banner />
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 利用 name 别名（此处不建议这么写，因为路径只有一级没必要依靠别名） -->
                    <router-link class="list-group-item" active-class="active" :to="{ name: 'guanyu' }">About</router-link>
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
import Banner from './components/Banner';

export default {
    name: 'App',
    components: { Banner }
};
</script>
