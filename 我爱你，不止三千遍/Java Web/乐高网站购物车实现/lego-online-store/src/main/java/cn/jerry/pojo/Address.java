package cn.jerry.pojo;

public class Address {
    // 收货地址编号
    private Integer addressid;

    // 用户编号
    private Integer userid;

    // 收货地址
    private String address;

    public Integer getAddressid() {
        return addressid;
    }

    public void setAddressid(Integer addressid) {
        this.addressid = addressid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Address{" +
                "addressid=" + addressid +
                ", userid=" + userid +
                ", address='" + address + '\'' +
                '}';
    }
}
