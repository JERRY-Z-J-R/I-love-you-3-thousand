<template>
  <div>
    <h1 className="title">你好啊</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: 'App',
  components: {School, Student}
}
</script>

<style scoped>
.title {
  color: red;
}
</style>
