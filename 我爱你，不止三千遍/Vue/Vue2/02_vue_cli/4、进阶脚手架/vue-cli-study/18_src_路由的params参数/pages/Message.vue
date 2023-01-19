<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带 params 参数（路径形式），to 的字符串写法【借助绑定及模板字符串】（不推荐） -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->

                <!-- 跳转路由并携带 params 参数，to 的对象写法（推荐） -->
                <!-- 特别注意：路由携带 params 参数时，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置！-->
                <router-link
                    :to="{
                        name: 'xiangqing',
                        params: {
                            id: m.id,
                            title: m.title
                        }
                    }"
                    >{{ m.title }}
                </router-link>
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' }
            ]
        };
    }
};
</script>
