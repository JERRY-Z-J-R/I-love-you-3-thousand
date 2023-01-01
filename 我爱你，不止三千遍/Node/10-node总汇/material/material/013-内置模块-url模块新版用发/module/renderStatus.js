/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
function renderStatus(url){
    var arr = ["/home","/list","/api/home","/api/list"]
    return arr.includes(url)?200:404
}


exports.renderStatus = renderStatus