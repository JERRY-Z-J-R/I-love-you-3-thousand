<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
					name: 'xiangqing',
					query: {
						id: m.id,
						title: m.title
					}
				}">
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
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
  methods: {
    /*
    $router：路由器中（实际是其原型对象上）包含控制路由跳转的API $router.push $router.replace
    其中：$router.push 是压栈、$router.replace 是压栈后替换
     */
    pushShow(m) {
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: m.id,
          title: m.title
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: m.id,
          title: m.title
        }
      })
    }
  },
}
</script>