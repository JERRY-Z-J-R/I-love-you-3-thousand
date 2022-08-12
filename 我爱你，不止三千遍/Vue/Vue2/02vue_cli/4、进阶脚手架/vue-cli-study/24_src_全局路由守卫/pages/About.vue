<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    console.log('%%%', this.$route);
  },
}
</script>