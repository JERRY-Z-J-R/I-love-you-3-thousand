<template>
  <div>
    <School/>
    <hr>
    <Student/>
  </div>
</template>

<script>
import School from './components/School';
import Student from './components/Student';

export default {
  name: 'App',
  components: {School, Student}
}
</script>
