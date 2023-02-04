/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
function test(){
    console.log("test-aaa")
}
function upper(str){
    return str.substring(0,1).toUpperCase()+str.substring(1)
}

// module.exports = {
//     test,
//     upper
// }

function _init(){
    console.log("init")
}

exports.test  =test
exports.upper  =upper