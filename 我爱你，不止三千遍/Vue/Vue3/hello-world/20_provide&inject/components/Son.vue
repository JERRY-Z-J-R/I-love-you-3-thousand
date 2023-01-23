<script>
import { inject } from 'vue';
export default {
    name: 'Son',
    setup() {
        let car = inject('car');
        return { car };
    }
};
</script>

<template>
    <div class="son">
        <h3>我是Son组件（孙），{{ car.name }}--{{ car.price }}</h3>
    </div>
</template>

<style>
.son {
    background-color: orange;
    padding: 10px;
}
</style>
