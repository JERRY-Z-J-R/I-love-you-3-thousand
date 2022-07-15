package cn.jerry.mapper;

import cn.jerry.pojo.Address;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AddressMapper {
    /**
     * 添加地址
     * @param userid
     * @param address
     */
    void addAddress(@Param("userid") int userid, @Param("address") String address);

    /**
     * 根据 userid 查询地址列表
     * @param userid
     * @return
     */
    List<Address> selectByUsId(int userid);

    /**
     * 根据 addressid 删除地址
     * @param addressid
     */
    void deleteById(int addressid);
}
