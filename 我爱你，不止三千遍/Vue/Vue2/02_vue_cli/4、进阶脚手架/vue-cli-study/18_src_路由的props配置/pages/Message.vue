<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <router-link
                    :to="{
                        name: 'xiangqing',
                        query: {
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
