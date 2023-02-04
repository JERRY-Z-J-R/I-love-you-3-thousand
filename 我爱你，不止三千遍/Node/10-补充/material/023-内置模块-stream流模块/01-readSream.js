/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs = require("fs")

const rs = fs.createReadStream("./1.txt","utf-8")

rs.on("data",(chunk)=>{
    console.log("chunk-",chunk)
})

rs.on("end",()=>{
    console.log("end")
})

rs.on("error",(err)=>{
    console.log(err)
})