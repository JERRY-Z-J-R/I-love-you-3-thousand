/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs  = require("fs")

fs.writeFile("./avatar/a.txt","你好",err=>{
    console.log(err)
})