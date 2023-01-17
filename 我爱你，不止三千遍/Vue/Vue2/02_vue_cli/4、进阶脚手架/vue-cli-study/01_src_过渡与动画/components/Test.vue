<!-- 动画实现 -->
<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 动画部分需要用 <transition></transition> 包裹 -->
        <!-- 同时，需要指定名称 name（可以不指定，那么自动匹配 .v-enter-active 及 .v-leave-active） -->
        <!-- 之后，在样式表中指定 .name-enter-active 及 .name-leave-active -->
        <!-- 那么，Vue 就能在元素 v-show 改变的时候自动根据是进入或是离开激活不同的样式 -->
        <!-- appear 属性表示，当页面进入时就激活一次进入动画 -->
        <!-- 注意： <transition></transition> 最终是不会渲染到 dom 上的，这只是 Vue 处理动画的一个识别标签 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        };
    }
};
</script>

<style scoped>
h1 {
    background-color: orange;
}

/* 进入时的动画 */
.hello-enter-active {
    animation: atguigu 0.5s linear;
}

/* 离开时的动画 */
.hello-leave-active {
    animation: atguigu 0.5s linear reverse; /* reverse 反转 */
}

/* 定义动画 */
@keyframes atguigu {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>
