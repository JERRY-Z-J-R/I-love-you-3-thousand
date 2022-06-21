package com.itheima.mapper;


import com.itheima.pojo.Brand;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface BrandMapper {
    /**
     * 查询所有
     * 参数：无
     * 结果：Brand List
     */
    List<Brand> selectAll();

    // ###########################################################

    /**
     * 查询 - 查看详情
     * 参数：id
     * 结果：Brand
     */
    Brand selectById(int id);

    // ###########################################################

    /**
     * 查询 - 根据 brandName 查询，注解方式
     */
    @Select("SELECT * FROM tb_brand WHERE brand_name = #{brandName}")
    @ResultMap("brandResultMap")
    List<Brand> selectByBrandName(String brandName);

    // ###########################################################

    /**
     * 查询 - 多条件查询
     * 参数：status companyName brandName
     * 结果：Brand List
     * 参数接收方式：
     * 1、散装参数：如果方法中有多个参数，需要使用 @Param("SQL参数占位符")，SQL 参数占位符的名称要与 SQL 语句中的对应，这样 SQL 才能区分哪一个参数是哪一个实体参数。
     * 2、对象参数：要保证 SQL 中的参数名 和 实体类属性名对应上，即可设置成功
     * 3、map集合参数：要保证 SQL 中的参数名 和 map 集合的键的名称对应上，即可设置成功
     */

    // 1、散装参数
    // List<Brand> selectByCondition(@Param("status") int status, @Param("companyName") String companyName, @Param("brandName") String brandName);
    // 2、对象参数
    // List<Brand> selectByCondition(Brand brand);
    // 3、map集合参数
    List<Brand> selectByCondition(Map brandMap);

    // ###########################################################

    // 查询 - 单条件 - 动态条件查询
    List<Brand> selectByConditionSingle(Brand brand);

    // ###########################################################

    // 添加
    void add(Brand brand);

    // ###########################################################

    // 修改 - 修改全部
    int update(Brand brand);

    // ###########################################################

    // 删除 - 删除一个
    void deleteById(int id);

    // 删除 - 批量删除
    void deleteByIds(@Param("ids") int[] ids);
}
