// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,

                            // 路由的props配置，作用：让路由组件更方便地收到参数

                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // 这种方法使用较少，因为只能传递死数据。
                            // props: {a:1, b:'hello'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // 这种方法使用较少，因为只能收到params型参数
                            // props: true

                            // props的第三种写法，值为函数（使用较多）
                            // props: function () {}
                            // 简写
                            props($route) {
                                return {
                                    // 返回接收到的参数
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    // 也可以返回固定值
                                    a: 1,
                                    b: 'hello'
                                }
                            }
                            // 可以用连续解构赋值（不推荐！因为可读性不好）
                            // props({query: {id, title}}) {
                            //     return {id, title};
                            // }
                        }
                    ]
                }
            ]
        }
    ]
})
