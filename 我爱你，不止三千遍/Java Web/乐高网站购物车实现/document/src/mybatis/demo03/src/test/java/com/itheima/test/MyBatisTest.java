package com.itheima.test;

import com.itheima.mapper.BrandMapper;
import com.itheima.pojo.Brand;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MyBatisTest {

    @Test
    public void testSelectAll() throws IOException {
        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        List<Brand> brands = brandMapper.selectAll();
        System.out.println(brands);

        // 5、释放资源
        sqlSession.close();
    }

    @Test
    public void testSelectById() throws IOException {
        // 接收 id 参数
        int id = 1; // 模拟 id
        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        Brand brand = brandMapper.selectById(id);
        System.out.println(brand);

        // 5、释放资源
        sqlSession.close();
    }

    @Test
    public void testSelectByBrandName() throws IOException {
        String BrandName = "华为";
        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        List<Brand> brands = brandMapper.selectByBrandName(BrandName);
        System.out.println(brands);

        // 5、释放资源
        sqlSession.close();
    }

    @Test
    public void testSelectByCondition() throws IOException {
        // 接收参数
        int status = 1;
        String companyName = "华为";
        String brandName = "华为";

        // 处理参数（满足 LIKE 模糊查询）
        companyName = "%" + companyName + "%";
        brandName = "%" + brandName + "%";

        // 封装对象（对象参数）
        // Brand brand = new Brand();
        // brand.setStatus(status);
        // brand.setCompanyName(companyName);
        // brand.setBrandName(brandName);

        // 封装对象（Map集合）
        Map brandMap = new HashMap();
        // 查询 - 多条件 - 动态条件查询（<where>验证）
        // brandMap.put("status", status);
        brandMap.put("companyName", companyName);
        // 查询 - 多条件 - 动态条件查询
        // brandMap.put("brandName", brandName);

        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        // List<Brand> brands = brandMapper.selectByCondition(status, companyName, brandName);
        // List<Brand> brands = brandMapper.selectByCondition(brand);
        List<Brand> brands = brandMapper.selectByCondition(brandMap);
        System.out.println(brands);

        // 5、释放资源
        sqlSession.close();
    }

    @Test
    public void testSelectByConditionSingle() throws IOException {
        // 接收参数
        int status = 1;
        String companyName = "华为";
        String brandName = "华为";

        // 处理参数（满足 LIKE 模糊查询）
        companyName = "%" + companyName + "%";
        brandName = "%" + brandName + "%";

        // 封装对象（对象参数）
        Brand brand = new Brand();
        // brand.setStatus(status);
        brand.setCompanyName(companyName);
        // brand.setBrandName(brandName);

        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        List<Brand> brands = brandMapper.selectByConditionSingle(brand);
        System.out.println(brands);

        // 5、释放资源
        sqlSession.close();
    }

    @Test
    public void testAdd() throws IOException {
        // 接收参数
        int status = 1;
        String companyName = "波导手机";
        String brandName = "波导";
        String description = "手中的战斗机";
        int ordered = 100;

        // 封装对象（对象参数）
        Brand brand = new Brand();
        brand.setStatus(status);
        brand.setCompanyName(companyName);
        brand.setBrandName(brandName);
        brand.setDescription(description);
        brand.setOrdered(ordered);

        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql，默认是开启事务的，进行增删改操作后要使用 sqlSession.commit(); 手动提交事务
        SqlSession sqlSession = sqlSessionFactory.openSession();
        // 我们可以设置 MyBatis 自动提交事务（关闭事务）
        // SqlSession sqlSession = sqlSessionFactory.openSession(true);

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        brandMapper.add(brand);

        // 获取添加数据返回的 id 值
        Integer id = brand.getId();
        System.out.println(id);

        // 5、MyBatis 中要手动提交事务
        sqlSession.commit();

        // 6、释放资源
        sqlSession.close();
    }

    @Test
    public void testUpdate() throws IOException {
        // 接收参数
        int status = 0;
        String companyName = "波导手机";
        String brandName = "波导";
        String description = "被修改了！";
        int ordered = 200;
        int id = 5; // 修改 5 号

        // 封装对象（对象参数）
        Brand brand = new Brand();
        brand.setStatus(status);
        // 动态修改
        // brand.setCompanyName(companyName);
        // brand.setBrandName(brandName);
        brand.setDescription(description);
        // brand.setOrdered(ordered);
        brand.setId(id);

        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql，默认是开启事务的，进行增删改操作后要使用 sqlSession.commit(); 手动提交事务
        SqlSession sqlSession = sqlSessionFactory.openSession();
        // 我们可以设置 MyBatis 自动提交事务（关闭事务）
        // SqlSession sqlSession = sqlSessionFactory.openSession(true);

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        brandMapper.update(brand);

        // 5、MyBatis 中要手动提交事务
        sqlSession.commit();

        // 6、释放资源
        sqlSession.close();
    }

    @Test
    public void testDeleteById() throws IOException {
        // 接收参数
        int id = 5; // 删除 5 号

        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql，默认是开启事务的，进行增删改操作后要使用 sqlSession.commit(); 手动提交事务
        SqlSession sqlSession = sqlSessionFactory.openSession();
        // 我们可以设置 MyBatis 自动提交事务（关闭事务）
        // SqlSession sqlSession = sqlSessionFactory.openSession(true);

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        brandMapper.deleteById(id);

        // 5、MyBatis 中要手动提交事务
        sqlSession.commit();

        // 6、释放资源
        sqlSession.close();
    }

    @Test
    public void testDeleteByIds() throws IOException {
        // 接收参数
        int[] ids = {}; // 批量删除 5、7、8 号

        // 1、加载 mybatis 的核心配置文件，获取 SqlSessionFactory
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

        // 2、获取 SqlSession 对象，用它来执行 sql，默认是开启事务的，进行增删改操作后要使用 sqlSession.commit(); 手动提交事务
        SqlSession sqlSession = sqlSessionFactory.openSession();
        // 我们可以设置 MyBatis 自动提交事务（关闭事务）
        // SqlSession sqlSession = sqlSessionFactory.openSession(true);

        // 3、获取 Mapper 接口的代理对象
        BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

        // 4、执行方法
        brandMapper.deleteByIds(ids);

        // 5、MyBatis 中要手动提交事务
        sqlSession.commit();

        // 6、释放资源
        sqlSession.close();
    }
}
