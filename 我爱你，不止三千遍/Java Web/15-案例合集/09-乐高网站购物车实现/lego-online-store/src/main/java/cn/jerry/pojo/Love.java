package cn.jerry.pojo;

public class Love {
    // 收藏编号
    private Integer loveid;

    // 用户编号
    private Integer userid;

    // 玩具商品编号
    private Integer goodsid;

    public Integer getLoveid() {
        return loveid;
    }

    public void setLoveid(Integer loveid) {
        this.loveid = loveid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(Integer goodsid) {
        this.goodsid = goodsid;
    }

    @Override
    public String toString() {
        return "Love{" +
                "loveid=" + loveid +
                ", userid=" + userid +
                ", goodsid=" + goodsid +
                '}';
    }
}
