package cn.jerry.pojo;

public class CartGoods {
    // 玩具商品编号
    private Integer goodsid;

    // 玩具商品名称
    private String goodsname;

    // 玩具商品单价
    private Double goodsprice;

    // 玩具商品封面地址
    private String goodsimg;

    // 购物车中该玩具的数量
    private Integer cgcount;

    public Integer getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(Integer goodsid) {
        this.goodsid = goodsid;
    }

    public String getGoodsname() {
        return goodsname;
    }

    public void setGoodsname(String goodsname) {
        this.goodsname = goodsname;
    }

    public Double getGoodsprice() {
        return goodsprice;
    }

    public void setGoodsprice(Double goodsprice) {
        this.goodsprice = goodsprice;
    }

    public String getGoodsimg() {
        return goodsimg;
    }

    public void setGoodsimg(String goodsimg) {
        this.goodsimg = goodsimg;
    }

    public Integer getCgcount() {
        return cgcount;
    }

    public void setCgcount(Integer cgcount) {
        this.cgcount = cgcount;
    }

    @Override
    public String toString() {
        return "CartGoods{" +
                "goodsid=" + goodsid +
                ", goodsname='" + goodsname + '\'' +
                ", goodsprice=" + goodsprice +
                ", goodsimg='" + goodsimg + '\'' +
                ", cgcount=" + cgcount +
                '}';
    }
}
