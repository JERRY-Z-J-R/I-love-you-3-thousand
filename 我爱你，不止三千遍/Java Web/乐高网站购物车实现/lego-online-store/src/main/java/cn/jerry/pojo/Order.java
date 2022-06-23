package cn.jerry.pojo;

public class Order {
    // 订单编号
    private Integer orderid;

    // 用户编号
    private Integer userid;

    // 订单时间
    private String ordertime;

    // 订单金额
    private Double orderpay;

    // 订单状态（1：已支付；0：未支付）
    private Integer orderstate;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(String ordertime) {
        this.ordertime = ordertime;
    }

    public Double getOrderpay() {
        return orderpay;
    }

    public void setOrderpay(Double orderpay) {
        this.orderpay = orderpay;
    }

    public Integer getOrderstate() {
        return orderstate;
    }

    public void setOrderstate(Integer orderstate) {
        this.orderstate = orderstate;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderid=" + orderid +
                ", userid=" + userid +
                ", ordertime='" + ordertime + '\'' +
                ", orderpay=" + orderpay +
                ", orderstate=" + orderstate +
                '}';
    }
}
