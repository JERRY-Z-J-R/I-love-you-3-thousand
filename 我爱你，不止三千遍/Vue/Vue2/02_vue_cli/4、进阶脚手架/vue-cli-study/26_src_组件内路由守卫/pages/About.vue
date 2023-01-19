<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    // 组件内路由守卫（只对该组件生效）

    // 通过路由规则，进入该组件时(进入前一刻)被调用
    beforeRouteEnter(to, from, next) {
        console.log('About--beforeRouteEnter', to, from);
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'atguigu') {
                next();
            } else {
                alert('学校名不对，无权限查看！');
            }
        } else {
            next();
        }
    },

    // 通过路由规则，离开该组件时被调用
    // 注意：这个不是后置守卫！！！
    // 后置守卫是指：路由组件切入之后立即调用，而这个 beforeRouteLeave 是路由组件切走的时候(切走前一刻)调用！！！
    beforeRouteLeave(to, from, next) {
        console.log('About--beforeRouteLeave', to, from);
        // 放行
        next();
    }

    // 注意：为什么要强调 “通过路由规则”？
    // 因为：如果直接在模板中写 <About></About> 是不走路由器的，这种就没有通过路由规则
};
</script>
