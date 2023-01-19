<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="localStorage">{{ message }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            message: '添加 localStorage【school: atguigu】'
        };
    },
    methods: {
        localStorage() {
            if (this.message === '添加 localStorage【school: atguigu】') {
                localStorage.setItem('school', 'atguigu');
                this.message = '删除 localStorage【school: atguigu】';
            } else {
                localStorage.removeItem('school');
                this.message = '添加 localStorage【school: atguigu】';
            }
        }
    }
};
</script>
