/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require("fs")

fs.readdir("./avatar",(err,data)=>{
    // console.log(data)
    data.forEach(item=>{
        fs.unlinkSync(`./avatar/${item}`)
    })

    fs.rmdir("./avatar",(err)=>{
        console.log(err)
    })
})