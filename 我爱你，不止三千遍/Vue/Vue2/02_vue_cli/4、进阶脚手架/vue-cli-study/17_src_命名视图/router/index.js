// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import Home from '../pages/Home';
import About1 from '../pages/About1';
import About2 from '../pages/About2';
import About3 from '../pages/About3';

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            // 有时候想同时 (同级) 展示多个视图，而不是嵌套展示，
            // 例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。
            // 你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。
            // 如果 router-view 没有设置名字，那么默认为 default。
            // 一个视图使用一个组件渲染，因此对于同个路由有多个视图就需要多个组件。
            // 使用 components 配置 (带上 s)：
            components: {
                default: About1,
                about2: About2,
                about3: About3
            }
        },
        {
            path: '/home',
            component: Home
        }
    ]
});
