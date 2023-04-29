<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <!-- 这里 myAge 一定得是数值类型，否则 + 1 处理就会出错 -->
        <h2>学生年龄：{{ myAge + 1 }}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '我是一个学生',
            // props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会报错！！！
            // 若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据（props 中的数据会去到 vc 上）
            // data 中的数据不要与 props 中得数据重名（因为 props 中的数据会去到 vc 上，而 vue 优先使用 props）
            myAge: this.age
        };
    },
    methods: {
        updateAge() {
            // 修改 data 而不是修改 props
            this.myAge++;
        }
    },

    // 简单声明接收
    // props:['name', 'age', 'sex']

    // 接收的同时对数据进行类型限制
    // 类型不对时还是会接收，但是会在控制台报错！（所以对于有类型限制的，要用 : 绑定）
    /*
    props:{
      name: String,
      age: Number,
      sex: String
    }
    */

    // 接收的同时对数据进行：类型限制 + 默认值的指定 + 必要性的限制
    // 类型不对时还是会接收，但是会在控制台报错！（所以对于有类型限制的，在父组件传值时要用 : 绑定）
    props: {
        name: {
            type: String, // name 的类型是字符串
            required: true // name 是必要的
        },
        age: {
            type: Number,
            default: 99 // 默认值（注意：有默认值，就不要指定必要性了，否则就自相矛盾了）
        },
        sex: {
            type: String,
            required: true
        }
    }
};
</script>

<!--
特别注意：
props 所接收到的值并不是源数据的副本，而是源数据的引用值，即：源数据变化的同时 props 数据也会变化
所以，其实我们修改 props 中的数据，源数据也是在同步变化的，只不过 Vue 禁止了这种做法（会报错且没效果）！！！
但是，注意啦！有一种情况比较特殊！！！！
当数据是对象或数组的形式时，比如：
test: [
    {name: 'zjr', age: 18},
    {name: 'yp', age: 18}
]
--------------------------------
props:['test']
那么在 props 中直接修改整个对象是不可以的！比如：this.test[0] = {name: 'lxy', age: 17}，这样会报错！
但是，修改其中的一项值却是可以的！比如：this.test[0].age = 22，这样不会报错！并且修改的同时源数据也会同步改变！
不过，还是不建议以任何方式修改 props 的值！！！
-->
