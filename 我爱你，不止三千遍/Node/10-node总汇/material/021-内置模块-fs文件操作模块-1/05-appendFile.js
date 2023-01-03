/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs  = require("fs")

fs.appendFile("./avatar/a.txt","\nhello world",err=>{
    console.log(err)
})