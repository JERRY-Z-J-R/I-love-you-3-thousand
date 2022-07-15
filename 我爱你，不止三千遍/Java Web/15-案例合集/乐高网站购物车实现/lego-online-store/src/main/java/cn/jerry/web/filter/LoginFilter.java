// package cn.jerry.web.filter;
//
// import javax.servlet.*;
// import javax.servlet.annotation.WebFilter;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpSession;
// import java.io.IOException;
//
// /**
//  * 登录验证的过滤器
//  */
//
// @WebFilter("/*")
// public class LoginFilter implements Filter {
//     @Override
//     public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
//         HttpServletRequest req = (HttpServletRequest) request;
//         // 判断访问资源路径是否和登录注册相关
//         String[] urls = {"/index.html", "/imgs/", "/css/", "/login", "/register", "/checkCodeServlet"};
//         // 获取当前访问的资源路径
//         String url = req.getRequestURL().toString();
//         // 循环判断
//         for (String u : urls) {
//             if (url.contains(u)) {
//                 // 找到了
//                 // 放行
//                 chain.doFilter(request, response);
//                 // break;
//                 return;
//             }
//         }
//
//         // 1、判断 session 中是否有 user
//         HttpSession session = req.getSession();
//         Object user = session.getAttribute("user");
//
//         // 2、判断 user 是否为 null
//         if (user != null) {
//             // 登录过了
//             // 放行
//             chain.doFilter(request, response);
//         } else {
//             // 没有登陆，返回首页
//             req.getRequestDispatcher("/index.html").forward(req, response);
//         }
//     }
//
//     public void init(FilterConfig config) throws ServletException {
//     }
//
//     public void destroy() {
//     }
// }
