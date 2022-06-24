package cn.jerry.service;

import cn.jerry.pojo.Love;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface LoveService {
    /**
     * 加入收藏
     *
     * @param userid
     * @param goodsid
     */
    void addLove(int userid, int goodsid);

    /**
     * 根据 userid goodsid 查询收藏商品
     *
     * @param userid
     * @param goodsid
     * @return
     */
    Love selectByUGId(int userid, int goodsid);

    /**
     * 根据 userid 查询收藏商品列表
     *
     * @param userid
     * @return
     */
    List<Love> selectAll(int userid);

    /**
     * 根据 userid goodsid 删除收藏商品
     *
     * @param userid
     * @param goodsid
     */
    void deleteByUGid(int userid, int goodsid);

    /**
     * 根据 loveid 删除收藏商品
     *
     * @param loveid
     */
    void deleteById(int loveid);

    /**
     * 根据 userid 删除商品列表（清空收藏夹）
     *
     * @param userid
     */
    void deleteAll(int userid);
}
