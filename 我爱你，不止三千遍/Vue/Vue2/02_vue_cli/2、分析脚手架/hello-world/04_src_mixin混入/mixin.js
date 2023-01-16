export const hunhe = {
    // 当组件方法与混入方法冲突时，组件方法优先级更高！
    methods: {
        showName() {
            alert(this.name);
        }
    },
    // 生命周期函数也可以混入
    // 当组件生命周期与混入生命周期冲突时，两个生命周期会整合在一起（都执行！）
    // 虽然都执行，但是混入的执行在前，组件的执行在后
    mounted() {
        console.log('你好啊！');
    }
};

export const hunhe2 = {
    // 还可以配置数据（会将组件 data 与 混入数据 进行整合）
    // 当有冲突时，组件 data 数据的优先级更高！！！
    data() {
        return {
            x: 100,
            y: 200
        };
    }
};
