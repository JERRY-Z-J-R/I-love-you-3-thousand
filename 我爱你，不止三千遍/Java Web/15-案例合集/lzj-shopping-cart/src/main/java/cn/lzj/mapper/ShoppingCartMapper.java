package cn.lzj.mapper;

import cn.lzj.pojo.CartGoods;
import cn.lzj.pojo.ShoppingCart;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ShoppingCartMapper {
    /**
     * 加入购物车
     *
     * @param shoppingCart
     */
    void add(ShoppingCart shoppingCart);

    /**
     * 更新玩具商品数量
     *
     * @param shoppingCart
     */
    void updateCgcount(ShoppingCart shoppingCart);

    /**
     * 根据 userid goodsid 获取购物车商品 cgcount
     *
     * @param userid
     * @param goodsid
     * @return
     */
    Integer getCgcount(@Param("userid") int userid, @Param("goodsid") int goodsid);

    /**
     * 根据 userid 查询购物车商品列表（包含商品数量）
     *
     * @param userid
     * @return
     */
    List<CartGoods> selectCGByUsId(int userid);

    /**
     * 根据 userid goodsid 删除购物车商品
     *
     * @param userid
     * @param goodsid
     */
    void deleteByUGid(@Param("userid") int userid, @Param("goodsid") int goodsid);
}
