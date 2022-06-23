package cn.jerry.pojo;

public class Goods {
    // 玩具商品编号
    private Integer goodsid;

    // 玩具商品名称
    private String goodsname;

    // 玩具商品介绍
    private String goodsoutline;

    // 玩具商品单价
    private Double goodsprice;

    // 玩具商品库存
    private Integer goodscount;

    // 玩具商品封面地址
    private String goodsimg;

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

    public String getGoodsoutline() {
        return goodsoutline;
    }

    public void setGoodsoutline(String goodsoutline) {
        this.goodsoutline = goodsoutline;
    }

    public Double getGoodsprice() {
        return goodsprice;
    }

    public void setGoodsprice(Double goodsprice) {
        this.goodsprice = goodsprice;
    }

    public Integer getGoodscount() {
        return goodscount;
    }

    public void setGoodscount(Integer goodscount) {
        this.goodscount = goodscount;
    }

    public String getGoodsimg() {
        return goodsimg;
    }

    public void setGoodsimg(String goodsimg) {
        this.goodsimg = goodsimg;
    }

    @Override
    public String toString() {
        return "Goods{" +
                "goodsid=" + goodsid +
                ", goodsname='" + goodsname + '\'' +
                ", goodsoutline='" + goodsoutline + '\'' +
                ", goodsprice=" + goodsprice +
                ", goodscount=" + goodscount +
                ", goodsimg='" + goodsimg + '\'' +
                '}';
    }
}
