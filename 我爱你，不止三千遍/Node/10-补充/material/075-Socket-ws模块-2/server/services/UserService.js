/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const UserModel = require("../model/UserModel")
const UserService = {
    addUser:(username,password,age)=>{
        return UserModel.create({
            username,password,age
          })
    },

    updateUser:(_id,username,age,password)=>{
        return UserModel.updateOne({_id},{
            username,age,password
          })
    },
    deleteUser:(_id)=>{
        return UserModel.deleteOne({
            _id:_id
          })
    },
    getUser:(page,limit)=>{
        return UserModel.find({},["username","age"]).sort({age:-1}).skip((page-1)*limit).limit(limit)
    },

    login:(username,password)=>{
        return UserModel.find({username,password})
    }
}


module.exports = UserService