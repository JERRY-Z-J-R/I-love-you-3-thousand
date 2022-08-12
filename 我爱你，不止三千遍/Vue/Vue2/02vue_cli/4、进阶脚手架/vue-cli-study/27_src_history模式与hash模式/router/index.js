// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    /*
    1. 对于一个 url 来说，什么是 hash 值？—— `#`及其后面的内容就是 hash 值。
    2. hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器。
    3. hash 模式：
        1. 地址中永远带着`#`号，不美观 。
        2. 若以后将地址通过第三方手机 App 分享，若 App 校验严格，则地址会被标记为不合法。
        3. 兼容性较好。
    4. history 模式：
        1. 地址干净，美观 。
        2. 兼容性和 hash 模式相比略差。
        3. 应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题。
        4. history 在正式上线的项目中应用得更多！！！
     */
    mode: 'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {isAuth: true, title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    /*
                    beforeEnter: (to, from, next) => {
                        console.log('前置路由守卫',to,from)
                        if(to.meta.isAuth){     // 判断是否需要鉴权
                            if(localStorage.getItem('school')==='atguigu'){
                                next()
                            }else{
                                alert('学校名不对，无权限查看！')
                            }
                        }else{
                            next()
                        }
                    }
                    */
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 1,
                                    b: 'hello'
                                }
                            }

                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
/*
router.beforeEach((to,from,next)=>{
	console.log('前置路由守卫',to,from);
	if(to.meta.isAuth){  // 判断是否需要鉴权
		if(localStorage.getItem('school')==='atguigu'){
			next();
		}else{
			alert('学校名不对，无权限查看！');
		}
	}else{
		next();
	}
})
*/

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title || '硅谷系统';
})

export default router
