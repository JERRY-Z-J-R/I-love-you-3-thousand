<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    searchUsers() {
      // 请求前更新 List 的数据
      this.$bus.$emit('updateListData', {isLoading: true, errMsg: '', users: [], isFirst: false})
      // 公共接口都已经在后端解决了跨域问题了，所以我们直接请求即可！
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了')
            // 请求成功后更新 List 的数据
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
          },
          error => {
            // 请求后更新 List 的数据
            this.$bus.$emit('updateListData', {isLoading: false, errMsg: error.message, users: []})
          }
      )
    }
  },
}
</script>
