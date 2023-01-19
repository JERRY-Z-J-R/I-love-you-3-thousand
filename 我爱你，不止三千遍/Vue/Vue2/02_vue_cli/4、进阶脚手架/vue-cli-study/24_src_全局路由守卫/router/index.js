// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            // meta 属性用于标识该路由的元信息
            // 我们可以往 meta 上添加一个 isAuth 属性用于标记该路由是否需要权限校验
            // 注意：isAuth 是我们往 meta 对象上自己添加的，名字随便取，不是原生提供的！
            // 我们也可以往 meta 上添加一个 title 属性，标识路由的标题
            // meta 中还可以添加各种各样的属性，关键看你的业务逻辑……
            // meta: {isAuth: false, title: '关于'}
            // isAuth 为 false，可以直接不写，因为 if 判断中 undefined 会判断为 false
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    // 需要权限校验
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    // 需要权限校验
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            // 需要权限校验
                            meta: { isAuth: true, title: '详情' },
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 1,
                                    b: 'hello'
                                };
                            }
                        }
                    ]
                }
            ]
        }
    ]
});

// 路由守卫：对路由进行权限控制（只有满足一定的条件才能切换路由，例如：管理员才能打开设置界面）
// 在 export default router 之前配置路由守卫

// 全局前置路由守卫 ———— 初始化的时候被调用、每次路由切换之前被调用（对所有路由均有效）
router.beforeEach((to, from, next) => {
    // to 对象包含要去的目的地的信息（fullPath、path、name、meta、params、query 等）
    // from 对象包含初始地的信息（fullPath、path、name、meta、params、query 等）
    // next() 执行放行的函数
    // 有了 to from next() 我们就可以通过代码逻辑对路由的切换进行权限控制，比如：判断 to.path 并执行逻辑、判断 to.name 并执行逻辑等等
    console.log('前置路由守卫', to, from);
    // 判断该路由组件是否需要鉴权（meta.isAuth 属性是否为 true）
    if (to.meta.isAuth) {
        // 判断浏览器 localStorage 是否有：school: atguigu
        if (localStorage.getItem('school') === 'atguigu') {
            // 放行
            next();
        } else {
            alert('学校名不对，无权限查看！');
        }
    } else {
        // 放行（不需要校验权限）
        next();
    }
});

// 全局后置路由守卫 ———— 初始化的时候被调用、每次路由切换之后被调用（主要用于设置浏览器选项卡标题）
// 后置路由守卫没有 next()
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    // 有路由标题就用路由标题，没有标题就用'硅谷系统'
    document.title = to.meta.title || '硅谷系统';
});
// 注意：在全局后置路由守卫中设置浏览器选项卡标题会有一个小问题，
// 那就是对于根页面而言，当页面打开的一瞬间显示的是之前 index.html 中配置的 title 之后才会显示路由的 title
// 所以，推荐去手动修改一下 index.html 中的标题，或者配置一下 vue.config.js 中的 pages -> index -> title 选项

export default router;
