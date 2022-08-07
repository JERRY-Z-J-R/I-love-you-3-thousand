<template>
  <div>
    <!--
    不加冒号，那么默认传递的都是字符串格式，
    加了冒号那么就是绑定值（其类型及值便是引号内部表达式的计算值）
    -->
    <Student name="李四" sex="女" :age="18"/>
    <Student name="老王" sex="男" :age="24"/>
  </div>
</template>

<script>
import Student from './components/Student';

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>
