package com.itheima.mapper;

import com.itheima.pojo.Brand;
import com.itheima.service.BrandService;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface BrandMapper {
    /**
     * 查询所有
     *
     * @return
     */
    @Select("SELECT * FROM tb_brand")
    @ResultMap("brandResultMap")
    List<Brand> selectAll();

    /**
     * 添加
     *
     * @param brand
     */
    @Insert("INSERT INTO tb_brand VALUES (null, #{brandName}, #{companyName}, #{ordered}, #{description}, #{status})")
    void add(Brand brand);

    /**
     * 根据 id 查询
     *
     * @param id
     * @return
     */
    @Select("SELECT * FROM tb_brand WHERE id = #{id}")
    @ResultMap("brandResultMap")
    Brand selectById(int id);

    /**
     * 修改
     *
     * @param brand
     */
    @Update("UPDATE tb_brand SET brand_name = #{brandName}, company_name = #{companyName}, ordered = #{ordered}, description = #{description}, status = #{status} WHERE id = #{id}")
    @ResultMap("brandResultMap")
    void update(Brand brand);

    /**
     * 删除
     *
     * @param id
     */
    @Delete("DELETE FROM tb_brand WHERE id = #{id}")
    @ResultMap("brandResultMap")
    void delete(int id);
}
