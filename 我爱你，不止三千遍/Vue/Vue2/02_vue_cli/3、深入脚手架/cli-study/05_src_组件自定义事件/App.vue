<template>
    <div className="app">
        <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>

        <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据（之前的方式） -->
        <School :getSchoolName="getSchoolName" />

        <!-- 组件自定义事件：给组件绑的事件！（之前我们学的 Vue 事件是给 HTML（DOM）元素绑的） -->
        <!-- 主要作用：实现子组件给父组件传递数据！ -->
        <!-- 原理：通过父组件给子组件绑定一个自定义事件，事件的回调在父组件中 -->
        <!-- 组件自定义事件触发方式：到该组件的实例对象中进行触发，触发时就会调用父组件中定义的回调函数 -->

        <!--（第一种写法，使用 @ 或 v-on）-->
        <!-- 给 Student 组件的实例对象 vc 上绑定 atguigu 事件 -->
        <Student @atguigu="getStudentName" />
        <!-- 绑定自定义事件（一次性）：@atguigu.once="getStudentName" -->

        <!--（第二种写法，使用 ref）-->
        <!-- 在组件标签上加上 ref 属性 -->
        <!-- 定义格式：this.$refs.xxx.$on('atguigu', 回调函数); // xxx 是组件的 ref -->
        <!-- this.$refs.xxx 可以获取到对应组件的实例对象 vc -->
        <!-- 绑定自定义事件（一次性）：this.$refs.xxx.$once('atguigu', 回调函数); -->
        <!-- 注意：在使用该方式绑定自定义事件时，回调函数要么配置在 methods 中，要么用箭头函数，否则 this 指向会出问题！-->
        <!-- 如果不用箭头函数，this 将是 vm 而不是 vc！ -->
        <!-- 我们通常将 ref 设置组件自定义事件的过程放到 mounted() 生命周期钩子中！ -->

        <!-- 组件上默认是不能使用 Vue 提供的原生事件的，如果要使用需要加上 .native，否则还是会把 @xxx 当做一个叫作 xxx 的组件自定义事件来处理！-->
        <Student ref="student" @click.native="show" />
    </div>
</template>

<script>
import Student from './components/Student';
import School from './components/School';

export default {
    name: 'App',
    components: { School, Student },
    data() {
        return {
            msg: '你好啊！',
            studentName: ''
        };
    },
    methods: {
        getSchoolName(name) {
            alert('App收到了学校名称：' + name);
        },
        // 第一个参数作为 name 接收，其它所有的参数接收到 params 数组中
        getStudentName(name, ...params) {
            alert('App收到了学生名称和剩余参数：' + name + ' ' + params);
            this.studentName = name;
        },
        show() {
            console.log('我被点击了！');
        }
    },
    mounted() {
        // 定义格式：this.$refs.xxx.$on('atguigu', 回调函数)    // xxx 是组件的 ref
        this.$refs.student.$on('atguigu', this.getStudentName); // 绑定自定义事件
        // this.$refs.student.$once('atguigu', this.getStudentName);   // 绑定自定义事件（一次性）
        // 除此之外，这种 ref 的写法还可以在这里实现另外非常多的逻辑，如延时器等
        // 注意：在使用该方式，绑定自定义事件时，回调要么配置在 methods 中，要么用箭头函数，否则 this 指向会出问题！
        // 例如：
        // this.$refs.student.$on('atguigu', (name, ...params) => {
        //   console.log('App收到了学生名：', name, params);
        //   this.studentName = name;
        // });
        // 这样不可以！！！
        // this.$refs.student.$on('atguigu', function (name, ...params) {
        //   console.log('App收到了学生名：', name, params);
        //   this.studentName = name;  // 这里的 this 是 vc 而不是 vm !!!!!!!!
        // });
    }
};
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
