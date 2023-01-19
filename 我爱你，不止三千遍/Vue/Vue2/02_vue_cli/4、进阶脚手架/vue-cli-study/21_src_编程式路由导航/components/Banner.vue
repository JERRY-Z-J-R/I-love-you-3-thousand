<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="test">测试一下go</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        // $router：路由器中（实际是其原型对象上）包含控制前进后退的API $router.forward $router.back $router.go
        // 其中：
        // this.$router.forward()   // 前进
        // this.$router.back()      // 后退
        // this.$router.go() 	    // 可前进也可后退
        back() {
            this.$router.back();
        },
        forward() {
            this.$router.forward();
        },
        test() {
            // 负数：后退
            // 正数：前进
            // 步数：整数值
            this.$router.go(3);
        }
    }
};
</script>
