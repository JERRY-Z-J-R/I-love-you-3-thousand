package cn.lzj.mapper;

import cn.lzj.pojo.Goods;

import java.util.List;

public interface GoodsMapper {
    /**
     * 查询所有
     *
     * @return
     */
    List<Goods> selectAll();
}
