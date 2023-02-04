/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
module.exports = function(...rest){
    var sum = 0;

    for(let m of rest){
        sum+=m
    }
    return sum 
}