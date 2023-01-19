<template>
    <div>
        <div class="row">
            <Banner />
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <div>---------- 1 -----------</div>
                        <!-- 命名视图 -->
                        <!-- 没有配置 name，默认就是 default -->
                        <router-view></router-view>
                        <div>---------- 2 -----------</div>
                        <router-view name="about2"></router-view>
                        <div>---------- 3 -----------</div>
                        <router-view name="about3"></router-view>
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
