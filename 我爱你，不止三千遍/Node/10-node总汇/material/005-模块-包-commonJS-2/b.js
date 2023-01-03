/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */

var moduleA = require("./a")
function test(){
    console.log("test-bbb")
}

console.log(moduleA.upper("xiaoming"))

module.exports = test