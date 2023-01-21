<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName" />
    <br />
    名：<input type="text" v-model="person.lastName" />
    <br />
    <span>全名：{{ person.fullName }}</span>
    <br />
    全名：<input type="text" v-model="person.fullName" />
    <!-- 
	<span>全名：{{ fullName }}</span>
    <br />
    全名：<input type="text" v-model="fullName" />
	-->
</template>

<script>
// 引入 reactive 和 computed
import { reactive, computed } from 'vue';
export default {
    name: 'Demo',
    setup() {
        // 数据
        let person = reactive({
            firstName: '张',
            lastName: '三'
        });

        // 计算属性 ———— 简写（没有考虑计算属性被修改的情况）
        /* 
		// setup 中不用考虑 this，所以可以随便用回调函数
		person.fullName = computed(() => {
			return person.firstName + '-' + person.lastName;
		});
		*/

        // 计算属性 ———— 完整写法（考虑读和写）
        person.fullName = computed({
            get() {
                return person.firstName + '-' + person.lastName;
            },
            set(value) {
                const nameArr = value.split('-');
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            }
        });

        // fullName 直接添加到 person 里更合理
        // let fullName = computed({
        //     get() {
        //         return person.firstName + '-' + person.lastName;
        //     },
        //     set(value) {
        //         const nameArr = value.split('-');
        //         person.firstName = nameArr[0];
        //         person.lastName = nameArr[1];
        //     }
        // });

        // 返回一个对象（常用）
        return {
            person
            // fullName
        };
    }
};
</script>
