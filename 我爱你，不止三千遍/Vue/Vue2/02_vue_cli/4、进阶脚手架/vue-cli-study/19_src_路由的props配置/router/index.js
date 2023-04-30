import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

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
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,

                            // 路由的 props 配置，作用：让路由组件更方便地收到参数

                            // props 的第一种写法，值为对象，该对象中的所有 key-value 都会以 props 的形式传给 Detail 组件。
                            // 这种方法使用较少，因为只能传递死数据。
                            // props: {a:1, b:'hello'}

                            // props 的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传给 Detail 组件。
                            // 这种方法使用较少，因为只能收到 params 型参数
                            // props: true

                            // props 的第三种写法，值为函数（使用较多），该函数返回的对象中每一组 key-value 都会通过 props 传给 Detail 组件
                            // props: function () {}
                            // 我们可以利用第三种方式实现 query 参数用 props 传递
                            // 简写
                            props($route) {
                                return {
                                    // 返回接收到的参数
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    // 也可以返回固定值
                                    a: 1,
                                    b: 'hello'
                                };
                            }
                            // 连续解构赋值简写^^
                            // props({ query: { id, title } }) {
                            //     return {
                            //         // 返回接收到的参数
                            //         id,
                            //         title,
                            //         // 也可以返回固定值
                            //         a: 1,
                            //         b: 'hello'
                            //     };
                            // }
                        }
                    ]
                }
            ]
        }
    ]
});
