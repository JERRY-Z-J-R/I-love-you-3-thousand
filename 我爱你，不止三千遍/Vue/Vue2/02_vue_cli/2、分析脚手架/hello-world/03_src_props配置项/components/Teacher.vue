<template>
    <div>
        <h1>
            {{ $attrs.name }}
        </h1>
        <h1>
            {{ age }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Teacher',
    data() {
        return {
            age: this.$attrs.age
        };
    },
    methods: {
        updateAge() {
            this.age++;
        }
    }
};
</script>

<style scoped></style>
