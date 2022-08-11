<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数（get请求形式），to的字符串写法【借助绑定及模板字符串】（不推荐） -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法（推荐） -->
        <router-link :to="{
					path: '/home/message/detail',
					query: {
						id: m.id,
						title: m.title
					}
				}">
          {{ m.title }}
        </router-link>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'}
      ]
    }
  },
}
</script>