<template>
    <div>
        <h1 ref="title" v-text="msg"></h1>
        <button ref="btn" @click="showDOM">点我输出上方的 DOM 元素</button>
        <School ref="sch" id="sch"></School>
    </div>
</template>

<!-- ref 属性： -->
<!-- 1. 被用来给元素或子组件注册引用信息（id 的替代者） -->
<!-- 2. 应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc） -->
<!-- 3. 使用方式： -->
<!-- 1. 打标识：<h1 ref="xxx">.....</h1> 或 <School ref="xxx"></School> -->
<!-- 2. 获取：this.$refs.xxx -->

<script>
// 关闭了语法检查就可以用单个单词作为组件名了！
import School from './components/School';

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎学习Vue！'
        };
    },
    methods: {
        showDOM() {
            console.log(this); // 这里的 this 是 vc
            console.log(this.$refs.title); // 真实 DOM 元素： <h1>欢迎学习Vue！</h1>
            console.log(this.$refs.btn); // 真实 DOM 元素：<button>点我输出上方的 DOM 元素</button>
            console.log(this.$refs.sch); // School 组件的实例对象（vc）
            console.log(document.getElementById('sch')); // School 组件的真实 DOM 元素：<div class="school" id="sch"></div>
        }
    },
    components: {
        School
    }
};
</script>
