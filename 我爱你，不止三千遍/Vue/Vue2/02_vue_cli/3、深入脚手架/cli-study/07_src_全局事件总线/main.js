import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

/*
-------------------------------------------------------------------------------------------------------------------------------------------
    之前我们已经学习了三种组件间通信的方式，分别是：
        1、父组件 ===> 子组件：props
        2、子组件 ===> 父组件：父组件利用 props 传递回调函数
        3、子组件 ===> 父组件：组件自定义事件
    而对于，祖孙以及兄弟组件之间通信虽然也可以用上述方式实现，但是麻烦，且不方便！！！
    所以，Vue 社区的开发人员就找到了一种“开发技巧”可以解决祖孙及兄弟组件之间的通信问题，而这个技巧便是：全局事件总线！！！
    全局事件总线的原理：组件自定义事件的一种技巧性用法！
    （注意：全局事件总线是众多开发者的经验性技巧，而并不是 Vue 官方提供的某个 API）

    那该如何解决祖孙及兄弟组件之间的通信问题呢？
        之前我们在使用 “父组件利用 props 传递回调函数” 或 “组件自定义事件” 的时候，原理其实都是在子组件中调用父组件里的回调函数，而这对于父子之间其实是比较方便操作的，
        只不过对于祖孙及兄弟组件之间则需要多级转发或是各种逻辑绑定，导致实现较为复杂。
        所以，其实只要让彼此需要通信的两个组件间能直接通信，而不用依赖中间者转发或是不用依赖各种逻辑绑定，
        那么，任何组件之间的通信不就简化为了类似普通的父子组件通信的过程了吗？

    那该如何让任意两个组件之间都可以直接通信呢？
        设想，要是有一个中间人，它可以将任何彼此两个组件的通信连通起来不就好了！
        而这个 “中间人” 需要具备两个方面的能力：
            1、任何组件都要能看得见它
            2、它必须具备 $on、$emit、$off 三个方法
        对于第一个要求，我们初步可能会想到两个家伙具备所有组件都看得见这个条件：
            1、window
            2、VueComponent（vc 的构造函数）
            但是，一般我们不会在 window 上操作数据，所以只有用 VueComponent
            可是，VueComponent 不同于 Vue，Vue 是我们引入 vue.js 就有的构造函数，而 VueComponent 我们在代码中是找不到它的！
            因为，VueComponent 是我们写了组件标签后 Vue 自动执行 Vue.extend 然后才得到的，而且每次 Vue.extend 得到的 VueComponent 都是全新的！
            所以，我们无法使用 VueComponent
            怎么办呢？
            此时，我们便要用到之前学习过的一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype
            这下有办法了！那不就是 Vue.prototype 吗！所以组件的实例对象 vc 都能看得见它！
            比如，我们在 main.js 中：Vue.prototype.test = '牛逼'，那么所有的 vc 都能 this.test
            （先会在 vc 中找 test，找不到就会去 VueComponent.prototype 上找，再找不到就会到 VueComponent.prototype.__proto__ 即 Vue.prototype 上找）
        下面考虑第二个要求：
            首先，要知道的是：$on、$emit、$off 方法是来自于 Vue.prototype，而 vm 和 vc 都能顺着原型链访问到 Vue.prototype 中的属性与方法
            可是，Vue.prototype.test 并没有 $on、$emit、$off 方法啊
            解决办法是，我们可以自己多 new 一个 vc 出来（vm 只有一个创建实例时已经 new 了），然后赋值给 Vue.prototype.test
                const Demo = Vue.extend({});
                const d = new Demo();
                Vue.prototype.test = d;
            以上办法固然可以，但是既然 vm 也具有 $on、$emit、$off，那干脆直接把 vm 赋值给 Vue.prototype.test，何必再多弄一个 vc 出来呢
            但是，要 Vue.prototype.test = vm 前提是需要 const vm = new Vue({...}) ，而当 new Vue({}) 返回 Vue 实例时，模板都已经解析完了，那个时候再来 Vue.prototype.test = vm 已经晚了
            那又怎么办呢？
            此时不得不借助一个生命周期钩子 beforeCreate，该钩子执行时 Vue 实例对象已经形成了（就是 this），但模板还没有解析，甚至数据代理与数据监测都还没有完成，此时就是最佳时机：
                new Vue({
                    el: '#app',
                    render: h => h(App),
                    beforeCreate() {
                        // 安装全局事件总线，this 就是当前应用的 Vue 实例对象
                        Vue.prototype.$bus = this;  // 此处我们遵守 Vue 的自带函数命名规范，直接命名为 $bus（bus 有总线的含义），更符合语义
                    },
                });
            以上就是全局事件总线的实现原理！！！

            到这里，有些同学可能会有一个疑问：
                Vue.prototype 上不就有 $on、$emit、$off 吗？那直接给 Vue.prototype 上绑定事件不就可以了（this.$on()、this.$emit()、this.$off()）
                为什么还要先 Vue.prototype.$bus = this，然后为 $bus 绑定事件呢？（this.$bus.$on()、this.$bus.$emit()、this.$bus.$off()）
                这不是多此一举吗？
                这是因为！自定义事件只能绑定在实例对象（vm 或 vc）上！而 Vue.prototype 只是一个原型对象！
                所以，只能先在 Vue.prototype 上添一个属性 $bus，然后将 this（Vue 实例对象） 赋给它，之后再在 $bus 上操作！

            总结一下：
                组件自定义事件（子组件 ---> 父组件）
                    父组件给子组件绑定一个事件 this.$refs.xxx.$on，事件的回调函数在父组件里！
                    子组件触发自身的该事件 this.$emit，顺便传递信息过去
                    由于事件的回调在父组件里，所以就达到了子组件给父组件“发消息”
                全局事件总线（任意组件 ---> 任意组件）
                    A组件给 Vue.prototype.$bus 绑定一个事件 this.$bus.$on，事件的回调在A组件里
                    B组件触发 Vue.prototype.$bus 上的该事件 this.$bus.$emit，顺便传递信息过去
                    由于事件的回调在A组件里，所以就达到了B组件给A组件“发消息”

            推荐今后组件的通信请遵循以下原则：
                1、父组件 ===> 子组件：props
                2、子组件 ===> 父组件：组件自定义事件
                3、祖孙或兄弟组件：全局事件总线
-------------------------------------------------------------------------------------------------------------------------------------------
 */

new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this;
    }
});
