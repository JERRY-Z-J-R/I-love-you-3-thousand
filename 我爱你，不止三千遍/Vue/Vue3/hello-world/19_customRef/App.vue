<template>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';
export default {
    name: 'App',
    setup() {
        // 自定义一个 ref 名为：myRef
        function myRef(value, delay) {
            // 定时器
            let timer;
            // 规定写法：必须 return 一个 customRef
            return customRef((track, trigger) => {
                // 规定写法：必须 return 一个对象（对象里有 get set）
                return {
                    get() {
                        console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
                        track(); // 告诉 Vue 这个 value 值是需要被“追踪”的（写在 return 之前）
                        return value;
                    },
                    set(newValue) {
                        console.log(`有人把myRef这个容器中数据改为了：${newValue}`);
                        // 如果有多余的定时器，先清理多余的定时器（实现防抖/节流）
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger(); // 通知 Vue 去重新解析模板（只有配置了 track()，重新解析模板时调用 get 拿到的数据才是最新的）
                        }, delay);
                    }
                };
            });
        }

        // let keyWord = ref('hello') // 使用 Vue 提供的 ref
        let keyWord = myRef('hello', 1000); // 使用程序员自定义的 ref（实现更自由）

        return { keyWord };
    }
};
</script>
