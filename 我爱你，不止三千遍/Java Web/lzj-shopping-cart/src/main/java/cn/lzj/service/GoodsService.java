package cn.lzj.service;

import cn.lzj.pojo.Goods;

import java.util.List;

public interface GoodsService {
    /**
     * 查询所有
     *
     * @return
     */
    List<Goods> selectAll();
}
