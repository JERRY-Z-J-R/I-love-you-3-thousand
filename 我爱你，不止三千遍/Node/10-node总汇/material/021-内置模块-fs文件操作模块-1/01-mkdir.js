/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require("fs")
//创建目录
fs.mkdir("./avatar",(err)=>{
    // console.log(err)
    if(err && err.code==="EEXIST"){
        console.log("目录已经存在")
    }
})