/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const fs =require("fs")

try {
    fs.mkdirSync("./avatar")

} catch (error) {
    console.log("11",error)    
}
//阻塞后面代码执行