package cn.jerry.mapper;

import cn.jerry.pojo.Goods;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface GoodsMapper {
    /**
     * 查询所有
     *
     * @return
     */
    List<Goods> selectAll();

    /**
     * 根据 goodssname 模糊查询
     *
     * @param goodsname
     * @return
     */
    List<Goods> selectVague(String goodsname);

    /**
     * 根据 goodsid 查询
     *
     * @param goodsid
     * @return
     */
    Goods selectById(int goodsid);

    /**
     * 根据 int[] goodsids 批量查询
     *
     * @param goodsids
     * @return
     */
    List<Goods> selectByIds(@Param("goodsids") int[] goodsids);
}
