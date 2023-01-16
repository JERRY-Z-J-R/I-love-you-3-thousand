<template>
    <!-- vue2.0 必须有一个根标签包裹 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address: '北京昌平'
        };
    },
    methods: {
        showName() {
            alert(this.name);
        }
    }
};
</script>

<style>
.demo {
    background-color: orange;
}
</style>
