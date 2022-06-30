package cn.lzj.service;

import cn.lzj.pojo.CartGoods;
import cn.lzj.pojo.ShoppingCart;

import java.util.List;

public interface ShoppingCartService {
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
    Integer getCgcount(int userid, int goodsid);

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
    void deleteByUGid(int userid, int goodsid);
}
