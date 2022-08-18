package cn.jerry.pojo;

public class ShoppingCart {
    // 购物车编号
    private Integer cartid;

    // 用户编号
    private Integer userid;

    // 玩具商品编号
    private Integer goodsid;

    // 玩具商品数量
    private Integer cgcount;

    public Integer getCartid() {
        return cartid;
    }

    public void setCartid(Integer cartid) {
        this.cartid = cartid;
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

    public Integer getCgcount() {
        return cgcount;
    }

    public void setCgcount(Integer cgcount) {
        this.cgcount = cgcount;
    }

    @Override
    public String toString() {
        return "ShoppingCart{" +
                "cartid=" + cartid +
                ", userid=" + userid +
                ", goodsid=" + goodsid +
                ", cgcount=" + cgcount +
                '}';
    }
}
