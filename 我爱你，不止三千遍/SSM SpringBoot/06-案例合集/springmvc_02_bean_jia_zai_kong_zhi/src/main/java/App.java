import com.itheima.config.SpringConfig;
import com.itheima.controller.UserController;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

// 测试 controller 类已经被排除
// 如果被排除了，该方法执行就会报 bean 未被定义的错误
// 注意：测试的时候，需要把 SpringMvcConfig 配置类上的 @ComponentScan 注解注释掉，否则不会报错！！！
public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        System.out.println(ctx.getBean(UserController.class));
    }
}
