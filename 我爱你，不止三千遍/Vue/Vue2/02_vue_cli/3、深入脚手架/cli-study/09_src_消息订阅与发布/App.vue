<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School />
        <Student />
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
            msg: '你好啊！'
        };
    }
};
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
